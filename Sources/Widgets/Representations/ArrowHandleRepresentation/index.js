import macro from 'vtk.js/Sources/macro';
import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
import vtkDataArray from 'vtk.js/Sources/Common/Core/DataArray';
import vtkGlyph3DMapper from 'vtk.js/Sources/Rendering/Core/Glyph3DMapper';
import vtkHandleRepresentation from 'vtk.js/Sources/Widgets/Representations/HandleRepresentation';
import vtkPixelSpaceCallbackMapper from 'vtk.js/Sources/Rendering/Core/PixelSpaceCallbackMapper';
import vtkPolyData from 'vtk.js/Sources/Common/DataModel/PolyData';
import vtkTriangleSource from 'vtk.js/Sources/Filters/Sources/ArrowHead2DSource/triangle';
import vtk4pointsArrowHeadSource from 'vtk.js/Sources/Filters/Sources/ArrowHead2DSource/4pointsArrowHead';
//import vtk6pointsArrowHeadSource from 'vtk.js/Sources/Filters/Sources/ArrowHead2DSource/6pointsArrowHead';
//import vtk6pointsArrowHeadSource from 'vtk.js/Sources/Filters/';
import vtkArrowHead2DSource from 'vtk.js/Sources/Filters/Sources/ArrowHead2DSource/';

import Constants from 'vtk.js/Sources/Widgets/Widgets3D/LineWidget/Constants';
import { ScalarMode } from 'vtk.js/Sources/Rendering/Core/Mapper/Constants';

const { handleRepresentationType } = Constants;

// ----------------------------------------------------------------------------
// vtkArrowHandleRepresentation methods
// ----------------------------------------------------------------------------

