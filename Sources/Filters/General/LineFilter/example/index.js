import vtkFullScreenRenderWindow from 'vtk.js/Sources/Rendering/Misc/FullScreenRenderWindow';
import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
import vtkLineFilter from 'vtk.js/Sources/Filters/General/LineFilter';
import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';

import vtkStar from './star';

// ----------------------------------------------------------------------------
// Standard rendering code setup
// ----------------------------------------------------------------------------

const fullScreenRenderer = vtkFullScreenRenderWindow.newInstance({
  background: [0, 0, 0],
});
const renderer = fullScreenRenderer.getRenderer();
const renderWindow = fullScreenRenderer.getRenderWindow();

// ----------------------------------------------------------------------------
// Example code
// ----------------------------------------------------------------------------

const lineSource = vtkStar.newInstance();
const lineFilter = vtkLineFilter.newInstance();
const mapper = vtkMapper.newInstance();
const actor = vtkActor.newInstance();

lineFilter.setInputConnection(lineSource.getOutputPort());
mapper.setInputConnection(lineFilter.getOutputPort());
actor.setMapper(mapper);

renderer.addActor(actor);
renderer.resetCamera();
renderWindow.render();
