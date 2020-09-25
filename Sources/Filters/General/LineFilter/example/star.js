import macro from 'vtk.js/Sources/macro';
import vtkPolyData from 'vtk.js/Sources/Common/DataModel/PolyData';

// ----------------------------------------------------------------------------
// vtkGhostTriangle methods
// ----------------------------------------------------------------------------

function vtkGhostTriangle(publicAPI, model) {
  // Set our classname
  model.classHierarchy.push('vtkGhostTriangle');

  publicAPI.requestData = (inData, outData) => {
    const dataset = vtkPolyData.newInstance();

    const points = new Float32Array(3 * 3);
    points[0] = (model.height / 2) * -1;
    points[1] = 0.0;
    points[2] = 0.0;

    points[3] = 0.0;
    points[4] = model.height;
    points[5] = 0.0;

    points[6] = model.height / 2;
    points[7] = 0.0;
    points[8] = 0.0;

    dataset.getPoints().setData(points, 3);
    dataset.getLines().setData(Uint16Array.from([4, 0, 1, 2, 0]));

    outData[0] = dataset;
  };
}

// ----------------------------------------------------------------------------
// Object factory
// ----------------------------------------------------------------------------

const DEFAULT_VALUES = {
  height: 1.0,
  center: [0, 0, 0],
  direction: [0.0, 1.0, 0.0],
  pointType: 'Float32Array',
};

// ----------------------------------------------------------------------------

export function extend(publicAPI, model, initialValues = {}) {
  Object.assign(model, DEFAULT_VALUES, initialValues);

  // Build VTK API
  macro.obj(publicAPI, model);
  macro.algo(publicAPI, model, 0, 1);
  vtkGhostTriangle(publicAPI, model);
}

// ----------------------------------------------------------------------------

export const newInstance = macro.newInstance(extend, 'vtkGhostTriangle');

// ----------------------------------------------------------------------------

export default { newInstance, extend };
