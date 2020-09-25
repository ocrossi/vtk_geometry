import macro from 'vtk.js/Sources/macro';
import vtkPolyData from 'vtk.js/Sources/Common/DataModel/PolyData';
import vtkMatrixBuilder from 'vtk.js/Sources/Common/Core/MatrixBuilder';

// ----------------------------------------------------------------------------
// vtk6pointsArrowHead methods
// ----------------------------------------------------------------------------

function vtk6pointsArrowHead(publicAPI, model) {
  // Set our classname
  model.classHierarchy.push('vtk6pointsArrowHead');

  publicAPI.requestData = (inData, outData) => {
    const dataset = vtkPolyData.newInstance();

    const points = new Float32Array(6 * 3);
    const edges = new Uint32Array(8);
    edges[0] = 7;
    edges[7] = 0;

    points[0] = (model.width / 2) * -1 - model.thickness;
    points[1] = model.height / 4;
    points[2] = 0.0;

    points[3] = 0.0;
    points[4] = model.height * 0.9 + model.thickness;
    points[5] = 0.0;

    points[6] = model.width / 2 + model.thickness;
    points[7] = model.height / 4;
    points[8] = 0.0;

    points[9] = model.width / 3;
    points[10] = model.height * 0.1 - model.thickness;
    points[11] = 0.0;
    
    points[12] = 0.0;
    points[13] = model.height * 0.5 - model.thickness;
    points[14] = 0.0;
    
    points[15] = (model.width / 3) * -1;
    points[16] = model.height * 0.1 - model.thickness;
    points[17] = 0.0;
    

		edges[1] = 0;
    edges[2] = 1;
    edges[3] = 2;
		edges[4] = 3;
		edges[5] = 4;
		edges[6] = 5;

    vtkMatrixBuilder
      .buildFromRadian()
      .translate(...model.center)
      .rotateFromDirections([0, 1, 0], model.direction)
      .apply(points);

    dataset.getPoints().setData(points, 3);
    dataset.getPolys().setData(edges, 1);

    outData[0] = dataset;
  };
}

// ----------------------------------------------------------------------------
// Object factory
// ----------------------------------------------------------------------------

const DEFAULT_VALUES = {
  height: 1.0,
  width: 1.0,
	thickness: 0,
  center: [0, 0, 0],
  direction: [0.0, 1.0, 0.0],
  pointType: 'Float32Array',
};

// ----------------------------------------------------------------------------

export function extend(publicAPI, model, initialValues = {}) {
  Object.assign(model, DEFAULT_VALUES, initialValues);

  // Build VTK API
	console.log('salut bg1');
  macro.obj(publicAPI, model);
  macro.setGet(publicAPI, model, ['height', 'width', 'thickness']);
  macro.setGetArray(publicAPI, model, ['center', 'direction'], 3);
  macro.algo(publicAPI, model, 0, 1);

  vtk6pointsArrowHead(publicAPI, model);
}

// ----------------------------------------------------------------------------

export const newInstance = macro.newInstance(extend, 'vtk6pointsArrowHead');

// ----------------------------------------------------------------------------

export default { newInstance, extend };
