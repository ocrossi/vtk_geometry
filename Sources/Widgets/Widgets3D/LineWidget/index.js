import Constants from 'vtk.js/Sources/Widgets/Widgets3D/LineWidget/Constants';
import { distance2BetweenPoints } from 'vtk.js/Sources/Common/Core/Math';
import macro from 'vtk.js/Sources/macro';
import stateGenerator from 'vtk.js/Sources/Widgets/Widgets3D/LineWidget/state';
import vtkAbstractWidgetFactory from 'vtk.js/Sources/Widgets/Core/AbstractWidgetFactory';
import vtkArrowHandleRepresentation from 'vtk.js/Sources/Widgets/Representations/ArrowHandleRepresentation';
import vtkPlanePointManipulator from 'vtk.js/Sources/Widgets/Manipulators/PlaneManipulator';
import vtkSphereHandleRepresentation from 'vtk.js/Sources/Widgets/Representations/SphereHandleRepresentation';
import vtkCubeHandleRepresentation from 'vtk.js/Sources/Widgets/Representations/CubeHandleRepresentation';
import vtkConeHandleRepresentation from 'vtk.js/Sources/Widgets/Representations/ConeHandleRepresentation';
import vtkSVGCustomLandmarkRepresentation from 'vtk.js/Sources/Widgets/SVG/SVGCustomLandmarkRepresentation';
import vtkPolyLineRepresentation from 'vtk.js/Sources/Widgets/Representations/PolyLineRepresentation';
import widgetBehavior from 'vtk.js/Sources/Widgets/Widgets3D/LineWidget/behavior';
import { ViewTypes } from 'vtk.js/Sources/Widgets/Core/WidgetManager/Constants';
// ----------------------------------------------------------------------------
// Factory
// ----------------------------------------------------------------------------

const {
  handleRepresentationType,
  handleRepresentation,
  shapeToRepresentation,
} = Constants;

function vtkLineWidget(publicAPI, model) {
  model.classHierarchy.push('vtkLineWidget');

  // --- Widget Requirement ---------------------------------------------------

  // custom handles set in default values
  shapeToRepresentation[
    handleRepresentationType.SPHERE
  ] = vtkSphereHandleRepresentation;
  shapeToRepresentation[
    handleRepresentationType.CUBE
  ] = vtkCubeHandleRepresentation;
  shapeToRepresentation[
    handleRepresentationType.CONE
  ] = vtkConeHandleRepresentation;
  shapeToRepresentation[
    handleRepresentationType.ARROWHEAD3
  ] = vtkArrowHandleRepresentation;
  shapeToRepresentation[
    handleRepresentationType.ARROWHEAD4
  ] = vtkArrowHandleRepresentation;
  shapeToRepresentation[
    handleRepresentationType.ARROWHEAD6
  ] = vtkArrowHandleRepresentation;

  function detectHandleShape() {
    handleRepresentation[0] = shapeToRepresentation[model.shapeHandle1];
    if (!handleRepresentation[0]) {
      handleRepresentation[0] = vtkSphereHandleRepresentation;
    }
    handleRepresentation[1] = shapeToRepresentation[model.shapeHandle2];
    if (!handleRepresentation[1]) {
      handleRepresentation[1] = vtkSphereHandleRepresentation;
    }
    handleRepresentation[2] = vtkSVGCustomLandmarkRepresentation;
  }

  model.methodsToLink = [
    'activeScaleFactor',
    'activeColor',
    'useActiveColor',
    'glyphResolution',
    'defaultScale',
  ];
  model.behavior = widgetBehavior;
  model.widgetState = stateGenerator();
  detectHandleShape();

  publicAPI.getRepresentationsForViewType = (viewType) => {
    switch (viewType) {
      case ViewTypes.DEFAULT:
      case ViewTypes.GEOMETRY:
      case ViewTypes.SLICE:
      case ViewTypes.VOLUME:
      default:
        return [
          {
            builder: handleRepresentation[0],
            labels: ['handle1'],
            initialValues: {
              //scaleInPixels: true, // for scaling handles, optionnal
              handleType: model.shapeHandle1, // to detect arrow type in ArrowHandleRepresentation, mandatory
            },
          },
          {
            builder: handleRepresentation[1],
            labels: ['handle2'],
            initialValues: {
              //scaleInPixels: true, // for scaling handles, optionnal
              handleType: model.shapeHandle2, // to detect arrow type in ArrowHandleRepresentation, mandatory
            },
          },
          { builder: handleRepresentation[2], labels: ['text'] },
          {
            builder: vtkPolyLineRepresentation,
            labels: ['handle1', 'handle2', 'moveHandle'],
            initialValues: { scaleInPixels: true },
          },
        ];
    }
  };

  // --- Public methods -------------------------------------------------------

  publicAPI.getDistance = () => {
    const nbHandles =
      model.widgetState.getHandle1List().length +
      model.widgetState.getHandle2List().length;
    if (nbHandles !== 2) {
      return 0;
    }
    return Math.sqrt(
      distance2BetweenPoints(
        model.widgetState.getHandle1List()[0].getOrigin(),
        model.widgetState.getHandle2List()[0].getOrigin()
      )
    );
  };

  // --------------------------------------------------------------------------
  // initialization
  // --------------------------------------------------------------------------

  model.widgetState.onBoundsChange((bounds) => {
    const center = [
      (bounds[0] + bounds[1]) * 0.5,
      (bounds[2] + bounds[3]) * 0.5,
      (bounds[4] + bounds[5]) * 0.5,
    ];
    model.widgetState.getMoveHandle().setOrigin(center);
  });

  // Default manipulator
  model.manipulator = vtkPlanePointManipulator.newInstance();
}

// ----------------------------------------------------------------------------

const DEFAULT_VALUES = {
  shapeHandle1: handleRepresentationType.ARROWHEAD4,
  shapeHandle2: handleRepresentationType.ARROWHEAD6,
  textInput: 'DEFAULT_VALUES textInput',
  offset: 0.1,
  offsetDir: 1,
  lineDir: 0.9,
};

// ----------------------------------------------------------------------------

export function extend(publicAPI, model, initialValues = {}) {
  Object.assign(model, DEFAULT_VALUES, initialValues);

  vtkAbstractWidgetFactory.extend(publicAPI, model, initialValues);
  macro.setGet(publicAPI, model, [
    'manipulator',
    'shapeHandle1',
    'shapeHandle2',
    'textInput',
  ]);
  vtkLineWidget(publicAPI, model);
}

// ----------------------------------------------------------------------------

export const newInstance = macro.newInstance(extend, 'vtkLineWidget');

// ----------------------------------------------------------------------------

export default { newInstance, extend };
