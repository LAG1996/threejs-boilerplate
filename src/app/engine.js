/**
* @author Luis Angel Garcia
*/

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { SceneManager } from './scene-manager.js';

/**
 * This class attaches the renderer dom element to the DOM and handles updating the screen.
*/
export default class Engine {
	/**
	 * @param {Node} containerEl
	 * The HTML element to append the renderer to.
	 */
	constructor(containerEl = null) {
		if (!containerEl) {
			containerEl = document.createElement('div');
			document.body.append(containerEl);
		}
		
		this._containerClassName = `engine-container.${new Date().getTime()}`;
		containerEl.setAttribute('class', this._containerClassName);
		containerEl.style.height = '100vh';
		containerEl.style.width = '100vw';

		this._container = containerEl;

		const containerBB = containerEl.getBoundingClientRect();
		this._sceneManager = new SceneManager({
			fov: 45,
			aspect: (containerBB.width / containerBB.height),
			near: 1,
			far: 10000,
			defaultPosition: {
				x: 400, y: 200, z: 0,
			},
		});

		this._container.appendChild(this._sceneManager.RENDERER.domElement);
		this._orbitControls = new OrbitControls(this._sceneManager.CAMERA, this._sceneManager.RENDERER.domElement);
		this._orbitControls.enableDamping = true;

		this._lastDrawCall = new Date().getTime();
		this._update = (delta) => {};
		this._runUpdate = true;
		requestAnimationFrame(this._updateRoutine.bind(this));
	}

	/**
	 *  @param {(number) => void} func
	 *  Any function that accepts a number
	 * 
	 * 	@description 
	 *  Sets func as the update function to be called before the scene is updated every frame.
	 */
	set Update(func) {
		this._update = func;
	}

	/**
	 * 
	 * @param {any} obj
	 * A single or array of THREE Object3D
	 * 
	 * @description
	 * Adds the object(s) to the scene model.
	 */
	addObject(obj) {
		this._sceneManager.addToScene(obj);
	}
	
	/**
	 * @param {any} obj
	 * A single or array of THREE Object3D
	 * 
	 * @description
	 * Removes the object(s) from the scene model.
	 */
	removeObject(obj) {
		this._sceneManager.removeFromScene(obj);
	}

	destruct() {
		this._runUpdate = false;
		this._sceneManager.RENDERER.domElement.remove();
		delete this;
	}

	/**
	 * @description
	 * Calls the update function with the time spent between each frame as the parameter.
	 * Updates the scene.
	 */
	_updateRoutine() {
		if (!this._runUpdate) { return; }
		const newDrawCall = new Date().getTime();
		const dt = newDrawCall - this._lastDrawCall;
		this._lastDrawCall = newDrawCall;

		this._update(dt);
		this._sceneManager.draw(this._container.getBoundingClientRect());

		requestAnimationFrame(this._updateRoutine.bind(this));
	}
}
