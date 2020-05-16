import{V as e,M as t,T as n,Q as a,S as o,E as i,a as s,b as r,P as c,W as u}from"./three.min.js";var m=function(i,r){var c,u,m,h,l;void 0===r&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),r===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=i,this.domElement=r,this.enabled=!0,this.target=new e,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!1,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={LEFT:t.ROTATE,MIDDLE:t.DOLLY,RIGHT:t.PAN},this.touches={ONE:n.ROTATE,TWO:n.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return O.phi},this.getAzimuthalAngle=function(){return O.theta},this.saveState=function(){d.target0.copy(d.target),d.position0.copy(d.object.position),d.zoom0=d.object.zoom},this.reset=function(){d.target.copy(d.target0),d.object.position.copy(d.position0),d.object.zoom=d.zoom0,d.object.updateProjectionMatrix(),d.dispatchEvent(p),d.update(),f=g.NONE},this.update=(c=new e,u=(new a).setFromUnitVectors(i.up,new e(0,1,0)),m=u.clone().inverse(),h=new e,l=new a,function(){var e=d.object.position;return c.copy(e).sub(d.target),c.applyQuaternion(u),O.setFromVector3(c),d.autoRotate&&f===g.NONE&&x(2*Math.PI/60/60*d.autoRotateSpeed),d.enableDamping?(O.theta+=T.theta*d.dampingFactor,O.phi+=T.phi*d.dampingFactor):(O.theta+=T.theta,O.phi+=T.phi),O.theta=Math.max(d.minAzimuthAngle,Math.min(d.maxAzimuthAngle,O.theta)),O.phi=Math.max(d.minPolarAngle,Math.min(d.maxPolarAngle,O.phi)),O.makeSafe(),O.radius*=y,O.radius=Math.max(d.minDistance,Math.min(d.maxDistance,O.radius)),!0===d.enableDamping?d.target.addScaledVector(P,d.dampingFactor):d.target.add(P),c.setFromSpherical(O),c.applyQuaternion(m),e.copy(d.target).add(c),d.object.lookAt(d.target),!0===d.enableDamping?(T.theta*=1-d.dampingFactor,T.phi*=1-d.dampingFactor,P.multiplyScalar(1-d.dampingFactor)):(T.set(0,0,0),P.set(0,0,0)),y=1,!!(w||h.distanceToSquared(d.object.position)>v||8*(1-l.dot(d.object.quaternion))>v)&&(d.dispatchEvent(p),h.copy(d.object.position),l.copy(d.object.quaternion),w=!1,!0)}),this.dispose=function(){d.domElement.removeEventListener("contextmenu",ie,!1),d.domElement.removeEventListener("mousedown",Q,!1),d.domElement.removeEventListener("wheel",ee,!1),d.domElement.removeEventListener("touchstart",ne,!1),d.domElement.removeEventListener("touchend",oe,!1),d.domElement.removeEventListener("touchmove",ae,!1),document.removeEventListener("mousemove",J,!1),document.removeEventListener("mouseup",$,!1),d.domElement.removeEventListener("keydown",te,!1)};var d=this,p={type:"change"},b={type:"start"},E={type:"end"},g={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},f=g.NONE,v=1e-6,O=new o,T=new o,y=1,P=new e,w=!1,A=new s,R=new s,_=new s,L=new s,N=new s,j=new s,D=new s,M=new s,k=new s;function Y(){return Math.pow(.95,d.zoomSpeed)}function x(e){T.theta-=e}function S(e){T.phi-=e}var C,H=(C=new e,function(e,t){C.setFromMatrixColumn(t,0),C.multiplyScalar(-e),P.add(C)}),z=function(){var t=new e;return function(e,n){!0===d.screenSpacePanning?t.setFromMatrixColumn(n,1):(t.setFromMatrixColumn(n,0),t.crossVectors(d.object.up,t)),t.multiplyScalar(e),P.add(t)}}(),F=function(){var t=new e;return function(e,n){var a=d.domElement;if(d.object.isPerspectiveCamera){var o=d.object.position;t.copy(o).sub(d.target);var i=t.length();i*=Math.tan(d.object.fov/2*Math.PI/180),H(2*e*i/a.clientHeight,d.object.matrix),z(2*n*i/a.clientHeight,d.object.matrix)}else d.object.isOrthographicCamera?(H(e*(d.object.right-d.object.left)/d.object.zoom/a.clientWidth,d.object.matrix),z(n*(d.object.top-d.object.bottom)/d.object.zoom/a.clientHeight,d.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),d.enablePan=!1)}}();function X(e){d.object.isPerspectiveCamera?y/=e:d.object.isOrthographicCamera?(d.object.zoom=Math.max(d.minZoom,Math.min(d.maxZoom,d.object.zoom*e)),d.object.updateProjectionMatrix(),w=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),d.enableZoom=!1)}function Z(e){d.object.isPerspectiveCamera?y*=e:d.object.isOrthographicCamera?(d.object.zoom=Math.max(d.minZoom,Math.min(d.maxZoom,d.object.zoom/e)),d.object.updateProjectionMatrix(),w=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),d.enableZoom=!1)}function I(e){A.set(e.clientX,e.clientY)}function U(e){L.set(e.clientX,e.clientY)}function V(e){if(1==e.touches.length)A.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);A.set(t,n)}}function B(e){if(1==e.touches.length)L.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);L.set(t,n)}}function G(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,a=Math.sqrt(t*t+n*n);D.set(0,a)}function K(e){if(1==e.touches.length)R.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);R.set(t,n)}_.subVectors(R,A).multiplyScalar(d.rotateSpeed);var a=d.domElement;x(2*Math.PI*_.x/a.clientHeight),S(2*Math.PI*_.y/a.clientHeight),A.copy(R)}function W(e){if(1==e.touches.length)N.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);N.set(t,n)}j.subVectors(N,L).multiplyScalar(d.panSpeed),F(j.x,j.y),L.copy(N)}function q(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,a=Math.sqrt(t*t+n*n);M.set(0,a),k.set(0,Math.pow(M.y/D.y,d.zoomSpeed)),X(k.y),D.copy(M)}function Q(e){if(!1!==d.enabled){var n;switch(e.preventDefault(),d.domElement.focus?d.domElement.focus():window.focus(),e.button){case 0:n=d.mouseButtons.LEFT;break;case 1:n=d.mouseButtons.MIDDLE;break;case 2:n=d.mouseButtons.RIGHT;break;default:n=-1}switch(n){case t.DOLLY:if(!1===d.enableZoom)return;!function(e){D.set(e.clientX,e.clientY)}(e),f=g.DOLLY;break;case t.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===d.enablePan)return;U(e),f=g.PAN}else{if(!1===d.enableRotate)return;I(e),f=g.ROTATE}break;case t.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===d.enableRotate)return;I(e),f=g.ROTATE}else{if(!1===d.enablePan)return;U(e),f=g.PAN}break;default:f=g.NONE}f!==g.NONE&&(document.addEventListener("mousemove",J,!1),document.addEventListener("mouseup",$,!1),d.dispatchEvent(b))}}function J(e){if(!1!==d.enabled)switch(e.preventDefault(),f){case g.ROTATE:if(!1===d.enableRotate)return;!function(e){R.set(e.clientX,e.clientY),_.subVectors(R,A).multiplyScalar(d.rotateSpeed);var t=d.domElement;x(2*Math.PI*_.x/t.clientHeight),S(2*Math.PI*_.y/t.clientHeight),A.copy(R),d.update()}(e);break;case g.DOLLY:if(!1===d.enableZoom)return;!function(e){M.set(e.clientX,e.clientY),k.subVectors(M,D),k.y>0?X(Y()):k.y<0&&Z(Y()),D.copy(M),d.update()}(e);break;case g.PAN:if(!1===d.enablePan)return;!function(e){N.set(e.clientX,e.clientY),j.subVectors(N,L).multiplyScalar(d.panSpeed),F(j.x,j.y),L.copy(N),d.update()}(e)}}function $(e){!1!==d.enabled&&(document.removeEventListener("mousemove",J,!1),document.removeEventListener("mouseup",$,!1),d.dispatchEvent(E),f=g.NONE)}function ee(e){!1===d.enabled||!1===d.enableZoom||f!==g.NONE&&f!==g.ROTATE||(e.preventDefault(),e.stopPropagation(),d.dispatchEvent(b),function(e){e.deltaY<0?Z(Y()):e.deltaY>0&&X(Y()),d.update()}(e),d.dispatchEvent(E))}function te(e){!1!==d.enabled&&!1!==d.enableKeys&&!1!==d.enablePan&&function(e){var t=!1;switch(e.keyCode){case d.keys.UP:F(0,d.keyPanSpeed),t=!0;break;case d.keys.BOTTOM:F(0,-d.keyPanSpeed),t=!0;break;case d.keys.LEFT:F(d.keyPanSpeed,0),t=!0;break;case d.keys.RIGHT:F(-d.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),d.update())}(e)}function ne(e){if(!1!==d.enabled){switch(e.preventDefault(),e.touches.length){case 1:switch(d.touches.ONE){case n.ROTATE:if(!1===d.enableRotate)return;V(e),f=g.TOUCH_ROTATE;break;case n.PAN:if(!1===d.enablePan)return;B(e),f=g.TOUCH_PAN;break;default:f=g.NONE}break;case 2:switch(d.touches.TWO){case n.DOLLY_PAN:if(!1===d.enableZoom&&!1===d.enablePan)return;!function(e){d.enableZoom&&G(e),d.enablePan&&B(e)}(e),f=g.TOUCH_DOLLY_PAN;break;case n.DOLLY_ROTATE:if(!1===d.enableZoom&&!1===d.enableRotate)return;!function(e){d.enableZoom&&G(e),d.enableRotate&&V(e)}(e),f=g.TOUCH_DOLLY_ROTATE;break;default:f=g.NONE}break;default:f=g.NONE}f!==g.NONE&&d.dispatchEvent(b)}}function ae(e){if(!1!==d.enabled)switch(e.preventDefault(),e.stopPropagation(),f){case g.TOUCH_ROTATE:if(!1===d.enableRotate)return;K(e),d.update();break;case g.TOUCH_PAN:if(!1===d.enablePan)return;W(e),d.update();break;case g.TOUCH_DOLLY_PAN:if(!1===d.enableZoom&&!1===d.enablePan)return;!function(e){d.enableZoom&&q(e),d.enablePan&&W(e)}(e),d.update();break;case g.TOUCH_DOLLY_ROTATE:if(!1===d.enableZoom&&!1===d.enableRotate)return;!function(e){d.enableZoom&&q(e),d.enableRotate&&K(e)}(e),d.update();break;default:f=g.NONE}}function oe(e){!1!==d.enabled&&(d.dispatchEvent(E),f=g.NONE)}function ie(e){!1!==d.enabled&&e.preventDefault()}d.domElement.addEventListener("contextmenu",ie,!1),d.domElement.addEventListener("mousedown",Q,!1),d.domElement.addEventListener("wheel",ee,!1),d.domElement.addEventListener("touchstart",ne,!1),d.domElement.addEventListener("touchend",oe,!1),d.domElement.addEventListener("touchmove",ae,!1),d.domElement.addEventListener("keydown",te,!1),-1===d.domElement.tabIndex&&(d.domElement.tabIndex=0),this.update()};(m.prototype=Object.create(i.prototype)).constructor=m;var h=function(e,a){m.call(this,e,a),this.mouseButtons.LEFT=t.PAN,this.mouseButtons.RIGHT=t.ROTATE,this.touches.ONE=n.PAN,this.touches.TWO=n.DOLLY_ROTATE};(h.prototype=Object.create(i.prototype)).constructor=h;class l{get CAMERA(){return this._camera}get RENDERER(){return this._renderer}constructor(e){this._scene=new r,this._camera=new c(e.fov,e.aspect,e.near,e.far),this._renderer=new u,this._renderer.setPixelRatio(window.devicePixelRatio),this._orbitControls=new m(this._camera,this._renderer.domElement)}addToScene(e){Array.isArray(e)?this._scene.add(...e):this._scene.add(e)}removeFromScene(e){Array.isArray(e)?this._scene.remove(...e):this._scene.remove(e)}draw(){this._renderer.render(this._scene,this._camera)}}export default class{constructor(e=null){const t=e.getBoundingClientRect();this._runUpdate=!0,this._container=e,this._sceneManager=new l({fov:45,aspect:t.width/t.height,near:1,far:1e4,defaultPosition:{x:400,y:200,z:0}}),this._container.appendChild(this._sceneManager.RENDERER.domElement),this._lastDrawCall=(new Date).getTime(),this._update=e=>{},requestAnimationFrame(this._updateRoutine.bind(this))}set Update(e){this._update=e}addObject(e){this._sceneManager.addToScene(e)}removeObject(e){this._sceneManager.removeFromScene(e)}destruct(){this._runUpdate=!1,this._sceneManager.RENDERER.domElement.remove()}_updateRoutine(){if(this._runUpdate)return;const e=(new Date).getTime(),t=e-this._lastDrawCall;this._lastDrawCall=e,this._update(t),this._sceneManager.draw(),requestAnimationFrame(this._updateRoutine.bind(this))}}