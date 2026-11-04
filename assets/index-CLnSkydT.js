(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _c="170",fd=0,il=1,pd=2,Kh=1,qh=2,Yn=3,Dn=0,Xt=1,kt=2,Qn=0,ls=1,wt=2,sl=3,rl=4,md=5,Ai=100,gd=101,_d=102,vd=103,xd=104,yd=200,Md=201,Sd=202,wd=203,Ma=204,Sa=205,Td=206,bd=207,Ed=208,Ad=209,Rd=210,Cd=211,Pd=212,Id=213,Ld=214,wa=0,Ta=1,ba=2,fs=3,Ea=4,Aa=5,Ra=6,Ca=7,jh=0,Dd=1,Nd=2,mi=0,Zh=1,$h=2,Jh=3,vc=4,Ud=5,Qh=6,eu=7,ol="attached",Od="detached",tu=300,ps=301,ms=302,Pa=303,Ia=304,So=306,Qt=1e3,gn=1001,ir=1002,Zt=1003,nu=1004,Ks=1005,an=1006,so=1007,Zn=1008,ni=1009,iu=1010,su=1011,sr=1012,xc=1013,Ii=1014,En=1015,ei=1016,yc=1017,Mc=1018,gs=1020,ru=35902,ou=1021,au=1022,_n=1023,cu=1024,lu=1025,hs=1026,_s=1027,Sc=1028,wc=1029,hu=1030,Tc=1031,bc=1033,ro=33776,oo=33777,ao=33778,co=33779,La=35840,Da=35841,Na=35842,Ua=35843,Oa=36196,Fa=37492,ka=37496,Ba=37808,za=37809,Ha=37810,Va=37811,Ga=37812,Wa=37813,Xa=37814,Ya=37815,Ka=37816,qa=37817,ja=37818,Za=37819,$a=37820,Ja=37821,lo=36492,Qa=36494,ec=36495,uu=36283,tc=36284,nc=36285,ic=36286,du=2200,fu=2201,Fd=2202,rr=2300,or=2301,Po=2302,rs=2400,os=2401,fo=2402,Ec=2500,kd=2501,Bd=0,pu=1,sc=2,zd=3200,Hd=3201,mu=0,Vd=1,In="",At="srgb",$t="srgb-linear",wo="linear",lt="srgb",ki=7680,al=519,Gd=512,Wd=513,Xd=514,gu=515,Yd=516,Kd=517,qd=518,jd=519,rc=35044,yr=35048,cl="300 es",$n=2e3,po=2001;class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ll=1234567;const Zs=Math.PI/180,vs=180/Math.PI;function vn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[r&255]+zt[r>>8&255]+zt[r>>16&255]+zt[r>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function Lt(r,e,t){return Math.max(e,Math.min(t,r))}function Ac(r,e){return(r%e+e)%e}function Zd(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function $d(r,e,t){return r!==e?(t-r)/(e-r):0}function $s(r,e,t){return(1-t)*r+t*e}function Jd(r,e,t,n){return $s(r,e,1-Math.exp(-t*n))}function Qd(r,e=1){return e-Math.abs(Ac(r,e*2)-e)}function ef(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function tf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function nf(r,e){return r+Math.floor(Math.random()*(e-r+1))}function sf(r,e){return r+Math.random()*(e-r)}function rf(r){return r*(.5-Math.random())}function of(r){r!==void 0&&(ll=r);let e=ll+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function af(r){return r*Zs}function cf(r){return r*vs}function lf(r){return(r&r-1)===0&&r!==0}function hf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function uf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function df(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,c*u,c*d,a*l);break;case"YZY":r.set(c*d,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*d,a*h,a*l);break;case"XZX":r.set(a*h,c*g,c*f,a*l);break;case"YXY":r.set(c*f,a*h,c*g,a*l);break;case"ZYZ":r.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ht(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ri={DEG2RAD:Zs,RAD2DEG:vs,generateUUID:vn,clamp:Lt,euclideanModulo:Ac,mapLinear:Zd,inverseLerp:$d,lerp:$s,damp:Jd,pingpong:Qd,smoothstep:ef,smootherstep:tf,randInt:nf,randFloat:sf,randFloatSpread:rf,seededRandom:of,degToRad:af,radToDeg:cf,isPowerOfTwo:lf,ceilPowerOfTwo:hf,floorPowerOfTwo:uf,setQuaternionFromProperEuler:df,normalize:ht,denormalize:bn};class Q{constructor(e=0,t=0){Q.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,n,i,s,o,a,c,l){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],y=i[4],x=i[7],I=i[2],E=i[5],R=i[8];return s[0]=o*_+a*v+c*I,s[3]=o*m+a*y+c*E,s[6]=o*p+a*x+c*R,s[1]=l*_+h*v+u*I,s[4]=l*m+h*y+u*E,s[7]=l*p+h*x+u*R,s[2]=d*_+f*v+g*I,s[5]=d*m+f*y+g*E,s[8]=d*p+f*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*s,f=l*s-o*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Io.makeScale(e,t)),this}rotate(e){return this.premultiply(Io.makeRotation(-e)),this}translate(e,t){return this.premultiply(Io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Io=new ze;function _u(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ar(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ff(){const r=ar("canvas");return r.style.display="block",r}const hl={};function qs(r){r in hl||(hl[r]=!0,console.warn(r))}function pf(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function mf(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gf(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ke={enabled:!0,workingColorSpace:$t,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===lt&&(r.r=ti(r.r),r.g=ti(r.g),r.b=ti(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===lt&&(r.r=us(r.r),r.g=us(r.g),r.b=us(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===In?wo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function ti(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function us(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const ul=[.64,.33,.3,.6,.15,.06],dl=[.2126,.7152,.0722],fl=[.3127,.329],pl=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ml=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[$t]:{primaries:ul,whitePoint:fl,transfer:wo,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:dl,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:ul,whitePoint:fl,transfer:lt,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:dl,outputColorSpaceConfig:{drawingBufferColorSpace:At}}});let Bi;class _f{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bi===void 0&&(Bi=ar("canvas")),Bi.width=e.width,Bi.height=e.height;const n=Bi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ar("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ti(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vf=0;class vu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=vn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Lo(i[o].image)):s.push(Lo(i[o]))}else s=Lo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Lo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_f.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xf=0;class Dt extends Ui{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=gn,i=gn,s=an,o=Zn,a=_n,c=ni,l=Dt.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=vn(),this.name="",this.source=new vu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qt:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case ir:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qt:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case ir:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=tu;Dt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,i=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,x=(f+1)/2,I=(p+1)/2,E=(h+d)/4,R=(u+_)/4,C=(g+m)/4;return y>x&&y>I?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=E/n,s=R/n):x>I?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=E/i,s=C/i):I<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(I),n=R/s,i=C/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yf extends Ui{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Dt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new vu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends yf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xu extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mf extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ft{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const I=Math.sqrt(y),E=Math.atan2(I,p*v);m=Math.sin(m*E)/I,a=Math.sin(a*E)/I}const x=a*v;if(c=c*m+d*x,l=l*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),f=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,n=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Do.copy(this).projectOnVector(e),this.sub(Do)}reflect(e){return this.sub(Do.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Do=new b,gl=new Ft;class tn{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mn):Mn.fromBufferAttribute(s,o),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mr.copy(n.boundingBox)),Mr.applyMatrix4(e.matrixWorld),this.union(Mr)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),Sr.subVectors(this.max,Is),zi.subVectors(e.a,Is),Hi.subVectors(e.b,Is),Vi.subVectors(e.c,Is),ri.subVectors(Hi,zi),oi.subVectors(Vi,Hi),vi.subVectors(zi,Vi);let t=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-vi.z,vi.y,ri.z,0,-ri.x,oi.z,0,-oi.x,vi.z,0,-vi.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-vi.y,vi.x,0];return!No(t,zi,Hi,Vi,Sr)||(t=[1,0,0,0,1,0,0,0,1],!No(t,zi,Hi,Vi,Sr))?!1:(wr.crossVectors(ri,oi),t=[wr.x,wr.y,wr.z],No(t,zi,Hi,Vi,Sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new b,new b,new b,new b,new b,new b,new b,new b],Mn=new b,Mr=new tn,zi=new b,Hi=new b,Vi=new b,ri=new b,oi=new b,vi=new b,Is=new b,Sr=new b,wr=new b,xi=new b;function No(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){xi.fromArray(r,s);const a=i.x*Math.abs(xi.x)+i.y*Math.abs(xi.y)+i.z*Math.abs(xi.z),c=e.dot(xi),l=t.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Sf=new tn,Ls=new b,Uo=new b;class Nn{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);const t=Ls.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ls,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(Uo)),this.expandByPoint(Ls.copy(e.center).sub(Uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new b,Oo=new b,Tr=new b,ai=new b,Fo=new b,br=new b,ko=new b;class To{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Oo.copy(e).add(t).multiplyScalar(.5),Tr.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(Oo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Tr),a=ai.dot(this.direction),c=-ai.dot(Tr),l=ai.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Oo).addScaledVector(Tr,d),f}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),i=Hn.dot(Hn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,i,s){Fo.subVectors(t,e),br.subVectors(n,e),ko.crossVectors(Fo,br);let o=this.direction.dot(ko),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,e);const c=a*this.direction.dot(br.crossVectors(ai,br));if(c<0)return null;const l=a*this.direction.dot(Fo.cross(ai));if(l<0||c+l>o)return null;const h=-a*ai.dot(ko);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(e,t,n,i,s,o,a,c,l,h,u,d,f,g,_,m){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,h,u,d,f,g,_,m)}set(e,t,n,i,s,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Gi.setFromMatrixColumn(e,0).length(),s=1/Gi.setFromMatrixColumn(e,1).length(),o=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wf,e,Tf)}lookAt(e,t,n){const i=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ci.crossVectors(n,sn),ci.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ci.crossVectors(n,sn)),ci.normalize(),Er.crossVectors(sn,ci),i[0]=ci.x,i[4]=Er.x,i[8]=sn.x,i[1]=ci.y,i[5]=Er.y,i[9]=sn.y,i[2]=ci.z,i[6]=Er.z,i[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],y=n[7],x=n[11],I=n[15],E=i[0],R=i[4],C=i[8],w=i[12],M=i[1],P=i[5],O=i[9],F=i[13],H=i[2],q=i[6],V=i[10],ne=i[14],W=i[3],ae=i[7],fe=i[11],be=i[15];return s[0]=o*E+a*M+c*H+l*W,s[4]=o*R+a*P+c*q+l*ae,s[8]=o*C+a*O+c*V+l*fe,s[12]=o*w+a*F+c*ne+l*be,s[1]=h*E+u*M+d*H+f*W,s[5]=h*R+u*P+d*q+f*ae,s[9]=h*C+u*O+d*V+f*fe,s[13]=h*w+u*F+d*ne+f*be,s[2]=g*E+_*M+m*H+p*W,s[6]=g*R+_*P+m*q+p*ae,s[10]=g*C+_*O+m*V+p*fe,s[14]=g*w+_*F+m*ne+p*be,s[3]=v*E+y*M+x*H+I*W,s[7]=v*R+y*P+x*q+I*ae,s[11]=v*C+y*O+x*V+I*fe,s[15]=v*w+y*F+x*ne+I*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+s*o*d-i*o*f+i*l*h-s*c*h)+m*(+t*l*u-t*a*f-s*o*u+n*o*f+s*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,y=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,x=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,I=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,E=t*v+n*y+i*x+s*I;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=v*R,e[1]=(_*d*s-u*m*s-_*i*f+n*m*f+u*i*p-n*d*p)*R,e[2]=(a*m*s-_*c*s+_*i*l-n*m*l-a*i*p+n*c*p)*R,e[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*f-n*c*f)*R,e[4]=y*R,e[5]=(h*m*s-g*d*s+g*i*f-t*m*f-h*i*p+t*d*p)*R,e[6]=(g*c*s-o*m*s-g*i*l+t*m*l+o*i*p-t*c*p)*R,e[7]=(o*d*s-h*c*s+h*i*l-t*d*l-o*i*f+t*c*f)*R,e[8]=x*R,e[9]=(g*u*s-h*_*s-g*n*f+t*_*f+h*n*p-t*u*p)*R,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*p+t*a*p)*R,e[11]=(h*a*s-o*u*s-h*n*l+t*u*l+o*n*f-t*a*f)*R,e[12]=I*R,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*R,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*R,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,d=s*l,f=s*h,g=s*u,_=o*h,m=o*u,p=a*u,v=c*l,y=c*h,x=c*u,I=n.x,E=n.y,R=n.z;return i[0]=(1-(_+p))*I,i[1]=(f+x)*I,i[2]=(g-y)*I,i[3]=0,i[4]=(f-x)*E,i[5]=(1-(d+p))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(g+y)*R,i[9]=(m-v)*R,i[10]=(1-(d+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Gi.set(i[0],i[1],i[2]).length();const o=Gi.set(i[4],i[5],i[6]).length(),a=Gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Sn.copy(this);const l=1/s,h=1/o,u=1/a;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,t.setFromRotationMatrix(Sn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=$n){const c=this.elements,l=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===$n)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===po)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=$n){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-s),d=(t+e)*l,f=(n+i)*h;let g,_;if(a===$n)g=(o+s)*u,_=-2*u;else if(a===po)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gi=new b,Sn=new De,wf=new b(0,0,0),Tf=new b(1,1,1),ci=new b,Er=new b,sn=new b,_l=new De,vl=new Ft;class ln{constructor(e=0,t=0,n=0,i=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _l.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_l,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vl.setFromEuler(this),this.setFromQuaternion(vl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class yu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bf=0;const xl=new b,Wi=new Ft,Vn=new De,Ar=new b,Ds=new b,Ef=new b,Af=new Ft,yl=new b(1,0,0),Ml=new b(0,1,0),Sl=new b(0,0,1),wl={type:"added"},Rf={type:"removed"},Xi={type:"childadded",child:null},Bo={type:"childremoved",child:null};class gt extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new b,t=new ln,n=new Ft,i=new b(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new De},normalMatrix:{value:new ze}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(yl,e)}rotateY(e){return this.rotateOnAxis(Ml,e)}rotateZ(e){return this.rotateOnAxis(Sl,e)}translateOnAxis(e,t){return xl.copy(e).applyQuaternion(this.quaternion),this.position.add(xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yl,e)}translateY(e){return this.translateOnAxis(Ml,e)}translateZ(e){return this.translateOnAxis(Sl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ar.copy(e):Ar.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Ds,Ar,this.up):Vn.lookAt(Ar,Ds,this.up),this.quaternion.setFromRotationMatrix(Vn),i&&(Vn.extractRotation(i.matrixWorld),Wi.setFromRotationMatrix(Vn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wl),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rf),Bo.child=e,this.dispatchEvent(Bo),Bo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wl),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,e,Ef),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,Af,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}gt.DEFAULT_UP=new b(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new b,Gn=new b,zo=new b,Wn=new b,Yi=new b,Ki=new b,Tl=new b,Ho=new b,Vo=new b,Go=new b,Wo=new it,Xo=new it,Yo=new it;class mn{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),wn.subVectors(e,t),i.cross(wn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){wn.subVectors(i,t),Gn.subVectors(n,t),zo.subVectors(e,t);const o=wn.dot(wn),a=wn.dot(Gn),c=wn.dot(zo),l=Gn.dot(Gn),h=Gn.dot(zo),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Wn.x),c.addScaledVector(o,Wn.y),c.addScaledVector(a,Wn.z),c)}static getInterpolatedAttribute(e,t,n,i,s,o){return Wo.setScalar(0),Xo.setScalar(0),Yo.setScalar(0),Wo.fromBufferAttribute(e,t),Xo.fromBufferAttribute(e,n),Yo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Wo,s.x),o.addScaledVector(Xo,s.y),o.addScaledVector(Yo,s.z),o}static isFrontFacing(e,t,n,i){return wn.subVectors(n,t),Gn.subVectors(e,t),wn.cross(Gn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),wn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Yi.subVectors(i,n),Ki.subVectors(s,n),Ho.subVectors(e,n);const c=Yi.dot(Ho),l=Ki.dot(Ho);if(c<=0&&l<=0)return t.copy(n);Vo.subVectors(e,i);const h=Yi.dot(Vo),u=Ki.dot(Vo);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Yi,o);Go.subVectors(e,s);const f=Yi.dot(Go),g=Ki.dot(Go);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ki,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Tl.subVectors(s,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Tl,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Yi,o).addScaledVector(Ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function Ko(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class _e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=Ac(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ko(o,s,e+1/3),this.g=Ko(o,s,e),this.b=Ko(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=At){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const n=Mu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Ke.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Lt(Ht.r*255,0,255))*65536+Math.round(Lt(Ht.g*255,0,255))*256+Math.round(Lt(Ht.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Ht.copy(this),t);const n=Ht.r,i=Ht.g,s=Ht.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=At){Ke.fromWorkingColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,i=Ht.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Rr);const n=$s(li.h,Rr.h,t),i=$s(li.s,Rr.s,t),s=$s(li.l,Rr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new _e;_e.NAMES=Mu;let Cf=0;class Rn extends Ui{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=vn(),this.name="",this.blending=ls,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=Sa,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ma&&(n.blendSrc=this.blendSrc),this.blendDst!==Sa&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Le extends Rn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new b,Cr=new Q;class Ct{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rc,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix3(e),this.setXY(t,Cr.x,Cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rc&&(e.usage=this.usage),e}}class Su extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wu extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class je extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Pf=0;const dn=new De,qo=new gt,qi=new b,rn=new tn,Ns=new tn,Ot=new b;class Mt extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_u(e)?wu:Su)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return qo.lookAt(e),qo.updateMatrix(),this.applyMatrix4(qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(rn.min,Ns.min),rn.expandByPoint(Ot),Ot.addVectors(rn.max,Ns.max),rn.expandByPoint(Ot)):(rn.expandByPoint(Ns.min),rn.expandByPoint(Ns.max))}rn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ot));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ot.fromBufferAttribute(a,l),c&&(qi.fromBufferAttribute(e,l),Ot.add(qi)),i=Math.max(i,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new b,c[C]=new b;const l=new b,h=new b,u=new b,d=new Q,f=new Q,g=new Q,_=new b,m=new b;function p(C,w,M){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[C].add(_),a[w].add(_),a[M].add(_),c[C].add(m),c[w].add(m),c[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,w=v.length;C<w;++C){const M=v[C],P=M.start,O=M.count;for(let F=P,H=P+O;F<H;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new b,x=new b,I=new b,E=new b;function R(C){I.fromBufferAttribute(i,C),E.copy(I);const w=a[C];y.copy(w),y.sub(I.multiplyScalar(I.dot(w))).normalize(),x.crossVectors(E,w);const P=x.dot(c[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,P)}for(let C=0,w=v.length;C<w;++C){const M=v[C],P=M.start,O=M.count;for(let F=P,H=P+O;F<H;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new b,s=new b,o=new b,a=new b,c=new b,l=new b,h=new b,u=new b;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Ct(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bl=new De,yi=new To,Pr=new Nn,El=new b,Ir=new b,Lr=new b,Dr=new b,jo=new b,Nr=new b,Al=new b,Ur=new b;class X extends gt{constructor(e=new Mt,t=new Le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Nr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(jo.fromBufferAttribute(u,e),o?Nr.addScaledVector(jo,h):Nr.addScaledVector(jo.sub(t),h))}t.add(Nr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(s),yi.copy(e.ray).recast(e.near),!(Pr.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Pr,El)===null||yi.origin.distanceToSquared(El)>(e.far-e.near)**2))&&(bl.copy(s).invert(),yi.copy(e.ray).applyMatrix4(bl),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,I=y;x<I;x+=3){const E=a.getX(x),R=a.getX(x+1),C=a.getX(x+2);i=Or(this,p,e,n,l,h,u,E,R,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);i=Or(this,o,e,n,l,h,u,v,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,I=y;x<I;x+=3){const E=x,R=x+1,C=x+2;i=Or(this,p,e,n,l,h,u,E,R,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,y=m+1,x=m+2;i=Or(this,o,e,n,l,h,u,v,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function If(r,e,t,n,i,s,o,a){let c;if(e.side===Xt?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Dn,a),c===null)return null;Ur.copy(a),Ur.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Ur);return l<t.near||l>t.far?null:{distance:l,point:Ur.clone(),object:r}}function Or(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,Ir),r.getVertexPosition(c,Lr),r.getVertexPosition(l,Dr);const h=If(r,e,t,n,Ir,Lr,Dr,Al);if(h){const u=new b;mn.getBarycoord(Al,Ir,Lr,Dr,u),i&&(h.uv=mn.getInterpolatedAttribute(i,a,c,l,u,new Q)),s&&(h.uv1=mn.getInterpolatedAttribute(s,a,c,l,u,new Q)),o&&(h.normal=mn.getInterpolatedAttribute(o,a,c,l,u,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new b,materialIndex:0};mn.getNormal(Ir,Lr,Dr,d.normal),h.face=d,h.barycoord=u}return h}class Ee extends Mt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(u,2));function g(_,m,p,v,y,x,I,E,R,C,w){const M=x/R,P=I/C,O=x/2,F=I/2,H=E/2,q=R+1,V=C+1;let ne=0,W=0;const ae=new b;for(let fe=0;fe<V;fe++){const be=fe*P-F;for(let We=0;We<q;We++){const dt=We*M-O;ae[_]=dt*v,ae[m]=be*y,ae[p]=H,l.push(ae.x,ae.y,ae.z),ae[_]=0,ae[m]=0,ae[p]=E>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push(We/R),u.push(1-fe/C),ne+=1}}for(let fe=0;fe<C;fe++)for(let be=0;be<R;be++){const We=d+be+q*fe,dt=d+be+q*(fe+1),K=d+(be+1)+q*(fe+1),ie=d+(be+1)+q*fe;c.push(We,dt,ie),c.push(dt,K,ie),W+=6}a.addGroup(f,W,w),f+=W,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ee(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Kt(r){const e={};for(let t=0;t<r.length;t++){const n=xs(r[t]);for(const i in n)e[i]=n[i]}return e}function Lf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Tu(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const cr={clone:xs,merge:Kt};var Df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wt extends Rn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Df,this.fragmentShader=Nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=Lf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bu extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=$n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new b,Rl=new Q,Cl=new Q;class jt extends bu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,Rl,Cl),t.subVectors(Cl,Rl)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=-90,Zi=1;class Uf extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new jt(ji,Zi,e,t);i.layers=this.layers,this.add(i);const s=new jt(ji,Zi,e,t);s.layers=this.layers,this.add(s);const o=new jt(ji,Zi,e,t);o.layers=this.layers,this.add(o);const a=new jt(ji,Zi,e,t);a.layers=this.layers,this.add(a);const c=new jt(ji,Zi,e,t);c.layers=this.layers,this.add(c);const l=new jt(ji,Zi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===po)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Eu extends Dt{constructor(e,t,n,i,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ps,super(e,t,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Of extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Eu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ee(5,5,5),s=new Wt({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:Qn});s.uniforms.tEquirect.value=t;const o=new X(i,s),a=t.minFilter;return t.minFilter===Zn&&(t.minFilter=an),new Uf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Zo=new b,Ff=new b,kf=new ze;class bi{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Zo.subVectors(n,t).cross(Ff.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Zo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||kf.getNormalMatrix(e),i=this.coplanarPoint(Zo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new Nn,Fr=new b;class Rc{constructor(e=new bi,t=new bi,n=new bi,i=new bi,s=new bi,o=new bi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],v=i[13],y=i[14],x=i[15];if(n[0].setComponents(c-s,d-l,m-f,x-p).normalize(),n[1].setComponents(c+s,d+l,m+f,x+p).normalize(),n[2].setComponents(c+o,d+h,m+g,x+v).normalize(),n[3].setComponents(c-o,d-h,m-g,x-v).normalize(),n[4].setComponents(c-a,d-u,m-_,x-y).normalize(),t===$n)n[5].setComponents(c+a,d+u,m+_,x+y).normalize();else if(t===po)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Fr.x=i.normal.x>0?e.max.x:e.min.x,Fr.y=i.normal.y>0?e.max.y:e.min.y,Fr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Au(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Bf(r){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,a),u.length===0)r.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}class It extends Mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*d-o;for(let y=0;y<l;y++){const x=y*u-s;g.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const y=v+l*p,x=v+l*(p+1),I=v+1+l*(p+1),E=v+1+l*p;f.push(y,x,E),f.push(x,I,E)}this.setIndex(f),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new It(e.width,e.height,e.widthSegments,e.heightSegments)}}var zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ep=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,up=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gp="gl_FragColor = linearToOutputTexel( gl_FragColor );",_p=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ap=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ip=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Np=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Op=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,em=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,im=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,um=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Em=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Am=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ym=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Km=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,s0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,o0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,a0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,h0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,p0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:zf,alphahash_pars_fragment:Hf,alphamap_fragment:Vf,alphamap_pars_fragment:Gf,alphatest_fragment:Wf,alphatest_pars_fragment:Xf,aomap_fragment:Yf,aomap_pars_fragment:Kf,batching_pars_vertex:qf,batching_vertex:jf,begin_vertex:Zf,beginnormal_vertex:$f,bsdfs:Jf,iridescence_fragment:Qf,bumpmap_pars_fragment:ep,clipping_planes_fragment:tp,clipping_planes_pars_fragment:np,clipping_planes_pars_vertex:ip,clipping_planes_vertex:sp,color_fragment:rp,color_pars_fragment:op,color_pars_vertex:ap,color_vertex:cp,common:lp,cube_uv_reflection_fragment:hp,defaultnormal_vertex:up,displacementmap_pars_vertex:dp,displacementmap_vertex:fp,emissivemap_fragment:pp,emissivemap_pars_fragment:mp,colorspace_fragment:gp,colorspace_pars_fragment:_p,envmap_fragment:vp,envmap_common_pars_fragment:xp,envmap_pars_fragment:yp,envmap_pars_vertex:Mp,envmap_physical_pars_fragment:Lp,envmap_vertex:Sp,fog_vertex:wp,fog_pars_vertex:Tp,fog_fragment:bp,fog_pars_fragment:Ep,gradientmap_pars_fragment:Ap,lightmap_pars_fragment:Rp,lights_lambert_fragment:Cp,lights_lambert_pars_fragment:Pp,lights_pars_begin:Ip,lights_toon_fragment:Dp,lights_toon_pars_fragment:Np,lights_phong_fragment:Up,lights_phong_pars_fragment:Op,lights_physical_fragment:Fp,lights_physical_pars_fragment:kp,lights_fragment_begin:Bp,lights_fragment_maps:zp,lights_fragment_end:Hp,logdepthbuf_fragment:Vp,logdepthbuf_pars_fragment:Gp,logdepthbuf_pars_vertex:Wp,logdepthbuf_vertex:Xp,map_fragment:Yp,map_pars_fragment:Kp,map_particle_fragment:qp,map_particle_pars_fragment:jp,metalnessmap_fragment:Zp,metalnessmap_pars_fragment:$p,morphinstance_vertex:Jp,morphcolor_vertex:Qp,morphnormal_vertex:em,morphtarget_pars_vertex:tm,morphtarget_vertex:nm,normal_fragment_begin:im,normal_fragment_maps:sm,normal_pars_fragment:rm,normal_pars_vertex:om,normal_vertex:am,normalmap_pars_fragment:cm,clearcoat_normal_fragment_begin:lm,clearcoat_normal_fragment_maps:hm,clearcoat_pars_fragment:um,iridescence_pars_fragment:dm,opaque_fragment:fm,packing:pm,premultiplied_alpha_fragment:mm,project_vertex:gm,dithering_fragment:_m,dithering_pars_fragment:vm,roughnessmap_fragment:xm,roughnessmap_pars_fragment:ym,shadowmap_pars_fragment:Mm,shadowmap_pars_vertex:Sm,shadowmap_vertex:wm,shadowmask_pars_fragment:Tm,skinbase_vertex:bm,skinning_pars_vertex:Em,skinning_vertex:Am,skinnormal_vertex:Rm,specularmap_fragment:Cm,specularmap_pars_fragment:Pm,tonemapping_fragment:Im,tonemapping_pars_fragment:Lm,transmission_fragment:Dm,transmission_pars_fragment:Nm,uv_pars_fragment:Um,uv_pars_vertex:Om,uv_vertex:Fm,worldpos_vertex:km,background_vert:Bm,background_frag:zm,backgroundCube_vert:Hm,backgroundCube_frag:Vm,cube_vert:Gm,cube_frag:Wm,depth_vert:Xm,depth_frag:Ym,distanceRGBA_vert:Km,distanceRGBA_frag:qm,equirect_vert:jm,equirect_frag:Zm,linedashed_vert:$m,linedashed_frag:Jm,meshbasic_vert:Qm,meshbasic_frag:e0,meshlambert_vert:t0,meshlambert_frag:n0,meshmatcap_vert:i0,meshmatcap_frag:s0,meshnormal_vert:r0,meshnormal_frag:o0,meshphong_vert:a0,meshphong_frag:c0,meshphysical_vert:l0,meshphysical_frag:h0,meshtoon_vert:u0,meshtoon_frag:d0,points_vert:f0,points_frag:p0,shadow_vert:m0,shadow_frag:g0,sprite_vert:_0,sprite_frag:v0},se={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Pn={basic:{uniforms:Kt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Kt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new _e(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Kt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Kt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Kt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new _e(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Kt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Kt([se.points,se.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Kt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Kt([se.common,se.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Kt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Kt([se.sprite,se.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Kt([se.common,se.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Kt([se.lights,se.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Pn.physical={uniforms:Kt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const kr={r:0,b:0,g:0},Si=new ln,x0=new De;function y0(r,e,t,n,i,s,o){const a=new _e(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function _(v){let y=!1;const x=g(v);x===null?p(a,c):x&&x.isColor&&(p(x,1),y=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(v,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===So)?(h===void 0&&(h=new X(new Ee(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:xs(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Si.copy(y.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(x0.makeRotationFromEuler(Si)),h.material.toneMapped=Ke.getTransfer(x.colorSpace)!==lt,(u!==x||d!==x.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new X(new It(2,2),new Wt({name:"BackgroundMaterial",uniforms:xs(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(x.colorSpace)!==lt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,y){v.getRGB(kr,Tu(r)),n.buffers.color.setClear(kr.r,kr.g,kr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:_,addToRenderList:m}}function M0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(M,P,O,F,H){let q=!1;const V=u(F,O,P);s!==V&&(s=V,l(s.object)),q=f(M,F,O,H),q&&g(M,F,O,H),H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,x(M,P,O,F),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return r.createVertexArray()}function l(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function u(M,P,O){const F=O.wireframe===!0;let H=n[M.id];H===void 0&&(H={},n[M.id]=H);let q=H[P.id];q===void 0&&(q={},H[P.id]=q);let V=q[F];return V===void 0&&(V=d(c()),q[F]=V),V}function d(M){const P=[],O=[],F=[];for(let H=0;H<t;H++)P[H]=0,O[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:F,object:M,attributes:{},index:null}}function f(M,P,O,F){const H=s.attributes,q=P.attributes;let V=0;const ne=O.getAttributes();for(const W in ne)if(ne[W].location>=0){const fe=H[W];let be=q[W];if(be===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(be=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(be=M.instanceColor)),fe===void 0||fe.attribute!==be||be&&fe.data!==be.data)return!0;V++}return s.attributesNum!==V||s.index!==F}function g(M,P,O,F){const H={},q=P.attributes;let V=0;const ne=O.getAttributes();for(const W in ne)if(ne[W].location>=0){let fe=q[W];fe===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor));const be={};be.attribute=fe,fe&&fe.data&&(be.data=fe.data),H[W]=be,V++}s.attributes=H,s.attributesNum=V,s.index=F}function _(){const M=s.newAttributes;for(let P=0,O=M.length;P<O;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const O=s.newAttributes,F=s.enabledAttributes,H=s.attributeDivisors;O[M]=1,F[M]===0&&(r.enableVertexAttribArray(M),F[M]=1),H[M]!==P&&(r.vertexAttribDivisor(M,P),H[M]=P)}function v(){const M=s.newAttributes,P=s.enabledAttributes;for(let O=0,F=P.length;O<F;O++)P[O]!==M[O]&&(r.disableVertexAttribArray(O),P[O]=0)}function y(M,P,O,F,H,q,V){V===!0?r.vertexAttribIPointer(M,P,O,H,q):r.vertexAttribPointer(M,P,O,F,H,q)}function x(M,P,O,F){_();const H=F.attributes,q=O.getAttributes(),V=P.defaultAttributeValues;for(const ne in q){const W=q[ne];if(W.location>=0){let ae=H[ne];if(ae===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),ae!==void 0){const fe=ae.normalized,be=ae.itemSize,We=e.get(ae);if(We===void 0)continue;const dt=We.buffer,K=We.type,ie=We.bytesPerElement,Se=K===r.INT||K===r.UNSIGNED_INT||ae.gpuType===xc;if(ae.isInterleavedBufferAttribute){const ce=ae.data,Ie=ce.stride,Oe=ae.offset;if(ce.isInstancedInterleavedBuffer){for(let Xe=0;Xe<W.locationSize;Xe++)p(W.location+Xe,ce.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Xe=0;Xe<W.locationSize;Xe++)m(W.location+Xe);r.bindBuffer(r.ARRAY_BUFFER,dt);for(let Xe=0;Xe<W.locationSize;Xe++)y(W.location+Xe,be/W.locationSize,K,fe,Ie*ie,(Oe+be/W.locationSize*Xe)*ie,Se)}else{if(ae.isInstancedBufferAttribute){for(let ce=0;ce<W.locationSize;ce++)p(W.location+ce,ae.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ce=0;ce<W.locationSize;ce++)m(W.location+ce);r.bindBuffer(r.ARRAY_BUFFER,dt);for(let ce=0;ce<W.locationSize;ce++)y(W.location+ce,be/W.locationSize,K,fe,be*ie,be/W.locationSize*ce*ie,Se)}}else if(V!==void 0){const fe=V[ne];if(fe!==void 0)switch(fe.length){case 2:r.vertexAttrib2fv(W.location,fe);break;case 3:r.vertexAttrib3fv(W.location,fe);break;case 4:r.vertexAttrib4fv(W.location,fe);break;default:r.vertexAttrib1fv(W.location,fe)}}}}v()}function I(){C();for(const M in n){const P=n[M];for(const O in P){const F=P[O];for(const H in F)h(F[H].object),delete F[H];delete P[O]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const O in P){const F=P[O];for(const H in F)h(F[H].object),delete F[H];delete P[O]}delete n[M.id]}function R(M){for(const P in n){const O=n[P];if(O[M.id]===void 0)continue;const F=O[M.id];for(const H in F)h(F[H].object),delete F[H];delete O[M.id]}}function C(){w(),o=!0,s!==i&&(s=i,l(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function S0(r,e,t){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function w0(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==_n&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const C=R===ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ni&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==En&&!C)}function c(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:I,maxSamples:E}}function T0(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new bi,a=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{const v=s?0:n,y=v*4;let x=p.clippingState||null;c.value=x,x=h(g,d,y,f);for(let I=0;I!==y;++I)x[I]=t[I];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function b0(r){let e=new WeakMap;function t(o,a){return a===Pa?o.mapping=ps:a===Ia&&(o.mapping=ms),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Pa||a===Ia)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Of(c.height);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class bo extends bu{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const as=4,Pl=[.125,.215,.35,.446,.526,.582],Ci=20,$o=new bo,Il=new _e;let Jo=null,Qo=0,ea=0,ta=!1;const Ei=(1+Math.sqrt(5))/2,$i=1/Ei,Ll=[new b(-Ei,$i,0),new b(Ei,$i,0),new b(-$i,0,Ei),new b($i,0,Ei),new b(0,Ei,-$i),new b(0,Ei,$i),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)];class oc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jo,Qo,ea),this._renderer.xr.enabled=ta,e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ps||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:ei,format:_n,colorSpace:$t,depthBuffer:!1},i=Dl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=E0(s)),this._blurMaterial=A0(s,e,t)}return i}_compileMaterial(e){const t=new X(this._lodPlanes[0],e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,n,i){const a=new jt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Il),h.toneMapping=mi,h.autoClear=!1;const f=new Le({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),g=new X(new Ee,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Il),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;Br(i,v*y,p>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ps||e.mapping===ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new X(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Br(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,$o)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ll[(i-s-1)%Ll.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new X(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ci-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Ci;m>Ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ci}`);const p=[];let v=0;for(let R=0;R<Ci;++R){const C=R/_,w=Math.exp(-C*C/2);p.push(w),R===0?v+=w:R<m&&(v+=2*w)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[i],I=3*x*(i>y-as?i-y+as:0),E=4*(this._cubeSize-x);Br(t,I,E,3*x,2*x),c.setRenderTarget(t),c.render(u,$o)}}function E0(r){const e=[],t=[],n=[];let i=r;const s=r-as+1+Pl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-as?c=Pl[o-r+as-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let E=0;E<f;E++){const R=E%3*2/3-1,C=E>2?0:-1,w=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];v.set(w,_*g*E),y.set(d,m*g*E);const M=[E,E,E,E,E,E];x.set(M,p*g*E)}const I=new Mt;I.setAttribute("position",new Ct(v,_)),I.setAttribute("uv",new Ct(y,m)),I.setAttribute("faceIndex",new Ct(x,p)),e.push(I),i>as&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Dl(r,e,t){const n=new An(r,e,t);return n.texture.mapping=So,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function A0(r,e,t){const n=new Float32Array(Ci),i=new b(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Nl(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Ul(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Cc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function R0(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Pa||c===Ia,h=c===ps||c===ms;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new oc(r)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new oc(r)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function C0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&qs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function P0(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],r.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let y=0,x=v.length;y<x;y+=3){const I=v[y+0],E=v[y+1],R=v[y+2];d.push(I,E,E,R,R,I)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const I=y+0,E=y+1,R=y+2;d.push(I,E,E,R,R,I)}}else return;const m=new(_u(d)?wu:Su)(d,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function I0(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*_[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function L0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function D0(r,e,t){const n=new WeakMap,i=new it;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let w=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,I=1;x>e.maxTextureSize&&(I=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const E=new Float32Array(x*I*4*u),R=new xu(E,x,I,u);R.type=En,R.needsUpdate=!0;const C=y*4;for(let M=0;M<u;M++){const P=m[M],O=p[M],F=v[M],H=x*I*4*M;for(let q=0;q<P.count;q++){const V=q*C;f===!0&&(i.fromBufferAttribute(P,q),E[H+V+0]=i.x,E[H+V+1]=i.y,E[H+V+2]=i.z,E[H+V+3]=0),g===!0&&(i.fromBufferAttribute(O,q),E[H+V+4]=i.x,E[H+V+5]=i.y,E[H+V+6]=i.z,E[H+V+7]=0),_===!0&&(i.fromBufferAttribute(F,q),E[H+V+8]=i.x,E[H+V+9]=i.y,E[H+V+10]=i.z,E[H+V+11]=F.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new Q(x,I)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function N0(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class Ru extends Dt{constructor(e,t,n,i,s,o,a,c,l,h=hs){if(h!==hs&&h!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hs&&(n=Ii),n===void 0&&h===_s&&(n=gs),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Zt,this.minFilter=c!==void 0?c:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Cu=new Dt,Ol=new Ru(1,1),Pu=new xu,Iu=new Mf,Lu=new Eu,Fl=[],kl=[],Bl=new Float32Array(16),zl=new Float32Array(9),Hl=new Float32Array(4);function Ts(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Fl[i];if(s===void 0&&(s=new Float32Array(i),Fl[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Nt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ut(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Eo(r,e){let t=kl[e];t===void 0&&(t=new Int32Array(e),kl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function U0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function O0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2fv(this.addr,e),Ut(t,e)}}function F0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;r.uniform3fv(this.addr,e),Ut(t,e)}}function k0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4fv(this.addr,e),Ut(t,e)}}function B0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Hl.set(n),r.uniformMatrix2fv(this.addr,!1,Hl),Ut(t,n)}}function z0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;zl.set(n),r.uniformMatrix3fv(this.addr,!1,zl),Ut(t,n)}}function H0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Bl.set(n),r.uniformMatrix4fv(this.addr,!1,Bl),Ut(t,n)}}function V0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function G0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2iv(this.addr,e),Ut(t,e)}}function W0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;r.uniform3iv(this.addr,e),Ut(t,e)}}function X0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4iv(this.addr,e),Ut(t,e)}}function Y0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function K0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2uiv(this.addr,e),Ut(t,e)}}function q0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;r.uniform3uiv(this.addr,e),Ut(t,e)}}function j0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4uiv(this.addr,e),Ut(t,e)}}function Z0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ol.compareFunction=gu,s=Ol):s=Cu,t.setTexture2D(e||s,i)}function $0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Iu,i)}function J0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Lu,i)}function Q0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Pu,i)}function eg(r){switch(r){case 5126:return U0;case 35664:return O0;case 35665:return F0;case 35666:return k0;case 35674:return B0;case 35675:return z0;case 35676:return H0;case 5124:case 35670:return V0;case 35667:case 35671:return G0;case 35668:case 35672:return W0;case 35669:case 35673:return X0;case 5125:return Y0;case 36294:return K0;case 36295:return q0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return $0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return Q0}}function tg(r,e){r.uniform1fv(this.addr,e)}function ng(r,e){const t=Ts(e,this.size,2);r.uniform2fv(this.addr,t)}function ig(r,e){const t=Ts(e,this.size,3);r.uniform3fv(this.addr,t)}function sg(r,e){const t=Ts(e,this.size,4);r.uniform4fv(this.addr,t)}function rg(r,e){const t=Ts(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function og(r,e){const t=Ts(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function ag(r,e){const t=Ts(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function cg(r,e){r.uniform1iv(this.addr,e)}function lg(r,e){r.uniform2iv(this.addr,e)}function hg(r,e){r.uniform3iv(this.addr,e)}function ug(r,e){r.uniform4iv(this.addr,e)}function dg(r,e){r.uniform1uiv(this.addr,e)}function fg(r,e){r.uniform2uiv(this.addr,e)}function pg(r,e){r.uniform3uiv(this.addr,e)}function mg(r,e){r.uniform4uiv(this.addr,e)}function gg(r,e,t){const n=this.cache,i=e.length,s=Eo(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Cu,s[o])}function _g(r,e,t){const n=this.cache,i=e.length,s=Eo(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Iu,s[o])}function vg(r,e,t){const n=this.cache,i=e.length,s=Eo(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Lu,s[o])}function xg(r,e,t){const n=this.cache,i=e.length,s=Eo(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Pu,s[o])}function yg(r){switch(r){case 5126:return tg;case 35664:return ng;case 35665:return ig;case 35666:return sg;case 35674:return rg;case 35675:return og;case 35676:return ag;case 5124:case 35670:return cg;case 35667:case 35671:return lg;case 35668:case 35672:return hg;case 35669:case 35673:return ug;case 5125:return dg;case 36294:return fg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return vg;case 36289:case 36303:case 36311:case 36292:return xg}}class Mg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=eg(t.type)}}class Sg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yg(t.type)}}class wg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const na=/(\w+)(\])?(\[|\.)?/g;function Vl(r,e){r.seq.push(e),r.map[e.id]=e}function Tg(r,e,t){const n=r.name,i=n.length;for(na.lastIndex=0;;){const s=na.exec(n),o=na.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Vl(t,l===void 0?new Mg(a,r,e):new Sg(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new wg(a),Vl(t,u)),t=u}}}class ho{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Tg(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Gl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const bg=37297;let Eg=0;function Ag(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Wl=new ze;function Rg(r){Ke._getMatrix(Wl,Ke.workingColorSpace,r);const e=`mat3( ${Wl.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(r)){case wo:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Xl(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Ag(r.getShaderSource(e),o)}else return i}function Cg(r,e){const t=Rg(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Pg(r,e){let t;switch(e){case Zh:t="Linear";break;case $h:t="Reinhard";break;case Jh:t="Cineon";break;case vc:t="ACESFilmic";break;case Qh:t="AgX";break;case eu:t="Neutral";break;case Ud:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zr=new b;function Ig(){Ke.getLuminanceCoefficients(zr);const r=zr.x.toFixed(4),e=zr.y.toFixed(4),t=zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function Dg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ng(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function js(r){return r!==""}function Yl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function ac(r){return r.replace(Ug,Fg)}const Og=new Map;function Fg(r,e){let t=Ve[e];if(t===void 0){const n=Og.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ac(t)}const kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ql(r){return r.replace(kg,Bg)}function Bg(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function jl(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zg(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Kh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===qh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Yn&&(e="SHADOWMAP_TYPE_VSM"),e}function Hg(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ps:case ms:e="ENVMAP_TYPE_CUBE";break;case So:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vg(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ms:e="ENVMAP_MODE_REFRACTION";break}return e}function Gg(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case jh:e="ENVMAP_BLENDING_MULTIPLY";break;case Dd:e="ENVMAP_BLENDING_MIX";break;case Nd:e="ENVMAP_BLENDING_ADD";break}return e}function Wg(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Xg(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=zg(t),l=Hg(t),h=Vg(t),u=Gg(t),d=Wg(t),f=Lg(t),g=Dg(s),_=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(js).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(js).join(`
`),p.length>0&&(p+=`
`)):(m=[jl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),p=[jl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==mi?Pg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Cg("linearToOutputTexel",t.outputColorSpace),Ig(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(js).join(`
`)),o=ac(o),o=Yl(o,t),o=Kl(o,t),a=ac(a),a=Yl(a,t),a=Kl(a,t),o=ql(o),a=ql(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+o,x=v+p+a,I=Gl(i,i.VERTEX_SHADER,y),E=Gl(i,i.FRAGMENT_SHADER,x);i.attachShader(_,I),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(P){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(I).trim(),H=i.getShaderInfoLog(E).trim();let q=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,I,E);else{const ne=Xl(i,I,"vertex"),W=Xl(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+ne+`
`+W)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||H==="")&&(V=!1);V&&(P.diagnostics={runnable:q,programLog:O,vertexShader:{log:F,prefix:m},fragmentShader:{log:H,prefix:p}})}i.deleteShader(I),i.deleteShader(E),C=new ho(i,_),w=Ng(i,_)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,bg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Eg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=E,this}let Yg=0;class Kg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qg(e),t.set(e,n)),n}}class qg{constructor(e){this.id=Yg++,this.code=e,this.usedTimes=0}}function jg(r,e,t,n,i,s,o){const a=new yu,c=new Kg,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,M,P,O,F){const H=O.fog,q=F.geometry,V=w.isMeshStandardMaterial?O.environment:null,ne=(w.isMeshStandardMaterial?t:e).get(w.envMap||V),W=ne&&ne.mapping===So?ne.image.height:null,ae=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const fe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,be=fe!==void 0?fe.length:0;let We=0;q.morphAttributes.position!==void 0&&(We=1),q.morphAttributes.normal!==void 0&&(We=2),q.morphAttributes.color!==void 0&&(We=3);let dt,K,ie,Se;if(ae){const ct=Pn[ae];dt=ct.vertexShader,K=ct.fragmentShader}else dt=w.vertexShader,K=w.fragmentShader,c.update(w),ie=c.getVertexShaderID(w),Se=c.getFragmentShaderID(w);const ce=r.getRenderTarget(),Ie=r.state.buffers.depth.getReversed(),Oe=F.isInstancedMesh===!0,Xe=F.isBatchedMesh===!0,St=!!w.map,Qe=!!w.matcap,Rt=!!ne,U=!!w.aoMap,hn=!!w.lightMap,Ze=!!w.bumpMap,$e=!!w.normalMap,Ce=!!w.displacementMap,_t=!!w.emissiveMap,Ae=!!w.metalnessMap,A=!!w.roughnessMap,S=w.anisotropy>0,k=w.clearcoat>0,j=w.dispersion>0,$=w.iridescence>0,Y=w.sheen>0,we=w.transmission>0,le=S&&!!w.anisotropyMap,pe=k&&!!w.clearcoatMap,et=k&&!!w.clearcoatNormalMap,ee=k&&!!w.clearcoatRoughnessMap,me=$&&!!w.iridescenceMap,Pe=$&&!!w.iridescenceThicknessMap,Ne=Y&&!!w.sheenColorMap,ge=Y&&!!w.sheenRoughnessMap,Je=!!w.specularMap,He=!!w.specularColorMap,pt=!!w.specularIntensityMap,L=we&&!!w.transmissionMap,re=we&&!!w.thicknessMap,G=!!w.gradientMap,Z=!!w.alphaMap,de=w.alphaTest>0,he=!!w.alphaHash,ke=!!w.extensions;let Et=mi;w.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Et=r.toneMapping);const Bt={shaderID:ae,shaderType:w.type,shaderName:w.name,vertexShader:dt,fragmentShader:K,defines:w.defines,customVertexShaderID:ie,customFragmentShaderID:Se,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Xe,batchingColor:Xe&&F._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&F.instanceColor!==null,instancingMorph:Oe&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?r.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:$t,alphaToCoverage:!!w.alphaToCoverage,map:St,matcap:Qe,envMap:Rt,envMapMode:Rt&&ne.mapping,envMapCubeUVHeight:W,aoMap:U,lightMap:hn,bumpMap:Ze,normalMap:$e,displacementMap:d&&Ce,emissiveMap:_t,normalMapObjectSpace:$e&&w.normalMapType===Vd,normalMapTangentSpace:$e&&w.normalMapType===mu,metalnessMap:Ae,roughnessMap:A,anisotropy:S,anisotropyMap:le,clearcoat:k,clearcoatMap:pe,clearcoatNormalMap:et,clearcoatRoughnessMap:ee,dispersion:j,iridescence:$,iridescenceMap:me,iridescenceThicknessMap:Pe,sheen:Y,sheenColorMap:Ne,sheenRoughnessMap:ge,specularMap:Je,specularColorMap:He,specularIntensityMap:pt,transmission:we,transmissionMap:L,thicknessMap:re,gradientMap:G,opaque:w.transparent===!1&&w.blending===ls&&w.alphaToCoverage===!1,alphaMap:Z,alphaTest:de,alphaHash:he,combine:w.combine,mapUv:St&&_(w.map.channel),aoMapUv:U&&_(w.aoMap.channel),lightMapUv:hn&&_(w.lightMap.channel),bumpMapUv:Ze&&_(w.bumpMap.channel),normalMapUv:$e&&_(w.normalMap.channel),displacementMapUv:Ce&&_(w.displacementMap.channel),emissiveMapUv:_t&&_(w.emissiveMap.channel),metalnessMapUv:Ae&&_(w.metalnessMap.channel),roughnessMapUv:A&&_(w.roughnessMap.channel),anisotropyMapUv:le&&_(w.anisotropyMap.channel),clearcoatMapUv:pe&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:et&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:ge&&_(w.sheenRoughnessMap.channel),specularMapUv:Je&&_(w.specularMap.channel),specularColorMapUv:He&&_(w.specularColorMap.channel),specularIntensityMapUv:pt&&_(w.specularIntensityMap.channel),transmissionMapUv:L&&_(w.transmissionMap.channel),thicknessMapUv:re&&_(w.thicknessMap.channel),alphaMapUv:Z&&_(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&($e||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!q.attributes.uv&&(St||Z),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ie,skinning:F.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:We,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Et,decodeVideoTexture:St&&w.map.isVideoTexture===!0&&Ke.getTransfer(w.map.colorSpace)===lt,decodeVideoTextureEmissive:_t&&w.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(w.emissiveMap.colorSpace)===lt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===kt,flipSided:w.side===Xt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ke&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&w.extensions.multiDraw===!0||Xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function p(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)M.push(P),M.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(v(M,w),y(M,w),M.push(r.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function v(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function y(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const M=g[w.type];let P;if(M){const O=Pn[M];P=cr.clone(O.uniforms)}else P=w.uniforms;return P}function I(w,M){let P;for(let O=0,F=h.length;O<F;O++){const H=h[O];if(H.cacheKey===M){P=H,++P.usedTimes;break}}return P===void 0&&(P=new Xg(r,M,w,s),h.push(P)),P}function E(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function R(w){c.remove(w)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:I,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:C}}function Zg(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function $g(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Zl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function $l(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||$g),n.length>1&&n.sort(d||Zl),i.length>1&&i.sort(d||Zl)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function Jg(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new $l,r.set(n,[o])):i>=s.length?(o=new $l,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Qg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new _e};break;case"SpotLight":t={position:new b,direction:new b,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new b,halfWidth:new b,halfHeight:new b};break}return r[e.id]=t,t}}}function e_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let t_=0;function n_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function i_(r){const e=new Qg,t=e_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new b);const i=new b,s=new De,o=new De;function a(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,y=0,x=0,I=0,E=0,R=0;l.sort(n_);for(let w=0,M=l.length;w<M;w++){const P=l[w],O=P.color,F=P.intensity,H=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*F,u+=O.g*F,d+=O.b*F;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],F);R++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ne=P.shadow,W=t.get(P);W.shadowIntensity=ne.intensity,W.shadowBias=ne.bias,W.shadowNormalBias=ne.normalBias,W.shadowRadius=ne.radius,W.shadowMapSize=ne.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=V,f++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(O).multiplyScalar(F),V.distance=H,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[_]=V;const ne=P.shadow;if(P.map&&(n.spotLightMap[I]=P.map,I++,ne.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[_]=ne.matrix,P.castShadow){const W=t.get(P);W.shadowIntensity=ne.intensity,W.shadowBias=ne.bias,W.shadowNormalBias=ne.normalBias,W.shadowRadius=ne.radius,W.shadowMapSize=ne.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=q,x++}_++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(O).multiplyScalar(F),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const ne=P.shadow,W=t.get(P);W.shadowIntensity=ne.intensity,W.shadowBias=ne.bias,W.shadowNormalBias=ne.normalBias,W.shadowRadius=ne.radius,W.shadowMapSize=ne.mapSize,W.shadowCameraNear=ne.camera.near,W.shadowCameraFar=ne.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=V,g++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(F),V.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=V,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==y||C.numSpotShadows!==x||C.numSpotMaps!==I||C.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+I-E,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=y,C.numSpotShadows=x,C.numSpotMaps=I,C.numLightProbes=R,n.version=t_++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const y=l[p];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Jl(r){const e=new i_(r),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function s_(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Jl(r),e.set(i,[a])):s>=o.length?(a=new Jl(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class r_ extends Rn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class o_ extends Rn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const a_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function l_(r,e,t){let n=new Rc;const i=new Q,s=new Q,o=new it,a=new r_({depthPacking:Hd}),c=new o_,l={},h=t.maxTextureSize,u={[Dn]:Xt,[Xt]:Dn,[kt]:kt},d=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:a_,fragmentShader:c_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Mt;g.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new X(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kh;let p=this.type;this.render=function(E,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const w=r.getRenderTarget(),M=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),O=r.state;O.setBlending(Qn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=p!==Yn&&this.type===Yn,H=p===Yn&&this.type!==Yn;for(let q=0,V=E.length;q<V;q++){const ne=E[q],W=ne.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const ae=W.getFrameExtents();if(i.multiply(ae),s.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ae.x),i.x=s.x*ae.x,W.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ae.y),i.y=s.y*ae.y,W.mapSize.y=s.y)),W.map===null||F===!0||H===!0){const be=this.type!==Yn?{minFilter:Zt,magFilter:Zt}:{};W.map!==null&&W.map.dispose(),W.map=new An(i.x,i.y,be),W.map.texture.name=ne.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const fe=W.getViewportCount();for(let be=0;be<fe;be++){const We=W.getViewport(be);o.set(s.x*We.x,s.y*We.y,s.x*We.z,s.y*We.w),O.viewport(o),W.updateMatrices(ne,be),n=W.getFrustum(),x(R,C,W.camera,ne,this.type)}W.isPointLightShadow!==!0&&this.type===Yn&&v(W,C),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(w,M,P)};function v(E,R){const C=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new An(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(R,null,C,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(R,null,C,f,_,null)}function y(E,R,C,w){let M=null;const P=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)M=P;else if(M=C.isPointLight===!0?c:a,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const O=M.uuid,F=R.uuid;let H=l[O];H===void 0&&(H={},l[O]=H);let q=H[F];q===void 0&&(q=M.clone(),H[F]=q,R.addEventListener("dispose",I)),M=q}if(M.visible=R.visible,M.wireframe=R.wireframe,w===Yn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=r.properties.get(M);O.light=C}return M}function x(E,R,C,w,M){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Yn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const F=e.update(E),H=E.material;if(Array.isArray(H)){const q=F.groups;for(let V=0,ne=q.length;V<ne;V++){const W=q[V],ae=H[W.materialIndex];if(ae&&ae.visible){const fe=y(E,ae,w,M);E.onBeforeShadow(r,E,R,C,F,fe,W),r.renderBufferDirect(C,null,F,fe,E,W),E.onAfterShadow(r,E,R,C,F,fe,W)}}}else if(H.visible){const q=y(E,H,w,M);E.onBeforeShadow(r,E,R,C,F,q,null),r.renderBufferDirect(C,null,F,q,E,null),E.onAfterShadow(r,E,R,C,F,q,null)}}const O=E.children;for(let F=0,H=O.length;F<H;F++)x(O[F],R,C,w,M)}function I(E){E.target.removeEventListener("dispose",I);for(const C in l){const w=l[C],M=E.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const h_={[wa]:Ta,[ba]:Ra,[Ea]:Ca,[fs]:Aa,[Ta]:wa,[Ra]:ba,[Ca]:Ea,[Aa]:fs};function u_(r,e){function t(){let L=!1;const re=new it;let G=null;const Z=new it(0,0,0,0);return{setMask:function(de){G!==de&&!L&&(r.colorMask(de,de,de,de),G=de)},setLocked:function(de){L=de},setClear:function(de,he,ke,Et,Bt){Bt===!0&&(de*=Et,he*=Et,ke*=Et),re.set(de,he,ke,Et),Z.equals(re)===!1&&(r.clearColor(de,he,ke,Et),Z.copy(re))},reset:function(){L=!1,G=null,Z.set(-1,0,0,0)}}}function n(){let L=!1,re=!1,G=null,Z=null,de=null;return{setReversed:function(he){if(re!==he){const ke=e.get("EXT_clip_control");re?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);const Et=de;de=null,this.setClear(Et)}re=he},getReversed:function(){return re},setTest:function(he){he?ce(r.DEPTH_TEST):Ie(r.DEPTH_TEST)},setMask:function(he){G!==he&&!L&&(r.depthMask(he),G=he)},setFunc:function(he){if(re&&(he=h_[he]),Z!==he){switch(he){case wa:r.depthFunc(r.NEVER);break;case Ta:r.depthFunc(r.ALWAYS);break;case ba:r.depthFunc(r.LESS);break;case fs:r.depthFunc(r.LEQUAL);break;case Ea:r.depthFunc(r.EQUAL);break;case Aa:r.depthFunc(r.GEQUAL);break;case Ra:r.depthFunc(r.GREATER);break;case Ca:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=he}},setLocked:function(he){L=he},setClear:function(he){de!==he&&(re&&(he=1-he),r.clearDepth(he),de=he)},reset:function(){L=!1,G=null,Z=null,de=null,re=!1}}}function i(){let L=!1,re=null,G=null,Z=null,de=null,he=null,ke=null,Et=null,Bt=null;return{setTest:function(ct){L||(ct?ce(r.STENCIL_TEST):Ie(r.STENCIL_TEST))},setMask:function(ct){re!==ct&&!L&&(r.stencilMask(ct),re=ct)},setFunc:function(ct,xn,kn){(G!==ct||Z!==xn||de!==kn)&&(r.stencilFunc(ct,xn,kn),G=ct,Z=xn,de=kn)},setOp:function(ct,xn,kn){(he!==ct||ke!==xn||Et!==kn)&&(r.stencilOp(ct,xn,kn),he=ct,ke=xn,Et=kn)},setLocked:function(ct){L=ct},setClear:function(ct){Bt!==ct&&(r.clearStencil(ct),Bt=ct)},reset:function(){L=!1,re=null,G=null,Z=null,de=null,he=null,ke=null,Et=null,Bt=null}}}const s=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,I=null,E=null,R=new _e(0,0,0),C=0,w=!1,M=null,P=null,O=null,F=null,H=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ne=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=ne>=1):W.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=ne>=2);let ae=null,fe={};const be=r.getParameter(r.SCISSOR_BOX),We=r.getParameter(r.VIEWPORT),dt=new it().fromArray(be),K=new it().fromArray(We);function ie(L,re,G,Z){const de=new Uint8Array(4),he=r.createTexture();r.bindTexture(L,he),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ke=0;ke<G;ke++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(re,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,de):r.texImage2D(re+ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,de);return he}const Se={};Se[r.TEXTURE_2D]=ie(r.TEXTURE_2D,r.TEXTURE_2D,1),Se[r.TEXTURE_CUBE_MAP]=ie(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[r.TEXTURE_2D_ARRAY]=ie(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Se[r.TEXTURE_3D]=ie(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(r.DEPTH_TEST),o.setFunc(fs),Ze(!1),$e(il),ce(r.CULL_FACE),U(Qn);function ce(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function Ie(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function Oe(L,re){return u[L]!==re?(r.bindFramebuffer(L,re),u[L]=re,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=re),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=re),!0):!1}function Xe(L,re){let G=f,Z=!1;if(L){G=d.get(re),G===void 0&&(G=[],d.set(re,G));const de=L.textures;if(G.length!==de.length||G[0]!==r.COLOR_ATTACHMENT0){for(let he=0,ke=de.length;he<ke;he++)G[he]=r.COLOR_ATTACHMENT0+he;G.length=de.length,Z=!0}}else G[0]!==r.BACK&&(G[0]=r.BACK,Z=!0);Z&&r.drawBuffers(G)}function St(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const Qe={[Ai]:r.FUNC_ADD,[gd]:r.FUNC_SUBTRACT,[_d]:r.FUNC_REVERSE_SUBTRACT};Qe[vd]=r.MIN,Qe[xd]=r.MAX;const Rt={[yd]:r.ZERO,[Md]:r.ONE,[Sd]:r.SRC_COLOR,[Ma]:r.SRC_ALPHA,[Rd]:r.SRC_ALPHA_SATURATE,[Ed]:r.DST_COLOR,[Td]:r.DST_ALPHA,[wd]:r.ONE_MINUS_SRC_COLOR,[Sa]:r.ONE_MINUS_SRC_ALPHA,[Ad]:r.ONE_MINUS_DST_COLOR,[bd]:r.ONE_MINUS_DST_ALPHA,[Cd]:r.CONSTANT_COLOR,[Pd]:r.ONE_MINUS_CONSTANT_COLOR,[Id]:r.CONSTANT_ALPHA,[Ld]:r.ONE_MINUS_CONSTANT_ALPHA};function U(L,re,G,Z,de,he,ke,Et,Bt,ct){if(L===Qn){_===!0&&(Ie(r.BLEND),_=!1);return}if(_===!1&&(ce(r.BLEND),_=!0),L!==md){if(L!==m||ct!==w){if((p!==Ai||x!==Ai)&&(r.blendEquation(r.FUNC_ADD),p=Ai,x=Ai),ct)switch(L){case ls:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wt:r.blendFunc(r.ONE,r.ONE);break;case sl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ls:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wt:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case sl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,y=null,I=null,E=null,R.set(0,0,0),C=0,m=L,w=ct}return}de=de||re,he=he||G,ke=ke||Z,(re!==p||de!==x)&&(r.blendEquationSeparate(Qe[re],Qe[de]),p=re,x=de),(G!==v||Z!==y||he!==I||ke!==E)&&(r.blendFuncSeparate(Rt[G],Rt[Z],Rt[he],Rt[ke]),v=G,y=Z,I=he,E=ke),(Et.equals(R)===!1||Bt!==C)&&(r.blendColor(Et.r,Et.g,Et.b,Bt),R.copy(Et),C=Bt),m=L,w=!1}function hn(L,re){L.side===kt?Ie(r.CULL_FACE):ce(r.CULL_FACE);let G=L.side===Xt;re&&(G=!G),Ze(G),L.blending===ls&&L.transparent===!1?U(Qn):U(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const Z=L.stencilWrite;a.setTest(Z),Z&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),_t(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ce(r.SAMPLE_ALPHA_TO_COVERAGE):Ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(L){M!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),M=L)}function $e(L){L!==fd?(ce(r.CULL_FACE),L!==P&&(L===il?r.cullFace(r.BACK):L===pd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ie(r.CULL_FACE),P=L}function Ce(L){L!==O&&(V&&r.lineWidth(L),O=L)}function _t(L,re,G){L?(ce(r.POLYGON_OFFSET_FILL),(F!==re||H!==G)&&(r.polygonOffset(re,G),F=re,H=G)):Ie(r.POLYGON_OFFSET_FILL)}function Ae(L){L?ce(r.SCISSOR_TEST):Ie(r.SCISSOR_TEST)}function A(L){L===void 0&&(L=r.TEXTURE0+q-1),ae!==L&&(r.activeTexture(L),ae=L)}function S(L,re,G){G===void 0&&(ae===null?G=r.TEXTURE0+q-1:G=ae);let Z=fe[G];Z===void 0&&(Z={type:void 0,texture:void 0},fe[G]=Z),(Z.type!==L||Z.texture!==re)&&(ae!==G&&(r.activeTexture(G),ae=G),r.bindTexture(L,re||Se[L]),Z.type=L,Z.texture=re)}function k(){const L=fe[ae];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(L){dt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),dt.copy(L))}function ge(L){K.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),K.copy(L))}function Je(L,re){let G=l.get(re);G===void 0&&(G=new WeakMap,l.set(re,G));let Z=G.get(L);Z===void 0&&(Z=r.getUniformBlockIndex(re,L.name),G.set(L,Z))}function He(L,re){const Z=l.get(re).get(L);c.get(re)!==Z&&(r.uniformBlockBinding(re,Z,L.__bindingPointIndex),c.set(re,Z))}function pt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ae=null,fe={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,I=null,E=null,R=new _e(0,0,0),C=0,w=!1,M=null,P=null,O=null,F=null,H=null,dt.set(0,0,r.canvas.width,r.canvas.height),K.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ce,disable:Ie,bindFramebuffer:Oe,drawBuffers:Xe,useProgram:St,setBlending:U,setMaterial:hn,setFlipSided:Ze,setCullFace:$e,setLineWidth:Ce,setPolygonOffset:_t,setScissorTest:Ae,activeTexture:A,bindTexture:S,unbindTexture:k,compressedTexImage2D:j,compressedTexImage3D:$,texImage2D:me,texImage3D:Pe,updateUBOMapping:Je,uniformBlockBinding:He,texStorage2D:et,texStorage3D:ee,texSubImage2D:Y,texSubImage3D:we,compressedTexSubImage2D:le,compressedTexSubImage3D:pe,scissor:Ne,viewport:ge,reset:pt}}function Ql(r,e,t,n){const i=d_(n);switch(t){case ou:return r*e;case cu:return r*e;case lu:return r*e*2;case Sc:return r*e/i.components*i.byteLength;case wc:return r*e/i.components*i.byteLength;case hu:return r*e*2/i.components*i.byteLength;case Tc:return r*e*2/i.components*i.byteLength;case au:return r*e*3/i.components*i.byteLength;case _n:return r*e*4/i.components*i.byteLength;case bc:return r*e*4/i.components*i.byteLength;case ro:case oo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ao:case co:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Da:case Ua:return Math.max(r,16)*Math.max(e,8)/4;case La:case Na:return Math.max(r,8)*Math.max(e,8)/2;case Oa:case Fa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ka:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case za:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Va:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case qa:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ja:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Za:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case $a:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ja:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case lo:case Qa:case ec:return Math.ceil(r/4)*Math.ceil(e/4)*16;case uu:case tc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case nc:case ic:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function d_(r){switch(r){case ni:case iu:return{byteLength:1,components:1};case sr:case su:case ei:return{byteLength:2,components:1};case yc:case Mc:return{byteLength:2,components:4};case Ii:case xc:case En:return{byteLength:4,components:1};case ru:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function f_(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Q,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return f?new OffscreenCanvas(A,S):ar("canvas")}function _(A,S,k){let j=1;const $=Ae(A);if(($.width>k||$.height>k)&&(j=k/Math.max($.width,$.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(j*$.width),we=Math.floor(j*$.height);u===void 0&&(u=g(Y,we));const le=S?g(Y,we):u;return le.width=Y,le.height=we,le.getContext("2d").drawImage(A,0,0,Y,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Y+"x"+we+")."),le}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){r.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(A,S,k,j,$=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=S;if(S===r.RED&&(k===r.FLOAT&&(Y=r.R32F),k===r.HALF_FLOAT&&(Y=r.R16F),k===r.UNSIGNED_BYTE&&(Y=r.R8)),S===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.R8UI),k===r.UNSIGNED_SHORT&&(Y=r.R16UI),k===r.UNSIGNED_INT&&(Y=r.R32UI),k===r.BYTE&&(Y=r.R8I),k===r.SHORT&&(Y=r.R16I),k===r.INT&&(Y=r.R32I)),S===r.RG&&(k===r.FLOAT&&(Y=r.RG32F),k===r.HALF_FLOAT&&(Y=r.RG16F),k===r.UNSIGNED_BYTE&&(Y=r.RG8)),S===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RG8UI),k===r.UNSIGNED_SHORT&&(Y=r.RG16UI),k===r.UNSIGNED_INT&&(Y=r.RG32UI),k===r.BYTE&&(Y=r.RG8I),k===r.SHORT&&(Y=r.RG16I),k===r.INT&&(Y=r.RG32I)),S===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),k===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),k===r.UNSIGNED_INT&&(Y=r.RGB32UI),k===r.BYTE&&(Y=r.RGB8I),k===r.SHORT&&(Y=r.RGB16I),k===r.INT&&(Y=r.RGB32I)),S===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),k===r.UNSIGNED_INT&&(Y=r.RGBA32UI),k===r.BYTE&&(Y=r.RGBA8I),k===r.SHORT&&(Y=r.RGBA16I),k===r.INT&&(Y=r.RGBA32I)),S===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),S===r.RGBA){const we=$?wo:Ke.getTransfer(j);k===r.FLOAT&&(Y=r.RGBA32F),k===r.HALF_FLOAT&&(Y=r.RGBA16F),k===r.UNSIGNED_BYTE&&(Y=we===lt?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(A,S){let k;return A?S===null||S===Ii||S===gs?k=r.DEPTH24_STENCIL8:S===En?k=r.DEPTH32F_STENCIL8:S===sr&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ii||S===gs?k=r.DEPTH_COMPONENT24:S===En?k=r.DEPTH_COMPONENT32F:S===sr&&(k=r.DEPTH_COMPONENT16),k}function I(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Zt&&A.minFilter!==an?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function E(A){const S=A.target;S.removeEventListener("dispose",E),C(S),S.isVideoTexture&&h.delete(S)}function R(A){const S=A.target;S.removeEventListener("dispose",R),M(S)}function C(A){const S=n.get(A);if(S.__webglInit===void 0)return;const k=A.source,j=d.get(k);if(j){const $=j[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&w(A),Object.keys(j).length===0&&d.delete(k)}n.remove(A)}function w(A){const S=n.get(A);r.deleteTexture(S.__webglTexture);const k=A.source,j=d.get(k);delete j[S.__cacheKey],o.memory.textures--}function M(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let $=0;$<S.__webglFramebuffer[j].length;$++)r.deleteFramebuffer(S.__webglFramebuffer[j][$]);else r.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)r.deleteFramebuffer(S.__webglFramebuffer[j]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=A.textures;for(let j=0,$=k.length;j<$;j++){const Y=n.get(k[j]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(k[j])}n.remove(A)}let P=0;function O(){P=0}function F(){const A=P;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),P+=1,A}function H(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function q(A,S){const k=n.get(A);if(A.isVideoTexture&&Ce(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,A,S);return}}t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+S)}function V(A,S){const k=n.get(A);if(A.version>0&&k.__version!==A.version){K(k,A,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+S)}function ne(A,S){const k=n.get(A);if(A.version>0&&k.__version!==A.version){K(k,A,S);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+S)}function W(A,S){const k=n.get(A);if(A.version>0&&k.__version!==A.version){ie(k,A,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+S)}const ae={[Qt]:r.REPEAT,[gn]:r.CLAMP_TO_EDGE,[ir]:r.MIRRORED_REPEAT},fe={[Zt]:r.NEAREST,[nu]:r.NEAREST_MIPMAP_NEAREST,[Ks]:r.NEAREST_MIPMAP_LINEAR,[an]:r.LINEAR,[so]:r.LINEAR_MIPMAP_NEAREST,[Zn]:r.LINEAR_MIPMAP_LINEAR},be={[Gd]:r.NEVER,[jd]:r.ALWAYS,[Wd]:r.LESS,[gu]:r.LEQUAL,[Xd]:r.EQUAL,[qd]:r.GEQUAL,[Yd]:r.GREATER,[Kd]:r.NOTEQUAL};function We(A,S){if(S.type===En&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===an||S.magFilter===so||S.magFilter===Ks||S.magFilter===Zn||S.minFilter===an||S.minFilter===so||S.minFilter===Ks||S.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,ae[S.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,ae[S.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,ae[S.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,fe[S.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,fe[S.minFilter]),S.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,be[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Zt||S.minFilter!==Ks&&S.minFilter!==Zn||S.type===En&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function dt(A,S){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",E));const j=S.source;let $=d.get(j);$===void 0&&($={},d.set(j,$));const Y=H(S);if(Y!==A.__cacheKey){$[Y]===void 0&&($[Y]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),$[Y].usedTimes++;const we=$[A.__cacheKey];we!==void 0&&($[A.__cacheKey].usedTimes--,we.usedTimes===0&&w(S)),A.__cacheKey=Y,A.__webglTexture=$[Y].texture}return k}function K(A,S,k){let j=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=r.TEXTURE_3D);const $=dt(A,S),Y=S.source;t.bindTexture(j,A.__webglTexture,r.TEXTURE0+k);const we=n.get(Y);if(Y.version!==we.__version||$===!0){t.activeTexture(r.TEXTURE0+k);const le=Ke.getPrimaries(Ke.workingColorSpace),pe=S.colorSpace===In?null:Ke.getPrimaries(S.colorSpace),et=S.colorSpace===In||le===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let ee=_(S.image,!1,i.maxTextureSize);ee=_t(S,ee);const me=s.convert(S.format,S.colorSpace),Pe=s.convert(S.type);let Ne=y(S.internalFormat,me,Pe,S.colorSpace,S.isVideoTexture);We(j,S);let ge;const Je=S.mipmaps,He=S.isVideoTexture!==!0,pt=we.__version===void 0||$===!0,L=Y.dataReady,re=I(S,ee);if(S.isDepthTexture)Ne=x(S.format===_s,S.type),pt&&(He?t.texStorage2D(r.TEXTURE_2D,1,Ne,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,Ne,ee.width,ee.height,0,me,Pe,null));else if(S.isDataTexture)if(Je.length>0){He&&pt&&t.texStorage2D(r.TEXTURE_2D,re,Ne,Je[0].width,Je[0].height);for(let G=0,Z=Je.length;G<Z;G++)ge=Je[G],He?L&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,ge.width,ge.height,me,Pe,ge.data):t.texImage2D(r.TEXTURE_2D,G,Ne,ge.width,ge.height,0,me,Pe,ge.data);S.generateMipmaps=!1}else He?(pt&&t.texStorage2D(r.TEXTURE_2D,re,Ne,ee.width,ee.height),L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ee.width,ee.height,me,Pe,ee.data)):t.texImage2D(r.TEXTURE_2D,0,Ne,ee.width,ee.height,0,me,Pe,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){He&&pt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,re,Ne,Je[0].width,Je[0].height,ee.depth);for(let G=0,Z=Je.length;G<Z;G++)if(ge=Je[G],S.format!==_n)if(me!==null)if(He){if(L)if(S.layerUpdates.size>0){const de=Ql(ge.width,ge.height,S.format,S.type);for(const he of S.layerUpdates){const ke=ge.data.subarray(he*de/ge.data.BYTES_PER_ELEMENT,(he+1)*de/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,he,ge.width,ge.height,1,me,ke)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,ge.width,ge.height,ee.depth,me,ge.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,G,Ne,ge.width,ge.height,ee.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?L&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,ge.width,ge.height,ee.depth,me,Pe,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,G,Ne,ge.width,ge.height,ee.depth,0,me,Pe,ge.data)}else{He&&pt&&t.texStorage2D(r.TEXTURE_2D,re,Ne,Je[0].width,Je[0].height);for(let G=0,Z=Je.length;G<Z;G++)ge=Je[G],S.format!==_n?me!==null?He?L&&t.compressedTexSubImage2D(r.TEXTURE_2D,G,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,G,Ne,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?L&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,ge.width,ge.height,me,Pe,ge.data):t.texImage2D(r.TEXTURE_2D,G,Ne,ge.width,ge.height,0,me,Pe,ge.data)}else if(S.isDataArrayTexture)if(He){if(pt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,re,Ne,ee.width,ee.height,ee.depth),L)if(S.layerUpdates.size>0){const G=Ql(ee.width,ee.height,S.format,S.type);for(const Z of S.layerUpdates){const de=ee.data.subarray(Z*G/ee.data.BYTES_PER_ELEMENT,(Z+1)*G/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,ee.width,ee.height,1,me,Pe,de)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,me,Pe,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ne,ee.width,ee.height,ee.depth,0,me,Pe,ee.data);else if(S.isData3DTexture)He?(pt&&t.texStorage3D(r.TEXTURE_3D,re,Ne,ee.width,ee.height,ee.depth),L&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,me,Pe,ee.data)):t.texImage3D(r.TEXTURE_3D,0,Ne,ee.width,ee.height,ee.depth,0,me,Pe,ee.data);else if(S.isFramebufferTexture){if(pt)if(He)t.texStorage2D(r.TEXTURE_2D,re,Ne,ee.width,ee.height);else{let G=ee.width,Z=ee.height;for(let de=0;de<re;de++)t.texImage2D(r.TEXTURE_2D,de,Ne,G,Z,0,me,Pe,null),G>>=1,Z>>=1}}else if(Je.length>0){if(He&&pt){const G=Ae(Je[0]);t.texStorage2D(r.TEXTURE_2D,re,Ne,G.width,G.height)}for(let G=0,Z=Je.length;G<Z;G++)ge=Je[G],He?L&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,me,Pe,ge):t.texImage2D(r.TEXTURE_2D,G,Ne,me,Pe,ge);S.generateMipmaps=!1}else if(He){if(pt){const G=Ae(ee);t.texStorage2D(r.TEXTURE_2D,re,Ne,G.width,G.height)}L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,me,Pe,ee)}else t.texImage2D(r.TEXTURE_2D,0,Ne,me,Pe,ee);m(S)&&p(j),we.__version=Y.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ie(A,S,k){if(S.image.length!==6)return;const j=dt(A,S),$=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+k);const Y=n.get($);if($.version!==Y.__version||j===!0){t.activeTexture(r.TEXTURE0+k);const we=Ke.getPrimaries(Ke.workingColorSpace),le=S.colorSpace===In?null:Ke.getPrimaries(S.colorSpace),pe=S.colorSpace===In||we===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const et=S.isCompressedTexture||S.image[0].isCompressedTexture,ee=S.image[0]&&S.image[0].isDataTexture,me=[];for(let Z=0;Z<6;Z++)!et&&!ee?me[Z]=_(S.image[Z],!0,i.maxCubemapSize):me[Z]=ee?S.image[Z].image:S.image[Z],me[Z]=_t(S,me[Z]);const Pe=me[0],Ne=s.convert(S.format,S.colorSpace),ge=s.convert(S.type),Je=y(S.internalFormat,Ne,ge,S.colorSpace),He=S.isVideoTexture!==!0,pt=Y.__version===void 0||j===!0,L=$.dataReady;let re=I(S,Pe);We(r.TEXTURE_CUBE_MAP,S);let G;if(et){He&&pt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,re,Je,Pe.width,Pe.height);for(let Z=0;Z<6;Z++){G=me[Z].mipmaps;for(let de=0;de<G.length;de++){const he=G[de];S.format!==_n?Ne!==null?He?L&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,0,0,he.width,he.height,Ne,he.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,Je,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,0,0,he.width,he.height,Ne,ge,he.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,Je,he.width,he.height,0,Ne,ge,he.data)}}}else{if(G=S.mipmaps,He&&pt){G.length>0&&re++;const Z=Ae(me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,re,Je,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ee){He?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,me[Z].width,me[Z].height,Ne,ge,me[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Je,me[Z].width,me[Z].height,0,Ne,ge,me[Z].data);for(let de=0;de<G.length;de++){const ke=G[de].image[Z].image;He?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,0,0,ke.width,ke.height,Ne,ge,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,Je,ke.width,ke.height,0,Ne,ge,ke.data)}}else{He?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ne,ge,me[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Je,Ne,ge,me[Z]);for(let de=0;de<G.length;de++){const he=G[de];He?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,0,0,Ne,ge,he.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,Je,Ne,ge,he.image[Z])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),Y.__version=$.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Se(A,S,k,j,$,Y){const we=s.convert(k.format,k.colorSpace),le=s.convert(k.type),pe=y(k.internalFormat,we,le,k.colorSpace),et=n.get(S),ee=n.get(k);if(ee.__renderTarget=S,!et.__hasExternalTextures){const me=Math.max(1,S.width>>Y),Pe=Math.max(1,S.height>>Y);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,Y,pe,me,Pe,S.depth,0,we,le,null):t.texImage2D($,Y,pe,me,Pe,0,we,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),$e(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,$,ee.__webglTexture,0,Ze(S)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,$,ee.__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ce(A,S,k){if(r.bindRenderbuffer(r.RENDERBUFFER,A),S.depthBuffer){const j=S.depthTexture,$=j&&j.isDepthTexture?j.type:null,Y=x(S.stencilBuffer,$),we=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=Ze(S);$e(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,Y,S.width,S.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,le,Y,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Y,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,we,r.RENDERBUFFER,A)}else{const j=S.textures;for(let $=0;$<j.length;$++){const Y=j[$],we=s.convert(Y.format,Y.colorSpace),le=s.convert(Y.type),pe=y(Y.internalFormat,we,le,Y.colorSpace),et=Ze(S);k&&$e(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,et,pe,S.width,S.height):$e(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et,pe,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,pe,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ie(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const $=j.__webglTexture,Y=Ze(S);if(S.depthTexture.format===hs)$e(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0);else if(S.depthTexture.format===_s)$e(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Oe(A){const S=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const $=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",$)};j.addEventListener("dispose",$),S.__depthDisposeCallback=$}S.__boundDepthTexture=j}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ie(S.__webglFramebuffer,A)}else if(k){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=r.createRenderbuffer(),ce(S.__webglDepthbuffer[j],A,!1);else{const $=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),ce(S.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,$)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Xe(A,S,k){const j=n.get(A);S!==void 0&&Se(j.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Oe(A)}function St(A){const S=A.texture,k=n.get(A),j=n.get(S);A.addEventListener("dispose",R);const $=A.textures,Y=A.isWebGLCubeRenderTarget===!0,we=$.length>1;if(we||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=S.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[le]=[];for(let pe=0;pe<S.mipmaps.length;pe++)k.__webglFramebuffer[le][pe]=r.createFramebuffer()}else k.__webglFramebuffer[le]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)k.__webglFramebuffer[le]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(we)for(let le=0,pe=$.length;le<pe;le++){const et=n.get($[le]);et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&$e(A)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let le=0;le<$.length;le++){const pe=$[le];k.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[le]);const et=s.convert(pe.format,pe.colorSpace),ee=s.convert(pe.type),me=y(pe.internalFormat,et,ee,pe.colorSpace,A.isXRRenderTarget===!0),Pe=Ze(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,me,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,k.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),ce(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),We(r.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)Se(k.__webglFramebuffer[le][pe],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,pe);else Se(k.__webglFramebuffer[le],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(S)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let le=0,pe=$.length;le<pe;le++){const et=$[le],ee=n.get(et);t.bindTexture(r.TEXTURE_2D,ee.__webglTexture),We(r.TEXTURE_2D,et),Se(k.__webglFramebuffer,A,et,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,0),m(et)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,j.__webglTexture),We(le,S),S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)Se(k.__webglFramebuffer[pe],A,S,r.COLOR_ATTACHMENT0,le,pe);else Se(k.__webglFramebuffer,A,S,r.COLOR_ATTACHMENT0,le,0);m(S)&&p(le),t.unbindTexture()}A.depthBuffer&&Oe(A)}function Qe(A){const S=A.textures;for(let k=0,j=S.length;k<j;k++){const $=S[k];if(m($)){const Y=v(A),we=n.get($).__webglTexture;t.bindTexture(Y,we),p(Y),t.unbindTexture()}}}const Rt=[],U=[];function hn(A){if(A.samples>0){if($e(A)===!1){const S=A.textures,k=A.width,j=A.height;let $=r.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=n.get(A),le=S.length>1;if(le)for(let pe=0;pe<S.length;pe++)t.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let pe=0;pe<S.length;pe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,we.__webglColorRenderbuffer[pe]);const et=n.get(S[pe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,et,0)}r.blitFramebuffer(0,0,k,j,0,0,k,j,$,r.NEAREST),c===!0&&(Rt.length=0,U.length=0,Rt.push(r.COLOR_ATTACHMENT0+pe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Rt.push(Y),U.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let pe=0;pe<S.length;pe++){t.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,we.__webglColorRenderbuffer[pe]);const et=n.get(S[pe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,et,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const S=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Ze(A){return Math.min(i.maxSamples,A.samples)}function $e(A){const S=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ce(A){const S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function _t(A,S){const k=A.colorSpace,j=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==$t&&k!==In&&(Ke.getTransfer(k)===lt?(j!==_n||$!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function Ae(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=q,this.setTexture2DArray=V,this.setTexture3D=ne,this.setTextureCube=W,this.rebindTextures=Xe,this.setupRenderTarget=St,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=$e}function p_(r,e){function t(n,i=In){let s;const o=Ke.getTransfer(i);if(n===ni)return r.UNSIGNED_BYTE;if(n===yc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Mc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ru)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===iu)return r.BYTE;if(n===su)return r.SHORT;if(n===sr)return r.UNSIGNED_SHORT;if(n===xc)return r.INT;if(n===Ii)return r.UNSIGNED_INT;if(n===En)return r.FLOAT;if(n===ei)return r.HALF_FLOAT;if(n===ou)return r.ALPHA;if(n===au)return r.RGB;if(n===_n)return r.RGBA;if(n===cu)return r.LUMINANCE;if(n===lu)return r.LUMINANCE_ALPHA;if(n===hs)return r.DEPTH_COMPONENT;if(n===_s)return r.DEPTH_STENCIL;if(n===Sc)return r.RED;if(n===wc)return r.RED_INTEGER;if(n===hu)return r.RG;if(n===Tc)return r.RG_INTEGER;if(n===bc)return r.RGBA_INTEGER;if(n===ro||n===oo||n===ao||n===co)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ro)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ro)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ao)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===co)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===La||n===Da||n===Na||n===Ua)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===La)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Da)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Na)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ua)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oa||n===Fa||n===ka)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Oa||n===Fa)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ka)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ba||n===za||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===Ya||n===Ka||n===qa||n===ja||n===Za||n===$a||n===Ja)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ba)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===za)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ha)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Va)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ga)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wa)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xa)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ya)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ka)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qa)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ja)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Za)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$a)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ja)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lo||n===Qa||n===ec)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===lo)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ec)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uu||n===tc||n===nc||n===ic)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===lo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===tc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ic)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class m_ extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tt extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g_={type:"move"};class ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(g_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const __=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class x_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Dt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Wt({vertexShader:__,fragmentShader:v_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new X(new It(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class y_ extends Ui{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new x_,m=t.getContextAttributes();let p=null,v=null;const y=[],x=[],I=new Q;let E=null;const R=new jt;R.viewport=new it;const C=new jt;C.viewport=new it;const w=[R,C],M=new m_;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=y[K];return ie===void 0&&(ie=new ia,y[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=y[K];return ie===void 0&&(ie=new ia,y[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=y[K];return ie===void 0&&(ie=new ia,y[K]=ie),ie.getHandSpace()};function F(K){const ie=x.indexOf(K.inputSource);if(ie===-1)return;const Se=y[ie];Se!==void 0&&(Se.update(K.inputSource,K.frame,l||o),Se.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",q);for(let K=0;K<y.length;K++){const ie=x[K];ie!==null&&(x[K]=null,y[K].disconnect(ie))}P=null,O=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,v=null,dt.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",H),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(I),i.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new An(f.framebufferWidth,f.framebufferHeight,{format:_n,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,Se=null,ce=null;m.depth&&(ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?_s:hs,Se=m.stencil?gs:Ii);const Ie={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ie),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new An(d.textureWidth,d.textureHeight,{format:_n,type:ni,depthTexture:new Ru(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),dt.setContext(i),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(K){for(let ie=0;ie<K.removed.length;ie++){const Se=K.removed[ie],ce=x.indexOf(Se);ce>=0&&(x[ce]=null,y[ce].disconnect(Se))}for(let ie=0;ie<K.added.length;ie++){const Se=K.added[ie];let ce=x.indexOf(Se);if(ce===-1){for(let Oe=0;Oe<y.length;Oe++)if(Oe>=x.length){x.push(Se),ce=Oe;break}else if(x[Oe]===null){x[Oe]=Se,ce=Oe;break}if(ce===-1)break}const Ie=y[ce];Ie&&Ie.connect(Se)}}const V=new b,ne=new b;function W(K,ie,Se){V.setFromMatrixPosition(ie.matrixWorld),ne.setFromMatrixPosition(Se.matrixWorld);const ce=V.distanceTo(ne),Ie=ie.projectionMatrix.elements,Oe=Se.projectionMatrix.elements,Xe=Ie[14]/(Ie[10]-1),St=Ie[14]/(Ie[10]+1),Qe=(Ie[9]+1)/Ie[5],Rt=(Ie[9]-1)/Ie[5],U=(Ie[8]-1)/Ie[0],hn=(Oe[8]+1)/Oe[0],Ze=Xe*U,$e=Xe*hn,Ce=ce/(-U+hn),_t=Ce*-U;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(_t),K.translateZ(Ce),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ie[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ae=Xe+Ce,A=St+Ce,S=Ze-_t,k=$e+(ce-_t),j=Qe*St/A*Ae,$=Rt*St/A*Ae;K.projectionMatrix.makePerspective(S,k,j,$,Ae,A),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ae(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let ie=K.near,Se=K.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(Se=_.depthFar)),M.near=C.near=R.near=ie,M.far=C.far=R.far=Se,(P!==M.near||O!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,O=M.far),R.layers.mask=K.layers.mask|2,C.layers.mask=K.layers.mask|4,M.layers.mask=R.layers.mask|C.layers.mask;const ce=K.parent,Ie=M.cameras;ae(M,ce);for(let Oe=0;Oe<Ie.length;Oe++)ae(Ie[Oe],ce);Ie.length===2?W(M,R,C):M.projectionMatrix.copy(R.projectionMatrix),fe(K,M,ce)};function fe(K,ie,Se){Se===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(Se.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=vs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let be=null;function We(K,ie){if(h=ie.getViewerPose(l||o),g=ie,h!==null){const Se=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ce=!1;Se.length!==M.cameras.length&&(M.cameras.length=0,ce=!0);for(let Oe=0;Oe<Se.length;Oe++){const Xe=Se[Oe];let St=null;if(f!==null)St=f.getViewport(Xe);else{const Rt=u.getViewSubImage(d,Xe);St=Rt.viewport,Oe===0&&(e.setRenderTargetTextures(v,Rt.colorTexture,d.ignoreDepthValues?void 0:Rt.depthStencilTexture),e.setRenderTarget(v))}let Qe=w[Oe];Qe===void 0&&(Qe=new jt,Qe.layers.enable(Oe),Qe.viewport=new it,w[Oe]=Qe),Qe.matrix.fromArray(Xe.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(Xe.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(St.x,St.y,St.width,St.height),Oe===0&&(M.matrix.copy(Qe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ce===!0&&M.cameras.push(Qe)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Oe=u.getDepthInformation(Se[0]);Oe&&Oe.isValid&&Oe.texture&&_.init(e,Oe,i.renderState)}}for(let Se=0;Se<y.length;Se++){const ce=x[Se],Ie=y[Se];ce!==null&&Ie!==void 0&&Ie.update(ce,ie,l||o)}be&&be(K,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const dt=new Au;dt.setAnimationLoop(We),this.setAnimationLoop=function(K){be=K},this.dispose=function(){}}}const wi=new ln,M_=new De;function S_(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Tu(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,wi.copy(x),wi.x*=-1,wi.y*=-1,wi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),m.envMapRotation.value.setFromMatrix4(M_.makeRotationFromEuler(wi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function w_(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function l(v,y){let x=i[v.id];x===void 0&&(g(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",m));const I=y.program;n.updateUBOMapping(v,I);const E=e.render.frame;s[v.id]!==E&&(d(v),s[v.id]=E)}function h(v){const y=u();v.__bindingPointIndex=y;const x=r.createBuffer(),I=v.__size,E=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,I,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=i[v.id],x=v.uniforms,I=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let E=0,R=x.length;E<R;E++){const C=Array.isArray(x[E])?x[E]:[x[E]];for(let w=0,M=C.length;w<M;w++){const P=C[w];if(f(P,E,w,I)===!0){const O=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let q=0;q<F.length;q++){const V=F[q],ne=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,O+H,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,H),H+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,y,x,I){const E=v.value,R=y+"_"+x;if(I[R]===void 0)return typeof E=="number"||typeof E=="boolean"?I[R]=E:I[R]=E.clone(),!0;{const C=I[R];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return I[R]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(v){const y=v.uniforms;let x=0;const I=16;for(let R=0,C=y.length;R<C;R++){const w=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,P=w.length;M<P;M++){const O=w[M],F=Array.isArray(O.value)?O.value:[O.value];for(let H=0,q=F.length;H<q;H++){const V=F[H],ne=_(V),W=x%I,ae=W%ne.boundary,fe=W+ae;x+=ae,fe!==0&&I-fe<ne.storage&&(x+=I-fe),O.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=ne.storage}}}const E=x%I;return E>0&&(x+=I-E),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}class T_{constructor(e={}){const{canvas:t=ff(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this.toneMapping=mi,this.toneMappingExposure=1;const x=this;let I=!1,E=0,R=0,C=null,w=-1,M=null;const P=new it,O=new it;let F=null;const H=new _e(0);let q=0,V=t.width,ne=t.height,W=1,ae=null,fe=null;const be=new it(0,0,V,ne),We=new it(0,0,V,ne);let dt=!1;const K=new Rc;let ie=!1,Se=!1;const ce=new De,Ie=new De,Oe=new b,Xe=new it,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function Rt(){return C===null?W:1}let U=n;function hn(T,D){return t.getContext(T,D)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_c}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",he,!1),U===null){const D="webgl2";if(U=hn(D,T),U===null)throw hn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ze,$e,Ce,_t,Ae,A,S,k,j,$,Y,we,le,pe,et,ee,me,Pe,Ne,ge,Je,He,pt,L;function re(){Ze=new C0(U),Ze.init(),He=new p_(U,Ze),$e=new w0(U,Ze,e,He),Ce=new u_(U,Ze),$e.reverseDepthBuffer&&d&&Ce.buffers.depth.setReversed(!0),_t=new L0(U),Ae=new Zg,A=new f_(U,Ze,Ce,Ae,$e,He,_t),S=new b0(x),k=new R0(x),j=new Bf(U),pt=new M0(U,j),$=new P0(U,j,_t,pt),Y=new N0(U,$,j,_t),Ne=new D0(U,$e,A),ee=new T0(Ae),we=new jg(x,S,k,Ze,$e,pt,ee),le=new S_(x,Ae),pe=new Jg,et=new s_(Ze),Pe=new y0(x,S,k,Ce,Y,f,c),me=new l_(x,Y,$e),L=new w_(U,_t,$e,Ce),ge=new S0(U,Ze,_t),Je=new I0(U,Ze,_t),_t.programs=we.programs,x.capabilities=$e,x.extensions=Ze,x.properties=Ae,x.renderLists=pe,x.shadowMap=me,x.state=Ce,x.info=_t}re();const G=new y_(x,U);this.xr=G,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Ze.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ze.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(V,ne,!1))},this.getSize=function(T){return T.set(V,ne)},this.setSize=function(T,D,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,ne=D,t.width=Math.floor(T*W),t.height=Math.floor(D*W),B===!0&&(t.style.width=T+"px",t.style.height=D+"px"),this.setViewport(0,0,T,D)},this.getDrawingBufferSize=function(T){return T.set(V*W,ne*W).floor()},this.setDrawingBufferSize=function(T,D,B){V=T,ne=D,W=B,t.width=Math.floor(T*B),t.height=Math.floor(D*B),this.setViewport(0,0,T,D)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(be)},this.setViewport=function(T,D,B,z){T.isVector4?be.set(T.x,T.y,T.z,T.w):be.set(T,D,B,z),Ce.viewport(P.copy(be).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(We)},this.setScissor=function(T,D,B,z){T.isVector4?We.set(T.x,T.y,T.z,T.w):We.set(T,D,B,z),Ce.scissor(O.copy(We).multiplyScalar(W).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(T){Ce.setScissorTest(dt=T)},this.setOpaqueSort=function(T){ae=T},this.setTransparentSort=function(T){fe=T},this.getClearColor=function(T){return T.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(T=!0,D=!0,B=!0){let z=0;if(T){let N=!1;if(C!==null){const te=C.texture.format;N=te===bc||te===Tc||te===wc}if(N){const te=C.texture.type,ue=te===ni||te===Ii||te===sr||te===gs||te===yc||te===Mc,xe=Pe.getClearColor(),ye=Pe.getClearAlpha(),Ue=xe.r,Be=xe.g,Me=xe.b;ue?(g[0]=Ue,g[1]=Be,g[2]=Me,g[3]=ye,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Ue,_[1]=Be,_[2]=Me,_[3]=ye,U.clearBufferiv(U.COLOR,0,_))}else z|=U.COLOR_BUFFER_BIT}D&&(z|=U.DEPTH_BUFFER_BIT),B&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",he,!1),pe.dispose(),et.dispose(),Ae.dispose(),S.dispose(),k.dispose(),Y.dispose(),pt.dispose(),L.dispose(),we.dispose(),G.dispose(),G.removeEventListener("sessionstart",jc),G.removeEventListener("sessionend",Zc),_i.stop()};function Z(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const T=_t.autoReset,D=me.enabled,B=me.autoUpdate,z=me.needsUpdate,N=me.type;re(),_t.autoReset=T,me.enabled=D,me.autoUpdate=B,me.needsUpdate=z,me.type=N}function he(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ke(T){const D=T.target;D.removeEventListener("dispose",ke),Et(D)}function Et(T){Bt(T),Ae.remove(T)}function Bt(T){const D=Ae.get(T).programs;D!==void 0&&(D.forEach(function(B){we.releaseProgram(B)}),T.isShaderMaterial&&we.releaseShaderCache(T))}this.renderBufferDirect=function(T,D,B,z,N,te){D===null&&(D=St);const ue=N.isMesh&&N.matrixWorld.determinant()<0,xe=hd(T,D,B,z,N);Ce.setMaterial(z,ue);let ye=B.index,Ue=1;if(z.wireframe===!0){if(ye=$.getWireframeAttribute(B),ye===void 0)return;Ue=2}const Be=B.drawRange,Me=B.attributes.position;let nt=Be.start*Ue,mt=(Be.start+Be.count)*Ue;te!==null&&(nt=Math.max(nt,te.start*Ue),mt=Math.min(mt,(te.start+te.count)*Ue)),ye!==null?(nt=Math.max(nt,0),mt=Math.min(mt,ye.count)):Me!=null&&(nt=Math.max(nt,0),mt=Math.min(mt,Me.count));const vt=mt-nt;if(vt<0||vt===1/0)return;pt.setup(N,z,xe,B,ye);let Jt,st=ge;if(ye!==null&&(Jt=j.get(ye),st=Je,st.setIndex(Jt)),N.isMesh)z.wireframe===!0?(Ce.setLineWidth(z.wireframeLinewidth*Rt()),st.setMode(U.LINES)):st.setMode(U.TRIANGLES);else if(N.isLine){let Te=z.linewidth;Te===void 0&&(Te=1),Ce.setLineWidth(Te*Rt()),N.isLineSegments?st.setMode(U.LINES):N.isLineLoop?st.setMode(U.LINE_LOOP):st.setMode(U.LINE_STRIP)}else N.isPoints?st.setMode(U.POINTS):N.isSprite&&st.setMode(U.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)st.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))st.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Te=N._multiDrawStarts,Bn=N._multiDrawCounts,rt=N._multiDrawCount,yn=ye?j.get(ye).bytesPerElement:1,Fi=Ae.get(z).currentProgram.getUniforms();for(let nn=0;nn<rt;nn++)Fi.setValue(U,"_gl_DrawID",nn),st.render(Te[nn]/yn,Bn[nn])}else if(N.isInstancedMesh)st.renderInstances(nt,vt,N.count);else if(B.isInstancedBufferGeometry){const Te=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Bn=Math.min(B.instanceCount,Te);st.renderInstances(nt,vt,Bn)}else st.render(nt,vt)};function ct(T,D,B){T.transparent===!0&&T.side===kt&&T.forceSinglePass===!1?(T.side=Xt,T.needsUpdate=!0,xr(T,D,B),T.side=Dn,T.needsUpdate=!0,xr(T,D,B),T.side=kt):xr(T,D,B)}this.compile=function(T,D,B=null){B===null&&(B=T),p=et.get(B),p.init(D),y.push(p),B.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),T!==B&&T.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const z=new Set;return T.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const te=N.material;if(te)if(Array.isArray(te))for(let ue=0;ue<te.length;ue++){const xe=te[ue];ct(xe,B,N),z.add(xe)}else ct(te,B,N),z.add(te)}),y.pop(),p=null,z},this.compileAsync=function(T,D,B=null){const z=this.compile(T,D,B);return new Promise(N=>{function te(){if(z.forEach(function(ue){Ae.get(ue).currentProgram.isReady()&&z.delete(ue)}),z.size===0){N(T);return}setTimeout(te,10)}Ze.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let xn=null;function kn(T){xn&&xn(T)}function jc(){_i.stop()}function Zc(){_i.start()}const _i=new Au;_i.setAnimationLoop(kn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(T){xn=T,G.setAnimationLoop(T),T===null?_i.stop():_i.start()},G.addEventListener("sessionstart",jc),G.addEventListener("sessionend",Zc),this.render=function(T,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(D),D=G.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,D,C),p=et.get(T,y.length),p.init(D),y.push(p),Ie.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),K.setFromProjectionMatrix(Ie),Se=this.localClippingEnabled,ie=ee.init(this.clippingPlanes,Se),m=pe.get(T,v.length),m.init(),v.push(m),G.enabled===!0&&G.isPresenting===!0){const te=x.xr.getDepthSensingMesh();te!==null&&Co(te,D,-1/0,x.sortObjects)}Co(T,D,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ae,fe),Qe=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Qe&&Pe.addToRenderList(m,T),this.info.render.frame++,ie===!0&&ee.beginShadows();const B=p.state.shadowsArray;me.render(B,T,D),ie===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,N=m.transmissive;if(p.setupLights(),D.isArrayCamera){const te=D.cameras;if(N.length>0)for(let ue=0,xe=te.length;ue<xe;ue++){const ye=te[ue];Jc(z,N,T,ye)}Qe&&Pe.render(T);for(let ue=0,xe=te.length;ue<xe;ue++){const ye=te[ue];$c(m,T,ye,ye.viewport)}}else N.length>0&&Jc(z,N,T,D),Qe&&Pe.render(T),$c(m,T,D);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(x,T,D),pt.resetDefaultState(),w=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],ie===!0&&ee.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Co(T,D,B,z){if(T.visible===!1)return;if(T.layers.test(D.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(D);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||K.intersectsSprite(T)){z&&Xe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ie);const ue=Y.update(T),xe=T.material;xe.visible&&m.push(T,ue,xe,B,Xe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||K.intersectsObject(T))){const ue=Y.update(T),xe=T.material;if(z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Xe.copy(T.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Xe.copy(ue.boundingSphere.center)),Xe.applyMatrix4(T.matrixWorld).applyMatrix4(Ie)),Array.isArray(xe)){const ye=ue.groups;for(let Ue=0,Be=ye.length;Ue<Be;Ue++){const Me=ye[Ue],nt=xe[Me.materialIndex];nt&&nt.visible&&m.push(T,ue,nt,B,Xe.z,Me)}}else xe.visible&&m.push(T,ue,xe,B,Xe.z,null)}}const te=T.children;for(let ue=0,xe=te.length;ue<xe;ue++)Co(te[ue],D,B,z)}function $c(T,D,B,z){const N=T.opaque,te=T.transmissive,ue=T.transparent;p.setupLightsView(B),ie===!0&&ee.setGlobalState(x.clippingPlanes,B),z&&Ce.viewport(P.copy(z)),N.length>0&&vr(N,D,B),te.length>0&&vr(te,D,B),ue.length>0&&vr(ue,D,B),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Jc(T,D,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new An(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?ei:ni,minFilter:Zn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const te=p.state.transmissionRenderTarget[z.id],ue=z.viewport||P;te.setSize(ue.z,ue.w);const xe=x.getRenderTarget();x.setRenderTarget(te),x.getClearColor(H),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),Qe&&Pe.render(B);const ye=x.toneMapping;x.toneMapping=mi;const Ue=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),ie===!0&&ee.setGlobalState(x.clippingPlanes,z),vr(T,B,z),A.updateMultisampleRenderTarget(te),A.updateRenderTargetMipmap(te),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Me=0,nt=D.length;Me<nt;Me++){const mt=D[Me],vt=mt.object,Jt=mt.geometry,st=mt.material,Te=mt.group;if(st.side===kt&&vt.layers.test(z.layers)){const Bn=st.side;st.side=Xt,st.needsUpdate=!0,Qc(vt,B,z,Jt,st,Te),st.side=Bn,st.needsUpdate=!0,Be=!0}}Be===!0&&(A.updateMultisampleRenderTarget(te),A.updateRenderTargetMipmap(te))}x.setRenderTarget(xe),x.setClearColor(H,q),Ue!==void 0&&(z.viewport=Ue),x.toneMapping=ye}function vr(T,D,B){const z=D.isScene===!0?D.overrideMaterial:null;for(let N=0,te=T.length;N<te;N++){const ue=T[N],xe=ue.object,ye=ue.geometry,Ue=z===null?ue.material:z,Be=ue.group;xe.layers.test(B.layers)&&Qc(xe,D,B,ye,Ue,Be)}}function Qc(T,D,B,z,N,te){T.onBeforeRender(x,D,B,z,N,te),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(x,D,B,z,T,te),N.transparent===!0&&N.side===kt&&N.forceSinglePass===!1?(N.side=Xt,N.needsUpdate=!0,x.renderBufferDirect(B,D,z,N,T,te),N.side=Dn,N.needsUpdate=!0,x.renderBufferDirect(B,D,z,N,T,te),N.side=kt):x.renderBufferDirect(B,D,z,N,T,te),T.onAfterRender(x,D,B,z,N,te)}function xr(T,D,B){D.isScene!==!0&&(D=St);const z=Ae.get(T),N=p.state.lights,te=p.state.shadowsArray,ue=N.state.version,xe=we.getParameters(T,N.state,te,D,B),ye=we.getProgramCacheKey(xe);let Ue=z.programs;z.environment=T.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(T.isMeshStandardMaterial?k:S).get(T.envMap||z.environment),z.envMapRotation=z.environment!==null&&T.envMap===null?D.environmentRotation:T.envMapRotation,Ue===void 0&&(T.addEventListener("dispose",ke),Ue=new Map,z.programs=Ue);let Be=Ue.get(ye);if(Be!==void 0){if(z.currentProgram===Be&&z.lightsStateVersion===ue)return tl(T,xe),Be}else xe.uniforms=we.getUniforms(T),T.onBeforeCompile(xe,x),Be=we.acquireProgram(xe,ye),Ue.set(ye,Be),z.uniforms=xe.uniforms;const Me=z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Me.clippingPlanes=ee.uniform),tl(T,xe),z.needsLights=dd(T),z.lightsStateVersion=ue,z.needsLights&&(Me.ambientLightColor.value=N.state.ambient,Me.lightProbe.value=N.state.probe,Me.directionalLights.value=N.state.directional,Me.directionalLightShadows.value=N.state.directionalShadow,Me.spotLights.value=N.state.spot,Me.spotLightShadows.value=N.state.spotShadow,Me.rectAreaLights.value=N.state.rectArea,Me.ltc_1.value=N.state.rectAreaLTC1,Me.ltc_2.value=N.state.rectAreaLTC2,Me.pointLights.value=N.state.point,Me.pointLightShadows.value=N.state.pointShadow,Me.hemisphereLights.value=N.state.hemi,Me.directionalShadowMap.value=N.state.directionalShadowMap,Me.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Me.spotShadowMap.value=N.state.spotShadowMap,Me.spotLightMatrix.value=N.state.spotLightMatrix,Me.spotLightMap.value=N.state.spotLightMap,Me.pointShadowMap.value=N.state.pointShadowMap,Me.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Be,z.uniformsList=null,Be}function el(T){if(T.uniformsList===null){const D=T.currentProgram.getUniforms();T.uniformsList=ho.seqWithValue(D.seq,T.uniforms)}return T.uniformsList}function tl(T,D){const B=Ae.get(T);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function hd(T,D,B,z,N){D.isScene!==!0&&(D=St),A.resetTextureUnits();const te=D.fog,ue=z.isMeshStandardMaterial?D.environment:null,xe=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:$t,ye=(z.isMeshStandardMaterial?k:S).get(z.envMap||ue),Ue=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Be=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Me=!!B.morphAttributes.position,nt=!!B.morphAttributes.normal,mt=!!B.morphAttributes.color;let vt=mi;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(vt=x.toneMapping);const Jt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,st=Jt!==void 0?Jt.length:0,Te=Ae.get(z),Bn=p.state.lights;if(ie===!0&&(Se===!0||T!==M)){const un=T===M&&z.id===w;ee.setState(z,T,un)}let rt=!1;z.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Bn.state.version||Te.outputColorSpace!==xe||N.isBatchedMesh&&Te.batching===!1||!N.isBatchedMesh&&Te.batching===!0||N.isBatchedMesh&&Te.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Te.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Te.instancing===!1||!N.isInstancedMesh&&Te.instancing===!0||N.isSkinnedMesh&&Te.skinning===!1||!N.isSkinnedMesh&&Te.skinning===!0||N.isInstancedMesh&&Te.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Te.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Te.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Te.instancingMorph===!1&&N.morphTexture!==null||Te.envMap!==ye||z.fog===!0&&Te.fog!==te||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ee.numPlanes||Te.numIntersection!==ee.numIntersection)||Te.vertexAlphas!==Ue||Te.vertexTangents!==Be||Te.morphTargets!==Me||Te.morphNormals!==nt||Te.morphColors!==mt||Te.toneMapping!==vt||Te.morphTargetsCount!==st)&&(rt=!0):(rt=!0,Te.__version=z.version);let yn=Te.currentProgram;rt===!0&&(yn=xr(z,D,N));let Fi=!1,nn=!1,Cs=!1;const xt=yn.getUniforms(),Cn=Te.uniforms;if(Ce.useProgram(yn.program)&&(Fi=!0,nn=!0,Cs=!0),z.id!==w&&(w=z.id,nn=!0),Fi||M!==T){Ce.buffers.depth.getReversed()?(ce.copy(T.projectionMatrix),mf(ce),gf(ce),xt.setValue(U,"projectionMatrix",ce)):xt.setValue(U,"projectionMatrix",T.projectionMatrix),xt.setValue(U,"viewMatrix",T.matrixWorldInverse);const ii=xt.map.cameraPosition;ii!==void 0&&ii.setValue(U,Oe.setFromMatrixPosition(T.matrixWorld)),$e.logarithmicDepthBuffer&&xt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&xt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,nn=!0,Cs=!0)}if(N.isSkinnedMesh){xt.setOptional(U,N,"bindMatrix"),xt.setOptional(U,N,"bindMatrixInverse");const un=N.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),xt.setValue(U,"boneTexture",un.boneTexture,A))}N.isBatchedMesh&&(xt.setOptional(U,N,"batchingTexture"),xt.setValue(U,"batchingTexture",N._matricesTexture,A),xt.setOptional(U,N,"batchingIdTexture"),xt.setValue(U,"batchingIdTexture",N._indirectTexture,A),xt.setOptional(U,N,"batchingColorTexture"),N._colorsTexture!==null&&xt.setValue(U,"batchingColorTexture",N._colorsTexture,A));const Ps=B.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0)&&Ne.update(N,B,yn),(nn||Te.receiveShadow!==N.receiveShadow)&&(Te.receiveShadow=N.receiveShadow,xt.setValue(U,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Cn.envMap.value=ye,Cn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(Cn.envMapIntensity.value=D.environmentIntensity),nn&&(xt.setValue(U,"toneMappingExposure",x.toneMappingExposure),Te.needsLights&&ud(Cn,Cs),te&&z.fog===!0&&le.refreshFogUniforms(Cn,te),le.refreshMaterialUniforms(Cn,z,W,ne,p.state.transmissionRenderTarget[T.id]),ho.upload(U,el(Te),Cn,A)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ho.upload(U,el(Te),Cn,A),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&xt.setValue(U,"center",N.center),xt.setValue(U,"modelViewMatrix",N.modelViewMatrix),xt.setValue(U,"normalMatrix",N.normalMatrix),xt.setValue(U,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const un=z.uniformsGroups;for(let ii=0,si=un.length;ii<si;ii++){const nl=un[ii];L.update(nl,yn),L.bind(nl,yn)}}return yn}function ud(T,D){T.ambientLightColor.needsUpdate=D,T.lightProbe.needsUpdate=D,T.directionalLights.needsUpdate=D,T.directionalLightShadows.needsUpdate=D,T.pointLights.needsUpdate=D,T.pointLightShadows.needsUpdate=D,T.spotLights.needsUpdate=D,T.spotLightShadows.needsUpdate=D,T.rectAreaLights.needsUpdate=D,T.hemisphereLights.needsUpdate=D}function dd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,D,B){Ae.get(T.texture).__webglTexture=D,Ae.get(T.depthTexture).__webglTexture=B;const z=Ae.get(T);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,D){const B=Ae.get(T);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(T,D=0,B=0){C=T,E=D,R=B;let z=!0,N=null,te=!1,ue=!1;if(T){const ye=Ae.get(T);if(ye.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(U.FRAMEBUFFER,null),z=!1;else if(ye.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(ye.__hasExternalTextures)A.rebindTextures(T,Ae.get(T.texture).__webglTexture,Ae.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Me=T.depthTexture;if(ye.__boundDepthTexture!==Me){if(Me!==null&&Ae.has(Me)&&(T.width!==Me.image.width||T.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const Ue=T.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ue=!0);const Be=Ae.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[D])?N=Be[D][B]:N=Be[D],te=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?N=Ae.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?N=Be[B]:N=Be,P.copy(T.viewport),O.copy(T.scissor),F=T.scissorTest}else P.copy(be).multiplyScalar(W).floor(),O.copy(We).multiplyScalar(W).floor(),F=dt;if(Ce.bindFramebuffer(U.FRAMEBUFFER,N)&&z&&Ce.drawBuffers(T,N),Ce.viewport(P),Ce.scissor(O),Ce.setScissorTest(F),te){const ye=Ae.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,ye.__webglTexture,B)}else if(ue){const ye=Ae.get(T.texture),Ue=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,ye.__webglTexture,B||0,Ue)}w=-1},this.readRenderTargetPixels=function(T,D,B,z,N,te,ue){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe){Ce.bindFramebuffer(U.FRAMEBUFFER,xe);try{const ye=T.texture,Ue=ye.format,Be=ye.type;if(!$e.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=T.width-z&&B>=0&&B<=T.height-N&&U.readPixels(D,B,z,N,He.convert(Ue),He.convert(Be),te)}finally{const ye=C!==null?Ae.get(C).__webglFramebuffer:null;Ce.bindFramebuffer(U.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(T,D,B,z,N,te,ue){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe){const ye=T.texture,Ue=ye.format,Be=ye.type;if(!$e.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=T.width-z&&B>=0&&B<=T.height-N){Ce.bindFramebuffer(U.FRAMEBUFFER,xe);const Me=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Me),U.bufferData(U.PIXEL_PACK_BUFFER,te.byteLength,U.STREAM_READ),U.readPixels(D,B,z,N,He.convert(Ue),He.convert(Be),0);const nt=C!==null?Ae.get(C).__webglFramebuffer:null;Ce.bindFramebuffer(U.FRAMEBUFFER,nt);const mt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await pf(U,mt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Me),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,te),U.deleteBuffer(Me),U.deleteSync(mt),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,D=null,B=0){T.isTexture!==!0&&(qs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,T=arguments[1]);const z=Math.pow(2,-B),N=Math.floor(T.image.width*z),te=Math.floor(T.image.height*z),ue=D!==null?D.x:0,xe=D!==null?D.y:0;A.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,ue,xe,N,te),Ce.unbindTexture()},this.copyTextureToTexture=function(T,D,B=null,z=null,N=0){T.isTexture!==!0&&(qs("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1],D=arguments[2],N=arguments[3]||0,B=null);let te,ue,xe,ye,Ue,Be,Me,nt,mt;const vt=T.isCompressedTexture?T.mipmaps[N]:T.image;B!==null?(te=B.max.x-B.min.x,ue=B.max.y-B.min.y,xe=B.isBox3?B.max.z-B.min.z:1,ye=B.min.x,Ue=B.min.y,Be=B.isBox3?B.min.z:0):(te=vt.width,ue=vt.height,xe=vt.depth||1,ye=0,Ue=0,Be=0),z!==null?(Me=z.x,nt=z.y,mt=z.z):(Me=0,nt=0,mt=0);const Jt=He.convert(D.format),st=He.convert(D.type);let Te;D.isData3DTexture?(A.setTexture3D(D,0),Te=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(A.setTexture2DArray(D,0),Te=U.TEXTURE_2D_ARRAY):(A.setTexture2D(D,0),Te=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const Bn=U.getParameter(U.UNPACK_ROW_LENGTH),rt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),yn=U.getParameter(U.UNPACK_SKIP_PIXELS),Fi=U.getParameter(U.UNPACK_SKIP_ROWS),nn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,vt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,vt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ye),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ue),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Be);const Cs=T.isDataArrayTexture||T.isData3DTexture,xt=D.isDataArrayTexture||D.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Cn=Ae.get(T),Ps=Ae.get(D),un=Ae.get(Cn.__renderTarget),ii=Ae.get(Ps.__renderTarget);Ce.bindFramebuffer(U.READ_FRAMEBUFFER,un.__webglFramebuffer),Ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let si=0;si<xe;si++)Cs&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ae.get(T).__webglTexture,N,Be+si),T.isDepthTexture?(xt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ae.get(D).__webglTexture,N,mt+si),U.blitFramebuffer(ye,Ue,te,ue,Me,nt,te,ue,U.DEPTH_BUFFER_BIT,U.NEAREST)):xt?U.copyTexSubImage3D(Te,N,Me,nt,mt+si,ye,Ue,te,ue):U.copyTexSubImage2D(Te,N,Me,nt,mt+si,ye,Ue,te,ue);Ce.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else xt?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Te,N,Me,nt,mt,te,ue,xe,Jt,st,vt.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(Te,N,Me,nt,mt,te,ue,xe,Jt,vt.data):U.texSubImage3D(Te,N,Me,nt,mt,te,ue,xe,Jt,st,vt):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,N,Me,nt,te,ue,Jt,st,vt.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,N,Me,nt,vt.width,vt.height,Jt,vt.data):U.texSubImage2D(U.TEXTURE_2D,N,Me,nt,te,ue,Jt,st,vt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Bn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,rt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,yn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Fi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,nn),N===0&&D.generateMipmaps&&U.generateMipmap(Te),Ce.unbindTexture()},this.copyTextureToTexture3D=function(T,D,B=null,z=null,N=0){return T.isTexture!==!0&&(qs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,T=arguments[2],D=arguments[3],N=arguments[4]||0),qs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,D,B,z,N)},this.initRenderTarget=function(T){Ae.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Ce.unbindTexture()},this.resetState=function(){E=0,R=0,C=null,Ce.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}class Pc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new _e(e),this.density=t}clone(){return new Pc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Du extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Nu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rc,this.updateRanges=[],this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new b;class lr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new lr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Uu extends Rn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ji;const Us=new b,Qi=new b,es=new b,ts=new Q,Os=new Q,Ou=new De,Hr=new b,Fs=new b,Vr=new b,eh=new Q,sa=new Q,th=new Q;class b_ extends gt{constructor(e=new Uu){if(super(),this.isSprite=!0,this.type="Sprite",Ji===void 0){Ji=new Mt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Nu(t,5);Ji.setIndex([0,1,2,0,2,3]),Ji.setAttribute("position",new lr(n,3,0,!1)),Ji.setAttribute("uv",new lr(n,2,3,!1))}this.geometry=Ji,this.material=e,this.center=new Q(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qi.setFromMatrixScale(this.matrixWorld),Ou.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),es.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qi.multiplyScalar(-es.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Gr(Hr.set(-.5,-.5,0),es,o,Qi,i,s),Gr(Fs.set(.5,-.5,0),es,o,Qi,i,s),Gr(Vr.set(.5,.5,0),es,o,Qi,i,s),eh.set(0,0),sa.set(1,0),th.set(1,1);let a=e.ray.intersectTriangle(Hr,Fs,Vr,!1,Us);if(a===null&&(Gr(Fs.set(-.5,.5,0),es,o,Qi,i,s),sa.set(0,1),a=e.ray.intersectTriangle(Hr,Vr,Fs,!1,Us),a===null))return;const c=e.ray.origin.distanceTo(Us);c<e.near||c>e.far||t.push({distance:c,point:Us.clone(),uv:mn.getInterpolation(Us,Hr,Fs,Vr,eh,sa,th,new Q),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Gr(r,e,t,n,i,s){ts.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Os.x=s*ts.x-i*ts.y,Os.y=i*ts.x+s*ts.y):Os.copy(ts),r.copy(e),r.x+=Os.x,r.y+=Os.y,r.applyMatrix4(Ou)}const nh=new b,ih=new it,sh=new it,E_=new b,rh=new De,Wr=new b,ra=new Nn,oh=new De,oa=new To;class Fu extends X{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ol,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new tn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wr),this.boundingBox.expandByPoint(Wr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wr),this.boundingSphere.expandByPoint(Wr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ra.copy(this.boundingSphere),ra.applyMatrix4(i),e.ray.intersectsSphere(ra)!==!1&&(oh.copy(i).invert(),oa.copy(e.ray).applyMatrix4(oh),!(this.boundingBox!==null&&oa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,oa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ol?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Od?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ih.fromBufferAttribute(i.attributes.skinIndex,e),sh.fromBufferAttribute(i.attributes.skinWeight,e),nh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=sh.getComponent(s);if(o!==0){const a=ih.getComponent(s);rh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(E_.copy(nh).applyMatrix4(rh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ku extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Bu extends Dt{constructor(e=null,t=1,n=1,i,s,o,a,c,l=Zt,h=Zt,u,d){super(null,o,a,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ah=new De,A_=new De;class Ic{constructor(e=[],t=[]){this.uuid=vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:A_;ah.multiplyMatrices(a,t[s]),ah.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ic(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Bu(t,e,e,_n,En);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new ku),this.bones.push(o),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class cc extends Ct{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ns=new De,ch=new De,Xr=[],lh=new tn,R_=new De,ks=new X,Bs=new Nn;class ss extends X{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,R_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ns),lh.copy(e.boundingBox).applyMatrix4(ns),this.boundingBox.union(lh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ns),Bs.copy(e.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(Bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),e.ray.intersectsSphere(Bs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ns),ch.multiplyMatrices(n,ns),ks.matrixWorld=ch,ks.raycast(e,Xr);for(let o=0,a=Xr.length;o<a;o++){const c=Xr[o];c.instanceId=s,c.object=this,t.push(c)}Xr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new cc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bu(new Float32Array(i*this.count),i,this.count,Sc,En));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Lc extends Rn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mo=new b,go=new b,hh=new De,zs=new To,Yr=new Nn,aa=new b,uh=new b;class Dc extends gt{constructor(e=new Mt,t=new Lc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)mo.fromBufferAttribute(t,i-1),go.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=mo.distanceTo(go);e.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(i),Yr.radius+=s,e.ray.intersectsSphere(Yr)===!1)return;hh.copy(i).invert(),zs.copy(e.ray).applyMatrix4(hh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),v=h.getX(_+1),y=Kr(this,e,zs,c,p,v);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Kr(this,e,zs,c,_,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=Kr(this,e,zs,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Kr(this,e,zs,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Kr(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(mo.fromBufferAttribute(o,i),go.fromBufferAttribute(o,s),t.distanceSqToSegment(mo,go,aa,uh)>n)return;aa.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(aa);if(!(c<e.near||c>e.far))return{distance:c,point:uh.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const dh=new b,fh=new b;class zu extends Dc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)dh.fromBufferAttribute(t,i),fh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+dh.distanceTo(fh);e.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class C_ extends Dc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Nc extends Rn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ph=new De,lc=new To,qr=new Nn,jr=new b;class Uc extends gt{constructor(e=new Mt,t=new Nc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(i),qr.radius+=s,e.ray.intersectsSphere(qr)===!1)return;ph.copy(i).invert(),lc.copy(e.ray).applyMatrix4(ph);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);jr.fromBufferAttribute(u,m),mh(jr,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)jr.fromBufferAttribute(u,g),mh(jr,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function mh(r,e,t,n,i,s,o){const a=lc.distanceSqToPoint(r);if(a<t){const c=new b;lc.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Hu extends Dt{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=t||(o.isVector2?new Q:new b);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new b,i=[],s=[],o=[],a=new b,c=new De;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new b)}s[0]=new b,o[0]=new b;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Lt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Lt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Oc extends Un{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Q){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class P_ extends Oc{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Fc(){let r=0,e=0,t=0,n=0;function i(s,o,a,c){r=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Zr=new b,ca=new Fc,la=new Fc,ha=new Fc;class I_ extends Un{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new b){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%s]:(Zr.subVectors(i[0],i[1]).add(i[0]),l=Zr);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Zr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Zr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ca.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),la.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),ha.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ca.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),la.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ha.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ca.calc(c),la.calc(c),ha.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new b().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function gh(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,c=r*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*r+t}function L_(r,e){const t=1-r;return t*t*e}function D_(r,e){return 2*(1-r)*r*e}function N_(r,e){return r*r*e}function Js(r,e,t,n){return L_(r,e)+D_(r,t)+N_(r,n)}function U_(r,e){const t=1-r;return t*t*t*e}function O_(r,e){const t=1-r;return 3*t*t*r*e}function F_(r,e){return 3*(1-r)*r*r*e}function k_(r,e){return r*r*r*e}function Qs(r,e,t,n,i){return U_(r,e)+O_(r,t)+F_(r,n)+k_(r,i)}class Vu extends Un{constructor(e=new Q,t=new Q,n=new Q,i=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Q){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Qs(e,i.x,s.x,o.x,a.x),Qs(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class B_ extends Un{constructor(e=new b,t=new b,n=new b,i=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new b){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Qs(e,i.x,s.x,o.x,a.x),Qs(e,i.y,s.y,o.y,a.y),Qs(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gu extends Un{constructor(e=new Q,t=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Q){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class z_ extends Un{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wu extends Un{constructor(e=new Q,t=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Q){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Js(e,i.x,s.x,o.x),Js(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class H_ extends Un{constructor(e=new b,t=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new b){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Js(e,i.x,s.x,o.x),Js(e,i.y,s.y,o.y),Js(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xu extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Q){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(gh(a,c.x,l.x,h.x,u.x),gh(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Q().fromArray(i))}return this}}var _h=Object.freeze({__proto__:null,ArcCurve:P_,CatmullRomCurve3:I_,CubicBezierCurve:Vu,CubicBezierCurve3:B_,EllipseCurve:Oc,LineCurve:Gu,LineCurve3:z_,QuadraticBezierCurve:Wu,QuadraticBezierCurve3:H_,SplineCurve:Xu});class V_ extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _h[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new _h[i.type]().fromJSON(i))}return this}}class hc extends V_{constructor(e){super(),this.type="Path",this.currentPoint=new Q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Gu(this.currentPoint.clone(),new Q(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Wu(this.currentPoint.clone(),new Q(e,t),new Q(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new Vu(this.currentPoint.clone(),new Q(e,t),new Q(n,i),new Q(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Xu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,o,a,c),this}absellipse(e,t,n,i,s,o,a,c){const l=new Oc(e,t,n,i,s,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class kc extends Mt{constructor(e=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Lt(i,0,Math.PI*2);const s=[],o=[],a=[],c=[],l=[],h=1/t,u=new b,d=new Q,f=new b,g=new b,_=new b;let m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let v=0;v<=t;v++){const y=n+v*h*i,x=Math.sin(y),I=Math.cos(y);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*x,u.y=e[E].y,u.z=e[E].x*I,o.push(u.x,u.y,u.z),d.x=v/t,d.y=E/(e.length-1),a.push(d.x,d.y);const R=c[3*E+0]*x,C=c[3*E+1],w=c[3*E+0]*I;l.push(R,C,w)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){const x=y+v*e.length,I=x,E=x+e.length,R=x+e.length+1,C=x+1;s.push(I,E,C),s.push(R,C,E)}this.setIndex(s),this.setAttribute("position",new je(o,3)),this.setAttribute("uv",new je(a,2)),this.setAttribute("normal",new je(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.points,e.segments,e.phiStart,e.phiLength)}}class Bc extends kc{constructor(e=1,t=1,n=4,i=8){const s=new hc;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Bc(e.radius,e.length,e.capSegments,e.radialSegments)}}class gi extends Mt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new b,h=new Q;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(a,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Gt extends Mt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(d,3)),this.setAttribute("uv",new je(f,2));function v(){const x=new b,I=new b;let E=0;const R=(t-e)/n;for(let C=0;C<=s;C++){const w=[],M=C/s,P=M*(t-e)+e;for(let O=0;O<=i;O++){const F=O/i,H=F*c+a,q=Math.sin(H),V=Math.cos(H);I.x=P*q,I.y=-M*n+m,I.z=P*V,u.push(I.x,I.y,I.z),x.set(q,R,V).normalize(),d.push(x.x,x.y,x.z),f.push(F,1-M),w.push(g++)}_.push(w)}for(let C=0;C<i;C++)for(let w=0;w<s;w++){const M=_[w][C],P=_[w+1][C],O=_[w+1][C+1],F=_[w][C+1];(e>0||w!==0)&&(h.push(M,P,F),E+=3),(t>0||w!==s-1)&&(h.push(P,O,F),E+=3)}l.addGroup(p,E,0),p+=E}function y(x){const I=g,E=new Q,R=new b;let C=0;const w=x===!0?e:t,M=x===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const P=g;for(let O=0;O<=i;O++){const H=O/i*c+a,q=Math.cos(H),V=Math.sin(H);R.x=w*V,R.y=m*M,R.z=w*q,u.push(R.x,R.y,R.z),d.push(0,M,0),E.x=q*.5+.5,E.y=V*.5*M+.5,f.push(E.x,E.y),g++}for(let O=0;O<i;O++){const F=I+O,H=P+O;x===!0?h.push(H,H+1,F):h.push(H+1,H,F),C+=3}l.addGroup(p,C,x===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hr extends Gt{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new hr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zc extends Mt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),l(n),h(),this.setAttribute("position",new je(s,3)),this.setAttribute("normal",new je(s.slice(),3)),this.setAttribute("uv",new je(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new b,x=new b,I=new b;for(let E=0;E<t.length;E+=3)f(t[E+0],y),f(t[E+1],x),f(t[E+2],I),c(y,x,I,v)}function c(v,y,x,I){const E=I+1,R=[];for(let C=0;C<=E;C++){R[C]=[];const w=v.clone().lerp(x,C/E),M=y.clone().lerp(x,C/E),P=E-C;for(let O=0;O<=P;O++)O===0&&C===E?R[C][O]=w:R[C][O]=w.clone().lerp(M,O/P)}for(let C=0;C<E;C++)for(let w=0;w<2*(E-C)-1;w++){const M=Math.floor(w/2);w%2===0?(d(R[C][M+1]),d(R[C+1][M]),d(R[C][M])):(d(R[C][M+1]),d(R[C+1][M+1]),d(R[C+1][M]))}}function l(v){const y=new b;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(v),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function h(){const v=new b;for(let y=0;y<s.length;y+=3){v.x=s[y+0],v.y=s[y+1],v.z=s[y+2];const x=m(v)/2/Math.PI+.5,I=p(v)/Math.PI+.5;o.push(x,1-I)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){const y=o[v+0],x=o[v+2],I=o[v+4],E=Math.max(y,x,I),R=Math.min(y,x,I);E>.9&&R<.1&&(y<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),I<.2&&(o[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,y){const x=v*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const v=new b,y=new b,x=new b,I=new b,E=new Q,R=new Q,C=new Q;for(let w=0,M=0;w<s.length;w+=9,M+=6){v.set(s[w+0],s[w+1],s[w+2]),y.set(s[w+3],s[w+4],s[w+5]),x.set(s[w+6],s[w+7],s[w+8]),E.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),I.copy(v).add(y).add(x).divideScalar(3);const P=m(I);_(E,M+0,v,P),_(R,M+2,y,P),_(C,M+4,x,P)}}function _(v,y,x,I){I<0&&v.x===1&&(o[y]=v.x-1),x.x===0&&x.z===0&&(o[y]=I/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zc(e.vertices,e.indices,e.radius,e.details)}}class Yu extends hc{constructor(e){super(e),this.uuid=vn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new hc().fromJSON(i))}return this}}const G_={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Ku(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,u,d,f;if(n&&(s=q_(r,e,s,t)),r.length>80*t){a=l=r[0],c=h=r[1];for(let g=t;g<i;g+=t)u=r[g],d=r[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return ur(s,o,t,a,c,f,0),o}};function Ku(r,e,t,n,i){let s,o;if(i===rv(r,e,t,n)>0)for(s=e;s<t;s+=n)o=vh(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=vh(s,r[s],r[s+1],o);return o&&Ao(o,o.next)&&(fr(o),o=o.next),o}function Li(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Ao(t,t.next)||bt(t.prev,t,t.next)===0)){if(fr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ur(r,e,t,n,i,s,o){if(!r)return;!o&&s&&Q_(r,n,i,s);let a=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?X_(r,n,i,s):W_(r)){e.push(c.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),fr(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=Y_(Li(r),e,t),ur(r,e,t,n,i,s,2)):o===2&&K_(r,e,t,n,i,s):ur(Li(r),e,t,n,i,s,1);break}}}function W_(r){const e=r.prev,t=r,n=r.next;if(bt(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<c?a<l?a:l:c<l?c:l,d=i>s?i>o?i:o:s>o?s:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&cs(i,a,s,c,o,l,g.x,g.y)&&bt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function X_(r,e,t,n){const i=r.prev,s=r,o=r.next;if(bt(i,s,o)>=0)return!1;const a=i.x,c=s.x,l=o.x,h=i.y,u=s.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=uc(f,g,e,t,n),v=uc(_,m,e,t,n);let y=r.prevZ,x=r.nextZ;for(;y&&y.z>=p&&x&&x.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&cs(a,h,c,u,l,d,y.x,y.y)&&bt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&cs(a,h,c,u,l,d,x.x,x.y)&&bt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&cs(a,h,c,u,l,d,y.x,y.y)&&bt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&cs(a,h,c,u,l,d,x.x,x.y)&&bt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Y_(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Ao(i,s)&&qu(i,n,n.next,s)&&dr(i,s)&&dr(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),fr(n),fr(n.next),n=r=s),n=n.next}while(n!==r);return Li(n)}function K_(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&nv(o,a)){let c=ju(o,a);o=Li(o,o.next),c=Li(c,c.next),ur(o,e,t,n,i,s,0),ur(c,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function q_(r,e,t,n){const i=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*n,c=s<o-1?e[s+1]*n:r.length,l=Ku(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(tv(l));for(i.sort(j_),s=0;s<i.length;s++)t=Z_(i[s],t);return t}function j_(r,e){return r.x-e.x}function Z_(r,e){const t=$_(r,e);if(!t)return e;const n=ju(t,r);return Li(n,n.next),Li(t,t.next)}function $_(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;t=i;do s>=t.x&&t.x>=c&&s!==t.x&&cs(o<l?s:n,o,c,l,o<l?n:s,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(s-t.x),dr(t,r)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&J_(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function J_(r,e){return bt(r.prev,r,e.prev)<0&&bt(e.next,r,r.next)<0}function Q_(r,e,t,n){let i=r;do i.z===0&&(i.z=uc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,ev(i)}function ev(r){let e,t,n,i,s,o,a,c,l=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,l*=2}while(o>1);return r}function uc(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function tv(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function cs(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function nv(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!iv(r,e)&&(dr(r,e)&&dr(e,r)&&sv(r,e)&&(bt(r.prev,r,e.prev)||bt(r,e.prev,e))||Ao(r,e)&&bt(r.prev,r,r.next)>0&&bt(e.prev,e,e.next)>0)}function bt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ao(r,e){return r.x===e.x&&r.y===e.y}function qu(r,e,t,n){const i=Jr(bt(r,e,t)),s=Jr(bt(r,e,n)),o=Jr(bt(t,n,r)),a=Jr(bt(t,n,e));return!!(i!==s&&o!==a||i===0&&$r(r,t,e)||s===0&&$r(r,n,e)||o===0&&$r(t,r,n)||a===0&&$r(t,e,n))}function $r(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Jr(r){return r>0?1:r<0?-1:0}function iv(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&qu(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function dr(r,e){return bt(r.prev,r,r.next)<0?bt(r,e,r.next)>=0&&bt(r,r.prev,e)>=0:bt(r,e,r.prev)<0||bt(r,r.next,e)<0}function sv(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function ju(r,e){const t=new dc(r.i,r.x,r.y),n=new dc(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function vh(r,e,t,n){const i=new dc(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function fr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function dc(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function rv(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class er{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return er.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];xh(e),yh(n,e);let o=e.length;t.forEach(xh);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,yh(n,t[c]);const a=G_.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function xh(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function yh(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Hc extends zc{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Hc(e.radius,e.detail)}}class Di extends Mt{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new b,g=new Q;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=s+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const v=p+m,y=v,x=v+n+1,I=v+n+2,E=v+1;a.push(y,x,E),a.push(x,I,E)}}this.setIndex(a),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(l,3)),this.setAttribute("uv",new je(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Vc extends Mt{constructor(e=new Yu([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new je(i,3)),this.setAttribute("normal",new je(s,3)),this.setAttribute("uv",new je(o,2));function l(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const g=d.holes;er.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const v=g[m];er.isClockWise(v)===!0&&(g[m]=v.reverse())}const _=er.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const v=g[m];f=f.concat(v)}for(let m=0,p=f.length;m<p;m++){const v=f[m];i.push(v.x,v.y,0),s.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=_.length;m<p;m++){const v=_[m],y=v[0]+u,x=v[1]+u,I=v[2]+u;n.push(y,x,I),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return ov(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new Vc(n,e.curveSegments)}}function ov(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class on extends Mt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new b,d=new b,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let I=0;I<=t;I++){const E=I/t;u.x=-e*Math.cos(i+E*s)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(i+E*s)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(E+x,1-y),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const y=h[p][v+1],x=h[p][v],I=h[p+1][v],E=h[p+1][v+1];(p!==0||o>0)&&f.push(y,x,E),(p!==n-1||c<Math.PI)&&f.push(x,I,E)}this.setIndex(f),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pi extends Mt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new b,u=new b,d=new b;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*s,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,v=(i+1)*f+g;o.push(_,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(c,3)),this.setAttribute("uv",new je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class av extends Wt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class ve extends Rn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mu,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class On extends ve{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Qr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function cv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function lv(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Mh(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function Zu(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class mr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class hv extends mr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rs,endingEnd:rs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case os:s=e,a=2*t-n;break;case fo:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case os:o=e,c=2*n-t;break;case fo:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let I=0;I!==a;++I)s[I]=p*o[h+I]+v*o[l+I]+y*o[c+I]+x*o[u+I];return s}}class $u extends mr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}}class uv extends mr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Fn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qr(t,this.TimeBufferType),this.values=Qr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qr(e.times,Array),values:Qr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new uv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $u(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case rr:t=this.InterpolantFactoryMethodDiscrete;break;case or:t=this.InterpolantFactoryMethodLinear;break;case Po:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return or;case this.InterpolantFactoryMethodSmooth:return Po}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&cv(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Po,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=or;class bs extends Fn{constructor(e,t,n){super(e,t,n)}}bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=rr;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ju extends Fn{}Ju.prototype.ValueTypeName="color";class ys extends Fn{}ys.prototype.ValueTypeName="number";class dv extends mr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)Ft.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Ms extends Fn{InterpolantFactoryMethodLinear(e){return new dv(this.times,this.values,this.getValueSize(),e)}}Ms.prototype.ValueTypeName="quaternion";Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class Es extends Fn{constructor(e,t,n){super(e,t,n)}}Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=rr;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;class Ss extends Fn{}Ss.prototype.ValueTypeName="vector";class fc{constructor(e="",t=-1,n=[],i=Ec){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=vn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(pv(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Fn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=lv(c);c=Mh(c,1,h),l=Mh(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new ys(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];Zu(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){const y=d[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new ys(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(Ss,f+".position",d,"pos",i),n(Ms,f+".quaternion",d,"rot",i),n(Ss,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function fv(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ys;case"vector":case"vector2":case"vector3":case"vector4":return Ss;case"color":return Ju;case"quaternion":return Ms;case"bool":case"boolean":return bs;case"string":return Es}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function pv(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=fv(r.type);if(r.times===void 0){const t=[],n=[];Zu(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const pi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class mv{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const gv=new mv;class As{constructor(e){this.manager=e!==void 0?e:gv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}As.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xn={};class _v extends Error{constructor(e,t){super(e),this.response=t}}class Qu extends As{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=pi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Xn[e]!==void 0){Xn[e].push({onLoad:t,onProgress:n,onError:i});return}Xn[e]=[],Xn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Xn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){u.read().then(({done:y,value:x})=>{if(y)p.close();else{_+=x.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let E=0,R=h.length;E<R;E++){const C=h[E];C.onProgress&&C.onProgress(I)}p.enqueue(x),v()}},y=>{p.error(y)})}}});return new Response(m)}else throw new _v(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{pi.add(e,l);const h=Xn[e];delete Xn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Xn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Xn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class vv extends As{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=pi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ar("img");function c(){h(),pi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class _o extends As{constructor(e){super(e)}load(e,t,n,i){const s=new Dt,o=new vv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ro extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class xv extends Ro{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ua=new De,Sh=new b,wh=new b;class Gc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rc,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Sh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sh),wh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wh),t.updateMatrixWorld(),ua.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ua),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ua)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class yv extends Gc{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=vs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Mv extends Ro{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new yv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Th=new De,Hs=new b,da=new b;class Sv extends Gc{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Hs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hs),da.copy(n.position),da.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(da),n.updateMatrixWorld(),i.makeTranslation(-Hs.x,-Hs.y,-Hs.z),Th.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Th)}}class vo extends Ro{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Sv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wv extends Gc{constructor(){super(new bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ed extends Ro{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new wv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class tr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Tv extends As{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=pi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return pi.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),pi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});pi.add(e,c),s.manager.itemStart(e)}}class td{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=bh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function bh(){return performance.now()}class bv{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Ft.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;Ft.multiplyQuaternionsFlat(e,o,e,t,e,n),Ft.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Wc="\\[\\]\\.:\\/",Ev=new RegExp("["+Wc+"]","g"),Xc="[^"+Wc+"]",Av="[^"+Wc.replace("\\.","")+"]",Rv=/((?:WC+[\/:])*)/.source.replace("WC",Xc),Cv=/(WCOD+)?/.source.replace("WCOD",Av),Pv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xc),Iv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xc),Lv=new RegExp("^"+Rv+Cv+Pv+Iv+"$"),Dv=["material","materials","bones","map"];class Nv{constructor(e,t,n){const i=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ot{constructor(e,t,n){this.path=t,this.parsedPath=n||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,n):new ot(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ev,"")}static parseTrackName(e){const t=Lv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Dv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=Nv;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Uv{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),c={endingStart:rs,endingEnd:rs};for(let l=0;l!==o;++l){const h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=fu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case kd:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Ec:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===Fd;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===du){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=os,i.endingEnd=os):(e?i.endingStart=this.zeroSlopeAtStart?os:rs:i.endingStart=fo,t?i.endingEnd=this.zeroSlopeAtEnd?os:rs:i.endingEnd=fo)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=n,this}}const Ov=new Float32Array(1);class Eh extends Ui{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new bv(ot.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new $u(new Float32Array(2),new Float32Array(2),1,Ov),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?fc.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Ec),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new Uv(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?fc.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_c}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_c);const nd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Rs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Fv=new bo(-1,1,1,-1,0,1);class kv extends Mt{constructor(){super(),this.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new je([0,2,0,0,2,0],2))}}const Bv=new kv;class Yc{constructor(e){this._mesh=new X(Bv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Fv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class zv extends Rs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=cr.clone(e.uniforms),this.material=new Wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Yc(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ah extends Rs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Hv extends Rs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Vv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Q);this._width=n.width,this._height=n.height,t=new An(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ei}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new zv(nd),this.copyPass.material.blending=Qn,this.clock=new td}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ah!==void 0&&(o instanceof Ah?n=!0:o instanceof Hv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Gv extends Rs{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new _e}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Wv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _e(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ws extends Rs{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Q(e.x,e.y):new Q(256,256),this.clearColor=new _e(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new An(s,o,{type:ei}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new An(s,o,{type:ei});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new An(s,o,{type:ei});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}const a=Wv;this.highPassUniforms=cr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Wt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Q(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=nd;this.copyUniforms=cr.clone(h.uniforms),this.blendMaterial=new Wt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:wt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new _e,this.oldClearAlpha=1,this.basic=new Le,this.fsQuad=new Yc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Q(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=ws.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=ws.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Wt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Q(.5,.5)},direction:{value:new Q(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ws.BlurDirectionX=new Q(1,0);ws.BlurDirectionY=new Q(0,1);const Xv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Yv extends Rs{constructor(){super();const e=Xv;this.uniforms=cr.clone(e.uniforms),this.material=new av({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Yc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ke.getTransfer(this._outputColorSpace)===lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$h?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Qh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===eu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Rh(r,e){if(e===Bd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===sc||e===pu){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===sc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class xo extends As{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new $v(t)}),this.register(function(t){return new Jv(t)}),this.register(function(t){return new ax(t)}),this.register(function(t){return new cx(t)}),this.register(function(t){return new lx(t)}),this.register(function(t){return new ex(t)}),this.register(function(t){return new tx(t)}),this.register(function(t){return new nx(t)}),this.register(function(t){return new ix(t)}),this.register(function(t){return new Zv(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new Qv(t)}),this.register(function(t){return new ox(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new qv(t)}),this.register(function(t){return new hx(t)}),this.register(function(t){return new ux(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=tr.extractUrlBase(e);o=tr.resolveURL(l,this.path)}else o=tr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Qu(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===id){try{o[Ye.KHR_BINARY_GLTF]=new dx(e)}catch(u){i&&i(u);return}s=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new bx(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Ye.KHR_MATERIALS_UNLIT:o[u]=new jv;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[u]=new fx(s,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[u]=new px;break;case Ye.KHR_MESH_QUANTIZATION:o[u]=new mx;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Kv(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class qv{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new _e(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],$t);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ed(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new vo(h),l.distance=u;break;case"spot":l=new Mv(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,jn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class jv{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return Le}extendParams(e,t,n){const i=[];e.color=new _e(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],$t),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,At))}return Promise.all(i)}}class Zv{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class $v{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Q(a,a)}return Promise.all(s)}}class Jv{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Qv{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class ex{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new _e(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],$t)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,At)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class tx{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class nx{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new _e().setRGB(a[0],a[1],a[2],$t),Promise.all(s)}}class ix{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class sx{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new _e().setRGB(a[0],a[1],a[2],$t),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,At)),Promise.all(s)}}class rx{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class ox{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class ax{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class cx{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class lx{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class hx{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class ux{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==pn.TRIANGLES&&l.mode!==pn.TRIANGLE_STRIP&&l.mode!==pn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new De,m=new b,p=new Ft,v=new b(1,1,1),y=new ss(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,_.compose(m,p,v));for(const x in c)if(x==="_COLOR_0"){const I=c[x];y.instanceColor=new cc(I.array,I.itemSize,I.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);gt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const id="glTF",Vs=12,Ch={JSON:1313821514,BIN:5130562};class dx{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Vs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==id)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Vs,s=new DataView(e,Vs);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===Ch.JSON){const l=new Uint8Array(e,Vs+o,a);this.content=n.decode(l)}else if(c===Ch.BIN){const l=Vs+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class fx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=pc[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=pc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=ds[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},a,l,$t,d)})})}}class px{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class mx{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class sd extends mr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,v=1-m,y=p-d+u;for(let x=0;x!==a;x++){const I=o[_+x+a],E=o[_+x+c]*h,R=o[g+x+a],C=o[g+x]*h;s[x]=v*I+y*E+m*R+p*C}return s}}const gx=new Ft;class _x extends sd{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return gx.fromArray(s).normalize().toArray(s),s}}const pn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ds={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ph={9728:Zt,9729:an,9984:nu,9985:so,9986:Ks,9987:Zn},Ih={33071:gn,33648:ir,10497:Qt},fa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},pc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vx={CUBICSPLINE:void 0,LINEAR:or,STEP:rr},pa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xx(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ve({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Dn})),r.DefaultMaterial}function Ti(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function jn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function yx(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function Mx(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Sx(r){let e;const t=r.extensions&&r.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ma(t.attributes):e=r.indices+":"+ma(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+ma(r.targets[n]);return e}function ma(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function mc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function wx(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Tx=new De;class bx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Kv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new _o(this.options.manager):this.textureLoader=new Tv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ti(s,a,i),jn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())s(h,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(tr.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=fa[i.type],a=ds[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Ct(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=fa[i.type],l=ds[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(v);y||(_=new l(a,p*f,i.count*f/h),y=new Nu(_,f/h),t.cache.add(v,y)),m=new lr(y,c,d%f/h,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),m=new Ct(_,c,g);if(i.sparse!==void 0){const p=fa.SCALAR,v=ds[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,I=new v(o[1],y,i.sparse.count*p),E=new l(o[2],x,i.sparse.count*c);a!==null&&(m=new Ct(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,C=I.length;R<C;R++){const w=I[R];if(m.setX(w,E[R*c]),c>=2&&m.setY(w,E[R*c+1]),c>=3&&m.setZ(w,E[R*c+2]),c>=4&&m.setW(w,E[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=Ph[d.magFilter]||an,h.minFilter=Ph[d.minFilter]||Zn,h.wrapS=Ih[d.wrapS]||Qt,h.wrapT=Ih[d.wrapT]||Qt,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Zt&&h.minFilter!==an,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Dt(_);m.needsUpdate=!0,d(m)}),t.load(tr.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),jn(u,o),u.userData.mimeType=o.mimeType||wx(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Nc,Rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Lc,Rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ve}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[Ye.KHR_MATERIALS_UNLIT]){const u=i[Ye.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new _e(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],$t),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,At)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=kt);const h=s.alphaMode||pa.OPAQUE;if(h===pa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===pa.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Le&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Q(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==Le&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Le){const u=s.emissiveFactor;a.emissive=new _e().setRGB(u[0],u[1],u[2],$t)}return s.emissiveTexture!==void 0&&o!==Le&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,At)),Promise.all(l).then(function(){const u=new o(a);return s.name&&(u.name=s.name),jn(u,s),t.associations.set(u,{materials:e}),s.extensions&&Ti(i,u,s),u})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Lh(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=Sx(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Lh(new Mt,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?xx(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const v=l[f];if(m.mode===pn.TRIANGLES||m.mode===pn.TRIANGLE_STRIP||m.mode===pn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Fu(_,v):new X(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===pn.TRIANGLE_STRIP?p.geometry=Rh(p.geometry,pu):m.mode===pn.TRIANGLE_FAN&&(p.geometry=Rh(p.geometry,sc));else if(m.mode===pn.LINES)p=new zu(_,v);else if(m.mode===pn.LINE_STRIP)p=new Dc(_,v);else if(m.mode===pn.LINE_LOOP)p=new C_(_,v);else if(m.mode===pn.POINTS)p=new Uc(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Mx(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),jn(p,s),m.extensions&&Ti(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&Ti(i,u[0],s),u[0];const d=new tt;s.extensions&&Ti(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(Ri.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new bo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),jn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new De;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ic(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let v=0,y=d.length;v<y;v++){const x=d[v],I=f[v],E=g[v],R=_[v],C=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const w=n._createAnimationTracks(x,I,E,R,C);if(w)for(let M=0;M<w.length;M++)p.push(w[M])}return new fc(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Tx)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new ku:l.length>1?h=new tt:l.length===1?h=l[0]:h=new gt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=o),jn(h,s),s.extensions&&Ti(n,h,s),s.matrix!==void 0){const u=new De;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new tt;n.name&&(s.name=i.createUniqueName(n.name)),jn(s,n),n.extensions&&Ti(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Rn||d instanceof Dt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,c=[];ui[s.path]===ui.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(ui[s.path]){case ui.weights:l=ys;break;case ui.rotation:l=Ms;break;case ui.position:case ui.scale:l=Ss;break;default:switch(n.itemSize){case 1:l=ys;break;case 2:case 3:default:l=Ss;break}break}const h=i.interpolation!==void 0?vx[i.interpolation]:or,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+ui[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=mc(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ms?_x:sd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ex(r,e,t){const n=e.attributes,i=new tn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new b(c[0],c[1],c[2]),new b(l[0],l[1],l[2])),a.normalized){const h=mc(ds[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new b,c=new b;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=mc(ds[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Nn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Lh(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=pc[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Ke.workingColorSpace!==$t&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),jn(r,e),Ex(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?yx(r,e.targets,t):r})}const Dh=Object.freeze(Object.defineProperty({__proto__:null,GLTFLoader:xo},Symbol.toStringTag,{value:"Module"}));function Ax(r){const e=new Map,t=new Map,n=r.clone();return rd(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function rd(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)rd(r.children[n],e.children[n],t)}const Rx=""+new URL("vixen-Bw6QEIQL.glb",import.meta.url).href,Cx=""+new URL("kailee-D5sbQsJE.glb",import.meta.url).href,Px=""+new URL("brianna-DixyBXZ7.glb",import.meta.url).href,Ix=""+new URL("payton-Du6iA-Fc.glb",import.meta.url).href,Lx=""+new URL("viper01-BlwxbHqH.glb",import.meta.url).href,Dx=""+new URL("viper02-2GCf4iAW.glb",import.meta.url).href,Nx=""+new URL("viper03-B25DYgFy.glb",import.meta.url).href,Ux=""+new URL("enforcer-CdRKLSXk.glb",import.meta.url).href,Ox=""+new URL("falcon-ncD82WOH.glb",import.meta.url).href,Fx=""+new URL("anims-Ce56vesA.glb",import.meta.url).href,kx=""+new URL("dockmood-CKkclv7Y.glb",import.meta.url).href,Bx=""+new URL("asphalt_normal-Dcisc5Pc.webp",import.meta.url).href,zx=""+new URL("hazard_stripe-BN7jM8wo.webp",import.meta.url).href,Hx=""+new URL("rust-D2EaGUf_.webp",import.meta.url).href,Vx=""+new URL("serials-jyHsnxhS.png",import.meta.url).href,Gx=""+new URL("gate_energy-BW75o9Zi.webp",import.meta.url).href,Wx=""+new URL("brand_billboard-D90d5nHR.webp",import.meta.url).href,Xx=""+new URL("brand_mark-C5afjhVd.webp",import.meta.url).href,Yx=""+new URL("brand_lockup-UNh_TFCl.webp",import.meta.url).href,Nh={vixen:Rx,kailee:Cx,brianna:Px,payton:Ix,viper01:Lx,viper02:Dx,viper03:Nx,enforcer:Ux,falcon:Ox,anims:Fx,dock:kx},Uh={asphaltNormal:Bx,hazard:zx,rust:Hx,serials:Vx,gateEnergy:Gx,billboard:Wx,mark:Xx},yt={gltf:{},tex:{},clips:{},failed:[]};async function Kx(r){const e=new xo,t=new _o,n=Object.keys(Nh),i=Object.keys(Uh),s=n.length+i.length;let o=0;const a=l=>{o++,r(o,s,l)};await Promise.all([...n.map(async l=>{try{yt.gltf[l]=await e.loadAsync(Nh[l])}catch(h){console.warn("[GM] model failed, using procedural fallback:",l,h),yt.failed.push(l)}a(l)}),...i.map(async l=>{try{const h=await t.loadAsync(Uh[l]);h.colorSpace=l==="asphaltNormal"?In:At,yt.tex[l]=h}catch(h){console.warn("[GM] texture failed:",l,h),yt.failed.push(l)}a(l)})]);for(const l of["viper01","viper02","viper03"])yt.gltf[l]?.scene.traverse(h=>{const u=h;if(!u.isSkinnedMesh||!/Body/i.test(u.name))return;const d=u.geometry,f=d.attributes.position,g=d.index?Array.from(d.index.array):Array.from({length:f.count},(p,v)=>v),_=p=>f.getY(p)>1.92||Math.abs(f.getX(p))>1,m=[];for(let p=0;p<g.length;p+=3)!_(g[p])&&!_(g[p+1])&&!_(g[p+2])&&m.push(g[p],g[p+1],g[p+2]);m.length<g.length&&(d.setIndex(m),console.info("[GM] cleaned",u.name,(g.length-m.length)/3,"stray tris"))});const c=yt.gltf.anims;if(c)for(const l of c.animations){const h=l.clone();h.tracks=h.tracks.filter(d=>d.name.endsWith(".quaternion")&&!d.name.startsWith("root."));const u=l.name.replace("AS_Chaos_","");h.name=u,yt.clips[u]=h}}function Oh(r){const e={value:0},t={value:new _e(1,1,1)};r.userData.flash=e,r.userData.flashColor=t,r.onBeforeCompile=n=>{n.uniforms.uFlash=e,n.uniforms.uFlashColor=t,n.fragmentShader=`uniform float uFlash;
uniform vec3 uFlashColor;
`+n.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
 gl_FragColor.rgb = mix(gl_FragColor.rgb, uFlashColor, uFlash);`)},r.customProgramCacheKey=()=>"gmflash"}const qx={vixen:1.78,kailee:1.62,brianna:1.66,payton:1.64,viper01:1.74,viper02:1.74,viper03:1.74,enforcer:2,falcon:2.5};function jx(r,e){const t=new tt,n=new ve({color:r,roughness:.5,metalness:.3,emissive:r,emissiveIntensity:.15}),i=new X(new Bc(.28,e*.5,4,10),n);i.position.y=e*.5,t.add(i);const s=new X(new on(.2,12,10),n);s.position.y=e*.92,t.add(s);const o=new X(new Ee(.5,.12,.7),new ve({color:2236962,emissive:16711884,emissiveIntensity:.6}));return o.position.y=.06,t.add(o),t.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),t}const Zx={vixen:16719823,kailee:16747051,brianna:1014346,payton:9059583,viper01:16732064,viper02:16732064,viper03:16732064,enforcer:9055202,falcon:13635632};function $x(r,e={}){const t=new tt,n=new tt;t.add(n);const i=yt.gltf[r],s=[],o={};let a,c=null;const l={};let h=!1;const u=qx[r];if(i){a=Ax(i.scene);const d=new Map;a.traverse(v=>{const y=v;if(v.isBone&&(o[v.name]=v),y.isMesh){y.castShadow=!0,y.receiveShadow=!1,y.frustumCulled=!1;const I=(Array.isArray(y.material)?y.material:[y.material]).map(E=>{let R=d.get(E);if(!R){R=E.clone();const C=R;(C.transparent||C.alphaTest>0)&&(C.transparent=!1,C.alphaTest=.5,C.depthWrite=!0),C.side=Dn,e.tint!==void 0&&C.color&&C.color.multiply(new _e(e.tint)),e.emissiveBoost&&C.emissive&&(C.emissiveIntensity=(C.emissiveIntensity||1)*e.emissiveBoost),Oh(R),d.set(E,R),s.push(R)}return R});y.material=Array.isArray(y.material)?I:I[0]}});let f=null,g=0;a.traverse(v=>{const y=v;if(y.isMesh){const x=y.geometry.attributes.position.count;x>g&&(g=x,f=y)}}),a.traverse(v=>{const y=v;y.isMesh&&y!==f&&(y.castShadow=!1)}),a.updateMatrixWorld(!0);const _=o.head||o.Head;let m=0;if(_){const v=new b;_.getWorldPosition(v),m=v.y+.12}if(!(m>.2)){const v=new tn().setFromObject(a);m=v.max.y-v.min.y}const p=u/Math.max(.01,m);if(a.scale.multiplyScalar(p),n.add(a),r!=="falcon"&&Object.keys(yt.clips).length){c=new Eh(a);for(const[v,y]of Object.entries(yt.clips)){const x=c.clipAction(y);l[v]=x}}else if(r==="falcon"&&i.animations.length){c=new Eh(a);const v=i.animations[0].clone();v.tracks=v.tracks.filter(y=>!y.name.endsWith(".position")||y.name.startsWith("Hips")),l.Idle_Skate=c.clipAction(v)}}else h=!0,a=jx(e.tint??Zx[r],u),a.traverse(d=>{const f=d;if(f.isMesh){const g=f.material.clone();Oh(g),f.material=g,s.push(g)}}),n.add(a);return{root:t,pivot:n,model:a,mats:s,mixer:c,actions:l,bones:o,procedural:h,height:u}}function Fh(r,e,t){for(const n of r.mats){const i=n.userData;i.flash&&(i.flash.value=e,t&&i.flashColor.value.copy(t))}}function eo(r){const e=yt.gltf.dock;if(!e)return null;const t=e.scene.getObjectByName(r);if(!t)return null;const n=t.clone(!0);return n.position.set(0,0,0),n.rotation.set(0,0,0),n}function Jx(r){return r==="hyperdrive"?"suspense":"fastbeat"}class Qx{constructor(){this.ctx=null,this.muted=!1,this.skateGain=null,this.skateFilter=null,this.musicOn=!1,this.nextNoteTime=0,this.step=0,this.intensity=0,this.arenaMusic="fastbeat",this.musicTimer=0,this.voMan=null,this.voLoad=null}unlock(){try{const t=navigator.audioSession;t&&(t.type="playback")}catch{}this.init();const e=this.ctx;if(e){try{const t=e.createBuffer(1,1,22050),n=e.createBufferSource();n.buffer=t,n.connect(e.destination),n.start(0)}catch{}e.state!=="running"&&e.resume().catch(()=>{}),this.muted&&this.setMuted(!1)}}init(){if(this.ctx){this.ctx.state!=="running"&&this.ctx.resume().catch(()=>{});return}const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e;this.ctx=t,this.master=t.createGain(),this.master.gain.value=.7;const n=t.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,this.master.connect(n),n.connect(t.destination),this.sfxBus=t.createGain(),this.sfxBus.connect(this.master),this.musicBus=t.createGain(),this.musicBus.gain.value=.6,this.musicBus.connect(this.master);const i=t.sampleRate*1.5;this.noiseBuf=t.createBuffer(1,i,t.sampleRate);const s=this.noiseBuf.getChannelData(0);for(let a=0;a<i;a++)s[a]=Math.random()*2-1;const o=t.createBufferSource();o.buffer=this.noiseBuf,o.loop=!0,this.skateFilter=t.createBiquadFilter(),this.skateFilter.type="bandpass",this.skateFilter.frequency.value=400,this.skateFilter.Q.value=.8,this.skateGain=t.createGain(),this.skateGain.gain.value=0,o.connect(this.skateFilter),this.skateFilter.connect(this.skateGain),this.skateGain.connect(this.sfxBus),o.start()}setMuted(e){this.muted=e,this.master&&(this.master.gain.value=e?0:.7)}get t(){return this.ctx?this.ctx.currentTime:0}env(e,t,n,i,s){e.gain.setValueAtTime(1e-4,t),e.gain.exponentialRampToValueAtTime(i,t+n),e.gain.exponentialRampToValueAtTime(1e-4,t+n+s)}tone(e,t,n,i,s,o=0,a){if(!this.ctx)return;const c=this.t+o,l=this.ctx.createOscillator();l.type=e,l.frequency.setValueAtTime(t,c),l.frequency.exponentialRampToValueAtTime(Math.max(20,n),c+i);const h=this.ctx.createGain();this.env(h,c,.005,s,i),l.connect(h),h.connect(a||this.sfxBus),l.start(c),l.stop(c+i+.05)}noise(e,t,n,i=1,s="bandpass",o=0,a){if(!this.ctx)return;const c=this.t+o,l=this.ctx.createBufferSource();l.buffer=this.noiseBuf;const h=this.ctx.createBiquadFilter();h.type=s,h.frequency.setValueAtTime(n,c),h.Q.value=i,a&&h.frequency.exponentialRampToValueAtTime(a,c+e);const u=this.ctx.createGain();this.env(u,c,.004,t,e),l.connect(h),h.connect(u),u.connect(this.sfxBus),l.start(c,Math.random()),l.stop(c+e+.05)}punch(e=!1){this.noise(.12,e?.9:.6,e?900:1400,1.2),this.tone("sine",e?160:220,60,.12,.7)}whiff(){this.noise(.09,.25,2500,2,"bandpass",0,900)}hit(){this.noise(.08,.5,600,2),this.tone("square",140,50,.08,.25)}cone(){this.tone("sawtooth",340,70,.75,.55),this.tone("square",680,140,.6,.22),this.tone("sine",1100,180,.7,.45),this.noise(.8,.85,2200,.6,"bandpass",0,300)}chaosReady(){[0,.09,.18,.3].forEach((e,t)=>this.tone("sawtooth",[220,330,440,660][t],[220,330,440,660][t]*1.01,.35,.22,e)),this.tone("sine",55,55,.9,.6)}tether(){this.tone("sine",200,1400,.55,.3)}scream(){if(this.ctx){for(let e=0;e<4;e++)this.tone("sawtooth",520+e*37,1500+e*60,.7,.22);this.noise(1.1,.85,3e3,.5,"highpass")}}sonicBoost(){if(this.ctx){this.scream();for(let e=0;e<3;e++)this.tone("square",260+e*90,2400+e*200,.85,.28);this.tone("sine",60,25,1.1,.9),this.noise(1.3,1,5e3,.5,"highpass"),this.cone()}}slingshotLaunch(){this.tone("sawtooth",90,30,.9,.8),this.noise(.9,1,400,.4,"lowpass",0,80),this.tone("sine",1800,200,.6,.25)}impact(){this.tone("sine",110,30,.6,.9),this.noise(.5,.8,300,.5,"lowpass",0,60)}enemyDie(){this.tone("square",300,40,.3,.2),this.noise(.25,.4,900,1,"bandpass",0,200)}playerHurt(){this.tone("square",180,70,.18,.35),this.noise(.12,.4,500,1)}kaileeHurt(){this.tone("triangle",520,300,.12,.2)}kaileeDown(){this.tone("sawtooth",400,80,.7,.3)}kaileeUp(){[0,.08,.16].forEach((e,t)=>this.tone("triangle",440*(1+t*.25),440*(1+t*.25),.15,.2,e))}pistol(){this.noise(.06,.4,3e3,1),this.tone("square",900,200,.05,.12)}blade(){this.noise(.1,.35,4e3,3,"bandpass",0,1500),this.noise(.25,.15,800,.5,"lowpass")}bolt(){this.tone("sawtooth",700,300,.2,.15)}zap(){this.noise(.18,.4,5e3,4),this.tone("square",1200,600,.12,.12)}splash(){this.noise(.8,.8,1200,.5,"lowpass",0,200)}clang(){this.tone("triangle",620,600,.6,.3),this.tone("triangle",931,900,.5,.2)}hop(){this.tone("sine",300,600,.12,.2)}land(){this.noise(.08,.3,300,1,"lowpass")}brake(){this.noise(.25,.25,5e3,6,"bandpass",0,2500)}pickup(){this.tone("sine",660,1320,.15,.3)}waveStart(){this.tone("sawtooth",110,110,.6,.35),this.tone("sawtooth",165,165,.6,.25,.15),this.noise(.5,.3,200,1,"lowpass")}waveClear(){[0,.12,.24].forEach((e,t)=>this.tone("square",[392,523,784][t],[392,523,784][t],.25,.18,e))}gateOpen(){this.tone("sine",110,880,1.6,.35),this.tone("sawtooth",55,220,1.6,.2)}win(){[0,.15,.3,.5].forEach((e,t)=>this.tone("sawtooth",[262,330,392,523][t],[262,330,392,523][t],.6,.2,e))}lose(){[0,.25,.5].forEach((e,t)=>this.tone("sawtooth",[220,185,147][t],[218,183,110][t],.6,.25,e))}ui(){this.tone("square",880,1100,.06,.12)}telegraph(){this.tone("square",1500,1500,.07,.08)}setSkate(e,t){if(!this.skateGain||!this.ctx||!this.skateFilter)return;const n=t?Math.min(1,e)*.12:0;this.skateGain.gain.setTargetAtTime(n,this.t,.05),this.skateFilter.frequency.setTargetAtTime(250+e*700,this.t,.1)}startMusic(){this.ctx||this.init(),this.ctx&&(this.ctx.state==="suspended"&&this.ctx.resume(),this.musicTimer||(this.musicTimer=setInterval(()=>this.updateMusic(),50)),!this.musicOn&&(this.musicOn=!0,this.nextNoteTime=this.t+.1,this.step=0))}stopMusic(){this.musicOn=!1}setArena(e){this.arenaMusic=Jx(e)}updateMusic(){if(!this.ctx||!this.musicOn)return;if(this.arenaMusic==="suspense")return this.updateSuspense();const e=60/138/4,t=[36,0,36,48,0,36,46,0,36,0,36,48,43,0,41,39];for(;this.nextNoteTime<this.t+.15;){const n=this.step%16,i=Math.floor(this.step/16)%4,s=this.nextNoteTime-this.t,o=[0,0,3,-2][i];if(t[n]){const a=440*Math.pow(2,(t[n]+o-69)/12);this.tone("sawtooth",a,a*.98,e*.8,.12,s,this.musicBus)}if(t[n]){const a=440*Math.pow(2,(t[n]+o+24-69)/12);this.tone("square",a,a,e*.7,.05,s,this.musicBus)}n%4===0&&(this.toneKick(s),this.tone("triangle",180,60,.12,.3,s,this.musicBus)),n%2===1&&this.noiseHat(s,.04+this.intensity*.04),(n===4||n===12)&&this.intensity>.5&&this.noiseSnare(s),this.nextNoteTime+=e,this.step++}}updateSuspense(){const e=.4166666666666667;for(;this.nextNoteTime<this.t+.2;){const t=this.step%16,n=this.nextNoteTime-this.t;t%2===0&&this.tone("sine",55,50,e*1.6,.35,n,this.musicBus),(t===0||t===8)&&(this.tone("triangle",220,220,e*6,.08,n,this.musicBus),this.tone("triangle",233,233,e*6,.06,n,this.musicBus)),t%2===0&&this.tone("triangle",110,104,e*1.4,.18,n,this.musicBus),(t===0||t===8)&&(this.tone("sawtooth",440,440,e*5,.04,n,this.musicBus),this.tone("sawtooth",466,466,e*5,.035,n,this.musicBus)),t%4===3&&this.noiseHat(n,.05),this.nextNoteTime+=e,this.step++}}duck(e){this.musicBus&&this.ctx&&this.musicBus.gain.setTargetAtTime(e?.3:.6,this.t,.15)}voKey(e){return e.toLowerCase().replace(/[^a-z0-9 ]/g,"").trim().split(/\s+/).slice(0,6).join("_")}async realVO(e,t){this.voLoad||(this.voLoad=fetch("vo/manifest.json").then(s=>s.ok?s.json():{}).then(s=>{this.voMan=s}).catch(()=>{this.voMan={}})),await this.voLoad;const n=this.voMan?.[e.toUpperCase()];if(!n||this.muted)return!1;const i=n[this.voKey(t)];return i?new Promise(s=>{const o=new Audio("vo/"+i);o.volume=1,this.duck(!0);let a=!1;const c=l=>{a||(a=!0,this.duck(!1),s(l))};setTimeout(()=>{o.pause(),c(!0)},12e3),o.onended=()=>c(!0),o.onerror=()=>c(!1),o.play().catch(()=>c(!1))}):!1}say(e,t){return new Promise(n=>setTimeout(n,900+t.length*55))}ttsSay(e,t){return new Promise(n=>{const i=window.speechSynthesis;if(!i||this.muted){setTimeout(n,400+t.length*55);return}const s={VIXEN:[.85,.95],KAILEE:[1.25,1.08],BRIANNA:[.95,1],PAYTON:[1.05,.9],KAMYRN:[1.35,1.12],LILI:[1.6,1.15],FANG:[.6,.9],COBRA:[.5,.8]},[o,a]=s[e]??[1,1],c=new SpeechSynthesisUtterance(t.replace(/…/g,", ")),l=i.getVoices().filter(g=>/^en/i.test(g.lang)),h=l.filter(g=>/female|samantha|victoria|karen|zira|susan|aria|jenny|fiona|moira|tessa|google us english|google uk english female/i.test(g.name)),u=h.length?h:l;u.length&&(c.voice=u[Math.abs(e.length*7+e.charCodeAt(0))%u.length]),c.pitch=Math.min(2,o),c.rate=a,c.volume=1;let d=!1;const f=()=>{d||(d=!0,this.duck(!1),n())};c.onend=f,c.onerror=f,setTimeout(f,1500+t.length*120),this.duck(!0),(i.speaking||i.pending)&&i.cancel(),i.speak(c)})}stopVoice(){try{window.speechSynthesis?.cancel()}catch{}}rage(){this.tone("sawtooth",70,140,.8,.5),this.noise(.6,.6,900,.6,"bandpass",0,3e3),this.tone("square",220,440,.4,.15,.1)}mine(){this.tone("sine",90,25,.9,1),this.noise(.9,1,600,.4,"lowpass",0,60),this.noise(.2,.6,3e3,1)}mineClick(){this.tone("square",2200,2200,.05,.15)}radio(){this.noise(.12,.12,2500,3)}toneKick(e){this.tone("sine",120,40,.2,.45,e,this.musicBus)}noiseHat(e,t){if(!this.ctx)return;const n=this.t+e,i=this.ctx.createBufferSource();i.buffer=this.noiseBuf;const s=this.ctx.createBiquadFilter();s.type="highpass",s.frequency.value=7e3;const o=this.ctx.createGain();this.env(o,n,.002,t,.04),i.connect(s),s.connect(o),o.connect(this.musicBus),i.start(n,Math.random()),i.stop(n+.08)}noiseSnare(e){if(!this.ctx)return;const t=this.t+e,n=this.ctx.createBufferSource();n.buffer=this.noiseBuf;const i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.value=1800;const s=this.ctx.createGain();this.env(s,t,.002,.3,.15),n.connect(i),i.connect(s),s.connect(this.musicBus),n.start(t,Math.random()),n.stop(t+.2)}}const J=new Qx,ey=""+new URL("vixen_handgun-INCCQtnd.glb",import.meta.url).href,ty=""+new URL("kailee_40cal-CAa1rFfD.glb",import.meta.url).href,ny="modulepreload",iy=function(r,e){return new URL(r,e).href},kh={},Bh=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");i=Promise.allSettled(t.map(l=>{if(l=iy(l,n),l in kh)return;kh[l]=!0;const h=l.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let g=o.length-1;g>=0;g--){const _=o[g];if(_.href===l&&(!h||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":ny,h||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),h)return new Promise((g,_)=>{f.addEventListener("load",g),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},sy=""+new URL("medic_bot-BUUoJBF-.glb",import.meta.url).href,ry=""+new URL("GM_Sky_DockNight_Equirect_PoleFade-DTSNX9cV.png",import.meta.url).href;let Ge=-18,Fe=18;const oy=-18,ay=18,cy=-12,ly=12,hy=-6,qt=[{z0:-8,z1:40,barrier:42,name:"BERTH 1"},{z0:42,z1:86,barrier:88,name:"BERTH 2 — CRANE YARD"},{z0:88,z1:132,barrier:134,name:"BERTH 3 — FLOODED LOT"},{z0:134,z1:176,barrier:-1,name:"EXTRACTION BERTH"}],nr=172,ga=178;function zh(r,e){if(r.ride!=="ramp")return r.h;const t=(e-r.minZ)/(r.maxZ-r.minZ);return r.h*Math.max(0,Math.min(1,r.rampDir===-1?1-t:t))}function di(r,e,t,n=!0){const i=document.createElement("canvas");i.width=r,i.height=e,t(i.getContext("2d"));const s=new Hu(i);return s.colorSpace=n?At:In,s.wrapS=s.wrapT=Qt,s.anisotropy=4,s}function Gs(r){let e=r;return()=>(e=e*16807%2147483647,(e-1)/2147483646)}class uy{constructor(e,t){this.colliders=[],this.barriers=[],this.puddles=[],this.lightAnchors=[],this.pointLights=[],this.hook={pivot:new b(0,17,66),len:15.2,angle:0,prevX:0,group:new tt,load:new X,cable:new X,vx:0,light:new X},this.gate={group:new tt,energy:null,strips:[],active:!1,light:0},this.fogMats=[],this.fogCols=[],this.scrollTex=[],this.blinkers=[],this.arena="dock",this.dockSkyMap=null,this.hdSkyMap=null,this.hdGroup=null,this.dockDress=[],this.dockColliders=[],this.hdColliders=[],this.hdWalk=new tt,this.hdRails=[],this.hdSkins=[],this.hdSkinned=!1,this.healSpots=[],this.pocketBoxes=[],this.scene=e,e.background=new _e(726040),e.fog=new Pc(1055778,.0075),this.buildSky();const n=new Du;n.background=new _e(132099);const i=(d,f,g,_,m,p,v)=>{const y=new X(new Ee(m,p,v),new Le({color:d}));y.position.set(f,g,_),n.add(y)};i(3211072,-9,3,0,.5,1.2,30),i(3211072,9,5,4,.5,.6,20),i(16715984,0,4,12,8,6,.5),i(16715984,0,2,-12,4,1,.5),i(3364215,0,14,0,30,.5,30),i(16747051,6,2,-8,2,.6,.5);const s=new oc(t);e.environment=s.fromScene(n,.02).texture,e.environmentIntensity=.55,s.dispose(),this.hemi=new xv(5930902,1708064,1.7),e.add(this.hemi);const o=new ed(11850474,2.3);o.position.set(-12,30,-10),o.castShadow=!0,o.shadow.mapSize.set(1024,1024);const a=o.shadow.camera;a.left=-26,a.right=26,a.top=26,a.bottom=-26,a.near=1,a.far=90,o.shadow.bias=-8e-4,o.shadow.normalBias=.03,e.add(o),e.add(o.target),this.moon=o;for(let d=0;d<7;d++){const f=new vo(3800852,0,14,1.6);e.add(f),this.pointLights.push(f)}this.buildGround();const c=new Set(e.children),l=this.colliders.length;this.buildWater(),this.buildContainers(),this.buildCranes(),this.buildFog(),this.buildBrand(),this.dockColliders=this.colliders.slice(l);const h=new Set(e.children);this.buildBarriers();const u=new Set(e.children);this.buildPuddles(),this.buildBreathePockets(),this.buildHook();for(const d of e.children)!c.has(d)&&(h.has(d)||!u.has(d))&&this.dockDress.push(d);this.buildHyperdriveWalk(),this.buildGate(),this.buildDust(),this.buildReadability(),this.buildAerialRails()}setArena(e){this.arena=e;const t=e==="hyperdrive";Ge=t?cy:oy,Fe=t?ly:ay;const n=this.sky.material;!this.dockSkyMap&&n.map&&(this.dockSkyMap=n.map);const i=this.scene.fog;i.color.set(t?1708080:1055778),i.density=t?.0062:.0075,this.hemi.color.set(t?9071871:5930902),this.hemi.groundColor.set(t?2755114:1708064),this.moon.color.set(t?7006463:11850474);for(const s of this.fogCols)s.visible=!t;for(const s of this.fogMats)s.color.set(t?16726744:3997530);for(const s of this.pointLights)s.color.set(t?16723920:3800852);if(this.scene.environmentIntensity=t?.8:.55,t){if(this.hdSkyMap?(n.map=this.hdSkyMap,n.needsUpdate=!0):new _o().load("hyperdrive/sky.jpg",s=>{s.colorSpace=At,s.wrapS=ir,s.wrapT=gn,s.repeat.set(2,1),s.offset.y=-.12,this.hdSkyMap=s,this.arena==="hyperdrive"&&(n.map=s,n.needsUpdate=!0)}),!this.hdGroup){const s=new tt;s.name="hyperdrive-greybox",this.hdGroup=s,s.rotation.y=Math.PI,s.position.set(0,-.05,222),s.scale.set(1.9,1,1),this.scene.add(s),Bh(async()=>{const{GLTFLoader:o}=await Promise.resolve().then(()=>Dh);return{GLTFLoader:o}},void 0,import.meta.url).then(({GLTFLoader:o})=>new o().load("hyperdrive/greybox.glb",a=>{a.scene.traverse(c=>{const l=c;if(l.isMesh){if(/ZONE_Ground|Ground/i.test(l.name)||/Ground/i.test(l.parent?.name??"")){l.visible=!1;return}l.receiveShadow=!0,l.castShadow=!1,l.matrixAutoUpdate=!1,l.updateMatrix()}}),s.add(a.scene),this.skinHyperdrive(a.scene)},void 0,a=>console.warn("[GM] hyperdrive greybox failed",a)))}this.hdGroup.visible=!0}for(const s of this.dockDress)s.visible=!t;this.dockPockets&&(this.dockPockets.visible=!t);for(const s of this.pocketBoxes)s.active=!t;for(const s of this.dockColliders)s.active=!t;for(const s of this.hdColliders)s.active=t;this.hdWalk.visible=t;for(const s of this.puddles)s.on=!1,s.warn=!1;t||(this.dockSkyMap&&(n.map=this.dockSkyMap,n.needsUpdate=!0),this.hdGroup&&(this.hdGroup.visible=!1))}skinHyperdrive(e){if(this.hdSkinned)return;this.hdSkinned=!0;const t={};e.traverse(i=>{const s=i;if(s.isMesh)for(const o of["DECK_Kicker","DECK_FunBox","DECK_SandbagLip","RH_OuterWall","RING_Facade"])!t[o]&&s.name.startsWith(o)&&(t[o]=s)});let n=0;for(const i of this.hdSkins){const s=t[i.key];if(!s)continue;const o=s.geometry.clone();o.computeBoundingBox();const a=o.boundingBox,c=new b;a.getSize(c);const l=new b;if(a.getCenter(l),o.translate(-l.x,-a.min.y,-l.z),c.z>c.x!=i.sz>i.sx){o.rotateY(Math.PI/2);const u=c.x;c.x=c.z,c.z=u}if(o.scale(i.sx/Math.max(.01,c.x),i.h/Math.max(.01,c.y),i.sz/Math.max(.01,c.z)),i.key==="DECK_Kicker")continue;const h=i.mesh;h.geometry.dispose(),h.geometry=o,h.position.y=0,n++}console.info("[GM] hyperdrive skins",n,Object.keys(t))}buildHyperdriveWalk(){const e=this.hdWalk;e.name="hyperdrive-walkable",e.visible=!1,this.scene.add(e);const t=new ve({color:7038032,roughness:.9,metalness:.05}),n=new ve({color:4868650,roughness:.85,metalness:.2}),i=new ve({color:9074256,roughness:1}),s=new ve({color:3816512,roughness:.5,metalness:.7}),o=new ve({color:2233352,emissive:16747050,emissiveIntensity:2.2}),a=new ve({color:2230290,emissive:16719775,emissiveIntensity:2.4}),c=(m,p,v,y,x,I,E=0,R,C,w)=>{const M=new X(new Ee(y,I,x),m);if(C&&this.hdSkins.push({mesh:M,key:C,sx:y,sz:x,h:I,ry:E}),M.position.set(p,I/2,v),M.rotation.y=E,M.castShadow=!0,M.receiveShadow=!0,e.add(M),R){const V=new X(new Ee(y+.04,.12,x+.04),R);V.position.set(p,I-.25,v),V.rotation.y=E,e.add(V)}const P=Math.abs(Math.cos(E)),O=Math.abs(Math.sin(E)),F=(y*P+x*O)/2,H=(y*O+x*P)/2,q={minX:p-F,maxX:p+F,minZ:v-H,maxZ:v+H,h:I,active:!1,ride:w};return this.colliders.push(q),this.hdColliders.push(q),q},l=(m,p,v,y,x,I=1)=>{const E=new Mt,R=-v/2,C=v/2,w=-y/2,M=y/2,P=I===1?w:M,O=I===1?M:w,F=[R,0,P,C,0,P,C,x,O,R,0,P,C,x,O,R,x,O,R,0,O,R,x,O,C,x,O,R,0,O,C,x,O,C,0,O,R,0,P,R,x,O,R,0,O,C,0,P,C,0,O,C,x,O];E.setAttribute("position",new je(F,3)),E.computeVertexNormals();const H=new X(E,u);H.material.side=kt,H.position.set(m,0,p),H.castShadow=H.receiveShadow=!0,e.add(H),this.hdSkins.push({mesh:H,key:"DECK_Kicker",sx:v,sz:y,h:x,ry:I===1?0:Math.PI});const q=new X(new Ee(v,.06,.18),o);q.position.set(m,x,p+O),e.add(q);const V={minX:m-v/2,maxX:m+v/2,minZ:p-y/2,maxZ:p+y/2,h:x,active:!1,ride:"ramp",rampDir:I};this.colliders.push(V),this.hdColliders.push(V)},h=(m,p,v,y=.75)=>{const x=v-p,I=(p+v)/2,E=new X(new Gt(.07,.07,x,8),d);E.rotation.x=Math.PI/2,E.position.set(m,y,I),e.add(E);for(let C=p+.3;C<=v;C+=3){const w=new X(new Ee(.1,y,.1),s);w.position.set(m,y/2,C),e.add(w)}const R={minX:m-.12,maxX:m+.12,minZ:p,maxZ:v,h:y,active:!1,ride:"rail"};this.colliders.push(R),this.hdColliders.push(R),this.hdRails.push(R)},u=new ve({color:5919808,roughness:.8,metalness:.1}),d=new ve({color:16756848,emissive:16742938,emissiveIntensity:1.2,metalness:.9,roughness:.25});for(let m=-10;m<182;m+=8)c(t,Ge-1,m+4,2,8,7,0,o),c(t,Fe+.9,m+4,1.6,8,7,0,o);c(t,0,-11,32,2.6,7),c(t,0,ga+1.5,32,2.6,7);const f=[[-7,8,0],[7,16,0],[-4,24,.3],[8,30,-.3],[-9,35,0]];for(const[m,p,v]of f)c(i,m,p,5,1.2,.9,v,void 0,"DECK_SandbagLip","top");l(0,4,3,4,1.1),c(t,0,8.5,3,5,1.1,0,o,"DECK_FunBox","top"),l(0,13,3,4,1.1,-1),h(-3,18,32),h(3.5,40,47),l(3.5,37,2.4,3.5,.8);for(const[m,p]of[[-11,12],[11,4],[10.8,22],[-11,28],[7,33]])c(n,m,p,1.6,1.6,1.5,.2);const g=64;c(s,0,g,6,6,6,Math.PI/4,a,"RING_Facade"),c(t,-6.2,g,2.2,7,.9,0,o,"DECK_FunBox","top"),c(t,6.2,g,2.2,7,.9,0,o,"DECK_FunBox","top"),l(-6.2,g-4.75,2.2,1.5,.9),l(6.2,g-4.75,2.2,1.5,.9),l(-6.2,g+4.75,2.2,1.5,.9,-1),l(6.2,g+4.75,2.2,1.5,.9,-1),l(0,51,3,3.5,.9),h(-7,44,53),h(7,75,85);for(let m=0;m<10;m++){const p=m/10*Math.PI*2;m===0||m===5||c(t,Math.sin(p)*9.5,g+Math.cos(p)*9.5,5.2,.9,2.4,p,o,"RH_OuterWall")}for(const[m,p]of[[-11.5,50],[11.5,50],[-11.5,78],[11.5,78]])c(n,m,p,1.4,4,1.2,0,o);for(let m=94;m<132;m+=9)c(s,-10.5,m,5,1.2,5.5,0,a),c(s,10.5,m,5,1.2,5.5,0,a);for(const[m,p]of[[-5,99],[5,108],[-6,116],[5,125]])c(n,m,p,2.2,1.4,.9,.5,void 0,"DECK_FunBox","top");h(0,92,120,.8),l(0,90.5,2.2,3,.85),l(2.5,128,3,4,1.2);const _=156;for(let m=0;m<12;m++){if(m%3===0)continue;const p=m/12*Math.PI*2;c(s,Math.sin(p)*7,_+Math.cos(p)*7,3.4,.8,1,p,o,"DECK_FunBox","top")}for(const[m,p]of[[-9,140],[9,140],[-10,170],[10,170]])c(t,m,p,4,1.2,3,0,a,"RH_OuterWall");h(-4,138,146,.8),h(4,166,174,.8),l(0,143,3,3.5,1)}buildSky(){const e=di(1024,512,o=>{const a=o.createLinearGradient(0,0,0,512);a.addColorStop(0,"#02030a"),a.addColorStop(.35,"#0a1430"),a.addColorStop(.47,"#3a1846"),a.addColorStop(.5,"#ff4fb0"),a.addColorStop(.53,"#1a0f1c"),a.addColorStop(1,"#05070a"),o.fillStyle=a,o.fillRect(0,0,1024,512);const c=Gs(7);for(let h=0;h<700;h++){o.fillStyle=`rgba(255,255,255,${.3+c()*.7})`;const u=c()<.08?2:1;o.fillRect(c()*1024,c()*230,u,u)}o.fillStyle="#070509";for(let h=0;h<1024;h+=6+c()*14){const u=6+c()*30;o.fillRect(h,256-u,5+c()*12,u)}o.fillStyle="rgba(255,200,120,0.7)";for(let h=0;h<160;h++)o.fillRect(c()*1024,228+c()*26,1,1);const l=o.createRadialGradient(300,110,4,300,110,60);l.addColorStop(0,"#f4f8ff"),l.addColorStop(.18,"#cfe0ff"),l.addColorStop(.3,"rgba(120,160,255,0.25)"),l.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=l,o.fillRect(220,30,160,160)});e.wrapS=Qt,e.wrapT=gn;const t=new X(new on(320,48,24),new Le({map:e,side:Xt,fog:!1,depthWrite:!1}));t.name="skybox",t.renderOrder=-1,t.frustumCulled=!1,this.sky=t,this.scene.add(t);const n=new URLSearchParams(location.search),i=parseFloat(n.get("skyYaw")??"0")*Math.PI/180,s=parseFloat(n.get("skyV")??"0.15");t.rotation.y=i,new _o().load(ry,o=>{o.colorSpace=At,o.wrapS=Qt,o.wrapT=gn,o.offset.y=-s,o.anisotropy=4;const a=t.material;a.map=o,a.needsUpdate=!0})}buildAerialRails(){const e=hy,t=nr,n=t-e,i=(e+t)/2,s=new ve({color:2237998,metalness:.8,roughness:.35,emissive:3800852,emissiveIntensity:.35}),o=new Le({color:3800852,fog:!1}),a=new ve({color:3817288,metalness:.6,roughness:.5}),c=7.5;for(const f of[-3.2,3.2]){const g=new X(new Ee(.35,.35,n),s);g.position.set(f,c,i),this.scene.add(g);const _=new X(new Ee(.12,.08,n),o);_.position.set(f,c+.22,i),this.scene.add(_)}for(let f=e+4;f<t;f+=14){const g=new X(new Ee(Fe-Ge-1,.5,.5),a);g.position.set((Ge+Fe)/2,c+.6,f),this.scene.add(g);for(const m of[Ge+.6,Fe-.6]){const p=new X(new Ee(.4,c+.6,.4),a);p.position.set(m,(c+.6)/2,f),this.scene.add(p)}const _=new X(new Ee(1.2,.15,.3),new Le({color:16719823,fog:!1}));_.position.set(0,c+.3,f),this.scene.add(_)}const l=di(128,128,f=>{f.clearRect(0,0,128,128),f.strokeStyle="#39ff14",f.lineWidth=14,f.lineCap="round",f.beginPath(),f.moveTo(24,40),f.lineTo(64,90),f.lineTo(104,40),f.stroke()});l.repeat.set(1,n/4);const h=new X(new It(2.2,n),new Le({map:l,transparent:!0,opacity:.9,side:kt,depthWrite:!1,blending:wt,fog:!1}));h.rotation.x=-Math.PI/2,h.rotation.z=Math.PI,h.position.set(0,c+.05,i),this.scene.add(h),this.railChev=l;const u=l.clone();u.needsUpdate=!0,u.repeat.set(1,n/4);const d=new X(new It(1.6,n),new Le({map:u,transparent:!0,opacity:.35,depthWrite:!1,blending:wt}));d.rotation.x=-Math.PI/2,d.rotation.z=Math.PI,d.position.set(0,.035,i),this.scene.add(d),this.groundChev=u}buildReadability(){const e=new ve({color:2763312,metalness:.6,roughness:.5}),t=new Le({color:16757575}),n=new Le({color:16751152,transparent:!0,opacity:.22,blending:wt,depthWrite:!1}),i=new Gt(.09,.12,6,8),s=new Ee(.9,.18,.4),o=new gi(4.2,24);for(let h=4;h<176;h+=18){const u=Fe-.9,d=new X(i,e);d.position.set(u,3,h),d.castShadow=!0,this.scene.add(d);const f=new X(s,t);f.position.set(u-.4,6,h),this.scene.add(f);const g=new X(o,n);g.rotation.x=-Math.PI/2,g.position.set(u-1.5,.03,h),this.scene.add(g),this.lightAnchors.push({pos:new b(u-.6,5.6,h),color:16752704,intensity:22,dist:18})}const a=new Le({color:16722902});for(const h of[-6.5,6.5])for(let u=0;u<176;u+=12){const d=new X(new Ee(.12,.05,7),a);d.position.set(h,.03,u+3.5),this.scene.add(d)}const c=new Le({color:4251903}),l=new Le({color:4251903,transparent:!0,opacity:.18,blending:wt,depthWrite:!1});for(const h of[30,70,110,150]){for(const f of[Ge+1.2,Fe-.4]){const g=new X(new Ee(.25,5,.25),c);g.position.set(f,2.5,h),this.scene.add(g)}const u=new X(new Ee(Fe-Ge-1.6,.2,.25),c);u.position.set((Ge+Fe)/2+.4,5,h),this.scene.add(u);const d=new X(new It(Fe-Ge-1.6,1.2),l);d.rotation.x=-Math.PI/2,d.position.set((Ge+Fe)/2+.4,.025,h),this.scene.add(d),this.lightAnchors.push({pos:new b(0,4.5,h),color:4251903,intensity:16,dist:16})}}buildBreathePockets(){const e=new ve({color:2832970,roughness:.7,metalness:.3}),t=new ve({color:3800852,emissive:3800852,emissiveIntensity:1.2}),n=new ve({color:6965802,roughness:.9}),i=new tt;i.name="dock-breathe-pockets",this.dockPockets=i;for(const o of qt){const a=o.z0+(o.z1-o.z0)*.62;for(const[c,l]of[[-11,-4],[3,10]]){const h=(c+l)/2,u=l-c,d=new X(new Ee(u,3.4,2.4),e);d.position.set(h,1.7,a),d.castShadow=d.receiveShadow=!0,i.add(d);const f=new X(new Ee(u,.08,2.45),t);f.position.set(h,3.42,a),i.add(f),this.pocketBoxes.push(this.addBox(h,a,u,2.4,3.4))}for(const[c,l]of[[-10.5,-14],[9.5,-20]]){const h=new X(new Ee(2.4,3.4,5),e);h.position.set(c,1.7,a+l),h.castShadow=h.receiveShadow=!0,i.add(h),this.pocketBoxes.push(this.addBox(c,a+l,2.4,5,3.4))}for(const[c,l,h]of[[-14.5,16,1],[14,-6,-1]]){const g=new X(new Ee(3,1.2,6),n);g.position.set(c,1.2/2,a+l),g.castShadow=g.receiveShadow=!0,i.add(g);const _=this.addBox(c,a+l,3,6,1.2);_.ride="top",this.pocketBoxes.push(_);const m=a+l-h*(6/2+4/2),p=new X(new Ee(3,.15,Math.hypot(4,1.2)),e);p.position.set(c,1.2/2,m),p.rotation.x=h*-Math.atan2(1.2,4),i.add(p);const v=this.addBox(c,m,3,4,1.2);v.ride="ramp",v.rampDir=h,this.pocketBoxes.push(v)}for(const[c,l]of[[-7,6],[6.5,8],[0,11]]){const h=new X(new Ee(1.4,1.2,1.4),n);h.position.set(c,.6,a+l),h.castShadow=!0,i.add(h),this.pocketBoxes.push(this.addBox(c,a+l,1.4,1.4,1.2))}}const s=new ve({color:2085258,emissive:2085258,emissiveIntensity:1.6});for(const o of qt){const a=o.z0+(o.z1-o.z0)*.62+5,c=new X(new Ee(1.1,.9,1.1),s);c.position.set(-9.5,.45,a),i.add(c);const l=new X(new Ee(.7,.2,.2),new Le({color:16777215}));l.position.set(-9.5,1,a),i.add(l);const h=l.clone();h.rotation.y=Math.PI/2,i.add(h);const u=new vo(2085258,6,7);u.position.set(-9.5,2,a),i.add(u);const d={x:-9.5,z:a,used:!1,mesh:c,mat:s,bot:null,extras:[l,h]};this.healSpots.push(d)}this.scene.add(i),Bh(async()=>{const{GLTFLoader:o}=await Promise.resolve().then(()=>Dh);return{GLTFLoader:o}},void 0,import.meta.url).then(({GLTFLoader:o})=>new o().load(sy,a=>{const c=a.scene,l=new tn().setFromObject(c),h=l.getSize(new b),u=1.15/Math.max(.001,h.y);for(const d of this.healSpots){const f=c.clone(!0);f.scale.setScalar(u),f.position.set(d.x,-l.min.y*u,d.z),f.rotation.y=Math.PI/2,f.traverse(g=>{g.isMesh&&(g.castShadow=!0)}),i.add(f),d.bot=f,d.mesh.visible=!1;for(const g of d.extras)g.visible=!1;d.extras[0].parent.children.forEach(g=>{g.isPointLight&&g.position.z===d.z&&g.color.set(16727984)}),d.used&&(f.visible=!1)}},void 0,a=>console.warn("[GM] medic bot failed",a)))}resetHeals(){for(const e of this.healSpots)e.used=!1,e.bot?e.bot.visible=!0:e.mesh.visible=!0}useHeal(e){e.used=!0,e.mesh.visible=!1,e.bot&&(e.bot.visible=!1);for(const t of e.extras)t.visible=!1}addBox(e,t,n,i,s=3){const o={minX:e-n/2,maxX:e+n/2,minZ:t-i/2,maxZ:t+i/2,h:s,active:!0};return this.colliders.push(o),o}buildGround(){const e=Gs(7),t=di(1024,1024,v=>{v.fillStyle="#0d0e10",v.fillRect(0,0,1024,1024);for(let y=0;y<26e3;y++){const x=8+e()*26;v.fillStyle=`rgb(${x},${x},${x+2})`,v.fillRect(e()*1024,e()*1024,2,2)}for(let y=0;y<40;y++)v.fillStyle=`rgba(0,0,0,${.15+e()*.3})`,v.beginPath(),v.ellipse(e()*1024,e()*1024,30+e()*120,20+e()*60,e()*3,0,7),v.fill();v.strokeStyle="rgba(40,40,44,0.8)",v.lineWidth=3;for(let y=0;y<18;y++){v.beginPath();let x=e()*1024,I=e()*1024;v.moveTo(x,I);for(let E=0;E<6;E++)x+=(e()-.5)*120,I+=(e()-.5)*120,v.lineTo(x,I);v.stroke()}});t.repeat.set(4,22);const n=di(512,512,v=>{v.fillStyle="#b4b4b4",v.fillRect(0,0,512,512);for(let y=0;y<6;y++){const x=v.createRadialGradient(0,0,0,0,0,1);x.addColorStop(0,"#2a2a2a"),x.addColorStop(.6,"#4a4a4a"),x.addColorStop(1,"rgba(180,180,180,0)"),v.save(),v.translate(e()*512,e()*512),v.scale(60+e()*90,30+e()*50),v.fillStyle=x,v.beginPath(),v.arc(0,0,1,0,7),v.fill(),v.restore()}},!1);n.repeat.set(2,10);const i=yt.tex.asphaltNormal;i&&(i.wrapS=i.wrapT=Qt,i.repeat.set(6,30));const s=new ve({map:t,roughnessMap:n,roughness:1,metalness:.15,normalMap:i||null,normalScale:new Q(.25,.25),envMapIntensity:.55}),o=new X(new It(42,200),s);o.rotation.x=-Math.PI/2,o.position.set(-3,0,85),o.receiveShadow=!0,this.scene.add(o);const a=new ve({color:16765466,roughness:.6,emissive:9069568}),c=new ss(new It(.25,3),a,60),l=new De,h=new Ft().setFromEuler(new ln(-Math.PI/2,0,0));let u=0;for(let v=-6;v<176&&u<60;v+=6)l.compose(new b(0,.012,v),h,new b(1,1,1)),c.setMatrixAt(u++,l);c.count=u,c.receiveShadow=!0,this.scene.add(c);const d=yt.tex.hazard;d&&(d.wrapS=d.wrapT=Qt,d.repeat.set(1,120));const f=new ve({color:d?16777215:15121940,map:d||null,roughness:.7,emissive:5915648,emissiveMap:d||null}),g=new X(new Ee(.6,.18,190),f);g.position.set(Fe+.1,.09,85),g.receiveShadow=!0,this.scene.add(g);const _=new X(new Ee(.5,3,190),new ve({color:1710620,roughness:.9}));_.position.set(Fe+.15,-1.5,85),this.scene.add(_);const m=new Gt(.22,.28,.7,10),p=new ss(m,new ve({color:2236966,metalness:.7,roughness:.4}),20);for(let v=0;v<20;v++)l.makeTranslation(Fe-.3,.35,-4+v*9.3),p.setMatrixAt(v,l);p.castShadow=!0,this.scene.add(p)}buildWater(){const e=yt.tex.asphaltNormal?yt.tex.asphaltNormal.clone():null;e&&(e.wrapS=e.wrapT=Qt,e.repeat.set(20,60),e.needsUpdate=!0,this.scrollTex.push(e)),this.waterMat=new ve({color:136464,roughness:.08,metalness:.85,normalMap:e,normalScale:new Q(.35,.35),envMapIntensity:1.6,emissive:6664,transparent:!0,opacity:.94});const t=new X(new It(120,260),this.waterMat);t.rotation.x=-Math.PI/2,t.position.set(Fe+60,-1.1,85),this.scene.add(t);const n=new X(new Ee(14,9,110),new ve({color:461067,roughness:.9}));n.position.set(48,3,90),this.scene.add(n);const i=new X(new Ee(10,12,12),n.material);i.position.set(48,13,50),this.scene.add(i);const s=new on(.25,6,4),o=new Le({color:16756832}),a=new ss(s,o,40),c=new De;for(let l=0;l<40;l++)c.makeTranslation(41+l%2*.2,7.7+l%3*.1,40+l*2.6),a.setMatrixAt(l,c);this.scene.add(a)}containerMats(){const e=Gs(3);return di(512,256,n=>{n.fillStyle="#bdbdbd",n.fillRect(0,0,512,256);for(let i=0;i<512;i+=16){const s=n.createLinearGradient(i,0,i+16,0);s.addColorStop(0,"#8a8a8a"),s.addColorStop(.5,"#dcdcdc"),s.addColorStop(1,"#7a7a7a"),n.fillStyle=s,n.fillRect(i,0,16,256)}n.fillStyle="#555",n.fillRect(0,0,512,10),n.fillRect(0,246,512,10);for(let i=0;i<90;i++)n.fillStyle=`rgba(60,30,10,${e()*.35})`,n.fillRect(e()*512,e()*256,2+e()*8,10+e()*80);n.fillStyle="rgba(255,255,255,0.75)",n.font="bold 22px monospace",n.fillText("DLSU "+Math.floor(1e5+e()*899999),30,50),n.font="bold 14px monospace",n.fillText("MAX GR 30480 KG",30,72)})}buildContainers(){const e=this.containerMats(),t=new Ee(2.44,2.59,6.06),n=[9182230,1915722,2764598,6961682,1589296,5902384],i=new ve({map:e,roughness:.65,metalness:.45,envMapIntensity:.6}),s=[],o=Gs(11);for(let m=-12;m<182;m+=6.2){const p=2+Math.floor(o()*2.2);for(let v=0;v<p;v++)s.push({x:Ge-1.3-v%2*.05,y:1.3+v*2.6,z:m+(o()-.5)*.3,ry:0,c:Math.floor(o()*n.length)});s.push({x:Ge-4,y:1.3,z:m,ry:0,c:Math.floor(o()*n.length)}),s.push({x:Ge-4,y:3.9,z:m,ry:0,c:Math.floor(o()*n.length)})}this.addBox(Ge-3,85,6,210,8);for(let m=-12;m<15;m+=6.2){for(let p=0;p<3;p++)s.push({x:m,y:1.3+p*2.6,z:-11,ry:Math.PI/2,c:Math.floor(o()*n.length)});for(let p=0;p<3;p++)s.push({x:m,y:1.3+p*2.6,z:ga+1.5,ry:Math.PI/2,c:Math.floor(o()*n.length)})}this.addBox(0,-11,30,2.6,8),this.addBox(0,ga+1.5,30,2.6,8);const a=[[-6,14,0,1],[6.5,28,Math.PI/2,1],[-8,52,Math.PI/2,2],[7,78,0,1],[-5,102,0,1],[8,118,Math.PI/2,1],[-9,150,0,2],[8.5,156,0,1]];for(const[m,p,v,y]of a){for(let x=0;x<y;x++)s.push({x:m,y:1.3+x*2.6,z:p,ry:v+x*.08,c:Math.floor(o()*n.length)});v===0?this.addBox(m,p,2.5,6.1,2.6*y):this.addBox(m,p,6.1,2.5,2.6*y)}const c=new ss(t,i,s.length),l=new De,h=new Ft,u=new _e;s.forEach((m,p)=>{h.setFromEuler(new ln(0,m.ry,0)),l.compose(new b(m.x,m.y,m.z),h,new b(1,1,1)),c.setMatrixAt(p,l),c.setColorAt(p,u.setHex(n[m.c]))}),c.castShadow=!0,c.receiveShadow=!0,this.scene.add(c);const d=new ve({color:3812380,roughness:.8}),f=new ss(new Ee(1.2,1.2,1.2),d,10);[[-11,33],[-11.5,35],[10,60],[-10.5,92],[11,128],[-11,128.5],[4,140],[-3,164],[11,6],[-11,70]].forEach(([m,p],v)=>{l.compose(new b(m,.6,p),h.setFromEuler(new ln(0,v,0)),new b(1,1,1)),f.setMatrixAt(v,l),this.addBox(m,p,1.3,1.3,1.2)}),f.castShadow=!0,f.receiveShadow=!0,this.scene.add(f);const _=eo("DK_Mood_HangarStrip_Segmented_4m")||eo("DK_Mood_HangarStrip_4m");for(let m=0;m<176;m+=12.4){let p;_?(p=_.clone(),p.rotation.y=Math.PI/2):p=new X(new Ee(.1,.12,4),new Le({color:3800852})),p.position.set(Ge+.05,3.2,m),p.traverse(v=>{const y=v.material;y&&y.emissive&&y.emissive.g>.1&&(y.emissiveIntensity=3)}),this.scene.add(p),m%24.8<1&&this.lightAnchors.push({pos:new b(Ge+1.5,3,m),color:3800852,intensity:9,dist:12})}}buildCranes(){const e=new ve({color:13213714,roughness:.55,metalness:.5}),t=new ve({color:1776414,roughness:.6,metalness:.6}),n=new Le({color:16715808});this.blinkers.push(n);const i=s=>{const o=new tt;for(const l of[Ge-2,Fe-.8])for(const h of[-3.5,3.5]){const u=new X(new Ee(.9,18,.9),e);u.position.set(l,9,s+h),o.add(u)}for(const l of[Ge-2,Fe-.8]){const h=new X(new Ee(1.1,1.1,8.2),e);h.position.set(l,1,s),o.add(h),this.addBox(l,s,1.4,8.4,2)}for(const l of[-3.5,3.5]){const h=new X(new Ee(32,1.4,1.1),e);h.position.set(-1,18.5,s+l),o.add(h)}const a=new X(new Ee(3,1.6,8.2),t);a.position.set(0,17.6,s),o.add(a);const c=new X(new Ee(2.2,2,2.2),t);c.position.set(Fe-3,16.2,s+4.2),o.add(c);for(const l of[Ge-2,Fe-.8]){const h=new X(new on(.3,8,6),n);h.position.set(l,19.5,s),o.add(h)}o.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),this.scene.add(o)};i(66),i(146);for(const s of[20,105,165]){const o=new tt;for(const l of[0,9])for(const h of[-4,4]){const u=new X(new Ee(1,26,1),e);u.position.set(22+l,12,s+h),o.add(u)}const a=new X(new Ee(46,1.6,2),e);a.position.set(18,25,s),o.add(a);const c=new X(new on(.45,8,6),n);c.position.set(-4,26,s),o.add(c),this.scene.add(o)}}fogTextures(){const e=Gs(21),t=di(128,256,i=>{i.clearRect(0,0,128,256);for(let s=0;s<70;s++){const o=64+(e()-.5)*70,a=e()*256,c=14+e()*30;for(const l of[a,a-256,a+256]){const h=i.createRadialGradient(o,l,0,o,l,c);h.addColorStop(0,`rgba(255,255,255,${.12+e()*.2})`),h.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=h,i.fillRect(o-c,l-c,c*2,c*2)}}}),n=di(64,128,i=>{const s=i.createImageData(64,128);for(let o=0;o<128;o++)for(let a=0;a<64;a++){const c=Math.exp(-Math.pow((a-31.5)/15,2)),l=o/127,h=Math.min(1,(1-l)*6)*Math.pow(l,.8),u=Math.round(255*c*h),d=(o*64+a)*4;s.data[d]=s.data[d+1]=s.data[d+2]=u,s.data[d+3]=255}i.putImageData(s,0,0)},!1);return n.wrapS=n.wrapT=gn,{noise:t,fade:n}}buildFog(){const{noise:e,fade:t}=this.fogTextures(),n=(()=>{const o=eo("DK_Mood_FogColumn_Green_A");if(!o)return 5.6;const a=new tn().setFromObject(o);return a.max.y-a.min.y})(),i=[[-12.5,8,1],[-12.8,31,1.3],[-12.2,58,1],[-12.6,84,1.2],[-12.3,110,1.1],[-12.5,138,1.3],[11.8,46,.8],[12,96,.9],[-12,162,1.2],[10,168,1]],s=new It(3.2,n*1.35).translate(0,n*.675,0);i.forEach(([o,a,c],l)=>{const h=e.clone();h.needsUpdate=!0,h.offset.y=l*.37,this.scrollTex.push(h);const u=new Le({color:3997530,map:h,alphaMap:t,transparent:!0,opacity:.55,depthWrite:!1,blending:wt,side:kt,fog:!1});this.fogMats.push(u);const d=new tt;for(let g=0;g<3;g++){const _=new X(s,u);_.rotation.y=g/3*Math.PI,_.renderOrder=5,d.add(_)}d.scale.setScalar(c),d.position.set(o,0,a),d.userData.spin=.05+l%3*.03,this.fogCols.push(d),this.scene.add(d);const f=new X(new gi(1.1*c,20),new Le({color:1769280,transparent:!0,opacity:.14,blending:wt,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.set(o,.02,a),this.scene.add(f),this.lightAnchors.push({pos:new b(o,1.2,a),color:3800852,intensity:14,dist:13})})}buildBrand(){const e=yt.tex.billboard;for(const n of[24,96,160]){const i=new tt,s=new X(new Ee(.3,4.6,8.6),new ve({color:1118484,metalness:.7,roughness:.4}));i.add(s);const o=new X(new It(8.2,4.1),new Le({map:e||null,color:e?16777215:16719823,transparent:!0,fog:!1}));o.position.x=.17,o.rotation.y=Math.PI/2;const a=new X(new It(8.2,4.1),new Le({color:327942}));a.position.x=.16,a.rotation.y=Math.PI/2,i.add(a),i.add(o),i.position.set(Ge-1,10.4,n),this.scene.add(i),this.lightAnchors.push({pos:new b(Ge+2,8,n),color:16719823,intensity:18,dist:18})}const t=yt.tex.mark;if(t){const n=new Le({map:t,transparent:!0,depthWrite:!1,color:16756976,polygonOffset:!0,polygonOffsetFactor:-2});for(const i of[3,45,72,115,140]){const s=new X(new It(2,2),n);s.rotation.y=Math.PI/2,s.position.set(Ge+.02,1.4,i),this.scene.add(s)}}}buildBarriers(){const e=di(256,64,t=>{t.clearRect(0,0,256,64);for(let n=4;n<64;n+=12)t.fillStyle="rgba(255,40,220,0.95)",t.fillRect(0,n,256,3);t.fillStyle="rgba(255,40,220,0.25)",t.fillRect(0,0,256,64)});e.repeat.set(6,1),this.scrollTex.push(e);for(const t of qt){if(t.barrier<0)continue;const n=new Le({map:e,color:16777215,transparent:!0,opacity:.9,blending:wt,depthWrite:!1,side:kt,fog:!1}),i=new X(new It(Fe-Ge+2,3.2),n);i.position.set((Ge+Fe)/2,1.6,t.barrier),this.scene.add(i);for(const o of[Ge,Fe]){const a=new X(new Ee(.4,3.6,.4),new ve({color:273,emissive:16719823,emissiveIntensity:1.5}));a.position.set(o,1.8,t.barrier),this.scene.add(a)}const s=this.addBox((Ge+Fe)/2,t.barrier,Fe-Ge+4,.8,3);this.barriers.push({z:t.barrier,box:s,mesh:i,mat:n,open:0})}}buildPuddles(){const e=[[3,20,2.6],[-4,98,3],[5,108,2.8],[-1,122,3.2],[-6,112,2.4],[2,158,2.6]];for(const[t,n,i]of e){const s=new ve({color:266776,roughness:.05,metalness:.9,emissive:4245759,emissiveIntensity:.05,transparent:!0,opacity:.92,envMapIntensity:2}),o=new X(new gi(i,28),s);o.rotation.x=-Math.PI/2,o.position.set(t,.015,n),o.receiveShadow=!0,this.scene.add(o);const a=new zu(new Mt,new Lc({color:10547455,transparent:!0,blending:wt,fog:!1}));a.geometry.setAttribute("position",new Ct(new Float32Array(24*6),3)),a.position.set(t,.05,n),a.visible=!1,this.scene.add(a);const c=new X(new Gt(.06,.06,i*1.6,6),new ve({color:1118481,emissive:16747051,emissiveIntensity:.4}));c.rotation.z=Math.PI/2,c.rotation.y=.6,c.position.set(t-i*.9,.06,n+i*.4),this.scene.add(c),this.puddles.push({x:t,z:n,r:i,phase:Math.random()*5,on:!1,warn:!1,mesh:o,arcs:a,mat:s})}}buildHook(){const e=this.hook,t=new X(new Gt(.05,.05,1,6),new ve({color:2236962,metalness:.8}));t.geometry.translate(0,-.5,0),e.cable=t;const n=new ve({color:9182230,roughness:.6,metalness:.5,map:this.containerMats()}),i=new X(new Ee(3.2,1.8,2),n);i.castShadow=!0,e.load=i;const s=new X(new Pi(.35,.08,6,12,Math.PI*1.4),new ve({color:13213714,metalness:.7}));s.position.y=1.2,i.add(s);const o=new Le({color:16719904});this.blinkers.push(o);const a=new X(new on(.15,8,6),o);a.position.set(0,.95,1.05),i.add(a),e.light=a,this.scene.add(t),this.scene.add(i);const c=yt.tex.hazard?yt.tex.hazard.clone():null;c&&(c.wrapS=c.wrapT=Qt,c.repeat.set(10,1),c.needsUpdate=!0);const l=new X(new It(26,2.6),new ve({map:c,color:c?16777215:15121940,transparent:!0,opacity:.45,roughness:.6,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.set(0,.013,e.pivot.z),this.scene.add(l),this.lightAnchors.push({pos:new b(0,6,e.pivot.z),color:16747051,intensity:14,dist:16})}buildGate(){const e=this.gate.group;e.position.set(0,0,nr);const t=new ve({color:2228248,emissive:16715984,emissiveIntensity:.4,roughness:.4});this.gate.strips.push(t);const n=new ve({color:1579036,metalness:.7,roughness:.4});for(const u of[-4.2,4.2]){const d=new X(new Ee(.9,7,.9),n);d.position.set(u,3.5,0),d.castShadow=!0,e.add(d);const f=new X(new Ee(.25,6.6,.25),t);f.position.set(u+(u<0?.5:-.5),3.5,0),e.add(f)}const i=new X(new Ee(9.3,.9,.9),n);i.position.set(0,7.2,0),e.add(i);const s=new X(new Ee(8.2,.22,.25),t);s.position.set(0,6.6,0),e.add(s);const o=eo("DK_Mood_ExtractGate_TripleStrip_4m");o&&(o.position.set(0,8,0),o.scale.setScalar(1.6),o.traverse(u=>{const d=u.material;if(d&&d.emissive){const f=d.clone();f.emissive.setHex(16715984),f.emissiveIntensity=1.2,u.material=f,this.gate.strips.push(f)}}),e.add(o));const a=yt.tex.gateEnergy?yt.tex.gateEnergy.clone():null;a&&(a.wrapS=a.wrapT=Qt,a.needsUpdate=!0,this.scrollTex.push(a));const c=new Le({map:a,color:16724192,transparent:!0,opacity:.12,blending:wt,depthWrite:!1,side:kt,fog:!1});this.gate.energy=c;const l=new X(new It(7.6,6.4),c);l.position.set(0,3.3,0),e.add(l);const h=new X(new Di(2.5,3.2,40),new Le({color:16715984,transparent:!0,opacity:.5,blending:wt,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.set(0,.03,-2.5),e.add(h),this.scene.add(e),this.lightAnchors.push({pos:new b(0,3,nr-2),color:16715984,intensity:10,dist:20})}buildDust(){const t=new Float32Array(1500);for(let i=0;i<500;i++)t[i*3]=(Math.random()-.5)*40,t[i*3+1]=Math.random()*10,t[i*3+2]=(Math.random()-.5)*40;const n=new Mt;n.setAttribute("position",new Ct(t,3)),this.dust=new Uc(n,new Nc({color:8257434,size:.06,transparent:!0,opacity:.5,depthWrite:!1,blending:wt})),this.dust.frustumCulled=!1,this.scene.add(this.dust)}setGateActive(e){this.gate.active=e;for(const n of this.gate.strips)n.emissiveIntensity=e?3.5:.4;this.gate.energy&&(this.gate.energy.opacity=e?.75:.12);const t=this.lightAnchors.find(n=>n.color===16715984);t&&(t.intensity=e?40:10)}reset(){for(const e of this.barriers)e.open=0,e.box.active=!0,e.mesh.visible=!0,e.mat.opacity=.9;this.setGateActive(!1)}openBarrier(e){const t=this.barriers[e];t&&(t.box.active=!1,t.open=1e-4)}closeBarriersFrom(e){this.barriers.forEach((t,n)=>{n>=e?(t.open=0,t.box.active=!0,t.mesh.visible=!0,t.mat.opacity=.9):(t.box.active=!1,t.mesh.visible=!1)})}update(e,t,n){for(const l of this.scrollTex)l.offset.y-=e*.08;this.sky.position.set(n.x,0,n.z),this.railChev.offset.y-=e*1.2,this.groundChev.offset.y-=e*1.2;for(const l of this.fogMats)l.opacity=.5+Math.sin(t*.7+l.id)*.1;for(const l of this.fogCols)l.rotation.y+=e*l.userData.spin;const i=Math.sin(t*3)>.2?1:.15;for(const l of this.blinkers)l.color.setRGB(i,.05*i,.08*i);for(const l of this.barriers)l.open>0&&l.mesh.visible&&(l.open+=e,l.mat.opacity=Math.max(0,.9-l.open*1.5),l.mat.opacity<=0&&(l.mesh.visible=!1));const s=this.hook;s.angle=Math.sin(t*.95)*.82;const o=s.pivot.x+Math.sin(s.angle)*s.len,a=s.pivot.y-Math.cos(s.angle)*s.len;if(s.vx=(o-s.prevX)/Math.max(e,1e-4),s.prevX=o,s.load.position.set(o,a-.2,s.pivot.z),s.load.rotation.z=s.angle,s.cable.position.copy(s.pivot),s.cable.rotation.z=s.angle,s.cable.scale.y=s.len-1.2,this.arena!=="hyperdrive")for(const l of this.puddles){const h=(t+l.phase)%5.2;l.warn=h>1.9&&h<2.6,l.on=h>=2.6;const u=l.on?.9+Math.random()*1.6:l.warn&&Math.random()>.5?.8:.05;if(l.mat.emissiveIntensity=u,l.arcs.visible=l.on,l.on&&Math.random()<.5){const d=l.arcs.geometry.attributes.position;for(let f=0;f<24;f++){const g=Math.random()*Math.PI*2,_=Math.random()*l.r,m=Math.cos(g)*_,p=Math.sin(g)*_;d.setXYZ(f*2,m,Math.random()*.3,p),d.setXYZ(f*2+1,m+(Math.random()-.5)*.9,Math.random()*.6,p+(Math.random()-.5)*.9)}d.needsUpdate=!0}}this.gate.active&&this.gate.energy&&(this.gate.energy.opacity=.6+Math.sin(t*6)*.15);const c=this.lightAnchors.map(l=>({a:l,d:l.pos.distanceToSquared(n)})).sort((l,h)=>l.d-h.d);this.pointLights.forEach((l,h)=>{const u=c[h];if(!u){l.intensity=0;return}l.position.copy(u.a.pos),l.color.setHex(this.arena==="hyperdrive"&&u.a.color===3800852?16723920:u.a.color),l.distance=u.a.dist;const d=u.a.color===3800852?.85+Math.sin(t*7+h)*.1:1;l.intensity=u.a.intensity*d}),this.moon.position.set(n.x-12,30,n.z-10),this.moon.target.position.set(n.x,0,n.z+2),this.dust.position.set(n.x,0,n.z),this.dust.rotation.y=t*.02}}const Ln=()=>new b,od=Ln();Ln();const dy=0;function Ws(r,e,t){let n=(e-r+Math.PI)%(Math.PI*2)-Math.PI;return n<-Math.PI&&(n+=Math.PI*2),r+n*t}function Xs(r,e){let t=(e-r+Math.PI)%(Math.PI*2)-Math.PI;return t<-Math.PI&&(t+=Math.PI*2),t}function Kn(r,e=Ln()){return e.set(Math.sin(r),0,Math.cos(r))}class fy{constructor(e){this.base="Idle_Skate",this.baseSpeed=1,this.w={},this.one=null,this.rest=[],this.cm=e;for(const n of Object.values(e.bones))this.rest.push([n,n.quaternion.clone()]);for(const[n,i]of Object.entries(e.actions))this.w[n]=0,i.enabled=!0,i.setEffectiveWeight(0);const t=e.actions.Idle_Skate;t&&(t.play(),this.w.Idle_Skate=1,t.setEffectiveWeight(1))}has(e){return!!this.cm.actions[e]}setBase(e,t=1){this.cm.actions[e]&&(this.base=e,this.baseSpeed=t)}once(e,t){const n=this.cm.actions[e];n&&(n.reset(),n.setLoop(du,1),n.clampWhenFinished=!0,n.timeScale=n.getClip().duration/Math.max(.05,t),n.play(),this.one={name:e,t:0,dur:t})}get busy(){return!!this.one}update(e){const t=this.cm.mixer;if(!t)return;let n=0;if(this.one){this.one.t+=e;const s=this.one.t/this.one.dur;if(n=s<.15?s/.15:s>.8?Math.max(0,(1-s)/.2):1,s>=1){const o=this.cm.actions[this.one.name];o&&(o.stop(),this.w[this.one.name]=0),this.one=null,n=0}}for(const[s,o]of this.rest)s.quaternion.copy(o);const i=Math.min(1,e*10);for(const[s,o]of Object.entries(this.cm.actions)){if(this.one&&s===this.one.name){o.setEffectiveWeight(n);continue}const a=s===this.base?1-n:0,c=this.w[s]+(a-this.w[s])*i;if(this.w[s]=c,c<.01&&a===0){o.isRunning()&&o.stop();continue}o.isRunning()||(o.reset(),o.setLoop(fu,1/0),o.play()),s===this.base&&(o.timeScale=this.baseSpeed),o.setEffectiveWeight(c)}t.update(e)}}class uo{constructor(e,t,n,i){this.pos=Ln(),this.vel=Ln(),this.heading=0,this.y=0,this.vy=0,this.radius=.45,this.hp=100,this.maxHp=100,this.alive=!0,this.team="enemy",this.flashT=0,this.staggerT=0,this.hazardCd=0,this.invulnT=0,this.stunT=0,this.lean=0,this.squash=0,this.bob=0,this.armDown=1.05,this.punchL=0,this.punchR=0,this.armSpread=0,this.grounded=!0,this.grindBox=null,this.rampVy=0,this.key=e,this.cm=$x(e,{tint:n,emissiveBoost:i}),this.cm.pivot.rotation.y=dy,this.anim=new fy(this.cm),t.add(this.cm.root)}get speed(){return Math.hypot(this.vel.x,this.vel.z)}forward(e=Ln()){return Kn(this.heading,e)}flash(e=16777215,t=.1){this.flashT=t,Fh(this.cm,.75,new _e(e))}dispose(e){e.remove(this.cm.root),this.cm.mixer?.stopAllAction()}integrate(e,t){this.pos.x+=this.vel.x*e,this.pos.z+=this.vel.z*e;let n=0;this.grindBox=null;for(const s of t){if(!s.active||!s.ride)continue;const o=s.ride==="rail"?this.grounded?.45:1.1:.05;if(this.pos.x<s.minX-o||this.pos.x>s.maxX+o||this.pos.z<s.minZ||this.pos.z>s.maxZ)continue;const a=zh(s,this.pos.z);this.y>=a-(s.ride==="ramp"?.7:.3)&&a>n&&(n=a,this.grindBox=s.ride==="rail"?s:null)}const i=this.grounded;this.grounded&&this.vy<=0&&this.y<=n+.3&&this.y>=n-.75?(this.rampVy=e>0?(n-this.y)/e:0,this.y=n):(!this.grounded||this.y>n||this.vy>0)&&(i&&this.vy<=0&&this.rampVy>.5&&(this.vy=Math.min(9,this.rampVy*1.15)),this.rampVy=0,this.vy-=22*e,this.y+=this.vy*e,this.y<=n&&(n>0||this.pos.x<Fe+.3)?(this.y=n,this.vy=0,this.grounded||(this.grounded=!0,this.onLand())):this.y>n&&(this.grounded=!1)),this.y>.02&&this.y>n+.05&&(this.grounded=!1);for(const s of t){if(!s.active||this.y>s.h||s.ride&&this.y>=zh(s,this.pos.z)-(s.ride==="ramp"?.75:.35))continue;const o=Math.max(s.minX,Math.min(this.pos.x,s.maxX)),a=Math.max(s.minZ,Math.min(this.pos.z,s.maxZ)),c=this.pos.x-o,l=this.pos.z-a,h=c*c+l*l;if(h<this.radius*this.radius)if(h>1e-6){const u=Math.sqrt(h),d=this.radius-u,f=c/u,g=l/u;this.pos.x+=f*d,this.pos.z+=g*d;const _=this.vel.x*f+this.vel.z*g;_<0&&(this.vel.x-=_*f*1.3,this.vel.z-=_*g*1.3,this.onWallHit(-_))}else{const u=this.pos.x-s.minX,d=s.maxX-this.pos.x,f=this.pos.z-s.minZ,g=s.maxZ-this.pos.z,_=Math.min(u,d,f,g);_===u?this.pos.x=s.minX-this.radius:_===d?this.pos.x=s.maxX+this.radius:_===f?this.pos.z=s.minZ-this.radius:this.pos.z=s.maxZ+this.radius}}this.pos.x<Ge+this.radius&&(this.pos.x=Ge+this.radius,this.vel.x<0&&(this.vel.x*=-.3))}onLand(){}onWallHit(e){}get overWater(){return this.pos.x>Fe+.25}syncVisual(e,t){const n=this.cm.root;n.position.set(this.pos.x,this.y+this.bob,this.pos.z),n.rotation.y=this.heading,this.lean+=(Ri.clamp(-t*this.speed*.035,-.4,.4)-this.lean)*Math.min(1,e*8),this.cm.pivot.rotation.z=this.lean,this.squash=Math.max(0,this.squash-e*5);const i=1-this.squash*.18;this.cm.pivot.scale.set(1+this.squash*.12,i,1+this.squash*.12),this.flashT>0&&(this.flashT-=e,this.flashT<=0&&Fh(this.cm,0)),this.cm.procedural&&(this.cm.pivot.position.y=Math.abs(Math.sin(performance.now()*.008))*.05*Math.min(1,this.speed/5)),this.anim.update(e),this.poseArms(e)}poseArms(e){const t=this.cm.bones,n=t.upperarm_l,i=t.upperarm_r;if(!n||!i)return;this.punchL=Math.max(0,this.punchL-e*4.5),this.punchR=Math.max(0,this.punchR-e*4.5),this.cm.root.updateMatrixWorld(!0);const s=py.setFromAxisAngle(_a,this.heading),o=od.set(0,0,1).applyQuaternion(s);for(const a of[1,-1]){const c=a===1?n:i,l=a===1?this.punchL:this.punchR,h=l>0?Math.sin(Math.min(1,l)*Math.PI*.5):0,u=(this.armDown-this.armSpread)*(1-h*.9);va.setFromAxisAngle(o,-a*u),to.setFromAxisAngle(_a,-a*1.45*h),va.premultiply(to),c.parent.getWorldQuaternion(is),Ys.copy(is).multiply(c.quaternion),Ys.premultiply(va),c.quaternion.copy(is.invert().multiply(Ys));const d=t[a===1?"lowerarm_l":"lowerarm_r"];d&&(to.setFromAxisAngle(_a,-a*.5*(1-h)),d.parent.getWorldQuaternion(is),Ys.copy(is).multiply(d.quaternion).premultiply(to),d.quaternion.copy(is.invert().multiply(Ys)))}}}const _a=new b(0,1,0),py=new Ft,va=new Ft,to=new Ft,is=new Ft,Ys=new Ft,ad={viper01:{key:"viper01",kind:"viper",hp:42,speed:6.2,accel:12,radius:.45,poise:0,score:100,tint:16762092},viper02:{key:"viper02",kind:"viper",hp:42,speed:6.2,accel:12,radius:.45,poise:0,score:100,tint:16762092},viper03:{key:"viper03",kind:"viper",hp:42,speed:6.2,accel:12,radius:.45,poise:0,score:100,tint:16762092},enforcer:{key:"enforcer",kind:"enforcer",hp:120,speed:4.6,accel:9,radius:.6,poise:20,score:250},falcon:{key:"falcon",kind:"falcon",hp:700,speed:6,accel:12,radius:.8,poise:60,score:2e3}},fi={pink_pounce:{windup:.9,leapTime:.5,pinTime:1.5,tick:.3,tickDmg:3,minRange:3.5,maxRange:9,cooldown:7,color:16723892}};class Hh extends uo{constructor(e,t,n){const i=ad[e];super(i.key,t,i.tint,i.kind==="viper"?4:i.kind==="falcon"?.6:2.5),this.state="spawn",this.stateT=0,this.target=null,this.retargetT=0,this.cd=1,this.orbit=Math.random()*Math.PI*2,this.attackKind="melee",this.finisherCd=4+Math.random()*3,this.pounceTo=Ln(),this.pinTarget=null,this.pinTickT=0,this.finisherFx=null,this.deadT=0,this.hitBy=new Set,this.telegraph=null,this.dashDir=Ln(),this.dashHit=new Set,this.summoned=0,this.id=Math.floor(Math.random()*1e9),this.lastHitSource="vixen",this.def=i;const s=i.kind==="viper"?16722538:i.kind==="enforcer"?16752672:16719936,o=i.radius*2.2,a=new X(new Di(o*.78,o,32).rotateX(-Math.PI/2),new Le({color:s,transparent:!0,opacity:.7,blending:wt,depthWrite:!1,fog:!1}));a.position.y=.04,this.cm.root.add(a);const c=new Le({color:s,side:Xt,fog:!1});c.onBeforeCompile=l=>{l.vertexShader=l.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed += normalize(objectNormal) * 0.022;`)},this.cm.model.traverse(l=>{const h=l;if(h.isSkinnedMesh&&h.geometry.attributes.normal){const u=new Fu(h.geometry,c);u.bind(h.skeleton,h.bindMatrix),u.frustumCulled=!1,(h.parent??this.cm.model).add(u)}}),this.hp=this.maxHp=i.hp,this.radius=i.radius,this.pos.copy(n),this.team="enemy",this.stateT=.6,this.cd=.8+Math.random()*1.2}}class my{constructor(e,t,n){this.pos=Ln(),this.vel=Ln(),this.team="enemy",this.dmg=0,this.life=0,this.kind="bolt",this.active=!1,this.src="enemy",this.mesh=new X(t,n),this.mesh.visible=!1,e.add(this.mesh)}}class gy{constructor(e){this.list=[],this.boltGeo=new on(.22,10,8),this.boltMat=new Le({color:16719936,fog:!1}),this.pGeo=new Gt(.035,.035,1.1,5).rotateX(Math.PI/2),this.pMat=new Le({color:16752704,fog:!1}),this.scene=e}fire(e,t,n,i,s,o,a){let c=this.list.find(l=>!l.active&&l.kind===e);return c||(c=new my(this.scene,e==="bolt"?this.boltGeo:this.pGeo,e==="bolt"?this.boltMat:this.pMat),c.kind=e,this.list.push(c)),c.active=!0,c.pos.copy(t),c.vel.copy(n).multiplyScalar(i),c.dmg=s,c.team=o,c.life=e==="bolt"?2.6:.6,c.src=a,c.mesh.visible=!0,c.mesh.position.copy(t),c.mesh.lookAt(od.copy(t).add(n)),c}clear(){for(const e of this.list)e.active=!1,e.mesh.visible=!1}}const fn=900;class _y{constructor(e){this.pos=new Float32Array(fn*3),this.col=new Float32Array(fn*3),this.size=new Float32Array(fn),this.alpha=new Float32Array(fn),this.vel=new Float32Array(fn*3),this.life=new Float32Array(fn),this.maxLife=new Float32Array(fn),this.size0=new Float32Array(fn),this.grav=new Float32Array(fn),this.drag=new Float32Array(fn),this.cursor=0;const t=new Mt;t.setAttribute("position",new Ct(this.pos,3).setUsage(yr)),t.setAttribute("color",new Ct(this.col,3).setUsage(yr)),t.setAttribute("size",new Ct(this.size,1).setUsage(yr)),t.setAttribute("alpha",new Ct(this.alpha,1).setUsage(yr));const n=new Wt({uniforms:{uScale:{value:400}},vertexShader:`attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float uScale;
        void main(){ vC=color; vA=alpha; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=size*uScale/max(0.1,-mv.z); gl_Position=projectionMatrix*mv; }`,fragmentShader:"varying vec3 vC; varying float vA; void main(){ vec2 d=gl_PointCoord-0.5; float r=dot(d,d)*4.0; if(r>1.0) discard; float a=(1.0-r); gl_FragColor=vec4(vC*a*vA*1.6, 1.0); }",transparent:!0,depthWrite:!1,blending:wt});this.points=new Uc(t,n),this.points.frustumCulled=!1,this.points.renderOrder=10,e.add(this.points)}setScale(e){this.points.material.uniforms.uScale.value=e*.6}emit(e,t,n,i,s,o=0,a=0){const c=this.cursor;this.cursor=(this.cursor+1)%fn,this.pos[c*3]=e.x,this.pos[c*3+1]=e.y,this.pos[c*3+2]=e.z,this.vel[c*3]=t.x,this.vel[c*3+1]=t.y,this.vel[c*3+2]=t.z,this.col[c*3]=n.r,this.col[c*3+1]=n.g,this.col[c*3+2]=n.b,this.size0[c]=i,this.size[c]=i,this.life[c]=s,this.maxLife[c]=s,this.alpha[c]=1,this.grav[c]=o,this.drag[c]=a}burst(e,t,n,i,s,o,a=-9,c=.5){const l=new b;for(let h=0;h<t;h++)l.set(Math.random()*2-1,Math.random()*c+(c>0?.2:0),Math.random()*2-1).normalize().multiplyScalar(i*(.4+Math.random()*.8)),this.emit(e,l,n,s*(.6+Math.random()*.8),o*(.6+Math.random()*.7),a,1.5)}update(e){for(let n=0;n<fn;n++){if(this.life[n]<=0){this.alpha[n]!==0&&(this.alpha[n]=0,this.size[n]=0);continue}this.life[n]-=e;const i=Math.max(0,this.life[n]/this.maxLife[n]),s=Math.max(0,1-this.drag[n]*e);this.vel[n*3]*=s,this.vel[n*3+2]*=s,this.vel[n*3+1]=this.vel[n*3+1]*s+this.grav[n]*e,this.pos[n*3]+=this.vel[n*3]*e,this.pos[n*3+1]+=this.vel[n*3+1]*e,this.pos[n*3+2]+=this.vel[n*3+2]*e,this.pos[n*3+1]<.02&&this.grav[n]<0&&(this.pos[n*3+1]=.02,this.vel[n*3+1]*=-.3),this.alpha[n]=i,this.size[n]=this.size0[n]*(.4+.6*i)}const t=this.points.geometry;t.attributes.position.needsUpdate=!0,t.attributes.color.needsUpdate=!0,t.attributes.size.needsUpdate=!0,t.attributes.alpha.needsUpdate=!0}clear(){this.life.fill(0)}}class vy{constructor(e){this.pool=[],this.ringGeo=new Di(.85,1,48),this.sphereGeo=new on(1,16,12),this.scene=e,this.ringGeo.rotateX(-Math.PI/2);const t=new hr(1,1,32,1,!0);t.rotateX(-Math.PI/2),t.translate(0,0,.5),this.coneGeo=t}get(e){let t=this.pool.find(n=>n.t>=n.dur&&n.kind===e);if(!t){const n=e==="ring"?this.ringGeo:e==="cone"?this.coneGeo:this.sphereGeo,i=new Le({color:16719823,transparent:!0,depthWrite:!1,blending:wt,side:kt,fog:!1});t={mesh:new X(n,i),t:0,dur:0,s0:1,s1:1,a0:1,kind:e},t.mesh.renderOrder=9,this.scene.add(t.mesh),this.pool.push(t)}return t.mesh.visible=!0,t}ring(e,t,n,i,s,o=1,a=.08){const c=this.get("ring");return c.mesh.position.set(e.x,a,e.z),c.mesh.rotation.set(0,0,0),c.mesh.material.color.setHex(t),c.t=0,c.dur=s,c.s0=n,c.s1=i,c.a0=o,c.mesh}vring(e,t,n,i,s,o){const a=this.ring(e,n,i,s,o,.9,e.y);a.lookAt(e.clone().add(t)),a.rotateX(Math.PI/2)}cone(e,t,n,i,s,o){const a=this.get("cone");a.mesh.position.copy(e),a.mesh.rotation.set(0,t,0),a.mesh.material.color.setHex(s),a.t=0,a.dur=o,a.s0=n*.25,a.s1=n,a.a0=.22,a.mesh.userData.r=Math.tan(i)}flash(e,t,n,i,s){const o=this.get("sphere");o.mesh.position.copy(e),o.mesh.material.color.setHex(t),o.t=0,o.dur=s,o.s0=n,o.s1=i,o.a0=.8}update(e){for(const t of this.pool){if(t.t>=t.dur){t.mesh.visible=!1;continue}t.t+=e;const n=Math.min(1,t.t/t.dur),i=1-Math.pow(1-n,3),s=t.s0+(t.s1-t.s0)*i;if(t.kind==="cone"){const o=s*t.mesh.userData.r;t.mesh.scale.set(o,o,s)}else t.mesh.scale.setScalar(s);t.mesh.material.opacity=t.a0*(1-n),t.t>=t.dur&&(t.mesh.visible=!1)}}clear(){for(const e of this.pool)e.t=e.dur,e.mesh.visible=!1}}class xy{constructor(){this.items=[],this.v=new b,this.layer=document.getElementById("dmg-layer")}spawn(e,t,n=""){let i=this.items.find(s=>s.t<=0);if(!i){if(this.items.length>40)return;const s=document.createElement("div");this.layer.appendChild(s),i={el:s,pos:new b,t:0,vx:0},this.items.push(i)}i.el.className="dmg "+n,i.el.textContent=t,i.el.style.display="block",i.pos.copy(e),i.t=.9,i.vx=(Math.random()-.5)*1.2}update(e,t,n,i){for(const s of this.items){if(s.t<=0)continue;if(s.t-=e,s.pos.y+=e*1.6,s.pos.x+=s.vx*e,this.v.copy(s.pos).project(t),s.t<=0||this.v.z>1){s.el.style.display="none",s.t=0;continue}const o=(this.v.x*.5+.5)*n,a=(-this.v.y*.5+.5)*i,c=1+Math.max(0,s.t-.7)*2.5;s.el.style.transform=`translate(${o.toFixed(1)}px, ${a.toFixed(1)}px) translate(-50%, -50%) scale(${c.toFixed(2)})`,s.el.style.opacity=Math.min(1,s.t*3).toFixed(2)}}clear(){for(const e of this.items)e.t=0,e.el.style.display="none"}}class yy{constructor(e){const t=new Gt(.06,.06,1,8,1,!0);t.rotateX(Math.PI/2),t.translate(0,0,.5),this.mesh=new X(t,new Le({color:16728288,transparent:!0,opacity:.9,blending:wt,depthWrite:!1,fog:!1})),this.mesh.visible=!1,this.mesh.renderOrder=11,e.add(this.mesh)}set(e,t,n){this.mesh.visible=!0,this.mesh.position.copy(e),this.mesh.lookAt(t);const i=e.distanceTo(t);this.mesh.scale.set(n,n,i)}hide(){this.mesh.visible=!1}}const qn=r=>new _e(r),Re={blu:qn(2784255),mag:qn(16719823),grn:qn(3800852),org:qn(16747051),red:qn(16719936),cyan:qn(8446207),white:qn(16777215),yel:qn(16764992)},xa=new b(0,1,0),Vh=qn(2085258),oe=new b,ut=new b,ft=new b,Gh=new _e(16724048),My=[{title:"WAVE 1",sub:"IRON ROSE BRUTES",batches:[{list:["e","e","e"],when:-1},{list:["e","e"],when:0}]},{title:"WAVE 2",sub:"IRON ROSE ENFORCERS",batches:[{list:["e","e","e"],when:-1},{list:["e","e"],when:1}]},{title:"WAVE 3",sub:"FLOODED LOT",batches:[{list:["e","e","e","e"],when:-1},{list:["e","e"],when:1}]},{title:"WAVE 4",sub:"FALCON — FACE OF THE IRON ROSE",batches:[{list:["f","e","e"],when:-1}]}],Sy=[{title:"HYPERDRIVE · APPROACH",sub:"SWARM — SCAR SWARM INCOMING",batches:[{list:["v","v","v","v","v"],when:-1},{list:["v","v","v","v"],when:2}]},{title:"HYPERDRIVE · RING HALL",sub:"COBRA — HOOD STRIKE",batches:[{list:["v","v","v","v","v"],when:-1},{list:["v","v","v","v"],when:2}]},{title:"HYPERDRIVE · CORRIDOR",sub:"FANG — JET FANG DIVES",batches:[{list:["v","v","v","v","v"],when:-1},{list:["v","v","v","v","v"],when:2}]},{title:"HYPERDRIVE · COCKPIT CORE",sub:"HIVE — HEX NEST",batches:[{list:["v","v","v","v"],when:-1},{list:["v","v","v","v"],when:2}]}],Wh=[{squad:"SWARM",fin:"SCAR SWARM"},{squad:"COBRA",fin:"HOOD STRIKE"},{squad:"FANG",fin:"JET FANG"},{squad:"HIVE",fin:"HEX NEST"}],wy=["APPROACH LANE","RING HALL","CORRIDOR VIEWPORT","COCKPIT CORE"],Vt=class Vt{constructor(e,t,n,i){this.allies=[],this.enemies=[],this.pickups=[],this.state="title",this.runId=0,this.time=0,this.breatheT=0,this.wave=0,this.waveActive=!1,this.batch=0,this.waveCleared=!1,this.gateOpen=!1,this.introT=0,this.lastBannerT=0,this.chaos=0,this.chaosReadyAnnounced=!1,this.level=1,this.frenzyReason="",this.frenzyReasonT=0,this.rageT=0,this.rageCd=0,this.lastGirlHurtT=-99,this.viperSeq=0,this.voiceQ=Promise.resolve(),this.voiceGen=0,this.gatling=null,this.seekerCd=3,this.kLabelT=0,this.p={combo:0,comboT:0,atkT:0,atkDur:0,atkHit:!1,coneCd:0,spaceT:0,lastSafe:new b,braking:!1,brakeSfxT:0,fwdSpeed:0,turn:0,aimYaw:0,invuln:0},this.slingAimYaw=0,this.sling={phase:"none",t:0,dir:new b,dist:0,hit:new Set,firstHit:!1},this.k={downed:!1,downT:0,atkCd:0,shootCd:0,lastDmg:-99,target:null,retarget:0,swing:0,recoverT:0,slideCd:4,slideT:0,slideHits:0,slideDir:new b,slideTgt:null},this.camYaw=0,this.camPitch=.18,this.trauma=0,this.hitstop=0,this.worldScale=1,this.fovKick=0,this.stats={time:0,kos:0,slingKos:0,splashKos:0,maxCombo:0,slings:0,combo:0,comboT:0},this.telegraphs=[],this.onStateChange=()=>{},this.hud={},this.hudCache={},this.grinding=!1,this.grindT=0,this.airT=0,this.airFromRamp=!1,this.trickScore=0,this.trickChain=0,this.trickChainT=0,this.mines=[],this.craters=[],this.comsT=0,this.comsCd={},this.lowHpCd=0,this.voicePending=0,this.tires=[],this.gatlingSpin=0,this.kaileeMuzzle=new gt,this.irsSeenWave=-1,this.crumbT=0,this.sparkAcc=0,this.scene=e,this.camera=t,this.input=i,this.world=new uy(e,n),this.particles=new _y(e),this.trans=new vy(e),this.dmg=new xy,this.beam=new yy(e),this.proj=new gy(e),this.vixen=new uo("vixen",e),this.addVixenKit(this.vixen),this.vixen.team="hero",this.vixen.radius=.55,this.kailee=new uo("kailee",e),this.addKaileeKit(this.kailee),this.kailee.team="hero",this.kailee.radius=.4,this.kailee.maxHp=this.kailee.hp=120;for(const[o,a,c,l,h,u]of[["brianna","BRIANNA",1022554,"melee",-3.6,2.2],["payton","PAYTON",10112255,"ranged",3.8,4.6]]){const d=new uo(o,e);d.team="hero",d.radius=.55,d.maxHp=d.hp=l==="melee"?130:100,this.allies.push({a:d,key:o,name:a,col:c,role:l,side:h,back:u,downed:!1,downT:0,atkCd:0,shootCd:0,lastDmg:-99,target:null,retarget:0,recoverT:0,swing:0,sigCd:4+Math.random()*2,sigT:0,sigShot:0})}for(const o of this.allies)this.addAllyKit(o);this.vixen.onLand=()=>{J.land(),this.vixen.squash=.6,this.particles.burst(oe.copy(this.vixen.pos).setY(.1),6,Re.grn,2,.12,.3,-3,.2)},this.vixen.onWallHit=o=>{o>6&&(this.shake(.25),J.clang(),this.vixen.squash=.5)},this.aimRing=new X(new Di(.35,.5,32).rotateX(-Math.PI/2),new Le({color:16719823,transparent:!0,opacity:.7,blending:wt,depthWrite:!1,fog:!1})),e.add(this.aimRing);const s=new It(1.6,28).rotateX(-Math.PI/2).translate(0,0,14);this.slingLine=new X(s,new Le({color:16719823,transparent:!0,opacity:.22,blending:wt,depthWrite:!1,fog:!1})),this.slingLine.visible=!1,e.add(this.slingLine);for(const o of["hp-vixen","hp-kailee","kailee-status","hp-brianna","brianna-status","hp-payton","payton-status","wave-label","enemy-count","objective","chaos-wrap","chaos-fill","frenzy-reason","ab-cone","ab-sling","banner","fx-vignette","fx-flash","boss","hp-boss"])this.hud[o]=document.getElementById(o);this.resetRun()}hushVoice(){this.voiceGen++,this.voicePending=0,this.voiceQ=Promise.resolve(),J.stopVoice()}get waves(){return this.level===2?Sy:My}zoneName(e){return this.level===2?wy[e]:qt[e].name}clearDynamic(){this.runId++;for(const e of this.enemies)e.dispose(this.scene);this.enemies=[];for(const e of this.pickups)this.scene.remove(e.mesh);this.pickups=[];for(const e of this.telegraphs)this.scene.remove(e);this.telegraphs=[],this.proj.clear(),this.particles.clear(),this.trans.clear(),this.dmg.clear(),this.beam.hide(),this.sling.phase="none",this.worldScale=1,this.hitstop=0,this.trauma=0}placeHeroes(e){const t=this.vixen,n=this.kailee;t.cm.pivot.rotation.x=0,t.cm.pivot.position.y=0,t.pos.set(0,0,e),t.vel.set(0,0,0),t.heading=0,t.y=0,t.vy=0,t.grounded=!0,t.alive=!0,n.pos.set(2,0,e-2.5),n.vel.set(0,0,0),n.heading=0,n.y=0,n.vy=0,n.grounded=!0,n.alive=!0,n.cm.pivot.rotation.x=0,n.cm.pivot.position.y=0;for(const i of this.allies){const s=i.a;s.pos.set(i.side,0,e-i.back),s.vel.set(0,0,0),s.heading=0,s.y=0,s.vy=0,s.grounded=!0,s.alive=!0,s.cm.pivot.rotation.x=0,s.cm.pivot.position.y=0}this.p.fwdSpeed=0,this.p.lastSafe.copy(t.pos),this.camYaw=0,this.camera.position.set(0,3,e-7)}resetRun(){this.clearDynamic(),this.world.reset(),this.wave=0,this.waveActive=!1,this.batch=0,this.waveCleared=!1,this.gateOpen=!1,this.introT=1.2,this.chaos=0,this.chaosReadyAnnounced=!1,this.vixen.hp=this.vixen.maxHp,this.kailee.hp=this.kailee.maxHp;for(const e of this.allies)e.a.hp=e.a.maxHp,Object.assign(e,{downed:!1,downT:0,atkCd:0,shootCd:0,lastDmg:-99,target:null,recoverT:0});Object.assign(this.k,{downed:!1,downT:0,atkCd:0,shootCd:0,lastDmg:-99,target:null,recoverT:0,slideCd:4,slideT:0,slideHits:0,slideTgt:null}),Object.assign(this.p,{combo:0,comboT:0,atkT:0,coneCd:0,invuln:0}),this.stats={time:0,kos:0,slingKos:0,splashKos:0,maxCombo:0,slings:0,combo:0,comboT:0},this.trickScore=0,this.trickChain=0,this.placeHeroes(-4),this.comsCd={},this.lowHpCd=0,setTimeout(()=>this.coms("COM_KAM_01"),1500),setTimeout(()=>this.coms("COM_LIL_01"),5600),this.hushVoice(),this.lastGirlHurtT=-99,this.level=1,this.world.setArena("dock"),this.world.resetHeals(),this.spawnMines(),J.setArena("dock"),this.setObjective("Skate the green rail north — clear Berth 1"),this.hud.boss.classList.add("hidden")}retryWave(){this.clearDynamic();const e=this.wave;this.world.closeBarriersFrom(e),this.world.setGateActive(!1),this.gateOpen=!1,this.waveActive=!1,this.batch=0,this.waveCleared=!1,this.introT=.8,this.vixen.hp=this.vixen.maxHp,this.kailee.hp=this.kailee.maxHp,this.k.downed=!1;for(const t of this.allies)t.a.hp=t.a.maxHp,t.downed=!1,t.downT=0;this.chaos=Math.max(this.chaos,50),this.chaosReadyAnnounced=this.chaos>=100,this.placeHeroes(qt[e].z0+(e===0?4:3)),this.hud.boss.classList.add("hidden"),this.rageT=0,this.setObjective(`Retry: ${this.zoneName(e)}`)}setState(e){this.state=e,this.onStateChange(e)}trick(e,t){this.trickChain++,this.trickChainT=3;const n=Math.min(5,this.trickChain),i=t*n;this.trickScore+=i,this.stats.combo++,this.stats.comboT=2.5,this.stats.maxCombo=Math.max(this.stats.maxCombo,this.stats.combo),this.dmg.spawn(oe.copy(this.vixen.pos).setY(this.vixen.y+2.8),`${e} +${i}${n>1?` x${n}`:""}`,"heal")}spawnMines(){for(const i of this.mines)this.scene.remove(i.mesh);for(const i of this.craters)this.scene.remove(i);this.mines=[],this.craters=[];const e=new ve({color:5917218,roughness:.9,metalness:.4}),t=new ve({color:8010260,roughness:1,metalness:.2}),n=new ve({color:16720384,emissive:16720384,emissiveIntensity:1.5});for(let i=0;i<qt.length;i++){const s=qt[i],o=this.level===2?5+Math.floor(Math.random()*3):2+Math.floor(Math.random()*2);for(let a=0;a<o;a++){const c=Ge+3+Math.random()*(Fe-Ge-6),l=s.z0+8+Math.random()*(s.z1-s.z0-12);if(Math.abs(c)<3&&l<6||this.world.colliders.some(_=>_.active&&c>_.minX-.8&&c<_.maxX+.8&&l>_.minZ-.8&&l<_.maxZ+.8))continue;const h=new tt,u=new X(new Gt(.42,.48,.14,14),e);u.position.y=.07;const d=new X(new Pi(.4,.04,6,14),t);d.rotation.x=Math.PI/2,d.position.y=.14;const f=new X(new hr(.06,.22,6),t);f.position.y=.25;const g=new X(new on(.04,6,6),n);g.position.set(.22,.16,0),h.add(u,d,f,g),h.position.set(c,0,l),h.rotation.y=Math.random()*6,this.scene.add(h),this.mines.push({x:c,z:l,mesh:h,armT:-1,live:!0})}}}updateMines(e){const t=[this.vixen,this.kailee,...this.enemies.filter(n=>n.state!=="dead")];for(const n of this.mines){if(!n.live)continue;if(n.armT<0){for(const o of t)if(o.y<.4&&Math.hypot(o.pos.x-n.x,o.pos.z-n.z)<.9){n.armT=.25,J.mineClick();break}continue}if(n.armT-=e,n.armT>0)continue;n.live=!1,this.scene.remove(n.mesh);const i=new X(new gi(1.3,16),new Le({color:657414,transparent:!0,opacity:.75}));i.rotation.x=-Math.PI/2,i.position.set(n.x,.02,n.z),this.scene.add(i),this.craters.push(i);const s=ut.set(n.x,.6,n.z);this.particles.burst(s,30,Re.yel,9,.2,.6),this.particles.burst(s,18,Re.org,6,.25,.9),J.mine(),Math.hypot(this.vixen.pos.x-n.x,this.vixen.pos.z-n.z)<20&&this.shake(.6);for(const o of t){const a=Math.hypot(o.pos.x-n.x,o.pos.z-n.z);if(a>3.6)continue;const c=1-a/3.6,l=oe.set(o.pos.x-n.x||.01,0,o.pos.z-n.z).normalize(),h=o===this.vixen||o===this.kailee;this.hurt(o,Math.round((h?30:70)*c+8),l,20*c+6,{source:"hazard",stagger:1.2,up:7,heavy:!0,color:16752704}),o.vy=Math.max(o.vy,6*c),o.grounded=!1,o.y=Math.max(o.y,.01)}}}comsLine(e,t){const n=this.voiceGen;if(this.voicePending>=2)return;this.voicePending++;const i=this.time;this.voiceQ=this.voiceQ.then(()=>{if(n!==this.voiceGen||this.state==="cutscene"||this.time-i>8)return;const s=document.getElementById("coms");return s&&(s.className=e==="LILI"?"lili":e==="PAYTON"?"payton":e==="VIXEN"?"vixen":"",s.innerHTML=`<b>📻 ${e}:</b>${t}`,s.style.opacity="1"),this.comsT=99,J.radio(),J.say(e,t).then(()=>{this.comsT=1.2})}).catch(()=>{}).finally(()=>{this.voicePending=Math.max(0,this.voicePending-1)})}coms(e){const n={COM_L2_0:["KAMYRN","Swarm on the approach — Scar Swarm. Stay tight."],COM_L2_1:["LILI","Cobra in the Ring Hall. Hood Strike — watch the hood."],COM_L2_2:["KAMYRN","Jet Fang diving the corridor. Hop it."],COM_L2_3:["LILI","Hive's nest is in the core. Bring everybody home, Grandma."],COM_KAM_01:["KAMYRN","Vixen on coms. Berth's hot — keep skating."],COM_LIL_01:["LILI","Grandma you got this. Don't stop."],COM_KAM_02:["KAMYRN","IRS on your six. Check left."],COM_LIL_02:["LILI","Kailee's with you — stay loud."],COM_KAM_03:["KAMYRN","Slither's nest ahead. End him."],COM_LIL_03:["LILI","Grandma? Please get up."],COM_KAM_04:["KAMYRN","Berth cleared. Next room. Don't freeze."],COM_LIL_04:["LILI","You're almost home. Bring Mom back."]}[e];n&&((this.comsCd[e]??-99)>this.time-8||(this.comsCd[e]=this.time,this.comsLine(n[0],n[1])))}updateComs(e){if(this.comsT>0&&(this.comsT-=e,this.comsT<=0)){const t=document.getElementById("coms");t&&(t.style.opacity="0")}this.lowHpCd-=e,this.vixen.hp<this.vixen.maxHp*.3&&this.lowHpCd<=0&&(this.lowHpCd=25,this.coms("COM_LIL_03"))}shake(e){this.trauma=Math.min(1,this.trauma+e)}banner(e,t="",n=2.2){const i=this.hud.banner;i.innerHTML=`${e}${t?`<small>${t}</small>`:""}`,i.style.opacity="1",this.lastBannerT=Math.min(n,1.8)}setObjective(e){this.hud.objective.textContent=e}addTruckTires(e,t,n,i,s){const o=t>.3,a=o?1:.6,c=new ve({color:789516,roughness:.85,metalness:.05}),l=new ve({color:1118481,emissive:s,emissiveIntensity:.35*a,roughness:.8}),h=new ve({color:9080212,metalness:.9,roughness:.3,emissive:s,emissiveIntensity:.25*a}),u=new ve({color:s,emissive:s,emissiveIntensity:2.2*a,toneMapped:!1}),d=new ve({color:10483455,emissive:63231,emissiveIntensity:2*a,toneMapped:!1}),f=new Pi(t,n,18,48),g=new Gt(t-n*.6,t-n*.6,n*1.2,28),_=new Gt(t*.22,t*.22,n*1.4,16),m=new Pi(t-n*.15,Math.max(.012,n*.12),8,48),p=new Ee(n*1.3,Math.max(.01,n*.12),(t-n*.6)*1.9),v=new Ee(n*1.9,n*.35,n*.5);for(const y of[-i,i]){const x=new tt;x.position.set(y,t+n,0),e.add(x);const I=new X(f,c);I.rotation.y=Math.PI/2,x.add(I);const E=new X(g,h);E.rotation.z=Math.PI/2,x.add(E);const R=new X(_,u);R.rotation.z=Math.PI/2,x.add(R);for(const M of[-1,1]){const P=new X(m,u);P.rotation.y=Math.PI/2,P.position.x=M*n*.65,x.add(P)}for(const M of[0,Math.PI/3,-Math.PI/3]){const P=new X(p,d);P.rotation.x=M,x.add(P)}if(o)for(let M=0;M<16;M++){const P=M/16*Math.PI*2,O=new X(v,l);O.position.set(0,Math.sin(P)*(t+n*.85),Math.cos(P)*(t+n*.85)),O.rotation.x=-P,x.add(O)}const C=new vo(s,2*a,o?2.6:1);C.position.x=y>0?.15:-.15,x.add(C);const w=[u,d,l,h];this.tires.push({g:x,R:t+n,mats:w,base:w.map(M=>M.emissiveIntensity),light:C,lb:C.intensity,last:null})}}tickTires(e){if(e<=0)return;const t=new b,n=performance.now()*.001;for(const i of this.tires){i.g.getWorldPosition(t);const s=i.last?Math.hypot(t.x-i.last.x,t.z-i.last.z)/e:0;(i.last??(i.last=new b)).copy(t);const o=Math.min(s,14);i.g.rotation.x+=o/i.R*e;const a=1+o*.35,c=1+(o>.5?.15*Math.sin(n*40+i.R*9):0);i.mats.forEach((l,h)=>l.emissiveIntensity=i.base[h]*a*c),i.light.intensity=i.lb*a*c}}addVixenKit(e){const t=e.cm.root,n=new tt;n.name="vixen-kit",t.traverse(s=>{/WarRig_Wheel/i.test(s.name)&&(s.visible=!1)}),new ve({color:1118481,roughness:.5,metalness:.3}),new ve({color:16719823,emissive:16719823,emissiveIntensity:1.6,metalness:.8,roughness:.25}),new ve({color:13111342,emissive:5242896,metalness:.7,roughness:.3}),new ve({color:2763312,metalness:.9,roughness:.35}),new ve({color:1706032,emissive:6947071,emissiveIntensity:.9,roughness:.4,metalness:.5}),new ve({color:63231,emissive:63231,emissiveIntensity:3.2,toneMapped:!1}),new ve({color:16719823,emissive:16719823,emissiveIntensity:3,metalness:.6,roughness:.2,toneMapped:!1}),this.addTruckTires(n,.6,.25,.48,16719823);const i=new tt;i.name="vixen-handgun",i.position.set(.42,1,.2),n.add(i),new xo().load(ey,s=>{const o=s.scene,a=new tn().setFromObject(o),c=a.getSize(new b),l=a.getCenter(new b),h=.32/Math.max(c.x,c.y,c.z);o.position.sub(l).multiplyScalar(h),o.scale.setScalar(h);const u=new tt;u.add(o),u.rotation.y=-Math.PI/2,u.traverse(d=>{d.isMesh&&(d.castShadow=!0)}),i.add(u)}),n.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),t.add(n)}addAllyKit(e){const t=e.a.cm.root,n=new tt;n.name=e.key+"-kit";const i=new ve({color:2303274,metalness:.9,roughness:.35});if(e.key==="brianna"){const s=new ve({color:2085258,emissive:2085258,emissiveIntensity:2.4,toneMapped:!1});for(const l of[-.36,.36]){const h=new X(new Gt(.075,.09,.36,10),i);h.rotation.x=Math.PI/2,h.position.set(l,1,.16),n.add(h);for(const u of[-.1,0,.1]){const d=new X(new Pi(.088,.016,6,14),s);d.position.set(l,1,.16+u),n.add(d)}}const o=new X(new gi(.09,16),new ve({color:2085258,emissive:2085258,emissiveIntensity:2.5,toneMapped:!1}));o.position.set(0,1.28,.17),n.add(o);const a=new X(new Ee(.14,.1,.2),i);a.position.set(.2,1.52,-.02),n.add(a);const c=new X(new on(.03,8,8),new Le({color:16719936,toneMapped:!1}));c.position.set(.2,1.52,.09),n.add(c)}else{const s=new tt;s.position.set(.36,1,.25),n.add(s),this.gatling=s;const o=new X(new Ee(.14,.14,.24),i);o.position.z=-.06,s.add(o);const a=new tt;a.name="barrels",s.add(a);const c=new ve({color:10112255,emissive:6955263,emissiveIntensity:1.6});for(let l=0;l<6;l++){const h=l/6*Math.PI*2,u=new X(new Gt(.018,.018,.46,6),l%2?i:c);u.rotation.x=Math.PI/2,u.position.set(Math.cos(h)*.05,Math.sin(h)*.05,.22),a.add(u)}}t.traverse(s=>{/WarRig_Wheel/i.test(s.name)&&(s.visible=!1)}),this.addTruckTires(n,.58,.24,.46,e.key==="brianna"?2085258:10112255),n.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),t.add(n)}addKaileeKit(e){const t=new tt;t.name="kailee-40cal",e.cm.bones.hand_r,t.position.set(.36,.98,.22),e.cm.root.add(t);const n=.28;new xo().load(ty,o=>{const a=o.scene,c=new tn().setFromObject(a),l=c.getSize(new b),h=c.getCenter(new b),u=n/Math.max(l.x,l.y,l.z);a.position.sub(h).multiplyScalar(u),a.scale.setScalar(u);const d=new tt;d.add(a),d.rotation.y=-Math.PI/2,d.traverse(f=>{f.isMesh&&(f.castShadow=!0)}),t.add(d)}),this.kaileeMuzzle.position.set(0,.01,n*.5),t.add(this.kaileeMuzzle);const i=new X(new Gt(.004,.004,1.2,4).rotateX(Math.PI/2).translate(0,0,.6),new Le({color:16715792,transparent:!0,opacity:.55,blending:wt,depthWrite:!1,toneMapped:!1}));i.position.set(0,-.035,n*.5),i.name="kailee-laser",t.add(i),e.cm.root.traverse(o=>{/WarRig_Wheel/i.test(o.name)&&(o.visible=!1)});const s=new tt;s.name="kailee-wheels",this.addTruckTires(s,.14,.04,.16,16732064),e.cm.root.add(s)}addChaos(e,t){if(this.sling.phase!=="none")return;t?(this.frenzyReason=t,this.frenzyReasonT=2.2):this.frenzyReasonT<=0&&(this.frenzyReason="FIGHTING FOR THEM",this.frenzyReasonT=1);const n=this.chaos;if(this.chaos=Math.min(100,this.chaos+e),n<100&&this.chaos>=100&&!this.chaosReadyAnnounced){this.chaosReadyAnnounced=!0,this.shake(.55),J.chaosReady();const i=this.hud["fx-flash"];i.style.transition="none",i.style.opacity="1",requestAnimationFrame(()=>{i.style.transition="opacity 0.9s",i.style.opacity="0"}),this.banner("MOM'S FRENZY FULL","SLINGSHOT READY — PRESS E",1.2),this.trans.ring(this.vixen.pos,16719823,.5,6,.6)}}heroes(){return[this.vixen,this.kailee,...this.allies.filter(e=>!e.downed).map(e=>e.a)]}allyOf(e){return this.allies.find(t=>t.a===e)}hurt(e,t,n,i,s){if(!e.alive)return;if(e===this.vixen){if(this.p.invuln>0||this.state!=="playing")return;e.hp-=t,this.p.invuln=.45,e.flash(16724048,.12),J.playerHurt(),this.shake(.18+t*.012),this.rageT>0?this.dmg.spawn(oe.copy(e.pos).setY(e.y+2.6),"PROTECT MODE","v"):(e.vel.addScaledVector(n,i),this.p.fwdSpeed*=.6),this.dmg.spawn(oe.copy(e.pos).setY(e.y+2),"-"+Math.round(t),"v");const u=this.hud["fx-vignette"];u.style.opacity="1",setTimeout(()=>{u.style.opacity="0"},120),e.anim.has("HitReact_Light")&&this.p.atkT<=0&&e.anim.once("HitReact_Light",.35),this.stats.combo=0,e.hp<=0&&(e.hp=0,this.lose());return}const o=this.allyOf(e);if(o){if(o.downed)return;e.hp-=t,e.flash(o.col,.1),J.kaileeHurt(),e.vel.addScaledVector(n,i*.7),this.dmg.spawn(oe.copy(e.pos).setY(e.y+1.9),"-"+Math.round(t),"k"),o.lastDmg=this.time,this.lastGirlHurtT=this.time,this.addChaos(Math.min(t,20)*1.3,"PROTECT — "+o.name+" HIT"),e.hp<=0?(e.hp=0,o.downed=!0,o.downT=o.key==="payton"?9:8,J.kaileeDown(),this.addChaos(25,o.name+" DOWN — PROTECT HER"),this.banner(o.name+" DOWN",o.key==="payton"?"COVER HER — SHE GETS UP SLOW":"BACK UP IN 8 SECONDS",1.4),o.key==="payton"&&this.paytonDownComs()):e.anim.has("HitReact_Light")&&e.anim.once("HitReact_Light",.3);return}if(e===this.kailee){if(this.k.downed||this.sling.phase!=="none")return;const u=Math.min(t,e.hp);e.hp-=t,e.flash(16752736,.1),J.kaileeHurt(),e.vel.addScaledVector(n,i*.7),this.dmg.spawn(oe.copy(e.pos).setY(e.y+1.9),"-"+Math.round(t),"k"),this.k.lastDmg=this.time,this.lastGirlHurtT=this.time,this.addChaos(u*1.6,"PROTECT — KAILEE HIT"),e.hp<=0?(e.hp=0,this.k.downed=!0,this.k.downT=8,J.kaileeDown(),this.addChaos(20,"KAILEE DOWN — PROTECT HER"),this.banner("KAILEE DOWN","SHE'S BACK UP IN 8 SECONDS",1.6)):e.anim.has("HitReact_Light")&&e.anim.once("HitReact_Light",.3);return}const a=e;if(a.state==="dead")return;if(s.source==="vixen"&&this.rageT>0&&(t=Math.round(t*1.5)),s.source==="vixen"){const u=this.girlNear(a.pos,5);u&&this.addChaos(3,"VIXEN PROTECTS "+u)}a.hp-=t,a.lastHitSource=s.source,a.flash(s.color??16777215,s.heavy?.14:.08),a.squash=Math.min(1,a.squash+(s.heavy?.9:.5));const c=a.def.poise===0||s.heavy||s.source==="sling",l=a.def.kind==="falcon"?i*.35:a.def.kind==="enforcer"?i*.6:i;a.vel.addScaledVector(n,l),s.up&&c&&a.def.kind!=="falcon"&&(a.vy=s.up,a.grounded=!1,a.y=Math.max(a.y,.01)),s.stagger&&c&&(a.state="stagger",a.stateT=a.def.kind==="falcon"?Math.min(.5,s.stagger):s.stagger,a.telegraph&&(a.telegraph.visible=!1),a.state==="stagger"&&this.hidePounceFx(a),a.anim.has("HitReact_Light")&&a.anim.once("HitReact_Light",Math.min(.5,a.stateT)));const h=t>=40;this.dmg.spawn(oe.copy(a.pos).setY(a.y+a.cm.height+.2),String(Math.round(t)),h?"big":""),this.particles.burst(oe.copy(a.pos).setY(a.y+1.1),h?22:9,s.source==="kailee"?Re.org:Re.mag,h?9:5,h?.25:.16,.35,-8),s.source!=="sling"&&s.source!=="hazard"&&this.addChaos(Math.min(6,t*.22)),s.source!=="hazard"&&(this.stats.combo++,this.stats.comboT=2.5,this.stats.maxCombo=Math.max(this.stats.maxCombo,this.stats.combo)),a.hp<=0?this.killEnemy(a,s.source):J.hit()}killEnemy(e,t){if(e.state==="dead")return;e.state="dead",e.deadT=0,e.hp=0,e.telegraph&&(this.scene.remove(e.telegraph),e.telegraph=null),e.finisherFx&&(this.scene.remove(e.finisherFx),e.finisherFx=null),e.pinTarget=null,this.stats.kos++,t!=="sling"&&this.addChaos(e.def.kind==="enforcer"?14:8),t==="sling"&&this.stats.slingKos++,t==="water"&&this.stats.splashKos++,J.enemyDie(),this.particles.burst(oe.copy(e.pos).setY(e.y+1),26,e.def.kind==="viper"?Re.mag:Re.red,8,.22,.6,-6,1),this.trans.ring(e.pos,e.def.kind==="viper"?16719823:16719936,.3,2.5,.4),e.def.kind!=="falcon"&&(e.vy=Math.max(e.vy,5),e.grounded=!1,e.y=Math.max(.01,e.y));const n=e.def.kind==="enforcer"?.6:e.def.kind==="falcon"?0:.22;if(Math.random()<n&&t!=="water"&&this.spawnPickup(e.pos),e.def.kind==="falcon"){this.hud.boss.classList.add("hidden"),this.shake(.8),this.banner("FALCON BROKEN","",2);for(const i of this.enemies)i!==e&&i.state!=="dead"&&this.hurt(i,999,oe.set(0,0,1),5,{source:"vixen",stagger:1})}}spawnPickup(e){let t=this.pickups.find(n=>!n.active);if(!t){const n=new X(new Hc(.28),new Le({color:5963584,fog:!1}));t={mesh:n,pos:new b,t:0,active:!1},this.scene.add(n),this.pickups.push(t)}t.active=!0,t.t=0,t.pos.copy(e).setY(.8),t.mesh.visible=!0,t.pos.x=Math.min(t.pos.x,Fe-1)}spawnEnemy(e,t){const n=qt[this.wave],i=t?t.clone():new b(Ge+4+Math.random()*(Fe-Ge-8),0,Math.min(n.z1-3,Math.max(n.z0+6,this.vixen.pos.z+14+Math.random()*14)));for(let a=0;a<8&&this.world.colliders.some(c=>c.active&&i.x>c.minX-1&&i.x<c.maxX+1&&i.z>c.minZ-1&&i.z<c.maxZ+1);a++)i.x=Ge+4+Math.random()*(Fe-Ge-8);const s=e==="v"?["viper01","viper02","viper03"][Math.floor(Math.random()*3)]:e==="e"?"enforcer":"falcon",o=new Hh(s,this.scene,i);if(o.heading=Math.PI,this.enemies.push(o),this.trans.ring(i,3800852,.2,2.2,.5),this.trans.flash(oe.copy(i).setY(1.2),3800852,.2,1,.3),this.particles.burst(oe.copy(i).setY(.3),14,Re.grn,5,.2,.6,4,1),this.level===2&&e==="v"){const a=Wh[Math.min(3,this.wave)]??Wh[this.viperSeq++%4];o.squad=a.squad,o.fin=a.fin,this.viperSeq++%3===0&&this.dmg.spawn(oe.copy(i).setY(2.4),a.squad,"big")}return(e==="e"||e==="f")&&this.irsReadable(o,e),e==="f"&&(this.hud.boss.classList.remove("hidden"),o.cm.root.scale.setScalar(1)),o}irsReadable(e,t){t==="e"&&e.cm.root.scale.multiplyScalar(1.18),e.cm.root.traverse(a=>{if(!a.isMesh||!a.material)return;const c=Array.isArray(a.material)?a.material:[a.material];a.material=c.map(l=>{const h=l.clone();if(h.emissive&&(h.emissive.setHex(16719936),h.emissiveIntensity=Math.max(h.emissiveIntensity||0,.28)),h.color&&h.color.getHSL){const u={h:0,s:0,l:0};h.color.getHSL(u),u.l<.18&&h.color.offsetHSL(0,0,.12)}return h}),a.material.length===1&&(a.material=a.material[0])});const n=document.createElement("canvas");n.width=256,n.height=64;const i=n.getContext("2d");i.font="bold 40px Impact, sans-serif",i.textAlign="center",i.lineWidth=6,i.strokeStyle="#000",i.fillStyle="#ff3050";const s=t==="f"?"FALCON":"IRON ROSE";i.strokeText(s,128,46),i.fillText(s,128,46);const o=new b_(new Uu({map:new Hu(n),transparent:!0,depthTest:!1,fog:!1}));o.scale.set(2.4,.6,1),o.position.y=t==="f"?3.6:3,o.renderOrder=10,e.cm.root.add(o),this.irsSeenWave!==this.wave&&(this.irsSeenWave=this.wave,this.banner("IRON ROSE INBOUND",t==="f"?"FALCON IS HERE — BREAK HIM":"ENFORCERS — WATCH FOR THE QUAY CRUSHER SLAM",1.6),this.dmg.spawn(oe.copy(e.pos).setY(3.2),"IRON ROSE","big"),this.shake(.3))}objectiveGoal(e){if(this.gateOpen)return e.set(0,0,nr),!0;if(this.waveActive){let n=null,i=1e9;for(const s of this.enemies){if(s.state==="dead")continue;const o=s.pos.distanceTo(this.vixen.pos)-(s.def.kind==="falcon"?20:0);o<i&&(i=o,n=s)}return n?(e.copy(n.pos),!0):!1}const t=this.waveCleared?Math.min(3,this.wave+1):this.wave;return e.set(0,0,Math.max(qt[t].z0+5,(this.vixen.pos.z<qt[t].z0,qt[t].z0+5))),!0}updateObjMarker(e){if(!this.objArrow){const h=new tt,u=new X(new hr(.35,.9,4).rotateX(Math.PI/2),new Le({color:3800852,transparent:!0,opacity:.9,depthTest:!1,fog:!1}));u.position.z=1.6,u.renderOrder=11,h.add(u),this.scene.add(h),this.objArrow=h;const d=document.createElement("div");d.id="obj-dist",d.style.cssText="position:absolute;top:44px;left:50%;transform:translateX(-50%);font:bold 15px system-ui,sans-serif;color:#39ff14;text-shadow:0 0 6px #000,0 0 2px #000;pointer-events:none;z-index:5",(this.hud.objective.parentElement||document.body).appendChild(d),this.objDist=d}const t=ut.set(0,0,0),n=this.objectiveGoal(t),i=this.vixen,s=this.objArrow;if(s.visible=n,this.objDist.style.display=n?"":"none",!n)return;const o=t.x-i.pos.x,a=t.z-i.pos.z,c=Math.hypot(o,a);s.position.set(i.pos.x,i.y+.25,i.pos.z),s.rotation.y=Math.atan2(o,a);const l=c<4;if(s.visible=!l,this.objDist.textContent=(this.waveActive?"◆ TARGET ":this.gateOpen?"▲ GATE ":"▲ NEXT ")+Math.round(c)+"m",this.crumbT-=e,this.crumbT<=0&&!this.waveActive&&c>8){this.crumbT=.6;for(let h=1;h<=3;h++){const u=Math.min(c-2,h*4)/c;this.trans.ring(new b(i.pos.x+o*u,.06,i.pos.z+a*u),3800852,.1,.9,.5)}}}update(e){if(this.tickTires(e),this.state!=="playing"){this.updateCamera(e,!0);return}const t=Math.min(e,1/30);if(this.time+=t,this.stats.time+=t,this.hitstop>0){this.hitstop-=t,this.updateCamera(t,!1),this.input.endFrame();return}const n=t*this.worldScale;this.updatePlayer(t),this.updateSling(t),this.sling.phase==="none"&&this.updateKailee(n);for(const i of this.allies)this.updateAlly(i,n);for(const i of this.enemies)this.updateEnemy(i,n);this.separate(),this.updateProjectiles(n),this.updateHazards(t),this.updateMines(t),this.updateComs(t),this.updateFrenzy(t),this.updatePickups(t),this.updateWaves(t),this.vixen.syncVisual(t,this.p.turn),this.kailee.syncVisual(n,0);for(const i of this.allies)i.a.syncVisual(n,0);for(const i of this.enemies)i.syncVisual(n,0);this.enemies=this.enemies.filter(i=>i.state==="dead"&&i.deadT>1.4?(i.dispose(this.scene),!1):!0),this.world.update(t,this.time,this.vixen.pos),this.updateObjMarker(t),this.particles.update(t),this.trans.update(t),this.stats.comboT>0&&(this.stats.comboT-=t,this.stats.comboT<=0&&(this.stats.combo=0)),this.lastBannerT>0&&(this.lastBannerT-=t,this.lastBannerT<=0&&(this.hud.banner.style.opacity="0")),J.intensity=this.waveActive?this.wave>=3?1:.7:.25,J.updateMusic(),J.setSkate(this.vixen.speed/11,this.vixen.grounded),this.updateCamera(t,!1),this.updateHud(),this.input.endFrame()}aimAssist(e,t,n){let i=null,s=1/0;for(const o of this.enemies){if(o.state==="dead")continue;const a=o.pos.x-this.vixen.pos.x,c=o.pos.z-this.vixen.pos.z,l=Math.hypot(a,c);if(l>t)continue;const h=Math.abs(Xs(e,Math.atan2(a,c)));if(h>n)continue;const u=l*(1+h*2);u<s&&(s=u,i=o)}return i?Math.atan2(i.pos.x-this.vixen.pos.x,i.pos.z-this.vixen.pos.z):e}updatePlayer(e){const t=this.vixen,n=this.p,i=this.input;n.invuln=Math.max(0,n.invuln-e),n.coneCd=Math.max(0,n.coneCd-e),n.comboT=Math.max(0,n.comboT-e),t.stunT=Math.max(0,t.stunT-e),t.hazardCd=Math.max(0,t.hazardCd-e);let s=(i.down("KeyD")?1:0)-(i.down("KeyA")?1:0)+i.touchMove.x,o=(i.down("KeyW")?1:0)-(i.down("KeyS")?1:0)+i.touchMove.y;const a=Math.hypot(s,o);a>1&&(s/=a,o/=a);const c=Kn(this.camYaw,oe),l=c.x*o-c.z*s,h=c.z*o+c.x*s,u=Math.hypot(l,h),d=this.sling.phase!=="none"&&this.sling.phase!=="land",f=this.rageT>0,g=f?11.8:8,_=f?24:14.5;let m=0;if(i.down("Space")?n.spaceT+=e:n.spaceT=0,n.braking=(i.down("ShiftLeft","ShiftRight")||n.spaceT>.2)&&t.grounded,u>.1&&!d&&n.atkT<=0){const C=Math.atan2(l,h),w=Xs(t.heading,C),M=Math.min(1,n.fwdSpeed/g),P=n.fwdSpeed<2.5?11:Ri.lerp(7.5,3.6,M),O=Ri.clamp(w,-P*e,P*e);t.heading+=O,m=O/e;const F=Math.cos(w);F>0?n.fwdSpeed+=_*e*F*u*(t.grounded?1:.3):n.fwdSpeed-=14*e*-F}else n.fwdSpeed-=(t.grounded?1.5:.2)*e;if(n.braking&&(n.fwdSpeed-=28*e,t.speed>3)){n.brakeSfxT-=e,n.brakeSfxT<=0&&(J.brake(),n.brakeSfxT=.25);const C=t.forward(ut).multiplyScalar(-2);this.particles.emit(ft.copy(t.pos).setY(.1),C.add(new b((Math.random()-.5)*3,2,(Math.random()-.5)*3)),Re.yel,.12,.3,-9,1)}this.pinnedBy(t)&&(n.fwdSpeed=0,t.vel.set(0,0,0),t.vy=Math.min(t.vy,0));const p=t.stunT>0?.45:1;n.fwdSpeed=Ri.clamp(n.fwdSpeed,0,g*p+4),n.fwdSpeed>g*p&&(n.fwdSpeed-=12*e),n.turn=m;const v=t.grounded?7:1.2,y=Math.sin(t.heading)*n.fwdSpeed,x=Math.cos(t.heading)*n.fwdSpeed;d||(t.vel.x+=(y-t.vel.x)*Math.min(1,v*e),t.vel.z+=(x-t.vel.z)*Math.min(1,v*e));const I=i.locked?this.camYaw:t.heading;if(n.aimYaw=this.aimAssist(I,9,i.locked?.45:.9),n.atkT>0&&(n.atkT-=e),!d&&i.hit("Mouse0","KeyJ")&&n.atkT<=0){const C=this.pinnedBy(this.kailee);C&&t.pos.distanceTo(C.pos)<10?this.partnerCheck(C):this.startShoot()}if(!d&&i.hit("Mouse2","KeyK")&&n.coneCd<=0&&this.sonicCone(),i.hit("KeyE","KeyL")&&this.tryShatter(),!t.grounded&&!d){let C=null,w=2.6;for(const M of this.world.colliders){if(M.ride!=="rail"||!M.active||t.pos.z<M.minZ-1.5||t.pos.z>M.maxZ)continue;const P=(M.minX+M.maxX)/2,O=Math.abs(P-t.pos.x);O<w&&t.y>M.h-.4&&(w=O,C=P)}C!==null&&(t.pos.x+=(C-t.pos.x)*Math.min(1,e*6))}if(!d&&this.sling.phase!=="land"&&t.integrate(e,this.world.colliders),t.grindBox&&t.grounded){const C=t.grindBox,w=(C.minX+C.maxX)/2;t.pos.x+=(w-t.pos.x)*Math.min(1,e*12),n.fwdSpeed=Math.max(n.fwdSpeed,7.5),this.grinding||(this.grinding=!0,this.grindT=0,J.hop()),this.grindT+=e,this.sparkAcc+=e*60;const M=Math.min(3,Math.floor(this.sparkAcc));this.sparkAcc-=M;for(let P=0;P<M;P++)this.particles.emit(ft.set(t.pos.x+(Math.random()-.5)*.3,t.y+.05,t.pos.z),ut.set((Math.random()-.5)*3,1+Math.random()*2.5,-Math.cos(t.heading)*(1+Math.random()*2)),Math.random()<.5?Re.org:Re.yel,.07,.35,-12)}else{if(this.grinding){const C=Math.round(50+this.grindT*120);this.trick(this.grindT>1.5?"LONG GRIND":"GRIND",C)}this.grinding=!1}t.grounded?this.airT>0&&(!this.grinding&&this.airT>.55&&(t.y>.3?this.trick("FUNBOX LAND",150):this.trick(this.airFromRamp?"KICKER AIR":"AIR",Math.round(this.airT*160))),this.airT=0):(this.airT===0&&(this.airFromRamp=t.vy>7.3||t.y>.6),this.airT+=e),this.trickChainT>0&&(this.trickChainT-=e,this.trickChainT<=0&&(this.trickChain=0)),t.overWater&&t.y<.2?this.fallInWater(t):t.grounded&&t.pos.x<Fe-1.2&&n.lastSafe.copy(t.pos),t.anim.busy||(n.braking&&t.speed>2?t.anim.setBase("Brake"):Math.abs(m)>1.6&&t.speed>3?t.anim.setBase(m>0?"Locomotion_TurnL":"Locomotion_TurnR",1):t.speed>1.2?t.anim.setBase("Locomotion_Fwd",.6+t.speed/g*.8):t.anim.setBase("Idle_Skate")),t.grounded&&t.speed>6.5&&Math.random()<.4&&this.particles.emit(ft.copy(t.pos).setY(.05),ut.set(Math.random()-.5,.8,Math.random()-.5),Re.mag,.08,.25,-4);const E=Kn(n.aimYaw,ut);this.aimRing.position.set(t.pos.x+E.x*3.2,.05,t.pos.z+E.z*3.2),this.aimRing.scale.setScalar(1+Math.sin(this.time*6)*.08);const R=this.chaos>=100&&this.sling.phase==="none"&&!this.k.downed;this.slingLine.visible=R,R&&(this.slingLine.position.set(t.pos.x,.04,t.pos.z),this.slingLine.rotation.y=n.aimYaw,this.slingLine.material.opacity=.15+Math.sin(this.time*8)*.08)}startShoot(){const e=this.p,t=this.vixen;e.atkDur=.3,e.atkT=e.atkDur,e.atkHit=!0,t.heading=Ws(t.heading,e.aimYaw,.85),e.combo=(e.combo+1)%2,t.anim.has("Check_R")&&t.anim.once("Check_R",.2),t.punchR=1;const n=Kn(e.aimYaw,new b).normalize(),i=new b().copy(t.pos).setY(t.y+1.3).addScaledVector(n,.5);this.proj.fire("pistol",i,n,55,14,"hero","vixen"),J.pistol(),this.shake(.06),this.particles.burst(i.clone().addScaledVector(n,.3),5,Re.mag,3,.1,.15,0,.2)}sonicCone(){const e=this.p,t=this.vixen;e.coneCd=1.5,t.heading=e.aimYaw;const n=ft.copy(t.pos).setY(t.y+1.25);this.trans.cone(n,e.aimYaw,10,.55,16719823,.5);const i=Kn(e.aimYaw,new b);for(let o=1;o<=5;o++)this.trans.vring(n.clone().addScaledVector(i,o*2),i,o%2===0?16777215:16719823,.2,.5+o*.6,.2+o*.07);J.cone(),this.shake(.5);{const o=this.hud["fx-vignette"];o.style.boxShadow="inset 0 0 160px 40px rgba(255,31,207,0.85)",o.style.opacity="1",setTimeout(()=>{o.style.opacity="0",setTimeout(()=>{o.style.boxShadow=""},300)},180)}this.dmg.spawn(oe.copy(t.pos).setY(2.8),"SONIC SCREAM","big"),t.anim.has("Slingshot_Release")&&t.anim.once("Slingshot_Release",.4),t.punchL=1,t.punchR=1;const s=Kn(e.aimYaw,ut.clone());for(const o of this.enemies){if(o.state==="dead")continue;const a=o.pos.x-t.pos.x,c=o.pos.z-t.pos.z,l=Math.hypot(a,c);if(l>10+o.radius||Math.abs(Xs(e.aimYaw,Math.atan2(a,c)))>.72)continue;const h=new b(a,0,c).normalize().lerp(s,.4).normalize();this.hurt(o,16,h,14*Math.max(.2,1-l/12),{source:"vixen",stagger:.9,up:3,heavy:o.def.kind==="enforcer",color:16736480})}for(const o of this.proj.list){if(!o.active||o.team!=="enemy")continue;const a=o.pos.x-t.pos.x,c=o.pos.z-t.pos.z;Math.hypot(a,c)<7.5&&Math.abs(Xs(e.aimYaw,Math.atan2(a,c)))<.7&&(o.active=!1,o.mesh.visible=!1,this.particles.burst(o.pos,6,Re.mag,3,.12,.2))}}fallInWater(e){if(J.splash(),this.particles.burst(oe.copy(e.pos).setY(-.6),30,Re.cyan,6,.2,.8,-9,1.5),this.trans.ring(oe.copy(e.pos).setY(-1.05),8446207,.3,3,.7,.8,-1.05),e===this.vixen)e.pos.copy(this.p.lastSafe),e.pos.x=Math.min(e.pos.x,Fe-2.5),e.vel.set(0,0,0),this.p.fwdSpeed=0,e.y=0,e.vy=0,e.grounded=!0,this.p.invuln=0,this.hurt(e,15,oe.set(-1,0,0),0,{source:"water"}),this.p.invuln=1.2,this.banner("SPLASH!","THE WATER BITES — STAY ON THE QUAY",1.2);else if(e===this.kailee||this.allyOf(e))e.pos.copy(this.vixen.pos).add(oe.set(-1.5,0,-1.5)),e.vel.set(0,0,0),e.y=0,e.vy=0,e.grounded=!0,this.hurt(e,10,oe.set(-1,0,0),0,{source:"water"});else{const t=e;this.dmg.spawn(oe.copy(t.pos).setY(1.5),"SPLASH KO","big"),this.killEnemy(t,"water"),t.cm.root.visible=!1,t.deadT=1.4}}tryShatter(e=!1){if(this.sling.phase!=="none")return!1;if(!e&&this.chaos<100)return this.dmg.spawn(oe.copy(this.vixen.pos).setY(2.4),"CHAOS "+Math.floor(this.chaos)+"% — HIT & KO TO FILL","k"),this.banner("SLINGSHOT NOT READY","CHAOS "+Math.floor(this.chaos)+"% — SHOOT, KO, OR LET KAILEE TANK",1),!1;if(this.k.downed)return this.banner("KAILEE IS DOWN","WAIT FOR HER TO RECOVER",1.2),!1;const t=this.sling;return t.phase="tether",t.t=0,t.hit.clear(),t.dist=0,t.firstHit=!1,t.dir.copy(Kn(this.p.aimYaw)),this.vixen.heading=this.p.aimYaw,this.vixen.vel.multiplyScalar(.2),this.p.fwdSpeed=0,this.worldScale=.25,this.stats.slings++,J.tether(),this.banner("VIXEN PLANTS — AIM KAILEE","MOUSE / A·D TO AIM · RELEASE E/L OR CLICK TO FIRE",1.4),this.slingAimYaw=this.p.aimYaw,this.trans.ring(this.vixen.pos,16719823,.4,3,.5),this.vixen.anim.has("Slingshot_Charge")&&this.vixen.anim.once("Slingshot_Charge",.55),this.chaos=0,this.chaosReadyAnnounced=!1,!0}updateSling(e){const t=this.sling,n=this.vixen,i=this.kailee;if(t.phase==="none"){this.beam.hide();return}if(t.t+=e,t.phase==="tether"){const s=oe.copy(n.pos).addScaledVector(t.dir,1.3);i.pos.lerp(s,Math.min(1,e*9)),i.y+=(.9-i.y)*Math.min(1,e*9),i.heading=Math.atan2(t.dir.x,t.dir.z);const o=ut.copy(n.pos).setY(n.y+1.3),a=ft.copy(i.pos).setY(i.y+1);this.beam.set(o,a,2.2+Math.sin(this.time*60)*.8),Math.floor(t.t*8)!==Math.floor((t.t-e)*8)&&(this.trans.ring(n.pos,16719823,.25,2.6,.35),this.trans.ring(n.pos,4255999,.15,1.6,.3)),Math.random()<.7&&this.particles.emit(ft.copy(n.pos).setY(n.y+1.4),new b((Math.random()-.5)*3,Math.random()*1.5,(Math.random()-.5)*3),Math.random()<.5?Re.cyan:Re.mag,.15,.25),this.fovKick=-6,Math.random()<.6&&this.particles.emit(a,new b((Math.random()-.5)*2,Math.random()*2,(Math.random()-.5)*2),Re.mag,.2,.3),this.worldScale=.12;const c=this.input;c.locked&&(this.slingAimYaw=this.camYaw),c.down("KeyA","ArrowLeft")&&(this.slingAimYaw+=e*2.6),c.down("KeyD","ArrowRight")&&(this.slingAimYaw-=e*2.6),c.touchMove&&Math.abs(c.touchMove.x)>.2&&(this.slingAimYaw-=c.touchMove.x*e*2.6);const l=this.aimAssist(this.slingAimYaw,26,.3);if(t.dir.copy(Kn(l)),n.heading=l,this.slingLine.visible=!0,this.slingLine.position.set(n.pos.x,.05,n.pos.z),this.slingLine.rotation.y=l,this.slingLine.scale.set(3,1,1.35),this.slingLine.material.opacity=.75+Math.sin(this.time*20)*.2,t.t>.18&&(!c.down("KeyE","KeyL")||c.hit("Mouse0","Space","KeyJ"))||t.t>1.6){this.slingLine.visible=!1,this.slingLine.scale.set(1,1,1),t.phase="launch",t.t=0,J.sonicBoost(),J.slingshotLaunch();{const d=this.hud["fx-vignette"];d.style.boxShadow="inset 0 0 220px 70px rgba(64,240,255,0.75), inset 0 0 90px 20px rgba(255,31,207,0.9)",d.style.opacity="1",setTimeout(()=>{d.style.opacity="0",setTimeout(()=>{d.style.boxShadow=""},300)},260)}{const d=this.hud["fx-flash"];d.style.background="#bff8ff",d.style.opacity="0.55",setTimeout(()=>{d.style.opacity="0",setTimeout(()=>{d.style.background=""},250)},70)}this.banner("SONIC BOOST ×200","VIXEN SCREAMS — KAILEE GOES SUPERSONIC",.9),this.trans.flash(oe.copy(n.pos).addScaledVector(t.dir,.8).setY(n.y+1.3),16728288,.2,1.1,.2),this.trans.ring(n.pos,16719823,.5,4.5,.5),this.shake(.7);const u=oe.copy(n.pos).addScaledVector(t.dir,.7).setY(n.y+1.3);this.trans.vring(u,t.dir,16719823,.3,2,.35),this.trans.vring(u.clone().addScaledVector(t.dir,2.5),t.dir,16777215,.2,1.4,.3),this.trans.cone(u,Math.atan2(t.dir.x,t.dir.z),6,.22,16728288,.3),this.trans.cone(u,Math.atan2(t.dir.x,t.dir.z),12,.42,4255999,.45);for(let d=1;d<=6;d++)this.trans.vring(u.clone().addScaledVector(t.dir,d*2.2),t.dir,d%2?4255999:16719823,.25,1.2+d*.7,.25+d*.06);this.trans.ring(n.pos,4255999,.4,7,.6),this.trans.ring(n.pos,16777215,.2,3.5,.35),this.particles.burst(u,40,Re.cyan,14,.2,.4,0,.6),this.dmg.spawn(ft.copy(n.pos).setY(3.2),"SONIC BOOST ×200","big"),this.shake(1),this.worldScale=1,this.fovKick=22,n.anim.has("Slingshot_Release")&&n.anim.once("Slingshot_Release",.6),i.anim.has("Check_R")&&i.anim.once("Check_R",.8),i.vel.copy(t.dir).multiplyScalar(Vt.SLING_BOOST_SPEED),this.hitstop=.09,i.punchL=1.5,i.punchR=1.5,n.punchL=1.2,n.punchR=1.2}return}if(t.phase==="launch"){this.beam.hide();const s=Vt.SLING_BOOST_SPEED*e,o=Math.max(1,Math.ceil(s/.5)),a=s/o;let c=!1;for(let l=0;l<o&&!c&&(i.pos.addScaledVector(t.dir,a),t.dist+=a,c=this.world.colliders.some(h=>h.active&&i.pos.x>h.minX-.4&&i.pos.x<h.maxX+.4&&i.pos.z>h.minZ-.4&&i.pos.z<h.maxZ+.4&&h.h>1),!(t.dist>Vt.SLING_RANGE));l++)for(const h of this.enemies){if(h.state==="dead"||t.hit.has(h))continue;if(Math.hypot(h.pos.x-i.pos.x,h.pos.z-i.pos.z)<3.4+h.radius){t.hit.add(h);const d=oe.set(h.pos.x-i.pos.x,0,h.pos.z-i.pos.z).normalize().multiplyScalar(.5).add(t.dir).normalize();this.hurt(h,h.def.kind==="falcon"?270:175,d,40,{source:"sling",stagger:1.8,up:9,heavy:!0,color:4255999}),this.shake(.45),t.firstHit||(t.firstHit=!0,this.hitstop=.16,J.impact(),this.dmg.spawn(oe.copy(h.pos).setY(h.y+3),"SUPERSONIC SMACK!","big"),this.trans.ring(h.pos,4255999,.5,7,.55),this.trans.ring(h.pos,16719823,.3,5,.45),this.trans.ring(h.pos,16777215,.2,3,.3),this.trans.flash(oe.copy(h.pos).setY(1.2),8452351,.4,3.5,.25),this.particles.burst(oe.copy(h.pos).setY(1.2),36,Re.cyan,12,.22,.45,-6,.8))}}i.y=.9+Math.sin(Math.min(1,t.dist/Vt.SLING_RANGE)*Math.PI)*.8,i.heading=Math.atan2(t.dir.x,t.dir.z),i.cm.pivot.rotation.x=1.15;for(let l=0;l<12;l++)this.particles.emit(oe.copy(i.pos).addScaledVector(t.dir,-Math.random()*3).setY(i.y+.6+Math.random()*.9),ut.set((Math.random()-.5)*3,Math.random()*2,(Math.random()-.5)*3).addScaledVector(t.dir,-10),[Re.org,Re.mag,Re.cyan][l%3],.4,.5,1);if(Math.random()<.5&&this.trans.vring(oe.copy(i.pos).setY(i.y+1),t.dir,Math.random()<.5?4255999:16719823,.15,1.6,.2),i.pos.x>Fe-.6&&(i.pos.x=Fe-.6),i.pos.x<Ge+.6&&(i.pos.x=Ge+.6),t.dist>Vt.SLING_RANGE||c){c&&i.pos.addScaledVector(t.dir,-.8),t.phase="land",t.t=0,i.y=0,i.vel.copy(t.dir).multiplyScalar(5),J.impact(),this.shake(.5),this.trans.ring(i.pos,16747051,.5,6.5,.55),this.trans.ring(i.pos,4255999,.4,5.5,.5),this.trans.ring(i.pos,16719823,.3,4,.4),this.particles.burst(oe.copy(i.pos).setY(.3),30,Re.org,9,.25,.5,-8,.8),this.trans.flash(oe.copy(i.pos).setY(.8),16747051,.4,3.5,.3);for(const l of this.enemies){if(l.state==="dead")continue;const h=l.pos.x-i.pos.x,u=l.pos.z-i.pos.z;Math.hypot(h,u)<4.5&&this.hurt(l,35,oe.set(h,0,u).normalize(),14,{source:"sling",stagger:1,up:5,heavy:!0})}}return}t.phase==="land"&&(i.cm.pivot.rotation.x*=.85,i.vel.multiplyScalar(.9),i.pos.addScaledVector(i.vel,e),this.fovKick*=.9,t.t>.45&&(t.phase="none",i.cm.pivot.rotation.x=0,this.fovKick=0))}updateAlly(e,t){const n=e.a,i=this.vixen;if(n.hazardCd=Math.max(0,n.hazardCd-t),e.downed){e.downT-=t,n.vel.multiplyScalar(.9),n.integrate(t,this.world.colliders),n.cm.pivot.rotation.x+=(-1.35-n.cm.pivot.rotation.x)*Math.min(1,t*6),n.cm.pivot.position.y=.25,e.downT<=0&&(e.downed=!1,n.hp=n.maxHp*.3,J.kaileeUp(),n.cm.pivot.rotation.x=0,n.cm.pivot.position.y=0,n.anim.has("Knockdown_Recover")&&n.anim.once("Knockdown_Recover",.9),this.trans.ring(n.pos,e.col,.3,3,.5),this.dmg.spawn(oe.copy(n.pos).setY(2),e.name+" BACK UP","heal"),e.recoverT=e.key==="payton"?2.2:.8,e.key==="payton"&&(this.comsLine("PAYTON","I'm up girls… I'm up."),this.comsLine("PAYTON","Mom — what's your 6?")));return}if(e.recoverT>0){e.recoverT-=t,n.integrate(t,this.world.colliders);return}if(this.pinnedBy(n)){n.vel.set(0,0,0),n.anim.setBase("Idle_Skate",1);return}if(e.atkCd=Math.max(0,e.atkCd-t),e.shootCd=Math.max(0,e.shootCd-t),e.sigCd=Math.max(0,e.sigCd-t),e.sigT>0&&(!e.target||e.target.state==="dead")&&(e.sigT=Math.max(0,e.sigT-t)),this.time-e.lastDmg>5&&n.hp<n.maxHp&&(n.hp=Math.min(n.maxHp,n.hp+4*t)),e.retarget-=t,e.retarget<=0||e.target&&e.target.state==="dead"){e.retarget=.45,e.target=null;let _=15;for(const m of this.enemies){if(m.state==="dead"||m.state==="spawn")continue;const p=m.pos.distanceTo(i.pos),v=m.pos.distanceTo(n.pos),y=Math.min(p,v*.9);p<16&&y<_&&(_=y,e.target=m)}}const s=oe;let o=e.role==="melee"?11:9.5;const a=e.target;let c=99;const l=e.role==="melee"?1.5:7;if(a){c=Math.hypot(a.pos.x-n.pos.x,a.pos.z-n.pos.z);const _=(a.pos.x-n.pos.x)/Math.max(c,.1),m=(a.pos.z-n.pos.z)/Math.max(c,.1);s.set(a.pos.x-_*l-m*e.side*.3,0,a.pos.z-m*l+_*e.side*.3)}else{const _=i.forward(ut);s.set(i.pos.x-_.x*e.back+_.z*e.side,0,i.pos.z-_.z*e.back-_.x*e.side),s.x>Fe-1.5&&(s.x=Fe-1.5),o=Math.max(6,i.speed+2)}const h=s.x-n.pos.x,u=s.z-n.pos.z,d=Math.hypot(h,u),f=Math.min(o,d*2.6);n.vel.x+=((d>.05?h/d*f:0)-n.vel.x)*Math.min(1,t*5),n.vel.z+=((d>.05?u/d*f:0)-n.vel.z)*Math.min(1,t*5),n.pos.x>Fe-1.2&&n.vel.x>0&&(n.vel.x-=30*t);const g=a&&c<14?Math.atan2(a.pos.x-n.pos.x,a.pos.z-n.pos.z):n.speed>.8?Math.atan2(n.vel.x,n.vel.z):n.heading;if(n.heading=Ws(n.heading,g,Math.min(1,t*10)),a&&a.state!=="dead"&&a.state!=="spawn"){const _=ut.set(a.pos.x-n.pos.x,0,a.pos.z-n.pos.z).normalize();if(e.sigT>0)this.updateAllySig(e,a,_,t);else if(e.sigCd<=0&&(e.role==="melee"?c<4.5:c<15))this.startAllySig(e);else if(e.role==="melee"&&c<2.4&&e.atkCd<=0){e.atkCd=.6,e.swing++;const m=e.swing%3===0;n.anim.once(m?"Attack_Elbow":e.swing%2?"Attack_Kick_L":"Attack_Kick_R",.4),e.swing%2?n.punchL=1:n.punchR=1,J.blade(),this.hurt(a,m?16:9,_.clone(),m?10:4,{source:"brianna",stagger:m?.9:.3,heavy:m,color:e.col});const p=ft.copy(n.pos).addScaledVector(_,.8).setY(1.2);this.particles.burst(p,m?14:7,new _e(e.col),m?5:3,.2,.3)}else if(e.role==="ranged"&&c<15&&e.shootCd<=0){e.shootCd=.7+Math.random()*.2;const m=ft.copy(n.pos).setY(1.1).addScaledVector(_,.5);for(let p=0;p<4;p++){const v=_.clone().applyAxisAngle(xa,(Math.random()-.5)*.1);this.proj.fire("pistol",m,v,55,3,"hero","payton")}J.pistol(),setTimeout(()=>J.pistol(),60),this.gatlingSpin=.5,this.particles.emit(m.clone().addScaledVector(_,.6),_.clone().multiplyScalar(2),new _e(e.col),.3,.08)}else if(e.role==="melee"&&c>=2.4&&c<10&&e.shootCd<=0){e.shootCd=1.3;const m=ft.copy(n.pos).setY(1.3);this.proj.fire("pistol",m,_,40,4,"hero","brianna")}}if(e.key==="brianna"&&a&&a.state!=="dead"&&(this.seekerCd-=t,this.seekerCd<=0&&c<16)){this.seekerCd=3.2+Math.random();const _=ft.copy(n.pos).setY(1.6),m=new b(a.pos.x-_.x,0,a.pos.z-_.z).normalize();this.proj.fire("bolt",_,m,30,14,"hero","brianna"),J.bolt(),this.particles.burst(_,8,Re.red,3,.15,.2,0,0),this.dmg.spawn(oe.copy(n.pos).setY(2.3),"BB SEEKER","k")}if(e.key==="payton"&&this.gatling){this.gatlingSpin=Math.max(0,this.gatlingSpin-t);const _=this.gatling.getObjectByName("barrels");_&&(_.rotation.z+=t*(e.sigT>0||this.gatlingSpin>0?40:1.5))}Math.random()<.2&&this.particles.emit(ft.copy(n.pos).setY(.1),ut.set(0,.6,0),new _e(e.col),.12,.25),n.pos.distanceTo(i.pos)>30&&(n.pos.copy(i.pos).add(oe.set(e.side,0,-e.back)),this.trans.ring(n.pos,e.col,.2,2,.4)),n.integrate(t,this.world.colliders),n.overWater&&n.y<.2&&this.fallInWater(n),n.anim.busy||n.anim.setBase(n.speed>1.2?"Locomotion_Fwd":"Idle_Skate",.7+n.speed/14)}startAllySig(e){const t=Vt.SIG[e.key];e.sigT=t.dur,e.sigShot=0,e.sigCd=t.cd+Math.random()*t.jitter;const n=e.a;e.key==="brianna"&&(e.swing++,e.chest=!e.chest),e.key==="brianna"&&e.chest?(this.banner("CHEST-BUSTER","BRIANNA · THERMAL CORE BLAST",1),J.cone(),this.shake(.3)):e.key==="brianna"?(this.banner("THERMAL COIL LASH","BRIANNA · BURN ZONE",1),n.anim.has("Attack_Punch_R")&&n.anim.once("Attack_Punch_R",.5),n.punchR=1,J.blade(),J.zap(),this.shake(.2),this.trans.ring(n.pos,e.col,.4,3.6,.45),this.trans.ring(n.pos,4063130,.2,3,1.6,.5)):(this.banner("HUNDRED COUNT","PAYTON · GATLING SPIN-UP",1),J.tether())}updateAllySig(e,t,n,i){const s=e.a,o=new _e(e.col);if(n=n.clone(),e.sigT-=i,e.key==="brianna"&&e.chest){s.vel.multiplyScalar(.8);const a=ft.copy(s.pos).setY(1.3);for(let c=0;c<6;c++)this.particles.emit(a,n.clone().applyAxisAngle(xa,(Math.random()-.5)*.5).multiplyScalar(10+Math.random()*6),c%2?Re.org:Vh,.3,.35,0,1);if(e.sigShot+=i,e.sigShot>=.25){e.sigShot=0;for(const c of this.enemies){if(c.state==="dead"||c.state==="spawn")continue;const l=c.pos.x-s.pos.x,h=c.pos.z-s.pos.z,u=Math.hypot(l,h);u<8&&(l*n.x+h*n.z)/Math.max(u,.1)>.8&&this.hurt(c,9,ut.set(l,0,h).normalize().clone(),6,{source:"brianna",stagger:.5,color:16747051})}}}else if(e.key==="brianna"){for(let a=0;a<4;a++){const c=Math.random()*Math.PI*2,l=Math.random()*3;this.particles.emit(ft.set(s.pos.x+Math.cos(c)*l,.15,s.pos.z+Math.sin(c)*l),oe.set(0,1.5+Math.random(),0),a%2?o:Vh,.22,.45,1)}if(e.sigShot+=i,e.sigShot>=.3){e.sigShot=0;for(const a of this.enemies)if(!(a.state==="dead"||a.state==="spawn")&&Math.hypot(a.pos.x-s.pos.x,a.pos.z-s.pos.z)<3.2){const c=ut.set(a.pos.x-s.pos.x,0,a.pos.z-s.pos.z).normalize();this.hurt(a,5,c.clone(),2,{source:"brianna",stagger:.25,color:e.col})}this.trans.ring(s.pos,e.col,2.6,3.3,.3,.6)}}else{const a=Vt.SIG.payton,c=a.dur-e.sigT;s.vel.multiplyScalar(.85);const l=ft.copy(s.pos).addScaledVector(n,.6).setY(1.2);if(c<a.spin)Math.random()<.5&&this.particles.emit(l,oe.set(Math.random()-.5,Math.random(),Math.random()-.5),o,.15,.15),Math.random()<.15&&J.telegraph();else for(e.sigShot-=i;e.sigShot<=0&&t;){e.sigShot+=a.rate;const h=n.clone().applyAxisAngle(xa,(Math.random()-.5)*.12);this.proj.fire("pistol",l,h.clone(),60,2.5,"hero","payton"),this.particles.emit(l,h.clone().multiplyScalar(3),Math.random()<.5?o:Re.white,.3,.05),Math.random()<.5&&J.pistol()}}e.sigT<=0&&(e.sigT=0)}updateKailee(e){const t=this.kailee,n=this.vixen,i=this.k;if(t.hazardCd=Math.max(0,t.hazardCd-e),i.downed){i.downT-=e,t.vel.multiplyScalar(.9),t.integrate(e,this.world.colliders),t.cm.pivot.rotation.x+=(-1.35-t.cm.pivot.rotation.x)*Math.min(1,e*6),t.cm.pivot.position.y=.25,Math.random()<.15&&this.particles.emit(oe.copy(t.pos).setY(.4),ut.set(0,1.2,0),Re.org,.2,.6),i.downT<=0&&(i.downed=!1,t.hp=t.maxHp*.25,J.kaileeUp(),t.cm.pivot.rotation.x=0,t.cm.pivot.position.y=0,t.anim.has("Knockdown_Recover")&&t.anim.once("Knockdown_Recover",.9),this.trans.ring(t.pos,16747051,.3,3,.5),this.dmg.spawn(oe.copy(t.pos).setY(2),"KAILEE BACK UP","heal"),i.recoverT=.8);return}if(i.recoverT>0){i.recoverT-=e,t.integrate(e,this.world.colliders);return}if(this.pinnedBy(t)){t.vel.set(0,0,0),t.anim.setBase("Idle_Skate",1);return}if(i.atkCd=Math.max(0,i.atkCd-e),i.slideCd=Math.max(0,i.slideCd-e),i.slideT>0){this.updateSlideUnder(e);return}if(i.shootCd=Math.max(0,i.shootCd-e),this.time-i.lastDmg>5&&t.hp<t.maxHp&&(t.hp=Math.min(t.maxHp,t.hp+4*e)),i.retarget-=e,i.retarget<=0||i.target&&i.target.state==="dead"){i.retarget=.4,i.target=null;let m=15;for(const p of this.enemies){if(p.state==="dead"||p.state==="spawn")continue;const v=p.pos.distanceTo(n.pos),y=p.pos.distanceTo(t.pos),x=Math.min(v,y*.9);v<16&&x<m&&(m=x,i.target=p)}}const s=oe;let o=10.5;const a=i.target;let c=99;if(a){c=Math.hypot(a.pos.x-t.pos.x,a.pos.z-t.pos.z);const m=(Math.sin(this.time*.7)>0?1:-1)*.8;s.set(a.pos.x-(a.pos.x-t.pos.x)/Math.max(c,.1)*1.5+m*.2,0,a.pos.z-(a.pos.z-t.pos.z)/Math.max(c,.1)*1.5)}else{const m=n.forward(ut);s.set(n.pos.x-m.x*2.4+m.z*2,0,n.pos.z-m.z*2.4-m.x*2),s.x>Fe-1.5&&(s.x=n.pos.x-m.z*2),o=Math.max(6,n.speed+2)}const l=s.x-t.pos.x,h=s.z-t.pos.z,u=Math.hypot(l,h),d=Math.min(o,u*2.6),f=u>.05?l/u*d:0,g=u>.05?h/u*d:0;t.vel.x+=(f-t.vel.x)*Math.min(1,e*5),t.vel.z+=(g-t.vel.z)*Math.min(1,e*5),t.pos.x>Fe-1.2&&t.vel.x>0&&(t.vel.x-=30*e);const _=a&&c<13?Math.atan2(a.pos.x-t.pos.x,a.pos.z-t.pos.z):t.speed>.8?Math.atan2(t.vel.x,t.vel.z):t.heading;if(t.heading=Ws(t.heading,_,Math.min(1,e*10)),a&&a.state!=="dead"){if(c<2.4&&i.atkCd<=0&&i.slideCd<=0&&a.state!=="spawn")this.startSlideUnder(a,c);else if(c<2.4&&i.atkCd<=0){i.atkCd=.55,i.swing=1-i.swing,t.anim.once(i.swing?"Check_L":"Check_R",.4),i.swing?t.punchL=1:t.punchR=1,J.blade();const m=ut.set(a.pos.x-t.pos.x,0,a.pos.z-t.pos.z).normalize();this.hurt(a,8,m.clone(),4,{source:"kailee",stagger:.3,color:16752704});const p=ft.copy(t.pos).addScaledVector(m,.8).setY(1.2);for(let v=0;v<10;v++)this.particles.emit(p,new b((Math.random()-.5)*3,Math.random()*3,(Math.random()-.5)*3),v%3?Re.org:Re.yel,.22,.35,2,2)}else if(c>=2.4&&c<13&&i.shootCd<=0){i.shootCd=.6+Math.random()*.2;const m=ft.copy(t.pos).setY(1.3),p=ut.set(a.pos.x-t.pos.x,0,a.pos.z-t.pos.z).normalize();this.kaileeMuzzle.getWorldPosition(m),this.proj.fire("pistol",m,p,45,5,"hero","kailee"),J.pistol(),this.time>this.kLabelT&&(this.kLabelT=this.time+5,this.dmg.spawn(oe.copy(t.pos).setY(2.3),"KAILEE .40","k")),this.particles.burst(m,6,Re.yel,3,.16,.08,0,0),this.particles.emit(m,p.clone().multiplyScalar(2),Re.white,.35,.06)}}if(Math.random()<.35){const m=t.cm.bones.hand_r||t.cm.bones.hand_l;m&&(m.getWorldPosition(ft),this.particles.emit(ft,ut.set((Math.random()-.5)*.4,1.5,(Math.random()-.5)*.4),Math.random()<.5?Re.org:Re.yel,.14,.3,1))}t.pos.distanceTo(n.pos)>30&&(t.pos.copy(n.pos).add(oe.set(-1.5,0,-2)),this.trans.ring(t.pos,16747051,.2,2,.4)),t.integrate(e,this.world.colliders),t.overWater&&t.y<.2&&this.fallInWater(t),t.anim.busy||t.anim.setBase(t.speed>1.2?"Locomotion_Fwd":"Idle_Skate",.7+t.speed/14)}startSlideUnder(e,t){const n=this.k,i=this.kailee,s=Vt.SLIDE;n.slideT=s.dur,n.slideHits=0,n.slideTgt=e,n.slideCd=s.cooldown+Math.random()*s.cdJitter,n.atkCd=.8,n.slideDir.set(e.pos.x-i.pos.x,0,e.pos.z-i.pos.z).normalize(),i.heading=Math.atan2(n.slideDir.x,n.slideDir.z),J.blade(),this.trans.ring(i.pos,2784255,.25,2.5,.35)}updateSlideUnder(e){const t=this.k,n=this.kailee,i=t.slideTgt,s=Vt.SLIDE;t.slideT-=e;const o=s.dur-t.slideT,c=o<.42?s.speed:s.speed*.25;n.vel.set(t.slideDir.x*c,n.vel.y,t.slideDir.z*c);const l=Math.min(1,o/.08)*Math.min(1,Math.max(0,t.slideT)/.15);n.cm.pivot.position.y=-.55*l,n.cm.pivot.rotation.x=-.7*l;for(let u=0;u<3;u++)this.particles.emit(ft.copy(n.pos).setY(.35+Math.random()*.4),ut.set((Math.random()-.5)*1.5,Math.random()*1.2,(Math.random()-.5)*1.5),u%2?Re.blu:Re.cyan,.2,.3,1);const h=t.slideHits===0?s.hitAt1:s.hitAt2;if(t.slideHits<2&&o>=h&&i&&i.state!=="dead"){const u=t.slideHits===0?s.hit1:s.hit2;t.slideHits++;const d=ut.copy(t.slideDir).setY(t.slideHits===2?.6:.2).normalize();this.hurt(i,u,d.clone(),7,{source:"kailee",stagger:.8,color:4892927});const f=ft.copy(i.pos).setY(.9);this.particles.burst(f,26,Re.cyan,7,.18,.45,-4,1.2),this.particles.burst(f,18,Re.blu,5,.25,.5,-4,1.2),this.particles.burst(f,6,Re.white,3,.3,.15,0,1),this.trans.ring(f,4892927,.3,3.2,.3),J.blade(),this.shake(.3),this.hitstop=.07,t.slideHits===1&&this.dmg.spawn(ft.copy(i.pos).setY(2.4),"SLIDE UNDER","heal"),t.slideHits===1&&this.banner("SLIDE UNDER","KAILEE · THERMAL BLADE SLICE",.9)}else t.slideHits<2&&(!i||i.state==="dead")&&(t.slideHits=2);n.integrate(e,this.world.colliders),t.slideT<=0&&(t.slideT=0,t.slideTgt=null,n.cm.pivot.position.y=0,n.cm.pivot.rotation.x=0)}pinnedBy(e){for(const t of this.enemies)if(t.state==="pin"&&t.pinTarget===e)return t;return null}startPinkPounce(e,t){const n=fi.pink_pounce;e.state="windup",e.stateT=n.windup,e.attackKind="pounce",e.target=t,e.pounceTo.set(t.pos.x,0,t.pos.z),e.finisherCd=n.cooldown+Math.random()*3,J.telegraph(),J.tether(),e.pos.distanceTo(this.vixen.pos)<22&&this.banner(e.fin??"PINK POUNCE",t===this.kailee?"FANG IS LEAPING AT KAILEE — DODGE / CHECK":"FANG IS LEAPING — HOP OR SKATE OUT",1.1)}ensurePounceFx(e){if(e.finisherFx)return e.finisherFx;const t=fi.pink_pounce.color,n=()=>new Le({color:t,transparent:!0,opacity:.8,blending:wt,depthWrite:!1,fog:!1,side:kt}),i=new tt,s=new X(new Di(1.4,1.52,48).rotateX(-Math.PI/2),n());s.name="ring",s.position.y=.05,i.add(s);const o=new X(new gi(1.15,40).rotateX(-Math.PI/2),n());o.name="disc",o.position.y=.04,o.visible=!1,i.add(o);const a=new tt;a.name="lane",i.add(a);const c=new Yu;c.moveTo(-.7,0),c.lineTo(0,.55),c.lineTo(.7,0),c.lineTo(.7,.28),c.lineTo(0,.83),c.lineTo(-.7,.28),c.closePath();const l=new Vc(c).rotateX(-Math.PI/2);for(let u=0;u<6;u++){const d=new X(l,n());d.name="chev"+u,d.position.y=.06,a.add(d)}const h=new X(new on(.35,10,8),n());return h.name="eye",i.add(h),this.scene.add(i),e.finisherFx=i,i}pounceWindupFx(e,t,n){const i=fi.pink_pounce;e.stateT>i.windup*.4&&e.pounceTo.lerp(oe.set(t.pos.x,0,t.pos.z),Math.min(1,n*3));const s=this.ensurePounceFx(e);s.visible=!0;const o=1-Math.max(0,e.stateT)/i.windup,a=Math.sin(this.time*34)>0;s.position.set(e.pounceTo.x,0,e.pounceTo.z);const c=s.getObjectByName("ring"),l=s.getObjectByName("disc");c.scale.setScalar(1.6-o*.6),c.material.opacity=.55+(a?.4:.15),l.material.opacity=.12+o*.38;const h=s.getObjectByName("lane");h.visible=!0;const u=e.pos.x-e.pounceTo.x,d=e.pos.z-e.pounceTo.z,f=Math.hypot(u,d)||1;h.rotation.y=Math.atan2(u,d),h.children.forEach((_,m)=>{const p=(m/6+this.time*1.4)%1;_.position.set(0,.06,f-p*Math.max(0,f-1.3)),_.material.opacity=(.35+.6*Math.sin(p*Math.PI))*(.6+o*.4)});const g=s.getObjectByName("eye");g.position.set(e.pos.x-s.position.x,1.6,e.pos.z-s.position.z),g.scale.setScalar(a?1.4:.6),e.squash=Math.max(e.squash,.55*o+.2),e.cm.pivot.position.y=-.12*o,a&&e.flash(i.color,.04)}beginPin(e,t){const n=fi.pink_pounce;e.state="pin",e.stateT=n.pinTime,e.pinTarget=t,e.pinTickT=.12,e.y=0,e.vy=0,e.grounded=!0,e.cm.pivot.position.y=0,t.vel.set(0,0,0),t===this.vixen&&(this.p.fwdSpeed=0),this.shake(.35),J.impact(),this.trans.ring(t.pos,n.color,.4,3.5,.45),this.banner("PINNED!",t===this.vixen?"PRESS F — KAILEE CHECKS FANG OFF":"SHOOT (J) NEAR FANG — CHECK HER OFF KAILEE",1.4)}pinFx(e,t){const n=this.ensurePounceFx(e);n.visible=!0,n.position.set(t.pos.x,0,t.pos.z),n.getObjectByName("lane").visible=!1;const i=n.getObjectByName("ring");i.scale.setScalar(.75+Math.sin(this.time*18)*.05),i.material.opacity=.9,n.getObjectByName("disc").scale.setScalar(.75),n.getObjectByName("disc").material.opacity=.35;const s=n.getObjectByName("eye");s.position.set(0,1.2,0),s.scale.setScalar(1)}hidePounceFx(e){e.finisherFx&&(e.finisherFx.visible=!1),e.cm.pivot.position.y=0,e.state!=="pin"&&(e.pinTarget=null)}endPin(e,t){const n=e.pinTarget;if(e.pinTarget=null,this.hidePounceFx(e),!t&&(e.state="recover",e.stateT=.9,n)){const i=oe.set(e.pos.x-n.pos.x,0,e.pos.z-n.pos.z).normalize();e.vel.copy(i).multiplyScalar(6)}}partnerCheck(e){const t=e.pinTarget;if(!t)return;const n=t===this.vixen?this.kailee:this.vixen;if(n===this.kailee&&this.k.downed)return;if(n.pos.distanceTo(e.pos)>10){this.dmg.spawn(oe.copy(n.pos).setY(2),"TOO FAR","k");return}if(n===this.kailee){const s=ut.set(e.pos.x-n.pos.x,0,e.pos.z-n.pos.z).normalize();n.pos.copy(e.pos).addScaledVector(s,-1),n.heading=Math.atan2(s.x,s.z),n.anim.has("Check_R")&&n.anim.once("Check_R",.4)}this.endPin(e,!0);const i=ft.set(e.pos.x-t.pos.x,0,e.pos.z-t.pos.z).normalize();this.hurt(e,12,i,12,{source:n===this.kailee?"kailee":"vixen",stagger:1.2,up:3,heavy:!0,color:16752704}),this.banner("CHECK!","PIN BROKEN",.9),J.punch(!0)}pickTarget(e){const t=this.vixen,n=this.kailee,i=this.allies.filter(a=>!a.downed);if(i.length&&Math.random()<.3){let a=i[0];for(const c of i)c.a.pos.distanceTo(e.pos)<a.a.pos.distanceTo(e.pos)&&(a=c);if(a.a.pos.distanceTo(e.pos)<14)return a.a}if(this.k.downed||this.sling.phase!=="none")return t;const s=e.pos.distanceTo(n.pos),o=e.pos.distanceTo(t.pos);return e.def.kind==="falcon"?Math.random()<.7?t:n:s<12&&Math.random()<.55||s<o*.8?n:t}makeTelegraph(e,t,n){if(!e.telegraph){const i=new It(n,t).rotateX(-Math.PI/2).translate(0,.03,t/2);e.telegraph=new X(i,new Le({color:16719936,transparent:!0,opacity:.6,blending:wt,depthWrite:!1,fog:!1})),this.scene.add(e.telegraph)}return e.telegraph.visible=!0,e.telegraph}updateEnemy(e,t){if(e.hazardCd=Math.max(0,e.hazardCd-t),e.state==="dead"){e.deadT+=t,e.vel.multiplyScalar(.95),e.integrate(t,this.world.colliders);const _=Math.max(.01,1-Math.max(0,e.deadT-.6)*1.6);e.cm.root.scale.setScalar(_),e.cm.pivot.rotation.x=Math.min(1.4,e.deadT*4);return}e.stateT-=t,e.cd-=t,e.retargetT-=t,(!e.target||e.retargetT<=0||e.target===this.kailee&&this.k.downed||this.allyOf(e.target)?.downed)&&(e.target=this.pickTarget(e),e.retargetT=1.5+Math.random());const n=e.target,i=n.pos.x-e.pos.x,s=n.pos.z-e.pos.z,o=Math.hypot(i,s),a=Math.atan2(i,s),c=e.def;let l=0,h=0,u=4,d=a,f=this.level===1?.75:1;if(this.level===1&&n===this.vixen)for(const _ of qt){const m=_.z0+(_.z1-_.z0)*.62;n.pos.z>m+1.2&&n.pos.z<m+14&&e.pos.z<m-1.2&&Math.abs(n.pos.x-e.pos.x)<9&&(f=.3,e.retargetT>.6&&(e.retargetT=.6),e.cd=Math.max(e.cd,.5))}const g=(_,m,p)=>{const v=p*f,y=_-e.pos.x,x=m-e.pos.z,I=Math.hypot(y,x)||1;l=y/I*Math.min(v,I*3),h=x/I*Math.min(v,I*3)};switch(e.state){case"spawn":e.stateT<=0&&(e.state="chase");break;case"stagger":u=1.2,d=e.heading,e.stateT<=0&&(e.state="chase",e.cd=Math.max(e.cd,.4));break;case"chase":{if(c.kind==="viper"){const _=e.cd>0?3.2:1.2;e.orbit+=t*.9,g(n.pos.x+Math.sin(e.orbit)*_,n.pos.z+Math.cos(e.orbit)*_,c.speed);const m=fi.pink_pounce;e.finisherCd-=t,e.cd<=0&&e.finisherCd<=0&&o>m.minRange&&o<m.maxRange&&n.y<.5&&!this.pinnedBy(n)&&!this.enemies.some(p=>p!==e&&p.attackKind==="pounce"&&(p.state==="windup"||p.state==="pounce"||p.state==="pin"))?this.startPinkPounce(e,n):o<2.1&&e.cd<=0&&(e.state="windup",e.stateT=.6,e.attackKind="melee",J.telegraph())}else if(c.kind==="enforcer"){const m=e.id%2?1:-1,p=i/(o||1),v=s/(o||1),y=o>10?1:o<6?-1:0;l=(p*y+-v*m*.5)*c.speed,h=(v*y+p*m*.5)*c.speed,e.cd<=0&&(o<3.2?(e.state="windup",e.stateT=.95,e.attackKind="slam",J.telegraph(),this.trans.ring(e.pos,16719936,.9,3.6,.15),this.dmg.spawn(oe.copy(e.pos).setY(3.4),"QUAY CRUSHER!","big")):o<17&&(e.state="windup",e.stateT=.8,e.attackKind="shoot"))}else{g(n.pos.x,n.pos.z,c.speed);const _=e.hp/e.maxHp;_<.66&&e.summoned===0||_<.33&&e.summoned===1?(e.summoned++,e.state="windup",e.stateT=.9,e.attackKind="summon",this.trans.ring(e.pos,16719936,.5,8,.8),J.scream()):e.cd<=0&&o>5&&o<18&&Math.random()<.5?(e.state="windup",e.stateT=1.05,e.attackKind="dash",e.dashDir.set(i,0,s).normalize(),J.telegraph(),this.dmg.spawn(oe.copy(e.pos).setY(3.8),"FALCON DIVE!","big"),this.trans.ring(e.pos,16719936,1,5,.2)):e.cd<=0&&o<2.8?(e.state="windup",e.stateT=.6,e.attackKind="melee",J.telegraph()):e.cd<=0&&(e.cd=.3)}break}case"windup":{if(u=6,Math.sin(this.time*40)>0,e.flash(e.attackKind==="shoot"?16719936:16728224,.05),e.attackKind==="dash"){d=Math.atan2(e.dashDir.x,e.dashDir.z),e.dashDir.lerp(oe.set(i,0,s).normalize(),t*2).normalize();const _=this.makeTelegraph(e,16,1.6);_.position.set(e.pos.x,0,e.pos.z),_.rotation.y=d,_.material.opacity=.2+(Math.sin(this.time*30)>0?.25:0)}if(e.attackKind==="pounce"&&(d=Math.atan2(e.pounceTo.x-e.pos.x,e.pounceTo.z-e.pos.z),u=8,this.pounceWindupFx(e,n,t)),e.attackKind==="shoot"&&Math.random()<.5){const _=e.cm.bones.hand_r;_&&(_.getWorldPosition(ft),this.particles.emit(ft,ut.set(0,.5,0),Re.red,.25,.2))}e.stateT<=0&&this.enemyAttack(e,n,o,a);break}case"attack":u=1.5,d=e.heading,e.stateT<=0&&(e.state="recover",e.stateT=c.kind==="enforcer"?.6:.5);break;case"dash":{u=0,d=e.heading,e.vel.copy(e.dashDir).multiplyScalar(30);for(const _ of this.heroes())e.dashHit.has(_)||Math.hypot(_.pos.x-e.pos.x,_.pos.z-e.pos.z)<1.6&&_.y<1&&(e.dashHit.add(_),this.hurt(_,20,e.dashDir,14,{source:"enemy"}));this.particles.emit(oe.copy(e.pos).setY(1),ut.set(0,1,0),Re.red,.4,.3),(e.stateT<=0||e.pos.x>Fe-1)&&(e.state="recover",e.stateT=.9,e.vel.multiplyScalar(.2));break}case"pounce":{u=0,d=e.heading;for(const _ of this.heroes())if(!(_===this.kailee&&(this.k.downed||this.sling.phase!=="none"))&&!(_===this.vixen&&this.p.invuln>.2)&&Math.hypot(_.pos.x-e.pos.x,_.pos.z-e.pos.z)<1.35&&_.y<.8){this.beginPin(e,_);break}e.state==="pounce"&&e.stateT<=0&&(e.state="recover",e.stateT=1.1,e.vel.multiplyScalar(.2),this.hidePounceFx(e),this.dmg.spawn(oe.copy(e.pos).setY(2),"DODGED","heal"));break}case"pin":{u=0,l=0,h=0;const _=e.pinTarget;if(!_||!_.alive||_===this.kailee&&this.k.downed){this.endPin(e,!1);break}d=Math.atan2(_.pos.x-e.pos.x,_.pos.z-e.pos.z);const m=Math.atan2(e.pos.x-_.pos.x,e.pos.z-_.pos.z);if(e.pos.set(_.pos.x+Math.sin(m)*.75,0,_.pos.z+Math.cos(m)*.75),e.vel.set(0,0,0),e.y=0,e.pinTickT-=t,e.pinTickT<=0){const p=fi.pink_pounce;e.pinTickT=p.tick,Math.random()<.5?e.punchL=1:e.punchR=1,_===this.vixen&&(this.p.invuln=0),this.hurt(_,p.tickDmg,oe.set(0,0,0),0,{source:"enemy"}),J.blade(),this.particles.burst(oe.copy(_.pos).setY(1.1),6,Re.mag,4,.14,.25,-6)}this.pinFx(e,_),_===this.vixen&&this.input.hit("KeyF","KeyQ")?this.partnerCheck(e):_===this.vixen&&this.kailee.pos.distanceTo(e.pos)<7&&e.stateT<fi.pink_pounce.pinTime-.7&&this.partnerCheck(e),e.state==="pin"&&e.stateT<=0&&this.endPin(e,!1);break}case"recover":u=3,l=0,h=0,e.stateT<=0&&(e.state="chase",e.cd=c.kind==="viper"?1.2+Math.random()*1:c.kind==="enforcer"?2.2+Math.random():1+Math.random()*.8);break}if(e.state!=="stagger"&&e.state!=="dash"&&e.state!=="pounce"&&e.state!=="pin"&&e.pos.x>Fe-1.6&&l>-2&&(l=-4),e.state!=="dash"&&e.state!=="pounce"&&e.state!=="pin"&&(e.vel.x+=(l-e.vel.x)*Math.min(1,u*t),e.vel.z+=(h-e.vel.z)*Math.min(1,u*t)),e.state!=="stagger"&&(e.heading=Ws(e.heading,d,Math.min(1,t*8))),e.integrate(t,this.world.colliders),e.overWater&&e.y<.2){this.fallInWater(e);return}e.anim.busy||e.anim.setBase(e.speed>1.5?"Locomotion_Fwd":"Idle_Skate",.7+e.speed/12),(e.cm.procedural||c.kind==="falcon")&&(e.bob=Math.sin(this.time*6+e.id)*.05*Math.min(1,e.speed/4))}enemyAttack(e,t,n,i){const s=new b(Math.sin(i),0,Math.cos(i));switch(e.telegraph&&(e.telegraph.visible=!1),e.attackKind){case"pounce":{const o=fi.pink_pounce;e.state="pounce",e.stateT=o.leapTime;const a=e.pounceTo.x-e.pos.x,c=e.pounceTo.z-e.pos.z,l=Math.hypot(a,c)||1;e.heading=Math.atan2(a,c),e.vel.set(a/l,0,c/l).multiplyScalar(Math.min(26,(l+1.2)/o.leapTime)),e.vy=5.5,e.grounded=!1,e.y=.01,e.squash=0,e.anim.has("Check_L")&&e.anim.once("Check_L",.45),J.scream();return}case"melee":{e.state="attack",e.stateT=.3,e.heading=i,e.vel.copy(s).multiplyScalar(e.def.kind==="falcon"?10:8),e.anim.has("Check_L")&&e.anim.once(Math.random()<.5?"Check_L":"Check_R",.4),Math.random()<.5?e.punchL=1:e.punchR=1;const o=e.def.kind==="falcon"?3:2.3;for(const a of this.heroes()){const c=Math.hypot(a.pos.x-e.pos.x,a.pos.z-e.pos.z);c<o&&Math.abs(Xs(i,Math.atan2(a.pos.x-e.pos.x,a.pos.z-e.pos.z)))<1.1&&a.y<1.2&&(a===t||c<1.6)&&this.hurt(a,e.def.kind==="falcon"?14:8,s,e.def.kind==="falcon"?9:5,{source:"enemy"})}this.particles.burst(oe.copy(e.pos).addScaledVector(s,1).setY(1.1),5,Re.red,3,.12,.2,0,.3);break}case"shoot":{e.state="attack",e.stateT=.25;const o=oe.copy(t.pos).addScaledVector(t.vel,Math.min(.6,n/15)),a=ut.set(o.x-e.pos.x,0,o.z-e.pos.z).normalize(),c=e.cm.bones.hand_r,l=new b;c?c.getWorldPosition(l):l.copy(e.pos).setY(1.4),l.y=1.3,this.proj.fire("bolt",l,a,15,10,"enemy","enemy"),e.punchR=1,J.bolt();break}case"slam":{e.state="attack",e.stateT=.4,this.trans.ring(e.pos,16719936,.6,4.2,.5),this.trans.ring(e.pos,16777215,.3,2.4,.3),this.trans.flash(oe.copy(e.pos).setY(.6),16719936,.25,2.2,.35),this.particles.burst(oe.copy(e.pos).setY(.3),22,Gh,7,.25,.7,4,1),this.shake(.55),this.hitstop=Math.max(this.hitstop,.05),J.impact(),J.clang();for(const o of this.heroes())o.pos.distanceTo(e.pos)<3.4&&o.y<.8&&this.hurt(o,15,oe.set(o.pos.x-e.pos.x,0,o.pos.z-e.pos.z).normalize(),10,{source:"enemy"});break}case"dash":{e.state="dash",e.stateT=.55,e.dashHit.clear(),e.heading=Math.atan2(e.dashDir.x,e.dashDir.z),J.slingshotLaunch(),e.def.kind==="falcon"&&(this.shake(.45),this.particles.burst(oe.copy(e.pos).setY(.5),18,Gh,6,.2,.5,4,1));break}case"summon":{e.state="recover",e.stateT=.6;for(let o=0;o<3;o++){const a=o/3*Math.PI*2,c=new b(Ri.clamp(e.pos.x+Math.sin(a)*4,Ge+2,Fe-2.5),0,e.pos.z+Math.cos(a)*4);this.spawnEnemy("v",c)}this.banner("FALCON CALLS THE VIPERS","",1.4);break}}}separate(){const e=[this.vixen,...this.enemies.filter(t=>t.state!=="dead")];this.sling.phase==="none"&&!this.k.downed&&e.push(this.kailee);for(const t of this.allies)t.downed||e.push(t.a);for(let t=0;t<e.length;t++)for(let n=t+1;n<e.length;n++){const i=e[t],s=e[n],o=s.pos.x-i.pos.x,a=s.pos.z-i.pos.z,c=i.radius+s.radius,l=o*o+a*a;if(l<c*c&&l>1e-6){const h=Math.sqrt(l),u=(c-h)*.5,d=o/h,f=a/h;i.pos.x-=d*u,i.pos.z-=f*u,s.pos.x+=d*u,s.pos.z+=f*u}}}updateProjectiles(e){for(const t of this.proj.list){if(!t.active)continue;t.life-=e,t.pos.addScaledVector(t.vel,e),t.mesh.position.copy(t.pos),t.kind==="bolt"&&Math.random()<.5&&this.particles.emit(t.pos,oe.set(0,.3,0),Re.red,.25,.25);let n=t.life<=0;if(!n&&this.world.colliders.some(i=>i.active&&i.h>1.3&&t.pos.x>i.minX&&t.pos.x<i.maxX&&t.pos.z>i.minZ&&t.pos.z<i.maxZ)&&(n=!0),!n){const i=t.team==="enemy"?this.heroes():this.enemies.filter(s=>s.state!=="dead");for(const s of i)if(Math.hypot(s.pos.x-t.pos.x,s.pos.z-t.pos.z)<s.radius+.3&&Math.abs(s.y+1.2-t.pos.y)<1.2){const o=oe.copy(t.vel).setY(0).normalize();this.hurt(s,t.dmg,o,t.kind==="bolt"?6:1.5,{source:t.src,stagger:t.kind==="pistol"?.15:0}),n=!0;break}}n&&(t.active=!1,t.mesh.visible=!1,this.particles.burst(t.pos,5,t.kind==="bolt"?Re.red:Re.org,2.5,.1,.2,0,.3))}}updateHazards(e){const t=[this.vixen,...this.enemies.filter(a=>a.state!=="dead")];this.sling.phase==="none"&&!this.k.downed&&t.push(this.kailee);for(const a of this.allies)a.downed||t.push(a.a);const n=this.world.hook,i=n.load.position.x,s=n.load.position.y,o=n.load.position.z;for(const a of t)if(!(a.hazardCd>0)){if(this.level!==2&&Math.abs(a.pos.x-i)<1.7+a.radius&&Math.abs(a.pos.z-o)<1.1+a.radius&&s-.9<a.y+1.8){a.hazardCd=1;const c=oe.set(Math.sign(n.vx)||1,0,(a.pos.z-o)*.3).normalize();this.hurt(a,a===this.vixen?22:30,c,18,{source:"hazard",stagger:1,up:6,heavy:!0}),a.vy=Math.max(a.vy,5),a.grounded=!1,a.y=Math.max(a.y,.01),J.clang(),this.shake(.4),this.particles.burst(ut.copy(a.pos).setY(1.2),14,Re.yel,6,.15,.4);continue}if(a.y<.05){for(const c of this.world.puddles)if(c.on&&Math.hypot(a.pos.x-c.x,a.pos.z-c.z)<c.r-.1){a.hazardCd=.5,a.stunT=.4,this.hurt(a,a===this.vixen?7:10,oe.set(0,0,0),0,{source:"hazard",stagger:.4,color:8446207}),a.flash(8446207,.15),J.zap(),this.particles.burst(ut.copy(a.pos).setY(.8),10,Re.cyan,4,.12,.3,-2,1);break}}}}updatePickups(e){for(const t of this.pickups){if(!t.active)continue;t.t+=e;const n=t.pos.distanceTo(oe.copy(this.vixen.pos).setY(.8));if(n<3.5&&t.pos.lerp(oe,Math.min(1,e*8)),t.mesh.position.set(t.pos.x,t.pos.y+Math.sin(t.t*4)*.15,t.pos.z),t.mesh.rotation.y+=e*3,n<.9){t.active=!1,t.mesh.visible=!1,J.pickup();const i=Math.min(15,this.vixen.maxHp-this.vixen.hp);this.vixen.hp+=i,this.dmg.spawn(oe.copy(this.vixen.pos).setY(2.2),i>=1?"+"+Math.round(i):"MAX HP","heal")}t.t>20&&(t.active=!1,t.mesh.visible=!1)}}updateWaves(e){const t=qt[this.wave];if(this.introT>0){this.introT-=e;return}if(this.level===1){for(const n of this.world.healSpots)if(!(n.used||Math.hypot(this.vixen.pos.x-n.x,this.vixen.pos.z-n.z)>2.2)){this.world.useHeal(n),this.vixen.hp=Math.min(this.vixen.maxHp,this.vixen.hp+50),this.kailee.hp=this.kailee.maxHp;for(const i of this.allies)i.a.hp=i.a.maxHp;this.banner("MEDIC BOT","+50 HP · PATCH KIT — CREW PATCHED UP — BREATHE, THEN PUSH",1.6)}}if(!this.waveActive&&!this.waveCleared){const n=this.wave===0?-999:t.z0+3;if(this.vixen.pos.z>n){this.waveActive=!0,this.batch=0;const i=this.waves[this.wave];this.banner(i.title,i.sub,1.6),J.waveStart(),this.level===2?this.coms("COM_L2_"+this.wave):this.wave===1?this.coms("COM_KAM_02"):this.wave===2?this.coms("COM_LIL_02"):this.wave===3&&this.coms("COM_KAM_03"),this.setObjective(this.wave===3?this.level===2?"Cockpit Core: break the Hive nest":"Break Falcon and the Iron Rose escort":`Clear ${this.zoneName(this.wave)} — then the gate opens`)}return}if(this.waveActive){const n=this.waves[this.wave],i=this.enemies.filter(s=>s.state!=="dead").length;if(this.batch<n.batches.length){const s=n.batches[this.batch];if(s.when<0||i<=s.when&&(this.level===2||(this.breatheT+=e)>8)){this.breatheT=0,this.level===1&&this.batch>0&&this.banner("","REINFORCEMENTS — USE THE POCKET BEHIND THE CONTAINERS",1.4);const o=this.runId;s.list.forEach((a,c)=>setTimeout(()=>{o===this.runId&&this.waveActive&&this.state!=="title"&&this.spawnEnemy(a)},c*220)),this.batch++;return}}if(this.batch>=n.batches.length&&i===0&&this.enemies.length===0){this.waveActive=!1,this.waveCleared=!0,J.waveClear(),this.vixen.hp=Math.min(this.vixen.maxHp,this.vixen.hp+30),this.k.downed&&(this.k.downed=!1,this.k.downT=0,this.kailee.cm.pivot.rotation.x=0,this.kailee.cm.pivot.position.y=0),this.kailee.hp=this.kailee.maxHp;for(const s of this.allies)s.downed=!1,s.downT=0,s.a.cm.pivot.rotation.x=0,s.a.cm.pivot.position.y=0,s.a.hp=s.a.maxHp;this.wave<3?(this.world.openBarrier(this.wave),this.banner("BERTH CLEARED","+30 HP · FENCE DOWN — SKATE NORTH",1.8),this.coms("COM_KAM_04"),this.setObjective(`Gate open! Follow the rail north to ${this.zoneName(this.wave+1)}`)):(this.gateOpen=!0,this.world.setGateActive(!0),J.gateOpen(),this.banner("GATE OPEN","EXTRACT — REACH THE MAGENTA GATE",2),this.coms("COM_LIL_04"),this.setObjective("EXTRACT: skate into the magenta gate"))}return}this.waveCleared&&this.wave<3&&this.vixen.pos.z>qt[this.wave+1].z0+1&&(this.wave++,this.waveCleared=!1),this.gateOpen&&this.vixen.pos.z>nr-2.5&&Math.abs(this.vixen.pos.x)<4&&this.win()}win(){this.state==="playing"&&(J.win(),this.banner("","",.01),this.hushVoice(),this.rageT=0,this.setState(this.level===1?"cutscene":"win"))}startLevel2(){this.clearDynamic(),this.world.reset(),this.hushVoice(),this.lastGirlHurtT=-99,this.level=2,this.world.setArena("hyperdrive"),J.setArena("hyperdrive"),this.wave=0,this.waveActive=!1,this.batch=0,this.waveCleared=!1,this.gateOpen=!1,this.introT=2,this.chaos=Math.max(this.chaos,30),this.chaosReadyAnnounced=!1,this.rageT=0,this.rageCd=0,this.viperSeq=0,this.vixen.hp=this.vixen.maxHp,this.kailee.hp=this.kailee.maxHp;for(const e of this.allies)e.a.hp=e.a.maxHp,Object.assign(e,{downed:!1,downT:0,atkCd:0,shootCd:0,lastDmg:-99,target:null,recoverT:0});Object.assign(this.k,{downed:!1,downT:0,atkCd:0,shootCd:0,lastDmg:-99,target:null,recoverT:0,slideCd:4,slideT:0,slideHits:0,slideTgt:null}),this.placeHeroes(-4),this.spawnMines(),this.comsCd={},this.lowHpCd=0,this.comsLine("KAMYRN","You're in Hyperdrive. Whole base is crawling with Vipers."),this.comsLine("LILI","Skate fast. Don't stop. Watch the mines."),this.banner("LEVEL 2 — HYPERDRIVE","PINK VIPER DEN · SWARM / COBRA / FANG / HIVE",2.4),this.setObjective("Skate the approach lane — clear the Scar Swarm"),this.hud.boss.classList.add("hidden")}girls(){const e=[];!this.k.downed&&this.sling.phase==="none"&&e.push([this.kailee,"KAILEE"]);for(const t of this.allies)t.downed||e.push([t.a,t.name]);return e}girlNear(e,t){for(const[n,i]of this.girls())if(Math.hypot(n.pos.x-e.x,n.pos.z-e.z)<t)return i;return null}updateFrenzy(e){this.frenzyReasonT-=e,this.rageCd-=e;let t=null;for(const[s,o]of this.girls()){for(const a of this.enemies)if(!(a.state==="dead"||a.state==="spawn")&&Math.hypot(a.pos.x-s.pos.x,a.pos.z-s.pos.z)<3.2){t=o;break}if(t)break}const n=this.k.downed||this.allies.some(s=>s.downed);t&&this.addChaos(e*5,t+" THREATENED"),n&&this.addChaos(e*4,"A GIRL IS DOWN — GET TO HER");const i=t||n||this.time-this.lastGirlHurtT<3;if(this.rageT>0)this.rageT-=e,Math.random()<.7&&this.particles.emit(ft.copy(this.vixen.pos).setY(.3+Math.random()*1.4),oe.set((Math.random()-.5)*2,1.5,(Math.random()-.5)*2),Math.random()<.5?Re.mag:Re.red,.28,.4),this.rageT<=0&&(this.rageCd=6,this.banner("RAGE FADES","",.8));else if(i&&this.chaos>=60&&this.rageCd<=0&&this.state==="playing"){this.rageT=6,J.rage(),this.shake(.5),this.banner("RAGE","PROTECT MODE — EVEN IF IT KILLS HER",1.6),this.trans.ring(this.vixen.pos,16719695,.5,7,.6);const s=[["VIXEN","They're my girls. They are me."],["LILI","Grandma's in RAGE — nobody touches her girls."],["KAMYRN","That's Mom's Frenzy. Generation Mayhem."],["VIXEN","Get behind me, baby. Mama's here."]],o=s[Math.floor(Math.random()*s.length)];this.comsLine(o[0],o[1])}}paytonDownComs(){this.comsLine("KAMYRN","Mom get up! Get up!"),this.comsLine("LILI","Mom get up, get up!")}lose(){this.state==="playing"&&(J.lose(),this.vixen.cm.pivot.rotation.x=-1.2,this.setState("lose"))}updateCamera(e,t){const n=this.vixen,i=this.input,s=this.camera;if(t){if(this.state==="title"){const g=performance.now()*12e-5;s.position.set(Math.sin(g)*9+n.pos.x,3.4,Math.cos(g)*9+n.pos.z+4),s.lookAt(n.pos.x,1.4,n.pos.z+4),this.world.update(e,performance.now()/1e3,n.pos),this.vixen.syncVisual(e,0),this.kailee.syncVisual(e,0);for(const _ of this.allies)_.a.syncVisual(e,0)}return}i.locked&&(this.camYaw-=i.mouseDX*.0024,this.camPitch=Ri.clamp(this.camPitch+i.mouseDY*.0018,-.15,.7));let o=!1;i.down("ArrowLeft")&&(this.camYaw+=2.4*e,o=!0),i.down("ArrowRight")&&(this.camYaw-=2.4*e,o=!0),i.down("ArrowUp")&&(this.camPitch=Math.max(-.15,this.camPitch-e)),i.down("ArrowDown")&&(this.camPitch=Math.min(.7,this.camPitch+e)),!i.locked&&!o&&n.speed>2&&this.sling.phase==="none"&&(this.camYaw=Ws(this.camYaw,n.heading,Math.min(1,e*1.8)));const a=Kn(this.camYaw,oe),c=8.2+Math.min(8,n.speed)*.12,l=3.6+this.camPitch*4.5,h=ut.set(n.pos.x-a.x*c,n.y*.5+l,n.pos.z-a.z*c);h.x=Math.max(h.x,Ge+.8),s.position.lerp(h,Math.min(1,e*9)),this.trauma=Math.max(0,this.trauma-e*1.6);const u=this.trauma*this.trauma,d=ft.set(n.pos.x+a.x*4.5,1+n.y*.5,n.pos.z+a.z*4.5);s.lookAt(d),u>0&&(s.position.x+=(Math.random()-.5)*u*.9,s.position.y+=(Math.random()-.5)*u*.9,s.rotation.z+=(Math.random()-.5)*u*.08);const f=64+Math.min(8,n.speed)*.6+this.fovKick;Math.abs(s.fov-f)>.05&&(s.fov+=(f-s.fov)*Math.min(1,e*6),s.updateProjectionMatrix())}setW(e,t){const n=Math.round(t*1e3)/10;this.hudCache[e]!==n&&(this.hudCache[e]=n,this.hud[e].style.width=n+"%")}setT(e,t){this.hudCache[e]!==t&&(this.hudCache[e]=t,this.hud[e].textContent=t)}updateHud(){this.setW("hp-vixen",this.vixen.hp/this.vixen.maxHp),this.setW("hp-kailee",this.k.downed?1-this.k.downT/8:this.kailee.hp/this.kailee.maxHp),this.hud["hp-kailee"].classList.toggle("down",this.k.downed),this.setT("kailee-status",this.k.downed?`DOWN ${Math.ceil(this.k.downT)}s`:this.sling.phase!=="none"?"LAUNCHED!":"");for(const i of this.allies)this.setW("hp-"+i.key,i.downed?1-i.downT/8:i.a.hp/i.a.maxHp),this.hud["hp-"+i.key].classList.toggle("down",i.downed),this.setT(i.key+"-status",i.downed?`DOWN ${Math.ceil(i.downT)}s`:"");this.setW("chaos-fill",this.chaos/100),this.setT("frenzy-reason",this.rageT>0?`RAGE ${Math.ceil(this.rageT)}s — PROTECT MODE`:this.frenzyReasonT>0?"▲ "+this.frenzyReason:"RISES WHEN THE GIRLS ARE HIT OR THREATENED"),this.hud["chaos-wrap"].classList.toggle("rage",this.rageT>0);const e=this.chaos>=100;this.hud["chaos-wrap"].classList.toggle("full",e),this.hud["ab-sling"].classList.toggle("ready",e),this.hud["ab-sling"].querySelector("i").style.transform=`scaleX(${(1-this.chaos/100).toFixed(2)})`,this.hud["ab-cone"].querySelector("i").style.transform=`scaleX(${(this.p.coneCd/1.5).toFixed(2)})`,this.setT("wave-label",(this.level===2?"L2 · ":"")+(this.gateOpen?"EXTRACT":`WAVE ${this.wave+1}/4`));const t=this.enemies.filter(i=>i.state!=="dead").length;this.setT("enemy-count",this.waveActive?`HOSTILES ${t}${this.stats.combo>2?`  ·  COMBO x${this.stats.combo}`:""}${this.trickScore?`  ·  TRICKS ${this.trickScore}`:""}`:this.waveCleared?"ALL CLEAR":"STAND BY");const n=this.enemies.find(i=>i.def.kind==="falcon"&&i.state!=="dead");n&&this.setW("hp-boss",n.hp/n.maxHp)}statsHtml(){const e=this.stats,t=Math.floor(e.time/60),n=Math.floor(e.time%60).toString().padStart(2,"0");return`TIME ${t}:${n}<br>KOs ${e.kos} · SLINGSHOT KOs ${e.slingKos} · SPLASH KOs ${e.splashKos}<br>BEST COMBO x${e.maxCombo} · SLINGSHOTS FIRED ${e.slings}`}prewarm(e){const t=[];for(const i of Object.keys(ad))try{const s=new Hh(i,this.scene,new b(0,-50,0));t.push(s)}catch{}for(const i of t){const s=this.ensurePounceFx(i);s.visible=!0,s.position.y=-50}const n=t.map(i=>i.finisherFx);try{e.compile(this.scene,this.camera)}catch{}for(const i of t)i.dispose(this.scene);for(const i of n)i&&this.scene.remove(i)}debugApi(){const e=this;return{game:e,get state(){return e.state},get wave(){return e.wave},get chaos(){return e.chaos},get slingPhase(){return e.sling.phase},get enemyCount(){return e.enemies.filter(t=>t.state!=="dead").length},vixen:()=>({x:e.vixen.pos.x,z:e.vixen.pos.z,speed:e.vixen.speed,hp:e.vixen.hp}),squad:()=>[e.vixen,e.kailee,...e.allies.map(t=>t.a)].map(t=>({key:t.key,x:t.pos.x,z:t.pos.z,hp:t.hp,visible:t.cm.root.visible,mesh:!t.cm.procedural,downed:!!e.allyOf(t)?.downed})),damageAlly:(t,n)=>{const i=e.allies.find(s=>s.key===t);i&&e.hurt(i.a,n,new b(0,0,-1),0,{source:"enemy"})},kailee:()=>({x:e.kailee.pos.x,z:e.kailee.pos.z,hp:e.kailee.hp,downed:e.k.downed}),enemies:()=>e.enemies.map(t=>({kind:t.def.kind,hp:t.hp,x:t.pos.x,z:t.pos.z,state:t.state})),damageKailee:t=>e.hurt(e.kailee,t,new b(0,0,-1),0,{source:"enemy"}),setChaos:t=>{e.chaos=0,e.chaosReadyAnnounced=!1,e.addChaos(t)},fireSling:()=>e.tryShatter(),spawn:(t,n=0,i=4)=>{const s=e.spawnEnemy(t,new b(e.vixen.pos.x+n,0,e.vixen.pos.z+i));return s.stateT=.1,e.enemies.length},sandbox:()=>{e.introT=1e9;for(const t of e.enemies)t.dispose(e.scene);e.enemies=[],e.runId++},forcePinkPounce:(t=!1)=>{const n=t?e.kailee:e.vixen,i=e.enemies.find(s=>s.def.kind==="viper"&&s.state!=="dead");return i?(i.cd=0,e.startPinkPounce(i,n),!0):!1},pinState:()=>e.enemies.filter(t=>t.attackKind==="pounce").map(t=>({state:t.state,t:t.stateT,target:t.pinTarget===e.vixen?"vixen":t.pinTarget===e.kailee?"kailee":null})),freezeEnemies:()=>{for(const t of e.enemies)t.state="spawn",t.stateT=999},killAll:()=>{for(const t of e.enemies)t.state!=="dead"&&e.hurt(t,9999,new b(0,0,1),1,{source:"vixen"})},teleport:(t,n)=>{e.vixen.pos.set(t,0,n),e.p.lastSafe.set(t,0,n)},setInvuln:t=>{e.p.invuln=t},get level(){return e.level},get rage(){return e.rageT},get frenzyReason(){return e.frenzyReason},skipToL2:()=>{e.startLevel2(),e.setState("playing")},winDock:()=>{e.gateOpen=!0,e.win()},downPayton:()=>{const t=e.allies.find(n=>n.key==="payton");t&&e.hurt(t.a,9999,new b(0,0,-1),0,{source:"enemy"})},assets:()=>({loaded:Object.keys(yt.gltf),failed:yt.failed,clips:Object.keys(yt.clips)})}}};Vt.SLING_BASE_SPEED=42,Vt.SLING_BOOST_SPEED=110,Vt.SLING_RANGE=36,Vt.SIG={brianna:{cd:8,jitter:2,dur:1.8},payton:{cd:9,jitter:2,dur:2.4,spin:.6,rate:.06}},Vt.SLIDE={cooldown:5.5,cdJitter:2,dur:.6,speed:15,hit1:22,hit2:18,hitAt1:.2,hitAt2:.36};let gc=Vt;class Ty{constructor(e){this.keys=new Set,this.pressed=new Set,this.mouseDX=0,this.mouseDY=0,this.locked=!1,this.touchMove={x:0,y:0},this.isTouch=!1,this.onLockChange=()=>{},this.canvas=e,window.addEventListener("keydown",t=>{const n=t.code;["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(n)&&t.preventDefault(),this.keys.has(n)||this.pressed.add(n),this.keys.add(n)}),window.addEventListener("keyup",t=>{this.keys.delete(t.code)}),window.addEventListener("blur",()=>{this.keys.clear()}),e.addEventListener("mousedown",t=>{t.button===0&&this.pressed.add("Mouse0"),t.button===2&&this.pressed.add("Mouse2"),this.keys.add("Mouse"+t.button)}),window.addEventListener("mouseup",t=>{this.keys.delete("Mouse"+t.button)}),e.addEventListener("contextmenu",t=>t.preventDefault()),window.addEventListener("mousemove",t=>{this.locked&&(this.mouseDX+=t.movementX||0,this.mouseDY+=t.movementY||0)}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,this.onLockChange(this.locked)}),this.isTouch=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window&&navigator.maxTouchPoints>0}requestLock(){if(!this.isTouch)try{const e=this.canvas.requestPointerLock();e&&typeof e.catch=="function"&&e.catch(()=>{})}catch{}}exitLock(){document.pointerLockElement&&document.exitPointerLock()}down(...e){return e.some(t=>this.keys.has(t))}hit(...e){return e.some(t=>this.pressed.has(t))}press(e){this.pressed.add(e)}endFrame(){this.pressed.clear(),this.mouseDX=0,this.mouseDY=0}bindTouch(e){document.getElementById("touch").classList.remove("hidden");const n=document.getElementById("stick"),i=document.getElementById("stick-knob");let s=null;const o=60,a=h=>{const u=n.getBoundingClientRect();let d=h.clientX-(u.left+u.width/2),f=h.clientY-(u.top+u.height/2);const g=Math.hypot(d,f);g>o&&(d*=o/g,f*=o/g),i.style.transform=`translate(${d}px, ${f}px)`,this.touchMove.x=d/o,this.touchMove.y=-f/o};n.addEventListener("touchstart",h=>{h.preventDefault();const u=h.changedTouches[0];s=u.identifier,a(u)},{passive:!1}),n.addEventListener("touchmove",h=>{h.preventDefault();for(const u of Array.from(h.changedTouches))u.identifier===s&&a(u)},{passive:!1});const c=h=>{for(const u of Array.from(h.changedTouches))u.identifier===s&&(s=null,this.touchMove.x=0,this.touchMove.y=0,i.style.transform="")};n.addEventListener("touchend",c),n.addEventListener("touchcancel",c);const l={punch:"KeyJ",cone:"KeyK",sling:"KeyL",jump:"Space"};document.querySelectorAll("#tbtns button").forEach(h=>{const u=l[h.dataset.k||""];h.addEventListener("touchstart",d=>{d.preventDefault(),this.pressed.add(u),this.keys.add(u)},{passive:!1}),h.addEventListener("touchend",d=>{d.preventDefault(),this.keys.delete(u)},{passive:!1})}),document.getElementById("tpause").addEventListener("touchstart",h=>{h.preventDefault(),e()},{passive:!1})}}const at=r=>document.getElementById(r),gr=at("c"),Tt=new T_({canvas:gr,antialias:!0,powerPreference:"high-performance"});Tt.outputColorSpace=At;Tt.toneMapping=vc;Tt.toneMappingExposure=1.15;Tt.shadowMap.enabled=!0;Tt.shadowMap.type=qh;Tt.info.autoReset=!1;const pr=new Du,Ni=new jt(62,16/9,.1,400),en=new Ty(gr),by=navigator.maxTouchPoints>0&&/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)||(navigator.hardwareConcurrency||8)<=4;let cn=by?"LOW":"HIGH";Tt.shadowMap.enabled=cn==="HIGH";let Jn=null,yo=null;function Mo(){const r=window.innerWidth,e=window.innerHeight,t=cn==="HIGH"?Math.min(window.devicePixelRatio||1,1.5):1;Tt.setPixelRatio(t),Tt.setSize(r,e,!1),Ni.aspect=r/Math.max(1,e),Ni.updateProjectionMatrix(),Jn&&(Jn.setPixelRatio(t),Jn.setSize(r,e)),yo&&yo.resolution.set(r/2,e/2),qe?.particles.setScale(e)}function Ey(){Jn=new Vv(Tt),Jn.addPass(new Gv(pr,Ni)),yo=new ws(new Q(640,360),.85,.55,.62),Jn.addPass(yo),Jn.addPass(new Yv)}function Kc(r=!1){if(r){Tt.shadowMap.autoUpdate=cn==="HIGH",Tt.shadowMap.needsUpdate=!0,at("btn-quality").textContent="GRAPHICS: "+cn,Mo();return}Tt.shadowMap.autoUpdate=!0,Tt.shadowMap.enabled=cn==="HIGH",pr.traverse(e=>{const t=e.material;t&&(t.needsUpdate=!0)}),at("btn-quality").textContent="GRAPHICS: "+cn,Mo()}let qe=null;const Ay=["screen-title","screen-howto","screen-credits","screen-pause","screen-win","screen-lose"];let qc="screen-title";function Tn(r){for(const e of Ay)at(e).classList.toggle("hidden",e!==r)}function Ry(r){if(at("hud").classList.toggle("hidden",r==="title"),r==="playing"&&(Tn(null),J.startMusic()),r==="paused"&&(Tn("screen-pause"),en.exitLock()),r==="win"&&(Tn("screen-win"),at("win-stats").innerHTML=qe.statsHtml(),en.exitLock(),J.stopMusic()),r==="lose"&&(Tn("screen-lose"),at("lose-stats").innerHTML=qe.statsHtml(),en.exitLock(),J.stopMusic()),r==="title"&&(Tn("screen-title"),en.exitLock(),J.stopMusic()),r==="cutscene"){try{localStorage.setItem("gm_l2_unlocked","1")}catch{}Tn(null),en.exitLock(),Cy().then(()=>{qe&&(qe.startLevel2(),qe.setState("playing"),en.requestLock(),gr.focus())})}}const Xh=[{img:"P01",who:"VIXEN",line:"Contract's paid. Breathe, babies.",music:"dock"},{img:"P01",who:"KAILEE",line:"Everybody good? Payton?"},{img:"P02",who:"PAYTON",line:"I'm good, Mom. Guns are hot."},{img:"P02",who:"BRIANNA",line:"Next one's HyperDrive. Pink Viper den. Their turf."},{img:"P03",who:"KAMYRN",line:"Hyperdrive's crawling with Vipers."},{img:"P03",who:"LILI",line:"Skate fast. Don't stop. Come home."},{img:"P04",who:"KAILEE",line:"Smells like burnt metal.",music:"hyperdrive"},{img:"P04",who:"VIXEN",line:"Stay on my wheels. Nobody touches my girls."},{img:"P05",who:"VIXEN",line:"Hyperdrive Base. Sophisticated Brutality. Let's go."},{img:"P06",card:"PINK VIPERS",sub:"SWARM — SCAR SWARM  ·  COBRA — HOOD STRIKE",who:"COBRA",line:"Sssso the old lady brought her babies."},{img:"P07",card:"PINK VIPERS",sub:"FANG — JET FANG  ·  HIVE — HEX NEST",who:"FANG",line:"Fresh meat on wheels."},{img:"P08",card:"LEVEL 2 — HYPERDRIVE",sub:"GENERATION MAYHEM",hold:2200}];function Cy(){return new Promise(r=>{J.init(),J.setArena("dock"),J.startMusic();const e=document.createElement("div");e.id="cutscene";const t={};for(const l of Xh)if(!t[l.img]){const h=new Image;h.src=`cutscene/${l.img}.jpg`,e.appendChild(h),t[l.img]=h}const n=document.createElement("div");n.className="card";const i=document.createElement("div");i.className="cap",i.style.opacity="0",i.style.display="none";const s=document.createElement("div");s.className="skip",s.textContent="CLICK / ANY KEY TO SKIP",e.append(n,i,s),document.body.appendChild(e);let o=!1;const a=()=>{o||(o=!0,J.stopVoice(),window.removeEventListener("keydown",c),e.remove(),r())},c=()=>a();e.addEventListener("click",a),setTimeout(()=>window.addEventListener("keydown",c),600),(async()=>{let l="";for(const h of Xh){if(o)return;if(h.img!==l){for(const u in t)t[u].classList.toggle("on",u===h.img);l=h.img}h.music&&J.setArena(h.music),n.innerHTML=h.card?`${h.card}<small>${h.sub??""}</small>`:"",h.card&&J.impact(),h.line?(i.innerHTML=`<b>${h.who}:</b>${h.line}`,i.style.opacity="1",await J.say(h.who,h.line),await new Promise(u=>setTimeout(u,350))):(i.style.opacity="0",await new Promise(u=>setTimeout(u,h.hold??1500)))}a()})()})}function Oi(r){qe&&(J.init(),J.ui(),r==="new"&&qe.resetRun(),r==="retry"&&qe.retryWave(),qe.setState("playing"),en.requestLock(),gr.focus())}function cd(){J.setMuted(!J.muted),at("btn-mute").textContent=J.muted?"🔇 MUTED [M]":"🔊 SOUND [M]"}at("btn-mute").addEventListener("click",r=>{r.stopPropagation(),cd()});at("btn-pause").addEventListener("click",r=>{r.stopPropagation(),_r()});function _r(){qe&&qe.state==="playing"&&qe.setState("paused")}at("btn-play").addEventListener("click",()=>Oi("new"));at("btn-l2").addEventListener("click",r=>{!qe||localStorage.getItem("gm_l2_unlocked")!=="1"||(J.init(),J.ui(),qe.resetRun(),r.shiftKey?(qe.startLevel2(),qe.setState("playing"),en.requestLock()):qe.setState("cutscene"))});at("btn-howto").addEventListener("click",()=>{J.init(),J.ui(),Tn("screen-howto")});at("btn-howto-back").addEventListener("click",()=>{J.ui(),Tn("screen-title")});at("btn-credits").addEventListener("click",()=>{J.init(),J.ui(),qc="screen-title",Tn("screen-credits")});at("btn-credits-w").addEventListener("click",()=>{J.ui(),qc="screen-win",Tn("screen-credits")});at("btn-credits-back").addEventListener("click",()=>{J.ui(),Tn(qc)});at("btn-resume").addEventListener("click",()=>Oi("resume"));at("btn-replay-p").addEventListener("click",()=>Oi("new"));at("btn-replay-w").addEventListener("click",()=>Oi("new"));at("btn-replay-l").addEventListener("click",()=>Oi("new"));at("btn-retry-l").addEventListener("click",()=>Oi("retry"));for(const r of["btn-menu-p","btn-menu-w","btn-menu-l"])at(r).addEventListener("click",()=>{J.ui(),qe?.resetRun(),qe?.setState("title")});at("btn-quality").addEventListener("click",()=>{cn=cn==="HIGH"?"LOW":"HIGH",Kc()});window.addEventListener("keydown",r=>{if(qe){if(r.code==="KeyM"){cd();return}(r.code==="Escape"||r.code==="KeyP")&&qe.state==="playing"?_r():(r.code==="KeyP"||r.code==="Escape")&&qe.state==="paused"&&at("screen-pause").classList.contains("hidden")===!1&&Oi("resume")}});gr.addEventListener("mousedown",()=>{qe?.state==="playing"&&!en.locked&&en.requestLock()});let Yh=!1;en.onLockChange=r=>{r?Yh=!0:Yh&&qe?.state==="playing"&&_r()};document.addEventListener("visibilitychange",()=>{document.hidden&&_r()});window.addEventListener("resize",Mo);at("lockup").src=Yx;async function Py(){const r=at("load-status");await Kx((t,n,i)=>{r.textContent=`Loading ${i}… ${Math.round(t/n*100)}%`}),qe=new gc(pr,Ni,Tt,en),qe.onStateChange=Ry,en.isTouch&&en.bindTouch(_r),Ey(),Mo(),qe.prewarm(Tt),Tt.compile(pr,Ni),r.textContent="";const e=at("btn-play");e.disabled=!1,e.textContent="PLAY";{const t=at("btn-l2");let n=!1;try{n=localStorage.getItem("gm_l2_unlocked")==="1"}catch{}t.disabled=!n,t.style.display=n?"":"none"}if(new URLSearchParams(location.search).get("level")==="2"&&localStorage.getItem("gm_l2_unlocked")==="1"){const t=setInterval(()=>{document.getElementById("cold-open")||(clearInterval(t),qe.startLevel2(),qe.setState("playing"))},300)}window.__gm=qe.debugApi(),window.__gm.ready=!0,window.__gm.quality=()=>cn,window.__gm.renderInfo=()=>({calls:Tt.info.render.calls,triangles:Tt.info.render.triangles,geometries:Tt.info.memory.geometries,textures:Tt.info.memory.textures}),window.__gm.setQuality=t=>{cn=t,Kc()}}const Iy=new td;let no=0,ya=0,io=0;function ld(){requestAnimationFrame(ld);const r=Math.min(Iy.getDelta(),.1);if(qe&&(qe.update(r),Tt.info.reset(),qe.state!=="title"&&qe.dmg.update(r,Ni,window.innerWidth,window.innerHeight),cn==="HIGH"&&Jn?Jn.render(r):Tt.render(pr,Ni),no+=r,ya++,no>=1)){const e=ya/no;no=0,ya=0,window.__gmFps=e,qe.state==="playing"&&cn==="HIGH"&&e<38&&!window.__gmNoAutoQuality?(io++,io>=4&&(cn="LOW",Kc(!0),io=0)):io=0}}Py().catch(r=>{console.error(r),at("load-status").textContent="Failed to load: "+r});ld();(()=>{const r=document.createElement("div");r.id="cold-open",r.style.cssText="position:fixed;inset:0;z-index:9999;background:#000;display:flex;align-items:center;justify-content:center;cursor:pointer";const e=document.createElement("video");e.src="intro/GM_ColdOpen_Full_v003_nocrawl.mp4",e.muted=!1,e.playsInline=!0,e.preload="auto",e.style.cssText="width:100%;height:100%;object-fit:contain;display:none";const t=document.createElement("div");t.textContent="CLICK OR ANY KEY TO CONTINUE",t.style.cssText="position:absolute;right:24px;top:20px;color:#fff8;font:700 16px sans-serif;letter-spacing:1px;padding:8px 14px";const n=document.createElement("div");n.style.cssText='position:absolute;inset:0;display:flex;align-items:center;justify-content:center;text-align:center;padding:0 8vw;color:#ff2bd6;font:800 clamp(28px,5vw,72px) "Arial Black",Impact,sans-serif;letter-spacing:2px;line-height:1.2;text-shadow:0 0 6px #ff2bd6,0 0 18px #ff2bd6,0 0 42px #c0008f;opacity:0;transition:opacity .7s;pointer-events:none';const i=["They took her man.","She paid the bills.","Three daughters.<br>Three blood contracts.","Mom wasn't in the room.","Then the call.","Mama Bear is back.","Can you Survive the Circuit?"];r.append(e,n,t),document.body.appendChild(r);let s="cards",o=0,a=0;const c=()=>{s!=="done"&&(s="done",clearTimeout(o),window.removeEventListener("keydown",d),e.pause(),r.remove())},l=()=>{s==="cards"&&(s="movie",clearTimeout(o),n.remove(),e.style.display="",t.textContent="CLICK OR ANY KEY TO SKIP",e.muted=!1,e.volume=1,e.play().catch(()=>{e.muted=!0,e.play().catch(()=>{})}))},h=()=>{if(s==="cards"){if(a>=i.length){n.style.opacity="0",o=setTimeout(l,800);return}n.innerHTML=i[a++],n.style.opacity="1",o=setTimeout(()=>{n.style.opacity="0",o=setTimeout(h,800)},2800)}},u=()=>{s==="cards"?l():c()},d=f=>u();e.addEventListener("ended",c),e.addEventListener("error",c),r.addEventListener("click",u),window.addEventListener("keydown",d),o=setTimeout(h,500)})();const Ly=()=>{J.unlock(),window.__gmAudio=()=>J.ctx?.state};["pointerdown","touchend","keydown","click"].forEach(r=>window.addEventListener(r,Ly,{capture:!0,passive:!0}));
