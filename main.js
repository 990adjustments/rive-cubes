import './style.css'
import { setupCubes } from './rivesetup.js'

document.querySelector('#app').innerHTML = `
<div class="logo"><a href="https://990adjustments.com/" target="_blank" rel="noopener noreferrer"><img src="/assets/logo01.png" alt="logo" class="retina"></a></div>
<div>
    <h1>Rive Cubes</h1>
</div>

<canvas id="canvas" width="1920" height="1080"></canvas>
`
setupCubes()
