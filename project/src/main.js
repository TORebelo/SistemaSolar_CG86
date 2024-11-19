import * as twgl from '../lib/twgl-full.module.js'; // Note: Ensure the `.module.js` file exists
import Astro from './Objs/astro.js'; // Ensure correct casing and `.js` extension



let initWebGL = () => {
    const canvas = document.querySelector("canvas");
    const gl = canvas.getContext("webgl");
    if (!gl) {
        throw new Error('webgl not supported');
    }

    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);

    return gl;
}



/**
 * Initializes the WebGL context, creates a astro object, and starts the render loop.
 * The render loop updates and renders the astro at each frame.
 */
let main = () => {
    let gl = initWebGL();
    let astro = new Astro(gl, 1, 24);
    let time = 0;

    let render = () => {
        time += 0.01;
        astro.update(time);
        astro.render(gl, time);
        requestAnimationFrame(render);
    }

    render();
}

