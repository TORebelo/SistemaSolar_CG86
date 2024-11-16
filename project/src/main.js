import * as twgl from '../lib/twgl-full'
import Astro from './Objs/astro'



let initwebgl = () => {
    const canvas = document.querySelector("canvas");
    const gl = canvas.getContext("webgl");
    if (!gl) {
        throw 'webgl not supported';
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
    let gl = initwebgl()
    let astro = new Astro(gl, 1, 24)
    let time = 0

    let render = () => {
        time += 0.01
        astro.update(time)
        astro.render(gl, time)
        requestAnimationFrame(render)
    }

    render()
}

