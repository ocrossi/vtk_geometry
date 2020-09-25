import Constants from 'vtk.js/Sources/Widgets/Widgets3D/LineWidget/Constants';
import macro from 'vtk.js/Sources/macro';

const MAX_POINTS = 2;

const { direction, handleBehavior, handleRepresentationType } = Constants;

export default function widgetBehavior(publicAPI, model) {
  model.classHierarchy.push('vtkLineWidgetProp');
  let isDragging = null;
  // --------------------------------------------------------------------------
  // Display 2D
  // --------------------------------------------------------------------------

  publicAPI.setDisplayCallback = (callback) =>
    model.representations[0].setDisplayCallback(callback);

  // --------------------------------------------------------------------------
  // Interactor events
  // --------------------------------------------------------------------------

  function ignoreKey(e) {
    return e.altKey || e.controlKey || e.shiftKey;
  }

  function updateHandleDirection(behavior, callData) {
    let bv = behavior;
    if (bv === handleBehavior.HANDLE1_ALONE) {
      const handle1Pos = model.widgetState.getHandle1List()[0].getOrigin();
      const WorldMousePos = publicAPI.computeWorldToDisplay(
        model.renderer,
        handle1Pos[0],
        handle1Pos[1],
        handle1Pos[2]
      );
      const mousePos = publicAPI.computeDisplayToWorld(
        model.renderer,
        callData.position.x,
        callData.position.y,
        WorldMousePos[2]
      );
      for (let i = 0; i < 3; i++) {
        direction[i] =
          model.widgetState.getHandle1List()[0].getOrigin()[i] - mousePos[i];
      }
      bv = 0;
    } else {
      const modifier = bv === 1 ? 1 : -1;
      bv -= 1;
      const handle1Pos = model.widgetState.getHandle1List()[0].getOrigin();
      const handle2Pos = model.widgetState.getHandle2List()[0].getOrigin();

      for (let i = 0; i < 3; i++)
        direction[i] = (handle1Pos[i] - handle2Pos[i]) * modifier;
    }
    model.representations[bv].getGlyph().setDirection(direction);
  }

	function checkHandleTypeForDirection() {
		if (
	    model.shapeHandle1 === handleRepresentationType.CONE ||
      model.shapeHandle1 === handleRepresentationType.ARROWHEAD3 ||
      model.shapeHandle1 === handleRepresentationType.ARROWHEAD4 ||
      model.shapeHandle1 === handleRepresentationType.ARROWHEAD6 ||
			model.shapeHandle2 === handleRepresentationType.CONE ||
      model.shapeHandle2 === handleRepresentationType.ARROWHEAD3 ||
      model.shapeHandle2 === handleRepresentationType.ARROWHEAD4 ||
      model.shapeHandle2 === handleRepresentationType.ARROWHEAD6
		)
			return 1;
		return 0;
	}
	 
	function setHandleDirection() {
    if (
      model.shapeHandle1 === handleRepresentationType.CONE ||
      model.shapeHandle1 === handleRepresentationType.ARROWHEAD3 ||
      model.shapeHandle1 === handleRepresentationType.ARROWHEAD4 ||
      model.shapeHandle1 === handleRepresentationType.ARROWHEAD6
    ) {
      updateHandleDirection(handleBehavior.HANDLE1);
    }
    if (
      model.shapeHandle2 === handleRepresentationType.CONE ||
      model.shapeHandle2 === handleRepresentationType.ARROWHEAD3 ||
      model.shapeHandle2 === handleRepresentationType.ARROWHEAD4 ||
      model.shapeHandle2 === handleRepresentationType.ARROWHEAD6
    ) {
      updateHandleDirection(handleBehavior.HANDLE2);
    }
  }

  function calculateTextPosition() {
    const vector = [0, 0, 0];
    const handle1WorldPos = model.widgetState.getHandle1List()[0].getOrigin();
    const handle2WorldPos = model.widgetState.getHandle2List()[0].getOrigin();
    const os = model.offsetDir === 0 ? 0 : model.offset;
    if (model.lineDir < 0 || model.lineDir > 1) {
      console.log(
        'Line position should always be between 0 and 1 to remain on the line'
      );
    }
    const lineDir = 1 - model.lineDir;
    if (model.offsetDir !== 0 && model.offsetDir !== 1 && model.offsetDir !== 2)
      console.log('wrong offset value');
    for (let i = 0; i < 3; i++) {
      vector[i] =
        (handle1WorldPos[i] - handle2WorldPos[i]) * lineDir +
        model.widgetState.getHandle2List()[0].getOrigin()[i];
    }
    vector[0] += os;
    return vector;
  }

  function updateTextPosition() {
    const obj = model.widgetState.getTextList()[0];
    obj.setOrigin(
      calculateTextPosition(model.offset, model.offsetDir, model.lineDir)
    );
  }

  // --------------------------------------------------------------------------
  // Left press: Select handle to drag
  // --------------------------------------------------------------------------

  publicAPI.handleLeftButtonPress = (e) => {
    const nbHandle1 = model.widgetState.getHandle1List().length;
    const nbHandle2 = model.widgetState.getHandle2List().length;
    if (
      !model.activeState ||
      !model.activeState.getActive() ||
      !model.pickable ||
      ignoreKey(e)
    ) {
      return macro.VOID;
    }

    if (
      model.activeState === model.widgetState.getMoveHandle() &&
      nbHandle1 === 0
    ) {
      const moveHandle = model.widgetState.getMoveHandle();
      const newHandle = model.widgetState.addHandle1();
      newHandle.setOrigin(...moveHandle.getOrigin());
      newHandle.setColor(moveHandle.getColor());
      newHandle.setScale1(moveHandle.getScale1());
    } else if (
      model.activeState === model.widgetState.getMoveHandle() &&
      nbHandle1 === 1 &&
      nbHandle2 === 0
    ) {
      const moveHandle = model.widgetState.getMoveHandle();
      const newHandle = model.widgetState.addHandle2();
      newHandle.setOrigin(...moveHandle.getOrigin());
      newHandle.setColor(moveHandle.getColor());
      newHandle.setScale1(moveHandle.getScale1());
      setHandleDirection();
      const textHandle = model.widgetState.addText();
      textHandle.setText(model.textInput);
      textHandle.setOrigin(
        calculateTextPosition(model.offset, model.offsetDir, model.lineDir)
      );
    } else {
      isDragging = true;
      model.openGLRenderWindow.setCursor('grabbing');
      model.interactor.requestAnimation(publicAPI);
    }

    publicAPI.invokeStartInteractionEvent();
    return macro.EVENT_ABORT;
  };

  // --------------------------------------------------------------------------
  // Mouse move: Drag selected handle / Handle follow the mouse
  // --------------------------------------------------------------------------

  publicAPI.handleMouseMove = (callData) => {
    const nbHandles =
      model.widgetState.getHandle1List().length +
      model.widgetState.getHandle2List().length;
    if (model.hasFocus && nbHandles === MAX_POINTS) {
      publicAPI.loseFocus();
      return macro.VOID;
    }

    if (
      model.pickable &&
      model.manipulator &&
      model.activeState &&
      model.activeState.getActive() &&
      !ignoreKey(callData)
    ) {
      const worldCoords = model.manipulator.handleEvent(
        callData,
        model.openGLRenderWindow
      );

      if (
        model.activeState === model.widgetState.getMoveHandle() ||
        isDragging
      ) {
        model.activeState.setOrigin(worldCoords);
        publicAPI.invokeInteractionEvent();
        if (isDragging === true) {
          if (checkHandleTypeForDirection())
            setHandleDirection();
          updateTextPosition();
        } else if (
          nbHandles === 1 &&
          (model.shapeHandle1 === handleRepresentationType.CONE ||
            model.shapeHandle1 === handleRepresentationType.ARROWHEAD3 ||
            model.shapeHandle1 === handleRepresentationType.ARROWHEAD4 ||
            model.shapeHandle1 === handleRepresentationType.ARROWHEAD6)
        ) {
          updateHandleDirection(handleBehavior.HANDLE1_ALONE, callData);
        }

        return macro.EVENT_ABORT;
      }
    }
    return macro.VOID;
  };

  // --------------------------------------------------------------------------
  // Left release: Finish drag / Create new handle
  // --------------------------------------------------------------------------

  publicAPI.handleLeftButtonRelease = () => {
    if (isDragging && model.pickable) {
      model.openGLRenderWindow.setCursor('pointer');
      model.widgetState.deactivate();
      model.interactor.cancelAnimation(publicAPI);
      publicAPI.invokeEndInteractionEvent();
    } else if (model.activeState !== model.widgetState.getMoveHandle()) {
      model.widgetState.deactivate();
    }
    if (
      (model.hasFocus && !model.activeState) ||
      (model.activeState && !model.activeState.getActive())
    ) {
      publicAPI.invokeEndInteractionEvent();
      model.widgetManager.enablePicking();
      model.interactor.render();
    }
    isDragging = false;
  };

  // --------------------------------------------------------------------------
  // Focus API - modeHandle follow mouse when widget has focus
  // --------------------------------------------------------------------------

  publicAPI.grabFocus = () => {
    const nbHandles =
      model.widgetState.getHandle1List().length +
      model.widgetState.getHandle2List().length;
    if (!model.hasFocus && nbHandles < MAX_POINTS) {
      model.activeState = model.widgetState.getMoveHandle();
      model.activeState.activate();
      model.activeState.setVisible(true);
      model.interactor.requestAnimation(publicAPI);
      publicAPI.invokeStartInteractionEvent();
    }
    model.hasFocus = true;
  };

  // --------------------------------------------------------------------------

  publicAPI.loseFocus = () => {
    if (model.hasFocus) {
      model.interactor.cancelAnimation(publicAPI);
      publicAPI.invokeEndInteractionEvent();
    }
    model.widgetState.deactivate();
    model.widgetState.getMoveHandle().deactivate();
    model.widgetState.getMoveHandle().setVisible(false);
    model.activeState = null;
    model.hasFocus = false;
    model.widgetManager.enablePicking();
    model.interactor.render();
  };
}
