import { createProgramInfo, drawBufferInfo, m4, setBuffersAndAttributes, setUniforms } from '../../lib/twgl-full.js';

/**
 * Base class for creating planet-type objects
 */
class PlanetObject {
    constructor(gl, parent = null) {
        if (new.target === PlanetObject) {
            throw new Error('PlanetObject is an abstract class and cannot be instantiated directly.');
        }

        this.gl = gl;
        this.parent = parent;
        this.programInfo = createProgramInfo(gl, [this.constructor.vs, this.constructor.fs]);
        this.uniforms = {
            u_transform: m4.identity(), // Default transformation
        };
    }

    // Updates uniforms, including inheritance from the parent object
    update() {
        if (this.parent) {
            this.uniforms.u_transform = m4.multiply(this.parent.uniforms.u_transform, this.uniforms.u_transform);
        }
    }

    // Render the planet
    render() {
        const { gl, programInfo, bufferInfo, uniforms } = this;

        if (!programInfo || !bufferInfo) {
            throw new Error('Program or BufferInfo is missing!');
        }

        gl.useProgram(programInfo.program);
        setBuffersAndAttributes(gl, programInfo, bufferInfo);
        setUniforms(programInfo, uniforms);
        drawBuffer(gl, bufferInfo);
    }
}

export default PlanetObject;