function vtkArrowHandleRepresentation(publicAPI, model) {
  // Set our className
  model.classHierarchy.push('vtkArrowHandleRepresentation');

  // --------------------------------------------------------------------------
  // Internal polydata dataset
  // --------------------------------------------------------------------------

  model.internalPolyData = vtkPolyData.newInstance({ mtime: 0 });
  model.internalArrays = {
    points: model.internalPolyData.getPoints(),
    scale: vtkDataArray.newInstance({
      name: 'scale',
      numberOfComponents: 1,
      empty: true,
    }),
    color: vtkDataArray.newInstance({
      name: 'color',
      numberOfComponents: 1,
      empty: true,
    }),
  };
  model.internalPolyData.getPointData().addArray(model.internalArrays.scale);
  model.internalPolyData.getPointData().addArray(model.internalArrays.color);

  function detectArrowHeadShape() {
    console.log(model.handleType);
    console.log(handleRepresentationType.ARROWHEAD6);
    console.log(publicAPI);
    switch (model.handleType) {
      case handleRepresentationType.ARROWHEAD3:
			{
				const initialValues = {shapeNb: 3};
				console.log('[1]');
        return vtkArrowHead2DSource.newInstance(initialValues);
			}
      case handleRepresentationType.ARROWHEAD4:
			{
				const initialValues = {shapeNb: 4};
				console.log('[2]');
        return vtkArrowHead2DSource.newInstance(initialValues);
			}
      case handleRepresentationType.ARROWHEAD6:
			{
				const initialValues = {shapeNb: 6};
				console.log('[3]');
        const tamere = vtkArrowHead2DSource.newInstance(initialValues);
				console.log("AOOOOAOAOOAOAOOOAOAOAOAOA");
				return tamere;
			}
      default:
			{
				const initialValues = {shapeNb: 3};
				console.log('[4]');
        return vtkArrowHead2DSource.newInstance(initialValues);
			}
    }
  }

  // --------------------------------------------------------------------------
  // Generic rendering pipeline
  // --------------------------------------------------------------------------

  model.displayMapper = vtkPixelSpaceCallbackMapper.newInstance();
  model.displayActor = vtkActor.newInstance();
  // model.displayActor.getProperty().setOpacity(0); // don't show in 3D
  model.displayActor.setMapper(model.displayMapper);
  model.displayMapper.setInputConnection(publicAPI.getOutputPort());
  publicAPI.addActor(model.displayActor);
  model.alwaysVisibleActors = [model.displayActor];

  model.mapper = vtkGlyph3DMapper.newInstance({
    scaleArray: 'scale',
    colorByArrayName: 'color',
    scalarMode: ScalarMode.USE_POINT_FIELD_DATA,
  });
  model.actor = vtkActor.newInstance();
	model.glyph = detectArrowHeadShape();
	console.log('MAAAAAAAAAAAAAAD');
  console.log(model.glyph);
  model.mapper.setInputConnection(publicAPI.getOutputPort(), 0);
  model.mapper.setInputConnection(model.glyph.getOutputPort(), 1);
  model.actor.setMapper(model.mapper);

  publicAPI.addActor(model.actor);

  // --------------------------------------------------------------------------

  publicAPI.setGlyphResolution = macro.chain(
    publicAPI.setGlyphResolution,
    (r) => model.glyph.setPhiResolution(r) && model.glyph.setThetaResolution(r)
  );

  // --------------------------------------------------------------------------

  function callbackProxy(coords) {
    if (model.displayCallback) {
      const filteredList = [];
      const states = publicAPI.getRepresentationStates();
      for (let i = 0; i < states.length; i++) {
        if (states[i].getActive()) {
          filteredList.push(coords[i]);
        }
      }
      if (filteredList.length) {
        model.displayCallback(filteredList);
        return;
      }
    }
    model.displayCallback();
  }

  publicAPI.setDisplayCallback = (callback) => {
    model.displayCallback = callback;
    model.displayMapper.setCallback(callback ? callbackProxy : null);
  };

  // --------------------------------------------------------------------------

  publicAPI.requestData = (inData, outData) => {
    const { points, scale, color } = model.internalArrays;
    const list = publicAPI.getRepresentationStates(inData[0]);
    const totalCount = list.length;

    if (color.getNumberOfValues() !== totalCount) {
      // Need to resize dataset
      points.setData(new Float32Array(3 * totalCount), 3);
      scale.setData(new Float32Array(totalCount));
      color.setData(new Float32Array(totalCount));
    }
    const typedArray = {
      points: points.getData(),
      scale: scale.getData(),
      color: color.getData(),
    };

    for (let i = 0; i < list.length; i++) {
      const state = list[i];
      const isActive = state.getActive();
      const scaleFactor = isActive ? model.activeScaleFactor : 1;

      const coord = state.getOrigin();
      typedArray.points[i * 3 + 0] = coord[0];
      typedArray.points[i * 3 + 1] = coord[1];
      typedArray.points[i * 3 + 2] = coord[2];

      typedArray.scale[i] =
        scaleFactor *
        (!state.isVisible || state.isVisible() ? 1 : 0) *
        (state.getScale1 ? state.getScale1() : model.defaultScale);

      if (publicAPI.getScaleInPixels()) {
        typedArray.scale[i] *= publicAPI.getPixelWorldHeightAtCoord(coord);
      }

      typedArray.color[i] =
        model.useActiveColor && isActive ? model.activeColor : state.getColor();
    }

    model.internalPolyData.modified();
    outData[0] = model.internalPolyData;
  };
}

// ----------------------------------------------------------------------------
// Object factory
// ----------------------------------------------------------------------------

const DEFAULT_VALUES = {
  defaultScale: 1,
};

// ----------------------------------------------------------------------------

export function extend(publicAPI, model, initialValues = {}) {
  Object.assign(model, DEFAULT_VALUES, initialValues);

  vtkHandleRepresentation.extend(publicAPI, model, initialValues);
  macro.get(publicAPI, model, ['glyph', 'mapper', 'actor']);

  // Object specific methods
  vtkArrowHandleRepresentation(publicAPI, model);
}

// ----------------------------------------------------------------------------

export const newInstance = macro.newInstance(
  extend,
  'vtkArrowHandleRepresentation'
);

// ----------------------------------------------------------------------------

export default { newInstance, extend };
