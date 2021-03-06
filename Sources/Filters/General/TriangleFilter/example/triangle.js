import macro from 'vtk.js/Sources/macro';
import vtkPolyData from 'vtk.js/Sources/Common/DataModel/PolyData';
import vtkMatrixBuilder from 'vtk.js/Sources/Common/Core/MatrixBuilder';

// ----------------------------------------------------------------------------
// vtkTriangleSource methods
// ----------------------------------------------------------------------------

function vtkTriangleSource(publicAPI, model) {
  // Set our classname
  model.classHierarchy.push('vtkTriangleSource');

  publicAPI.requestData = (inData, outData) => {
    const dataset = vtkPolyData.newInstance();

    const points = new Float32Array(3 * 3);
    const edges = new Uint32Array(5);
    edges[0] = 4;
    edges[4] = 0;

    points[0] = (model.width / 2) * -1;
    points[1] = 0.0;
    points[2] = 0.0;

    points[3] = 0.0;
    points[4] = model.height;
    points[5] = 0.0;

    points[6] = model.width / 2;
    points[7] = 0.0;
    points[8] = 0.0;

    edges[1] = 0;
    edges[2] = 1;
    edges[3] = 2;

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
  center: [0, 0, 0],
  direction: [0.0, 1.0, 0.0],
  pointType: 'Float32Array',
};

// ----------------------------------------------------------------------------

export function extend(publicAPI, model, initialValues = {}) {
  Object.assign(model, DEFAULT_VALUES, initialValues);

  // Build VTK API
  macro.obj(publicAPI, model);
  macro.setGet(publicAPI, model, ['height', 'width']);
  macro.setGetArray(publicAPI, model, ['center', 'direction'], 3);
  macro.algo(publicAPI, model, 0, 1);

  vtkTriangleSource(publicAPI, model);
}

// ----------------------------------------------------------------------------

export const newInstance = macro.newInstance(extend, 'vtkTriangleSource');

// ----------------------------------------------------------------------------

export default { newInstance, extend };
