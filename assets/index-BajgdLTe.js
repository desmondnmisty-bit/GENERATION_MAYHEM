(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yc="170",fd=0,il=1,pd=2,Kh=1,qh=2,Yn=3,Dn=0,Ye=1,Fe=2,Qn=0,ls=1,we=2,sl=3,rl=4,md=5,Ai=100,gd=101,vd=102,_d=103,xd=104,yd=200,Md=201,Sd=202,wd=203,Ta=204,ba=205,Td=206,bd=207,Ed=208,Ad=209,Rd=210,Cd=211,Id=212,Pd=213,Ld=214,Ea=0,Aa=1,Ra=2,fs=3,Ca=4,Ia=5,Pa=6,La=7,jh=0,Dd=1,Nd=2,mi=0,Zh=1,$h=2,Jh=3,Mc=4,Ud=5,Qh=6,tu=7,ol="attached",Od="detached",eu=300,ps=301,ms=302,Da=303,Na=304,So=306,tn=1e3,gn=1001,ir=1002,$e=1003,nu=1004,Ks=1005,an=1006,so=1007,Zn=1008,ni=1009,iu=1010,su=1011,sr=1012,Sc=1013,Pi=1014,En=1015,ti=1016,wc=1017,Tc=1018,gs=1020,ru=35902,ou=1021,au=1022,vn=1023,cu=1024,lu=1025,hs=1026,vs=1027,bc=1028,Ec=1029,hu=1030,Ac=1031,Rc=1033,ro=33776,oo=33777,ao=33778,co=33779,Ua=35840,Oa=35841,Fa=35842,ka=35843,Ba=36196,za=37492,Ha=37496,Va=37808,Ga=37809,Wa=37810,Xa=37811,Ya=37812,Ka=37813,qa=37814,ja=37815,Za=37816,$a=37817,Ja=37818,Qa=37819,tc=37820,ec=37821,lo=36492,nc=36494,ic=36495,uu=36283,sc=36284,rc=36285,oc=36286,du=2200,fu=2201,Fd=2202,rr=2300,or=2301,Do=2302,rs=2400,os=2401,fo=2402,Cc=2500,kd=2501,Bd=0,pu=1,ac=2,zd=3200,Hd=3201,mu=0,Vd=1,Pn="",Ae="srgb",Je="srgb-linear",wo="linear",le="srgb",ki=7680,al=519,Gd=512,Wd=513,Xd=514,gu=515,Yd=516,Kd=517,qd=518,jd=519,cc=35044,yr=35048,cl="300 es",$n=2e3,po=2001;class Ui{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ll=1234567;const Zs=Math.PI/180,_s=180/Math.PI;function _n(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[r&255]+He[r>>8&255]+He[r>>16&255]+He[r>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Le(r,t,e){return Math.max(t,Math.min(e,r))}function Ic(r,t){return(r%t+t)%t}function Zd(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function $d(r,t,e){return r!==t?(e-r)/(t-r):0}function $s(r,t,e){return(1-e)*r+e*t}function Jd(r,t,e,n){return $s(r,t,1-Math.exp(-e*n))}function Qd(r,t=1){return t-Math.abs(Ic(r,t*2)-t)}function tf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function ef(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function nf(r,t){return r+Math.floor(Math.random()*(t-r+1))}function sf(r,t){return r+Math.random()*(t-r)}function rf(r){return r*(.5-Math.random())}function of(r){r!==void 0&&(ll=r);let t=ll+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function af(r){return r*Zs}function cf(r){return r*_s}function lf(r){return(r&r-1)===0&&r!==0}function hf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function uf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function df(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),f=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,c*u,c*d,a*l);break;case"YZY":r.set(c*d,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*d,a*h,a*l);break;case"XZX":r.set(a*h,c*g,c*f,a*l);break;case"YXY":r.set(c*f,a*h,c*g,a*l);break;case"ZYZ":r.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function he(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ri={DEG2RAD:Zs,RAD2DEG:_s,generateUUID:_n,clamp:Le,euclideanModulo:Ic,mapLinear:Zd,inverseLerp:$d,lerp:$s,damp:Jd,pingpong:Qd,smoothstep:tf,smootherstep:ef,randInt:nf,randFloat:sf,randFloatSpread:rf,seededRandom:of,degToRad:af,radToDeg:cf,isPowerOfTwo:lf,ceilPowerOfTwo:hf,floorPowerOfTwo:uf,setQuaternionFromProperEuler:df,normalize:he,denormalize:bn};class tt{constructor(t=0,e=0){tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,n,i,s,o,a,c,l){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],_=i[1],y=i[4],x=i[7],A=i[2],b=i[5],R=i[8];return s[0]=o*v+a*_+c*A,s[3]=o*m+a*y+c*b,s[6]=o*p+a*x+c*R,s[1]=l*v+h*_+u*A,s[4]=l*m+h*y+u*b,s[7]=l*p+h*x+u*R,s[2]=d*v+f*_+g*A,s[5]=d*m+f*y+g*b,s[8]=d*p+f*x+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*s,f=l*s-o*c,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(i*l-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=d*v,t[4]=(h*e-i*c)*v,t[5]=(i*s-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(No.makeScale(t,e)),this}rotate(t){return this.premultiply(No.makeRotation(-t)),this}translate(t,e){return this.premultiply(No.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const No=new zt;function vu(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ar(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ff(){const r=ar("canvas");return r.style.display="block",r}const hl={};function qs(r){r in hl||(hl[r]=!0,console.warn(r))}function pf(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function mf(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gf(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qt={enabled:!0,workingColorSpace:Je,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(r.r=ei(r.r),r.g=ei(r.g),r.b=ei(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(r.r=us(r.r),r.g=us(r.g),r.b=us(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pn?wo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function ei(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function us(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const ul=[.64,.33,.3,.6,.15,.06],dl=[.2126,.7152,.0722],fl=[.3127,.329],pl=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ml=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[Je]:{primaries:ul,whitePoint:fl,transfer:wo,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:dl,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:ul,whitePoint:fl,transfer:le,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:dl,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}});let Bi;class vf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bi===void 0&&(Bi=ar("canvas")),Bi.width=t.width,Bi.height=t.height;const n=Bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ar("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ei(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ei(e[n]/255)*255):e[n]=ei(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _f=0;class _u{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=_n(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Uo(i[o].image)):s.push(Uo(i[o]))}else s=Uo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Uo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?vf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xf=0;class De extends Ui{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=gn,i=gn,s=an,o=Zn,a=vn,c=ni,l=De.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=_n(),this.name="",this.source=new _u(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==eu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tn:t.x=t.x-Math.floor(t.x);break;case gn:t.x=t.x<0?0:1;break;case ir:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tn:t.y=t.y-Math.floor(t.y);break;case gn:t.y=t.y<0?0:1;break;case ir:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=eu;De.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,i=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,x=(f+1)/2,A=(p+1)/2,b=(h+d)/4,R=(u+v)/4,C=(g+m)/4;return y>x&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=b/n,s=R/n):x>A?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=b/i,s=C/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=R/s,i=C/s),this.set(n,i,s,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yf extends Ui{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new De(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new _u(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends yf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class xu extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mf extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ke{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*v,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const A=Math.sqrt(y),b=Math.atan2(A,p*_);m=Math.sin(m*b)/A,a=Math.sin(a*b)/A}const x=a*_;if(c=c*m+d*x,l=l*m+f*x,h=h*m+g*x,u=u*m+v*x,m===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),f=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(t=0,e=0,n=0){E.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Oo.copy(this).projectOnVector(t),this.sub(Oo)}reflect(t){return this.sub(Oo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oo=new E,gl=new ke;class nn{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(s,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mr.copy(n.boundingBox)),Mr.applyMatrix4(t.matrixWorld),this.union(Mr)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),Sr.subVectors(this.max,Ps),zi.subVectors(t.a,Ps),Hi.subVectors(t.b,Ps),Vi.subVectors(t.c,Ps),ri.subVectors(Hi,zi),oi.subVectors(Vi,Hi),_i.subVectors(zi,Vi);let e=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-_i.z,_i.y,ri.z,0,-ri.x,oi.z,0,-oi.x,_i.z,0,-_i.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-_i.y,_i.x,0];return!Fo(e,zi,Hi,Vi,Sr)||(e=[1,0,0,0,1,0,0,0,1],!Fo(e,zi,Hi,Vi,Sr))?!1:(wr.crossVectors(ri,oi),e=[wr.x,wr.y,wr.z],Fo(e,zi,Hi,Vi,Sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const zn=[new E,new E,new E,new E,new E,new E,new E,new E],Mn=new E,Mr=new nn,zi=new E,Hi=new E,Vi=new E,ri=new E,oi=new E,_i=new E,Ps=new E,Sr=new E,wr=new E,xi=new E;function Fo(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){xi.fromArray(r,s);const a=i.x*Math.abs(xi.x)+i.y*Math.abs(xi.y)+i.z*Math.abs(xi.z),c=t.dot(xi),l=e.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Sf=new nn,Ls=new E,ko=new E;class Nn{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Sf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);const e=Ls.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ls,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(ko)),this.expandByPoint(Ls.copy(t.center).sub(ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new E,Bo=new E,Tr=new E,ai=new E,zo=new E,br=new E,Ho=new E;class To{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Bo.copy(t).add(e).multiplyScalar(.5),Tr.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(Bo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Tr),a=ai.dot(this.direction),c=-ai.dot(Tr),l=ai.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Bo).addScaledVector(Tr,d),f}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);const n=Hn.dot(this.direction),i=Hn.dot(Hn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,i,s){zo.subVectors(e,t),br.subVectors(n,t),Ho.crossVectors(zo,br);let o=this.direction.dot(Ho),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,t);const c=a*this.direction.dot(br.crossVectors(ai,br));if(c<0)return null;const l=a*this.direction.dot(zo.cross(ai));if(l<0||c+l>o)return null;const h=-a*ai.dot(Ho);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(t,e,n,i,s,o,a,c,l,h,u,d,f,g,v,m){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,h,u,d,f,g,v,m)}set(t,e,n,i,s,o,a,c,l,h,u,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Gi.setFromMatrixColumn(t,0).length(),s=1/Gi.setFromMatrixColumn(t,1).length(),o=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wf,t,Tf)}lookAt(t,e,n){const i=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ci.crossVectors(n,rn),ci.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ci.crossVectors(n,rn)),ci.normalize(),Er.crossVectors(rn,ci),i[0]=ci.x,i[4]=Er.x,i[8]=rn.x,i[1]=ci.y,i[5]=Er.y,i[9]=rn.y,i[2]=ci.z,i[6]=Er.z,i[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],y=n[7],x=n[11],A=n[15],b=i[0],R=i[4],C=i[8],S=i[12],M=i[1],P=i[5],O=i[9],F=i[13],V=i[2],q=i[6],G=i[10],$=i[14],W=i[3],st=i[7],ct=i[11],yt=i[15];return s[0]=o*b+a*M+c*V+l*W,s[4]=o*R+a*P+c*q+l*st,s[8]=o*C+a*O+c*G+l*ct,s[12]=o*S+a*F+c*$+l*yt,s[1]=h*b+u*M+d*V+f*W,s[5]=h*R+u*P+d*q+f*st,s[9]=h*C+u*O+d*G+f*ct,s[13]=h*S+u*F+d*$+f*yt,s[2]=g*b+v*M+m*V+p*W,s[6]=g*R+v*P+m*q+p*st,s[10]=g*C+v*O+m*G+p*ct,s[14]=g*S+v*F+m*$+p*yt,s[3]=_*b+y*M+x*V+A*W,s[7]=_*R+y*P+x*q+A*st,s[11]=_*C+y*O+x*G+A*ct,s[15]=_*S+y*F+x*$+A*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*f-n*c*f)+v*(+e*c*f-e*l*d+s*o*d-i*o*f+i*l*h-s*c*h)+m*(+e*l*u-e*a*f-s*o*u+n*o*f+s*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],_=u*m*l-v*d*l+v*c*f-a*m*f-u*c*p+a*d*p,y=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,x=h*v*l-g*u*l+g*a*f-o*v*f-h*a*p+o*u*p,A=g*u*c-h*v*c-g*a*d+o*v*d+h*a*m-o*u*m,b=e*_+n*y+i*x+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=_*R,t[1]=(v*d*s-u*m*s-v*i*f+n*m*f+u*i*p-n*d*p)*R,t[2]=(a*m*s-v*c*s+v*i*l-n*m*l-a*i*p+n*c*p)*R,t[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*f-n*c*f)*R,t[4]=y*R,t[5]=(h*m*s-g*d*s+g*i*f-e*m*f-h*i*p+e*d*p)*R,t[6]=(g*c*s-o*m*s-g*i*l+e*m*l+o*i*p-e*c*p)*R,t[7]=(o*d*s-h*c*s+h*i*l-e*d*l-o*i*f+e*c*f)*R,t[8]=x*R,t[9]=(g*u*s-h*v*s-g*n*f+e*v*f+h*n*p-e*u*p)*R,t[10]=(o*v*s-g*a*s+g*n*l-e*v*l-o*n*p+e*a*p)*R,t[11]=(h*a*s-o*u*s-h*n*l+e*u*l+o*n*f-e*a*f)*R,t[12]=A*R,t[13]=(h*v*i-g*u*i+g*n*d-e*v*d-h*n*m+e*u*m)*R,t[14]=(g*a*i-o*v*i-g*n*c+e*v*c+o*n*m-e*a*m)*R,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,d=s*l,f=s*h,g=s*u,v=o*h,m=o*u,p=a*u,_=c*l,y=c*h,x=c*u,A=n.x,b=n.y,R=n.z;return i[0]=(1-(v+p))*A,i[1]=(f+x)*A,i[2]=(g-y)*A,i[3]=0,i[4]=(f-x)*b,i[5]=(1-(d+p))*b,i[6]=(m+_)*b,i[7]=0,i[8]=(g+y)*R,i[9]=(m-_)*R,i[10]=(1-(d+v))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Gi.set(i[0],i[1],i[2]).length();const o=Gi.set(i[4],i[5],i[6]).length(),a=Gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Sn.copy(this);const l=1/s,h=1/o,u=1/a;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,e.setFromRotationMatrix(Sn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=$n){const c=this.elements,l=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(a===$n)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===po)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=$n){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-s),d=(e+t)*l,f=(n+i)*h;let g,v;if(a===$n)g=(o+s)*u,v=-2*u;else if(a===po)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Gi=new E,Sn=new Dt,wf=new E(0,0,0),Tf=new E(1,1,1),ci=new E,Er=new E,rn=new E,vl=new Dt,_l=new ke;class ln{constructor(t=0,e=0,n=0,i=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _l.setFromEuler(this),this.setFromQuaternion(_l,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class yu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bf=0;const xl=new E,Wi=new ke,Vn=new Dt,Ar=new E,Ds=new E,Ef=new E,Af=new ke,yl=new E(1,0,0),Ml=new E(0,1,0),Sl=new E(0,0,1),wl={type:"added"},Rf={type:"removed"},Xi={type:"childadded",child:null},Vo={type:"childremoved",child:null};class ge extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new E,e=new ln,n=new ke,i=new E(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Dt},normalMatrix:{value:new zt}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(yl,t)}rotateY(t){return this.rotateOnAxis(Ml,t)}rotateZ(t){return this.rotateOnAxis(Sl,t)}translateOnAxis(t,e){return xl.copy(t).applyQuaternion(this.quaternion),this.position.add(xl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yl,t)}translateY(t){return this.translateOnAxis(Ml,t)}translateZ(t){return this.translateOnAxis(Sl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ar.copy(t):Ar.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Ds,Ar,this.up):Vn.lookAt(Ar,Ds,this.up),this.quaternion.setFromRotationMatrix(Vn),i&&(Vn.extractRotation(i.matrixWorld),Wi.setFromRotationMatrix(Vn),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wl),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rf),Vo.child=t,this.dispatchEvent(Vo),Vo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wl),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,Ef),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,Af,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ge.DEFAULT_UP=new E(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new E,Gn=new E,Go=new E,Wn=new E,Yi=new E,Ki=new E,Tl=new E,Wo=new E,Xo=new E,Yo=new E,Ko=new ie,qo=new ie,jo=new ie;class mn{constructor(t=new E,e=new E,n=new E){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),wn.subVectors(t,e),i.cross(wn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){wn.subVectors(i,e),Gn.subVectors(n,e),Go.subVectors(t,e);const o=wn.dot(wn),a=wn.dot(Gn),c=wn.dot(Go),l=Gn.dot(Gn),h=Gn.dot(Go),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Wn.x),c.addScaledVector(o,Wn.y),c.addScaledVector(a,Wn.z),c)}static getInterpolatedAttribute(t,e,n,i,s,o){return Ko.setScalar(0),qo.setScalar(0),jo.setScalar(0),Ko.fromBufferAttribute(t,e),qo.fromBufferAttribute(t,n),jo.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Ko,s.x),o.addScaledVector(qo,s.y),o.addScaledVector(jo,s.z),o}static isFrontFacing(t,e,n,i){return wn.subVectors(n,e),Gn.subVectors(t,e),wn.cross(Gn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),wn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Yi.subVectors(i,n),Ki.subVectors(s,n),Wo.subVectors(t,n);const c=Yi.dot(Wo),l=Ki.dot(Wo);if(c<=0&&l<=0)return e.copy(n);Xo.subVectors(t,i);const h=Yi.dot(Xo),u=Ki.dot(Xo);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Yi,o);Yo.subVectors(t,s);const f=Yi.dot(Yo),g=Ki.dot(Yo);if(g>=0&&f<=g)return e.copy(s);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ki,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Tl.subVectors(s,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(Tl,a);const p=1/(m+v+d);return o=v*p,a=d*p,e.copy(n).addScaledVector(Yi,o).addScaledVector(Ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function Zo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class _t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=qt.workingColorSpace){if(t=Ic(t,1),e=Le(e,0,1),n=Le(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Zo(o,s,t+1/3),this.g=Zo(o,s,t),this.b=Zo(o,s,t-1/3)}return qt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ae){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){const n=Mu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return qt.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Le(Ve.r*255,0,255))*65536+Math.round(Le(Ve.g*255,0,255))*256+Math.round(Le(Ve.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Ve.copy(this),e);const n=Ve.r,i=Ve.g,s=Ve.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Ae){qt.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,i=Ve.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(Rr);const n=$s(li.h,Rr.h,e),i=$s(li.s,Rr.s,e),s=$s(li.l,Rr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new _t;_t.NAMES=Mu;let Cf=0;class Rn extends Ui{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=_n(),this.name="",this.blending=ls,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=ba,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ta&&(n.blendSrc=this.blendSrc),this.blendDst!==ba&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class It extends Rn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new E,Cr=new tt;class Ce{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cc,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Cr.fromBufferAttribute(this,e),Cr.applyMatrix3(t),this.setXY(e,Cr.x,Cr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cc&&(t.usage=this.usage),t}}class Su extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wu extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Zt extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}}let If=0;const dn=new Dt,$o=new ge,qi=new E,on=new nn,Ns=new nn,Oe=new E;class ye extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vu(t)?wu:Su)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return $o.lookAt(t),$o.updateMatrix(),this.applyMatrix4($o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(on.min,Ns.min),on.expandByPoint(Oe),Oe.addVectors(on.max,Ns.max),on.expandByPoint(Oe)):(on.expandByPoint(Ns.min),on.expandByPoint(Ns.max))}on.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Oe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Oe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Oe.fromBufferAttribute(a,l),c&&(qi.fromBufferAttribute(t,l),Oe.add(qi)),i=Math.max(i,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new E,c[C]=new E;const l=new E,h=new E,u=new E,d=new tt,f=new tt,g=new tt,v=new E,m=new E;function p(C,S,M){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[C].add(v),a[S].add(v),a[M].add(v),c[C].add(m),c[S].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let C=0,S=_.length;C<S;++C){const M=_[C],P=M.start,O=M.count;for(let F=P,V=P+O;F<V;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const y=new E,x=new E,A=new E,b=new E;function R(C){A.fromBufferAttribute(i,C),b.copy(A);const S=a[C];y.copy(S),y.sub(A.multiplyScalar(A.dot(S))).normalize(),x.crossVectors(b,S);const P=x.dot(c[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,P)}for(let C=0,S=_.length;C<S;++C){const M=_[C],P=M.start,O=M.count;for(let F=P,V=P+O;F<V;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new E,s=new E,o=new E,a=new E,c=new E,l=new E,h=new E,u=new E;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Ce(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bl=new Dt,yi=new To,Ir=new Nn,El=new E,Pr=new E,Lr=new E,Dr=new E,Jo=new E,Nr=new E,Al=new E,Ur=new E;class H extends ge{constructor(t=new ye,e=new It){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Nr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(Jo.fromBufferAttribute(u,t),o?Nr.addScaledVector(Jo,h):Nr.addScaledVector(Jo.sub(e),h))}e.add(Nr)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(s),yi.copy(t.ray).recast(t.near),!(Ir.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Ir,El)===null||yi.origin.distanceToSquared(El)>(t.far-t.near)**2))&&(bl.copy(s).invert(),yi.copy(t.ray).applyMatrix4(bl),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,A=y;x<A;x+=3){const b=a.getX(x),R=a.getX(x+1),C=a.getX(x+2);i=Or(this,p,t,n,l,h,u,b,R,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);i=Or(this,o,t,n,l,h,u,_,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,A=y;x<A;x+=3){const b=x,R=x+1,C=x+2;i=Or(this,p,t,n,l,h,u,b,R,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=m,y=m+1,x=m+2;i=Or(this,o,t,n,l,h,u,_,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Pf(r,t,e,n,i,s,o,a){let c;if(t.side===Ye?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===Dn,a),c===null)return null;Ur.copy(a),Ur.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Ur);return l<e.near||l>e.far?null:{distance:l,point:Ur.clone(),object:r}}function Or(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,Pr),r.getVertexPosition(c,Lr),r.getVertexPosition(l,Dr);const h=Pf(r,t,e,n,Pr,Lr,Dr,Al);if(h){const u=new E;mn.getBarycoord(Al,Pr,Lr,Dr,u),i&&(h.uv=mn.getInterpolatedAttribute(i,a,c,l,u,new tt)),s&&(h.uv1=mn.getInterpolatedAttribute(s,a,c,l,u,new tt)),o&&(h.normal=mn.getInterpolatedAttribute(o,a,c,l,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new E,materialIndex:0};mn.getNormal(Pr,Lr,Dr,d.normal),h.face=d,h.barycoord=u}return h}class xt extends ye{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function g(v,m,p,_,y,x,A,b,R,C,S){const M=x/R,P=A/C,O=x/2,F=A/2,V=b/2,q=R+1,G=C+1;let $=0,W=0;const st=new E;for(let ct=0;ct<G;ct++){const yt=ct*P-F;for(let Wt=0;Wt<q;Wt++){const fe=Wt*M-O;st[v]=fe*_,st[m]=yt*y,st[p]=V,l.push(st.x,st.y,st.z),st[v]=0,st[m]=0,st[p]=b>0?1:-1,h.push(st.x,st.y,st.z),u.push(Wt/R),u.push(1-ct/C),$+=1}}for(let ct=0;ct<C;ct++)for(let yt=0;yt<R;yt++){const Wt=d+yt+q*ct,fe=d+yt+q*(ct+1),K=d+(yt+1)+q*(ct+1),it=d+(yt+1)+q*ct;c.push(Wt,fe,it),c.push(fe,K,it),W+=6}a.addGroup(f,W,S),f+=W,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function qe(r){const t={};for(let e=0;e<r.length;e++){const n=xs(r[e]);for(const i in n)t[i]=n[i]}return t}function Lf(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Tu(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const cr={clone:xs,merge:qe};var Df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xe extends Rn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Df,this.fragmentShader=Nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=Lf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bu extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=$n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new E,Rl=new tt,Cl=new tt;class je extends bu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,Rl,Cl),e.subVectors(Cl,Rl)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ji=-90,Zi=1;class Uf extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new je(ji,Zi,t,e);i.layers=this.layers,this.add(i);const s=new je(ji,Zi,t,e);s.layers=this.layers,this.add(s);const o=new je(ji,Zi,t,e);o.layers=this.layers,this.add(o);const a=new je(ji,Zi,t,e);a.layers=this.layers,this.add(a);const c=new je(ji,Zi,t,e);c.layers=this.layers,this.add(c);const l=new je(ji,Zi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===$n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===po)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Eu extends De{constructor(t,e,n,i,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ps,super(t,e,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Of extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Eu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xt(5,5,5),s=new Xe({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:Qn});s.uniforms.tEquirect.value=e;const o=new H(i,s),a=e.minFilter;return e.minFilter===Zn&&(e.minFilter=an),new Uf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Qo=new E,Ff=new E,kf=new zt;class bi{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Qo.subVectors(n,e).cross(Ff.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Qo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||kf.getNormalMatrix(t),i=this.coplanarPoint(Qo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new Nn,Fr=new E;class Pc{constructor(t=new bi,e=new bi,n=new bi,i=new bi,s=new bi,o=new bi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$n){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],v=i[10],m=i[11],p=i[12],_=i[13],y=i[14],x=i[15];if(n[0].setComponents(c-s,d-l,m-f,x-p).normalize(),n[1].setComponents(c+s,d+l,m+f,x+p).normalize(),n[2].setComponents(c+o,d+h,m+g,x+_).normalize(),n[3].setComponents(c-o,d-h,m-g,x-_).normalize(),n[4].setComponents(c-a,d-u,m-v,x-y).normalize(),e===$n)n[5].setComponents(c+a,d+u,m+v,x+y).normalize();else if(e===po)n[5].setComponents(a,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Fr.x=i.normal.x>0?t.max.x:t.min.x,Fr.y=i.normal.y>0?t.max.y:t.min.y,Fr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Au(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Bf(r){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,a),u.length===0)r.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];r.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(r.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}class Pe extends ye{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const _=p*d-o;for(let y=0;y<l;y++){const x=y*u-s;g.push(x,-_,0),v.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){const y=_+l*p,x=_+l*(p+1),A=_+1+l*(p+1),b=_+1+l*p;f.push(y,x,b),f.push(x,A,b)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.width,t.height,t.widthSegments,t.heightSegments)}}var zf=`#ifdef USE_ALPHAHASH
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
#endif`,tp=`#ifdef USE_BUMPMAP
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
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gp="gl_FragColor = linearToOutputTexel( gl_FragColor );",vp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_p=`#ifdef USE_ENVMAP
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
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pp=`uniform bool receiveShadow;
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
#endif`,tm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,em=`#ifdef USE_MORPHTARGETS
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
gl_Position = projectionMatrix * mvPosition;`,vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_m=`#ifdef DITHERING
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
#endif`,Im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pm=`#if defined( TONE_MAPPING )
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
}`,t0=`uniform vec3 diffuse;
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
}`,e0=`#define LAMBERT
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
}`,v0=`uniform float rotation;
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
}`,_0=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:zf,alphahash_pars_fragment:Hf,alphamap_fragment:Vf,alphamap_pars_fragment:Gf,alphatest_fragment:Wf,alphatest_pars_fragment:Xf,aomap_fragment:Yf,aomap_pars_fragment:Kf,batching_pars_vertex:qf,batching_vertex:jf,begin_vertex:Zf,beginnormal_vertex:$f,bsdfs:Jf,iridescence_fragment:Qf,bumpmap_pars_fragment:tp,clipping_planes_fragment:ep,clipping_planes_pars_fragment:np,clipping_planes_pars_vertex:ip,clipping_planes_vertex:sp,color_fragment:rp,color_pars_fragment:op,color_pars_vertex:ap,color_vertex:cp,common:lp,cube_uv_reflection_fragment:hp,defaultnormal_vertex:up,displacementmap_pars_vertex:dp,displacementmap_vertex:fp,emissivemap_fragment:pp,emissivemap_pars_fragment:mp,colorspace_fragment:gp,colorspace_pars_fragment:vp,envmap_fragment:_p,envmap_common_pars_fragment:xp,envmap_pars_fragment:yp,envmap_pars_vertex:Mp,envmap_physical_pars_fragment:Lp,envmap_vertex:Sp,fog_vertex:wp,fog_pars_vertex:Tp,fog_fragment:bp,fog_pars_fragment:Ep,gradientmap_pars_fragment:Ap,lightmap_pars_fragment:Rp,lights_lambert_fragment:Cp,lights_lambert_pars_fragment:Ip,lights_pars_begin:Pp,lights_toon_fragment:Dp,lights_toon_pars_fragment:Np,lights_phong_fragment:Up,lights_phong_pars_fragment:Op,lights_physical_fragment:Fp,lights_physical_pars_fragment:kp,lights_fragment_begin:Bp,lights_fragment_maps:zp,lights_fragment_end:Hp,logdepthbuf_fragment:Vp,logdepthbuf_pars_fragment:Gp,logdepthbuf_pars_vertex:Wp,logdepthbuf_vertex:Xp,map_fragment:Yp,map_pars_fragment:Kp,map_particle_fragment:qp,map_particle_pars_fragment:jp,metalnessmap_fragment:Zp,metalnessmap_pars_fragment:$p,morphinstance_vertex:Jp,morphcolor_vertex:Qp,morphnormal_vertex:tm,morphtarget_pars_vertex:em,morphtarget_vertex:nm,normal_fragment_begin:im,normal_fragment_maps:sm,normal_pars_fragment:rm,normal_pars_vertex:om,normal_vertex:am,normalmap_pars_fragment:cm,clearcoat_normal_fragment_begin:lm,clearcoat_normal_fragment_maps:hm,clearcoat_pars_fragment:um,iridescence_pars_fragment:dm,opaque_fragment:fm,packing:pm,premultiplied_alpha_fragment:mm,project_vertex:gm,dithering_fragment:vm,dithering_pars_fragment:_m,roughnessmap_fragment:xm,roughnessmap_pars_fragment:ym,shadowmap_pars_fragment:Mm,shadowmap_pars_vertex:Sm,shadowmap_vertex:wm,shadowmask_pars_fragment:Tm,skinbase_vertex:bm,skinning_pars_vertex:Em,skinning_vertex:Am,skinnormal_vertex:Rm,specularmap_fragment:Cm,specularmap_pars_fragment:Im,tonemapping_fragment:Pm,tonemapping_pars_fragment:Lm,transmission_fragment:Dm,transmission_pars_fragment:Nm,uv_pars_fragment:Um,uv_pars_vertex:Om,uv_vertex:Fm,worldpos_vertex:km,background_vert:Bm,background_frag:zm,backgroundCube_vert:Hm,backgroundCube_frag:Vm,cube_vert:Gm,cube_frag:Wm,depth_vert:Xm,depth_frag:Ym,distanceRGBA_vert:Km,distanceRGBA_frag:qm,equirect_vert:jm,equirect_frag:Zm,linedashed_vert:$m,linedashed_frag:Jm,meshbasic_vert:Qm,meshbasic_frag:t0,meshlambert_vert:e0,meshlambert_frag:n0,meshmatcap_vert:i0,meshmatcap_frag:s0,meshnormal_vert:r0,meshnormal_frag:o0,meshphong_vert:a0,meshphong_frag:c0,meshphysical_vert:l0,meshphysical_frag:h0,meshtoon_vert:u0,meshtoon_frag:d0,points_vert:f0,points_frag:p0,shadow_vert:m0,shadow_frag:g0,sprite_vert:v0,sprite_frag:_0},rt={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},In={basic:{uniforms:qe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:qe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new _t(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:qe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:qe([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:qe([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new _t(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:qe([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:qe([rt.points,rt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:qe([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:qe([rt.common,rt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:qe([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:qe([rt.sprite,rt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:qe([rt.common,rt.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:qe([rt.lights,rt.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};In.physical={uniforms:qe([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const kr={r:0,b:0,g:0},Si=new ln,x0=new Dt;function y0(r,t,e,n,i,s,o){const a=new _t(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function v(_){let y=!1;const x=g(_);x===null?p(a,c):x&&x.isColor&&(p(x,1),y=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(_,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===So)?(h===void 0&&(h=new H(new xt(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:xs(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Si.copy(y.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(x0.makeRotationFromEuler(Si)),h.material.toneMapped=qt.getTransfer(x.colorSpace)!==le,(u!==x||d!==x.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new H(new Pe(2,2),new Xe({name:"BackgroundMaterial",uniforms:xs(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=qt.getTransfer(x.colorSpace)!==le,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,y){_.getRGB(kr,Tu(r)),n.buffers.color.setClear(kr.r,kr.g,kr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(a,c)},render:v,addToRenderList:m}}function M0(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(M,P,O,F,V){let q=!1;const G=u(F,O,P);s!==G&&(s=G,l(s.object)),q=f(M,F,O,V),q&&g(M,F,O,V),V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,x(M,P,O,F),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return r.createVertexArray()}function l(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function u(M,P,O){const F=O.wireframe===!0;let V=n[M.id];V===void 0&&(V={},n[M.id]=V);let q=V[P.id];q===void 0&&(q={},V[P.id]=q);let G=q[F];return G===void 0&&(G=d(c()),q[F]=G),G}function d(M){const P=[],O=[],F=[];for(let V=0;V<e;V++)P[V]=0,O[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:F,object:M,attributes:{},index:null}}function f(M,P,O,F){const V=s.attributes,q=P.attributes;let G=0;const $=O.getAttributes();for(const W in $)if($[W].location>=0){const ct=V[W];let yt=q[W];if(yt===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),ct===void 0||ct.attribute!==yt||yt&&ct.data!==yt.data)return!0;G++}return s.attributesNum!==G||s.index!==F}function g(M,P,O,F){const V={},q=P.attributes;let G=0;const $=O.getAttributes();for(const W in $)if($[W].location>=0){let ct=q[W];ct===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor));const yt={};yt.attribute=ct,ct&&ct.data&&(yt.data=ct.data),V[W]=yt,G++}s.attributes=V,s.attributesNum=G,s.index=F}function v(){const M=s.newAttributes;for(let P=0,O=M.length;P<O;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const O=s.newAttributes,F=s.enabledAttributes,V=s.attributeDivisors;O[M]=1,F[M]===0&&(r.enableVertexAttribArray(M),F[M]=1),V[M]!==P&&(r.vertexAttribDivisor(M,P),V[M]=P)}function _(){const M=s.newAttributes,P=s.enabledAttributes;for(let O=0,F=P.length;O<F;O++)P[O]!==M[O]&&(r.disableVertexAttribArray(O),P[O]=0)}function y(M,P,O,F,V,q,G){G===!0?r.vertexAttribIPointer(M,P,O,V,q):r.vertexAttribPointer(M,P,O,F,V,q)}function x(M,P,O,F){v();const V=F.attributes,q=O.getAttributes(),G=P.defaultAttributeValues;for(const $ in q){const W=q[$];if(W.location>=0){let st=V[$];if(st===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){const ct=st.normalized,yt=st.itemSize,Wt=t.get(st);if(Wt===void 0)continue;const fe=Wt.buffer,K=Wt.type,it=Wt.bytesPerElement,Tt=K===r.INT||K===r.UNSIGNED_INT||st.gpuType===Sc;if(st.isInterleavedBufferAttribute){const lt=st.data,Lt=lt.stride,Ot=st.offset;if(lt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<W.locationSize;Xt++)p(W.location+Xt,lt.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Xt=0;Xt<W.locationSize;Xt++)m(W.location+Xt);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let Xt=0;Xt<W.locationSize;Xt++)y(W.location+Xt,yt/W.locationSize,K,ct,Lt*it,(Ot+yt/W.locationSize*Xt)*it,Tt)}else{if(st.isInstancedBufferAttribute){for(let lt=0;lt<W.locationSize;lt++)p(W.location+lt,st.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let lt=0;lt<W.locationSize;lt++)m(W.location+lt);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let lt=0;lt<W.locationSize;lt++)y(W.location+lt,yt/W.locationSize,K,ct,yt*it,yt/W.locationSize*lt*it,Tt)}}else if(G!==void 0){const ct=G[$];if(ct!==void 0)switch(ct.length){case 2:r.vertexAttrib2fv(W.location,ct);break;case 3:r.vertexAttrib3fv(W.location,ct);break;case 4:r.vertexAttrib4fv(W.location,ct);break;default:r.vertexAttrib1fv(W.location,ct)}}}}_()}function A(){C();for(const M in n){const P=n[M];for(const O in P){const F=P[O];for(const V in F)h(F[V].object),delete F[V];delete P[O]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const O in P){const F=P[O];for(const V in F)h(F[V].object),delete F[V];delete P[O]}delete n[M.id]}function R(M){for(const P in n){const O=n[P];if(O[M.id]===void 0)continue;const F=O[M.id];for(const V in F)h(F[V].object),delete F[V];delete O[M.id]}}function C(){S(),o=!0,s!==i&&(s=i,l(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function S0(r,t,e){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function w0(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==vn&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const C=R===ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ni&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==En&&!C)}function c(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:A,maxSamples:b}}function T0(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new bi,a=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{const _=s?0:n,y=_*4;let x=p.clippingState||null;c.value=x,x=h(g,d,y,f);for(let A=0;A!==y;++A)x[A]=e[A];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==v;++y,x+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function b0(r){let t=new WeakMap;function e(o,a){return a===Da?o.mapping=ps:a===Na&&(o.mapping=ms),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Da||a===Na)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Of(c.height);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class bo extends bu{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const as=4,Il=[.125,.215,.35,.446,.526,.582],Ci=20,ta=new bo,Pl=new _t;let ea=null,na=0,ia=0,sa=!1;const Ei=(1+Math.sqrt(5))/2,$i=1/Ei,Ll=[new E(-Ei,$i,0),new E(Ei,$i,0),new E(-$i,0,Ei),new E($i,0,Ei),new E(0,Ei,-$i),new E(0,Ei,$i),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class lc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ea=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ea,na,ia),this._renderer.xr.enabled=sa,t.scissorTest=!1,Br(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ps||t.mapping===ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ea=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:ti,format:vn,colorSpace:Je,depthBuffer:!1},i=Dl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=E0(s)),this._blurMaterial=A0(s,t,e)}return i}_compileMaterial(t){const e=new H(this._lodPlanes[0],t);this._renderer.compile(e,ta)}_sceneToCubeUV(t,e,n,i){const a=new je(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Pl),h.toneMapping=mi,h.autoClear=!1;const f=new It({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),g=new H(new xt,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Pl),v=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):_===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;Br(i,_*y,p>2?y:0,y,y),h.setRenderTarget(i),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ps||t.mapping===ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new H(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Br(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ta)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ll[(i-s-1)%Ll.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new H(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ci-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):Ci;m>Ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ci}`);const p=[];let _=0;for(let R=0;R<Ci;++R){const C=R/v,S=Math.exp(-C*C/2);p.push(S),R===0?_+=S:R<m&&(_+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[i],A=3*x*(i>y-as?i-y+as:0),b=4*(this._cubeSize-x);Br(e,A,b,3*x,2*x),c.setRenderTarget(e),c.render(u,ta)}}function E0(r){const t=[],e=[],n=[];let i=r;const s=r-as+1+Il.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-as?c=Il[o-r+as-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let b=0;b<f;b++){const R=b%3*2/3-1,C=b>2?0:-1,S=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];_.set(S,v*g*b),y.set(d,m*g*b);const M=[b,b,b,b,b,b];x.set(M,p*g*b)}const A=new ye;A.setAttribute("position",new Ce(_,v)),A.setAttribute("uv",new Ce(y,m)),A.setAttribute("faceIndex",new Ce(x,p)),t.push(A),i>as&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Dl(r,t,e){const n=new An(r,t,e);return n.texture.mapping=So,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function A0(r,t,e){const n=new Float32Array(Ci),i=new E(0,1,0);return new Xe({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Nl(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Ul(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Lc(){return`

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
	`}function R0(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Da||c===Na,h=c===ps||c===ms;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new lc(r)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new lc(r)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function C0(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&qs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function I0(r,t,e,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],r.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const _=f.array;v=f.version;for(let y=0,x=_.length;y<x;y+=3){const A=_[y+0],b=_[y+1],R=_[y+2];d.push(A,b,b,R,R,A)}}else if(g!==void 0){const _=g.array;v=g.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const A=y+0,b=y+1,R=y+2;d.push(A,b,b,R,R,A)}}else return;const m=new(vu(d)?wu:Su)(d,1);m.version=v;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function P0(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,v,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*v[_];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function L0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function D0(r,t,e){const n=new WeakMap,i=new ie;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let x=a.attributes.position.count*y,A=1;x>t.maxTextureSize&&(A=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const b=new Float32Array(x*A*4*u),R=new xu(b,x,A,u);R.type=En,R.needsUpdate=!0;const C=y*4;for(let M=0;M<u;M++){const P=m[M],O=p[M],F=_[M],V=x*A*4*M;for(let q=0;q<P.count;q++){const G=q*C;f===!0&&(i.fromBufferAttribute(P,q),b[V+G+0]=i.x,b[V+G+1]=i.y,b[V+G+2]=i.z,b[V+G+3]=0),g===!0&&(i.fromBufferAttribute(O,q),b[V+G+4]=i.x,b[V+G+5]=i.y,b[V+G+6]=i.z,b[V+G+7]=0),v===!0&&(i.fromBufferAttribute(F,q),b[V+G+8]=i.x,b[V+G+9]=i.y,b[V+G+10]=i.z,b[V+G+11]=F.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new tt(x,A)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function N0(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class Ru extends De{constructor(t,e,n,i,s,o,a,c,l,h=hs){if(h!==hs&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hs&&(n=Pi),n===void 0&&h===vs&&(n=gs),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:$e,this.minFilter=c!==void 0?c:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Cu=new De,Ol=new Ru(1,1),Iu=new xu,Pu=new Mf,Lu=new Eu,Fl=[],kl=[],Bl=new Float32Array(16),zl=new Float32Array(9),Hl=new Float32Array(4);function Ts(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Fl[i];if(s===void 0&&(s=new Float32Array(i),Fl[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ne(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ue(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Eo(r,t){let e=kl[t];e===void 0&&(e=new Int32Array(t),kl[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function U0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function O0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2fv(this.addr,t),Ue(e,t)}}function F0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;r.uniform3fv(this.addr,t),Ue(e,t)}}function k0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4fv(this.addr,t),Ue(e,t)}}function B0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Hl.set(n),r.uniformMatrix2fv(this.addr,!1,Hl),Ue(e,n)}}function z0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;zl.set(n),r.uniformMatrix3fv(this.addr,!1,zl),Ue(e,n)}}function H0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Bl.set(n),r.uniformMatrix4fv(this.addr,!1,Bl),Ue(e,n)}}function V0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function G0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2iv(this.addr,t),Ue(e,t)}}function W0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;r.uniform3iv(this.addr,t),Ue(e,t)}}function X0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4iv(this.addr,t),Ue(e,t)}}function Y0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function K0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2uiv(this.addr,t),Ue(e,t)}}function q0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;r.uniform3uiv(this.addr,t),Ue(e,t)}}function j0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4uiv(this.addr,t),Ue(e,t)}}function Z0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ol.compareFunction=gu,s=Ol):s=Cu,e.setTexture2D(t||s,i)}function $0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Pu,i)}function J0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Lu,i)}function Q0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Iu,i)}function tg(r){switch(r){case 5126:return U0;case 35664:return O0;case 35665:return F0;case 35666:return k0;case 35674:return B0;case 35675:return z0;case 35676:return H0;case 5124:case 35670:return V0;case 35667:case 35671:return G0;case 35668:case 35672:return W0;case 35669:case 35673:return X0;case 5125:return Y0;case 36294:return K0;case 36295:return q0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return $0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return Q0}}function eg(r,t){r.uniform1fv(this.addr,t)}function ng(r,t){const e=Ts(t,this.size,2);r.uniform2fv(this.addr,e)}function ig(r,t){const e=Ts(t,this.size,3);r.uniform3fv(this.addr,e)}function sg(r,t){const e=Ts(t,this.size,4);r.uniform4fv(this.addr,e)}function rg(r,t){const e=Ts(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function og(r,t){const e=Ts(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function ag(r,t){const e=Ts(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function cg(r,t){r.uniform1iv(this.addr,t)}function lg(r,t){r.uniform2iv(this.addr,t)}function hg(r,t){r.uniform3iv(this.addr,t)}function ug(r,t){r.uniform4iv(this.addr,t)}function dg(r,t){r.uniform1uiv(this.addr,t)}function fg(r,t){r.uniform2uiv(this.addr,t)}function pg(r,t){r.uniform3uiv(this.addr,t)}function mg(r,t){r.uniform4uiv(this.addr,t)}function gg(r,t,e){const n=this.cache,i=t.length,s=Eo(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Cu,s[o])}function vg(r,t,e){const n=this.cache,i=t.length,s=Eo(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Pu,s[o])}function _g(r,t,e){const n=this.cache,i=t.length,s=Eo(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Lu,s[o])}function xg(r,t,e){const n=this.cache,i=t.length,s=Eo(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Iu,s[o])}function yg(r){switch(r){case 5126:return eg;case 35664:return ng;case 35665:return ig;case 35666:return sg;case 35674:return rg;case 35675:return og;case 35676:return ag;case 5124:case 35670:return cg;case 35667:case 35671:return lg;case 35668:case 35672:return hg;case 35669:case 35673:return ug;case 5125:return dg;case 36294:return fg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return xg}}class Mg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=tg(e.type)}}class Sg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=yg(e.type)}}class wg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const ra=/(\w+)(\])?(\[|\.)?/g;function Vl(r,t){r.seq.push(t),r.map[t.id]=t}function Tg(r,t,e){const n=r.name,i=n.length;for(ra.lastIndex=0;;){const s=ra.exec(n),o=ra.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Vl(e,l===void 0?new Mg(a,r,t):new Sg(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new wg(a),Vl(e,u)),e=u}}}class ho{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Tg(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Gl(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const bg=37297;let Eg=0;function Ag(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Wl=new zt;function Rg(r){qt._getMatrix(Wl,qt.workingColorSpace,r);const t=`mat3( ${Wl.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(r)){case wo:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Xl(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Ag(r.getShaderSource(t),o)}else return i}function Cg(r,t){const e=Rg(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ig(r,t){let e;switch(t){case Zh:e="Linear";break;case $h:e="Reinhard";break;case Jh:e="Cineon";break;case Mc:e="ACESFilmic";break;case Qh:e="AgX";break;case tu:e="Neutral";break;case Ud:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zr=new E;function Pg(){qt.getLuminanceCoefficients(zr);const r=zr.x.toFixed(4),t=zr.y.toFixed(4),e=zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function Dg(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ng(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function js(r){return r!==""}function Yl(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kl(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(r){return r.replace(Ug,Fg)}const Og=new Map;function Fg(r,t){let e=Vt[t];if(e===void 0){const n=Og.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return hc(e)}const kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ql(r){return r.replace(kg,Bg)}function Bg(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function jl(r){let t=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function zg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Kh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===qh?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function Hg(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ps:case ms:t="ENVMAP_TYPE_CUBE";break;case So:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ms:t="ENVMAP_MODE_REFRACTION";break}return t}function Gg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case jh:t="ENVMAP_BLENDING_MULTIPLY";break;case Dd:t="ENVMAP_BLENDING_MIX";break;case Nd:t="ENVMAP_BLENDING_ADD";break}return t}function Wg(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Xg(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=zg(e),l=Hg(e),h=Vg(e),u=Gg(e),d=Wg(e),f=Lg(e),g=Dg(s),v=i.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),p.length>0&&(p+=`
`)):(m=[jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),p=[jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?Vt.tonemapping_pars_fragment:"",e.toneMapping!==mi?Ig("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Cg("linearToOutputTexel",e.outputColorSpace),Pg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(js).join(`
`)),o=hc(o),o=Yl(o,e),o=Kl(o,e),a=hc(a),a=Yl(a,e),a=Kl(a,e),o=ql(o),a=ql(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+m+o,x=_+p+a,A=Gl(i,i.VERTEX_SHADER,y),b=Gl(i,i.FRAGMENT_SHADER,x);i.attachShader(v,A),i.attachShader(v,b),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function R(P){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(v).trim(),F=i.getShaderInfoLog(A).trim(),V=i.getShaderInfoLog(b).trim();let q=!0,G=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,A,b);else{const $=Xl(i,A,"vertex"),W=Xl(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+$+`
`+W)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||V==="")&&(G=!1);G&&(P.diagnostics={runnable:q,programLog:O,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(A),i.deleteShader(b),C=new ho(i,v),S=Ng(i,v)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,bg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Eg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=b,this}let Yg=0;class Kg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new qg(t),e.set(t,n)),n}}class qg{constructor(t){this.id=Yg++,this.code=t,this.usedTimes=0}}function jg(r,t,e,n,i,s,o){const a=new yu,c=new Kg,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,P,O,F){const V=O.fog,q=F.geometry,G=S.isMeshStandardMaterial?O.environment:null,$=(S.isMeshStandardMaterial?e:t).get(S.envMap||G),W=$&&$.mapping===So?$.image.height:null,st=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,yt=ct!==void 0?ct.length:0;let Wt=0;q.morphAttributes.position!==void 0&&(Wt=1),q.morphAttributes.normal!==void 0&&(Wt=2),q.morphAttributes.color!==void 0&&(Wt=3);let fe,K,it,Tt;if(st){const ce=In[st];fe=ce.vertexShader,K=ce.fragmentShader}else fe=S.vertexShader,K=S.fragmentShader,c.update(S),it=c.getVertexShaderID(S),Tt=c.getFragmentShaderID(S);const lt=r.getRenderTarget(),Lt=r.state.buffers.depth.getReversed(),Ot=F.isInstancedMesh===!0,Xt=F.isBatchedMesh===!0,Se=!!S.map,te=!!S.matcap,Re=!!$,U=!!S.aoMap,hn=!!S.lightMap,$t=!!S.bumpMap,Jt=!!S.normalMap,Ct=!!S.displacementMap,ve=!!S.emissiveMap,At=!!S.metalnessMap,I=!!S.roughnessMap,w=S.anisotropy>0,k=S.clearcoat>0,j=S.dispersion>0,J=S.iridescence>0,Y=S.sheen>0,bt=S.transmission>0,ht=w&&!!S.anisotropyMap,mt=k&&!!S.clearcoatMap,ee=k&&!!S.clearcoatNormalMap,et=k&&!!S.clearcoatRoughnessMap,gt=J&&!!S.iridescenceMap,Pt=J&&!!S.iridescenceThicknessMap,Nt=Y&&!!S.sheenColorMap,vt=Y&&!!S.sheenRoughnessMap,Qt=!!S.specularMap,Ht=!!S.specularColorMap,pe=!!S.specularIntensityMap,L=bt&&!!S.transmissionMap,at=bt&&!!S.thicknessMap,X=!!S.gradientMap,Z=!!S.alphaMap,pt=S.alphaTest>0,ut=!!S.alphaHash,kt=!!S.extensions;let Ee=mi;S.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Ee=r.toneMapping);const ze={shaderID:st,shaderType:S.type,shaderName:S.name,vertexShader:fe,fragmentShader:K,defines:S.defines,customVertexShaderID:it,customFragmentShaderID:Tt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Xt,batchingColor:Xt&&F._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&F.instanceColor!==null,instancingMorph:Ot&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?r.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Je,alphaToCoverage:!!S.alphaToCoverage,map:Se,matcap:te,envMap:Re,envMapMode:Re&&$.mapping,envMapCubeUVHeight:W,aoMap:U,lightMap:hn,bumpMap:$t,normalMap:Jt,displacementMap:d&&Ct,emissiveMap:ve,normalMapObjectSpace:Jt&&S.normalMapType===Vd,normalMapTangentSpace:Jt&&S.normalMapType===mu,metalnessMap:At,roughnessMap:I,anisotropy:w,anisotropyMap:ht,clearcoat:k,clearcoatMap:mt,clearcoatNormalMap:ee,clearcoatRoughnessMap:et,dispersion:j,iridescence:J,iridescenceMap:gt,iridescenceThicknessMap:Pt,sheen:Y,sheenColorMap:Nt,sheenRoughnessMap:vt,specularMap:Qt,specularColorMap:Ht,specularIntensityMap:pe,transmission:bt,transmissionMap:L,thicknessMap:at,gradientMap:X,opaque:S.transparent===!1&&S.blending===ls&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:pt,alphaHash:ut,combine:S.combine,mapUv:Se&&v(S.map.channel),aoMapUv:U&&v(S.aoMap.channel),lightMapUv:hn&&v(S.lightMap.channel),bumpMapUv:$t&&v(S.bumpMap.channel),normalMapUv:Jt&&v(S.normalMap.channel),displacementMapUv:Ct&&v(S.displacementMap.channel),emissiveMapUv:ve&&v(S.emissiveMap.channel),metalnessMapUv:At&&v(S.metalnessMap.channel),roughnessMapUv:I&&v(S.roughnessMap.channel),anisotropyMapUv:ht&&v(S.anisotropyMap.channel),clearcoatMapUv:mt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ee&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:vt&&v(S.sheenRoughnessMap.channel),specularMapUv:Qt&&v(S.specularMap.channel),specularColorMapUv:Ht&&v(S.specularColorMap.channel),specularIntensityMapUv:pe&&v(S.specularIntensityMap.channel),transmissionMapUv:L&&v(S.transmissionMap.channel),thicknessMapUv:at&&v(S.thicknessMap.channel),alphaMapUv:Z&&v(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Jt||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!q.attributes.uv&&(Se||Z),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Lt,skinning:F.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Wt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Se&&S.map.isVideoTexture===!0&&qt.getTransfer(S.map.colorSpace)===le,decodeVideoTextureEmissive:ve&&S.emissiveMap.isVideoTexture===!0&&qt.getTransfer(S.emissiveMap.colorSpace)===le,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Fe,flipSided:S.side===Ye,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:kt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&S.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(_(M,S),y(M,S),M.push(r.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function _(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const M=g[S.type];let P;if(M){const O=In[M];P=cr.clone(O.uniforms)}else P=S.uniforms;return P}function A(S,M){let P;for(let O=0,F=h.length;O<F;O++){const V=h[O];if(V.cacheKey===M){P=V,++P.usedTimes;break}}return P===void 0&&(P=new Xg(r,M,S,s),h.push(P)),P}function b(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function R(S){c.remove(S)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:b,releaseShaderCache:R,programs:h,dispose:C}}function Zg(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function $g(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Zl(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function $l(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,v,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function a(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||$g),n.length>1&&n.sort(d||Zl),i.length>1&&i.sort(d||Zl)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function Jg(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new $l,r.set(n,[o])):i>=s.length?(o=new $l,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Qg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new _t};break;case"SpotLight":e={position:new E,direction:new E,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new _t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":e={color:new _t,position:new E,halfWidth:new E,halfHeight:new E};break}return r[t.id]=e,e}}}function tv(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let ev=0;function nv(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function iv(r){const t=new Qg,e=tv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new E);const i=new E,s=new Dt,o=new Dt;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,_=0,y=0,x=0,A=0,b=0,R=0;l.sort(nv);for(let S=0,M=l.length;S<M;S++){const P=l[S],O=P.color,F=P.intensity,V=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*F,u+=O.g*F,d+=O.b*F;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],F);R++}else if(P.isDirectionalLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,W=e.get(P);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=P.shadow.matrix,_++}n.directional[f]=G,f++}else if(P.isSpotLight){const G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(O).multiplyScalar(F),G.distance=V,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[v]=G;const $=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,$.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[v]=$.matrix,P.castShadow){const W=e.get(P);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=q,x++}v++}else if(P.isRectAreaLight){const G=t.get(P);G.color.copy(O).multiplyScalar(F),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const $=P.shadow,W=e.get(P);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=G,g++}else if(P.isHemisphereLight){const G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(F),G.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=G,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==_||C.numPointShadows!==y||C.numSpotShadows!==x||C.numSpotMaps!==A||C.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,C.directionalLength=f,C.pointLength=g,C.spotLength=v,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=_,C.numPointShadows=y,C.numSpotShadows=x,C.numSpotMaps=A,C.numLightProbes=R,n.version=ev++)}function c(l,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){const y=l[p];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function Jl(r){const t=new iv(r),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function sv(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Jl(r),t.set(i,[a])):s>=o.length?(a=new Jl(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class rv extends Rn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ov extends Rn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const av=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cv=`uniform sampler2D shadow_pass;
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
}`;function lv(r,t,e){let n=new Pc;const i=new tt,s=new tt,o=new ie,a=new rv({depthPacking:Hd}),c=new ov,l={},h=e.maxTextureSize,u={[Dn]:Ye,[Ye]:Dn,[Fe]:Fe},d=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:av,fragmentShader:cv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ye;g.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new H(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kh;let p=this.type;this.render=function(b,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const S=r.getRenderTarget(),M=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),O=r.state;O.setBlending(Qn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=p!==Yn&&this.type===Yn,V=p===Yn&&this.type!==Yn;for(let q=0,G=b.length;q<G;q++){const $=b[q],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const st=W.getFrameExtents();if(i.multiply(st),s.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/st.x),i.x=s.x*st.x,W.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/st.y),i.y=s.y*st.y,W.mapSize.y=s.y)),W.map===null||F===!0||V===!0){const yt=this.type!==Yn?{minFilter:$e,magFilter:$e}:{};W.map!==null&&W.map.dispose(),W.map=new An(i.x,i.y,yt),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const ct=W.getViewportCount();for(let yt=0;yt<ct;yt++){const Wt=W.getViewport(yt);o.set(s.x*Wt.x,s.y*Wt.y,s.x*Wt.z,s.y*Wt.w),O.viewport(o),W.updateMatrices($,yt),n=W.getFrustum(),x(R,C,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===Yn&&_(W,C),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,M,P)};function _(b,R){const C=t.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new An(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(R,null,C,d,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(R,null,C,f,v,null)}function y(b,R,C,S){let M=null;const P=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)M=P;else if(M=C.isPointLight===!0?c:a,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const O=M.uuid,F=R.uuid;let V=l[O];V===void 0&&(V={},l[O]=V);let q=V[F];q===void 0&&(q=M.clone(),V[F]=q,R.addEventListener("dispose",A)),M=q}if(M.visible=R.visible,M.wireframe=R.wireframe,S===Yn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=r.properties.get(M);O.light=C}return M}function x(b,R,C,S,M){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Yn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const F=t.update(b),V=b.material;if(Array.isArray(V)){const q=F.groups;for(let G=0,$=q.length;G<$;G++){const W=q[G],st=V[W.materialIndex];if(st&&st.visible){const ct=y(b,st,S,M);b.onBeforeShadow(r,b,R,C,F,ct,W),r.renderBufferDirect(C,null,F,ct,b,W),b.onAfterShadow(r,b,R,C,F,ct,W)}}}else if(V.visible){const q=y(b,V,S,M);b.onBeforeShadow(r,b,R,C,F,q,null),r.renderBufferDirect(C,null,F,q,b,null),b.onAfterShadow(r,b,R,C,F,q,null)}}const O=b.children;for(let F=0,V=O.length;F<V;F++)x(O[F],R,C,S,M)}function A(b){b.target.removeEventListener("dispose",A);for(const C in l){const S=l[C],M=b.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const hv={[Ea]:Aa,[Ra]:Pa,[Ca]:La,[fs]:Ia,[Aa]:Ea,[Pa]:Ra,[La]:Ca,[Ia]:fs};function uv(r,t){function e(){let L=!1;const at=new ie;let X=null;const Z=new ie(0,0,0,0);return{setMask:function(pt){X!==pt&&!L&&(r.colorMask(pt,pt,pt,pt),X=pt)},setLocked:function(pt){L=pt},setClear:function(pt,ut,kt,Ee,ze){ze===!0&&(pt*=Ee,ut*=Ee,kt*=Ee),at.set(pt,ut,kt,Ee),Z.equals(at)===!1&&(r.clearColor(pt,ut,kt,Ee),Z.copy(at))},reset:function(){L=!1,X=null,Z.set(-1,0,0,0)}}}function n(){let L=!1,at=!1,X=null,Z=null,pt=null;return{setReversed:function(ut){if(at!==ut){const kt=t.get("EXT_clip_control");at?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);const Ee=pt;pt=null,this.setClear(Ee)}at=ut},getReversed:function(){return at},setTest:function(ut){ut?lt(r.DEPTH_TEST):Lt(r.DEPTH_TEST)},setMask:function(ut){X!==ut&&!L&&(r.depthMask(ut),X=ut)},setFunc:function(ut){if(at&&(ut=hv[ut]),Z!==ut){switch(ut){case Ea:r.depthFunc(r.NEVER);break;case Aa:r.depthFunc(r.ALWAYS);break;case Ra:r.depthFunc(r.LESS);break;case fs:r.depthFunc(r.LEQUAL);break;case Ca:r.depthFunc(r.EQUAL);break;case Ia:r.depthFunc(r.GEQUAL);break;case Pa:r.depthFunc(r.GREATER);break;case La:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=ut}},setLocked:function(ut){L=ut},setClear:function(ut){pt!==ut&&(at&&(ut=1-ut),r.clearDepth(ut),pt=ut)},reset:function(){L=!1,X=null,Z=null,pt=null,at=!1}}}function i(){let L=!1,at=null,X=null,Z=null,pt=null,ut=null,kt=null,Ee=null,ze=null;return{setTest:function(ce){L||(ce?lt(r.STENCIL_TEST):Lt(r.STENCIL_TEST))},setMask:function(ce){at!==ce&&!L&&(r.stencilMask(ce),at=ce)},setFunc:function(ce,xn,kn){(X!==ce||Z!==xn||pt!==kn)&&(r.stencilFunc(ce,xn,kn),X=ce,Z=xn,pt=kn)},setOp:function(ce,xn,kn){(ut!==ce||kt!==xn||Ee!==kn)&&(r.stencilOp(ce,xn,kn),ut=ce,kt=xn,Ee=kn)},setLocked:function(ce){L=ce},setClear:function(ce){ze!==ce&&(r.clearStencil(ce),ze=ce)},reset:function(){L=!1,at=null,X=null,Z=null,pt=null,ut=null,kt=null,Ee=null,ze=null}}}const s=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,y=null,x=null,A=null,b=null,R=new _t(0,0,0),C=0,S=!1,M=null,P=null,O=null,F=null,V=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,$=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=$>=2);let st=null,ct={};const yt=r.getParameter(r.SCISSOR_BOX),Wt=r.getParameter(r.VIEWPORT),fe=new ie().fromArray(yt),K=new ie().fromArray(Wt);function it(L,at,X,Z){const pt=new Uint8Array(4),ut=r.createTexture();r.bindTexture(L,ut),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let kt=0;kt<X;kt++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(at,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,pt):r.texImage2D(at+kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,pt);return ut}const Tt={};Tt[r.TEXTURE_2D]=it(r.TEXTURE_2D,r.TEXTURE_2D,1),Tt[r.TEXTURE_CUBE_MAP]=it(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[r.TEXTURE_2D_ARRAY]=it(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Tt[r.TEXTURE_3D]=it(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(r.DEPTH_TEST),o.setFunc(fs),$t(!1),Jt(il),lt(r.CULL_FACE),U(Qn);function lt(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function Lt(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function Ot(L,at){return u[L]!==at?(r.bindFramebuffer(L,at),u[L]=at,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=at),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=at),!0):!1}function Xt(L,at){let X=f,Z=!1;if(L){X=d.get(at),X===void 0&&(X=[],d.set(at,X));const pt=L.textures;if(X.length!==pt.length||X[0]!==r.COLOR_ATTACHMENT0){for(let ut=0,kt=pt.length;ut<kt;ut++)X[ut]=r.COLOR_ATTACHMENT0+ut;X.length=pt.length,Z=!0}}else X[0]!==r.BACK&&(X[0]=r.BACK,Z=!0);Z&&r.drawBuffers(X)}function Se(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const te={[Ai]:r.FUNC_ADD,[gd]:r.FUNC_SUBTRACT,[vd]:r.FUNC_REVERSE_SUBTRACT};te[_d]=r.MIN,te[xd]=r.MAX;const Re={[yd]:r.ZERO,[Md]:r.ONE,[Sd]:r.SRC_COLOR,[Ta]:r.SRC_ALPHA,[Rd]:r.SRC_ALPHA_SATURATE,[Ed]:r.DST_COLOR,[Td]:r.DST_ALPHA,[wd]:r.ONE_MINUS_SRC_COLOR,[ba]:r.ONE_MINUS_SRC_ALPHA,[Ad]:r.ONE_MINUS_DST_COLOR,[bd]:r.ONE_MINUS_DST_ALPHA,[Cd]:r.CONSTANT_COLOR,[Id]:r.ONE_MINUS_CONSTANT_COLOR,[Pd]:r.CONSTANT_ALPHA,[Ld]:r.ONE_MINUS_CONSTANT_ALPHA};function U(L,at,X,Z,pt,ut,kt,Ee,ze,ce){if(L===Qn){v===!0&&(Lt(r.BLEND),v=!1);return}if(v===!1&&(lt(r.BLEND),v=!0),L!==md){if(L!==m||ce!==S){if((p!==Ai||x!==Ai)&&(r.blendEquation(r.FUNC_ADD),p=Ai,x=Ai),ce)switch(L){case ls:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case we:r.blendFunc(r.ONE,r.ONE);break;case sl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ls:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case we:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case sl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}_=null,y=null,A=null,b=null,R.set(0,0,0),C=0,m=L,S=ce}return}pt=pt||at,ut=ut||X,kt=kt||Z,(at!==p||pt!==x)&&(r.blendEquationSeparate(te[at],te[pt]),p=at,x=pt),(X!==_||Z!==y||ut!==A||kt!==b)&&(r.blendFuncSeparate(Re[X],Re[Z],Re[ut],Re[kt]),_=X,y=Z,A=ut,b=kt),(Ee.equals(R)===!1||ze!==C)&&(r.blendColor(Ee.r,Ee.g,Ee.b,ze),R.copy(Ee),C=ze),m=L,S=!1}function hn(L,at){L.side===Fe?Lt(r.CULL_FACE):lt(r.CULL_FACE);let X=L.side===Ye;at&&(X=!X),$t(X),L.blending===ls&&L.transparent===!1?U(Qn):U(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const Z=L.stencilWrite;a.setTest(Z),Z&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ve(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?lt(r.SAMPLE_ALPHA_TO_COVERAGE):Lt(r.SAMPLE_ALPHA_TO_COVERAGE)}function $t(L){M!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),M=L)}function Jt(L){L!==fd?(lt(r.CULL_FACE),L!==P&&(L===il?r.cullFace(r.BACK):L===pd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Lt(r.CULL_FACE),P=L}function Ct(L){L!==O&&(G&&r.lineWidth(L),O=L)}function ve(L,at,X){L?(lt(r.POLYGON_OFFSET_FILL),(F!==at||V!==X)&&(r.polygonOffset(at,X),F=at,V=X)):Lt(r.POLYGON_OFFSET_FILL)}function At(L){L?lt(r.SCISSOR_TEST):Lt(r.SCISSOR_TEST)}function I(L){L===void 0&&(L=r.TEXTURE0+q-1),st!==L&&(r.activeTexture(L),st=L)}function w(L,at,X){X===void 0&&(st===null?X=r.TEXTURE0+q-1:X=st);let Z=ct[X];Z===void 0&&(Z={type:void 0,texture:void 0},ct[X]=Z),(Z.type!==L||Z.texture!==at)&&(st!==X&&(r.activeTexture(X),st=X),r.bindTexture(L,at||Tt[L]),Z.type=L,Z.texture=at)}function k(){const L=ct[st];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pt(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(L){fe.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),fe.copy(L))}function vt(L){K.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),K.copy(L))}function Qt(L,at){let X=l.get(at);X===void 0&&(X=new WeakMap,l.set(at,X));let Z=X.get(L);Z===void 0&&(Z=r.getUniformBlockIndex(at,L.name),X.set(L,Z))}function Ht(L,at){const Z=l.get(at).get(L);c.get(at)!==Z&&(r.uniformBlockBinding(at,Z,L.__bindingPointIndex),c.set(at,Z))}function pe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},st=null,ct={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,y=null,x=null,A=null,b=null,R=new _t(0,0,0),C=0,S=!1,M=null,P=null,O=null,F=null,V=null,fe.set(0,0,r.canvas.width,r.canvas.height),K.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:lt,disable:Lt,bindFramebuffer:Ot,drawBuffers:Xt,useProgram:Se,setBlending:U,setMaterial:hn,setFlipSided:$t,setCullFace:Jt,setLineWidth:Ct,setPolygonOffset:ve,setScissorTest:At,activeTexture:I,bindTexture:w,unbindTexture:k,compressedTexImage2D:j,compressedTexImage3D:J,texImage2D:gt,texImage3D:Pt,updateUBOMapping:Qt,uniformBlockBinding:Ht,texStorage2D:ee,texStorage3D:et,texSubImage2D:Y,texSubImage3D:bt,compressedTexSubImage2D:ht,compressedTexSubImage3D:mt,scissor:Nt,viewport:vt,reset:pe}}function Ql(r,t,e,n){const i=dv(n);switch(e){case ou:return r*t;case cu:return r*t;case lu:return r*t*2;case bc:return r*t/i.components*i.byteLength;case Ec:return r*t/i.components*i.byteLength;case hu:return r*t*2/i.components*i.byteLength;case Ac:return r*t*2/i.components*i.byteLength;case au:return r*t*3/i.components*i.byteLength;case vn:return r*t*4/i.components*i.byteLength;case Rc:return r*t*4/i.components*i.byteLength;case ro:case oo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ao:case co:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Oa:case ka:return Math.max(r,16)*Math.max(t,8)/4;case Ua:case Fa:return Math.max(r,8)*Math.max(t,8)/2;case Ba:case za:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ha:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case qa:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ja:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Za:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case $a:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case tc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case ec:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case lo:case nc:case ic:return Math.ceil(r/4)*Math.ceil(t/4)*16;case uu:case sc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case rc:case oc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dv(r){switch(r){case ni:case iu:return{byteLength:1,components:1};case sr:case su:case ti:return{byteLength:2,components:1};case wc:case Tc:return{byteLength:2,components:4};case Pi:case Sc:case En:return{byteLength:4,components:1};case ru:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function fv(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new tt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,w){return f?new OffscreenCanvas(I,w):ar("canvas")}function v(I,w,k){let j=1;const J=At(I);if((J.width>k||J.height>k)&&(j=k/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Y=Math.floor(j*J.width),bt=Math.floor(j*J.height);u===void 0&&(u=g(Y,bt));const ht=w?g(Y,bt):u;return ht.width=Y,ht.height=bt,ht.getContext("2d").drawImage(I,0,0,Y,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+bt+")."),ht}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){r.generateMipmap(I)}function _(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(I,w,k,j,J=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Y=w;if(w===r.RED&&(k===r.FLOAT&&(Y=r.R32F),k===r.HALF_FLOAT&&(Y=r.R16F),k===r.UNSIGNED_BYTE&&(Y=r.R8)),w===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.R8UI),k===r.UNSIGNED_SHORT&&(Y=r.R16UI),k===r.UNSIGNED_INT&&(Y=r.R32UI),k===r.BYTE&&(Y=r.R8I),k===r.SHORT&&(Y=r.R16I),k===r.INT&&(Y=r.R32I)),w===r.RG&&(k===r.FLOAT&&(Y=r.RG32F),k===r.HALF_FLOAT&&(Y=r.RG16F),k===r.UNSIGNED_BYTE&&(Y=r.RG8)),w===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RG8UI),k===r.UNSIGNED_SHORT&&(Y=r.RG16UI),k===r.UNSIGNED_INT&&(Y=r.RG32UI),k===r.BYTE&&(Y=r.RG8I),k===r.SHORT&&(Y=r.RG16I),k===r.INT&&(Y=r.RG32I)),w===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),k===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),k===r.UNSIGNED_INT&&(Y=r.RGB32UI),k===r.BYTE&&(Y=r.RGB8I),k===r.SHORT&&(Y=r.RGB16I),k===r.INT&&(Y=r.RGB32I)),w===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),k===r.UNSIGNED_INT&&(Y=r.RGBA32UI),k===r.BYTE&&(Y=r.RGBA8I),k===r.SHORT&&(Y=r.RGBA16I),k===r.INT&&(Y=r.RGBA32I)),w===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),w===r.RGBA){const bt=J?wo:qt.getTransfer(j);k===r.FLOAT&&(Y=r.RGBA32F),k===r.HALF_FLOAT&&(Y=r.RGBA16F),k===r.UNSIGNED_BYTE&&(Y=bt===le?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(I,w){let k;return I?w===null||w===Pi||w===gs?k=r.DEPTH24_STENCIL8:w===En?k=r.DEPTH32F_STENCIL8:w===sr&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Pi||w===gs?k=r.DEPTH_COMPONENT24:w===En?k=r.DEPTH_COMPONENT32F:w===sr&&(k=r.DEPTH_COMPONENT16),k}function A(I,w){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==$e&&I.minFilter!==an?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function b(I){const w=I.target;w.removeEventListener("dispose",b),C(w),w.isVideoTexture&&h.delete(w)}function R(I){const w=I.target;w.removeEventListener("dispose",R),M(w)}function C(I){const w=n.get(I);if(w.__webglInit===void 0)return;const k=I.source,j=d.get(k);if(j){const J=j[w.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(I),Object.keys(j).length===0&&d.delete(k)}n.remove(I)}function S(I){const w=n.get(I);r.deleteTexture(w.__webglTexture);const k=I.source,j=d.get(k);delete j[w.__cacheKey],o.memory.textures--}function M(I){const w=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(w.__webglFramebuffer[j]))for(let J=0;J<w.__webglFramebuffer[j].length;J++)r.deleteFramebuffer(w.__webglFramebuffer[j][J]);else r.deleteFramebuffer(w.__webglFramebuffer[j]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[j])}else{if(Array.isArray(w.__webglFramebuffer))for(let j=0;j<w.__webglFramebuffer.length;j++)r.deleteFramebuffer(w.__webglFramebuffer[j]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let j=0;j<w.__webglColorRenderbuffer.length;j++)w.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[j]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const k=I.textures;for(let j=0,J=k.length;j<J;j++){const Y=n.get(k[j]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(k[j])}n.remove(I)}let P=0;function O(){P=0}function F(){const I=P;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),P+=1,I}function V(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function q(I,w){const k=n.get(I);if(I.isVideoTexture&&Ct(I),I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){const j=I.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,I,w);return}}e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+w)}function G(I,w){const k=n.get(I);if(I.version>0&&k.__version!==I.version){K(k,I,w);return}e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+w)}function $(I,w){const k=n.get(I);if(I.version>0&&k.__version!==I.version){K(k,I,w);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+w)}function W(I,w){const k=n.get(I);if(I.version>0&&k.__version!==I.version){it(k,I,w);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+w)}const st={[tn]:r.REPEAT,[gn]:r.CLAMP_TO_EDGE,[ir]:r.MIRRORED_REPEAT},ct={[$e]:r.NEAREST,[nu]:r.NEAREST_MIPMAP_NEAREST,[Ks]:r.NEAREST_MIPMAP_LINEAR,[an]:r.LINEAR,[so]:r.LINEAR_MIPMAP_NEAREST,[Zn]:r.LINEAR_MIPMAP_LINEAR},yt={[Gd]:r.NEVER,[jd]:r.ALWAYS,[Wd]:r.LESS,[gu]:r.LEQUAL,[Xd]:r.EQUAL,[qd]:r.GEQUAL,[Yd]:r.GREATER,[Kd]:r.NOTEQUAL};function Wt(I,w){if(w.type===En&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===an||w.magFilter===so||w.magFilter===Ks||w.magFilter===Zn||w.minFilter===an||w.minFilter===so||w.minFilter===Ks||w.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,st[w.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,st[w.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,st[w.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,ct[w.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,ct[w.minFilter]),w.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,yt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===$e||w.minFilter!==Ks&&w.minFilter!==Zn||w.type===En&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function fe(I,w){let k=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",b));const j=w.source;let J=d.get(j);J===void 0&&(J={},d.set(j,J));const Y=V(w);if(Y!==I.__cacheKey){J[Y]===void 0&&(J[Y]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),J[Y].usedTimes++;const bt=J[I.__cacheKey];bt!==void 0&&(J[I.__cacheKey].usedTimes--,bt.usedTimes===0&&S(w)),I.__cacheKey=Y,I.__webglTexture=J[Y].texture}return k}function K(I,w,k){let j=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(j=r.TEXTURE_3D);const J=fe(I,w),Y=w.source;e.bindTexture(j,I.__webglTexture,r.TEXTURE0+k);const bt=n.get(Y);if(Y.version!==bt.__version||J===!0){e.activeTexture(r.TEXTURE0+k);const ht=qt.getPrimaries(qt.workingColorSpace),mt=w.colorSpace===Pn?null:qt.getPrimaries(w.colorSpace),ee=w.colorSpace===Pn||ht===mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let et=v(w.image,!1,i.maxTextureSize);et=ve(w,et);const gt=s.convert(w.format,w.colorSpace),Pt=s.convert(w.type);let Nt=y(w.internalFormat,gt,Pt,w.colorSpace,w.isVideoTexture);Wt(j,w);let vt;const Qt=w.mipmaps,Ht=w.isVideoTexture!==!0,pe=bt.__version===void 0||J===!0,L=Y.dataReady,at=A(w,et);if(w.isDepthTexture)Nt=x(w.format===vs,w.type),pe&&(Ht?e.texStorage2D(r.TEXTURE_2D,1,Nt,et.width,et.height):e.texImage2D(r.TEXTURE_2D,0,Nt,et.width,et.height,0,gt,Pt,null));else if(w.isDataTexture)if(Qt.length>0){Ht&&pe&&e.texStorage2D(r.TEXTURE_2D,at,Nt,Qt[0].width,Qt[0].height);for(let X=0,Z=Qt.length;X<Z;X++)vt=Qt[X],Ht?L&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,vt.width,vt.height,gt,Pt,vt.data):e.texImage2D(r.TEXTURE_2D,X,Nt,vt.width,vt.height,0,gt,Pt,vt.data);w.generateMipmaps=!1}else Ht?(pe&&e.texStorage2D(r.TEXTURE_2D,at,Nt,et.width,et.height),L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,et.width,et.height,gt,Pt,et.data)):e.texImage2D(r.TEXTURE_2D,0,Nt,et.width,et.height,0,gt,Pt,et.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ht&&pe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,at,Nt,Qt[0].width,Qt[0].height,et.depth);for(let X=0,Z=Qt.length;X<Z;X++)if(vt=Qt[X],w.format!==vn)if(gt!==null)if(Ht){if(L)if(w.layerUpdates.size>0){const pt=Ql(vt.width,vt.height,w.format,w.type);for(const ut of w.layerUpdates){const kt=vt.data.subarray(ut*pt/vt.data.BYTES_PER_ELEMENT,(ut+1)*pt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,ut,vt.width,vt.height,1,gt,kt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,vt.width,vt.height,et.depth,gt,vt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,X,Nt,vt.width,vt.height,et.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?L&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,vt.width,vt.height,et.depth,gt,Pt,vt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,X,Nt,vt.width,vt.height,et.depth,0,gt,Pt,vt.data)}else{Ht&&pe&&e.texStorage2D(r.TEXTURE_2D,at,Nt,Qt[0].width,Qt[0].height);for(let X=0,Z=Qt.length;X<Z;X++)vt=Qt[X],w.format!==vn?gt!==null?Ht?L&&e.compressedTexSubImage2D(r.TEXTURE_2D,X,0,0,vt.width,vt.height,gt,vt.data):e.compressedTexImage2D(r.TEXTURE_2D,X,Nt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?L&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,vt.width,vt.height,gt,Pt,vt.data):e.texImage2D(r.TEXTURE_2D,X,Nt,vt.width,vt.height,0,gt,Pt,vt.data)}else if(w.isDataArrayTexture)if(Ht){if(pe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,at,Nt,et.width,et.height,et.depth),L)if(w.layerUpdates.size>0){const X=Ql(et.width,et.height,w.format,w.type);for(const Z of w.layerUpdates){const pt=et.data.subarray(Z*X/et.data.BYTES_PER_ELEMENT,(Z+1)*X/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,et.width,et.height,1,gt,Pt,pt)}w.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,gt,Pt,et.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Nt,et.width,et.height,et.depth,0,gt,Pt,et.data);else if(w.isData3DTexture)Ht?(pe&&e.texStorage3D(r.TEXTURE_3D,at,Nt,et.width,et.height,et.depth),L&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,gt,Pt,et.data)):e.texImage3D(r.TEXTURE_3D,0,Nt,et.width,et.height,et.depth,0,gt,Pt,et.data);else if(w.isFramebufferTexture){if(pe)if(Ht)e.texStorage2D(r.TEXTURE_2D,at,Nt,et.width,et.height);else{let X=et.width,Z=et.height;for(let pt=0;pt<at;pt++)e.texImage2D(r.TEXTURE_2D,pt,Nt,X,Z,0,gt,Pt,null),X>>=1,Z>>=1}}else if(Qt.length>0){if(Ht&&pe){const X=At(Qt[0]);e.texStorage2D(r.TEXTURE_2D,at,Nt,X.width,X.height)}for(let X=0,Z=Qt.length;X<Z;X++)vt=Qt[X],Ht?L&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,gt,Pt,vt):e.texImage2D(r.TEXTURE_2D,X,Nt,gt,Pt,vt);w.generateMipmaps=!1}else if(Ht){if(pe){const X=At(et);e.texStorage2D(r.TEXTURE_2D,at,Nt,X.width,X.height)}L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,gt,Pt,et)}else e.texImage2D(r.TEXTURE_2D,0,Nt,gt,Pt,et);m(w)&&p(j),bt.__version=Y.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function it(I,w,k){if(w.image.length!==6)return;const j=fe(I,w),J=w.source;e.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+k);const Y=n.get(J);if(J.version!==Y.__version||j===!0){e.activeTexture(r.TEXTURE0+k);const bt=qt.getPrimaries(qt.workingColorSpace),ht=w.colorSpace===Pn?null:qt.getPrimaries(w.colorSpace),mt=w.colorSpace===Pn||bt===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const ee=w.isCompressedTexture||w.image[0].isCompressedTexture,et=w.image[0]&&w.image[0].isDataTexture,gt=[];for(let Z=0;Z<6;Z++)!ee&&!et?gt[Z]=v(w.image[Z],!0,i.maxCubemapSize):gt[Z]=et?w.image[Z].image:w.image[Z],gt[Z]=ve(w,gt[Z]);const Pt=gt[0],Nt=s.convert(w.format,w.colorSpace),vt=s.convert(w.type),Qt=y(w.internalFormat,Nt,vt,w.colorSpace),Ht=w.isVideoTexture!==!0,pe=Y.__version===void 0||j===!0,L=J.dataReady;let at=A(w,Pt);Wt(r.TEXTURE_CUBE_MAP,w);let X;if(ee){Ht&&pe&&e.texStorage2D(r.TEXTURE_CUBE_MAP,at,Qt,Pt.width,Pt.height);for(let Z=0;Z<6;Z++){X=gt[Z].mipmaps;for(let pt=0;pt<X.length;pt++){const ut=X[pt];w.format!==vn?Nt!==null?Ht?L&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,0,0,ut.width,ut.height,Nt,ut.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,Qt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,0,0,ut.width,ut.height,Nt,vt,ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,Qt,ut.width,ut.height,0,Nt,vt,ut.data)}}}else{if(X=w.mipmaps,Ht&&pe){X.length>0&&at++;const Z=At(gt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,at,Qt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(et){Ht?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,gt[Z].width,gt[Z].height,Nt,vt,gt[Z].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Qt,gt[Z].width,gt[Z].height,0,Nt,vt,gt[Z].data);for(let pt=0;pt<X.length;pt++){const kt=X[pt].image[Z].image;Ht?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,0,0,kt.width,kt.height,Nt,vt,kt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,Qt,kt.width,kt.height,0,Nt,vt,kt.data)}}else{Ht?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Nt,vt,gt[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Qt,Nt,vt,gt[Z]);for(let pt=0;pt<X.length;pt++){const ut=X[pt];Ht?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,0,0,Nt,vt,ut.image[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,Qt,Nt,vt,ut.image[Z])}}}m(w)&&p(r.TEXTURE_CUBE_MAP),Y.__version=J.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Tt(I,w,k,j,J,Y){const bt=s.convert(k.format,k.colorSpace),ht=s.convert(k.type),mt=y(k.internalFormat,bt,ht,k.colorSpace),ee=n.get(w),et=n.get(k);if(et.__renderTarget=w,!ee.__hasExternalTextures){const gt=Math.max(1,w.width>>Y),Pt=Math.max(1,w.height>>Y);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,mt,gt,Pt,w.depth,0,bt,ht,null):e.texImage2D(J,Y,mt,gt,Pt,0,bt,ht,null)}e.bindFramebuffer(r.FRAMEBUFFER,I),Jt(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,J,et.__webglTexture,0,$t(w)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,J,et.__webglTexture,Y),e.bindFramebuffer(r.FRAMEBUFFER,null)}function lt(I,w,k){if(r.bindRenderbuffer(r.RENDERBUFFER,I),w.depthBuffer){const j=w.depthTexture,J=j&&j.isDepthTexture?j.type:null,Y=x(w.stencilBuffer,J),bt=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=$t(w);Jt(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ht,Y,w.width,w.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,ht,Y,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Y,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,I)}else{const j=w.textures;for(let J=0;J<j.length;J++){const Y=j[J],bt=s.convert(Y.format,Y.colorSpace),ht=s.convert(Y.type),mt=y(Y.internalFormat,bt,ht,Y.colorSpace),ee=$t(w);k&&Jt(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,mt,w.width,w.height):Jt(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee,mt,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,mt,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Lt(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(w.depthTexture);j.__renderTarget=w,(!j.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),q(w.depthTexture,0);const J=j.__webglTexture,Y=$t(w);if(w.depthTexture.format===hs)Jt(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(w.depthTexture.format===vs)Jt(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ot(I){const w=n.get(I),k=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const j=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),j){const J=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),w.__depthDisposeCallback=J}w.__boundDepthTexture=j}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Lt(w.__webglFramebuffer,I)}else if(k){w.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[j]),w.__webglDepthbuffer[j]===void 0)w.__webglDepthbuffer[j]=r.createRenderbuffer(),lt(w.__webglDepthbuffer[j],I,!1);else{const J=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=w.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),lt(w.__webglDepthbuffer,I,!1);else{const j=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,J)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Xt(I,w,k){const j=n.get(I);w!==void 0&&Tt(j.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Ot(I)}function Se(I){const w=I.texture,k=n.get(I),j=n.get(w);I.addEventListener("dispose",R);const J=I.textures,Y=I.isWebGLCubeRenderTarget===!0,bt=J.length>1;if(bt||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=w.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(w.mipmaps&&w.mipmaps.length>0){k.__webglFramebuffer[ht]=[];for(let mt=0;mt<w.mipmaps.length;mt++)k.__webglFramebuffer[ht][mt]=r.createFramebuffer()}else k.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){k.__webglFramebuffer=[];for(let ht=0;ht<w.mipmaps.length;ht++)k.__webglFramebuffer[ht]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(bt)for(let ht=0,mt=J.length;ht<mt;ht++){const ee=n.get(J[ht]);ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture(),o.memory.textures++)}if(I.samples>0&&Jt(I)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ht=0;ht<J.length;ht++){const mt=J[ht];k.__webglColorRenderbuffer[ht]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[ht]);const ee=s.convert(mt.format,mt.colorSpace),et=s.convert(mt.type),gt=y(mt.internalFormat,ee,et,mt.colorSpace,I.isXRRenderTarget===!0),Pt=$t(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt,gt,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,k.__webglColorRenderbuffer[ht])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),lt(k.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Wt(r.TEXTURE_CUBE_MAP,w);for(let ht=0;ht<6;ht++)if(w.mipmaps&&w.mipmaps.length>0)for(let mt=0;mt<w.mipmaps.length;mt++)Tt(k.__webglFramebuffer[ht][mt],I,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,mt);else Tt(k.__webglFramebuffer[ht],I,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(w)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ht=0,mt=J.length;ht<mt;ht++){const ee=J[ht],et=n.get(ee);e.bindTexture(r.TEXTURE_2D,et.__webglTexture),Wt(r.TEXTURE_2D,ee),Tt(k.__webglFramebuffer,I,ee,r.COLOR_ATTACHMENT0+ht,r.TEXTURE_2D,0),m(ee)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ht=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ht=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ht,j.__webglTexture),Wt(ht,w),w.mipmaps&&w.mipmaps.length>0)for(let mt=0;mt<w.mipmaps.length;mt++)Tt(k.__webglFramebuffer[mt],I,w,r.COLOR_ATTACHMENT0,ht,mt);else Tt(k.__webglFramebuffer,I,w,r.COLOR_ATTACHMENT0,ht,0);m(w)&&p(ht),e.unbindTexture()}I.depthBuffer&&Ot(I)}function te(I){const w=I.textures;for(let k=0,j=w.length;k<j;k++){const J=w[k];if(m(J)){const Y=_(I),bt=n.get(J).__webglTexture;e.bindTexture(Y,bt),p(Y),e.unbindTexture()}}}const Re=[],U=[];function hn(I){if(I.samples>0){if(Jt(I)===!1){const w=I.textures,k=I.width,j=I.height;let J=r.COLOR_BUFFER_BIT;const Y=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,bt=n.get(I),ht=w.length>1;if(ht)for(let mt=0;mt<w.length;mt++)e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let mt=0;mt<w.length;mt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),ht){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,bt.__webglColorRenderbuffer[mt]);const ee=n.get(w[mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ee,0)}r.blitFramebuffer(0,0,k,j,0,0,k,j,J,r.NEAREST),c===!0&&(Re.length=0,U.length=0,Re.push(r.COLOR_ATTACHMENT0+mt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Re.push(Y),U.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Re))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ht)for(let mt=0;mt<w.length;mt++){e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,bt.__webglColorRenderbuffer[mt]);const ee=n.get(w[mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,ee,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const w=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function $t(I){return Math.min(i.maxSamples,I.samples)}function Jt(I){const w=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ct(I){const w=o.render.frame;h.get(I)!==w&&(h.set(I,w),I.update())}function ve(I,w){const k=I.colorSpace,j=I.format,J=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||k!==Je&&k!==Pn&&(qt.getTransfer(k)===le?(j!==vn||J!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),w}function At(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=Xt,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Jt}function pv(r,t){function e(n,i=Pn){let s;const o=qt.getTransfer(i);if(n===ni)return r.UNSIGNED_BYTE;if(n===wc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Tc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ru)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===iu)return r.BYTE;if(n===su)return r.SHORT;if(n===sr)return r.UNSIGNED_SHORT;if(n===Sc)return r.INT;if(n===Pi)return r.UNSIGNED_INT;if(n===En)return r.FLOAT;if(n===ti)return r.HALF_FLOAT;if(n===ou)return r.ALPHA;if(n===au)return r.RGB;if(n===vn)return r.RGBA;if(n===cu)return r.LUMINANCE;if(n===lu)return r.LUMINANCE_ALPHA;if(n===hs)return r.DEPTH_COMPONENT;if(n===vs)return r.DEPTH_STENCIL;if(n===bc)return r.RED;if(n===Ec)return r.RED_INTEGER;if(n===hu)return r.RG;if(n===Ac)return r.RG_INTEGER;if(n===Rc)return r.RGBA_INTEGER;if(n===ro||n===oo||n===ao||n===co)if(o===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ro)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ro)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ao)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===co)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Oa||n===Fa||n===ka)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ua)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ka)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ba||n===za||n===Ha)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ba||n===za)return o===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ha)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Va||n===Ga||n===Wa||n===Xa||n===Ya||n===Ka||n===qa||n===ja||n===Za||n===$a||n===Ja||n===Qa||n===tc||n===ec)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Va)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ga)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wa)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xa)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ya)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ka)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qa)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Za)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$a)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ja)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qa)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tc)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ec)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lo||n===nc||n===ic)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===lo)return o===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ic)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uu||n===sc||n===rc||n===oc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===lo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===sc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class mv extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Kt extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gv={type:"move"};class oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gv)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const vv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_v=`
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

}`;class xv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new De,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xe({vertexShader:vv,fragmentShader:_v,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new H(new Pe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yv extends Ui{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const v=new xv,m=e.getContextAttributes();let p=null,_=null;const y=[],x=[],A=new tt;let b=null;const R=new je;R.viewport=new ie;const C=new je;C.viewport=new ie;const S=[R,C],M=new mv;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let it=y[K];return it===void 0&&(it=new oa,y[K]=it),it.getTargetRaySpace()},this.getControllerGrip=function(K){let it=y[K];return it===void 0&&(it=new oa,y[K]=it),it.getGripSpace()},this.getHand=function(K){let it=y[K];return it===void 0&&(it=new oa,y[K]=it),it.getHandSpace()};function F(K){const it=x.indexOf(K.inputSource);if(it===-1)return;const Tt=y[it];Tt!==void 0&&(Tt.update(K.inputSource,K.frame,l||o),Tt.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",q);for(let K=0;K<y.length;K++){const it=x[K];it!==null&&(x[K]=null,y[K].disconnect(it))}P=null,O=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,_=null,fe.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",V),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new An(f.framebufferWidth,f.framebufferHeight,{format:vn,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,Tt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?vs:hs,Tt=m.stencil?gs:Pi);const Lt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Lt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new An(d.textureWidth,d.textureHeight,{format:vn,type:ni,depthTexture:new Ru(d.textureWidth,d.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),fe.setContext(i),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function q(K){for(let it=0;it<K.removed.length;it++){const Tt=K.removed[it],lt=x.indexOf(Tt);lt>=0&&(x[lt]=null,y[lt].disconnect(Tt))}for(let it=0;it<K.added.length;it++){const Tt=K.added[it];let lt=x.indexOf(Tt);if(lt===-1){for(let Ot=0;Ot<y.length;Ot++)if(Ot>=x.length){x.push(Tt),lt=Ot;break}else if(x[Ot]===null){x[Ot]=Tt,lt=Ot;break}if(lt===-1)break}const Lt=y[lt];Lt&&Lt.connect(Tt)}}const G=new E,$=new E;function W(K,it,Tt){G.setFromMatrixPosition(it.matrixWorld),$.setFromMatrixPosition(Tt.matrixWorld);const lt=G.distanceTo($),Lt=it.projectionMatrix.elements,Ot=Tt.projectionMatrix.elements,Xt=Lt[14]/(Lt[10]-1),Se=Lt[14]/(Lt[10]+1),te=(Lt[9]+1)/Lt[5],Re=(Lt[9]-1)/Lt[5],U=(Lt[8]-1)/Lt[0],hn=(Ot[8]+1)/Ot[0],$t=Xt*U,Jt=Xt*hn,Ct=lt/(-U+hn),ve=Ct*-U;if(it.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ve),K.translateZ(Ct),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Lt[10]===-1)K.projectionMatrix.copy(it.projectionMatrix),K.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const At=Xt+Ct,I=Se+Ct,w=$t-ve,k=Jt+(lt-ve),j=te*Se/I*At,J=Re*Se/I*At;K.projectionMatrix.makePerspective(w,k,j,J,At,I),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function st(K,it){it===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(it.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let it=K.near,Tt=K.far;v.texture!==null&&(v.depthNear>0&&(it=v.depthNear),v.depthFar>0&&(Tt=v.depthFar)),M.near=C.near=R.near=it,M.far=C.far=R.far=Tt,(P!==M.near||O!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,O=M.far),R.layers.mask=K.layers.mask|2,C.layers.mask=K.layers.mask|4,M.layers.mask=R.layers.mask|C.layers.mask;const lt=K.parent,Lt=M.cameras;st(M,lt);for(let Ot=0;Ot<Lt.length;Ot++)st(Lt[Ot],lt);Lt.length===2?W(M,R,C):M.projectionMatrix.copy(R.projectionMatrix),ct(K,M,lt)};function ct(K,it,Tt){Tt===null?K.matrix.copy(it.matrixWorld):(K.matrix.copy(Tt.matrixWorld),K.matrix.invert(),K.matrix.multiply(it.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(it.projectionMatrix),K.projectionMatrixInverse.copy(it.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=_s*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let yt=null;function Wt(K,it){if(h=it.getViewerPose(l||o),g=it,h!==null){const Tt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let lt=!1;Tt.length!==M.cameras.length&&(M.cameras.length=0,lt=!0);for(let Ot=0;Ot<Tt.length;Ot++){const Xt=Tt[Ot];let Se=null;if(f!==null)Se=f.getViewport(Xt);else{const Re=u.getViewSubImage(d,Xt);Se=Re.viewport,Ot===0&&(t.setRenderTargetTextures(_,Re.colorTexture,d.ignoreDepthValues?void 0:Re.depthStencilTexture),t.setRenderTarget(_))}let te=S[Ot];te===void 0&&(te=new je,te.layers.enable(Ot),te.viewport=new ie,S[Ot]=te),te.matrix.fromArray(Xt.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Xt.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Se.x,Se.y,Se.width,Se.height),Ot===0&&(M.matrix.copy(te.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),lt===!0&&M.cameras.push(te)}const Lt=i.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Ot=u.getDepthInformation(Tt[0]);Ot&&Ot.isValid&&Ot.texture&&v.init(t,Ot,i.renderState)}}for(let Tt=0;Tt<y.length;Tt++){const lt=x[Tt],Lt=y[Tt];lt!==null&&Lt!==void 0&&Lt.update(lt,it,l||o)}yt&&yt(K,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const fe=new Au;fe.setAnimationLoop(Wt),this.setAnimationLoop=function(K){yt=K},this.dispose=function(){}}}const wi=new ln,Mv=new Dt;function Sv(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Tu(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ye&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ye&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p),y=_.envMap,x=_.envMapRotation;y&&(m.envMap.value=y,wi.copy(x),wi.x*=-1,wi.y*=-1,wi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),m.envMapRotation.value.setFromMatrix4(Mv.makeRotationFromEuler(wi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ye&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wv(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function l(_,y){let x=i[_.id];x===void 0&&(g(_),x=h(_),i[_.id]=x,_.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(_,A);const b=t.render.frame;s[_.id]!==b&&(d(_),s[_.id]=b)}function h(_){const y=u();_.__bindingPointIndex=y;const x=r.createBuffer(),A=_.__size,b=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,A,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,x),x}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=i[_.id],x=_.uniforms,A=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let b=0,R=x.length;b<R;b++){const C=Array.isArray(x[b])?x[b]:[x[b]];for(let S=0,M=C.length;S<M;S++){const P=C[S];if(f(P,b,S,A)===!0){const O=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let q=0;q<F.length;q++){const G=F[q],$=v(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,O+V,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,V),V+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(_,y,x,A){const b=_.value,R=y+"_"+x;if(A[R]===void 0)return typeof b=="number"||typeof b=="boolean"?A[R]=b:A[R]=b.clone(),!0;{const C=A[R];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return A[R]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function g(_){const y=_.uniforms;let x=0;const A=16;for(let R=0,C=y.length;R<C;R++){const S=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,P=S.length;M<P;M++){const O=S[M],F=Array.isArray(O.value)?O.value:[O.value];for(let V=0,q=F.length;V<q;V++){const G=F[V],$=v(G),W=x%A,st=W%$.boundary,ct=W+st;x+=st,ct!==0&&A-ct<$.storage&&(x+=A-ct),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=$.storage}}}const b=x%A;return b>0&&(x+=A-b),_.__size=x,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const _ in i)r.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}class Tv{constructor(t={}){const{canvas:e=ff(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const _=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this.toneMapping=mi,this.toneMappingExposure=1;const x=this;let A=!1,b=0,R=0,C=null,S=-1,M=null;const P=new ie,O=new ie;let F=null;const V=new _t(0);let q=0,G=e.width,$=e.height,W=1,st=null,ct=null;const yt=new ie(0,0,G,$),Wt=new ie(0,0,G,$);let fe=!1;const K=new Pc;let it=!1,Tt=!1;const lt=new Dt,Lt=new Dt,Ot=new E,Xt=new ie,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function Re(){return C===null?W:1}let U=n;function hn(T,D){return e.getContext(T,D)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yc}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",ut,!1),U===null){const D="webgl2";if(U=hn(D,T),U===null)throw hn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let $t,Jt,Ct,ve,At,I,w,k,j,J,Y,bt,ht,mt,ee,et,gt,Pt,Nt,vt,Qt,Ht,pe,L;function at(){$t=new C0(U),$t.init(),Ht=new pv(U,$t),Jt=new w0(U,$t,t,Ht),Ct=new uv(U,$t),Jt.reverseDepthBuffer&&d&&Ct.buffers.depth.setReversed(!0),ve=new L0(U),At=new Zg,I=new fv(U,$t,Ct,At,Jt,Ht,ve),w=new b0(x),k=new R0(x),j=new Bf(U),pe=new M0(U,j),J=new I0(U,j,ve,pe),Y=new N0(U,J,j,ve),Nt=new D0(U,Jt,I),et=new T0(At),bt=new jg(x,w,k,$t,Jt,pe,et),ht=new Sv(x,At),mt=new Jg,ee=new sv($t),Pt=new y0(x,w,k,Ct,Y,f,c),gt=new lv(x,Y,Jt),L=new wv(U,ve,Jt,Ct),vt=new S0(U,$t,ve),Qt=new P0(U,$t,ve),ve.programs=bt.programs,x.capabilities=Jt,x.extensions=$t,x.properties=At,x.renderLists=mt,x.shadowMap=gt,x.state=Ct,x.info=ve}at();const X=new yv(x,U);this.xr=X,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=$t.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=$t.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(G,$,!1))},this.getSize=function(T){return T.set(G,$)},this.setSize=function(T,D,B=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,$=D,e.width=Math.floor(T*W),e.height=Math.floor(D*W),B===!0&&(e.style.width=T+"px",e.style.height=D+"px"),this.setViewport(0,0,T,D)},this.getDrawingBufferSize=function(T){return T.set(G*W,$*W).floor()},this.setDrawingBufferSize=function(T,D,B){G=T,$=D,W=B,e.width=Math.floor(T*B),e.height=Math.floor(D*B),this.setViewport(0,0,T,D)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(yt)},this.setViewport=function(T,D,B,z){T.isVector4?yt.set(T.x,T.y,T.z,T.w):yt.set(T,D,B,z),Ct.viewport(P.copy(yt).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(Wt)},this.setScissor=function(T,D,B,z){T.isVector4?Wt.set(T.x,T.y,T.z,T.w):Wt.set(T,D,B,z),Ct.scissor(O.copy(Wt).multiplyScalar(W).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(T){Ct.setScissorTest(fe=T)},this.setOpaqueSort=function(T){st=T},this.setTransparentSort=function(T){ct=T},this.getClearColor=function(T){return T.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(T=!0,D=!0,B=!0){let z=0;if(T){let N=!1;if(C!==null){const nt=C.texture.format;N=nt===Rc||nt===Ac||nt===Ec}if(N){const nt=C.texture.type,dt=nt===ni||nt===Pi||nt===sr||nt===gs||nt===wc||nt===Tc,Mt=Pt.getClearColor(),St=Pt.getClearAlpha(),Ut=Mt.r,Bt=Mt.g,wt=Mt.b;dt?(g[0]=Ut,g[1]=Bt,g[2]=wt,g[3]=St,U.clearBufferuiv(U.COLOR,0,g)):(v[0]=Ut,v[1]=Bt,v[2]=wt,v[3]=St,U.clearBufferiv(U.COLOR,0,v))}else z|=U.COLOR_BUFFER_BIT}D&&(z|=U.DEPTH_BUFFER_BIT),B&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),mt.dispose(),ee.dispose(),At.dispose(),w.dispose(),k.dispose(),Y.dispose(),pe.dispose(),L.dispose(),bt.dispose(),X.dispose(),X.removeEventListener("sessionstart",jc),X.removeEventListener("sessionend",Zc),vi.stop()};function Z(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=ve.autoReset,D=gt.enabled,B=gt.autoUpdate,z=gt.needsUpdate,N=gt.type;at(),ve.autoReset=T,gt.enabled=D,gt.autoUpdate=B,gt.needsUpdate=z,gt.type=N}function ut(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function kt(T){const D=T.target;D.removeEventListener("dispose",kt),Ee(D)}function Ee(T){ze(T),At.remove(T)}function ze(T){const D=At.get(T).programs;D!==void 0&&(D.forEach(function(B){bt.releaseProgram(B)}),T.isShaderMaterial&&bt.releaseShaderCache(T))}this.renderBufferDirect=function(T,D,B,z,N,nt){D===null&&(D=Se);const dt=N.isMesh&&N.matrixWorld.determinant()<0,Mt=hd(T,D,B,z,N);Ct.setMaterial(z,dt);let St=B.index,Ut=1;if(z.wireframe===!0){if(St=J.getWireframeAttribute(B),St===void 0)return;Ut=2}const Bt=B.drawRange,wt=B.attributes.position;let ne=Bt.start*Ut,me=(Bt.start+Bt.count)*Ut;nt!==null&&(ne=Math.max(ne,nt.start*Ut),me=Math.min(me,(nt.start+nt.count)*Ut)),St!==null?(ne=Math.max(ne,0),me=Math.min(me,St.count)):wt!=null&&(ne=Math.max(ne,0),me=Math.min(me,wt.count));const _e=me-ne;if(_e<0||_e===1/0)return;pe.setup(N,z,Mt,B,St);let Qe,se=vt;if(St!==null&&(Qe=j.get(St),se=Qt,se.setIndex(Qe)),N.isMesh)z.wireframe===!0?(Ct.setLineWidth(z.wireframeLinewidth*Re()),se.setMode(U.LINES)):se.setMode(U.TRIANGLES);else if(N.isLine){let Et=z.linewidth;Et===void 0&&(Et=1),Ct.setLineWidth(Et*Re()),N.isLineSegments?se.setMode(U.LINES):N.isLineLoop?se.setMode(U.LINE_LOOP):se.setMode(U.LINE_STRIP)}else N.isPoints?se.setMode(U.POINTS):N.isSprite&&se.setMode(U.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)se.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))se.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Et=N._multiDrawStarts,Bn=N._multiDrawCounts,re=N._multiDrawCount,yn=St?j.get(St).bytesPerElement:1,Fi=At.get(z).currentProgram.getUniforms();for(let sn=0;sn<re;sn++)Fi.setValue(U,"_gl_DrawID",sn),se.render(Et[sn]/yn,Bn[sn])}else if(N.isInstancedMesh)se.renderInstances(ne,_e,N.count);else if(B.isInstancedBufferGeometry){const Et=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Bn=Math.min(B.instanceCount,Et);se.renderInstances(ne,_e,Bn)}else se.render(ne,_e)};function ce(T,D,B){T.transparent===!0&&T.side===Fe&&T.forceSinglePass===!1?(T.side=Ye,T.needsUpdate=!0,xr(T,D,B),T.side=Dn,T.needsUpdate=!0,xr(T,D,B),T.side=Fe):xr(T,D,B)}this.compile=function(T,D,B=null){B===null&&(B=T),p=ee.get(B),p.init(D),y.push(p),B.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),T!==B&&T.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const z=new Set;return T.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const nt=N.material;if(nt)if(Array.isArray(nt))for(let dt=0;dt<nt.length;dt++){const Mt=nt[dt];ce(Mt,B,N),z.add(Mt)}else ce(nt,B,N),z.add(nt)}),y.pop(),p=null,z},this.compileAsync=function(T,D,B=null){const z=this.compile(T,D,B);return new Promise(N=>{function nt(){if(z.forEach(function(dt){At.get(dt).currentProgram.isReady()&&z.delete(dt)}),z.size===0){N(T);return}setTimeout(nt,10)}$t.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let xn=null;function kn(T){xn&&xn(T)}function jc(){vi.stop()}function Zc(){vi.start()}const vi=new Au;vi.setAnimationLoop(kn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(T){xn=T,X.setAnimationLoop(T),T===null?vi.stop():vi.start()},X.addEventListener("sessionstart",jc),X.addEventListener("sessionend",Zc),this.render=function(T,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(D),D=X.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,D,C),p=ee.get(T,y.length),p.init(D),y.push(p),Lt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),K.setFromProjectionMatrix(Lt),Tt=this.localClippingEnabled,it=et.init(this.clippingPlanes,Tt),m=mt.get(T,_.length),m.init(),_.push(m),X.enabled===!0&&X.isPresenting===!0){const nt=x.xr.getDepthSensingMesh();nt!==null&&Lo(nt,D,-1/0,x.sortObjects)}Lo(T,D,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(st,ct),te=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,te&&Pt.addToRenderList(m,T),this.info.render.frame++,it===!0&&et.beginShadows();const B=p.state.shadowsArray;gt.render(B,T,D),it===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,N=m.transmissive;if(p.setupLights(),D.isArrayCamera){const nt=D.cameras;if(N.length>0)for(let dt=0,Mt=nt.length;dt<Mt;dt++){const St=nt[dt];Jc(z,N,T,St)}te&&Pt.render(T);for(let dt=0,Mt=nt.length;dt<Mt;dt++){const St=nt[dt];$c(m,T,St,St.viewport)}}else N.length>0&&Jc(z,N,T,D),te&&Pt.render(T),$c(m,T,D);C!==null&&(I.updateMultisampleRenderTarget(C),I.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(x,T,D),pe.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],it===!0&&et.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Lo(T,D,B,z){if(T.visible===!1)return;if(T.layers.test(D.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(D);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||K.intersectsSprite(T)){z&&Xt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Lt);const dt=Y.update(T),Mt=T.material;Mt.visible&&m.push(T,dt,Mt,B,Xt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||K.intersectsObject(T))){const dt=Y.update(T),Mt=T.material;if(z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Xt.copy(T.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Xt.copy(dt.boundingSphere.center)),Xt.applyMatrix4(T.matrixWorld).applyMatrix4(Lt)),Array.isArray(Mt)){const St=dt.groups;for(let Ut=0,Bt=St.length;Ut<Bt;Ut++){const wt=St[Ut],ne=Mt[wt.materialIndex];ne&&ne.visible&&m.push(T,dt,ne,B,Xt.z,wt)}}else Mt.visible&&m.push(T,dt,Mt,B,Xt.z,null)}}const nt=T.children;for(let dt=0,Mt=nt.length;dt<Mt;dt++)Lo(nt[dt],D,B,z)}function $c(T,D,B,z){const N=T.opaque,nt=T.transmissive,dt=T.transparent;p.setupLightsView(B),it===!0&&et.setGlobalState(x.clippingPlanes,B),z&&Ct.viewport(P.copy(z)),N.length>0&&_r(N,D,B),nt.length>0&&_r(nt,D,B),dt.length>0&&_r(dt,D,B),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function Jc(T,D,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new An(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?ti:ni,minFilter:Zn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const nt=p.state.transmissionRenderTarget[z.id],dt=z.viewport||P;nt.setSize(dt.z,dt.w);const Mt=x.getRenderTarget();x.setRenderTarget(nt),x.getClearColor(V),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),te&&Pt.render(B);const St=x.toneMapping;x.toneMapping=mi;const Ut=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),it===!0&&et.setGlobalState(x.clippingPlanes,z),_r(T,B,z),I.updateMultisampleRenderTarget(nt),I.updateRenderTargetMipmap(nt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let wt=0,ne=D.length;wt<ne;wt++){const me=D[wt],_e=me.object,Qe=me.geometry,se=me.material,Et=me.group;if(se.side===Fe&&_e.layers.test(z.layers)){const Bn=se.side;se.side=Ye,se.needsUpdate=!0,Qc(_e,B,z,Qe,se,Et),se.side=Bn,se.needsUpdate=!0,Bt=!0}}Bt===!0&&(I.updateMultisampleRenderTarget(nt),I.updateRenderTargetMipmap(nt))}x.setRenderTarget(Mt),x.setClearColor(V,q),Ut!==void 0&&(z.viewport=Ut),x.toneMapping=St}function _r(T,D,B){const z=D.isScene===!0?D.overrideMaterial:null;for(let N=0,nt=T.length;N<nt;N++){const dt=T[N],Mt=dt.object,St=dt.geometry,Ut=z===null?dt.material:z,Bt=dt.group;Mt.layers.test(B.layers)&&Qc(Mt,D,B,St,Ut,Bt)}}function Qc(T,D,B,z,N,nt){T.onBeforeRender(x,D,B,z,N,nt),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(x,D,B,z,T,nt),N.transparent===!0&&N.side===Fe&&N.forceSinglePass===!1?(N.side=Ye,N.needsUpdate=!0,x.renderBufferDirect(B,D,z,N,T,nt),N.side=Dn,N.needsUpdate=!0,x.renderBufferDirect(B,D,z,N,T,nt),N.side=Fe):x.renderBufferDirect(B,D,z,N,T,nt),T.onAfterRender(x,D,B,z,N,nt)}function xr(T,D,B){D.isScene!==!0&&(D=Se);const z=At.get(T),N=p.state.lights,nt=p.state.shadowsArray,dt=N.state.version,Mt=bt.getParameters(T,N.state,nt,D,B),St=bt.getProgramCacheKey(Mt);let Ut=z.programs;z.environment=T.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(T.isMeshStandardMaterial?k:w).get(T.envMap||z.environment),z.envMapRotation=z.environment!==null&&T.envMap===null?D.environmentRotation:T.envMapRotation,Ut===void 0&&(T.addEventListener("dispose",kt),Ut=new Map,z.programs=Ut);let Bt=Ut.get(St);if(Bt!==void 0){if(z.currentProgram===Bt&&z.lightsStateVersion===dt)return el(T,Mt),Bt}else Mt.uniforms=bt.getUniforms(T),T.onBeforeCompile(Mt,x),Bt=bt.acquireProgram(Mt,St),Ut.set(St,Bt),z.uniforms=Mt.uniforms;const wt=z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(wt.clippingPlanes=et.uniform),el(T,Mt),z.needsLights=dd(T),z.lightsStateVersion=dt,z.needsLights&&(wt.ambientLightColor.value=N.state.ambient,wt.lightProbe.value=N.state.probe,wt.directionalLights.value=N.state.directional,wt.directionalLightShadows.value=N.state.directionalShadow,wt.spotLights.value=N.state.spot,wt.spotLightShadows.value=N.state.spotShadow,wt.rectAreaLights.value=N.state.rectArea,wt.ltc_1.value=N.state.rectAreaLTC1,wt.ltc_2.value=N.state.rectAreaLTC2,wt.pointLights.value=N.state.point,wt.pointLightShadows.value=N.state.pointShadow,wt.hemisphereLights.value=N.state.hemi,wt.directionalShadowMap.value=N.state.directionalShadowMap,wt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,wt.spotShadowMap.value=N.state.spotShadowMap,wt.spotLightMatrix.value=N.state.spotLightMatrix,wt.spotLightMap.value=N.state.spotLightMap,wt.pointShadowMap.value=N.state.pointShadowMap,wt.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Bt,z.uniformsList=null,Bt}function tl(T){if(T.uniformsList===null){const D=T.currentProgram.getUniforms();T.uniformsList=ho.seqWithValue(D.seq,T.uniforms)}return T.uniformsList}function el(T,D){const B=At.get(T);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function hd(T,D,B,z,N){D.isScene!==!0&&(D=Se),I.resetTextureUnits();const nt=D.fog,dt=z.isMeshStandardMaterial?D.environment:null,Mt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Je,St=(z.isMeshStandardMaterial?k:w).get(z.envMap||dt),Ut=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Bt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),wt=!!B.morphAttributes.position,ne=!!B.morphAttributes.normal,me=!!B.morphAttributes.color;let _e=mi;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(_e=x.toneMapping);const Qe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,se=Qe!==void 0?Qe.length:0,Et=At.get(z),Bn=p.state.lights;if(it===!0&&(Tt===!0||T!==M)){const un=T===M&&z.id===S;et.setState(z,T,un)}let re=!1;z.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Bn.state.version||Et.outputColorSpace!==Mt||N.isBatchedMesh&&Et.batching===!1||!N.isBatchedMesh&&Et.batching===!0||N.isBatchedMesh&&Et.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Et.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Et.instancing===!1||!N.isInstancedMesh&&Et.instancing===!0||N.isSkinnedMesh&&Et.skinning===!1||!N.isSkinnedMesh&&Et.skinning===!0||N.isInstancedMesh&&Et.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Et.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Et.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Et.instancingMorph===!1&&N.morphTexture!==null||Et.envMap!==St||z.fog===!0&&Et.fog!==nt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==et.numPlanes||Et.numIntersection!==et.numIntersection)||Et.vertexAlphas!==Ut||Et.vertexTangents!==Bt||Et.morphTargets!==wt||Et.morphNormals!==ne||Et.morphColors!==me||Et.toneMapping!==_e||Et.morphTargetsCount!==se)&&(re=!0):(re=!0,Et.__version=z.version);let yn=Et.currentProgram;re===!0&&(yn=xr(z,D,N));let Fi=!1,sn=!1,Cs=!1;const xe=yn.getUniforms(),Cn=Et.uniforms;if(Ct.useProgram(yn.program)&&(Fi=!0,sn=!0,Cs=!0),z.id!==S&&(S=z.id,sn=!0),Fi||M!==T){Ct.buffers.depth.getReversed()?(lt.copy(T.projectionMatrix),mf(lt),gf(lt),xe.setValue(U,"projectionMatrix",lt)):xe.setValue(U,"projectionMatrix",T.projectionMatrix),xe.setValue(U,"viewMatrix",T.matrixWorldInverse);const ii=xe.map.cameraPosition;ii!==void 0&&ii.setValue(U,Ot.setFromMatrixPosition(T.matrixWorld)),Jt.logarithmicDepthBuffer&&xe.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&xe.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,sn=!0,Cs=!0)}if(N.isSkinnedMesh){xe.setOptional(U,N,"bindMatrix"),xe.setOptional(U,N,"bindMatrixInverse");const un=N.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),xe.setValue(U,"boneTexture",un.boneTexture,I))}N.isBatchedMesh&&(xe.setOptional(U,N,"batchingTexture"),xe.setValue(U,"batchingTexture",N._matricesTexture,I),xe.setOptional(U,N,"batchingIdTexture"),xe.setValue(U,"batchingIdTexture",N._indirectTexture,I),xe.setOptional(U,N,"batchingColorTexture"),N._colorsTexture!==null&&xe.setValue(U,"batchingColorTexture",N._colorsTexture,I));const Is=B.morphAttributes;if((Is.position!==void 0||Is.normal!==void 0||Is.color!==void 0)&&Nt.update(N,B,yn),(sn||Et.receiveShadow!==N.receiveShadow)&&(Et.receiveShadow=N.receiveShadow,xe.setValue(U,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Cn.envMap.value=St,Cn.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(Cn.envMapIntensity.value=D.environmentIntensity),sn&&(xe.setValue(U,"toneMappingExposure",x.toneMappingExposure),Et.needsLights&&ud(Cn,Cs),nt&&z.fog===!0&&ht.refreshFogUniforms(Cn,nt),ht.refreshMaterialUniforms(Cn,z,W,$,p.state.transmissionRenderTarget[T.id]),ho.upload(U,tl(Et),Cn,I)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ho.upload(U,tl(Et),Cn,I),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&xe.setValue(U,"center",N.center),xe.setValue(U,"modelViewMatrix",N.modelViewMatrix),xe.setValue(U,"normalMatrix",N.normalMatrix),xe.setValue(U,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const un=z.uniformsGroups;for(let ii=0,si=un.length;ii<si;ii++){const nl=un[ii];L.update(nl,yn),L.bind(nl,yn)}}return yn}function ud(T,D){T.ambientLightColor.needsUpdate=D,T.lightProbe.needsUpdate=D,T.directionalLights.needsUpdate=D,T.directionalLightShadows.needsUpdate=D,T.pointLights.needsUpdate=D,T.pointLightShadows.needsUpdate=D,T.spotLights.needsUpdate=D,T.spotLightShadows.needsUpdate=D,T.rectAreaLights.needsUpdate=D,T.hemisphereLights.needsUpdate=D}function dd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,D,B){At.get(T.texture).__webglTexture=D,At.get(T.depthTexture).__webglTexture=B;const z=At.get(T);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||$t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,D){const B=At.get(T);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(T,D=0,B=0){C=T,b=D,R=B;let z=!0,N=null,nt=!1,dt=!1;if(T){const St=At.get(T);if(St.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(U.FRAMEBUFFER,null),z=!1;else if(St.__webglFramebuffer===void 0)I.setupRenderTarget(T);else if(St.__hasExternalTextures)I.rebindTextures(T,At.get(T.texture).__webglTexture,At.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const wt=T.depthTexture;if(St.__boundDepthTexture!==wt){if(wt!==null&&At.has(wt)&&(T.width!==wt.image.width||T.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(T)}}const Ut=T.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(dt=!0);const Bt=At.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Bt[D])?N=Bt[D][B]:N=Bt[D],nt=!0):T.samples>0&&I.useMultisampledRTT(T)===!1?N=At.get(T).__webglMultisampledFramebuffer:Array.isArray(Bt)?N=Bt[B]:N=Bt,P.copy(T.viewport),O.copy(T.scissor),F=T.scissorTest}else P.copy(yt).multiplyScalar(W).floor(),O.copy(Wt).multiplyScalar(W).floor(),F=fe;if(Ct.bindFramebuffer(U.FRAMEBUFFER,N)&&z&&Ct.drawBuffers(T,N),Ct.viewport(P),Ct.scissor(O),Ct.setScissorTest(F),nt){const St=At.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,St.__webglTexture,B)}else if(dt){const St=At.get(T.texture),Ut=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,St.__webglTexture,B||0,Ut)}S=-1},this.readRenderTargetPixels=function(T,D,B,z,N,nt,dt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=At.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){Ct.bindFramebuffer(U.FRAMEBUFFER,Mt);try{const St=T.texture,Ut=St.format,Bt=St.type;if(!Jt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=T.width-z&&B>=0&&B<=T.height-N&&U.readPixels(D,B,z,N,Ht.convert(Ut),Ht.convert(Bt),nt)}finally{const St=C!==null?At.get(C).__webglFramebuffer:null;Ct.bindFramebuffer(U.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(T,D,B,z,N,nt,dt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=At.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){const St=T.texture,Ut=St.format,Bt=St.type;if(!Jt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=T.width-z&&B>=0&&B<=T.height-N){Ct.bindFramebuffer(U.FRAMEBUFFER,Mt);const wt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,wt),U.bufferData(U.PIXEL_PACK_BUFFER,nt.byteLength,U.STREAM_READ),U.readPixels(D,B,z,N,Ht.convert(Ut),Ht.convert(Bt),0);const ne=C!==null?At.get(C).__webglFramebuffer:null;Ct.bindFramebuffer(U.FRAMEBUFFER,ne);const me=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await pf(U,me,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,wt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,nt),U.deleteBuffer(wt),U.deleteSync(me),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,D=null,B=0){T.isTexture!==!0&&(qs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,T=arguments[1]);const z=Math.pow(2,-B),N=Math.floor(T.image.width*z),nt=Math.floor(T.image.height*z),dt=D!==null?D.x:0,Mt=D!==null?D.y:0;I.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,dt,Mt,N,nt),Ct.unbindTexture()},this.copyTextureToTexture=function(T,D,B=null,z=null,N=0){T.isTexture!==!0&&(qs("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1],D=arguments[2],N=arguments[3]||0,B=null);let nt,dt,Mt,St,Ut,Bt,wt,ne,me;const _e=T.isCompressedTexture?T.mipmaps[N]:T.image;B!==null?(nt=B.max.x-B.min.x,dt=B.max.y-B.min.y,Mt=B.isBox3?B.max.z-B.min.z:1,St=B.min.x,Ut=B.min.y,Bt=B.isBox3?B.min.z:0):(nt=_e.width,dt=_e.height,Mt=_e.depth||1,St=0,Ut=0,Bt=0),z!==null?(wt=z.x,ne=z.y,me=z.z):(wt=0,ne=0,me=0);const Qe=Ht.convert(D.format),se=Ht.convert(D.type);let Et;D.isData3DTexture?(I.setTexture3D(D,0),Et=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(I.setTexture2DArray(D,0),Et=U.TEXTURE_2D_ARRAY):(I.setTexture2D(D,0),Et=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const Bn=U.getParameter(U.UNPACK_ROW_LENGTH),re=U.getParameter(U.UNPACK_IMAGE_HEIGHT),yn=U.getParameter(U.UNPACK_SKIP_PIXELS),Fi=U.getParameter(U.UNPACK_SKIP_ROWS),sn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,_e.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_e.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,St),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ut),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Bt);const Cs=T.isDataArrayTexture||T.isData3DTexture,xe=D.isDataArrayTexture||D.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Cn=At.get(T),Is=At.get(D),un=At.get(Cn.__renderTarget),ii=At.get(Is.__renderTarget);Ct.bindFramebuffer(U.READ_FRAMEBUFFER,un.__webglFramebuffer),Ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let si=0;si<Mt;si++)Cs&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.get(T).__webglTexture,N,Bt+si),T.isDepthTexture?(xe&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.get(D).__webglTexture,N,me+si),U.blitFramebuffer(St,Ut,nt,dt,wt,ne,nt,dt,U.DEPTH_BUFFER_BIT,U.NEAREST)):xe?U.copyTexSubImage3D(Et,N,wt,ne,me+si,St,Ut,nt,dt):U.copyTexSubImage2D(Et,N,wt,ne,me+si,St,Ut,nt,dt);Ct.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else xe?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Et,N,wt,ne,me,nt,dt,Mt,Qe,se,_e.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(Et,N,wt,ne,me,nt,dt,Mt,Qe,_e.data):U.texSubImage3D(Et,N,wt,ne,me,nt,dt,Mt,Qe,se,_e):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,N,wt,ne,nt,dt,Qe,se,_e.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,N,wt,ne,_e.width,_e.height,Qe,_e.data):U.texSubImage2D(U.TEXTURE_2D,N,wt,ne,nt,dt,Qe,se,_e);U.pixelStorei(U.UNPACK_ROW_LENGTH,Bn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,re),U.pixelStorei(U.UNPACK_SKIP_PIXELS,yn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Fi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,sn),N===0&&D.generateMipmaps&&U.generateMipmap(Et),Ct.unbindTexture()},this.copyTextureToTexture3D=function(T,D,B=null,z=null,N=0){return T.isTexture!==!0&&(qs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,T=arguments[2],D=arguments[3],N=arguments[4]||0),qs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,D,B,z,N)},this.initRenderTarget=function(T){At.get(T).__webglFramebuffer===void 0&&I.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?I.setTextureCube(T,0):T.isData3DTexture?I.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?I.setTexture2DArray(T,0):I.setTexture2D(T,0),Ct.unbindTexture()},this.resetState=function(){b=0,R=0,C=null,Ct.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}class Dc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new _t(t),this.density=e}clone(){return new Dc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Du extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Nu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=cc,this.updateRanges=[],this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ke=new E;class lr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new lr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Uu extends Rn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ji;const Us=new E,Qi=new E,ts=new E,es=new tt,Os=new tt,Ou=new Dt,Hr=new E,Fs=new E,Vr=new E,th=new tt,aa=new tt,eh=new tt;class bv extends ge{constructor(t=new Uu){if(super(),this.isSprite=!0,this.type="Sprite",Ji===void 0){Ji=new ye;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Nu(e,5);Ji.setIndex([0,1,2,0,2,3]),Ji.setAttribute("position",new lr(n,3,0,!1)),Ji.setAttribute("uv",new lr(n,2,3,!1))}this.geometry=Ji,this.material=t,this.center=new tt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qi.setFromMatrixScale(this.matrixWorld),Ou.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qi.multiplyScalar(-ts.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Gr(Hr.set(-.5,-.5,0),ts,o,Qi,i,s),Gr(Fs.set(.5,-.5,0),ts,o,Qi,i,s),Gr(Vr.set(.5,.5,0),ts,o,Qi,i,s),th.set(0,0),aa.set(1,0),eh.set(1,1);let a=t.ray.intersectTriangle(Hr,Fs,Vr,!1,Us);if(a===null&&(Gr(Fs.set(-.5,.5,0),ts,o,Qi,i,s),aa.set(0,1),a=t.ray.intersectTriangle(Hr,Vr,Fs,!1,Us),a===null))return;const c=t.ray.origin.distanceTo(Us);c<t.near||c>t.far||e.push({distance:c,point:Us.clone(),uv:mn.getInterpolation(Us,Hr,Fs,Vr,th,aa,eh,new tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Gr(r,t,e,n,i,s){es.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Os.x=s*es.x-i*es.y,Os.y=i*es.x+s*es.y):Os.copy(es),r.copy(t),r.x+=Os.x,r.y+=Os.y,r.applyMatrix4(Ou)}const nh=new E,ih=new ie,sh=new ie,Ev=new E,rh=new Dt,Wr=new E,ca=new Nn,oh=new Dt,la=new To;class Fu extends H{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ol,this.bindMatrix=new Dt,this.bindMatrixInverse=new Dt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new nn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Wr),this.boundingBox.expandByPoint(Wr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Wr),this.boundingSphere.expandByPoint(Wr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ca.copy(this.boundingSphere),ca.applyMatrix4(i),t.ray.intersectsSphere(ca)!==!1&&(oh.copy(i).invert(),la.copy(t.ray).applyMatrix4(oh),!(this.boundingBox!==null&&la.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,la)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ie,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===ol?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Od?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;ih.fromBufferAttribute(i.attributes.skinIndex,t),sh.fromBufferAttribute(i.attributes.skinWeight,t),nh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=sh.getComponent(s);if(o!==0){const a=ih.getComponent(s);rh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Ev.copy(nh).applyMatrix4(rh),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class ku extends ge{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Bu extends De{constructor(t=null,e=1,n=1,i,s,o,a,c,l=$e,h=$e,u,d){super(null,o,a,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ah=new Dt,Av=new Dt;class Nc{constructor(t=[],e=[]){this.uuid=_n(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Dt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Dt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:Av;ah.multiplyMatrices(a,e[s]),ah.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Nc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Bu(e,t,t,vn,En);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let o=e[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new ku),this.bones.push(o),this.boneInverses.push(new Dt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class uc extends Ce{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ns=new Dt,ch=new Dt,Xr=[],lh=new nn,Rv=new Dt,ks=new H,Bs=new Nn;class ss extends H{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new uc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Rv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new nn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ns),lh.copy(t.boundingBox).applyMatrix4(ns),this.boundingBox.union(lh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ns),Bs.copy(t.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(Bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),t.ray.intersectsSphere(Bs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ns),ch.multiplyMatrices(n,ns),ks.matrixWorld=ch,ks.raycast(t,Xr);for(let o=0,a=Xr.length;o<a;o++){const c=Xr[o];c.instanceId=s,c.object=this,e.push(c)}Xr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new uc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bu(new Float32Array(i*this.count),i,this.count,bc,En));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ao extends Rn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const mo=new E,go=new E,hh=new Dt,zs=new To,Yr=new Nn,ha=new E,uh=new E;class Ro extends ge{constructor(t=new ye,e=new Ao){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)mo.fromBufferAttribute(e,i-1),go.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=mo.distanceTo(go);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(i),Yr.radius+=s,t.ray.intersectsSphere(Yr)===!1)return;hh.copy(i).invert(),zs.copy(t.ray).applyMatrix4(hh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=h.getX(v),_=h.getX(v+1),y=Kr(this,t,zs,c,p,_);y&&e.push(y)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=Kr(this,t,zs,c,v,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=Kr(this,t,zs,c,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=Kr(this,t,zs,c,g-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Kr(r,t,e,n,i,s){const o=r.geometry.attributes.position;if(mo.fromBufferAttribute(o,i),go.fromBufferAttribute(o,s),e.distanceSqToSegment(mo,go,ha,uh)>n)return;ha.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ha);if(!(c<t.near||c>t.far))return{distance:c,point:uh.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const dh=new E,fh=new E;class zu extends Ro{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)dh.fromBufferAttribute(e,i),fh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+dh.distanceTo(fh);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cv extends Ro{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Uc extends Rn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ph=new Dt,dc=new To,qr=new Nn,jr=new E;class Oc extends ge{constructor(t=new ye,e=new Uc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(i),qr.radius+=s,t.ray.intersectsSphere(qr)===!1)return;ph.copy(i).invert(),dc.copy(t.ray).applyMatrix4(ph);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const m=l.getX(g);jr.fromBufferAttribute(u,m),mh(jr,m,c,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)jr.fromBufferAttribute(u,g),mh(jr,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function mh(r,t,e,n,i,s,o){const a=dc.distanceSqToPoint(r);if(a<e){const c=new E;dc.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Hu extends De{constructor(t,e,n,i,s,o,a,c,l){super(t,e,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=e||(o.isVector2?new tt:new E);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new E,i=[],s=[],o=[],a=new E,c=new Dt;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new E)}s[0]=new E,o[0]=new E;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Le(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Le(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fc extends Un{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new tt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Iv extends Fc{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function kc(){let r=0,t=0,e=0,n=0;function i(s,o,a,c){r=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Zr=new E,ua=new kc,da=new kc,fa=new kc;class Pv extends Un{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new E){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%s]:(Zr.subVectors(i[0],i[1]).add(i[0]),l=Zr);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Zr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Zr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ua.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,m),da.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,m),fa.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(ua.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),da.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),fa.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ua.calc(c),da.calc(c),fa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new E().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function gh(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,c=r*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*r+e}function Lv(r,t){const e=1-r;return e*e*t}function Dv(r,t){return 2*(1-r)*r*t}function Nv(r,t){return r*r*t}function Js(r,t,e,n){return Lv(r,t)+Dv(r,e)+Nv(r,n)}function Uv(r,t){const e=1-r;return e*e*e*t}function Ov(r,t){const e=1-r;return 3*e*e*r*t}function Fv(r,t){return 3*(1-r)*r*r*t}function kv(r,t){return r*r*r*t}function Qs(r,t,e,n,i){return Uv(r,t)+Ov(r,e)+Fv(r,n)+kv(r,i)}class Vu extends Un{constructor(t=new tt,e=new tt,n=new tt,i=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new tt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Qs(t,i.x,s.x,o.x,a.x),Qs(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Bv extends Un{constructor(t=new E,e=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new E){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Qs(t,i.x,s.x,o.x,a.x),Qs(t,i.y,s.y,o.y,a.y),Qs(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Gu extends Un{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zv extends Un{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wu extends Un{constructor(t=new tt,e=new tt,n=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new tt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Js(t,i.x,s.x,o.x),Js(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hv extends Un{constructor(t=new E,e=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new E){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Js(t,i.x,s.x,o.x),Js(t,i.y,s.y,o.y),Js(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xu extends Un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(gh(a,c.x,l.x,h.x,u.x),gh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new tt().fromArray(i))}return this}}var vh=Object.freeze({__proto__:null,ArcCurve:Iv,CatmullRomCurve3:Pv,CubicBezierCurve:Vu,CubicBezierCurve3:Bv,EllipseCurve:Fc,LineCurve:Gu,LineCurve3:zv,QuadraticBezierCurve:Wu,QuadraticBezierCurve3:Hv,SplineCurve:Xu});class Vv extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new vh[i.type]().fromJSON(i))}return this}}class fc extends Vv{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Gu(this.currentPoint.clone(),new tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Wu(this.currentPoint.clone(),new tt(t,e),new tt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new Vu(this.currentPoint.clone(),new tt(t,e),new tt(n,i),new tt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Xu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,s,o,a,c),this}absellipse(t,e,n,i,s,o,a,c){const l=new Fc(t,e,n,i,s,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Bc extends ye{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Le(i,0,Math.PI*2);const s=[],o=[],a=[],c=[],l=[],h=1/e,u=new E,d=new tt,f=new E,g=new E,v=new E;let m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let _=0;_<=e;_++){const y=n+_*h*i,x=Math.sin(y),A=Math.cos(y);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*x,u.y=t[b].y,u.z=t[b].x*A,o.push(u.x,u.y,u.z),d.x=_/e,d.y=b/(t.length-1),a.push(d.x,d.y);const R=c[3*b+0]*x,C=c[3*b+1],S=c[3*b+0]*A;l.push(R,C,S)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){const x=y+_*t.length,A=x,b=x+t.length,R=x+t.length+1,C=x+1;s.push(A,b,C),s.push(R,C,b)}this.setIndex(s),this.setAttribute("position",new Zt(o,3)),this.setAttribute("uv",new Zt(a,2)),this.setAttribute("normal",new Zt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bc(t.points,t.segments,t.phiStart,t.phiLength)}}class Co extends Bc{constructor(t=1,e=1,n=4,i=8){const s=new fc;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Co(t.radius,t.length,t.capSegments,t.radialSegments)}}class gi extends ye{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new E,h=new tt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Be extends ye{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(f,2));function _(){const x=new E,A=new E;let b=0;const R=(e-t)/n;for(let C=0;C<=s;C++){const S=[],M=C/s,P=M*(e-t)+t;for(let O=0;O<=i;O++){const F=O/i,V=F*c+a,q=Math.sin(V),G=Math.cos(V);A.x=P*q,A.y=-M*n+m,A.z=P*G,u.push(A.x,A.y,A.z),x.set(q,R,G).normalize(),d.push(x.x,x.y,x.z),f.push(F,1-M),S.push(g++)}v.push(S)}for(let C=0;C<i;C++)for(let S=0;S<s;S++){const M=v[S][C],P=v[S+1][C],O=v[S+1][C+1],F=v[S][C+1];(t>0||S!==0)&&(h.push(M,P,F),b+=3),(e>0||S!==s-1)&&(h.push(P,O,F),b+=3)}l.addGroup(p,b,0),p+=b}function y(x){const A=g,b=new tt,R=new E;let C=0;const S=x===!0?t:e,M=x===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const P=g;for(let O=0;O<=i;O++){const V=O/i*c+a,q=Math.cos(V),G=Math.sin(V);R.x=S*G,R.y=m*M,R.z=S*q,u.push(R.x,R.y,R.z),d.push(0,M,0),b.x=q*.5+.5,b.y=G*.5*M+.5,f.push(b.x,b.y),g++}for(let O=0;O<i;O++){const F=A+O,V=P+O;x===!0?h.push(V,V+1,F):h.push(V+1,V,F),C+=3}l.addGroup(p,C,x===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hr extends Be{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new hr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zc extends ye{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(s.slice(),3)),this.setAttribute("uv",new Zt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const y=new E,x=new E,A=new E;for(let b=0;b<e.length;b+=3)f(e[b+0],y),f(e[b+1],x),f(e[b+2],A),c(y,x,A,_)}function c(_,y,x,A){const b=A+1,R=[];for(let C=0;C<=b;C++){R[C]=[];const S=_.clone().lerp(x,C/b),M=y.clone().lerp(x,C/b),P=b-C;for(let O=0;O<=P;O++)O===0&&C===b?R[C][O]=S:R[C][O]=S.clone().lerp(M,O/P)}for(let C=0;C<b;C++)for(let S=0;S<2*(b-C)-1;S++){const M=Math.floor(S/2);S%2===0?(d(R[C][M+1]),d(R[C+1][M]),d(R[C][M])):(d(R[C][M+1]),d(R[C+1][M+1]),d(R[C+1][M]))}}function l(_){const y=new E;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(_),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function h(){const _=new E;for(let y=0;y<s.length;y+=3){_.x=s[y+0],_.y=s[y+1],_.z=s[y+2];const x=m(_)/2/Math.PI+.5,A=p(_)/Math.PI+.5;o.push(x,1-A)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){const y=o[_+0],x=o[_+2],A=o[_+4],b=Math.max(y,x,A),R=Math.min(y,x,A);b>.9&&R<.1&&(y<.2&&(o[_+0]+=1),x<.2&&(o[_+2]+=1),A<.2&&(o[_+4]+=1))}}function d(_){s.push(_.x,_.y,_.z)}function f(_,y){const x=_*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){const _=new E,y=new E,x=new E,A=new E,b=new tt,R=new tt,C=new tt;for(let S=0,M=0;S<s.length;S+=9,M+=6){_.set(s[S+0],s[S+1],s[S+2]),y.set(s[S+3],s[S+4],s[S+5]),x.set(s[S+6],s[S+7],s[S+8]),b.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),A.copy(_).add(y).add(x).divideScalar(3);const P=m(A);v(b,M+0,_,P),v(R,M+2,y,P),v(C,M+4,x,P)}}function v(_,y,x,A){A<0&&_.x===1&&(o[y]=_.x-1),x.x===0&&x.z===0&&(o[y]=A/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zc(t.vertices,t.indices,t.radius,t.details)}}class Yu extends fc{constructor(t){super(t),this.uuid=_n(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new fc().fromJSON(i))}return this}}const Gv={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=Ku(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,u,d,f;if(n&&(s=qv(r,t,s,e)),r.length>80*e){a=l=r[0],c=h=r[1];for(let g=e;g<i;g+=e)u=r[g],d=r[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return ur(s,o,e,a,c,f,0),o}};function Ku(r,t,e,n,i){let s,o;if(i===r_(r,t,e,n)>0)for(s=t;s<e;s+=n)o=_h(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=_h(s,r[s],r[s+1],o);return o&&Io(o,o.next)&&(fr(o),o=o.next),o}function Li(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Io(e,e.next)||be(e.prev,e,e.next)===0)){if(fr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ur(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Qv(r,n,i,s);let a=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?Xv(r,n,i,s):Wv(r)){t.push(c.i/e|0),t.push(r.i/e|0),t.push(l.i/e|0),fr(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=Yv(Li(r),t,e),ur(r,t,e,n,i,s,2)):o===2&&Kv(r,t,e,n,i,s):ur(Li(r),t,e,n,i,s,1);break}}}function Wv(r){const t=r.prev,e=r,n=r.next;if(be(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<c?a<l?a:l:c<l?c:l,d=i>s?i>o?i:o:s>o?s:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&cs(i,a,s,c,o,l,g.x,g.y)&&be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Xv(r,t,e,n){const i=r.prev,s=r,o=r.next;if(be(i,s,o)>=0)return!1;const a=i.x,c=s.x,l=o.x,h=i.y,u=s.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,v=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=pc(f,g,t,e,n),_=pc(v,m,t,e,n);let y=r.prevZ,x=r.nextZ;for(;y&&y.z>=p&&x&&x.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&cs(a,h,c,u,l,d,y.x,y.y)&&be(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&cs(a,h,c,u,l,d,x.x,x.y)&&be(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&cs(a,h,c,u,l,d,y.x,y.y)&&be(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=_;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&cs(a,h,c,u,l,d,x.x,x.y)&&be(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Yv(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Io(i,s)&&qu(i,n,n.next,s)&&dr(i,s)&&dr(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),fr(n),fr(n.next),n=r=s),n=n.next}while(n!==r);return Li(n)}function Kv(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&n_(o,a)){let c=ju(o,a);o=Li(o,o.next),c=Li(c,c.next),ur(o,t,e,n,i,s,0),ur(c,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function qv(r,t,e,n){const i=[];let s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:r.length,l=Ku(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(e_(l));for(i.sort(jv),s=0;s<i.length;s++)e=Zv(i[s],e);return e}function jv(r,t){return r.x-t.x}function Zv(r,t){const e=$v(r,t);if(!e)return t;const n=ju(e,r);return Li(n,n.next),Li(e,e.next)}function $v(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;e=i;do s>=e.x&&e.x>=c&&s!==e.x&&cs(o<l?s:n,o,c,l,o<l?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),dr(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Jv(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function Jv(r,t){return be(r.prev,r,t.prev)<0&&be(t.next,r,r.next)<0}function Qv(r,t,e,n){let i=r;do i.z===0&&(i.z=pc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,t_(i)}function t_(r){let t,e,n,i,s,o,a,c,l=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,l*=2}while(o>1);return r}function pc(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function e_(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function cs(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function n_(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!i_(r,t)&&(dr(r,t)&&dr(t,r)&&s_(r,t)&&(be(r.prev,r,t.prev)||be(r,t.prev,t))||Io(r,t)&&be(r.prev,r,r.next)>0&&be(t.prev,t,t.next)>0)}function be(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Io(r,t){return r.x===t.x&&r.y===t.y}function qu(r,t,e,n){const i=Jr(be(r,t,e)),s=Jr(be(r,t,n)),o=Jr(be(e,n,r)),a=Jr(be(e,n,t));return!!(i!==s&&o!==a||i===0&&$r(r,e,t)||s===0&&$r(r,n,t)||o===0&&$r(e,r,n)||a===0&&$r(e,t,n))}function $r(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Jr(r){return r>0?1:r<0?-1:0}function i_(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&qu(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function dr(r,t){return be(r.prev,r,r.next)<0?be(r,t,r.next)>=0&&be(r,r.prev,t)>=0:be(r,t,r.prev)<0||be(r,r.next,t)<0}function s_(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function ju(r,t){const e=new mc(r.i,r.x,r.y),n=new mc(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function _h(r,t,e,n){const i=new mc(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function fr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function mc(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function r_(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class tr{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return tr.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];xh(t),yh(n,t);let o=t.length;e.forEach(xh);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,yh(n,e[c]);const a=Gv.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function xh(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function yh(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Hc extends zc{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Hc(t.radius,t.detail)}}class Di extends ye{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/i,f=new E,g=new tt;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const p=s+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<i;v++){const m=v*(n+1);for(let p=0;p<n;p++){const _=p+m,y=_,x=_+n+1,A=_+n+2,b=_+1;a.push(y,x,b),a.push(x,A,b)}}this.setIndex(a),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Di(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Vc extends ye{constructor(t=new Yu([new tt(0,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Zt(i,3)),this.setAttribute("normal",new Zt(s,3)),this.setAttribute("uv",new Zt(o,2));function l(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;tr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const _=g[m];tr.isClockWise(_)===!0&&(g[m]=_.reverse())}const v=tr.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const _=g[m];f=f.concat(_)}for(let m=0,p=f.length;m<p;m++){const _=f[m];i.push(_.x,_.y,0),s.push(0,0,1),o.push(_.x,_.y)}for(let m=0,p=v.length;m<p;m++){const _=v[m],y=_[0]+u,x=_[1]+u,A=_[2]+u;n.push(y,x,A),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return o_(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const o=e[t.shapes[i]];n.push(o)}return new Vc(n,t.curveSegments)}}function o_(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class Ze extends ye{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new E,d=new E,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const _=[],y=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let A=0;A<=e;A++){const b=A/e;u.x=-t*Math.cos(i+b*s)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(i+b*s)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(b+x,1-y),_.push(l++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){const y=h[p][_+1],x=h[p][_],A=h[p+1][_],b=h[p+1][_+1];(p!==0||o>0)&&f.push(y,x,b),(p!==n-1||c<Math.PI)&&f.push(x,A,b)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ii extends ye{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new E,u=new E,d=new E;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const v=g/i*s,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const v=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,_=(i+1)*f+g;o.push(v,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class a_ extends Xe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class ft extends Rn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mu,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class On extends ft{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}function Qr(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function c_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function l_(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Mh(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let c=0;c!==t;++c)i[o++]=r[a+c]}return i}function Zu(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push.apply(e,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)}class mr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class h_ extends mr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rs,endingEnd:rs}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,o=t+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case os:s=t,a=2*e-n;break;case fo:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case os:o=t,c=2*n-e;break;case fo:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*v+.5*g,x=f*m-f*v;for(let A=0;A!==a;++A)s[A]=p*o[h+A]+_*o[l+A]+y*o[c+A]+x*o[u+A];return s}}class $u extends mr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}}class u_ extends mr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Fn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qr(e,this.TimeBufferType),this.values=Qr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Qr(t.times,Array),values:Qr(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new u_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $u(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new h_(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case rr:e=this.InterpolantFactoryMethodDiscrete;break;case or:e=this.InterpolantFactoryMethodLinear;break;case Do:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return or;case this.InterpolantFactoryMethodSmooth:return Do}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&c_(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Do,s=t.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const v=e[u+g];if(v!==e[d+g]||v!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=or;class bs extends Fn{constructor(t,e,n){super(t,e,n)}}bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=rr;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ju extends Fn{}Ju.prototype.ValueTypeName="color";class ys extends Fn{}ys.prototype.ValueTypeName="number";class d_ extends mr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e);let l=t*a;for(let h=l+a;l!==h;l+=4)ke.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Ms extends Fn{InterpolantFactoryMethodLinear(t){return new d_(this.times,this.values,this.getValueSize(),t)}}Ms.prototype.ValueTypeName="quaternion";Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class Es extends Fn{constructor(t,e,n){super(t,e,n)}}Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=rr;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;class Ss extends Fn{}Ss.prototype.ValueTypeName="vector";class gc{constructor(t="",e=-1,n=[],i=Cc){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=_n(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(p_(n[o]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=n.length;s!==o;++s)e.push(Fn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=l_(c);c=Mh(c,1,h),l=Mh(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new ys(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,v){if(f.length!==0){const m=[],p=[];Zu(f,m,p,g),m.length!==0&&v.push(new u(d,m,p))}},i=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let _=0;_!==d[g].morphTargets.length;++_){const y=d[g];m.push(y.time),p.push(y.morphTarget===v?1:0)}i.push(new ys(".morphTargetInfluence["+v+"]",m,p))}c=f.length*o}else{const f=".bones["+e[u].name+"]";n(Ss,f+".position",d,"pos",i),n(Ms,f+".quaternion",d,"rot",i),n(Ss,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function f_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ys;case"vector":case"vector2":case"vector3":case"vector4":return Ss;case"color":return Ju;case"quaternion":return Ms;case"bool":case"boolean":return bs;case"string":return Es}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function p_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=f_(r.type);if(r.times===void 0){const e=[],n=[];Zu(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const pi={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class m_{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const g_=new m_;class As{constructor(t){this.manager=t!==void 0?t:g_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}As.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xn={};class v_ extends Error{constructor(t,e){super(t),this.response=e}}class Qu extends As{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=pi.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Xn[t]!==void 0){Xn[t].push({onLoad:e,onProgress:n,onError:i});return}Xn[t]=[],Xn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Xn[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){_();function _(){u.read().then(({done:y,value:x})=>{if(y)p.close();else{v+=x.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let b=0,R=h.length;b<R;b++){const C=h[b];C.onProgress&&C.onProgress(A)}p.enqueue(x),_()}},y=>{p.error(y)})}}});return new Response(m)}else throw new v_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{pi.add(t,l);const h=Xn[t];delete Xn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Xn[t];if(h===void 0)throw this.manager.itemError(t),l;delete Xn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class __ extends As{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=pi.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=ar("img");function c(){h(),pi.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class vo extends As{constructor(t){super(t)}load(t,e,n,i){const s=new De,o=new __(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Po extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class x_ extends Po{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const pa=new Dt,Sh=new E,wh=new E;class Gc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pc,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sh),wh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wh),e.updateMatrixWorld(),pa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class y_ extends Gc{constructor(){super(new je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=_s*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class M_ extends Po{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new y_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Th=new Dt,Hs=new E,ma=new E;class S_ extends Gc{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Hs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Hs),ma.copy(n.position),ma.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ma),n.updateMatrixWorld(),i.makeTranslation(-Hs.x,-Hs.y,-Hs.z),Th.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Th)}}class _o extends Po{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new S_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class w_ extends Gc{constructor(){super(new bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class td extends Po{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new w_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class er{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class T_ extends As{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=pi.get(t);if(o!==void 0){if(s.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),s.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return pi.add(t,l),e&&e(l),s.manager.itemEnd(t),l}).catch(function(l){i&&i(l),pi.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});pi.add(t,c),s.manager.itemStart(t)}}class ed{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=bh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function bh(){return performance.now()}class b_{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,o;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,s=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-s,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,o=i;s!==o;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){ke.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){const o=this._workIndex*s;ke.multiplyQuaternionsFlat(t,o,t,e,t,n),ke.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const c=e+a;t[c]=t[c]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,s){for(let o=0;o!==s;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const Wc="\\[\\]\\.:\\/",E_=new RegExp("["+Wc+"]","g"),Xc="[^"+Wc+"]",A_="[^"+Wc.replace("\\.","")+"]",R_=/((?:WC+[\/:])*)/.source.replace("WC",Xc),C_=/(WCOD+)?/.source.replace("WCOD",A_),I_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xc),P_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xc),L_=new RegExp("^"+R_+C_+I_+P_+"$"),D_=["material","materials","bones","map"];class N_{constructor(t,e,n){const i=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class oe{constructor(t,e,n){this.path=e,this.parsedPath=n||oe.parseTrackName(e),this.node=oe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new oe.Composite(t,e,n):new oe(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(E_,"")}static parseTrackName(t){const e=L_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);D_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=oe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[i];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}oe.Composite=N_;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class U_{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const s=e.tracks,o=s.length,a=new Array(o),c={endingStart:rs,endingEnd:rs};for(let l=0;l!==o;++l){const h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=fu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,s=t._clip.duration,o=s/i,a=i/s;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const c=(t-s)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case kd:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Cc:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,s=this._loopCount;const o=n===Fd;if(t===0)return s===-1?i:o&&(s&1)===1?e-i:i;if(n===du){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=os,i.endingEnd=os):(t?i.endingStart=this.zeroSlopeAtStart?os:rs:i.endingStart=fo,e?i.endingEnd=this.zeroSlopeAtEnd?os:rs:i.endingEnd=fo)}_scheduleFading(t,e,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=e,a[1]=s+t,c[1]=n,this}}const O_=new Float32Array(1);class Eh extends Ui{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const v=e&&e._propertyBindings[u].binding.parsedPath;g=new b_(oe.create(n,f,v),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,s=this._actionsByClip;let o=s[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;const u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new $u(new Float32Array(2),new Float32Array(2),1,O_),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const i=e||this._root,s=i.uuid;let o=typeof t=="string"?gc.findByName(i,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Cc),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new U_(this,o,e,n);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(t,e){const n=e||this._root,i=n.uuid,s=typeof t=="string"?gc.findByName(n,t):t,o=s?s.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yc);const nd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Rs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const F_=new bo(-1,1,1,-1,0,1);class k_ extends ye{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}}const B_=new k_;class Yc{constructor(t){this._mesh=new H(B_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,F_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class z_ extends Rs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=cr.clone(t.uniforms),this.material=new Xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Yc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ah extends Rs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class H_ extends Rs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class V_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new tt);this._width=n.width,this._height=n.height,e=new An(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ti}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new z_(nd),this.copyPass.material.blending=Qn,this.clock=new ed}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ah!==void 0&&(o instanceof Ah?n=!0:o instanceof H_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class G_ extends Rs{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new _t}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const W_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _t(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ws extends Rs{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new tt(t.x,t.y):new tt(256,256),this.clearColor=new _t(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new An(s,o,{type:ti}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new An(s,o,{type:ti});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new An(s,o,{type:ti});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}const a=W_;this.highPassUniforms=cr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new tt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=nd;this.copyUniforms=cr.clone(h.uniforms),this.blendMaterial=new Xe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:we,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new _t,this.oldClearAlpha=1,this.basic=new It,this.fsQuad=new Yc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new tt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=ws.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=ws.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Xe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new tt(.5,.5)},direction:{value:new tt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Xe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ws.BlurDirectionX=new tt(1,0);ws.BlurDirectionY=new tt(0,1);const X_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Y_ extends Rs{constructor(){super();const t=X_;this.uniforms=cr.clone(t.uniforms),this.material=new a_({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Yc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===le&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$h?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Mc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Qh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===tu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Rh(r,t){if(t===Bd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===ac||t===pu){let e=r.getIndex();if(e===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=e.count-2,i=[];if(t===ac)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}class xo extends As{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new $_(e)}),this.register(function(e){return new J_(e)}),this.register(function(e){return new ax(e)}),this.register(function(e){return new cx(e)}),this.register(function(e){return new lx(e)}),this.register(function(e){return new tx(e)}),this.register(function(e){return new ex(e)}),this.register(function(e){return new nx(e)}),this.register(function(e){return new ix(e)}),this.register(function(e){return new Z_(e)}),this.register(function(e){return new sx(e)}),this.register(function(e){return new Q_(e)}),this.register(function(e){return new ox(e)}),this.register(function(e){return new rx(e)}),this.register(function(e){return new q_(e)}),this.register(function(e){return new hx(e)}),this.register(function(e){return new ux(e)})}load(t,e,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=er.extractUrlBase(t);o=er.resolveURL(l,this.path)}else o=er.extractUrlBase(t);this.manager.itemStart(t);const a=function(l){i?i(l):console.error(l),s.manager.itemError(t),s.manager.itemEnd(t)},c=new Qu(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{s.parse(l,o,function(h){e(h),s.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===id){try{o[Yt.KHR_BINARY_GLTF]=new dx(t)}catch(u){i&&i(u);return}s=JSON.parse(o[Yt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new bx(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Yt.KHR_MATERIALS_UNLIT:o[u]=new j_;break;case Yt.KHR_DRACO_MESH_COMPRESSION:o[u]=new fx(s,this.dracoLoader);break;case Yt.KHR_TEXTURE_TRANSFORM:o[u]=new px;break;case Yt.KHR_MESH_QUANTIZATION:o[u]=new mx;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}}function K_(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}const Yt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class q_{constructor(t){this.parser=t,this.name=Yt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const s=e.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let l;const h=new _t(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Je);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new td(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new _o(h),l.distance=u;break;case"spot":l=new M_(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,jn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,s=n.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}}class j_{constructor(){this.name=Yt.KHR_MATERIALS_UNLIT}getMaterialType(){return It}extendParams(t,e,n){const i=[];t.color=new _t(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Je),t.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,Ae))}return Promise.all(i)}}class Z_{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}}class $_{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new tt(a,a)}return Promise.all(s)}}class J_{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Q_{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class tx{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new _t(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Je)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Ae)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class ex{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class nx{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new _t().setRGB(a[0],a[1],a[2],Je),Promise.all(s)}}class ix{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class sx{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new _t().setRGB(a[0],a[1],a[2],Je),o.specularColorTexture!==void 0&&s.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Ae)),Promise.all(s)}}class rx{constructor(t){this.parser=t,this.name=Yt.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(s)}}class ox{constructor(t){this.parser=t,this.name=Yt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class ax{constructor(t){this.parser=t,this.name=Yt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,o)}}class cx{constructor(t){this.parser=t,this.name=Yt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class lx{constructor(t){this.parser=t,this.name=Yt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class hx{constructor(t){this.name=Yt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class ux{constructor(t){this.name=Yt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==pn.TRIANGLES&&l.mode!==pn.TRIANGLE_STRIP&&l.mode!==pn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const v=new Dt,m=new E,p=new ke,_=new E(1,1,1),y=new ss(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&_.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,v.compose(m,p,_));for(const x in c)if(x==="_COLOR_0"){const A=c[x];y.instanceColor=new uc(A.array,A.itemSize,A.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);ge.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const id="glTF",Vs=12,Ch={JSON:1313821514,BIN:5130562};class dx{constructor(t){this.name=Yt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Vs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==id)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Vs,s=new DataView(t,Vs);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===Ch.JSON){const l=new Uint8Array(t,Vs+o,a);this.content=n.decode(l)}else if(c===Ch.BIN){const l=Vs+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class fx{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Yt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=vc[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=vc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[t.attributes[h]],f=ds[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const v=f.attributes[g],m=c[g];m!==void 0&&(v.normalized=m)}u(f)},a,l,Je,d)})})}}class px{constructor(){this.name=Yt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class mx{constructor(){this.name=Yt.KHR_MESH_QUANTIZATION}}class sd extends mr{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[s+o];return e}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-e,u=(n-e)/h,d=u*u,f=d*u,g=t*l,v=g-l,m=-2*f+3*d,p=f-d,_=1-m,y=p-d+u;for(let x=0;x!==a;x++){const A=o[v+x+a],b=o[v+x+c]*h,R=o[g+x+a],C=o[g+x]*h;s[x]=_*A+y*b+m*R+p*C}return s}}const gx=new ke;class vx extends sd{interpolate_(t,e,n,i){const s=super.interpolate_(t,e,n,i);return gx.fromArray(s).normalize().toArray(s),s}}const pn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ds={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ih={9728:$e,9729:an,9984:nu,9985:so,9986:Ks,9987:Zn},Ph={33071:gn,33648:ir,10497:tn},ga={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_x={CUBICSPLINE:void 0,LINEAR:or,STEP:rr},va={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xx(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ft({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Dn})),r.DefaultMaterial}function Ti(r,t,e){for(const n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function jn(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function yx(r,t,e){let n=!1,i=!1,s=!1;for(let l=0,h=t.length;l<h;l++){const u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){const u=t[l];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function Mx(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Sx(r){let t;const e=r.extensions&&r.extensions[Yt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+_a(e.attributes):t=r.indices+":"+_a(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)t+=":"+_a(r.targets[n]);return t}function _a(r){let t="";const e=Object.keys(r).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+r[e[n]]+";";return t}function _c(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function wx(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Tx=new Dt;class bx{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new K_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new vo(this.options.manager):this.textureLoader=new T_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ti(s,a,i),jn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){const o=e[i].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let i=0,s=t.length;i<s;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())s(h,a.children[l])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Yt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(er.resolveURL(e.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=ga[i.type],a=ds[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Ce(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=ga[i.type],l=ds[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let v,m;if(f&&f!==u){const p=Math.floor(d/f),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=e.cache.get(_);y||(v=new l(a,p*f,i.count*f/h),y=new Nu(v,f/h),e.cache.add(_,y)),m=new lr(y,c,d%f/h,g)}else a===null?v=new l(i.count*c):v=new l(a,d,i.count*c),m=new Ce(v,c,g);if(i.sparse!==void 0){const p=ga.SCALAR,_=ds[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,A=new _(o[1],y,i.sparse.count*p),b=new l(o[2],x,i.sparse.count*c);a!==null&&(m=new Ce(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,C=A.length;R<C;R++){const S=A[R];if(m.setX(S,b[R*c]),c>=2&&m.setY(S,b[R*c+1]),c>=3&&m.setZ(S,b[R*c+2]),c>=4&&m.setW(S,b[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){const e=this.json,n=this.options,s=e.textures[t].source,o=e.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,n){const i=this,s=this.json,o=s.textures[t],a=s.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=Ih[d.magFilter]||an,h.minFilter=Ih[d.minFilter]||Zn,h.wrapS=Ph[d.wrapS]||tn,h.wrapT=Ph[d.wrapT]||tn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==$e&&h.minFilter!==an,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const o=i.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(v){const m=new De(v);m.needsUpdate=!0,d(m)}),e.load(er.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),jn(u,o),u.userData.mimeType=o.mimeType||wx(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Yt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Yt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[Yt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Uc,Rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Ao,Rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return ft}loadMaterial(t){const e=this,n=this.json,i=this.extensions,s=n.materials[t];let o;const a={},c=s.extensions||{},l=[];if(c[Yt.KHR_MATERIALS_UNLIT]){const u=i[Yt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,e))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new _t(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Je),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,Ae)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=Fe);const h=s.alphaMode||va.OPAQUE;if(h===va.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===va.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==It&&(l.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new tt(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==It&&(l.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==It){const u=s.emissiveFactor;a.emissive=new _t().setRGB(u[0],u[1],u[2],Je)}return s.emissiveTexture!==void 0&&o!==It&&l.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,Ae)),Promise.all(l).then(function(){const u=new o(a);return s.name&&(u.name=s.name),jn(u,s),e.associations.set(u,{materials:t}),s.extensions&&Ti(i,u,s),u})}createUniqueName(t){const e=oe.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Yt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return Lh(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a],h=Sx(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Yt.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Lh(new ye,l,e),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,s=n.meshes[t],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?xx(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const v=h[f],m=o[f];let p;const _=l[f];if(m.mode===pn.TRIANGLES||m.mode===pn.TRIANGLE_STRIP||m.mode===pn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Fu(v,_):new H(v,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===pn.TRIANGLE_STRIP?p.geometry=Rh(p.geometry,pu):m.mode===pn.TRIANGLE_FAN&&(p.geometry=Rh(p.geometry,ac));else if(m.mode===pn.LINES)p=new zu(v,_);else if(m.mode===pn.LINE_STRIP)p=new Ro(v,_);else if(m.mode===pn.LINE_LOOP)p=new Cv(v,_);else if(m.mode===pn.POINTS)p=new Oc(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Mx(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),jn(p,s),m.extensions&&Ti(i,p,m),e.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return s.extensions&&Ti(i,u[0],s),u[0];const d=new Kt;s.extensions&&Ti(i,d,s),e.associations.set(d,{meshes:t});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new je(Ri.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new bo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),jn(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Dt;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Nc(a,c)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],v=f.target,m=v.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,_=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",_)),l.push(g),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],v=u[3],m=u[4],p=[];for(let _=0,y=d.length;_<y;_++){const x=d[_],A=f[_],b=g[_],R=v[_],C=m[_];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const S=n._createAnimationTracks(x,A,b,R,C);if(S)for(let M=0;M<S.length;M++)p.push(S[M])}return new gc(s,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Tx)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new ku:l.length>1?h=new Kt:l.length===1?h=l[0]:h=new ge,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=o),jn(h,s),s.extensions&&Ti(n,h,s),s.matrix!==void 0){const u=new Dt;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,s=new Kt;n.name&&(s.name=i.createUniqueName(n.name)),jn(s,n),n.extensions&&Ti(e,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Rn||d instanceof De)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(t,e,n,i,s){const o=[],a=t.name?t.name:t.uuid,c=[];ui[s.path]===ui.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(ui[s.path]){case ui.weights:l=ys;break;case ui.rotation:l=Ms;break;case ui.position:case ui.scale:l=Ss;break;default:switch(n.itemSize){case 1:l=ys;break;case 2:case 3:default:l=Ss;break}break}const h=i.interpolation!==void 0?_x[i.interpolation]:or,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+ui[s.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=_c(e.constructor),i=new Float32Array(e.length);for(let s=0,o=e.length;s<o;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof Ms?vx:sd;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ex(r,t,e){const n=t.attributes,i=new nn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new E(c[0],c[1],c[2]),new E(l[0],l[1],l[2])),a.normalized){const h=_c(ds[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const a=new E,c=new E;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=_c(ds[d.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Nn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Lh(r,t,e){const n=t.attributes,i=[];function s(o,a){return e.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=vc[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(t.indices!==void 0&&!r.index){const o=e.getDependency("accessor",t.indices).then(function(a){r.setIndex(a)});i.push(o)}return qt.workingColorSpace!==Je&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qt.workingColorSpace}" not supported.`),jn(r,t),Ex(r,t,e),Promise.all(i).then(function(){return t.targets!==void 0?yx(r,t.targets,e):r})}const Dh=Object.freeze(Object.defineProperty({__proto__:null,GLTFLoader:xo},Symbol.toStringTag,{value:"Module"}));function Ax(r){const t=new Map,e=new Map,n=r.clone();return rd(r,n,function(i,s){t.set(s,i),e.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=t.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(c){return e.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function rd(r,t,e){e(r,t);for(let n=0;n<r.children.length;n++)rd(r.children[n],t.children[n],e)}const Rx=""+new URL("vixen-Bw6QEIQL.glb",import.meta.url).href,Cx=""+new URL("kailee-D5sbQsJE.glb",import.meta.url).href,Ix=""+new URL("brianna-DixyBXZ7.glb",import.meta.url).href,Px=""+new URL("payton-Du6iA-Fc.glb",import.meta.url).href,Lx=""+new URL("viper01-BlwxbHqH.glb",import.meta.url).href,Dx=""+new URL("viper02-2GCf4iAW.glb",import.meta.url).href,Nx=""+new URL("viper03-B25DYgFy.glb",import.meta.url).href,Ux=""+new URL("enforcer-CdRKLSXk.glb",import.meta.url).href,Ox=""+new URL("falcon-ncD82WOH.glb",import.meta.url).href,Fx=""+new URL("anims-Ce56vesA.glb",import.meta.url).href,kx=""+new URL("dockmood-CKkclv7Y.glb",import.meta.url).href,Bx=""+new URL("asphalt_normal-Dcisc5Pc.webp",import.meta.url).href,zx=""+new URL("hazard_stripe-BN7jM8wo.webp",import.meta.url).href,Hx=""+new URL("rust-D2EaGUf_.webp",import.meta.url).href,Vx=""+new URL("serials-jyHsnxhS.png",import.meta.url).href,Gx=""+new URL("gate_energy-BW75o9Zi.webp",import.meta.url).href,Wx=""+new URL("brand_billboard-D90d5nHR.webp",import.meta.url).href,Xx=""+new URL("brand_mark-C5afjhVd.webp",import.meta.url).href,Yx=""+new URL("brand_lockup-UNh_TFCl.webp",import.meta.url).href,Nh={vixen:Rx,kailee:Cx,brianna:Ix,payton:Px,viper01:Lx,viper02:Dx,viper03:Nx,enforcer:Ux,falcon:Ox,anims:Fx,dock:kx},Uh={asphaltNormal:Bx,hazard:zx,rust:Hx,serials:Vx,gateEnergy:Gx,billboard:Wx,mark:Xx},Me={gltf:{},tex:{},clips:{},failed:[]};async function Kx(r){const t=new xo,e=new vo,n=Object.keys(Nh),i=Object.keys(Uh),s=n.length+i.length;let o=0;const a=l=>{o++,r(o,s,l)};await Promise.all([...n.map(async l=>{try{Me.gltf[l]=await t.loadAsync(Nh[l])}catch(h){console.warn("[GM] model failed, using procedural fallback:",l,h),Me.failed.push(l)}a(l)}),...i.map(async l=>{try{const h=await e.loadAsync(Uh[l]);h.colorSpace=l==="asphaltNormal"?Pn:Ae,Me.tex[l]=h}catch(h){console.warn("[GM] texture failed:",l,h),Me.failed.push(l)}a(l)})]);for(const l of["viper01","viper02","viper03"])Me.gltf[l]?.scene.traverse(h=>{const u=h;if(!u.isSkinnedMesh||!/Body/i.test(u.name))return;const d=u.geometry,f=d.attributes.position,g=d.index?Array.from(d.index.array):Array.from({length:f.count},(p,_)=>_),v=p=>f.getY(p)>1.92||Math.abs(f.getX(p))>1,m=[];for(let p=0;p<g.length;p+=3)!v(g[p])&&!v(g[p+1])&&!v(g[p+2])&&m.push(g[p],g[p+1],g[p+2]);m.length<g.length&&(d.setIndex(m),console.info("[GM] cleaned",u.name,(g.length-m.length)/3,"stray tris"))});const c=Me.gltf.anims;if(c)for(const l of c.animations){const h=l.clone();h.tracks=h.tracks.filter(d=>d.name.endsWith(".quaternion")&&!d.name.startsWith("root."));const u=l.name.replace("AS_Chaos_","");h.name=u,Me.clips[u]=h}}function Oh(r){const t={value:0},e={value:new _t(1,1,1)};r.userData.flash=t,r.userData.flashColor=e,r.onBeforeCompile=n=>{n.uniforms.uFlash=t,n.uniforms.uFlashColor=e,n.fragmentShader=`uniform float uFlash;
uniform vec3 uFlashColor;
`+n.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
 gl_FragColor.rgb = mix(gl_FragColor.rgb, uFlashColor, uFlash);`)},r.customProgramCacheKey=()=>"gmflash"}const qx={vixen:1.78,kailee:1.62,brianna:1.66,payton:1.64,viper01:1.74,viper02:1.74,viper03:1.74,enforcer:2,falcon:2.5};function jx(r,t){const e=new Kt,n=new ft({color:r,roughness:.5,metalness:.3,emissive:r,emissiveIntensity:.15}),i=new H(new Co(.28,t*.5,4,10),n);i.position.y=t*.5,e.add(i);const s=new H(new Ze(.2,12,10),n);s.position.y=t*.92,e.add(s);const o=new H(new xt(.5,.12,.7),new ft({color:2236962,emissive:16711884,emissiveIntensity:.6}));return o.position.y=.06,e.add(o),e.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),e}const Zx={vixen:16719823,kailee:16747051,brianna:1014346,payton:9059583,viper01:16732064,viper02:16732064,viper03:16732064,enforcer:9055202,falcon:13635632};function $x(r,t={}){const e=new Kt,n=new Kt;e.add(n);const i=Me.gltf[r],s=[],o={};let a,c=null;const l={};let h=!1;const u=qx[r];if(i){a=Ax(i.scene);const d=new Map;a.traverse(_=>{const y=_;if(_.isBone&&(o[_.name]=_),y.isMesh){y.castShadow=!0,y.receiveShadow=!1,y.frustumCulled=!1;const A=(Array.isArray(y.material)?y.material:[y.material]).map(b=>{let R=d.get(b);if(!R){R=b.clone();const C=R;(C.transparent||C.alphaTest>0)&&(C.transparent=!1,C.alphaTest=.5,C.depthWrite=!0),C.side=Dn,t.tint!==void 0&&C.color&&C.color.multiply(new _t(t.tint)),t.emissiveBoost&&C.emissive&&(C.emissiveIntensity=(C.emissiveIntensity||1)*t.emissiveBoost),Oh(R),d.set(b,R),s.push(R)}return R});y.material=Array.isArray(y.material)?A:A[0]}});let f=null,g=0;a.traverse(_=>{const y=_;if(y.isMesh){const x=y.geometry.attributes.position.count;x>g&&(g=x,f=y)}}),a.traverse(_=>{const y=_;y.isMesh&&y!==f&&(y.castShadow=!1)}),a.updateMatrixWorld(!0);const v=o.head||o.Head;let m=0;if(v){const _=new E;v.getWorldPosition(_),m=_.y+.12}if(!(m>.2)){const _=new nn().setFromObject(a);m=_.max.y-_.min.y}const p=u/Math.max(.01,m);if(a.scale.multiplyScalar(p),n.add(a),r!=="falcon"&&Object.keys(Me.clips).length){c=new Eh(a);for(const[_,y]of Object.entries(Me.clips)){const x=c.clipAction(y);l[_]=x}}else if(r==="falcon"&&i.animations.length){c=new Eh(a);const _=i.animations[0].clone();_.tracks=_.tracks.filter(y=>!y.name.endsWith(".position")||y.name.startsWith("Hips")),l.Idle_Skate=c.clipAction(_)}}else h=!0,a=jx(t.tint??Zx[r],u),a.traverse(d=>{const f=d;if(f.isMesh){const g=f.material.clone();Oh(g),f.material=g,s.push(g)}}),n.add(a);return{root:e,pivot:n,model:a,mats:s,mixer:c,actions:l,bones:o,procedural:h,height:u}}function Fh(r,t,e){for(const n of r.mats){const i=n.userData;i.flash&&(i.flash.value=t,e&&i.flashColor.value.copy(e))}}function to(r){const t=Me.gltf.dock;if(!t)return null;const e=t.scene.getObjectByName(r);if(!e)return null;const n=e.clone(!0);return n.position.set(0,0,0),n.rotation.set(0,0,0),n}function Jx(r){return r==="hyperdrive"?"suspense":"fastbeat"}class Qx{constructor(){this.ctx=null,this.muted=!1,this.skateGain=null,this.skateFilter=null,this.musicOn=!1,this.nextNoteTime=0,this.step=0,this.intensity=0,this.arenaMusic="fastbeat",this.musicTimer=0,this.voMan=null,this.voLoad=null}unlock(){try{const e=navigator.audioSession;e&&(e.type="playback")}catch{}this.init();const t=this.ctx;if(t){try{const e=t.createBuffer(1,1,22050),n=t.createBufferSource();n.buffer=e,n.connect(t.destination),n.start(0)}catch{}t.state!=="running"&&t.resume().catch(()=>{}),this.muted&&this.setMuted(!1)}}init(){if(this.ctx){this.ctx.state!=="running"&&this.ctx.resume().catch(()=>{});return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=.7;const n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,this.master.connect(n),n.connect(e.destination),this.sfxBus=e.createGain(),this.sfxBus.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=.6,this.musicBus.connect(this.master);const i=e.sampleRate*1.5;this.noiseBuf=e.createBuffer(1,i,e.sampleRate);const s=this.noiseBuf.getChannelData(0);for(let a=0;a<i;a++)s[a]=Math.random()*2-1;const o=e.createBufferSource();o.buffer=this.noiseBuf,o.loop=!0,this.skateFilter=e.createBiquadFilter(),this.skateFilter.type="bandpass",this.skateFilter.frequency.value=400,this.skateFilter.Q.value=.8,this.skateGain=e.createGain(),this.skateGain.gain.value=0,o.connect(this.skateFilter),this.skateFilter.connect(this.skateGain),this.skateGain.connect(this.sfxBus),o.start()}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:.7)}get t(){return this.ctx?this.ctx.currentTime:0}env(t,e,n,i,s){t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(i,e+n),t.gain.exponentialRampToValueAtTime(1e-4,e+n+s)}tone(t,e,n,i,s,o=0,a){if(!this.ctx)return;const c=this.t+o,l=this.ctx.createOscillator();l.type=t,l.frequency.setValueAtTime(e,c),l.frequency.exponentialRampToValueAtTime(Math.max(20,n),c+i);const h=this.ctx.createGain();this.env(h,c,.005,s,i),l.connect(h),h.connect(a||this.sfxBus),l.start(c),l.stop(c+i+.05)}noise(t,e,n,i=1,s="bandpass",o=0,a){if(!this.ctx)return;const c=this.t+o,l=this.ctx.createBufferSource();l.buffer=this.noiseBuf;const h=this.ctx.createBiquadFilter();h.type=s,h.frequency.setValueAtTime(n,c),h.Q.value=i,a&&h.frequency.exponentialRampToValueAtTime(a,c+t);const u=this.ctx.createGain();this.env(u,c,.004,e,t),l.connect(h),h.connect(u),u.connect(this.sfxBus),l.start(c,Math.random()),l.stop(c+t+.05)}punch(t=!1){this.noise(.12,t?.9:.6,t?900:1400,1.2),this.tone("sine",t?160:220,60,.12,.7)}whiff(){this.noise(.09,.25,2500,2,"bandpass",0,900)}hit(){this.noise(.08,.5,600,2),this.tone("square",140,50,.08,.25)}cone(){this.tone("sawtooth",340,70,.75,.55),this.tone("square",680,140,.6,.22),this.tone("sine",1100,180,.7,.45),this.noise(.8,.85,2200,.6,"bandpass",0,300)}chaosReady(){[0,.09,.18,.3].forEach((t,e)=>this.tone("sawtooth",[220,330,440,660][e],[220,330,440,660][e]*1.01,.35,.22,t)),this.tone("sine",55,55,.9,.6)}tether(){this.tone("sine",200,1400,.55,.3)}scream(){if(this.ctx){for(let t=0;t<4;t++)this.tone("sawtooth",520+t*37,1500+t*60,.7,.22);this.noise(1.1,.85,3e3,.5,"highpass")}}sonicBoost(){if(this.ctx){this.scream();for(let t=0;t<3;t++)this.tone("square",260+t*90,2400+t*200,.85,.28);this.tone("sine",60,25,1.1,.9),this.noise(1.3,1,5e3,.5,"highpass"),this.cone()}}slingshotLaunch(){this.tone("sawtooth",90,30,.9,.8),this.noise(.9,1,400,.4,"lowpass",0,80),this.tone("sine",1800,200,.6,.25)}impact(){this.tone("sine",110,30,.6,.9),this.noise(.5,.8,300,.5,"lowpass",0,60)}enemyDie(){this.tone("square",300,40,.3,.2),this.noise(.25,.4,900,1,"bandpass",0,200)}playerHurt(){this.tone("square",180,70,.18,.35),this.noise(.12,.4,500,1)}kaileeHurt(){this.tone("triangle",520,300,.12,.2)}kaileeDown(){this.tone("sawtooth",400,80,.7,.3)}kaileeUp(){[0,.08,.16].forEach((t,e)=>this.tone("triangle",440*(1+e*.25),440*(1+e*.25),.15,.2,t))}pistol(){this.noise(.06,.4,3e3,1),this.tone("square",900,200,.05,.12)}blade(){this.noise(.1,.35,4e3,3,"bandpass",0,1500),this.noise(.25,.15,800,.5,"lowpass")}bolt(){this.tone("sawtooth",700,300,.2,.15)}zap(){this.noise(.18,.4,5e3,4),this.tone("square",1200,600,.12,.12)}splash(){this.noise(.8,.8,1200,.5,"lowpass",0,200)}clang(){this.tone("triangle",620,600,.6,.3),this.tone("triangle",931,900,.5,.2)}hop(){this.tone("sine",300,600,.12,.2)}land(){this.noise(.08,.3,300,1,"lowpass")}brake(){this.noise(.25,.25,5e3,6,"bandpass",0,2500)}pickup(){this.tone("sine",660,1320,.15,.3)}waveStart(){this.tone("sawtooth",110,110,.6,.35),this.tone("sawtooth",165,165,.6,.25,.15),this.noise(.5,.3,200,1,"lowpass")}waveClear(){[0,.12,.24].forEach((t,e)=>this.tone("square",[392,523,784][e],[392,523,784][e],.25,.18,t))}gateOpen(){this.tone("sine",110,880,1.6,.35),this.tone("sawtooth",55,220,1.6,.2)}win(){[0,.15,.3,.5].forEach((t,e)=>this.tone("sawtooth",[262,330,392,523][e],[262,330,392,523][e],.6,.2,t))}lose(){[0,.25,.5].forEach((t,e)=>this.tone("sawtooth",[220,185,147][e],[218,183,110][e],.6,.25,t))}ui(){this.tone("square",880,1100,.06,.12)}telegraph(){this.tone("square",1500,1500,.07,.08)}setSkate(t,e){if(!this.skateGain||!this.ctx||!this.skateFilter)return;const n=e?Math.min(1,t)*.12:0;this.skateGain.gain.setTargetAtTime(n,this.t,.05),this.skateFilter.frequency.setTargetAtTime(250+t*700,this.t,.1)}startMusic(){this.ctx||this.init(),this.ctx&&(this.ctx.state==="suspended"&&this.ctx.resume(),this.musicTimer||(this.musicTimer=setInterval(()=>this.updateMusic(),50)),!this.musicOn&&(this.musicOn=!0,this.nextNoteTime=this.t+.1,this.step=0))}stopMusic(){this.musicOn=!1}setArena(t){this.arenaMusic=Jx(t)}updateMusic(){if(!this.ctx||!this.musicOn)return;if(this.arenaMusic==="suspense")return this.updateSuspense();const t=60/138/4,e=[36,0,36,48,0,36,46,0,36,0,36,48,43,0,41,39];for(;this.nextNoteTime<this.t+.15;){const n=this.step%16,i=Math.floor(this.step/16)%4,s=this.nextNoteTime-this.t,o=[0,0,3,-2][i];if(e[n]){const a=440*Math.pow(2,(e[n]+o-69)/12);this.tone("sawtooth",a,a*.98,t*.8,.12,s,this.musicBus)}if(e[n]){const a=440*Math.pow(2,(e[n]+o+24-69)/12);this.tone("square",a,a,t*.7,.05,s,this.musicBus)}n%4===0&&(this.toneKick(s),this.tone("triangle",180,60,.12,.3,s,this.musicBus)),n%2===1&&this.noiseHat(s,.04+this.intensity*.04),(n===4||n===12)&&this.intensity>.5&&this.noiseSnare(s),this.nextNoteTime+=t,this.step++}}updateSuspense(){const t=.4166666666666667;for(;this.nextNoteTime<this.t+.2;){const e=this.step%16,n=this.nextNoteTime-this.t;e%2===0&&this.tone("sine",55,50,t*1.6,.35,n,this.musicBus),(e===0||e===8)&&(this.tone("triangle",220,220,t*6,.08,n,this.musicBus),this.tone("triangle",233,233,t*6,.06,n,this.musicBus)),e%2===0&&this.tone("triangle",110,104,t*1.4,.18,n,this.musicBus),(e===0||e===8)&&(this.tone("sawtooth",440,440,t*5,.04,n,this.musicBus),this.tone("sawtooth",466,466,t*5,.035,n,this.musicBus)),e%4===3&&this.noiseHat(n,.05),this.nextNoteTime+=t,this.step++}}duck(t){this.musicBus&&this.ctx&&this.musicBus.gain.setTargetAtTime(t?.3:.6,this.t,.15)}voKey(t){return t.toLowerCase().replace(/[^a-z0-9 ]/g,"").trim().split(/\s+/).slice(0,6).join("_")}async realVO(t,e){this.voLoad||(this.voLoad=fetch("vo/manifest.json").then(s=>s.ok?s.json():{}).then(s=>{this.voMan=s}).catch(()=>{this.voMan={}})),await this.voLoad;const n=this.voMan?.[t.toUpperCase()];if(!n||this.muted)return!1;const i=n[this.voKey(e)];return i?new Promise(s=>{const o=new Audio("vo/"+i);o.volume=1,this.duck(!0);let a=!1;const c=l=>{a||(a=!0,this.duck(!1),s(l))};setTimeout(()=>{o.pause(),c(!0)},12e3),o.onended=()=>c(!0),o.onerror=()=>c(!1),o.play().catch(()=>c(!1))}):!1}say(t,e){return new Promise(n=>setTimeout(n,900+e.length*55))}ttsSay(t,e){return new Promise(n=>{const i=window.speechSynthesis;if(!i||this.muted){setTimeout(n,400+e.length*55);return}const s={VIXEN:[.85,.95],KAILEE:[1.25,1.08],BRIANNA:[.95,1],PAYTON:[1.05,.9],KAMYRN:[1.35,1.12],LILI:[1.6,1.15],FANG:[.6,.9],COBRA:[.5,.8]},[o,a]=s[t]??[1,1],c=new SpeechSynthesisUtterance(e.replace(/…/g,", ")),l=i.getVoices().filter(g=>/^en/i.test(g.lang)),h=l.filter(g=>/female|samantha|victoria|karen|zira|susan|aria|jenny|fiona|moira|tessa|google us english|google uk english female/i.test(g.name)),u=h.length?h:l;u.length&&(c.voice=u[Math.abs(t.length*7+t.charCodeAt(0))%u.length]),c.pitch=Math.min(2,o),c.rate=a,c.volume=1;let d=!1;const f=()=>{d||(d=!0,this.duck(!1),n())};c.onend=f,c.onerror=f,setTimeout(f,1500+e.length*120),this.duck(!0),(i.speaking||i.pending)&&i.cancel(),i.speak(c)})}stopVoice(){try{window.speechSynthesis?.cancel()}catch{}}rage(){this.tone("sawtooth",70,140,.8,.5),this.noise(.6,.6,900,.6,"bandpass",0,3e3),this.tone("square",220,440,.4,.15,.1)}mine(){this.tone("sine",90,25,.9,1),this.noise(.9,1,600,.4,"lowpass",0,60),this.noise(.2,.6,3e3,1)}mineClick(){this.tone("square",2200,2200,.05,.15)}radio(){this.noise(.12,.12,2500,3)}toneKick(t){this.tone("sine",120,40,.2,.45,t,this.musicBus)}noiseHat(t,e){if(!this.ctx)return;const n=this.t+t,i=this.ctx.createBufferSource();i.buffer=this.noiseBuf;const s=this.ctx.createBiquadFilter();s.type="highpass",s.frequency.value=7e3;const o=this.ctx.createGain();this.env(o,n,.002,e,.04),i.connect(s),s.connect(o),o.connect(this.musicBus),i.start(n,Math.random()),i.stop(n+.08)}noiseSnare(t){if(!this.ctx)return;const e=this.t+t,n=this.ctx.createBufferSource();n.buffer=this.noiseBuf;const i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.value=1800;const s=this.ctx.createGain();this.env(s,e,.002,.3,.15),n.connect(i),i.connect(s),s.connect(this.musicBus),n.start(e,Math.random()),n.stop(e+.2)}}const Q=new Qx,ty=""+new URL("vixen_handgun-INCCQtnd.glb",import.meta.url).href,ey=""+new URL("kailee_40cal-CAa1rFfD.glb",import.meta.url).href,ny="modulepreload",iy=function(r,t){return new URL(r,t).href},kh={},Bh=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");i=Promise.allSettled(e.map(l=>{if(l=iy(l,n),l in kh)return;kh[l]=!0;const h=l.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let g=o.length-1;g>=0;g--){const v=o[g];if(v.href===l&&(!h||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":ny,h||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),h)return new Promise((g,v)=>{f.addEventListener("load",g),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})},sy=""+new URL("medic_bot-BUUoJBF-.glb",import.meta.url).href,ry=""+new URL("GM_Sky_DockNight_Equirect_PoleFade-DTSNX9cV.png",import.meta.url).href;let Gt=-18,Ft=18;const oy=-18,ay=18,cy=-17,ly=17,hy=-6,We=[{z0:-8,z1:40,barrier:42,name:"BERTH 1"},{z0:42,z1:86,barrier:88,name:"BERTH 2 — CRANE YARD"},{z0:88,z1:132,barrier:134,name:"BERTH 3 — FLOODED LOT"},{z0:134,z1:176,barrier:-1,name:"EXTRACTION BERTH"}],nr=172,xa=178;function zh(r,t){if(r.ride!=="ramp")return r.h;const e=(t-r.minZ)/(r.maxZ-r.minZ);return r.h*Math.max(0,Math.min(1,r.rampDir===-1?1-e:e))}function di(r,t,e,n=!0){const i=document.createElement("canvas");i.width=r,i.height=t,e(i.getContext("2d"));const s=new Hu(i);return s.colorSpace=n?Ae:Pn,s.wrapS=s.wrapT=tn,s.anisotropy=4,s}function Gs(r){let t=r;return()=>(t=t*16807%2147483647,(t-1)/2147483646)}class uy{constructor(t,e){this.colliders=[],this.barriers=[],this.puddles=[],this.lightAnchors=[],this.pointLights=[],this.hook={pivot:new E(0,17,66),len:15.2,angle:0,prevX:0,group:new Kt,load:new H,cable:new H,vx:0,light:new H},this.gate={group:new Kt,energy:null,strips:[],active:!1,light:0},this.fogMats=[],this.fogCols=[],this.scrollTex=[],this.blinkers=[],this.arena="dock",this.dockSkyMap=null,this.hdSkyMap=null,this.hdGroup=null,this.dockDress=[],this.dockColliders=[],this.hdColliders=[],this.hdWalk=new Kt,this.hdRails=[],this.hdSkins=[],this.hdSkinned=!1,this.healSpots=[],this.civs=[],this.pocketBoxes=[],this.scene=t,t.background=new _t(726040),t.fog=new Dc(1055778,.0075),this.buildSky();const n=new Du;n.background=new _t(132099);const i=(d,f,g,v,m,p,_)=>{const y=new H(new xt(m,p,_),new It({color:d}));y.position.set(f,g,v),n.add(y)};i(3211072,-9,3,0,.5,1.2,30),i(3211072,9,5,4,.5,.6,20),i(16715984,0,4,12,8,6,.5),i(16715984,0,2,-12,4,1,.5),i(3364215,0,14,0,30,.5,30),i(16747051,6,2,-8,2,.6,.5);const s=new lc(e);t.environment=s.fromScene(n,.02).texture,t.environmentIntensity=.55,s.dispose(),this.hemi=new x_(5930902,1708064,1.7),t.add(this.hemi);const o=new td(11850474,2.3);o.position.set(-12,30,-10),o.castShadow=!0,o.shadow.mapSize.set(1024,1024);const a=o.shadow.camera;a.left=-26,a.right=26,a.top=26,a.bottom=-26,a.near=1,a.far=90,o.shadow.bias=-8e-4,o.shadow.normalBias=.03,t.add(o),t.add(o.target),this.moon=o;for(let d=0;d<7;d++){const f=new _o(3800852,0,14,1.6);t.add(f),this.pointLights.push(f)}this.buildGround();const c=new Set(t.children),l=this.colliders.length;this.buildWater(),this.buildContainers(),this.buildCranes(),this.buildFog(),this.buildBrand(),this.dockColliders=this.colliders.slice(l);const h=new Set(t.children);this.buildBarriers();const u=new Set(t.children);this.buildPuddles(),this.buildBreathePockets(),this.buildHook();for(const d of t.children)!c.has(d)&&(h.has(d)||!u.has(d))&&this.dockDress.push(d);this.buildHyperdriveWalk(),this.buildGate(),this.buildDust(),this.buildReadability(),this.buildAerialRails()}setArena(t){this.arena=t;const e=t==="hyperdrive";Gt=e?cy:oy,Ft=e?ly:ay;const n=this.sky.material;!this.dockSkyMap&&n.map&&(this.dockSkyMap=n.map);const i=this.scene.fog;i.color.set(e?1708080:1055778),i.density=e?.0062:.0075,this.hemi.color.set(e?9071871:5930902),this.hemi.groundColor.set(e?2755114:1708064),this.moon.color.set(e?7006463:11850474);for(const s of this.fogCols)s.visible=!e;for(const s of this.fogMats)s.color.set(e?16726744:3997530);for(const s of this.pointLights)s.color.set(e?16723920:3800852);if(this.scene.environmentIntensity=e?.8:.55,e){if(this.hdSkyMap?(n.map=this.hdSkyMap,n.needsUpdate=!0):new vo().load("hyperdrive/sky.jpg",s=>{s.colorSpace=Ae,s.wrapS=ir,s.wrapT=gn,s.repeat.set(2,1),s.offset.y=-.12,this.hdSkyMap=s,this.arena==="hyperdrive"&&(n.map=s,n.needsUpdate=!0)}),!this.hdGroup){const s=new Kt;s.name="hyperdrive-greybox",this.hdGroup=s,s.rotation.y=Math.PI,s.position.set(0,-.05,222),s.scale.set(1.9,1,1),this.scene.add(s),Bh(async()=>{const{GLTFLoader:o}=await Promise.resolve().then(()=>Dh);return{GLTFLoader:o}},void 0,import.meta.url).then(({GLTFLoader:o})=>new o().load("hyperdrive/greybox.glb",a=>{a.scene.traverse(c=>{const l=c;if(l.isMesh){if(/ZONE_Ground|Ground/i.test(l.name)||/Ground/i.test(l.parent?.name??"")){l.visible=!1;return}l.receiveShadow=!0,l.castShadow=!1,l.matrixAutoUpdate=!1,l.updateMatrix()}}),s.add(a.scene),this.skinHyperdrive(a.scene)},void 0,a=>console.warn("[GM] hyperdrive greybox failed",a)))}this.hdGroup.visible=!0}for(const s of this.dockDress)s.visible=!e;this.dockPockets&&(this.dockPockets.visible=!e);for(const s of this.pocketBoxes)s.active=!e;for(const s of this.dockColliders)s.active=!e;for(const s of this.hdColliders)s.active=e;this.hdWalk.visible=e;for(const s of this.puddles)s.on=!1,s.warn=!1;e||(this.dockSkyMap&&(n.map=this.dockSkyMap,n.needsUpdate=!0),this.hdGroup&&(this.hdGroup.visible=!1))}skinHyperdrive(t){if(this.hdSkinned)return;this.hdSkinned=!0;const e={};t.traverse(i=>{const s=i;if(s.isMesh)for(const o of["DECK_Kicker","DECK_FunBox","DECK_SandbagLip","RH_OuterWall","RING_Facade"])!e[o]&&s.name.startsWith(o)&&(e[o]=s)});let n=0;for(const i of this.hdSkins){const s=e[i.key];if(!s)continue;const o=s.geometry.clone();o.computeBoundingBox();const a=o.boundingBox,c=new E;a.getSize(c);const l=new E;if(a.getCenter(l),o.translate(-l.x,-a.min.y,-l.z),c.z>c.x!=i.sz>i.sx){o.rotateY(Math.PI/2);const u=c.x;c.x=c.z,c.z=u}if(o.scale(i.sx/Math.max(.01,c.x),i.h/Math.max(.01,c.y),i.sz/Math.max(.01,c.z)),i.key==="DECK_Kicker")continue;const h=i.mesh;h.geometry.dispose(),h.geometry=o,h.position.y=0,n++}console.info("[GM] hyperdrive skins",n,Object.keys(e))}buildHyperdriveWalk(){const t=this.hdWalk;t.name="hyperdrive-walkable",t.visible=!1,this.scene.add(t);const e=new ft({color:7038032,roughness:.9,metalness:.05}),n=new ft({color:4868650,roughness:.85,metalness:.2}),i=new ft({color:9074256,roughness:1}),s=new ft({color:3816512,roughness:.5,metalness:.7}),o=new ft({color:2233352,emissive:16747050,emissiveIntensity:2.2}),a=new ft({color:2230290,emissive:16719775,emissiveIntensity:2.4}),c=(A,b,R,C,S,M,P=0,O,F,V)=>{const q=new H(new xt(C,M,S),A);if(F&&this.hdSkins.push({mesh:q,key:F,sx:C,sz:S,h:M,ry:P}),q.position.set(b,M/2,R),q.rotation.y=P,q.castShadow=!0,q.receiveShadow=!0,t.add(q),O){const yt=new H(new xt(C+.04,.12,S+.04),O);yt.position.set(b,M-.25,R),yt.rotation.y=P,t.add(yt)}const G=Math.abs(Math.cos(P)),$=Math.abs(Math.sin(P)),W=(C*G+S*$)/2,st=(C*$+S*G)/2,ct={minX:b-W,maxX:b+W,minZ:R-st,maxZ:R+st,h:M,active:!1,ride:V};return this.colliders.push(ct),this.hdColliders.push(ct),ct},l=(A,b,R,C,S,M=1)=>{const P=new ye,O=-R/2,F=R/2,V=-C/2,q=C/2,G=M===1?V:q,$=M===1?q:V,W=[O,0,G,F,0,G,F,S,$,O,0,G,F,S,$,O,S,$,O,0,$,O,S,$,F,S,$,O,0,$,F,S,$,F,0,$,O,0,G,O,S,$,O,0,$,F,0,G,F,0,$,F,S,$];P.setAttribute("position",new Zt(W,3)),P.computeVertexNormals();const st=new H(P,u);st.material.side=Fe,st.position.set(A,0,b),st.castShadow=st.receiveShadow=!0,t.add(st),this.hdSkins.push({mesh:st,key:"DECK_Kicker",sx:R,sz:C,h:S,ry:M===1?0:Math.PI});const ct=new H(new xt(R,.06,.18),o);ct.position.set(A,S,b+$),t.add(ct);const yt={minX:A-R/2,maxX:A+R/2,minZ:b-C/2,maxZ:b+C/2,h:S,active:!1,ride:"ramp",rampDir:M};this.colliders.push(yt),this.hdColliders.push(yt)},h=(A,b,R,C=.75)=>{const S=R-b,M=(b+R)/2,P=new H(new Be(.07,.07,S,8),d);P.rotation.x=Math.PI/2,P.position.set(A,C,M),t.add(P);for(let F=b+.3;F<=R;F+=3){const V=new H(new xt(.1,C,.1),s);V.position.set(A,C/2,F),t.add(V)}const O={minX:A-.12,maxX:A+.12,minZ:b,maxZ:R,h:C,active:!1,ride:"rail"};this.colliders.push(O),this.hdColliders.push(O),this.hdRails.push(O)},u=new ft({color:5919808,roughness:.8,metalness:.1}),d=new ft({color:16756848,emissive:16742938,emissiveIntensity:1.2,metalness:.9,roughness:.25});for(let A=-10;A<182;A+=8)c(e,Gt-1,A+4,2,8,7,0,o),c(e,Ft+.9,A+4,1.6,8,7,0,o);c(e,0,-11,40,2.6,7),c(e,0,xa+1.5,40,2.6,7);const f=[[-7,8,0],[7,16,0],[-4,24,.3],[8,30,-.3],[-9,35,0]];for(const[A,b,R]of f)c(i,A,b,5,1.2,.9,R,void 0,"DECK_SandbagLip","top");l(0,4,3,4,1.1),c(e,0,8.5,3,5,1.1,0,o,"DECK_FunBox","top"),l(0,13,3,4,1.1,-1),h(-3,18,32),h(3.5,40,47),l(3.5,37,2.4,3.5,.8);for(const[A,b]of[[-11,12],[11,4],[10.8,22],[-11,28],[7,33]])c(n,A,b,1.6,1.6,1.5,.2);const g=64;c(s,0,g,6,6,6,Math.PI/4,a,"RING_Facade"),c(e,-6.2,g,2.2,7,.9,0,o,"DECK_FunBox","top"),c(e,6.2,g,2.2,7,.9,0,o,"DECK_FunBox","top"),l(-6.2,g-4.75,2.2,1.5,.9),l(6.2,g-4.75,2.2,1.5,.9),l(-6.2,g+4.75,2.2,1.5,.9,-1),l(6.2,g+4.75,2.2,1.5,.9,-1),l(0,51,3,3.5,.9),h(-7,44,53),h(7,75,85);for(let A=0;A<10;A++){const b=A/10*Math.PI*2;A===0||A===5||c(e,Math.sin(b)*9.5,g+Math.cos(b)*9.5,5.2,.9,2.4,b,o,"RH_OuterWall")}for(const[A,b]of[[-11.5,50],[11.5,50],[-11.5,78],[11.5,78]])c(n,A,b,1.4,4,1.2,0,o);for(let A=94;A<132;A+=9)c(s,-10.5,A,5,1.2,5.5,0,a),c(s,10.5,A,5,1.2,5.5,0,a);for(const[A,b]of[[-5,99],[5,108],[-6,116],[5,125]])c(n,A,b,2.2,1.4,.9,.5,void 0,"DECK_FunBox","top");h(0,92,120,.8),l(0,90.5,2.2,3,.85),l(2.5,128,3,4,1.2);const v=156;for(let A=0;A<12;A++){if(A%3===0)continue;const b=A/12*Math.PI*2;c(s,Math.sin(b)*7,v+Math.cos(b)*7,3.4,.8,1,b,o,"DECK_FunBox","top")}for(const[A,b]of[[-9,140],[9,140],[-10,170],[10,170]])c(e,A,b,4,1.2,3,0,a,"RH_OuterWall");h(-4,138,146,.8),h(4,166,174,.8),l(0,143,3,3.5,1);const m=new ft({color:12109016,roughness:.35,metalness:.85}),p=new ft({color:530464,emissive:2812159,emissiveIntensity:2.2}),_=new ft({color:1312802,emissive:10107647,emissiveIntensity:2});for(const A of[-1,1]){const b=A*14.8;for(const[R,C,S]of[[6,30,1.6],[48,80,2],[96,126,1.6],[140,168,2.2]])c(m,b,(R+C)/2,3.6,C-R,S,0,A<0?p:_,void 0,"top"),l(b,R-2,3.6,4,S),l(b,C+2,3.6,4,S,-1),h(b-A*1.9,R+1,C-1,S+.8);for(const R of[38,88,134])c(n,A*13.5,R,2.4,2.4,1.3,.3*A,p),c(e,A*11,R+3,.6,4,1.6,0,_);for(const R of[20,64,112,156])c(s,A*15.5,R,2.6,4,3.2,0,p,void 0,"top")}c(m,-3.4,177.2,1.2,1.2,6,0,p),c(m,3.4,177.2,1.2,1.2,6,0,p);const y=new H(new xt(8,1,1.2),_);y.position.set(0,6.4,177.2),t.add(y);for(const[A,b,R,C]of[[-15.6,40,Math.PI/2,2812159],[15.6,86,-Math.PI/2,12109016],[-15.6,132,Math.PI/2,12109016],[15.6,134,-Math.PI/2,2812159]])this.addCiv(t,A,b,R,C,1710628);const x=new H(new Pe(5.6,5.8),new It({color:2812159,transparent:!0,opacity:.35,side:Fe}));x.position.set(0,2.9,177.6),t.add(x)}buildSky(){const t=di(1024,512,o=>{const a=o.createLinearGradient(0,0,0,512);a.addColorStop(0,"#02030a"),a.addColorStop(.35,"#0a1430"),a.addColorStop(.47,"#3a1846"),a.addColorStop(.5,"#ff4fb0"),a.addColorStop(.53,"#1a0f1c"),a.addColorStop(1,"#05070a"),o.fillStyle=a,o.fillRect(0,0,1024,512);const c=Gs(7);for(let h=0;h<700;h++){o.fillStyle=`rgba(255,255,255,${.3+c()*.7})`;const u=c()<.08?2:1;o.fillRect(c()*1024,c()*230,u,u)}o.fillStyle="#070509";for(let h=0;h<1024;h+=6+c()*14){const u=6+c()*30;o.fillRect(h,256-u,5+c()*12,u)}o.fillStyle="rgba(255,200,120,0.7)";for(let h=0;h<160;h++)o.fillRect(c()*1024,228+c()*26,1,1);const l=o.createRadialGradient(300,110,4,300,110,60);l.addColorStop(0,"#f4f8ff"),l.addColorStop(.18,"#cfe0ff"),l.addColorStop(.3,"rgba(120,160,255,0.25)"),l.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=l,o.fillRect(220,30,160,160)});t.wrapS=tn,t.wrapT=gn;const e=new H(new Ze(320,48,24),new It({map:t,side:Ye,fog:!1,depthWrite:!1}));e.name="skybox",e.renderOrder=-1,e.frustumCulled=!1,this.sky=e,this.scene.add(e);const n=new URLSearchParams(location.search),i=parseFloat(n.get("skyYaw")??"0")*Math.PI/180,s=parseFloat(n.get("skyV")??"0.15");e.rotation.y=i,new vo().load(ry,o=>{o.colorSpace=Ae,o.wrapS=tn,o.wrapT=gn,o.offset.y=-s,o.anisotropy=4;const a=e.material;a.map=o,a.needsUpdate=!0})}buildAerialRails(){const t=hy,e=nr,n=e-t,i=(t+e)/2,s=new ft({color:2237998,metalness:.8,roughness:.35,emissive:3800852,emissiveIntensity:.35}),o=new It({color:3800852,fog:!1}),a=new ft({color:3817288,metalness:.6,roughness:.5}),c=7.5;for(const f of[-3.2,3.2]){const g=new H(new xt(.35,.35,n),s);g.position.set(f,c,i),this.scene.add(g);const v=new H(new xt(.12,.08,n),o);v.position.set(f,c+.22,i),this.scene.add(v)}for(let f=t+4;f<e;f+=14){const g=new H(new xt(Ft-Gt-1,.5,.5),a);g.position.set((Gt+Ft)/2,c+.6,f),this.scene.add(g);for(const m of[Gt+.6,Ft-.6]){const p=new H(new xt(.4,c+.6,.4),a);p.position.set(m,(c+.6)/2,f),this.scene.add(p)}const v=new H(new xt(1.2,.15,.3),new It({color:16719823,fog:!1}));v.position.set(0,c+.3,f),this.scene.add(v)}const l=di(128,128,f=>{f.clearRect(0,0,128,128),f.strokeStyle="#39ff14",f.lineWidth=14,f.lineCap="round",f.beginPath(),f.moveTo(24,40),f.lineTo(64,90),f.lineTo(104,40),f.stroke()});l.repeat.set(1,n/4);const h=new H(new Pe(2.2,n),new It({map:l,transparent:!0,opacity:.9,side:Fe,depthWrite:!1,blending:we,fog:!1}));h.rotation.x=-Math.PI/2,h.rotation.z=Math.PI,h.position.set(0,c+.05,i),this.scene.add(h),this.railChev=l;const u=l.clone();u.needsUpdate=!0,u.repeat.set(1,n/4);const d=new H(new Pe(1.6,n),new It({map:u,transparent:!0,opacity:.35,depthWrite:!1,blending:we}));d.rotation.x=-Math.PI/2,d.rotation.z=Math.PI,d.position.set(0,.035,i),this.scene.add(d),this.groundChev=u}buildReadability(){const t=new ft({color:2763312,metalness:.6,roughness:.5}),e=new It({color:16757575}),n=new It({color:16751152,transparent:!0,opacity:.22,blending:we,depthWrite:!1}),i=new Be(.09,.12,6,8),s=new xt(.9,.18,.4),o=new gi(4.2,24);for(let h=4;h<176;h+=18){const u=Ft-.9,d=new H(i,t);d.position.set(u,3,h),d.castShadow=!0,this.scene.add(d);const f=new H(s,e);f.position.set(u-.4,6,h),this.scene.add(f);const g=new H(o,n);g.rotation.x=-Math.PI/2,g.position.set(u-1.5,.03,h),this.scene.add(g),this.lightAnchors.push({pos:new E(u-.6,5.6,h),color:16752704,intensity:22,dist:18})}const a=new It({color:16722902});for(const h of[-6.5,6.5])for(let u=0;u<176;u+=12){const d=new H(new xt(.12,.05,7),a);d.position.set(h,.03,u+3.5),this.scene.add(d)}const c=new It({color:4251903}),l=new It({color:4251903,transparent:!0,opacity:.18,blending:we,depthWrite:!1});for(const h of[30,70,110,150]){for(const f of[Gt+1.2,Ft-.4]){const g=new H(new xt(.25,5,.25),c);g.position.set(f,2.5,h),this.scene.add(g)}const u=new H(new xt(Ft-Gt-1.6,.2,.25),c);u.position.set((Gt+Ft)/2+.4,5,h),this.scene.add(u);const d=new H(new Pe(Ft-Gt-1.6,1.2),l);d.rotation.x=-Math.PI/2,d.position.set((Gt+Ft)/2+.4,.025,h),this.scene.add(d),this.lightAnchors.push({pos:new E(0,4.5,h),color:4251903,intensity:16,dist:16})}}buildBreathePockets(){const t=new ft({color:2832970,roughness:.7,metalness:.3}),e=new ft({color:3800852,emissive:3800852,emissiveIntensity:1.2}),n=new ft({color:6965802,roughness:.9}),i=new Kt;i.name="dock-breathe-pockets",this.dockPockets=i;for(const h of We){const u=h.z0+(h.z1-h.z0)*.62;for(const[d,f]of[[-11,-4],[3,10]]){const g=(d+f)/2,v=f-d,m=new H(new xt(v,3.4,2.4),t);m.position.set(g,1.7,u),m.castShadow=m.receiveShadow=!0,i.add(m);const p=new H(new xt(v,.08,2.45),e);p.position.set(g,3.42,u),i.add(p),this.pocketBoxes.push(this.addBox(g,u,v,2.4,3.4))}for(const[d,f]of[[-10.5,-14],[9.5,-20]]){const g=new H(new xt(2.4,3.4,5),t);g.position.set(d,1.7,u+f),g.castShadow=g.receiveShadow=!0,i.add(g),this.pocketBoxes.push(this.addBox(d,u+f,2.4,5,3.4))}for(const[d,f,g]of[[-14.5,16,1],[14,-6,-1]]){const _=new H(new xt(3,1.2,6),n);_.position.set(d,1.2/2,u+f),_.castShadow=_.receiveShadow=!0,i.add(_);const y=this.addBox(d,u+f,3,6,1.2);y.ride="top",this.pocketBoxes.push(y);const x=u+f-g*(6/2+4/2),A=new H(new xt(3,.15,Math.hypot(4,1.2)),t);A.position.set(d,1.2/2,x),A.rotation.x=g*-Math.atan2(1.2,4),i.add(A);const b=this.addBox(d,x,3,4,1.2);b.ride="ramp",b.rampDir=g,this.pocketBoxes.push(b)}for(const[d,f]of[[-7,6],[6.5,8],[0,11]]){const g=new H(new xt(1.4,1.2,1.4),n);g.position.set(d,.6,u+f),g.castShadow=!0,i.add(g),this.pocketBoxes.push(this.addBox(d,u+f,1.4,1.4,1.2))}}const s=new ft({color:9071130,roughness:.6,metalness:.7}),o=new ft({color:4866104,roughness:.85,metalness:.2}),a=2.4,c=5;for(const h of We){for(const[u,d,f]of[[-16.3,h.z0+3,h.z0+13],[16.3,h.z1-13,h.z1-5]]){const g=f-d,v=(d+f)/2,m=new H(new xt(2.2,.25,g),o);m.position.set(u,a-.12,v),m.castShadow=m.receiveShadow=!0,i.add(m);for(let y=d;y<=f+.01;y+=g/2)for(const x of[u-1,u+1]){const A=new H(new xt(.14,a,.14),s);A.position.set(x,a/2,y),i.add(A)}const p=new H(new xt(.08,.08,g),e);p.position.set(u-Math.sign(u)*1.05,a+.9,v),i.add(p);const _=this.addBox(u,v,2.2,g,a);_.ride="top",this.pocketBoxes.push(_);for(const y of[1,-1]){const x=y===1?d-c/2:f+c/2,A=new H(new xt(2.2,.15,Math.hypot(c,a)),o);A.position.set(u,a/2,x),A.rotation.x=y*-Math.atan2(a,c),i.add(A);const b=this.addBox(u,x,2.2,c,a);b.ride="ramp",b.rampDir=y,this.pocketBoxes.push(b)}}for(const[u,d,f,g,v]of[[12.5,7,1.6,2.6,1.4],[-12.5,24,2.6,1.6,1.4],[2.5,38,1.4,1.4,1.2]]){const m=new H(new xt(f,v,g),n);m.position.set(u,v/2,h.z0+d),m.castShadow=m.receiveShadow=!0,i.add(m),this.pocketBoxes.push(this.addBox(u,h.z0+d,f,g,v))}}for(const[h,u,d,f]of[[-16.5,58,Math.PI/2,16747034],[16.6,100,-Math.PI/2,15261754],[-15.8,142,Math.PI/2,16747034]])this.addCiv(i,h,u,d,f,2765888);const l=new ft({color:2085258,emissive:2085258,emissiveIntensity:1.6});for(const h of We){const u=h.z0+(h.z1-h.z0)*.62+5,d=new H(new xt(1.1,.9,1.1),l);d.position.set(-9.5,.45,u),i.add(d);const f=new H(new xt(.7,.2,.2),new It({color:16777215}));f.position.set(-9.5,1,u),i.add(f);const g=f.clone();g.rotation.y=Math.PI/2,i.add(g);const v=new _o(2085258,6,7);v.position.set(-9.5,2,u),i.add(v);const m={x:-9.5,z:u,used:!1,mesh:d,mat:l,bot:null,extras:[f,g]};this.healSpots.push(m)}this.scene.add(i),Bh(async()=>{const{GLTFLoader:h}=await Promise.resolve().then(()=>Dh);return{GLTFLoader:h}},void 0,import.meta.url).then(({GLTFLoader:h})=>new h().load(sy,u=>{const d=u.scene,f=new nn().setFromObject(d),g=f.getSize(new E),v=1.15/Math.max(.001,g.y);for(const m of this.healSpots){const p=d.clone(!0);p.scale.setScalar(v),p.position.set(m.x,-f.min.y*v,m.z),p.rotation.y=Math.PI/2,p.traverse(_=>{_.isMesh&&(_.castShadow=!0)}),i.add(p),m.bot=p,m.mesh.visible=!1;for(const _ of m.extras)_.visible=!1;m.extras[0].parent.children.forEach(_=>{_.isPointLight&&_.position.z===m.z&&_.color.set(16727984)}),m.used&&(p.visible=!1)}},void 0,u=>console.warn("[GM] medic bot failed",u)))}resetHeals(){for(const t of this.healSpots)t.used=!1,t.bot?t.bot.visible=!0:t.mesh.visible=!0}useHeal(t){t.used=!0,t.mesh.visible=!1,t.bot&&(t.bot.visible=!1);for(const e of t.extras)e.visible=!1}addCiv(t,e,n,i,s,o){const a=new Kt;a.position.set(e,0,n),a.rotation.y=i;const c=new ft({color:13146744,roughness:.8}),l=new H(new xt(.42,.8,.26),new ft({color:o,roughness:.9}));l.position.y=.4;const h=new H(new Co(.24,.5,4,8),new ft({color:s,roughness:.7}));h.position.y=1.15;const u=new H(new Ze(.16,10,8),c);u.position.y=1.68;const d=new Kt;d.position.set(.3,1.38,0);const f=new H(new xt(.1,.5,.1),c);f.position.y=-.25,d.add(f),a.add(l,h,u,d),a.traverse(g=>{g.isMesh&&(g.castShadow=!0)}),t.add(a),this.civs.push({o:a,arm:d,ph:Math.random()*6})}addBox(t,e,n,i,s=3){const o={minX:t-n/2,maxX:t+n/2,minZ:e-i/2,maxZ:e+i/2,h:s,active:!0};return this.colliders.push(o),o}buildGround(){const t=Gs(7),e=di(1024,1024,_=>{_.fillStyle="#0d0e10",_.fillRect(0,0,1024,1024);for(let y=0;y<26e3;y++){const x=8+t()*26;_.fillStyle=`rgb(${x},${x},${x+2})`,_.fillRect(t()*1024,t()*1024,2,2)}for(let y=0;y<40;y++)_.fillStyle=`rgba(0,0,0,${.15+t()*.3})`,_.beginPath(),_.ellipse(t()*1024,t()*1024,30+t()*120,20+t()*60,t()*3,0,7),_.fill();_.strokeStyle="rgba(40,40,44,0.8)",_.lineWidth=3;for(let y=0;y<18;y++){_.beginPath();let x=t()*1024,A=t()*1024;_.moveTo(x,A);for(let b=0;b<6;b++)x+=(t()-.5)*120,A+=(t()-.5)*120,_.lineTo(x,A);_.stroke()}});e.repeat.set(4,22);const n=di(512,512,_=>{_.fillStyle="#b4b4b4",_.fillRect(0,0,512,512);for(let y=0;y<6;y++){const x=_.createRadialGradient(0,0,0,0,0,1);x.addColorStop(0,"#2a2a2a"),x.addColorStop(.6,"#4a4a4a"),x.addColorStop(1,"rgba(180,180,180,0)"),_.save(),_.translate(t()*512,t()*512),_.scale(60+t()*90,30+t()*50),_.fillStyle=x,_.beginPath(),_.arc(0,0,1,0,7),_.fill(),_.restore()}},!1);n.repeat.set(2,10);const i=Me.tex.asphaltNormal;i&&(i.wrapS=i.wrapT=tn,i.repeat.set(6,30));const s=new ft({map:e,roughnessMap:n,roughness:1,metalness:.15,normalMap:i||null,normalScale:new tt(.25,.25),envMapIntensity:.55}),o=new H(new Pe(42,200),s);o.rotation.x=-Math.PI/2,o.position.set(-3,0,85),o.receiveShadow=!0,this.scene.add(o);const a=new ft({color:16765466,roughness:.6,emissive:9069568}),c=new ss(new Pe(.25,3),a,60),l=new Dt,h=new ke().setFromEuler(new ln(-Math.PI/2,0,0));let u=0;for(let _=-6;_<176&&u<60;_+=6)l.compose(new E(0,.012,_),h,new E(1,1,1)),c.setMatrixAt(u++,l);c.count=u,c.receiveShadow=!0,this.scene.add(c);const d=Me.tex.hazard;d&&(d.wrapS=d.wrapT=tn,d.repeat.set(1,120));const f=new ft({color:d?16777215:15121940,map:d||null,roughness:.7,emissive:5915648,emissiveMap:d||null}),g=new H(new xt(.6,.18,190),f);g.position.set(Ft+.1,.09,85),g.receiveShadow=!0,this.scene.add(g);const v=new H(new xt(.5,3,190),new ft({color:1710620,roughness:.9}));v.position.set(Ft+.15,-1.5,85),this.scene.add(v);const m=new Be(.22,.28,.7,10),p=new ss(m,new ft({color:2236966,metalness:.7,roughness:.4}),20);for(let _=0;_<20;_++)l.makeTranslation(Ft-.3,.35,-4+_*9.3),p.setMatrixAt(_,l);p.castShadow=!0,this.scene.add(p)}buildWater(){const t=Me.tex.asphaltNormal?Me.tex.asphaltNormal.clone():null;t&&(t.wrapS=t.wrapT=tn,t.repeat.set(20,60),t.needsUpdate=!0,this.scrollTex.push(t)),this.waterMat=new ft({color:136464,roughness:.08,metalness:.85,normalMap:t,normalScale:new tt(.35,.35),envMapIntensity:1.6,emissive:6664,transparent:!0,opacity:.94});const e=new H(new Pe(120,260),this.waterMat);e.rotation.x=-Math.PI/2,e.position.set(Ft+60,-1.1,85),this.scene.add(e);const n=new H(new xt(14,9,110),new ft({color:461067,roughness:.9}));n.position.set(48,3,90),this.scene.add(n);const i=new H(new xt(10,12,12),n.material);i.position.set(48,13,50),this.scene.add(i);const s=new Ze(.25,6,4),o=new It({color:16756832}),a=new ss(s,o,40),c=new Dt;for(let l=0;l<40;l++)c.makeTranslation(41+l%2*.2,7.7+l%3*.1,40+l*2.6),a.setMatrixAt(l,c);this.scene.add(a)}containerMats(){const t=Gs(3);return di(512,256,n=>{n.fillStyle="#bdbdbd",n.fillRect(0,0,512,256);for(let i=0;i<512;i+=16){const s=n.createLinearGradient(i,0,i+16,0);s.addColorStop(0,"#8a8a8a"),s.addColorStop(.5,"#dcdcdc"),s.addColorStop(1,"#7a7a7a"),n.fillStyle=s,n.fillRect(i,0,16,256)}n.fillStyle="#555",n.fillRect(0,0,512,10),n.fillRect(0,246,512,10);for(let i=0;i<90;i++)n.fillStyle=`rgba(60,30,10,${t()*.35})`,n.fillRect(t()*512,t()*256,2+t()*8,10+t()*80);n.fillStyle="rgba(255,255,255,0.75)",n.font="bold 22px monospace",n.fillText("DLSU "+Math.floor(1e5+t()*899999),30,50),n.font="bold 14px monospace",n.fillText("MAX GR 30480 KG",30,72)})}buildContainers(){const t=this.containerMats(),e=new xt(2.44,2.59,6.06),n=[9182230,1915722,2764598,6961682,1589296,5902384],i=new ft({map:t,roughness:.65,metalness:.45,envMapIntensity:.6}),s=[],o=Gs(11);for(let m=-12;m<182;m+=6.2){const p=2+Math.floor(o()*2.2);for(let _=0;_<p;_++)s.push({x:Gt-1.3-_%2*.05,y:1.3+_*2.6,z:m+(o()-.5)*.3,ry:0,c:Math.floor(o()*n.length)});s.push({x:Gt-4,y:1.3,z:m,ry:0,c:Math.floor(o()*n.length)}),s.push({x:Gt-4,y:3.9,z:m,ry:0,c:Math.floor(o()*n.length)})}this.addBox(Gt-3,85,6,210,8);for(let m=-12;m<15;m+=6.2){for(let p=0;p<3;p++)s.push({x:m,y:1.3+p*2.6,z:-11,ry:Math.PI/2,c:Math.floor(o()*n.length)});for(let p=0;p<3;p++)s.push({x:m,y:1.3+p*2.6,z:xa+1.5,ry:Math.PI/2,c:Math.floor(o()*n.length)})}this.addBox(0,-11,30,2.6,8),this.addBox(0,xa+1.5,30,2.6,8);const a=[[-6,14,0,1],[6.5,28,Math.PI/2,1],[-8,52,Math.PI/2,2],[7,78,0,1],[-5,102,0,1],[8,118,Math.PI/2,1],[-9,150,0,2],[8.5,156,0,1]];for(const[m,p,_,y]of a){for(let x=0;x<y;x++)s.push({x:m,y:1.3+x*2.6,z:p,ry:_+x*.08,c:Math.floor(o()*n.length)});_===0?this.addBox(m,p,2.5,6.1,2.6*y):this.addBox(m,p,6.1,2.5,2.6*y)}const c=new ss(e,i,s.length),l=new Dt,h=new ke,u=new _t;s.forEach((m,p)=>{h.setFromEuler(new ln(0,m.ry,0)),l.compose(new E(m.x,m.y,m.z),h,new E(1,1,1)),c.setMatrixAt(p,l),c.setColorAt(p,u.setHex(n[m.c]))}),c.castShadow=!0,c.receiveShadow=!0,this.scene.add(c);const d=new ft({color:3812380,roughness:.8}),f=new ss(new xt(1.2,1.2,1.2),d,10);[[-11,33],[-11.5,35],[10,60],[-10.5,92],[11,128],[-11,128.5],[4,140],[-3,164],[11,6],[-11,70]].forEach(([m,p],_)=>{l.compose(new E(m,.6,p),h.setFromEuler(new ln(0,_,0)),new E(1,1,1)),f.setMatrixAt(_,l),this.addBox(m,p,1.3,1.3,1.2)}),f.castShadow=!0,f.receiveShadow=!0,this.scene.add(f);const v=to("DK_Mood_HangarStrip_Segmented_4m")||to("DK_Mood_HangarStrip_4m");for(let m=0;m<176;m+=12.4){let p;v?(p=v.clone(),p.rotation.y=Math.PI/2):p=new H(new xt(.1,.12,4),new It({color:3800852})),p.position.set(Gt+.05,3.2,m),p.traverse(_=>{const y=_.material;y&&y.emissive&&y.emissive.g>.1&&(y.emissiveIntensity=3)}),this.scene.add(p),m%24.8<1&&this.lightAnchors.push({pos:new E(Gt+1.5,3,m),color:3800852,intensity:9,dist:12})}}buildCranes(){const t=new ft({color:13213714,roughness:.55,metalness:.5}),e=new ft({color:1776414,roughness:.6,metalness:.6}),n=new It({color:16715808});this.blinkers.push(n);const i=s=>{const o=new Kt;for(const l of[Gt-2,Ft-.8])for(const h of[-3.5,3.5]){const u=new H(new xt(.9,18,.9),t);u.position.set(l,9,s+h),o.add(u)}for(const l of[Gt-2,Ft-.8]){const h=new H(new xt(1.1,1.1,8.2),t);h.position.set(l,1,s),o.add(h),this.addBox(l,s,1.4,8.4,2)}for(const l of[-3.5,3.5]){const h=new H(new xt(32,1.4,1.1),t);h.position.set(-1,18.5,s+l),o.add(h)}const a=new H(new xt(3,1.6,8.2),e);a.position.set(0,17.6,s),o.add(a);const c=new H(new xt(2.2,2,2.2),e);c.position.set(Ft-3,16.2,s+4.2),o.add(c);for(const l of[Gt-2,Ft-.8]){const h=new H(new Ze(.3,8,6),n);h.position.set(l,19.5,s),o.add(h)}o.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),this.scene.add(o)};i(66),i(146);for(const s of[20,105,165]){const o=new Kt;for(const l of[0,9])for(const h of[-4,4]){const u=new H(new xt(1,26,1),t);u.position.set(22+l,12,s+h),o.add(u)}const a=new H(new xt(46,1.6,2),t);a.position.set(18,25,s),o.add(a);const c=new H(new Ze(.45,8,6),n);c.position.set(-4,26,s),o.add(c),this.scene.add(o)}}fogTextures(){const t=Gs(21),e=di(128,256,i=>{i.clearRect(0,0,128,256);for(let s=0;s<70;s++){const o=64+(t()-.5)*70,a=t()*256,c=14+t()*30;for(const l of[a,a-256,a+256]){const h=i.createRadialGradient(o,l,0,o,l,c);h.addColorStop(0,`rgba(255,255,255,${.12+t()*.2})`),h.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=h,i.fillRect(o-c,l-c,c*2,c*2)}}}),n=di(64,128,i=>{const s=i.createImageData(64,128);for(let o=0;o<128;o++)for(let a=0;a<64;a++){const c=Math.exp(-Math.pow((a-31.5)/15,2)),l=o/127,h=Math.min(1,(1-l)*6)*Math.pow(l,.8),u=Math.round(255*c*h),d=(o*64+a)*4;s.data[d]=s.data[d+1]=s.data[d+2]=u,s.data[d+3]=255}i.putImageData(s,0,0)},!1);return n.wrapS=n.wrapT=gn,{noise:e,fade:n}}buildFog(){const{noise:t,fade:e}=this.fogTextures(),n=(()=>{const o=to("DK_Mood_FogColumn_Green_A");if(!o)return 5.6;const a=new nn().setFromObject(o);return a.max.y-a.min.y})(),i=[[-12.5,8,1],[-12.8,31,1.3],[-12.2,58,1],[-12.6,84,1.2],[-12.3,110,1.1],[-12.5,138,1.3],[11.8,46,.8],[12,96,.9],[-12,162,1.2],[10,168,1]],s=new Pe(3.2,n*1.35).translate(0,n*.675,0);i.forEach(([o,a,c],l)=>{const h=t.clone();h.needsUpdate=!0,h.offset.y=l*.37,this.scrollTex.push(h);const u=new It({color:3997530,map:h,alphaMap:e,transparent:!0,opacity:.55,depthWrite:!1,blending:we,side:Fe,fog:!1});this.fogMats.push(u);const d=new Kt;for(let g=0;g<3;g++){const v=new H(s,u);v.rotation.y=g/3*Math.PI,v.renderOrder=5,d.add(v)}d.scale.setScalar(c),d.position.set(o,0,a),d.userData.spin=.05+l%3*.03,this.fogCols.push(d),this.scene.add(d);const f=new H(new gi(1.1*c,20),new It({color:1769280,transparent:!0,opacity:.14,blending:we,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.set(o,.02,a),this.scene.add(f),this.lightAnchors.push({pos:new E(o,1.2,a),color:3800852,intensity:14,dist:13})})}buildBrand(){const t=Me.tex.billboard;for(const n of[24,96,160]){const i=new Kt,s=new H(new xt(.3,4.6,8.6),new ft({color:1118484,metalness:.7,roughness:.4}));i.add(s);const o=new H(new Pe(8.2,4.1),new It({map:t||null,color:t?16777215:16719823,transparent:!0,fog:!1}));o.position.x=.17,o.rotation.y=Math.PI/2;const a=new H(new Pe(8.2,4.1),new It({color:327942}));a.position.x=.16,a.rotation.y=Math.PI/2,i.add(a),i.add(o),i.position.set(Gt-1,10.4,n),this.scene.add(i),this.lightAnchors.push({pos:new E(Gt+2,8,n),color:16719823,intensity:18,dist:18})}const e=Me.tex.mark;if(e){const n=new It({map:e,transparent:!0,depthWrite:!1,color:16756976,polygonOffset:!0,polygonOffsetFactor:-2});for(const i of[3,45,72,115,140]){const s=new H(new Pe(2,2),n);s.rotation.y=Math.PI/2,s.position.set(Gt+.02,1.4,i),this.scene.add(s)}}}buildBarriers(){const t=di(256,64,e=>{e.clearRect(0,0,256,64);for(let n=4;n<64;n+=12)e.fillStyle="rgba(255,40,220,0.95)",e.fillRect(0,n,256,3);e.fillStyle="rgba(255,40,220,0.25)",e.fillRect(0,0,256,64)});t.repeat.set(6,1),this.scrollTex.push(t);for(const e of We){if(e.barrier<0)continue;const n=new It({map:t,color:16777215,transparent:!0,opacity:.9,blending:we,depthWrite:!1,side:Fe,fog:!1}),i=new H(new Pe(Ft-Gt+2,3.2),n);i.position.set((Gt+Ft)/2,1.6,e.barrier),this.scene.add(i);for(const o of[Gt,Ft]){const a=new H(new xt(.4,3.6,.4),new ft({color:273,emissive:16719823,emissiveIntensity:1.5}));a.position.set(o,1.8,e.barrier),this.scene.add(a)}const s=this.addBox((Gt+Ft)/2,e.barrier,Ft-Gt+4,.8,3);this.barriers.push({z:e.barrier,box:s,mesh:i,mat:n,open:0})}}buildPuddles(){const t=[[3,20,2.6],[-4,98,3],[5,108,2.8],[-1,122,3.2],[-6,112,2.4],[2,158,2.6]];for(const[e,n,i]of t){const s=new ft({color:266776,roughness:.05,metalness:.9,emissive:4245759,emissiveIntensity:.05,transparent:!0,opacity:.92,envMapIntensity:2}),o=new H(new gi(i,28),s);o.rotation.x=-Math.PI/2,o.position.set(e,.015,n),o.receiveShadow=!0,this.scene.add(o);const a=new zu(new ye,new Ao({color:10547455,transparent:!0,blending:we,fog:!1}));a.geometry.setAttribute("position",new Ce(new Float32Array(24*6),3)),a.position.set(e,.05,n),a.visible=!1,this.scene.add(a);const c=new H(new Be(.06,.06,i*1.6,6),new ft({color:1118481,emissive:16747051,emissiveIntensity:.4}));c.rotation.z=Math.PI/2,c.rotation.y=.6,c.position.set(e-i*.9,.06,n+i*.4),this.scene.add(c),this.puddles.push({x:e,z:n,r:i,phase:Math.random()*5,on:!1,warn:!1,mesh:o,arcs:a,mat:s})}}buildHook(){const t=this.hook,e=new H(new Be(.05,.05,1,6),new ft({color:2236962,metalness:.8}));e.geometry.translate(0,-.5,0),t.cable=e;const n=new ft({color:9182230,roughness:.6,metalness:.5,map:this.containerMats()}),i=new H(new xt(3.2,1.8,2),n);i.castShadow=!0,t.load=i;const s=new H(new Ii(.35,.08,6,12,Math.PI*1.4),new ft({color:13213714,metalness:.7}));s.position.y=1.2,i.add(s);const o=new It({color:16719904});this.blinkers.push(o);const a=new H(new Ze(.15,8,6),o);a.position.set(0,.95,1.05),i.add(a),t.light=a,this.scene.add(e),this.scene.add(i);const c=Me.tex.hazard?Me.tex.hazard.clone():null;c&&(c.wrapS=c.wrapT=tn,c.repeat.set(10,1),c.needsUpdate=!0);const l=new H(new Pe(26,2.6),new ft({map:c,color:c?16777215:15121940,transparent:!0,opacity:.45,roughness:.6,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.set(0,.013,t.pivot.z),this.scene.add(l),this.lightAnchors.push({pos:new E(0,6,t.pivot.z),color:16747051,intensity:14,dist:16})}buildGate(){const t=this.gate.group;t.position.set(0,0,nr);const e=new ft({color:2228248,emissive:16715984,emissiveIntensity:.4,roughness:.4});this.gate.strips.push(e);const n=new ft({color:1579036,metalness:.7,roughness:.4});for(const u of[-4.2,4.2]){const d=new H(new xt(.9,7,.9),n);d.position.set(u,3.5,0),d.castShadow=!0,t.add(d);const f=new H(new xt(.25,6.6,.25),e);f.position.set(u+(u<0?.5:-.5),3.5,0),t.add(f)}const i=new H(new xt(9.3,.9,.9),n);i.position.set(0,7.2,0),t.add(i);const s=new H(new xt(8.2,.22,.25),e);s.position.set(0,6.6,0),t.add(s);const o=to("DK_Mood_ExtractGate_TripleStrip_4m");o&&(o.position.set(0,8,0),o.scale.setScalar(1.6),o.traverse(u=>{const d=u.material;if(d&&d.emissive){const f=d.clone();f.emissive.setHex(16715984),f.emissiveIntensity=1.2,u.material=f,this.gate.strips.push(f)}}),t.add(o));const a=Me.tex.gateEnergy?Me.tex.gateEnergy.clone():null;a&&(a.wrapS=a.wrapT=tn,a.needsUpdate=!0,this.scrollTex.push(a));const c=new It({map:a,color:16724192,transparent:!0,opacity:.12,blending:we,depthWrite:!1,side:Fe,fog:!1});this.gate.energy=c;const l=new H(new Pe(7.6,6.4),c);l.position.set(0,3.3,0),t.add(l);const h=new H(new Di(2.5,3.2,40),new It({color:16715984,transparent:!0,opacity:.5,blending:we,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.set(0,.03,-2.5),t.add(h),this.scene.add(t),this.lightAnchors.push({pos:new E(0,3,nr-2),color:16715984,intensity:10,dist:20})}buildDust(){const e=new Float32Array(1500);for(let i=0;i<500;i++)e[i*3]=(Math.random()-.5)*40,e[i*3+1]=Math.random()*10,e[i*3+2]=(Math.random()-.5)*40;const n=new ye;n.setAttribute("position",new Ce(e,3)),this.dust=new Oc(n,new Uc({color:8257434,size:.06,transparent:!0,opacity:.5,depthWrite:!1,blending:we})),this.dust.frustumCulled=!1,this.scene.add(this.dust)}setGateActive(t){this.gate.active=t;for(const n of this.gate.strips)n.emissiveIntensity=t?3.5:.4;this.gate.energy&&(this.gate.energy.opacity=t?.75:.12);const e=this.lightAnchors.find(n=>n.color===16715984);e&&(e.intensity=t?40:10)}reset(){for(const t of this.barriers)t.open=0,t.box.active=!0,t.mesh.visible=!0,t.mat.opacity=.9;this.setGateActive(!1)}openBarrier(t){const e=this.barriers[t];e&&(e.box.active=!1,e.open=1e-4)}closeBarriersFrom(t){this.barriers.forEach((e,n)=>{n>=t?(e.open=0,e.box.active=!0,e.mesh.visible=!0,e.mat.opacity=.9):(e.box.active=!1,e.mesh.visible=!1)})}update(t,e,n){for(const l of this.scrollTex)l.offset.y-=t*.08;for(const l of this.civs)l.o.position.y=Math.abs(Math.sin(e*2+l.ph))*.04,l.arm.rotation.x=-.6+Math.sin(e*3.2+l.ph)*.7;this.sky.position.set(n.x,0,n.z),this.railChev.offset.y-=t*1.2,this.groundChev.offset.y-=t*1.2;for(const l of this.fogMats)l.opacity=.5+Math.sin(e*.7+l.id)*.1;for(const l of this.fogCols)l.rotation.y+=t*l.userData.spin;const i=Math.sin(e*3)>.2?1:.15;for(const l of this.blinkers)l.color.setRGB(i,.05*i,.08*i);for(const l of this.barriers)l.open>0&&l.mesh.visible&&(l.open+=t,l.mat.opacity=Math.max(0,.9-l.open*1.5),l.mat.opacity<=0&&(l.mesh.visible=!1));const s=this.hook;s.angle=Math.sin(e*.95)*.82;const o=s.pivot.x+Math.sin(s.angle)*s.len,a=s.pivot.y-Math.cos(s.angle)*s.len;if(s.vx=(o-s.prevX)/Math.max(t,1e-4),s.prevX=o,s.load.position.set(o,a-.2,s.pivot.z),s.load.rotation.z=s.angle,s.cable.position.copy(s.pivot),s.cable.rotation.z=s.angle,s.cable.scale.y=s.len-1.2,this.arena!=="hyperdrive")for(const l of this.puddles){const h=(e+l.phase)%5.2;l.warn=h>1.9&&h<2.6,l.on=h>=2.6;const u=l.on?.9+Math.random()*1.6:l.warn&&Math.random()>.5?.8:.05;if(l.mat.emissiveIntensity=u,l.arcs.visible=l.on,l.on&&Math.random()<.5){const d=l.arcs.geometry.attributes.position;for(let f=0;f<24;f++){const g=Math.random()*Math.PI*2,v=Math.random()*l.r,m=Math.cos(g)*v,p=Math.sin(g)*v;d.setXYZ(f*2,m,Math.random()*.3,p),d.setXYZ(f*2+1,m+(Math.random()-.5)*.9,Math.random()*.6,p+(Math.random()-.5)*.9)}d.needsUpdate=!0}}this.gate.active&&this.gate.energy&&(this.gate.energy.opacity=.6+Math.sin(e*6)*.15);const c=this.lightAnchors.map(l=>({a:l,d:l.pos.distanceToSquared(n)})).sort((l,h)=>l.d-h.d);this.pointLights.forEach((l,h)=>{const u=c[h];if(!u){l.intensity=0;return}l.position.copy(u.a.pos),l.color.setHex(this.arena==="hyperdrive"&&u.a.color===3800852?16723920:u.a.color),l.distance=u.a.dist;const d=u.a.color===3800852?.85+Math.sin(e*7+h)*.1:1;l.intensity=u.a.intensity*d}),this.moon.position.set(n.x-12,30,n.z-10),this.moon.target.position.set(n.x,0,n.z+2),this.dust.position.set(n.x,0,n.z),this.dust.rotation.y=e*.02}}const Ln=()=>new E,od=Ln();Ln();const dy=0;function Ws(r,t,e){let n=(t-r+Math.PI)%(Math.PI*2)-Math.PI;return n<-Math.PI&&(n+=Math.PI*2),r+n*e}function Xs(r,t){let e=(t-r+Math.PI)%(Math.PI*2)-Math.PI;return e<-Math.PI&&(e+=Math.PI*2),e}function Kn(r,t=Ln()){return t.set(Math.sin(r),0,Math.cos(r))}class fy{constructor(t){this.base="Idle_Skate",this.baseSpeed=1,this.w={},this.one=null,this.rest=[],this.cm=t;for(const n of Object.values(t.bones))this.rest.push([n,n.quaternion.clone()]);for(const[n,i]of Object.entries(t.actions))this.w[n]=0,i.enabled=!0,i.setEffectiveWeight(0);const e=t.actions.Idle_Skate;e&&(e.play(),this.w.Idle_Skate=1,e.setEffectiveWeight(1))}has(t){return!!this.cm.actions[t]}setBase(t,e=1){this.cm.actions[t]&&(this.base=t,this.baseSpeed=e)}once(t,e){const n=this.cm.actions[t];n&&(n.reset(),n.setLoop(du,1),n.clampWhenFinished=!0,n.timeScale=n.getClip().duration/Math.max(.05,e),n.play(),this.one={name:t,t:0,dur:e})}get busy(){return!!this.one}update(t){const e=this.cm.mixer;if(!e)return;let n=0;if(this.one){this.one.t+=t;const s=this.one.t/this.one.dur;if(n=s<.15?s/.15:s>.8?Math.max(0,(1-s)/.2):1,s>=1){const o=this.cm.actions[this.one.name];o&&(o.stop(),this.w[this.one.name]=0),this.one=null,n=0}}for(const[s,o]of this.rest)s.quaternion.copy(o);const i=Math.min(1,t*10);for(const[s,o]of Object.entries(this.cm.actions)){if(this.one&&s===this.one.name){o.setEffectiveWeight(n);continue}const a=s===this.base?1-n:0,c=this.w[s]+(a-this.w[s])*i;if(this.w[s]=c,c<.01&&a===0){o.isRunning()&&o.stop();continue}o.isRunning()||(o.reset(),o.setLoop(fu,1/0),o.play()),s===this.base&&(o.timeScale=this.baseSpeed),o.setEffectiveWeight(c)}e.update(t)}}class uo{constructor(t,e,n,i){this.pos=Ln(),this.vel=Ln(),this.heading=0,this.y=0,this.vy=0,this.radius=.45,this.hp=100,this.maxHp=100,this.alive=!0,this.team="enemy",this.flashT=0,this.staggerT=0,this.hazardCd=0,this.invulnT=0,this.stunT=0,this.lean=0,this.squash=0,this.bob=0,this.armDown=1.05,this.punchL=0,this.punchR=0,this.armSpread=0,this.grounded=!0,this.grindBox=null,this.rampVy=0,this.key=t,this.cm=$x(t,{tint:n,emissiveBoost:i}),this.cm.pivot.rotation.y=dy,this.anim=new fy(this.cm),e.add(this.cm.root)}get speed(){return Math.hypot(this.vel.x,this.vel.z)}forward(t=Ln()){return Kn(this.heading,t)}flash(t=16777215,e=.1){this.flashT=e,Fh(this.cm,.75,new _t(t))}dispose(t){t.remove(this.cm.root),this.cm.mixer?.stopAllAction()}integrate(t,e){this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t;let n=0;this.grindBox=null;for(const s of e){if(!s.active||!s.ride)continue;const o=s.ride==="rail"?this.grounded?.45:1.1:.05;if(this.pos.x<s.minX-o||this.pos.x>s.maxX+o||this.pos.z<s.minZ||this.pos.z>s.maxZ)continue;const a=zh(s,this.pos.z);this.y>=a-(s.ride==="ramp"?.7:.3)&&a>n&&(n=a,this.grindBox=s.ride==="rail"?s:null)}const i=this.grounded;this.grounded&&this.vy<=0&&this.y<=n+.3&&this.y>=n-.75?(this.rampVy=t>0?(n-this.y)/t:0,this.y=n):(!this.grounded||this.y>n||this.vy>0)&&(i&&this.vy<=0&&this.rampVy>.5&&(this.vy=Math.min(9,this.rampVy*1.15)),this.rampVy=0,this.vy-=22*t,this.y+=this.vy*t,this.y<=n&&(n>0||this.pos.x<Ft+.3)?(this.y=n,this.vy=0,this.grounded||(this.grounded=!0,this.onLand())):this.y>n&&(this.grounded=!1)),this.y>.02&&this.y>n+.05&&(this.grounded=!1);for(const s of e){if(!s.active||this.y>s.h||s.ride&&this.y>=zh(s,this.pos.z)-(s.ride==="ramp"?.75:.35))continue;const o=Math.max(s.minX,Math.min(this.pos.x,s.maxX)),a=Math.max(s.minZ,Math.min(this.pos.z,s.maxZ)),c=this.pos.x-o,l=this.pos.z-a,h=c*c+l*l;if(h<this.radius*this.radius)if(h>1e-6){const u=Math.sqrt(h),d=this.radius-u,f=c/u,g=l/u;this.pos.x+=f*d,this.pos.z+=g*d;const v=this.vel.x*f+this.vel.z*g;v<0&&(this.vel.x-=v*f*1.3,this.vel.z-=v*g*1.3,this.onWallHit(-v))}else{const u=this.pos.x-s.minX,d=s.maxX-this.pos.x,f=this.pos.z-s.minZ,g=s.maxZ-this.pos.z,v=Math.min(u,d,f,g);v===u?this.pos.x=s.minX-this.radius:v===d?this.pos.x=s.maxX+this.radius:v===f?this.pos.z=s.minZ-this.radius:this.pos.z=s.maxZ+this.radius}}this.pos.x<Gt+this.radius&&(this.pos.x=Gt+this.radius,this.vel.x<0&&(this.vel.x*=-.3))}onLand(){}onWallHit(t){}get overWater(){return this.pos.x>Ft+.25}syncVisual(t,e){const n=this.cm.root;n.position.set(this.pos.x,this.y+this.bob,this.pos.z),n.rotation.y=this.heading,this.lean+=(Ri.clamp(-e*this.speed*.035,-.4,.4)-this.lean)*Math.min(1,t*8),this.cm.pivot.rotation.z=this.lean,this.squash=Math.max(0,this.squash-t*5);const i=1-this.squash*.18;this.cm.pivot.scale.set(1+this.squash*.12,i,1+this.squash*.12),this.flashT>0&&(this.flashT-=t,this.flashT<=0&&Fh(this.cm,0)),this.cm.procedural&&(this.cm.pivot.position.y=Math.abs(Math.sin(performance.now()*.008))*.05*Math.min(1,this.speed/5)),this.anim.update(t),this.poseArms(t)}poseArms(t){const e=this.cm.bones,n=e.upperarm_l,i=e.upperarm_r;if(!n||!i)return;this.punchL=Math.max(0,this.punchL-t*4.5),this.punchR=Math.max(0,this.punchR-t*4.5),this.cm.root.updateMatrixWorld(!0);const s=py.setFromAxisAngle(ya,this.heading),o=od.set(0,0,1).applyQuaternion(s);for(const a of[1,-1]){const c=a===1?n:i,l=a===1?this.punchL:this.punchR,h=l>0?Math.sin(Math.min(1,l)*Math.PI*.5):0,u=(this.armDown-this.armSpread)*(1-h*.9);Ma.setFromAxisAngle(o,-a*u),eo.setFromAxisAngle(ya,-a*1.45*h),Ma.premultiply(eo),c.parent.getWorldQuaternion(is),Ys.copy(is).multiply(c.quaternion),Ys.premultiply(Ma),c.quaternion.copy(is.invert().multiply(Ys));const d=e[a===1?"lowerarm_l":"lowerarm_r"];d&&(eo.setFromAxisAngle(ya,-a*.5*(1-h)),d.parent.getWorldQuaternion(is),Ys.copy(is).multiply(d.quaternion).premultiply(eo),d.quaternion.copy(is.invert().multiply(Ys)))}}}const ya=new E(0,1,0),py=new ke,Ma=new ke,eo=new ke,is=new ke,Ys=new ke,ad={viper01:{key:"viper01",kind:"viper",hp:42,speed:6.2,accel:12,radius:.45,poise:0,score:100,tint:16762092},viper02:{key:"viper02",kind:"viper",hp:42,speed:6.2,accel:12,radius:.45,poise:0,score:100,tint:16762092},viper03:{key:"viper03",kind:"viper",hp:42,speed:6.2,accel:12,radius:.45,poise:0,score:100,tint:16762092},enforcer:{key:"enforcer",kind:"enforcer",hp:120,speed:4.6,accel:9,radius:.6,poise:20,score:250},falcon:{key:"falcon",kind:"falcon",hp:700,speed:6,accel:12,radius:.8,poise:60,score:2e3}},fi={pink_pounce:{windup:.9,leapTime:.5,pinTime:1.5,tick:.3,tickDmg:3,minRange:3.5,maxRange:9,cooldown:7,color:16723892}};class Hh extends uo{constructor(t,e,n){const i=ad[t];super(i.key,e,i.tint,i.kind==="viper"?4:i.kind==="falcon"?.6:2.5),this.state="spawn",this.stateT=0,this.target=null,this.retargetT=0,this.cd=1,this.orbit=Math.random()*Math.PI*2,this.attackKind="melee",this.finisherCd=4+Math.random()*3,this.pounceTo=Ln(),this.pinTarget=null,this.pinTickT=0,this.finisherFx=null,this.deadT=0,this.hitBy=new Set,this.telegraph=null,this.dashDir=Ln(),this.dashHit=new Set,this.summoned=0,this.id=Math.floor(Math.random()*1e9),this.lastHitSource="vixen",this.def=i;const s=i.kind==="viper"?16722538:i.kind==="enforcer"?16752672:16719936,o=i.radius*2.2,a=new H(new Di(o*.78,o,32).rotateX(-Math.PI/2),new It({color:s,transparent:!0,opacity:.7,blending:we,depthWrite:!1,fog:!1}));a.position.y=.04,this.cm.root.add(a);const c=new It({color:s,side:Ye,fog:!1});c.onBeforeCompile=l=>{l.vertexShader=l.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed += normalize(objectNormal) * 0.022;`)},this.cm.model.traverse(l=>{const h=l;if(h.isSkinnedMesh&&h.geometry.attributes.normal){const u=new Fu(h.geometry,c);u.bind(h.skeleton,h.bindMatrix),u.frustumCulled=!1,(h.parent??this.cm.model).add(u)}}),this.hp=this.maxHp=i.hp,this.radius=i.radius,this.pos.copy(n),this.team="enemy",this.stateT=.6,this.cd=.8+Math.random()*1.2}}class my{constructor(t,e,n){this.pos=Ln(),this.vel=Ln(),this.team="enemy",this.dmg=0,this.life=0,this.kind="bolt",this.active=!1,this.src="enemy",this.mesh=new H(e,n),this.mesh.visible=!1,t.add(this.mesh)}}class gy{constructor(t){this.list=[],this.boltGeo=new Ze(.22,10,8),this.boltMat=new It({color:16719936,fog:!1}),this.pGeo=new Be(.035,.035,1.1,5).rotateX(Math.PI/2),this.pMat=new It({color:16752704,fog:!1}),this.scene=t}fire(t,e,n,i,s,o,a){let c=this.list.find(l=>!l.active&&l.kind===t);return c||(c=new my(this.scene,t==="bolt"?this.boltGeo:this.pGeo,t==="bolt"?this.boltMat:this.pMat),c.kind=t,this.list.push(c)),c.active=!0,c.pos.copy(e),c.vel.copy(n).multiplyScalar(i),c.dmg=s,c.team=o,c.life=t==="bolt"?2.6:.6,c.src=a,c.mesh.visible=!0,c.mesh.position.copy(e),c.mesh.lookAt(od.copy(e).add(n)),c}clear(){for(const t of this.list)t.active=!1,t.mesh.visible=!1}}const fn=900;class vy{constructor(t){this.pos=new Float32Array(fn*3),this.col=new Float32Array(fn*3),this.size=new Float32Array(fn),this.alpha=new Float32Array(fn),this.vel=new Float32Array(fn*3),this.life=new Float32Array(fn),this.maxLife=new Float32Array(fn),this.size0=new Float32Array(fn),this.grav=new Float32Array(fn),this.drag=new Float32Array(fn),this.cursor=0;const e=new ye;e.setAttribute("position",new Ce(this.pos,3).setUsage(yr)),e.setAttribute("color",new Ce(this.col,3).setUsage(yr)),e.setAttribute("size",new Ce(this.size,1).setUsage(yr)),e.setAttribute("alpha",new Ce(this.alpha,1).setUsage(yr));const n=new Xe({uniforms:{uScale:{value:400}},vertexShader:`attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float uScale;
        void main(){ vC=color; vA=alpha; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=size*uScale/max(0.1,-mv.z); gl_Position=projectionMatrix*mv; }`,fragmentShader:"varying vec3 vC; varying float vA; void main(){ vec2 d=gl_PointCoord-0.5; float r=dot(d,d)*4.0; if(r>1.0) discard; float a=(1.0-r); gl_FragColor=vec4(vC*a*vA*1.6, 1.0); }",transparent:!0,depthWrite:!1,blending:we});this.points=new Oc(e,n),this.points.frustumCulled=!1,this.points.renderOrder=10,t.add(this.points)}setScale(t){this.points.material.uniforms.uScale.value=t*.6}emit(t,e,n,i,s,o=0,a=0){const c=this.cursor;this.cursor=(this.cursor+1)%fn,this.pos[c*3]=t.x,this.pos[c*3+1]=t.y,this.pos[c*3+2]=t.z,this.vel[c*3]=e.x,this.vel[c*3+1]=e.y,this.vel[c*3+2]=e.z,this.col[c*3]=n.r,this.col[c*3+1]=n.g,this.col[c*3+2]=n.b,this.size0[c]=i,this.size[c]=i,this.life[c]=s,this.maxLife[c]=s,this.alpha[c]=1,this.grav[c]=o,this.drag[c]=a}burst(t,e,n,i,s,o,a=-9,c=.5){const l=new E;for(let h=0;h<e;h++)l.set(Math.random()*2-1,Math.random()*c+(c>0?.2:0),Math.random()*2-1).normalize().multiplyScalar(i*(.4+Math.random()*.8)),this.emit(t,l,n,s*(.6+Math.random()*.8),o*(.6+Math.random()*.7),a,1.5)}update(t){for(let n=0;n<fn;n++){if(this.life[n]<=0){this.alpha[n]!==0&&(this.alpha[n]=0,this.size[n]=0);continue}this.life[n]-=t;const i=Math.max(0,this.life[n]/this.maxLife[n]),s=Math.max(0,1-this.drag[n]*t);this.vel[n*3]*=s,this.vel[n*3+2]*=s,this.vel[n*3+1]=this.vel[n*3+1]*s+this.grav[n]*t,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t,this.pos[n*3+1]<.02&&this.grav[n]<0&&(this.pos[n*3+1]=.02,this.vel[n*3+1]*=-.3),this.alpha[n]=i,this.size[n]=this.size0[n]*(.4+.6*i)}const e=this.points.geometry;e.attributes.position.needsUpdate=!0,e.attributes.color.needsUpdate=!0,e.attributes.size.needsUpdate=!0,e.attributes.alpha.needsUpdate=!0}clear(){this.life.fill(0)}}class _y{constructor(t){this.pool=[],this.ringGeo=new Di(.85,1,48),this.sphereGeo=new Ze(1,16,12),this.scene=t,this.ringGeo.rotateX(-Math.PI/2);const e=new hr(1,1,32,1,!0);e.rotateX(-Math.PI/2),e.translate(0,0,.5),this.coneGeo=e}get(t){let e=this.pool.find(n=>n.t>=n.dur&&n.kind===t);if(!e){const n=t==="ring"?this.ringGeo:t==="cone"?this.coneGeo:this.sphereGeo,i=new It({color:16719823,transparent:!0,depthWrite:!1,blending:we,side:Fe,fog:!1});e={mesh:new H(n,i),t:0,dur:0,s0:1,s1:1,a0:1,kind:t},e.mesh.renderOrder=9,this.scene.add(e.mesh),this.pool.push(e)}return e.mesh.visible=!0,e}ring(t,e,n,i,s,o=1,a=.08){const c=this.get("ring");return c.mesh.position.set(t.x,a,t.z),c.mesh.rotation.set(0,0,0),c.mesh.material.color.setHex(e),c.t=0,c.dur=s,c.s0=n,c.s1=i,c.a0=o,c.mesh}vring(t,e,n,i,s,o){const a=this.ring(t,n,i,s,o,.9,t.y);a.lookAt(t.clone().add(e)),a.rotateX(Math.PI/2)}cone(t,e,n,i,s,o){const a=this.get("cone");a.mesh.position.copy(t),a.mesh.rotation.set(0,e,0),a.mesh.material.color.setHex(s),a.t=0,a.dur=o,a.s0=n*.25,a.s1=n,a.a0=.22,a.mesh.userData.r=Math.tan(i)}flash(t,e,n,i,s){const o=this.get("sphere");o.mesh.position.copy(t),o.mesh.material.color.setHex(e),o.t=0,o.dur=s,o.s0=n,o.s1=i,o.a0=.8}update(t){for(const e of this.pool){if(e.t>=e.dur){e.mesh.visible=!1;continue}e.t+=t;const n=Math.min(1,e.t/e.dur),i=1-Math.pow(1-n,3),s=e.s0+(e.s1-e.s0)*i;if(e.kind==="cone"){const o=s*e.mesh.userData.r;e.mesh.scale.set(o,o,s)}else e.mesh.scale.setScalar(s);e.mesh.material.opacity=e.a0*(1-n),e.t>=e.dur&&(e.mesh.visible=!1)}}clear(){for(const t of this.pool)t.t=t.dur,t.mesh.visible=!1}}class xy{constructor(){this.items=[],this.v=new E,this.layer=document.getElementById("dmg-layer")}spawn(t,e,n=""){let i=this.items.find(s=>s.t<=0);if(!i){if(this.items.length>40)return;const s=document.createElement("div");this.layer.appendChild(s),i={el:s,pos:new E,t:0,vx:0},this.items.push(i)}i.el.className="dmg "+n,i.el.textContent=e,i.el.style.display="block",i.pos.copy(t),i.t=.9,i.vx=(Math.random()-.5)*1.2}update(t,e,n,i){for(const s of this.items){if(s.t<=0)continue;if(s.t-=t,s.pos.y+=t*1.6,s.pos.x+=s.vx*t,this.v.copy(s.pos).project(e),s.t<=0||this.v.z>1){s.el.style.display="none",s.t=0;continue}const o=(this.v.x*.5+.5)*n,a=(-this.v.y*.5+.5)*i,c=1+Math.max(0,s.t-.7)*2.5;s.el.style.transform=`translate(${o.toFixed(1)}px, ${a.toFixed(1)}px) translate(-50%, -50%) scale(${c.toFixed(2)})`,s.el.style.opacity=Math.min(1,s.t*3).toFixed(2)}}clear(){for(const t of this.items)t.t=0,t.el.style.display="none"}}class yy{constructor(t){const e=new Be(.06,.06,1,8,1,!0);e.rotateX(Math.PI/2),e.translate(0,0,.5),this.mesh=new H(e,new It({color:16728288,transparent:!0,opacity:.9,blending:we,depthWrite:!1,fog:!1})),this.mesh.visible=!1,this.mesh.renderOrder=11,t.add(this.mesh)}set(t,e,n){this.mesh.visible=!0,this.mesh.position.copy(t),this.mesh.lookAt(e);const i=t.distanceTo(e);this.mesh.scale.set(n,n,i)}hide(){this.mesh.visible=!1}}const qn=r=>new _t(r),Rt={blu:qn(2784255),mag:qn(16719823),grn:qn(3800852),org:qn(16747051),red:qn(16719936),cyan:qn(8446207),white:qn(16777215),yel:qn(16764992)},Sa=new E(0,1,0),Vh=qn(2085258),ot=new E,ue=new E,de=new E,Gh=new _t(16724048),My=[{title:"WAVE 1",sub:"IRON ROSE BRUTES",batches:[{list:["e","e","e"],when:-1},{list:["e","e"],when:0}]},{title:"WAVE 2",sub:"IRON ROSE ENFORCERS",batches:[{list:["e","e","e"],when:-1},{list:["e","e"],when:1}]},{title:"WAVE 3",sub:"FLOODED LOT",batches:[{list:["e","e","e","e"],when:-1},{list:["e","e"],when:1}]},{title:"WAVE 4",sub:"FALCON — FACE OF THE IRON ROSE",batches:[{list:["f","e","e"],when:-1}]}],Sy=[{title:"HYPERDRIVE · APPROACH",sub:"SWARM — SCAR SWARM INCOMING",batches:[{list:["v","v","v","v","v"],when:-1},{list:["v","v","v","v"],when:2}]},{title:"HYPERDRIVE · RING HALL",sub:"COBRA — HOOD STRIKE",batches:[{list:["v","v","v","v","v"],when:-1},{list:["v","v","v","v"],when:2}]},{title:"HYPERDRIVE · CORRIDOR",sub:"FANG — JET FANG DIVES",batches:[{list:["v","v","v","v","v"],when:-1},{list:["v","v","v","v","v"],when:2}]},{title:"HYPERDRIVE · COCKPIT CORE",sub:"HIVE — HEX NEST",batches:[{list:["v","v","v","v"],when:-1},{list:["v","v","v","v"],when:2}]}],Wh=[{squad:"SWARM",fin:"SCAR SWARM"},{squad:"COBRA",fin:"HOOD STRIKE"},{squad:"FANG",fin:"JET FANG"},{squad:"HIVE",fin:"HEX NEST"}],wy=["APPROACH LANE","RING HALL","CORRIDOR VIEWPORT","COCKPIT CORE"],Ge=class Ge{constructor(t,e,n,i){this.allies=[],this.enemies=[],this.pickups=[],this.state="title",this.runId=0,this.time=0,this.breatheT=0,this.wave=0,this.waveActive=!1,this.batch=0,this.waveCleared=!1,this.gateOpen=!1,this.introT=0,this.lastBannerT=0,this.chaos=0,this.chaosReadyAnnounced=!1,this.level=1,this.frenzyReason="",this.frenzyReasonT=0,this.rageT=0,this.rageCd=0,this.lastGirlHurtT=-99,this.viperSeq=0,this.voiceQ=Promise.resolve(),this.voiceGen=0,this.gatling=null,this.seekerCd=3,this.kLabelT=0,this.p={combo:0,comboT:0,atkT:0,atkDur:0,atkHit:!1,coneCd:0,spaceT:0,lastSafe:new E,braking:!1,brakeSfxT:0,fwdSpeed:0,turn:0,aimYaw:0,invuln:0},this.slingAimYaw=0,this.sling={phase:"none",t:0,dir:new E,dist:0,hit:new Set,firstHit:!1},this.k={downed:!1,downT:0,atkCd:0,shootCd:0,lastDmg:-99,target:null,retarget:0,swing:0,recoverT:0,slideCd:4,slideT:0,slideHits:0,slideDir:new E,slideTgt:null},this.camYaw=0,this.camPitch=.18,this.trauma=0,this.hitstop=0,this.worldScale=1,this.fovKick=0,this.stats={time:0,kos:0,slingKos:0,splashKos:0,maxCombo:0,slings:0,combo:0,comboT:0},this.telegraphs=[],this.onStateChange=()=>{},this.hud={},this.hudCache={},this.grinding=!1,this.grindT=0,this.airT=0,this.airFromRamp=!1,this.trickScore=0,this.trickChain=0,this.trickChainT=0,this.mines=[],this.craters=[],this.comsT=0,this.comsCd={},this.lowHpCd=0,this.voicePending=0,this.tires=[],this.gatlingSpin=0,this.kaileeMuzzle=new ge,this.irsSeenWave=-1,this.crumbT=0,this.doorT=-1,this.turrets=[],this.tShots=[],this.turretDmg=[4,3],this.sparkAcc=0,this.scene=t,this.camera=e,this.input=i,this.world=new uy(t,n),this.particles=new vy(t),this.trans=new _y(t),this.dmg=new xy,this.beam=new yy(t),this.proj=new gy(t),this.vixen=new uo("vixen",t),this.addVixenKit(this.vixen),this.vixen.team="hero",this.vixen.radius=.55,this.kailee=new uo("kailee",t),this.addKaileeKit(this.kailee),this.kailee.team="hero",this.kailee.radius=.4,this.kailee.maxHp=this.kailee.hp=120;for(const[o,a,c,l,h,u]of[["brianna","BRIANNA",1022554,"melee",-3.6,2.2],["payton","PAYTON",10112255,"ranged",3.8,4.6]]){const d=new uo(o,t);d.team="hero",d.radius=.55,d.maxHp=d.hp=l==="melee"?130:100,this.allies.push({a:d,key:o,name:a,col:c,role:l,side:h,back:u,downed:!1,downT:0,atkCd:0,shootCd:0,lastDmg:-99,target:null,retarget:0,recoverT:0,swing:0,sigCd:4+Math.random()*2,sigT:0,sigShot:0})}for(const o of this.allies)this.addAllyKit(o);this.vixen.onLand=()=>{Q.land(),this.vixen.squash=.6,this.particles.burst(ot.copy(this.vixen.pos).setY(.1),6,Rt.grn,2,.12,.3,-3,.2)},this.vixen.onWallHit=o=>{o>6&&(this.shake(.25),Q.clang(),this.vixen.squash=.5)},this.aimRing=new H(new Di(.35,.5,32).rotateX(-Math.PI/2),new It({color:16719823,transparent:!0,opacity:.7,blending:we,depthWrite:!1,fog:!1})),t.add(this.aimRing);const s=new Pe(1.6,28).rotateX(-Math.PI/2).translate(0,0,14);this.slingLine=new H(s,new It({color:16719823,transparent:!0,opacity:.22,blending:we,depthWrite:!1,fog:!1})),this.slingLine.visible=!1,t.add(this.slingLine);for(const o of["hp-vixen","hp-kailee","kailee-status","hp-brianna","brianna-status","hp-payton","payton-status","wave-label","enemy-count","objective","chaos-wrap","chaos-fill","frenzy-reason","ab-cone","ab-sling","banner","fx-vignette","fx-flash","boss","hp-boss"])this.hud[o]=document.getElementById(o);this.resetRun()}hushVoice(){this.voiceGen++,this.voicePending=0,this.voiceQ=Promise.resolve(),Q.stopVoice()}get waves(){return this.level===2?Sy:My}zoneName(t){return this.level===2?wy[t]:We[t].name}clearDynamic(){this.runId++;for(const t of this.enemies)t.dispose(this.scene);this.enemies=[];for(const t of this.pickups)this.scene.remove(t.mesh);this.pickups=[];for(const t of this.telegraphs)this.scene.remove(t);this.telegraphs=[],this.proj.clear(),this.particles.clear(),this.trans.clear(),this.dmg.clear(),this.beam.hide(),this.sling.phase="none",this.worldScale=1,this.hitstop=0,this.trauma=0}placeHeroes(t){const e=this.vixen,n=this.kailee;e.cm.pivot.rotation.x=0,e.cm.pivot.position.y=0,e.pos.set(0,0,t),e.vel.set(0,0,0),e.heading=0,e.y=0,e.vy=0,e.grounded=!0,e.alive=!0,n.pos.set(2,0,t-2.5),n.vel.set(0,0,0),n.heading=0,n.y=0,n.vy=0,n.grounded=!0,n.alive=!0,n.cm.pivot.rotation.x=0,n.cm.pivot.position.y=0;for(const i of this.allies){const s=i.a;s.pos.set(i.side,0,t-i.back),s.vel.set(0,0,0),s.heading=0,s.y=0,s.vy=0,s.grounded=!0,s.alive=!0,s.cm.pivot.rotation.x=0,s.cm.pivot.position.y=0}this.p.fwdSpeed=0,this.p.lastSafe.copy(e.pos),this.camYaw=0,this.camera.position.set(0,3,t-7)}resetRun(){this.clearDynamic(),this.world.reset(),this.wave=0,this.waveActive=!1,this.batch=0,this.waveCleared=!1,this.gateOpen=!1,this.introT=1.2,this.chaos=0,this.chaosReadyAnnounced=!1,this.vixen.hp=this.vixen.maxHp,this.kailee.hp=this.kailee.maxHp;for(const t of this.allies)t.a.hp=t.a.maxHp,Object.assign(t,{downed:!1,downT:0,atkCd:0,shootCd:0,lastDmg:-99,target:null,recoverT:0});Object.assign(this.k,{downed:!1,downT:0,atkCd:0,shootCd:0,lastDmg:-99,target:null,recoverT:0,slideCd:4,slideT:0,slideHits:0,slideTgt:null}),Object.assign(this.p,{combo:0,comboT:0,atkT:0,coneCd:0,invuln:0}),this.stats={time:0,kos:0,slingKos:0,splashKos:0,maxCombo:0,slings:0,combo:0,comboT:0},this.trickScore=0,this.trickChain=0,this.placeHeroes(-4),this.comsCd={},this.lowHpCd=0,setTimeout(()=>this.coms("COM_KAM_01"),1500),setTimeout(()=>this.coms("COM_LIL_01"),5600),this.hushVoice(),this.lastGirlHurtT=-99,this.level=1,this.world.setArena("dock"),this.world.resetHeals(),this.spawnMines(),this.spawnTurrets(),Q.setArena("dock"),this.setObjective("Skate the green rail north — clear Berth 1"),this.hud.boss.classList.add("hidden")}retryWave(){this.clearDynamic();const t=this.wave;this.world.closeBarriersFrom(t),this.world.setGateActive(!1),this.gateOpen=!1,this.waveActive=!1,this.batch=0,this.waveCleared=!1,this.introT=.8,this.vixen.hp=this.vixen.maxHp,this.kailee.hp=this.kailee.maxHp,this.k.downed=!1;for(const e of this.allies)e.a.hp=e.a.maxHp,e.downed=!1,e.downT=0;this.chaos=Math.max(this.chaos,50),this.chaosReadyAnnounced=this.chaos>=100,this.placeHeroes(We[t].z0+(t===0?4:3)),this.hud.boss.classList.add("hidden"),this.rageT=0,this.setObjective(`Retry: ${this.zoneName(t)}`)}setState(t){this.state=t,this.onStateChange(t)}trick(t,e){this.trickChain++,this.trickChainT=3;const n=Math.min(5,this.trickChain),i=e*n;this.trickScore+=i,this.stats.combo++,this.stats.comboT=2.5,this.stats.maxCombo=Math.max(this.stats.maxCombo,this.stats.combo),this.dmg.spawn(ot.copy(this.vixen.pos).setY(this.vixen.y+2.8),`${t} +${i}${n>1?` x${n}`:""}`,"heal")}spawnMines(){for(const i of this.mines)this.scene.remove(i.mesh);for(const i of this.craters)this.scene.remove(i);this.mines=[],this.craters=[];const t=new ft({color:5917218,roughness:.9,metalness:.4}),e=new ft({color:8010260,roughness:1,metalness:.2}),n=new ft({color:16720384,emissive:16720384,emissiveIntensity:1.5});for(let i=0;i<We.length;i++){const s=We[i],o=this.level===2?5+Math.floor(Math.random()*3):2+Math.floor(Math.random()*2);for(let a=0;a<o;a++){const c=Gt+3+Math.random()*(Ft-Gt-6),l=s.z0+8+Math.random()*(s.z1-s.z0-12);if(Math.abs(c)<3&&l<6||this.world.colliders.some(v=>v.active&&c>v.minX-.8&&c<v.maxX+.8&&l>v.minZ-.8&&l<v.maxZ+.8))continue;const h=new Kt,u=new H(new Be(.42,.48,.14,14),t);u.position.y=.07;const d=new H(new Ii(.4,.04,6,14),e);d.rotation.x=Math.PI/2,d.position.y=.14;const f=new H(new hr(.06,.22,6),e);f.position.y=.25;const g=new H(new Ze(.04,6,6),n);g.position.set(.22,.16,0),h.add(u,d,f,g),h.position.set(c,0,l),h.rotation.y=Math.random()*6,this.scene.add(h),this.mines.push({x:c,z:l,mesh:h,armT:-1,live:!0})}}}updateMines(t){const e=[this.vixen,this.kailee,...this.enemies.filter(n=>n.state!=="dead")];for(const n of this.mines){if(!n.live)continue;if(n.armT<0){for(const o of e)if(o.y<.4&&Math.hypot(o.pos.x-n.x,o.pos.z-n.z)<.9){n.armT=.25,Q.mineClick();break}continue}if(n.armT-=t,n.armT>0)continue;n.live=!1,this.scene.remove(n.mesh);const i=new H(new gi(1.3,16),new It({color:657414,transparent:!0,opacity:.75}));i.rotation.x=-Math.PI/2,i.position.set(n.x,.02,n.z),this.scene.add(i),this.craters.push(i);const s=ue.set(n.x,.6,n.z);this.particles.burst(s,30,Rt.yel,9,.2,.6),this.particles.burst(s,18,Rt.org,6,.25,.9),Q.mine(),Math.hypot(this.vixen.pos.x-n.x,this.vixen.pos.z-n.z)<20&&this.shake(.6);for(const o of e){const a=Math.hypot(o.pos.x-n.x,o.pos.z-n.z);if(a>3.6)continue;const c=1-a/3.6,l=ot.set(o.pos.x-n.x||.01,0,o.pos.z-n.z).normalize(),h=o===this.vixen||o===this.kailee;this.hurt(o,Math.round((h?30:70)*c+8),l,20*c+6,{source:"hazard",stagger:1.2,up:7,heavy:!0,color:16752704}),o.vy=Math.max(o.vy,6*c),o.grounded=!1,o.y=Math.max(o.y,.01)}}}comsLine(t,e){const n=this.voiceGen;if(this.voicePending>=2)return;this.voicePending++;const i=this.time;this.voiceQ=this.voiceQ.then(()=>{if(n!==this.voiceGen||this.state==="cutscene"||this.time-i>8)return;const s=document.getElementById("coms");return s&&(s.className=t==="LILI"?"lili":t==="PAYTON"?"payton":t==="VIXEN"?"vixen":"",s.innerHTML=`<b>📻 ${t}:</b>${e}`,s.style.opacity="1"),this.comsT=99,Q.radio(),Q.say(t,e).then(()=>{this.comsT=1.2})}).catch(()=>{}).finally(()=>{this.voicePending=Math.max(0,this.voicePending-1)})}coms(t){const n={COM_L2_0:["KAMYRN","Swarm on the approach — Scar Swarm. Stay tight."],COM_L2_1:["LILI","Cobra in the Ring Hall. Hood Strike — watch the hood."],COM_L2_2:["KAMYRN","Jet Fang diving the corridor. Hop it."],COM_L2_3:["LILI","Hive's nest is in the core. Bring everybody home, Grandma."],COM_KAM_01:["KAMYRN","Vixen on coms. Berth's hot — keep skating."],COM_LIL_01:["LILI","Grandma you got this. Don't stop."],COM_KAM_02:["KAMYRN","IRS on your six. Check left."],COM_LIL_02:["LILI","Kailee's with you — stay loud."],COM_KAM_03:["KAMYRN","Slither's nest ahead. End him."],COM_LIL_03:["LILI","Grandma? Please get up."],COM_KAM_04:["KAMYRN","Berth cleared. Next room. Don't freeze."],COM_LIL_04:["LILI","You're almost home. Bring Mom back."]}[t];n&&((this.comsCd[t]??-99)>this.time-8||(this.comsCd[t]=this.time,this.comsLine(n[0],n[1])))}updateComs(t){if(this.comsT>0&&(this.comsT-=t,this.comsT<=0)){const e=document.getElementById("coms");e&&(e.style.opacity="0")}this.lowHpCd-=t,this.vixen.hp<this.vixen.maxHp*.3&&this.lowHpCd<=0&&(this.lowHpCd=25,this.coms("COM_LIL_03"))}shake(t){this.trauma=Math.min(1,this.trauma+t)}banner(t,e="",n=2.2){const i=this.hud.banner;i.innerHTML=`${t}${e?`<small>${e}</small>`:""}`,i.style.opacity="1",this.lastBannerT=Math.min(n,1.8)}setObjective(t){this.hud.objective.textContent=t}addTruckTires(t,e,n,i,s){const o=e>.3,a=o?1:.6,c=new ft({color:789516,roughness:.85,metalness:.05}),l=new ft({color:1118481,emissive:s,emissiveIntensity:.35*a,roughness:.8}),h=new ft({color:9080212,metalness:.9,roughness:.3,emissive:s,emissiveIntensity:.25*a}),u=new ft({color:s,emissive:s,emissiveIntensity:2.2*a,toneMapped:!1}),d=new ft({color:10483455,emissive:63231,emissiveIntensity:2*a,toneMapped:!1}),f=new Ii(e,n,18,48),g=new Be(e-n*.6,e-n*.6,n*1.2,28),v=new Be(e*.22,e*.22,n*1.4,16),m=new Ii(e-n*.15,Math.max(.012,n*.12),8,48),p=new xt(n*1.3,Math.max(.01,n*.12),(e-n*.6)*1.9),_=new xt(n*1.9,n*.35,n*.5);for(const y of[-i,i]){const x=new Kt;x.position.set(y,e+n,0),t.add(x);const A=new H(f,c);A.rotation.y=Math.PI/2,x.add(A);const b=new H(g,h);b.rotation.z=Math.PI/2,x.add(b);const R=new H(v,u);R.rotation.z=Math.PI/2,x.add(R);for(const M of[-1,1]){const P=new H(m,u);P.rotation.y=Math.PI/2,P.position.x=M*n*.65,x.add(P)}for(const M of[0,Math.PI/3,-Math.PI/3]){const P=new H(p,d);P.rotation.x=M,x.add(P)}if(o)for(let M=0;M<16;M++){const P=M/16*Math.PI*2,O=new H(_,l);O.position.set(0,Math.sin(P)*(e+n*.85),Math.cos(P)*(e+n*.85)),O.rotation.x=-P,x.add(O)}const C=new _o(s,2*a,o?2.6:1);C.position.x=y>0?.15:-.15,x.add(C);const S=[u,d,l,h];this.tires.push({g:x,R:e+n,mats:S,base:S.map(M=>M.emissiveIntensity),light:C,lb:C.intensity,last:null})}}tickTires(t){if(t<=0)return;const e=new E,n=performance.now()*.001;for(const i of this.tires){i.g.getWorldPosition(e);const s=i.last?Math.hypot(e.x-i.last.x,e.z-i.last.z)/t:0;(i.last??(i.last=new E)).copy(e);const o=Math.min(s,14);i.g.rotation.x+=o/i.R*t;const a=1+o*.35,c=1+(o>.5?.15*Math.sin(n*40+i.R*9):0);i.mats.forEach((l,h)=>l.emissiveIntensity=i.base[h]*a*c),i.light.intensity=i.lb*a*c}}addVixenKit(t){const e=t.cm.root,n=new Kt;n.name="vixen-kit",e.traverse(s=>{/WarRig_Wheel/i.test(s.name)&&(s.visible=!1)}),new ft({color:1118481,roughness:.5,metalness:.3}),new ft({color:16719823,emissive:16719823,emissiveIntensity:1.6,metalness:.8,roughness:.25}),new ft({color:13111342,emissive:5242896,metalness:.7,roughness:.3}),new ft({color:2763312,metalness:.9,roughness:.35}),new ft({color:1706032,emissive:6947071,emissiveIntensity:.9,roughness:.4,metalness:.5}),new ft({color:63231,emissive:63231,emissiveIntensity:3.2,toneMapped:!1}),new ft({color:16719823,emissive:16719823,emissiveIntensity:3,metalness:.6,roughness:.2,toneMapped:!1}),this.addTruckTires(n,.6,.25,.48,16719823);const i=new Kt;i.name="vixen-handgun",i.position.set(.42,1,.2),n.add(i),new xo().load(ty,s=>{const o=s.scene,a=new nn().setFromObject(o),c=a.getSize(new E),l=a.getCenter(new E),h=.32/Math.max(c.x,c.y,c.z);o.position.sub(l).multiplyScalar(h),o.scale.setScalar(h);const u=new Kt;u.add(o),u.rotation.y=-Math.PI/2,u.traverse(d=>{d.isMesh&&(d.castShadow=!0)}),i.add(u)}),n.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),e.add(n)}addAllyKit(t){const e=t.a.cm.root,n=new Kt;n.name=t.key+"-kit";const i=new ft({color:2303274,metalness:.9,roughness:.35});if(t.key==="brianna"){const s=new ft({color:2085258,emissive:2085258,emissiveIntensity:2.4,toneMapped:!1});for(const l of[-.36,.36]){const h=new H(new Be(.075,.09,.36,10),i);h.rotation.x=Math.PI/2,h.position.set(l,1,.16),n.add(h);for(const u of[-.1,0,.1]){const d=new H(new Ii(.088,.016,6,14),s);d.position.set(l,1,.16+u),n.add(d)}}const o=new H(new gi(.09,16),new ft({color:2085258,emissive:2085258,emissiveIntensity:2.5,toneMapped:!1}));o.position.set(0,1.28,.17),n.add(o);const a=new H(new xt(.14,.1,.2),i);a.position.set(.2,1.52,-.02),n.add(a);const c=new H(new Ze(.03,8,8),new It({color:16719936,toneMapped:!1}));c.position.set(.2,1.52,.09),n.add(c)}else{const s=new Kt;s.position.set(.36,1,.25),n.add(s),this.gatling=s;const o=new H(new xt(.14,.14,.24),i);o.position.z=-.06,s.add(o);const a=new Kt;a.name="barrels",s.add(a);const c=new ft({color:10112255,emissive:6955263,emissiveIntensity:1.6});for(let l=0;l<6;l++){const h=l/6*Math.PI*2,u=new H(new Be(.018,.018,.46,6),l%2?i:c);u.rotation.x=Math.PI/2,u.position.set(Math.cos(h)*.05,Math.sin(h)*.05,.22),a.add(u)}}e.traverse(s=>{/WarRig_Wheel/i.test(s.name)&&(s.visible=!1)}),this.addTruckTires(n,.58,.24,.46,t.key==="brianna"?2085258:10112255),n.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),e.add(n)}addKaileeKit(t){const e=new Kt;e.name="kailee-40cal",t.cm.bones.hand_r,e.position.set(.36,.98,.22),t.cm.root.add(e);const n=.28;new xo().load(ey,o=>{const a=o.scene,c=new nn().setFromObject(a),l=c.getSize(new E),h=c.getCenter(new E),u=n/Math.max(l.x,l.y,l.z);a.position.sub(h).multiplyScalar(u),a.scale.setScalar(u);const d=new Kt;d.add(a),d.rotation.y=-Math.PI/2,d.traverse(f=>{f.isMesh&&(f.castShadow=!0)}),e.add(d)}),this.kaileeMuzzle.position.set(0,.01,n*.5),e.add(this.kaileeMuzzle);const i=new H(new Be(.004,.004,1.2,4).rotateX(Math.PI/2).translate(0,0,.6),new It({color:16715792,transparent:!0,opacity:.55,blending:we,depthWrite:!1,toneMapped:!1}));i.position.set(0,-.035,n*.5),i.name="kailee-laser",e.add(i),t.cm.root.traverse(o=>{/WarRig_Wheel/i.test(o.name)&&(o.visible=!1)});const s=new Kt;s.name="kailee-wheels",this.addTruckTires(s,.14,.04,.16,16732064),t.cm.root.add(s)}addChaos(t,e){if(this.sling.phase!=="none")return;e?(this.frenzyReason=e,this.frenzyReasonT=2.2):this.frenzyReasonT<=0&&(this.frenzyReason="FIGHTING FOR THEM",this.frenzyReasonT=1);const n=this.chaos;if(this.chaos=Math.min(100,this.chaos+t),n<100&&this.chaos>=100&&!this.chaosReadyAnnounced){this.chaosReadyAnnounced=!0,this.shake(.55),Q.chaosReady();const i=this.hud["fx-flash"];i.style.transition="none",i.style.opacity="1",requestAnimationFrame(()=>{i.style.transition="opacity 0.9s",i.style.opacity="0"}),this.banner("MOM'S FRENZY FULL","SLINGSHOT READY — PRESS E",1.2),this.trans.ring(this.vixen.pos,16719823,.5,6,.6)}}heroes(){return[this.vixen,this.kailee,...this.allies.filter(t=>!t.downed).map(t=>t.a)]}allyOf(t){return this.allies.find(e=>e.a===t)}hurt(t,e,n,i,s){if(!t.alive)return;if(t===this.vixen){if(this.p.invuln>0||this.state!=="playing")return;t.hp-=e,this.p.invuln=.45,t.flash(16724048,.12),Q.playerHurt(),this.shake(.18+e*.012),this.rageT>0?this.dmg.spawn(ot.copy(t.pos).setY(t.y+2.6),"PROTECT MODE","v"):(t.vel.addScaledVector(n,i),this.p.fwdSpeed*=.6),this.dmg.spawn(ot.copy(t.pos).setY(t.y+2),"-"+Math.round(e),"v");const u=this.hud["fx-vignette"];u.style.opacity="1",setTimeout(()=>{u.style.opacity="0"},120),t.anim.has("HitReact_Light")&&this.p.atkT<=0&&t.anim.once("HitReact_Light",.35),this.stats.combo=0,t.hp<=0&&(t.hp=0,this.lose());return}const o=this.allyOf(t);if(o){if(o.downed)return;t.hp-=e,t.flash(o.col,.1),Q.kaileeHurt(),t.vel.addScaledVector(n,i*.7),this.dmg.spawn(ot.copy(t.pos).setY(t.y+1.9),"-"+Math.round(e),"k"),o.lastDmg=this.time,this.lastGirlHurtT=this.time,this.addChaos(Math.min(e,20)*1.3,"PROTECT — "+o.name+" HIT"),t.hp<=0?(t.hp=0,o.downed=!0,o.downT=o.key==="payton"?9:8,Q.kaileeDown(),this.addChaos(25,o.name+" DOWN — PROTECT HER"),this.banner(o.name+" DOWN",o.key==="payton"?"COVER HER — SHE GETS UP SLOW":"BACK UP IN 8 SECONDS",1.4),o.key==="payton"&&this.paytonDownComs()):t.anim.has("HitReact_Light")&&t.anim.once("HitReact_Light",.3);return}if(t===this.kailee){if(this.k.downed||this.sling.phase!=="none")return;const u=Math.min(e,t.hp);t.hp-=e,t.flash(16752736,.1),Q.kaileeHurt(),t.vel.addScaledVector(n,i*.7),this.dmg.spawn(ot.copy(t.pos).setY(t.y+1.9),"-"+Math.round(e),"k"),this.k.lastDmg=this.time,this.lastGirlHurtT=this.time,this.addChaos(u*1.6,"PROTECT — KAILEE HIT"),t.hp<=0?(t.hp=0,this.k.downed=!0,this.k.downT=8,Q.kaileeDown(),this.addChaos(20,"KAILEE DOWN — PROTECT HER"),this.banner("KAILEE DOWN","SHE'S BACK UP IN 8 SECONDS",1.6)):t.anim.has("HitReact_Light")&&t.anim.once("HitReact_Light",.3);return}const a=t;if(a.state==="dead")return;if(s.source==="vixen"&&this.rageT>0&&(e=Math.round(e*1.5)),s.source==="vixen"){const u=this.girlNear(a.pos,5);u&&this.addChaos(3,"VIXEN PROTECTS "+u)}a.hp-=e,a.lastHitSource=s.source,a.flash(s.color??16777215,s.heavy?.14:.08),a.squash=Math.min(1,a.squash+(s.heavy?.9:.5));const c=a.def.poise===0||s.heavy||s.source==="sling",l=a.def.kind==="falcon"?i*.35:a.def.kind==="enforcer"?i*.6:i;a.vel.addScaledVector(n,l),s.up&&c&&a.def.kind!=="falcon"&&(a.vy=s.up,a.grounded=!1,a.y=Math.max(a.y,.01)),s.stagger&&c&&(a.state="stagger",a.stateT=a.def.kind==="falcon"?Math.min(.5,s.stagger):s.stagger,a.telegraph&&(a.telegraph.visible=!1),a.state==="stagger"&&this.hidePounceFx(a),a.anim.has("HitReact_Light")&&a.anim.once("HitReact_Light",Math.min(.5,a.stateT)));const h=e>=40;this.dmg.spawn(ot.copy(a.pos).setY(a.y+a.cm.height+.2),String(Math.round(e)),h?"big":""),this.particles.burst(ot.copy(a.pos).setY(a.y+1.1),h?22:9,s.source==="kailee"?Rt.org:Rt.mag,h?9:5,h?.25:.16,.35,-8),s.source!=="sling"&&s.source!=="hazard"&&this.addChaos(Math.min(6,e*.22)),s.source!=="hazard"&&(this.stats.combo++,this.stats.comboT=2.5,this.stats.maxCombo=Math.max(this.stats.maxCombo,this.stats.combo)),a.hp<=0?this.killEnemy(a,s.source):Q.hit()}killEnemy(t,e){if(t.state==="dead")return;t.state="dead",t.deadT=0,t.hp=0,t.telegraph&&(this.scene.remove(t.telegraph),t.telegraph=null),t.finisherFx&&(this.scene.remove(t.finisherFx),t.finisherFx=null),t.pinTarget=null,this.stats.kos++,e!=="sling"&&this.addChaos(t.def.kind==="enforcer"?14:8),e==="sling"&&this.stats.slingKos++,e==="water"&&this.stats.splashKos++,Q.enemyDie(),this.particles.burst(ot.copy(t.pos).setY(t.y+1),26,t.def.kind==="viper"?Rt.mag:Rt.red,8,.22,.6,-6,1),this.trans.ring(t.pos,t.def.kind==="viper"?16719823:16719936,.3,2.5,.4),t.def.kind!=="falcon"&&(t.vy=Math.max(t.vy,5),t.grounded=!1,t.y=Math.max(.01,t.y));const n=t.def.kind==="enforcer"?.6:t.def.kind==="falcon"?0:.22;if(Math.random()<n&&e!=="water"&&this.spawnPickup(t.pos),t.def.kind==="falcon"){this.hud.boss.classList.add("hidden"),this.shake(.8),this.banner("FALCON BROKEN","",2);for(const i of this.enemies)i!==t&&i.state!=="dead"&&this.hurt(i,999,ot.set(0,0,1),5,{source:"vixen",stagger:1})}}spawnPickup(t){let e=this.pickups.find(n=>!n.active);if(!e){const n=new H(new Hc(.28),new It({color:5963584,fog:!1}));e={mesh:n,pos:new E,t:0,active:!1},this.scene.add(n),this.pickups.push(e)}e.active=!0,e.t=0,e.pos.copy(t).setY(.8),e.mesh.visible=!0,e.pos.x=Math.min(e.pos.x,Ft-1)}spawnEnemy(t,e){const n=We[this.wave],i=e?e.clone():new E(Gt+4+Math.random()*(Ft-Gt-8),0,Math.min(n.z1-3,Math.max(n.z0+6,this.vixen.pos.z+14+Math.random()*14)));for(let a=0;a<8&&this.world.colliders.some(c=>c.active&&i.x>c.minX-1&&i.x<c.maxX+1&&i.z>c.minZ-1&&i.z<c.maxZ+1);a++)i.x=Gt+4+Math.random()*(Ft-Gt-8);const s=t==="v"?["viper01","viper02","viper03"][Math.floor(Math.random()*3)]:t==="e"?"enforcer":"falcon",o=new Hh(s,this.scene,i);if(o.heading=Math.PI,this.enemies.push(o),this.trans.ring(i,3800852,.2,2.2,.5),this.trans.flash(ot.copy(i).setY(1.2),3800852,.2,1,.3),this.particles.burst(ot.copy(i).setY(.3),14,Rt.grn,5,.2,.6,4,1),this.level===2&&t==="v"){const a=Wh[Math.min(3,this.wave)]??Wh[this.viperSeq++%4];o.squad=a.squad,o.fin=a.fin,this.viperSeq++%3===0&&this.dmg.spawn(ot.copy(i).setY(2.4),a.squad,"big")}return(t==="e"||t==="f")&&this.irsReadable(o,t),t==="f"&&(this.hud.boss.classList.remove("hidden"),o.cm.root.scale.setScalar(1)),o}irsReadable(t,e){e==="e"&&t.cm.root.scale.multiplyScalar(1.18),t.cm.root.traverse(a=>{if(!a.isMesh||!a.material)return;const c=Array.isArray(a.material)?a.material:[a.material];a.material=c.map(l=>{const h=l.clone();if(h.emissive&&(h.emissive.setHex(16719936),h.emissiveIntensity=Math.max(h.emissiveIntensity||0,.28)),h.color&&h.color.getHSL){const u={h:0,s:0,l:0};h.color.getHSL(u),u.l<.18&&h.color.offsetHSL(0,0,.12)}return h}),a.material.length===1&&(a.material=a.material[0])});const n=document.createElement("canvas");n.width=256,n.height=64;const i=n.getContext("2d");i.font="bold 40px Impact, sans-serif",i.textAlign="center",i.lineWidth=6,i.strokeStyle="#000",i.fillStyle="#ff3050";const s=e==="f"?"FALCON":"IRON ROSE";i.strokeText(s,128,46),i.fillText(s,128,46);const o=new bv(new Uu({map:new Hu(n),transparent:!0,depthTest:!1,fog:!1}));o.scale.set(2.4,.6,1),o.position.y=e==="f"?3.6:3,o.renderOrder=10,t.cm.root.add(o),this.irsSeenWave!==this.wave&&(this.irsSeenWave=this.wave,this.banner("IRON ROSE INBOUND",e==="f"?"FALCON IS HERE — BREAK HIM":"ENFORCERS — WATCH FOR THE QUAY CRUSHER SLAM",1.6),this.dmg.spawn(ot.copy(t.pos).setY(3.2),"IRON ROSE","big"),this.shake(.3))}objectiveGoal(t){if(this.gateOpen)return t.set(0,0,nr),!0;if(this.waveActive){let n=null,i=1e9;for(const s of this.enemies){if(s.state==="dead")continue;const o=s.pos.distanceTo(this.vixen.pos)-(s.def.kind==="falcon"?20:0);o<i&&(i=o,n=s)}return n?(t.copy(n.pos),!0):!1}const e=this.waveCleared?Math.min(3,this.wave+1):this.wave;return t.set(0,0,Math.max(We[e].z0+5,(this.vixen.pos.z<We[e].z0,We[e].z0+5))),!0}updateObjMarker(t){if(!this.objArrow){const h=new Kt,u=new H(new hr(.35,.9,4).rotateX(Math.PI/2),new It({color:3800852,transparent:!0,opacity:.9,depthTest:!1,fog:!1}));u.position.z=1.6,u.renderOrder=11,h.add(u),this.scene.add(h),this.objArrow=h;const d=document.createElement("div");d.id="obj-dist",d.style.cssText="position:absolute;top:44px;left:50%;transform:translateX(-50%);font:bold 15px system-ui,sans-serif;color:#39ff14;text-shadow:0 0 6px #000,0 0 2px #000;pointer-events:none;z-index:5",(this.hud.objective.parentElement||document.body).appendChild(d),this.objDist=d}const e=ue.set(0,0,0),n=this.objectiveGoal(e),i=this.vixen,s=this.objArrow;if(s.visible=n,this.objDist.style.display=n?"":"none",!n)return;const o=e.x-i.pos.x,a=e.z-i.pos.z,c=Math.hypot(o,a);s.position.set(i.pos.x,i.y+.25,i.pos.z),s.rotation.y=Math.atan2(o,a);const l=c<4;if(s.visible=!l,this.objDist.textContent=(this.waveActive?"◆ TARGET ":this.gateOpen?"▲ GATE ":"▲ NEXT ")+Math.round(c)+"m",this.crumbT-=t,this.crumbT<=0&&!this.waveActive&&c>8){this.crumbT=.6;for(let h=1;h<=3;h++){const u=Math.min(c-2,h*4)/c;this.trans.ring(new E(i.pos.x+o*u,.06,i.pos.z+a*u),3800852,.1,.9,.5)}}}update(t){if(this.tickTires(t),this.state!=="playing"){this.updateCamera(t,!0);return}const e=Math.min(t,1/30);if(this.time+=e,this.stats.time+=e,this.hitstop>0){this.hitstop-=e,this.updateCamera(e,!1),this.input.endFrame();return}const n=e*this.worldScale;this.updatePlayer(e),this.updateSling(e),this.sling.phase==="none"&&this.updateKailee(n);for(const i of this.allies)this.updateAlly(i,n);for(const i of this.enemies)this.updateEnemy(i,n);this.separate(),this.updateProjectiles(n),this.updateHazards(e),this.updateMines(e),this.updateComs(e),this.updateFrenzy(e),this.updatePickups(e),this.updateWaves(e),this.updateTurrets(e),this.vixen.syncVisual(e,this.p.turn),this.kailee.syncVisual(n,0);for(const i of this.allies)i.a.syncVisual(n,0);for(const i of this.enemies)i.syncVisual(n,0);this.enemies=this.enemies.filter(i=>i.state==="dead"&&i.deadT>1.4?(i.dispose(this.scene),!1):!0),this.world.update(e,this.time,this.vixen.pos),this.updateObjMarker(e),this.particles.update(e),this.trans.update(e),this.stats.comboT>0&&(this.stats.comboT-=e,this.stats.comboT<=0&&(this.stats.combo=0)),this.lastBannerT>0&&(this.lastBannerT-=e,this.lastBannerT<=0&&(this.hud.banner.style.opacity="0")),Q.intensity=this.waveActive?this.wave>=3?1:.7:.25,Q.updateMusic(),Q.setSkate(this.vixen.speed/11,this.vixen.grounded),this.updateCamera(e,!1),this.updateHud(),this.input.endFrame()}aimAssist(t,e,n){let i=null,s=1/0;for(const o of this.enemies){if(o.state==="dead")continue;const a=o.pos.x-this.vixen.pos.x,c=o.pos.z-this.vixen.pos.z,l=Math.hypot(a,c);if(l>e)continue;const h=Math.abs(Xs(t,Math.atan2(a,c)));if(h>n)continue;const u=l*(1+h*2);u<s&&(s=u,i=o)}return i?Math.atan2(i.pos.x-this.vixen.pos.x,i.pos.z-this.vixen.pos.z):t}updatePlayer(t){const e=this.vixen,n=this.p,i=this.input;n.invuln=Math.max(0,n.invuln-t),n.coneCd=Math.max(0,n.coneCd-t),n.comboT=Math.max(0,n.comboT-t),e.stunT=Math.max(0,e.stunT-t),e.hazardCd=Math.max(0,e.hazardCd-t);let s=(i.down("KeyD")?1:0)-(i.down("KeyA")?1:0)+i.touchMove.x,o=(i.down("KeyW")?1:0)-(i.down("KeyS")?1:0)+i.touchMove.y;const a=Math.hypot(s,o);a>1&&(s/=a,o/=a);const c=Kn(this.camYaw,ot),l=c.x*o-c.z*s,h=c.z*o+c.x*s,u=Math.hypot(l,h),d=this.sling.phase!=="none"&&this.sling.phase!=="land",f=this.rageT>0,g=f?11.8:8,v=f?24:14.5;let m=0;if(i.down("Space")?n.spaceT+=t:n.spaceT=0,n.braking=(i.down("ShiftLeft","ShiftRight")||n.spaceT>.2)&&e.grounded,u>.1&&!d&&n.atkT<=0){const C=Math.atan2(l,h),S=Xs(e.heading,C),M=Math.min(1,n.fwdSpeed/g),P=n.fwdSpeed<2.5?11:Ri.lerp(7.5,3.6,M),O=Ri.clamp(S,-P*t,P*t);e.heading+=O,m=O/t;const F=Math.cos(S);F>0?n.fwdSpeed+=v*t*F*u*(e.grounded?1:.3):n.fwdSpeed-=14*t*-F}else n.fwdSpeed-=(e.grounded?1.5:.2)*t;if(n.braking&&(n.fwdSpeed-=28*t,e.speed>3)){n.brakeSfxT-=t,n.brakeSfxT<=0&&(Q.brake(),n.brakeSfxT=.25);const C=e.forward(ue).multiplyScalar(-2);this.particles.emit(de.copy(e.pos).setY(.1),C.add(new E((Math.random()-.5)*3,2,(Math.random()-.5)*3)),Rt.yel,.12,.3,-9,1)}this.pinnedBy(e)&&(n.fwdSpeed=0,e.vel.set(0,0,0),e.vy=Math.min(e.vy,0));const p=e.stunT>0?.45:1;n.fwdSpeed=Ri.clamp(n.fwdSpeed,0,g*p+4),n.fwdSpeed>g*p&&(n.fwdSpeed-=12*t),n.turn=m;const _=e.grounded?7:1.2,y=Math.sin(e.heading)*n.fwdSpeed,x=Math.cos(e.heading)*n.fwdSpeed;d||(e.vel.x+=(y-e.vel.x)*Math.min(1,_*t),e.vel.z+=(x-e.vel.z)*Math.min(1,_*t));const A=i.locked?this.camYaw:e.heading;if(n.aimYaw=this.aimAssist(A,9,i.locked?.45:.9),n.atkT>0&&(n.atkT-=t),!d&&i.hit("Mouse0","KeyJ")&&n.atkT<=0){const C=this.pinnedBy(this.kailee);C&&e.pos.distanceTo(C.pos)<10?this.partnerCheck(C):this.startShoot()}if(!d&&i.hit("Mouse2","KeyK")&&n.coneCd<=0&&this.sonicCone(),i.hit("KeyE","KeyL")&&this.tryShatter(),!e.grounded&&!d){let C=null,S=2.6;for(const M of this.world.colliders){if(M.ride!=="rail"||!M.active||e.pos.z<M.minZ-1.5||e.pos.z>M.maxZ)continue;const P=(M.minX+M.maxX)/2,O=Math.abs(P-e.pos.x);O<S&&e.y>M.h-.4&&(S=O,C=P)}C!==null&&(e.pos.x+=(C-e.pos.x)*Math.min(1,t*6))}if(!d&&this.sling.phase!=="land"&&e.integrate(t,this.world.colliders),e.grindBox&&e.grounded){const C=e.grindBox,S=(C.minX+C.maxX)/2;e.pos.x+=(S-e.pos.x)*Math.min(1,t*12),n.fwdSpeed=Math.max(n.fwdSpeed,7.5),this.grinding||(this.grinding=!0,this.grindT=0,Q.hop()),this.grindT+=t,this.sparkAcc+=t*60;const M=Math.min(3,Math.floor(this.sparkAcc));this.sparkAcc-=M;for(let P=0;P<M;P++)this.particles.emit(de.set(e.pos.x+(Math.random()-.5)*.3,e.y+.05,e.pos.z),ue.set((Math.random()-.5)*3,1+Math.random()*2.5,-Math.cos(e.heading)*(1+Math.random()*2)),Math.random()<.5?Rt.org:Rt.yel,.07,.35,-12)}else{if(this.grinding){const C=Math.round(50+this.grindT*120);this.trick(this.grindT>1.5?"LONG GRIND":"GRIND",C)}this.grinding=!1}e.grounded?this.airT>0&&(!this.grinding&&this.airT>.55&&(e.y>.3?this.trick("FUNBOX LAND",150):this.trick(this.airFromRamp?"KICKER AIR":"AIR",Math.round(this.airT*160))),this.airT=0):(this.airT===0&&(this.airFromRamp=e.vy>7.3||e.y>.6),this.airT+=t),this.trickChainT>0&&(this.trickChainT-=t,this.trickChainT<=0&&(this.trickChain=0)),e.overWater&&e.y<.2?this.fallInWater(e):e.grounded&&e.pos.x<Ft-1.2&&n.lastSafe.copy(e.pos),e.anim.busy||(n.braking&&e.speed>2?e.anim.setBase("Brake"):Math.abs(m)>1.6&&e.speed>3?e.anim.setBase(m>0?"Locomotion_TurnL":"Locomotion_TurnR",1):e.speed>1.2?e.anim.setBase("Locomotion_Fwd",.6+e.speed/g*.8):e.anim.setBase("Idle_Skate")),e.grounded&&e.speed>6.5&&Math.random()<.4&&this.particles.emit(de.copy(e.pos).setY(.05),ue.set(Math.random()-.5,.8,Math.random()-.5),Rt.mag,.08,.25,-4);const b=Kn(n.aimYaw,ue);this.aimRing.position.set(e.pos.x+b.x*3.2,.05,e.pos.z+b.z*3.2),this.aimRing.scale.setScalar(1+Math.sin(this.time*6)*.08);const R=this.chaos>=100&&this.sling.phase==="none"&&!this.k.downed;this.slingLine.visible=R,R&&(this.slingLine.position.set(e.pos.x,.04,e.pos.z),this.slingLine.rotation.y=n.aimYaw,this.slingLine.material.opacity=.15+Math.sin(this.time*8)*.08)}startShoot(){const t=this.p,e=this.vixen;t.atkDur=.3,t.atkT=t.atkDur,t.atkHit=!0,e.heading=Ws(e.heading,t.aimYaw,.85),t.combo=(t.combo+1)%2,e.anim.has("Check_R")&&e.anim.once("Check_R",.2),e.punchR=1;const n=Kn(t.aimYaw,new E).normalize(),i=new E().copy(e.pos).setY(e.y+1.3).addScaledVector(n,.5);this.proj.fire("pistol",i,n,55,14,"hero","vixen"),Q.pistol(),this.shake(.06),this.particles.burst(i.clone().addScaledVector(n,.3),5,Rt.mag,3,.1,.15,0,.2)}sonicCone(){const t=this.p,e=this.vixen;t.coneCd=1.5,e.heading=t.aimYaw;const n=de.copy(e.pos).setY(e.y+1.25);this.trans.cone(n,t.aimYaw,10,.55,16719823,.5);const i=Kn(t.aimYaw,new E);for(let o=1;o<=5;o++)this.trans.vring(n.clone().addScaledVector(i,o*2),i,o%2===0?16777215:16719823,.2,.5+o*.6,.2+o*.07);Q.cone(),this.shake(.5);{const o=this.hud["fx-vignette"];o.style.boxShadow="inset 0 0 160px 40px rgba(255,31,207,0.85)",o.style.opacity="1",setTimeout(()=>{o.style.opacity="0",setTimeout(()=>{o.style.boxShadow=""},300)},180)}this.dmg.spawn(ot.copy(e.pos).setY(2.8),"SONIC SCREAM","big"),e.anim.has("Slingshot_Release")&&e.anim.once("Slingshot_Release",.4),e.punchL=1,e.punchR=1;const s=Kn(t.aimYaw,ue.clone());for(const o of this.enemies){if(o.state==="dead")continue;const a=o.pos.x-e.pos.x,c=o.pos.z-e.pos.z,l=Math.hypot(a,c);if(l>10+o.radius||Math.abs(Xs(t.aimYaw,Math.atan2(a,c)))>.72)continue;const h=new E(a,0,c).normalize().lerp(s,.4).normalize();this.hurt(o,16,h,14*Math.max(.2,1-l/12),{source:"vixen",stagger:.9,up:3,heavy:o.def.kind==="enforcer",color:16736480})}for(const o of this.proj.list){if(!o.active||o.team!=="enemy")continue;const a=o.pos.x-e.pos.x,c=o.pos.z-e.pos.z;Math.hypot(a,c)<7.5&&Math.abs(Xs(t.aimYaw,Math.atan2(a,c)))<.7&&(o.active=!1,o.mesh.visible=!1,this.particles.burst(o.pos,6,Rt.mag,3,.12,.2))}}fallInWater(t){if(Q.splash(),this.particles.burst(ot.copy(t.pos).setY(-.6),30,Rt.cyan,6,.2,.8,-9,1.5),this.trans.ring(ot.copy(t.pos).setY(-1.05),8446207,.3,3,.7,.8,-1.05),t===this.vixen)t.pos.copy(this.p.lastSafe),t.pos.x=Math.min(t.pos.x,Ft-2.5),t.vel.set(0,0,0),this.p.fwdSpeed=0,t.y=0,t.vy=0,t.grounded=!0,this.p.invuln=0,this.hurt(t,15,ot.set(-1,0,0),0,{source:"water"}),this.p.invuln=1.2,this.banner("SPLASH!","THE WATER BITES — STAY ON THE QUAY",1.2);else if(t===this.kailee||this.allyOf(t))t.pos.copy(this.vixen.pos).add(ot.set(-1.5,0,-1.5)),t.vel.set(0,0,0),t.y=0,t.vy=0,t.grounded=!0,this.hurt(t,10,ot.set(-1,0,0),0,{source:"water"});else{const e=t;this.dmg.spawn(ot.copy(e.pos).setY(1.5),"SPLASH KO","big"),this.killEnemy(e,"water"),e.cm.root.visible=!1,e.deadT=1.4}}tryShatter(t=!1){if(this.sling.phase!=="none")return!1;if(!t&&this.chaos<100)return this.dmg.spawn(ot.copy(this.vixen.pos).setY(2.4),"CHAOS "+Math.floor(this.chaos)+"% — HIT & KO TO FILL","k"),this.banner("SLINGSHOT NOT READY","CHAOS "+Math.floor(this.chaos)+"% — SHOOT, KO, OR LET KAILEE TANK",1),!1;if(this.k.downed)return this.banner("KAILEE IS DOWN","WAIT FOR HER TO RECOVER",1.2),!1;const e=this.sling;return e.phase="tether",e.t=0,e.hit.clear(),e.dist=0,e.firstHit=!1,e.dir.copy(Kn(this.p.aimYaw)),this.vixen.heading=this.p.aimYaw,this.vixen.vel.multiplyScalar(.2),this.p.fwdSpeed=0,this.worldScale=.25,this.stats.slings++,Q.tether(),this.banner("VIXEN PLANTS — AIM KAILEE","MOUSE / A·D TO AIM · RELEASE E/L OR CLICK TO FIRE",1.4),this.slingAimYaw=this.p.aimYaw,this.trans.ring(this.vixen.pos,16719823,.4,3,.5),this.vixen.anim.has("Slingshot_Charge")&&this.vixen.anim.once("Slingshot_Charge",.55),this.chaos=0,this.chaosReadyAnnounced=!1,!0}updateSling(t){const e=this.sling,n=this.vixen,i=this.kailee;if(e.phase==="none"){this.beam.hide();return}if(e.t+=t,e.phase==="tether"){const s=ot.copy(n.pos).addScaledVector(e.dir,1.3);i.pos.lerp(s,Math.min(1,t*9)),i.y+=(.9-i.y)*Math.min(1,t*9),i.heading=Math.atan2(e.dir.x,e.dir.z);const o=ue.copy(n.pos).setY(n.y+1.3),a=de.copy(i.pos).setY(i.y+1);this.beam.set(o,a,2.2+Math.sin(this.time*60)*.8),Math.floor(e.t*8)!==Math.floor((e.t-t)*8)&&(this.trans.ring(n.pos,16719823,.25,2.6,.35),this.trans.ring(n.pos,4255999,.15,1.6,.3)),Math.random()<.7&&this.particles.emit(de.copy(n.pos).setY(n.y+1.4),new E((Math.random()-.5)*3,Math.random()*1.5,(Math.random()-.5)*3),Math.random()<.5?Rt.cyan:Rt.mag,.15,.25),this.fovKick=-6,Math.random()<.6&&this.particles.emit(a,new E((Math.random()-.5)*2,Math.random()*2,(Math.random()-.5)*2),Rt.mag,.2,.3),this.worldScale=.12;const c=this.input;c.locked&&(this.slingAimYaw=this.camYaw),c.down("KeyA","ArrowLeft")&&(this.slingAimYaw+=t*2.6),c.down("KeyD","ArrowRight")&&(this.slingAimYaw-=t*2.6),c.touchMove&&Math.abs(c.touchMove.x)>.2&&(this.slingAimYaw-=c.touchMove.x*t*2.6);const l=this.aimAssist(this.slingAimYaw,26,.3);if(e.dir.copy(Kn(l)),n.heading=l,this.slingLine.visible=!0,this.slingLine.position.set(n.pos.x,.05,n.pos.z),this.slingLine.rotation.y=l,this.slingLine.scale.set(3,1,1.35),this.slingLine.material.opacity=.75+Math.sin(this.time*20)*.2,e.t>.18&&(!c.down("KeyE","KeyL")||c.hit("Mouse0","Space","KeyJ"))||e.t>1.6){this.slingLine.visible=!1,this.slingLine.scale.set(1,1,1),e.phase="launch",e.t=0,Q.sonicBoost(),Q.slingshotLaunch();{const d=this.hud["fx-vignette"];d.style.boxShadow="inset 0 0 220px 70px rgba(64,240,255,0.75), inset 0 0 90px 20px rgba(255,31,207,0.9)",d.style.opacity="1",setTimeout(()=>{d.style.opacity="0",setTimeout(()=>{d.style.boxShadow=""},300)},260)}{const d=this.hud["fx-flash"];d.style.background="#bff8ff",d.style.opacity="0.55",setTimeout(()=>{d.style.opacity="0",setTimeout(()=>{d.style.background=""},250)},70)}this.banner("SONIC BOOST ×200","VIXEN SCREAMS — KAILEE GOES SUPERSONIC",.9),this.trans.flash(ot.copy(n.pos).addScaledVector(e.dir,.8).setY(n.y+1.3),16728288,.2,1.1,.2),this.trans.ring(n.pos,16719823,.5,4.5,.5),this.shake(.7);const u=ot.copy(n.pos).addScaledVector(e.dir,.7).setY(n.y+1.3);this.trans.vring(u,e.dir,16719823,.3,2,.35),this.trans.vring(u.clone().addScaledVector(e.dir,2.5),e.dir,16777215,.2,1.4,.3),this.trans.cone(u,Math.atan2(e.dir.x,e.dir.z),6,.22,16728288,.3),this.trans.cone(u,Math.atan2(e.dir.x,e.dir.z),12,.42,4255999,.45);for(let d=1;d<=6;d++)this.trans.vring(u.clone().addScaledVector(e.dir,d*2.2),e.dir,d%2?4255999:16719823,.25,1.2+d*.7,.25+d*.06);this.trans.ring(n.pos,4255999,.4,7,.6),this.trans.ring(n.pos,16777215,.2,3.5,.35),this.particles.burst(u,40,Rt.cyan,14,.2,.4,0,.6),this.dmg.spawn(de.copy(n.pos).setY(3.2),"SONIC BOOST ×200","big"),this.shake(1),this.worldScale=1,this.fovKick=22,n.anim.has("Slingshot_Release")&&n.anim.once("Slingshot_Release",.6),i.anim.has("Check_R")&&i.anim.once("Check_R",.8),i.vel.copy(e.dir).multiplyScalar(Ge.SLING_BOOST_SPEED),this.hitstop=.09,i.punchL=1.5,i.punchR=1.5,n.punchL=1.2,n.punchR=1.2}return}if(e.phase==="launch"){this.beam.hide();const s=Ge.SLING_BOOST_SPEED*t,o=Math.max(1,Math.ceil(s/.5)),a=s/o;let c=!1;for(let l=0;l<o&&!c&&(i.pos.addScaledVector(e.dir,a),e.dist+=a,c=this.world.colliders.some(h=>h.active&&i.pos.x>h.minX-.4&&i.pos.x<h.maxX+.4&&i.pos.z>h.minZ-.4&&i.pos.z<h.maxZ+.4&&h.h>1),!(e.dist>Ge.SLING_RANGE));l++)for(const h of this.enemies){if(h.state==="dead"||e.hit.has(h))continue;if(Math.hypot(h.pos.x-i.pos.x,h.pos.z-i.pos.z)<3.4+h.radius){e.hit.add(h);const d=ot.set(h.pos.x-i.pos.x,0,h.pos.z-i.pos.z).normalize().multiplyScalar(.5).add(e.dir).normalize();this.hurt(h,h.def.kind==="falcon"?270:175,d,40,{source:"sling",stagger:1.8,up:9,heavy:!0,color:4255999}),this.shake(.45),e.firstHit||(e.firstHit=!0,this.hitstop=.16,Q.impact(),this.dmg.spawn(ot.copy(h.pos).setY(h.y+3),"SUPERSONIC SMACK!","big"),this.trans.ring(h.pos,4255999,.5,7,.55),this.trans.ring(h.pos,16719823,.3,5,.45),this.trans.ring(h.pos,16777215,.2,3,.3),this.trans.flash(ot.copy(h.pos).setY(1.2),8452351,.4,3.5,.25),this.particles.burst(ot.copy(h.pos).setY(1.2),36,Rt.cyan,12,.22,.45,-6,.8))}}i.y=.9+Math.sin(Math.min(1,e.dist/Ge.SLING_RANGE)*Math.PI)*.8,i.heading=Math.atan2(e.dir.x,e.dir.z),i.cm.pivot.rotation.x=1.15;for(let l=0;l<12;l++)this.particles.emit(ot.copy(i.pos).addScaledVector(e.dir,-Math.random()*3).setY(i.y+.6+Math.random()*.9),ue.set((Math.random()-.5)*3,Math.random()*2,(Math.random()-.5)*3).addScaledVector(e.dir,-10),[Rt.org,Rt.mag,Rt.cyan][l%3],.4,.5,1);if(Math.random()<.5&&this.trans.vring(ot.copy(i.pos).setY(i.y+1),e.dir,Math.random()<.5?4255999:16719823,.15,1.6,.2),i.pos.x>Ft-.6&&(i.pos.x=Ft-.6),i.pos.x<Gt+.6&&(i.pos.x=Gt+.6),e.dist>Ge.SLING_RANGE||c){c&&i.pos.addScaledVector(e.dir,-.8),e.phase="land",e.t=0,i.y=0,i.vel.copy(e.dir).multiplyScalar(5),Q.impact(),this.shake(.5),this.trans.ring(i.pos,16747051,.5,6.5,.55),this.trans.ring(i.pos,4255999,.4,5.5,.5),this.trans.ring(i.pos,16719823,.3,4,.4),this.particles.burst(ot.copy(i.pos).setY(.3),30,Rt.org,9,.25,.5,-8,.8),this.trans.flash(ot.copy(i.pos).setY(.8),16747051,.4,3.5,.3);for(const l of this.enemies){if(l.state==="dead")continue;const h=l.pos.x-i.pos.x,u=l.pos.z-i.pos.z;Math.hypot(h,u)<4.5&&this.hurt(l,35,ot.set(h,0,u).normalize(),14,{source:"sling",stagger:1,up:5,heavy:!0})}}return}e.phase==="land"&&(i.cm.pivot.rotation.x*=.85,i.vel.multiplyScalar(.9),i.pos.addScaledVector(i.vel,t),this.fovKick*=.9,e.t>.45&&(e.phase="none",i.cm.pivot.rotation.x=0,this.fovKick=0))}updateAlly(t,e){const n=t.a,i=this.vixen;if(n.hazardCd=Math.max(0,n.hazardCd-e),t.downed){t.downT-=e,n.vel.multiplyScalar(.9),n.integrate(e,this.world.colliders),n.cm.pivot.rotation.x+=(-1.35-n.cm.pivot.rotation.x)*Math.min(1,e*6),n.cm.pivot.position.y=.25,t.downT<=0&&(t.downed=!1,n.hp=n.maxHp*.3,Q.kaileeUp(),n.cm.pivot.rotation.x=0,n.cm.pivot.position.y=0,n.anim.has("Knockdown_Recover")&&n.anim.once("Knockdown_Recover",.9),this.trans.ring(n.pos,t.col,.3,3,.5),this.dmg.spawn(ot.copy(n.pos).setY(2),t.name+" BACK UP","heal"),t.recoverT=t.key==="payton"?2.2:.8,t.key==="payton"&&(this.comsLine("PAYTON","I'm up girls… I'm up."),this.comsLine("PAYTON","Mom — what's your 6?")));return}if(t.recoverT>0){t.recoverT-=e,n.integrate(e,this.world.colliders);return}if(this.pinnedBy(n)){n.vel.set(0,0,0),n.anim.setBase("Idle_Skate",1);return}if(t.atkCd=Math.max(0,t.atkCd-e),t.shootCd=Math.max(0,t.shootCd-e),t.sigCd=Math.max(0,t.sigCd-e),t.sigT>0&&(!t.target||t.target.state==="dead")&&(t.sigT=Math.max(0,t.sigT-e)),this.time-t.lastDmg>5&&n.hp<n.maxHp&&(n.hp=Math.min(n.maxHp,n.hp+4*e)),t.retarget-=e,t.retarget<=0||t.target&&t.target.state==="dead"){t.retarget=.45,t.target=null;let v=15;for(const m of this.enemies){if(m.state==="dead"||m.state==="spawn")continue;const p=m.pos.distanceTo(i.pos),_=m.pos.distanceTo(n.pos),y=Math.min(p,_*.9);p<16&&y<v&&(v=y,t.target=m)}}const s=ot;let o=t.role==="melee"?11:9.5;const a=t.target;let c=99;const l=t.role==="melee"?1.5:7;if(a){c=Math.hypot(a.pos.x-n.pos.x,a.pos.z-n.pos.z);const v=(a.pos.x-n.pos.x)/Math.max(c,.1),m=(a.pos.z-n.pos.z)/Math.max(c,.1);s.set(a.pos.x-v*l-m*t.side*.3,0,a.pos.z-m*l+v*t.side*.3)}else{const v=i.forward(ue);s.set(i.pos.x-v.x*t.back+v.z*t.side,0,i.pos.z-v.z*t.back-v.x*t.side),s.x>Ft-1.5&&(s.x=Ft-1.5),o=Math.max(6,i.speed+2)}const h=s.x-n.pos.x,u=s.z-n.pos.z,d=Math.hypot(h,u),f=Math.min(o,d*2.6);n.vel.x+=((d>.05?h/d*f:0)-n.vel.x)*Math.min(1,e*5),n.vel.z+=((d>.05?u/d*f:0)-n.vel.z)*Math.min(1,e*5),n.pos.x>Ft-1.2&&n.vel.x>0&&(n.vel.x-=30*e);const g=a&&c<14?Math.atan2(a.pos.x-n.pos.x,a.pos.z-n.pos.z):n.speed>.8?Math.atan2(n.vel.x,n.vel.z):n.heading;if(n.heading=Ws(n.heading,g,Math.min(1,e*10)),a&&a.state!=="dead"&&a.state!=="spawn"){const v=ue.set(a.pos.x-n.pos.x,0,a.pos.z-n.pos.z).normalize();if(t.sigT>0)this.updateAllySig(t,a,v,e);else if(t.sigCd<=0&&(t.role==="melee"?c<4.5:c<15))this.startAllySig(t);else if(t.role==="melee"&&c<2.4&&t.atkCd<=0){t.atkCd=.6,t.swing++;const m=t.swing%3===0;n.anim.once(m?"Attack_Elbow":t.swing%2?"Attack_Kick_L":"Attack_Kick_R",.4),t.swing%2?n.punchL=1:n.punchR=1,Q.blade(),this.hurt(a,m?16:9,v.clone(),m?10:4,{source:"brianna",stagger:m?.9:.3,heavy:m,color:t.col});const p=de.copy(n.pos).addScaledVector(v,.8).setY(1.2);this.particles.burst(p,m?14:7,new _t(t.col),m?5:3,.2,.3)}else if(t.role==="ranged"&&c<15&&t.shootCd<=0){t.shootCd=.7+Math.random()*.2;const m=de.copy(n.pos).setY(1.1).addScaledVector(v,.5);for(let p=0;p<4;p++){const _=v.clone().applyAxisAngle(Sa,(Math.random()-.5)*.1);this.proj.fire("pistol",m,_,55,3,"hero","payton")}Q.pistol(),setTimeout(()=>Q.pistol(),60),this.gatlingSpin=.5,this.particles.emit(m.clone().addScaledVector(v,.6),v.clone().multiplyScalar(2),new _t(t.col),.3,.08)}else if(t.role==="melee"&&c>=2.4&&c<10&&t.shootCd<=0){t.shootCd=1.3;const m=de.copy(n.pos).setY(1.3);this.proj.fire("pistol",m,v,40,4,"hero","brianna")}}if(t.key==="brianna"&&a&&a.state!=="dead"&&(this.seekerCd-=e,this.seekerCd<=0&&c<16)){this.seekerCd=3.2+Math.random();const v=de.copy(n.pos).setY(1.6),m=new E(a.pos.x-v.x,0,a.pos.z-v.z).normalize();this.proj.fire("bolt",v,m,30,14,"hero","brianna"),Q.bolt(),this.particles.burst(v,8,Rt.red,3,.15,.2,0,0),this.dmg.spawn(ot.copy(n.pos).setY(2.3),"BB SEEKER","k")}if(t.key==="payton"&&this.gatling){this.gatlingSpin=Math.max(0,this.gatlingSpin-e);const v=this.gatling.getObjectByName("barrels");v&&(v.rotation.z+=e*(t.sigT>0||this.gatlingSpin>0?40:1.5))}Math.random()<.2&&this.particles.emit(de.copy(n.pos).setY(.1),ue.set(0,.6,0),new _t(t.col),.12,.25),n.pos.distanceTo(i.pos)>30&&(n.pos.copy(i.pos).add(ot.set(t.side,0,-t.back)),this.trans.ring(n.pos,t.col,.2,2,.4)),n.integrate(e,this.world.colliders),n.overWater&&n.y<.2&&this.fallInWater(n),n.anim.busy||n.anim.setBase(n.speed>1.2?"Locomotion_Fwd":"Idle_Skate",.7+n.speed/14)}startAllySig(t){const e=Ge.SIG[t.key];t.sigT=e.dur,t.sigShot=0,t.sigCd=e.cd+Math.random()*e.jitter;const n=t.a;t.key==="brianna"&&(t.swing++,t.chest=!t.chest),t.key==="brianna"&&t.chest?(this.banner("CHEST-BUSTER","BRIANNA · THERMAL CORE BLAST",1),Q.cone(),this.shake(.3)):t.key==="brianna"?(this.banner("THERMAL COIL LASH","BRIANNA · BURN ZONE",1),n.anim.has("Attack_Punch_R")&&n.anim.once("Attack_Punch_R",.5),n.punchR=1,Q.blade(),Q.zap(),this.shake(.2),this.trans.ring(n.pos,t.col,.4,3.6,.45),this.trans.ring(n.pos,4063130,.2,3,1.6,.5)):(this.banner("HUNDRED COUNT","PAYTON · GATLING SPIN-UP",1),Q.tether())}updateAllySig(t,e,n,i){const s=t.a,o=new _t(t.col);if(n=n.clone(),t.sigT-=i,t.key==="brianna"&&t.chest){s.vel.multiplyScalar(.8);const a=de.copy(s.pos).setY(1.3);for(let c=0;c<6;c++)this.particles.emit(a,n.clone().applyAxisAngle(Sa,(Math.random()-.5)*.5).multiplyScalar(10+Math.random()*6),c%2?Rt.org:Vh,.3,.35,0,1);if(t.sigShot+=i,t.sigShot>=.25){t.sigShot=0;for(const c of this.enemies){if(c.state==="dead"||c.state==="spawn")continue;const l=c.pos.x-s.pos.x,h=c.pos.z-s.pos.z,u=Math.hypot(l,h);u<8&&(l*n.x+h*n.z)/Math.max(u,.1)>.8&&this.hurt(c,9,ue.set(l,0,h).normalize().clone(),6,{source:"brianna",stagger:.5,color:16747051})}}}else if(t.key==="brianna"){for(let a=0;a<4;a++){const c=Math.random()*Math.PI*2,l=Math.random()*3;this.particles.emit(de.set(s.pos.x+Math.cos(c)*l,.15,s.pos.z+Math.sin(c)*l),ot.set(0,1.5+Math.random(),0),a%2?o:Vh,.22,.45,1)}if(t.sigShot+=i,t.sigShot>=.3){t.sigShot=0;for(const a of this.enemies)if(!(a.state==="dead"||a.state==="spawn")&&Math.hypot(a.pos.x-s.pos.x,a.pos.z-s.pos.z)<3.2){const c=ue.set(a.pos.x-s.pos.x,0,a.pos.z-s.pos.z).normalize();this.hurt(a,5,c.clone(),2,{source:"brianna",stagger:.25,color:t.col})}this.trans.ring(s.pos,t.col,2.6,3.3,.3,.6)}}else{const a=Ge.SIG.payton,c=a.dur-t.sigT;s.vel.multiplyScalar(.85);const l=de.copy(s.pos).addScaledVector(n,.6).setY(1.2);if(c<a.spin)Math.random()<.5&&this.particles.emit(l,ot.set(Math.random()-.5,Math.random(),Math.random()-.5),o,.15,.15),Math.random()<.15&&Q.telegraph();else for(t.sigShot-=i;t.sigShot<=0&&e;){t.sigShot+=a.rate;const h=n.clone().applyAxisAngle(Sa,(Math.random()-.5)*.12);this.proj.fire("pistol",l,h.clone(),60,2.5,"hero","payton"),this.particles.emit(l,h.clone().multiplyScalar(3),Math.random()<.5?o:Rt.white,.3,.05),Math.random()<.5&&Q.pistol()}}t.sigT<=0&&(t.sigT=0)}updateKailee(t){const e=this.kailee,n=this.vixen,i=this.k;if(e.hazardCd=Math.max(0,e.hazardCd-t),i.downed){i.downT-=t,e.vel.multiplyScalar(.9),e.integrate(t,this.world.colliders),e.cm.pivot.rotation.x+=(-1.35-e.cm.pivot.rotation.x)*Math.min(1,t*6),e.cm.pivot.position.y=.25,Math.random()<.15&&this.particles.emit(ot.copy(e.pos).setY(.4),ue.set(0,1.2,0),Rt.org,.2,.6),i.downT<=0&&(i.downed=!1,e.hp=e.maxHp*.25,Q.kaileeUp(),e.cm.pivot.rotation.x=0,e.cm.pivot.position.y=0,e.anim.has("Knockdown_Recover")&&e.anim.once("Knockdown_Recover",.9),this.trans.ring(e.pos,16747051,.3,3,.5),this.dmg.spawn(ot.copy(e.pos).setY(2),"KAILEE BACK UP","heal"),i.recoverT=.8);return}if(i.recoverT>0){i.recoverT-=t,e.integrate(t,this.world.colliders);return}if(this.pinnedBy(e)){e.vel.set(0,0,0),e.anim.setBase("Idle_Skate",1);return}if(i.atkCd=Math.max(0,i.atkCd-t),i.slideCd=Math.max(0,i.slideCd-t),i.slideT>0){this.updateSlideUnder(t);return}if(i.shootCd=Math.max(0,i.shootCd-t),this.time-i.lastDmg>5&&e.hp<e.maxHp&&(e.hp=Math.min(e.maxHp,e.hp+4*t)),i.retarget-=t,i.retarget<=0||i.target&&i.target.state==="dead"){i.retarget=.4,i.target=null;let m=15;for(const p of this.enemies){if(p.state==="dead"||p.state==="spawn")continue;const _=p.pos.distanceTo(n.pos),y=p.pos.distanceTo(e.pos),x=Math.min(_,y*.9);_<16&&x<m&&(m=x,i.target=p)}}const s=ot;let o=10.5;const a=i.target;let c=99;if(a){c=Math.hypot(a.pos.x-e.pos.x,a.pos.z-e.pos.z);const m=(Math.sin(this.time*.7)>0?1:-1)*.8;s.set(a.pos.x-(a.pos.x-e.pos.x)/Math.max(c,.1)*1.5+m*.2,0,a.pos.z-(a.pos.z-e.pos.z)/Math.max(c,.1)*1.5)}else{const m=n.forward(ue);s.set(n.pos.x-m.x*2.4+m.z*2,0,n.pos.z-m.z*2.4-m.x*2),s.x>Ft-1.5&&(s.x=n.pos.x-m.z*2),o=Math.max(6,n.speed+2)}const l=s.x-e.pos.x,h=s.z-e.pos.z,u=Math.hypot(l,h),d=Math.min(o,u*2.6),f=u>.05?l/u*d:0,g=u>.05?h/u*d:0;e.vel.x+=(f-e.vel.x)*Math.min(1,t*5),e.vel.z+=(g-e.vel.z)*Math.min(1,t*5),e.pos.x>Ft-1.2&&e.vel.x>0&&(e.vel.x-=30*t);const v=a&&c<13?Math.atan2(a.pos.x-e.pos.x,a.pos.z-e.pos.z):e.speed>.8?Math.atan2(e.vel.x,e.vel.z):e.heading;if(e.heading=Ws(e.heading,v,Math.min(1,t*10)),a&&a.state!=="dead"){if(c<2.4&&i.atkCd<=0&&i.slideCd<=0&&a.state!=="spawn")this.startSlideUnder(a,c);else if(c<2.4&&i.atkCd<=0){i.atkCd=.55,i.swing=1-i.swing,e.anim.once(i.swing?"Check_L":"Check_R",.4),i.swing?e.punchL=1:e.punchR=1,Q.blade();const m=ue.set(a.pos.x-e.pos.x,0,a.pos.z-e.pos.z).normalize();this.hurt(a,8,m.clone(),4,{source:"kailee",stagger:.3,color:16752704});const p=de.copy(e.pos).addScaledVector(m,.8).setY(1.2);for(let _=0;_<10;_++)this.particles.emit(p,new E((Math.random()-.5)*3,Math.random()*3,(Math.random()-.5)*3),_%3?Rt.org:Rt.yel,.22,.35,2,2)}else if(c>=2.4&&c<13&&i.shootCd<=0){i.shootCd=.6+Math.random()*.2;const m=de.copy(e.pos).setY(1.3),p=ue.set(a.pos.x-e.pos.x,0,a.pos.z-e.pos.z).normalize();this.kaileeMuzzle.getWorldPosition(m),this.proj.fire("pistol",m,p,45,5,"hero","kailee"),Q.pistol(),this.time>this.kLabelT&&(this.kLabelT=this.time+5,this.dmg.spawn(ot.copy(e.pos).setY(2.3),"KAILEE .40","k")),this.particles.burst(m,6,Rt.yel,3,.16,.08,0,0),this.particles.emit(m,p.clone().multiplyScalar(2),Rt.white,.35,.06)}}if(Math.random()<.35){const m=e.cm.bones.hand_r||e.cm.bones.hand_l;m&&(m.getWorldPosition(de),this.particles.emit(de,ue.set((Math.random()-.5)*.4,1.5,(Math.random()-.5)*.4),Math.random()<.5?Rt.org:Rt.yel,.14,.3,1))}e.pos.distanceTo(n.pos)>30&&(e.pos.copy(n.pos).add(ot.set(-1.5,0,-2)),this.trans.ring(e.pos,16747051,.2,2,.4)),e.integrate(t,this.world.colliders),e.overWater&&e.y<.2&&this.fallInWater(e),e.anim.busy||e.anim.setBase(e.speed>1.2?"Locomotion_Fwd":"Idle_Skate",.7+e.speed/14)}startSlideUnder(t,e){const n=this.k,i=this.kailee,s=Ge.SLIDE;n.slideT=s.dur,n.slideHits=0,n.slideTgt=t,n.slideCd=s.cooldown+Math.random()*s.cdJitter,n.atkCd=.8,n.slideDir.set(t.pos.x-i.pos.x,0,t.pos.z-i.pos.z).normalize(),i.heading=Math.atan2(n.slideDir.x,n.slideDir.z),Q.blade(),this.trans.ring(i.pos,2784255,.25,2.5,.35)}updateSlideUnder(t){const e=this.k,n=this.kailee,i=e.slideTgt,s=Ge.SLIDE;e.slideT-=t;const o=s.dur-e.slideT,c=o<.42?s.speed:s.speed*.25;n.vel.set(e.slideDir.x*c,n.vel.y,e.slideDir.z*c);const l=Math.min(1,o/.08)*Math.min(1,Math.max(0,e.slideT)/.15);n.cm.pivot.position.y=-.55*l,n.cm.pivot.rotation.x=-.7*l;for(let u=0;u<3;u++)this.particles.emit(de.copy(n.pos).setY(.35+Math.random()*.4),ue.set((Math.random()-.5)*1.5,Math.random()*1.2,(Math.random()-.5)*1.5),u%2?Rt.blu:Rt.cyan,.2,.3,1);const h=e.slideHits===0?s.hitAt1:s.hitAt2;if(e.slideHits<2&&o>=h&&i&&i.state!=="dead"){const u=e.slideHits===0?s.hit1:s.hit2;e.slideHits++;const d=ue.copy(e.slideDir).setY(e.slideHits===2?.6:.2).normalize();this.hurt(i,u,d.clone(),7,{source:"kailee",stagger:.8,color:4892927});const f=de.copy(i.pos).setY(.9);this.particles.burst(f,26,Rt.cyan,7,.18,.45,-4,1.2),this.particles.burst(f,18,Rt.blu,5,.25,.5,-4,1.2),this.particles.burst(f,6,Rt.white,3,.3,.15,0,1),this.trans.ring(f,4892927,.3,3.2,.3),Q.blade(),this.shake(.3),this.hitstop=.07,e.slideHits===1&&this.dmg.spawn(de.copy(i.pos).setY(2.4),"SLIDE UNDER","heal"),e.slideHits===1&&this.banner("SLIDE UNDER","KAILEE · THERMAL BLADE SLICE",.9)}else e.slideHits<2&&(!i||i.state==="dead")&&(e.slideHits=2);n.integrate(t,this.world.colliders),e.slideT<=0&&(e.slideT=0,e.slideTgt=null,n.cm.pivot.position.y=0,n.cm.pivot.rotation.x=0)}pinnedBy(t){for(const e of this.enemies)if(e.state==="pin"&&e.pinTarget===t)return e;return null}startPinkPounce(t,e){const n=fi.pink_pounce;t.state="windup",t.stateT=n.windup,t.attackKind="pounce",t.target=e,t.pounceTo.set(e.pos.x,0,e.pos.z),t.finisherCd=n.cooldown+Math.random()*3,Q.telegraph(),Q.tether(),t.pos.distanceTo(this.vixen.pos)<22&&this.banner(t.fin??"PINK POUNCE",e===this.kailee?"FANG IS LEAPING AT KAILEE — DODGE / CHECK":"FANG IS LEAPING — HOP OR SKATE OUT",1.1)}ensurePounceFx(t){if(t.finisherFx)return t.finisherFx;const e=fi.pink_pounce.color,n=()=>new It({color:e,transparent:!0,opacity:.8,blending:we,depthWrite:!1,fog:!1,side:Fe}),i=new Kt,s=new H(new Di(1.4,1.52,48).rotateX(-Math.PI/2),n());s.name="ring",s.position.y=.05,i.add(s);const o=new H(new gi(1.15,40).rotateX(-Math.PI/2),n());o.name="disc",o.position.y=.04,o.visible=!1,i.add(o);const a=new Kt;a.name="lane",i.add(a);const c=new Yu;c.moveTo(-.7,0),c.lineTo(0,.55),c.lineTo(.7,0),c.lineTo(.7,.28),c.lineTo(0,.83),c.lineTo(-.7,.28),c.closePath();const l=new Vc(c).rotateX(-Math.PI/2);for(let u=0;u<6;u++){const d=new H(l,n());d.name="chev"+u,d.position.y=.06,a.add(d)}const h=new H(new Ze(.35,10,8),n());return h.name="eye",i.add(h),this.scene.add(i),t.finisherFx=i,i}pounceWindupFx(t,e,n){const i=fi.pink_pounce;t.stateT>i.windup*.4&&t.pounceTo.lerp(ot.set(e.pos.x,0,e.pos.z),Math.min(1,n*3));const s=this.ensurePounceFx(t);s.visible=!0;const o=1-Math.max(0,t.stateT)/i.windup,a=Math.sin(this.time*34)>0;s.position.set(t.pounceTo.x,0,t.pounceTo.z);const c=s.getObjectByName("ring"),l=s.getObjectByName("disc");c.scale.setScalar(1.6-o*.6),c.material.opacity=.55+(a?.4:.15),l.material.opacity=.12+o*.38;const h=s.getObjectByName("lane");h.visible=!0;const u=t.pos.x-t.pounceTo.x,d=t.pos.z-t.pounceTo.z,f=Math.hypot(u,d)||1;h.rotation.y=Math.atan2(u,d),h.children.forEach((v,m)=>{const p=(m/6+this.time*1.4)%1;v.position.set(0,.06,f-p*Math.max(0,f-1.3)),v.material.opacity=(.35+.6*Math.sin(p*Math.PI))*(.6+o*.4)});const g=s.getObjectByName("eye");g.position.set(t.pos.x-s.position.x,1.6,t.pos.z-s.position.z),g.scale.setScalar(a?1.4:.6),t.squash=Math.max(t.squash,.55*o+.2),t.cm.pivot.position.y=-.12*o,a&&t.flash(i.color,.04)}beginPin(t,e){const n=fi.pink_pounce;t.state="pin",t.stateT=n.pinTime,t.pinTarget=e,t.pinTickT=.12,t.y=0,t.vy=0,t.grounded=!0,t.cm.pivot.position.y=0,e.vel.set(0,0,0),e===this.vixen&&(this.p.fwdSpeed=0),this.shake(.35),Q.impact(),this.trans.ring(e.pos,n.color,.4,3.5,.45),this.banner("PINNED!",e===this.vixen?"PRESS F — KAILEE CHECKS FANG OFF":"SHOOT (J) NEAR FANG — CHECK HER OFF KAILEE",1.4)}pinFx(t,e){const n=this.ensurePounceFx(t);n.visible=!0,n.position.set(e.pos.x,0,e.pos.z),n.getObjectByName("lane").visible=!1;const i=n.getObjectByName("ring");i.scale.setScalar(.75+Math.sin(this.time*18)*.05),i.material.opacity=.9,n.getObjectByName("disc").scale.setScalar(.75),n.getObjectByName("disc").material.opacity=.35;const s=n.getObjectByName("eye");s.position.set(0,1.2,0),s.scale.setScalar(1)}hidePounceFx(t){t.finisherFx&&(t.finisherFx.visible=!1),t.cm.pivot.position.y=0,t.state!=="pin"&&(t.pinTarget=null)}endPin(t,e){const n=t.pinTarget;if(t.pinTarget=null,this.hidePounceFx(t),!e&&(t.state="recover",t.stateT=.9,n)){const i=ot.set(t.pos.x-n.pos.x,0,t.pos.z-n.pos.z).normalize();t.vel.copy(i).multiplyScalar(6)}}partnerCheck(t){const e=t.pinTarget;if(!e)return;const n=e===this.vixen?this.kailee:this.vixen;if(n===this.kailee&&this.k.downed)return;if(n.pos.distanceTo(t.pos)>10){this.dmg.spawn(ot.copy(n.pos).setY(2),"TOO FAR","k");return}if(n===this.kailee){const s=ue.set(t.pos.x-n.pos.x,0,t.pos.z-n.pos.z).normalize();n.pos.copy(t.pos).addScaledVector(s,-1),n.heading=Math.atan2(s.x,s.z),n.anim.has("Check_R")&&n.anim.once("Check_R",.4)}this.endPin(t,!0);const i=de.set(t.pos.x-e.pos.x,0,t.pos.z-e.pos.z).normalize();this.hurt(t,12,i,12,{source:n===this.kailee?"kailee":"vixen",stagger:1.2,up:3,heavy:!0,color:16752704}),this.banner("CHECK!","PIN BROKEN",.9),Q.punch(!0)}pickTarget(t){const e=this.vixen,n=this.kailee,i=this.allies.filter(a=>!a.downed);if(i.length&&Math.random()<.3){let a=i[0];for(const c of i)c.a.pos.distanceTo(t.pos)<a.a.pos.distanceTo(t.pos)&&(a=c);if(a.a.pos.distanceTo(t.pos)<14)return a.a}if(this.k.downed||this.sling.phase!=="none")return e;const s=t.pos.distanceTo(n.pos),o=t.pos.distanceTo(e.pos);return t.def.kind==="falcon"?Math.random()<.7?e:n:s<12&&Math.random()<.55||s<o*.8?n:e}makeTelegraph(t,e,n){if(!t.telegraph){const i=new Pe(n,e).rotateX(-Math.PI/2).translate(0,.03,e/2);t.telegraph=new H(i,new It({color:16719936,transparent:!0,opacity:.6,blending:we,depthWrite:!1,fog:!1})),this.scene.add(t.telegraph)}return t.telegraph.visible=!0,t.telegraph}updateEnemy(t,e){if(t.hazardCd=Math.max(0,t.hazardCd-e),t.state==="dead"){t.deadT+=e,t.vel.multiplyScalar(.95),t.integrate(e,this.world.colliders);const v=Math.max(.01,1-Math.max(0,t.deadT-.6)*1.6);t.cm.root.scale.setScalar(v),t.cm.pivot.rotation.x=Math.min(1.4,t.deadT*4);return}t.stateT-=e,t.cd-=e,t.retargetT-=e,(!t.target||t.retargetT<=0||t.target===this.kailee&&this.k.downed||this.allyOf(t.target)?.downed)&&(t.target=this.pickTarget(t),t.retargetT=1.5+Math.random());const n=t.target,i=n.pos.x-t.pos.x,s=n.pos.z-t.pos.z,o=Math.hypot(i,s),a=Math.atan2(i,s),c=t.def;let l=0,h=0,u=4,d=a,f=this.level===1?.75:1;if(this.level===1&&n===this.vixen)for(const v of We){const m=v.z0+(v.z1-v.z0)*.62;n.pos.z>m+1.2&&n.pos.z<m+14&&t.pos.z<m-1.2&&Math.abs(n.pos.x-t.pos.x)<9&&(f=.3,t.retargetT>.6&&(t.retargetT=.6),t.cd=Math.max(t.cd,.5))}const g=(v,m,p)=>{const _=p*f,y=v-t.pos.x,x=m-t.pos.z,A=Math.hypot(y,x)||1;l=y/A*Math.min(_,A*3),h=x/A*Math.min(_,A*3)};switch(t.state){case"spawn":t.stateT<=0&&(t.state="chase");break;case"stagger":u=1.2,d=t.heading,t.stateT<=0&&(t.state="chase",t.cd=Math.max(t.cd,.4));break;case"chase":{if(c.kind==="viper"){const v=t.cd>0?3.2:1.2;t.orbit+=e*.9,g(n.pos.x+Math.sin(t.orbit)*v,n.pos.z+Math.cos(t.orbit)*v,c.speed);const m=fi.pink_pounce;t.finisherCd-=e,t.cd<=0&&t.finisherCd<=0&&o>m.minRange&&o<m.maxRange&&n.y<.5&&!this.pinnedBy(n)&&!this.enemies.some(p=>p!==t&&p.attackKind==="pounce"&&(p.state==="windup"||p.state==="pounce"||p.state==="pin"))?this.startPinkPounce(t,n):o<2.1&&t.cd<=0&&(t.state="windup",t.stateT=.6,t.attackKind="melee",Q.telegraph())}else if(c.kind==="enforcer"){const m=t.id%2?1:-1,p=i/(o||1),_=s/(o||1),y=o>10?1:o<6?-1:0;l=(p*y+-_*m*.5)*c.speed,h=(_*y+p*m*.5)*c.speed,t.cd<=0&&(o<3.2?(t.state="windup",t.stateT=.95,t.attackKind="slam",Q.telegraph(),this.trans.ring(t.pos,16719936,.9,3.6,.15),this.dmg.spawn(ot.copy(t.pos).setY(3.4),"QUAY CRUSHER!","big")):o<17&&(t.state="windup",t.stateT=.8,t.attackKind="shoot"))}else{g(n.pos.x,n.pos.z,c.speed);const v=t.hp/t.maxHp;v<.66&&t.summoned===0||v<.33&&t.summoned===1?(t.summoned++,t.state="windup",t.stateT=.9,t.attackKind="summon",this.trans.ring(t.pos,16719936,.5,8,.8),Q.scream()):t.cd<=0&&o>5&&o<18&&Math.random()<.5?(t.state="windup",t.stateT=1.05,t.attackKind="dash",t.dashDir.set(i,0,s).normalize(),Q.telegraph(),this.dmg.spawn(ot.copy(t.pos).setY(3.8),"FALCON DIVE!","big"),this.trans.ring(t.pos,16719936,1,5,.2)):t.cd<=0&&o<2.8?(t.state="windup",t.stateT=.6,t.attackKind="melee",Q.telegraph()):t.cd<=0&&(t.cd=.3)}break}case"windup":{if(u=6,Math.sin(this.time*40)>0,t.flash(t.attackKind==="shoot"?16719936:16728224,.05),t.attackKind==="dash"){d=Math.atan2(t.dashDir.x,t.dashDir.z),t.dashDir.lerp(ot.set(i,0,s).normalize(),e*2).normalize();const v=this.makeTelegraph(t,16,1.6);v.position.set(t.pos.x,0,t.pos.z),v.rotation.y=d,v.material.opacity=.2+(Math.sin(this.time*30)>0?.25:0)}if(t.attackKind==="pounce"&&(d=Math.atan2(t.pounceTo.x-t.pos.x,t.pounceTo.z-t.pos.z),u=8,this.pounceWindupFx(t,n,e)),t.attackKind==="shoot"&&Math.random()<.5){const v=t.cm.bones.hand_r;v&&(v.getWorldPosition(de),this.particles.emit(de,ue.set(0,.5,0),Rt.red,.25,.2))}t.stateT<=0&&this.enemyAttack(t,n,o,a);break}case"attack":u=1.5,d=t.heading,t.stateT<=0&&(t.state="recover",t.stateT=c.kind==="enforcer"?.6:.5);break;case"dash":{u=0,d=t.heading,t.vel.copy(t.dashDir).multiplyScalar(30);for(const v of this.heroes())t.dashHit.has(v)||Math.hypot(v.pos.x-t.pos.x,v.pos.z-t.pos.z)<1.6&&v.y<1&&(t.dashHit.add(v),this.hurt(v,20,t.dashDir,14,{source:"enemy"}));this.particles.emit(ot.copy(t.pos).setY(1),ue.set(0,1,0),Rt.red,.4,.3),(t.stateT<=0||t.pos.x>Ft-1)&&(t.state="recover",t.stateT=.9,t.vel.multiplyScalar(.2));break}case"pounce":{u=0,d=t.heading;for(const v of this.heroes())if(!(v===this.kailee&&(this.k.downed||this.sling.phase!=="none"))&&!(v===this.vixen&&this.p.invuln>.2)&&Math.hypot(v.pos.x-t.pos.x,v.pos.z-t.pos.z)<1.35&&v.y<.8){this.beginPin(t,v);break}t.state==="pounce"&&t.stateT<=0&&(t.state="recover",t.stateT=1.1,t.vel.multiplyScalar(.2),this.hidePounceFx(t),this.dmg.spawn(ot.copy(t.pos).setY(2),"DODGED","heal"));break}case"pin":{u=0,l=0,h=0;const v=t.pinTarget;if(!v||!v.alive||v===this.kailee&&this.k.downed){this.endPin(t,!1);break}d=Math.atan2(v.pos.x-t.pos.x,v.pos.z-t.pos.z);const m=Math.atan2(t.pos.x-v.pos.x,t.pos.z-v.pos.z);if(t.pos.set(v.pos.x+Math.sin(m)*.75,0,v.pos.z+Math.cos(m)*.75),t.vel.set(0,0,0),t.y=0,t.pinTickT-=e,t.pinTickT<=0){const p=fi.pink_pounce;t.pinTickT=p.tick,Math.random()<.5?t.punchL=1:t.punchR=1,v===this.vixen&&(this.p.invuln=0),this.hurt(v,p.tickDmg,ot.set(0,0,0),0,{source:"enemy"}),Q.blade(),this.particles.burst(ot.copy(v.pos).setY(1.1),6,Rt.mag,4,.14,.25,-6)}this.pinFx(t,v),v===this.vixen&&this.input.hit("KeyF","KeyQ")?this.partnerCheck(t):v===this.vixen&&this.kailee.pos.distanceTo(t.pos)<7&&t.stateT<fi.pink_pounce.pinTime-.7&&this.partnerCheck(t),t.state==="pin"&&t.stateT<=0&&this.endPin(t,!1);break}case"recover":u=3,l=0,h=0,t.stateT<=0&&(t.state="chase",t.cd=c.kind==="viper"?1.2+Math.random()*1:c.kind==="enforcer"?2.2+Math.random():1+Math.random()*.8);break}if(t.state!=="stagger"&&t.state!=="dash"&&t.state!=="pounce"&&t.state!=="pin"&&t.pos.x>Ft-1.6&&l>-2&&(l=-4),t.state!=="dash"&&t.state!=="pounce"&&t.state!=="pin"&&(t.vel.x+=(l-t.vel.x)*Math.min(1,u*e),t.vel.z+=(h-t.vel.z)*Math.min(1,u*e)),t.state!=="stagger"&&(t.heading=Ws(t.heading,d,Math.min(1,e*8))),t.integrate(e,this.world.colliders),t.overWater&&t.y<.2){this.fallInWater(t);return}t.anim.busy||t.anim.setBase(t.speed>1.5?"Locomotion_Fwd":"Idle_Skate",.7+t.speed/12),(t.cm.procedural||c.kind==="falcon")&&(t.bob=Math.sin(this.time*6+t.id)*.05*Math.min(1,t.speed/4))}enemyAttack(t,e,n,i){const s=new E(Math.sin(i),0,Math.cos(i));switch(t.telegraph&&(t.telegraph.visible=!1),t.attackKind){case"pounce":{const o=fi.pink_pounce;t.state="pounce",t.stateT=o.leapTime;const a=t.pounceTo.x-t.pos.x,c=t.pounceTo.z-t.pos.z,l=Math.hypot(a,c)||1;t.heading=Math.atan2(a,c),t.vel.set(a/l,0,c/l).multiplyScalar(Math.min(26,(l+1.2)/o.leapTime)),t.vy=5.5,t.grounded=!1,t.y=.01,t.squash=0,t.anim.has("Check_L")&&t.anim.once("Check_L",.45),Q.scream();return}case"melee":{t.state="attack",t.stateT=.3,t.heading=i,t.vel.copy(s).multiplyScalar(t.def.kind==="falcon"?10:8),t.anim.has("Check_L")&&t.anim.once(Math.random()<.5?"Check_L":"Check_R",.4),Math.random()<.5?t.punchL=1:t.punchR=1;const o=t.def.kind==="falcon"?3:2.3;for(const a of this.heroes()){const c=Math.hypot(a.pos.x-t.pos.x,a.pos.z-t.pos.z);c<o&&Math.abs(Xs(i,Math.atan2(a.pos.x-t.pos.x,a.pos.z-t.pos.z)))<1.1&&a.y<1.2&&(a===e||c<1.6)&&this.hurt(a,t.def.kind==="falcon"?14:8,s,t.def.kind==="falcon"?9:5,{source:"enemy"})}this.particles.burst(ot.copy(t.pos).addScaledVector(s,1).setY(1.1),5,Rt.red,3,.12,.2,0,.3);break}case"shoot":{t.state="attack",t.stateT=.25;const o=ot.copy(e.pos).addScaledVector(e.vel,Math.min(.6,n/15)),a=ue.set(o.x-t.pos.x,0,o.z-t.pos.z).normalize(),c=t.cm.bones.hand_r,l=new E;c?c.getWorldPosition(l):l.copy(t.pos).setY(1.4),l.y=1.3,this.proj.fire("bolt",l,a,15,10,"enemy","enemy"),t.punchR=1,Q.bolt();break}case"slam":{t.state="attack",t.stateT=.4,this.trans.ring(t.pos,16719936,.6,4.2,.5),this.trans.ring(t.pos,16777215,.3,2.4,.3),this.trans.flash(ot.copy(t.pos).setY(.6),16719936,.25,2.2,.35),this.particles.burst(ot.copy(t.pos).setY(.3),22,Gh,7,.25,.7,4,1),this.shake(.55),this.hitstop=Math.max(this.hitstop,.05),Q.impact(),Q.clang();for(const o of this.heroes())o.pos.distanceTo(t.pos)<3.4&&o.y<.8&&this.hurt(o,15,ot.set(o.pos.x-t.pos.x,0,o.pos.z-t.pos.z).normalize(),10,{source:"enemy"});break}case"dash":{t.state="dash",t.stateT=.55,t.dashHit.clear(),t.heading=Math.atan2(t.dashDir.x,t.dashDir.z),Q.slingshotLaunch(),t.def.kind==="falcon"&&(this.shake(.45),this.particles.burst(ot.copy(t.pos).setY(.5),18,Gh,6,.2,.5,4,1));break}case"summon":{t.state="recover",t.stateT=.6;for(let o=0;o<3;o++){const a=o/3*Math.PI*2,c=new E(Ri.clamp(t.pos.x+Math.sin(a)*4,Gt+2,Ft-2.5),0,t.pos.z+Math.cos(a)*4);this.spawnEnemy("v",c)}this.banner("FALCON CALLS THE VIPERS","",1.4);break}}}separate(){const t=[this.vixen,...this.enemies.filter(e=>e.state!=="dead")];this.sling.phase==="none"&&!this.k.downed&&t.push(this.kailee);for(const e of this.allies)e.downed||t.push(e.a);for(let e=0;e<t.length;e++)for(let n=e+1;n<t.length;n++){const i=t[e],s=t[n],o=s.pos.x-i.pos.x,a=s.pos.z-i.pos.z,c=i.radius+s.radius,l=o*o+a*a;if(l<c*c&&l>1e-6){const h=Math.sqrt(l),u=(c-h)*.5,d=o/h,f=a/h;i.pos.x-=d*u,i.pos.z-=f*u,s.pos.x+=d*u,s.pos.z+=f*u}}}updateProjectiles(t){for(const e of this.proj.list){if(!e.active)continue;e.life-=t,e.pos.addScaledVector(e.vel,t),e.mesh.position.copy(e.pos),e.kind==="bolt"&&Math.random()<.5&&this.particles.emit(e.pos,ot.set(0,.3,0),Rt.red,.25,.25);let n=e.life<=0;if(!n&&this.world.colliders.some(i=>i.active&&i.h>1.3&&e.pos.x>i.minX&&e.pos.x<i.maxX&&e.pos.z>i.minZ&&e.pos.z<i.maxZ)&&(n=!0),!n){const i=e.team==="enemy"?this.heroes():this.enemies.filter(s=>s.state!=="dead");for(const s of i)if(Math.hypot(s.pos.x-e.pos.x,s.pos.z-e.pos.z)<s.radius+.3&&Math.abs(s.y+1.2-e.pos.y)<1.2){const o=ot.copy(e.vel).setY(0).normalize();this.hurt(s,e.dmg,o,e.kind==="bolt"?6:1.5,{source:e.src,stagger:e.kind==="pistol"?.15:0}),n=!0;break}}n&&(e.active=!1,e.mesh.visible=!1,this.particles.burst(e.pos,5,e.kind==="bolt"?Rt.red:Rt.org,2.5,.1,.2,0,.3))}}updateHazards(t){const e=[this.vixen,...this.enemies.filter(a=>a.state!=="dead")];this.sling.phase==="none"&&!this.k.downed&&e.push(this.kailee);for(const a of this.allies)a.downed||e.push(a.a);const n=this.world.hook,i=n.load.position.x,s=n.load.position.y,o=n.load.position.z;for(const a of e)if(!(a.hazardCd>0)){if(this.level!==2&&Math.abs(a.pos.x-i)<1.7+a.radius&&Math.abs(a.pos.z-o)<1.1+a.radius&&s-.9<a.y+1.8){a.hazardCd=1;const c=ot.set(Math.sign(n.vx)||1,0,(a.pos.z-o)*.3).normalize();this.hurt(a,a===this.vixen?22:30,c,18,{source:"hazard",stagger:1,up:6,heavy:!0}),a.vy=Math.max(a.vy,5),a.grounded=!1,a.y=Math.max(a.y,.01),Q.clang(),this.shake(.4),this.particles.burst(ue.copy(a.pos).setY(1.2),14,Rt.yel,6,.15,.4);continue}if(a.y<.05){for(const c of this.world.puddles)if(c.on&&Math.hypot(a.pos.x-c.x,a.pos.z-c.z)<c.r-.1){a.hazardCd=.5,a.stunT=.4,this.hurt(a,a===this.vixen?7:10,ot.set(0,0,0),0,{source:"hazard",stagger:.4,color:8446207}),a.flash(8446207,.15),Q.zap(),this.particles.burst(ue.copy(a.pos).setY(.8),10,Rt.cyan,4,.12,.3,-2,1);break}}}}updatePickups(t){for(const e of this.pickups){if(!e.active)continue;e.t+=t;const n=e.pos.distanceTo(ot.copy(this.vixen.pos).setY(.8));if(n<3.5&&e.pos.lerp(ot,Math.min(1,t*8)),e.mesh.position.set(e.pos.x,e.pos.y+Math.sin(e.t*4)*.15,e.pos.z),e.mesh.rotation.y+=t*3,n<.9){e.active=!1,e.mesh.visible=!1,Q.pickup();const i=Math.min(15,this.vixen.maxHp-this.vixen.hp);this.vixen.hp+=i,this.dmg.spawn(ot.copy(this.vixen.pos).setY(2.2),i>=1?"+"+Math.round(i):"MAX HP","heal")}e.t>20&&(e.active=!1,e.mesh.visible=!1)}}updateWaves(t){const e=We[this.wave];if(this.introT>0){this.introT-=t;return}if(this.level===1){for(const n of this.world.healSpots)if(!(n.used||Math.hypot(this.vixen.pos.x-n.x,this.vixen.pos.z-n.z)>2.2)){this.world.useHeal(n),this.vixen.hp=Math.min(this.vixen.maxHp,this.vixen.hp+50),this.kailee.hp=this.kailee.maxHp;for(const i of this.allies)i.a.hp=i.a.maxHp;this.banner("MEDIC BOT","+50 HP · PATCH KIT — CREW PATCHED UP — BREATHE, THEN PUSH",1.6)}}if(!this.waveActive&&!this.waveCleared){const n=this.wave===0?-999:e.z0+3;if(this.vixen.pos.z>n){this.waveActive=!0,this.batch=0;const i=this.waves[this.wave];this.banner(i.title,i.sub,1.6),Q.waveStart(),this.level===2?this.coms("COM_L2_"+this.wave):this.wave===1?this.coms("COM_KAM_02"):this.wave===2?this.coms("COM_LIL_02"):this.wave===3&&this.coms("COM_KAM_03"),this.setObjective(this.wave===3?this.level===2?"Cockpit Core: break the Hive nest":"Break Falcon and the Iron Rose escort":`Clear ${this.zoneName(this.wave)} — then the gate opens`)}return}if(this.waveActive){const n=this.waves[this.wave],i=this.enemies.filter(s=>s.state!=="dead").length;if(this.batch<n.batches.length){const s=n.batches[this.batch];if(s.when<0||i<=s.when&&(this.level===2||(this.breatheT+=t)>8)){this.breatheT=0,this.level===1&&this.batch>0&&this.banner("","REINFORCEMENTS — USE THE POCKET BEHIND THE CONTAINERS",1.4);const o=this.runId;s.list.forEach((a,c)=>setTimeout(()=>{o===this.runId&&this.waveActive&&this.state!=="title"&&this.spawnEnemy(a)},c*220)),this.batch++;return}}if(this.batch>=n.batches.length&&i===0&&this.enemies.length===0){this.waveActive=!1,this.waveCleared=!0,Q.waveClear(),this.vixen.hp=Math.min(this.vixen.maxHp,this.vixen.hp+30),this.k.downed&&(this.k.downed=!1,this.k.downT=0,this.kailee.cm.pivot.rotation.x=0,this.kailee.cm.pivot.position.y=0),this.kailee.hp=this.kailee.maxHp;for(const s of this.allies)s.downed=!1,s.downT=0,s.a.cm.pivot.rotation.x=0,s.a.cm.pivot.position.y=0,s.a.hp=s.a.maxHp;this.wave<3?(this.world.openBarrier(this.wave),this.banner("BERTH CLEARED","+30 HP · FENCE DOWN — SKATE NORTH",1.8),this.coms("COM_KAM_04"),this.setObjective(`Gate open! Follow the rail north to ${this.zoneName(this.wave+1)}`)):(this.gateOpen=!0,this.world.setGateActive(!0),Q.gateOpen(),this.banner("GATE OPEN","EXTRACT — REACH THE MAGENTA GATE",2),this.coms("COM_LIL_04"),this.setObjective(this.level===2?"DOORWAY: reach the elevator at the far end":"EXTRACT: skate into the magenta gate"))}return}this.waveCleared&&this.wave<3&&this.vixen.pos.z>We[this.wave+1].z0+1&&(this.wave++,this.waveCleared=!1),this.gateOpen&&this.vixen.pos.z>nr-2.5&&Math.abs(this.vixen.pos.x)<4&&(this.level===2?this.doorT<0&&(this.doorT=2.6,this.banner("ELEVATOR AHEAD","COMING ONLINE",2.6),this.setObjective("ELEVATOR AHEAD — COMING ONLINE")):this.win()),this.doorT>0&&(this.doorT-=t,this.doorT<=0&&this.win())}win(){this.state==="playing"&&(Q.win(),this.banner("","",.01),this.hushVoice(),this.rageT=0,this.setState(this.level===1?"cutscene":"win"))}spawnTurrets(){for(const e of this.turrets)this.scene.remove(e.g,e.line);for(const e of this.tShots)this.scene.remove(e.m);this.turrets=[],this.tShots=[];const t=this.level===1?[[17.2,22,2.2],[-17.2,74,2.6],[17.2,116,2.2],[-17.2,156,2.6]]:[[-15.5,112,3.2],[15.5,112,3.2],[-15.5,156,3.2],[15.5,156,3.2],[0,177.2,6.9]];for(const[e,n,i]of t){const s=new Kt,o=new H(new Be(.6,.75,.6,10),new ft({color:12634328,metalness:.9,roughness:.3})),a=new H(new xt(.22,.22,1.3),new ft({color:1052696,emissive:2812159,emissiveIntensity:1.5}));a.position.set(0,.45,.6),o.position.y=.3,s.add(o,a),s.position.set(e,i,n),this.scene.add(s);const c=new Ro(new ye().setFromPoints([new E,new E]),new Ao({color:16719952,transparent:!0,opacity:0}));this.scene.add(c),this.turretDmg=this.level===1?[3,2]:[4,3],this.turrets.push({g:s,x:e,z:n,y:i,hp:this.level===1?45:60,cd:2+Math.random()*2,tele:0,burst:0,line:c,alive:!0})}}updateTurrets(t){const e=this.vixen;for(const n of this.turrets){if(!n.alive)continue;const i=e.pos.x-n.x,s=e.pos.z-n.z,o=Math.hypot(i,s);if(this.p.atkT>0&&o<3.2&&(n.hp-=t*70,n.hp<=0)){n.alive=!1,this.scene.remove(n.g,n.line),this.shake(.3),this.banner("EDGE GUN DOWN","",.8),this.particles.emit(de.set(n.x,n.y+.5,n.z),ot.set(0,3,0),new _t(2812159),.4,.6);continue}const a=o<26&&o>2&&e.pos.z<n.z+4;n.g.rotation.y=Math.atan2(i,s);const c=n.line.material;if(n.tele>0){n.tele-=t,c.opacity=.35+.5*Math.abs(Math.sin(this.time*30));const l=n.line.geometry.attributes.position;l.setXYZ(0,n.x,n.y+.75,n.z),l.setXYZ(1,e.pos.x,1,e.pos.z),l.needsUpdate=!0,n.tele<=0&&(n.burst=3,n.cd=0,c.opacity=0)}else if(n.burst>0){if(n.cd-=t,n.cd<=0){n.burst--,n.cd=.18;const l=new H(new Ze(.14,6,6),new It({color:16726666}));l.position.set(n.x,n.y+.75,n.z);const h=new E(e.pos.x-n.x+(Math.random()-.5)*1.6,1-(n.y+.75),e.pos.z-n.z+(Math.random()-.5)*1.6).normalize().multiplyScalar(22);this.scene.add(l),this.tShots.push({m:l,v:h,t:1.6})}n.burst===0&&(n.cd=3.2+Math.random()*1.5)}else a&&(n.cd-=t,n.cd<=0&&(n.tele=.9))}this.tShots=this.tShots.filter(n=>{n.t-=t,n.m.position.addScaledVector(n.v,t);for(const i of this.heroes())if(Math.hypot(i.pos.x-n.m.position.x,i.pos.z-n.m.position.z)<.7&&Math.abs(n.m.position.y-1)<1.2){this.hurt(i,i===e?this.turretDmg[0]:this.turretDmg[1],ot.copy(n.v).setY(0).normalize(),1.5,{source:"hazard",color:16726666}),n.t=0;break}return n.t<=0||n.m.position.y<0?(this.scene.remove(n.m),!1):!0})}startLevel2(){this.clearDynamic(),this.world.reset(),this.hushVoice(),this.lastGirlHurtT=-99,this.level=2,this.world.setArena("hyperdrive"),Q.setArena("hyperdrive"),this.wave=0,this.waveActive=!1,this.batch=0,this.waveCleared=!1,this.gateOpen=!1,this.introT=2,this.chaos=Math.max(this.chaos,30),this.chaosReadyAnnounced=!1,this.rageT=0,this.rageCd=0,this.viperSeq=0,this.vixen.hp=this.vixen.maxHp,this.kailee.hp=this.kailee.maxHp;for(const t of this.allies)t.a.hp=t.a.maxHp,Object.assign(t,{downed:!1,downT:0,atkCd:0,shootCd:0,lastDmg:-99,target:null,recoverT:0});Object.assign(this.k,{downed:!1,downT:0,atkCd:0,shootCd:0,lastDmg:-99,target:null,recoverT:0,slideCd:4,slideT:0,slideHits:0,slideTgt:null}),this.placeHeroes(-4),this.spawnMines(),this.comsCd={},this.lowHpCd=0,this.comsLine("KAMYRN","You're in Hyperdrive. Whole base is crawling with Vipers."),this.comsLine("LILI","Skate fast. Don't stop. Watch the mines."),this.banner("LEVEL 2 — HYPERDRIVE","PINK VIPER DEN · SWARM / COBRA / FANG / HIVE",2.4),this.setObjective("Skate the approach lane — clear the Scar Swarm (decks + rails on both sides)"),this.doorT=-1,this.spawnTurrets(),this.hud.boss.classList.add("hidden")}girls(){const t=[];!this.k.downed&&this.sling.phase==="none"&&t.push([this.kailee,"KAILEE"]);for(const e of this.allies)e.downed||t.push([e.a,e.name]);return t}girlNear(t,e){for(const[n,i]of this.girls())if(Math.hypot(n.pos.x-t.x,n.pos.z-t.z)<e)return i;return null}updateFrenzy(t){this.frenzyReasonT-=t,this.rageCd-=t;let e=null;for(const[s,o]of this.girls()){for(const a of this.enemies)if(!(a.state==="dead"||a.state==="spawn")&&Math.hypot(a.pos.x-s.pos.x,a.pos.z-s.pos.z)<3.2){e=o;break}if(e)break}const n=this.k.downed||this.allies.some(s=>s.downed);e&&this.addChaos(t*5,e+" THREATENED"),n&&this.addChaos(t*4,"A GIRL IS DOWN — GET TO HER");const i=e||n||this.time-this.lastGirlHurtT<3;if(this.rageT>0)this.rageT-=t,Math.random()<.7&&this.particles.emit(de.copy(this.vixen.pos).setY(.3+Math.random()*1.4),ot.set((Math.random()-.5)*2,1.5,(Math.random()-.5)*2),Math.random()<.5?Rt.mag:Rt.red,.28,.4),this.rageT<=0&&(this.rageCd=6,this.banner("RAGE FADES","",.8));else if(i&&this.chaos>=60&&this.rageCd<=0&&this.state==="playing"){this.rageT=6,Q.rage(),this.shake(.5),this.banner("RAGE","PROTECT MODE — EVEN IF IT KILLS HER",1.6),this.trans.ring(this.vixen.pos,16719695,.5,7,.6);const s=[["VIXEN","They're my girls. They are me."],["LILI","Grandma's in RAGE — nobody touches her girls."],["KAMYRN","That's Mom's Frenzy. Generation Mayhem."],["VIXEN","Get behind me, baby. Mama's here."]],o=s[Math.floor(Math.random()*s.length)];this.comsLine(o[0],o[1])}}paytonDownComs(){this.comsLine("KAMYRN","Mom get up! Get up!"),this.comsLine("LILI","Mom get up, get up!")}lose(){this.state==="playing"&&(Q.lose(),this.vixen.cm.pivot.rotation.x=-1.2,this.setState("lose"))}updateCamera(t,e){const n=this.vixen,i=this.input,s=this.camera;if(e){if(this.state==="title"){const g=performance.now()*12e-5;s.position.set(Math.sin(g)*9+n.pos.x,3.4,Math.cos(g)*9+n.pos.z+4),s.lookAt(n.pos.x,1.4,n.pos.z+4),this.world.update(t,performance.now()/1e3,n.pos),this.vixen.syncVisual(t,0),this.kailee.syncVisual(t,0);for(const v of this.allies)v.a.syncVisual(t,0)}return}i.locked&&(this.camYaw-=i.mouseDX*.0024,this.camPitch=Ri.clamp(this.camPitch+i.mouseDY*.0018,-.15,.7));let o=!1;i.down("ArrowLeft")&&(this.camYaw+=2.4*t,o=!0),i.down("ArrowRight")&&(this.camYaw-=2.4*t,o=!0),i.down("ArrowUp")&&(this.camPitch=Math.max(-.15,this.camPitch-t)),i.down("ArrowDown")&&(this.camPitch=Math.min(.7,this.camPitch+t)),!i.locked&&!o&&n.speed>2&&this.sling.phase==="none"&&(this.camYaw=Ws(this.camYaw,n.heading,Math.min(1,t*1.8)));const a=Kn(this.camYaw,ot),c=8.2+Math.min(8,n.speed)*.12,l=3.6+this.camPitch*4.5,h=ue.set(n.pos.x-a.x*c,n.y*.5+l,n.pos.z-a.z*c);h.x=Math.max(h.x,Gt+.8),s.position.lerp(h,Math.min(1,t*9)),this.trauma=Math.max(0,this.trauma-t*1.6);const u=this.trauma*this.trauma,d=de.set(n.pos.x+a.x*4.5,1+n.y*.5,n.pos.z+a.z*4.5);s.lookAt(d),u>0&&(s.position.x+=(Math.random()-.5)*u*.9,s.position.y+=(Math.random()-.5)*u*.9,s.rotation.z+=(Math.random()-.5)*u*.08);const f=64+Math.min(8,n.speed)*.6+this.fovKick;Math.abs(s.fov-f)>.05&&(s.fov+=(f-s.fov)*Math.min(1,t*6),s.updateProjectionMatrix())}setW(t,e){const n=Math.round(e*1e3)/10;this.hudCache[t]!==n&&(this.hudCache[t]=n,this.hud[t].style.width=n+"%")}setT(t,e){this.hudCache[t]!==e&&(this.hudCache[t]=e,this.hud[t].textContent=e)}updateHud(){this.setW("hp-vixen",this.vixen.hp/this.vixen.maxHp),this.setW("hp-kailee",this.k.downed?1-this.k.downT/8:this.kailee.hp/this.kailee.maxHp),this.hud["hp-kailee"].classList.toggle("down",this.k.downed),this.setT("kailee-status",this.k.downed?`DOWN ${Math.ceil(this.k.downT)}s`:this.sling.phase!=="none"?"LAUNCHED!":"");for(const i of this.allies)this.setW("hp-"+i.key,i.downed?1-i.downT/8:i.a.hp/i.a.maxHp),this.hud["hp-"+i.key].classList.toggle("down",i.downed),this.setT(i.key+"-status",i.downed?`DOWN ${Math.ceil(i.downT)}s`:"");this.setW("chaos-fill",this.chaos/100),this.setT("frenzy-reason",this.rageT>0?`RAGE ${Math.ceil(this.rageT)}s — PROTECT MODE`:this.frenzyReasonT>0?"▲ "+this.frenzyReason:"RISES WHEN THE GIRLS ARE HIT OR THREATENED"),this.hud["chaos-wrap"].classList.toggle("rage",this.rageT>0);const t=this.chaos>=100;this.hud["chaos-wrap"].classList.toggle("full",t),this.hud["ab-sling"].classList.toggle("ready",t),this.hud["ab-sling"].querySelector("i").style.transform=`scaleX(${(1-this.chaos/100).toFixed(2)})`,this.hud["ab-cone"].querySelector("i").style.transform=`scaleX(${(this.p.coneCd/1.5).toFixed(2)})`,this.setT("wave-label",(this.level===2?"L2 · ":"")+(this.gateOpen?"EXTRACT":`WAVE ${this.wave+1}/4`));const e=this.enemies.filter(i=>i.state!=="dead").length;this.setT("enemy-count",this.waveActive?`HOSTILES ${e}${this.stats.combo>2?`  ·  COMBO x${this.stats.combo}`:""}${this.trickScore?`  ·  TRICKS ${this.trickScore}`:""}`:this.waveCleared?"ALL CLEAR":"STAND BY");const n=this.enemies.find(i=>i.def.kind==="falcon"&&i.state!=="dead");n&&this.setW("hp-boss",n.hp/n.maxHp)}statsHtml(){const t=this.stats,e=Math.floor(t.time/60),n=Math.floor(t.time%60).toString().padStart(2,"0");return`TIME ${e}:${n}<br>KOs ${t.kos} · SLINGSHOT KOs ${t.slingKos} · SPLASH KOs ${t.splashKos}<br>BEST COMBO x${t.maxCombo} · SLINGSHOTS FIRED ${t.slings}`}prewarm(t){const e=[];for(const i of Object.keys(ad))try{const s=new Hh(i,this.scene,new E(0,-50,0));e.push(s)}catch{}for(const i of e){const s=this.ensurePounceFx(i);s.visible=!0,s.position.y=-50}const n=e.map(i=>i.finisherFx);try{t.compile(this.scene,this.camera)}catch{}for(const i of e)i.dispose(this.scene);for(const i of n)i&&this.scene.remove(i)}debugApi(){const t=this;return{game:t,get state(){return t.state},get wave(){return t.wave},get chaos(){return t.chaos},get slingPhase(){return t.sling.phase},get enemyCount(){return t.enemies.filter(e=>e.state!=="dead").length},vixen:()=>({x:t.vixen.pos.x,z:t.vixen.pos.z,speed:t.vixen.speed,hp:t.vixen.hp}),squad:()=>[t.vixen,t.kailee,...t.allies.map(e=>e.a)].map(e=>({key:e.key,x:e.pos.x,z:e.pos.z,hp:e.hp,visible:e.cm.root.visible,mesh:!e.cm.procedural,downed:!!t.allyOf(e)?.downed})),damageAlly:(e,n)=>{const i=t.allies.find(s=>s.key===e);i&&t.hurt(i.a,n,new E(0,0,-1),0,{source:"enemy"})},kailee:()=>({x:t.kailee.pos.x,z:t.kailee.pos.z,hp:t.kailee.hp,downed:t.k.downed}),enemies:()=>t.enemies.map(e=>({kind:e.def.kind,hp:e.hp,x:e.pos.x,z:e.pos.z,state:e.state})),damageKailee:e=>t.hurt(t.kailee,e,new E(0,0,-1),0,{source:"enemy"}),setChaos:e=>{t.chaos=0,t.chaosReadyAnnounced=!1,t.addChaos(e)},fireSling:()=>t.tryShatter(),spawn:(e,n=0,i=4)=>{const s=t.spawnEnemy(e,new E(t.vixen.pos.x+n,0,t.vixen.pos.z+i));return s.stateT=.1,t.enemies.length},sandbox:()=>{t.introT=1e9;for(const e of t.enemies)e.dispose(t.scene);t.enemies=[],t.runId++},forcePinkPounce:(e=!1)=>{const n=e?t.kailee:t.vixen,i=t.enemies.find(s=>s.def.kind==="viper"&&s.state!=="dead");return i?(i.cd=0,t.startPinkPounce(i,n),!0):!1},pinState:()=>t.enemies.filter(e=>e.attackKind==="pounce").map(e=>({state:e.state,t:e.stateT,target:e.pinTarget===t.vixen?"vixen":e.pinTarget===t.kailee?"kailee":null})),freezeEnemies:()=>{for(const e of t.enemies)e.state="spawn",e.stateT=999},killAll:()=>{for(const e of t.enemies)e.state!=="dead"&&t.hurt(e,9999,new E(0,0,1),1,{source:"vixen"})},teleport:(e,n)=>{t.vixen.pos.set(e,0,n),t.p.lastSafe.set(e,0,n)},setInvuln:e=>{t.p.invuln=e},get level(){return t.level},get rage(){return t.rageT},get frenzyReason(){return t.frenzyReason},skipToL2:()=>{t.startLevel2(),t.setState("playing")},winDock:()=>{t.gateOpen=!0,t.win()},downPayton:()=>{const e=t.allies.find(n=>n.key==="payton");e&&t.hurt(e.a,9999,new E(0,0,-1),0,{source:"enemy"})},assets:()=>({loaded:Object.keys(Me.gltf),failed:Me.failed,clips:Object.keys(Me.clips)})}}};Ge.SLING_BASE_SPEED=42,Ge.SLING_BOOST_SPEED=110,Ge.SLING_RANGE=36,Ge.SIG={brianna:{cd:8,jitter:2,dur:1.8},payton:{cd:9,jitter:2,dur:2.4,spin:.6,rate:.06}},Ge.SLIDE={cooldown:5.5,cdJitter:2,dur:.6,speed:15,hit1:22,hit2:18,hitAt1:.2,hitAt2:.36};let xc=Ge;class Ty{constructor(t){this.keys=new Set,this.pressed=new Set,this.mouseDX=0,this.mouseDY=0,this.locked=!1,this.touchMove={x:0,y:0},this.isTouch=!1,this.onLockChange=()=>{},this.canvas=t,window.addEventListener("keydown",e=>{const n=e.code;["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(n)&&e.preventDefault(),this.keys.has(n)||this.pressed.add(n),this.keys.add(n)}),window.addEventListener("keyup",e=>{this.keys.delete(e.code)}),window.addEventListener("blur",()=>{this.keys.clear()}),t.addEventListener("mousedown",e=>{e.button===0&&this.pressed.add("Mouse0"),e.button===2&&this.pressed.add("Mouse2"),this.keys.add("Mouse"+e.button)}),window.addEventListener("mouseup",e=>{this.keys.delete("Mouse"+e.button)}),t.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("mousemove",e=>{this.locked&&(this.mouseDX+=e.movementX||0,this.mouseDY+=e.movementY||0)}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,this.onLockChange(this.locked)}),this.isTouch=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window&&navigator.maxTouchPoints>0}requestLock(){if(!this.isTouch)try{const t=this.canvas.requestPointerLock();t&&typeof t.catch=="function"&&t.catch(()=>{})}catch{}}exitLock(){document.pointerLockElement&&document.exitPointerLock()}down(...t){return t.some(e=>this.keys.has(e))}hit(...t){return t.some(e=>this.pressed.has(e))}press(t){this.pressed.add(t)}endFrame(){this.pressed.clear(),this.mouseDX=0,this.mouseDY=0}bindTouch(t){document.getElementById("touch").classList.remove("hidden");const n=document.getElementById("stick"),i=document.getElementById("stick-knob");let s=null;const o=60,a=h=>{const u=n.getBoundingClientRect();let d=h.clientX-(u.left+u.width/2),f=h.clientY-(u.top+u.height/2);const g=Math.hypot(d,f);g>o&&(d*=o/g,f*=o/g),i.style.transform=`translate(${d}px, ${f}px)`,this.touchMove.x=d/o,this.touchMove.y=-f/o};n.addEventListener("touchstart",h=>{h.preventDefault();const u=h.changedTouches[0];s=u.identifier,a(u)},{passive:!1}),n.addEventListener("touchmove",h=>{h.preventDefault();for(const u of Array.from(h.changedTouches))u.identifier===s&&a(u)},{passive:!1});const c=h=>{for(const u of Array.from(h.changedTouches))u.identifier===s&&(s=null,this.touchMove.x=0,this.touchMove.y=0,i.style.transform="")};n.addEventListener("touchend",c),n.addEventListener("touchcancel",c);const l={punch:"KeyJ",cone:"KeyK",sling:"KeyL",jump:"Space"};document.querySelectorAll("#tbtns button").forEach(h=>{const u=l[h.dataset.k||""];h.addEventListener("touchstart",d=>{d.preventDefault(),this.pressed.add(u),this.keys.add(u)},{passive:!1}),h.addEventListener("touchend",d=>{d.preventDefault(),this.keys.delete(u)},{passive:!1})}),document.getElementById("tpause").addEventListener("touchstart",h=>{h.preventDefault(),t()},{passive:!1})}}const ae=r=>document.getElementById(r),gr=ae("c"),Te=new Tv({canvas:gr,antialias:!0,powerPreference:"high-performance"});Te.outputColorSpace=Ae;Te.toneMapping=Mc;Te.toneMappingExposure=1.15;Te.shadowMap.enabled=!0;Te.shadowMap.type=qh;Te.info.autoReset=!1;const pr=new Du,Ni=new je(62,16/9,.1,400),en=new Ty(gr),by=navigator.maxTouchPoints>0&&/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)||(navigator.hardwareConcurrency||8)<=4;let cn=by?"LOW":"HIGH";Te.shadowMap.enabled=cn==="HIGH";let Jn=null,yo=null;function Mo(){const r=window.innerWidth,t=window.innerHeight,e=cn==="HIGH"?Math.min(window.devicePixelRatio||1,1.5):1;Te.setPixelRatio(e),Te.setSize(r,t,!1),Ni.aspect=r/Math.max(1,t),Ni.updateProjectionMatrix(),Jn&&(Jn.setPixelRatio(e),Jn.setSize(r,t)),yo&&yo.resolution.set(r/2,t/2),jt?.particles.setScale(t)}function Ey(){Jn=new V_(Te),Jn.addPass(new G_(pr,Ni)),yo=new ws(new tt(640,360),.85,.55,.62),Jn.addPass(yo),Jn.addPass(new Y_)}function Kc(r=!1){if(r){Te.shadowMap.autoUpdate=cn==="HIGH",Te.shadowMap.needsUpdate=!0,ae("btn-quality").textContent="GRAPHICS: "+cn,Mo();return}Te.shadowMap.autoUpdate=!0,Te.shadowMap.enabled=cn==="HIGH",pr.traverse(t=>{const e=t.material;e&&(e.needsUpdate=!0)}),ae("btn-quality").textContent="GRAPHICS: "+cn,Mo()}let jt=null;const Ay=["screen-title","screen-howto","screen-credits","screen-pause","screen-win","screen-lose"];let qc="screen-title";function Tn(r){for(const t of Ay)ae(t).classList.toggle("hidden",t!==r)}function Ry(r){if(ae("hud").classList.toggle("hidden",r==="title"),r==="playing"&&(Tn(null),Q.startMusic()),r==="paused"&&(Tn("screen-pause"),en.exitLock()),r==="win"&&(Tn("screen-win"),ae("win-stats").innerHTML=jt.statsHtml(),en.exitLock(),Q.stopMusic()),r==="lose"&&(Tn("screen-lose"),ae("lose-stats").innerHTML=jt.statsHtml(),en.exitLock(),Q.stopMusic()),r==="title"&&(Tn("screen-title"),en.exitLock(),Q.stopMusic()),r==="cutscene"){try{localStorage.setItem("gm_l2_unlocked","1")}catch{}Tn(null),en.exitLock(),Cy().then(()=>{jt&&(jt.startLevel2(),jt.setState("playing"),en.requestLock(),gr.focus())})}}const Xh=[{img:"P01",who:"VIXEN",line:"Contract's paid. Breathe, babies.",music:"dock"},{img:"P01",who:"KAILEE",line:"Everybody good? Payton?"},{img:"P02",who:"PAYTON",line:"I'm good, Mom. Guns are hot."},{img:"P02",who:"BRIANNA",line:"Next one's HyperDrive. Pink Viper den. Their turf."},{img:"P03",who:"KAMYRN",line:"Hyperdrive's crawling with Vipers."},{img:"P03",who:"LILI",line:"Skate fast. Don't stop. Come home."},{img:"P04",who:"KAILEE",line:"Smells like burnt metal.",music:"hyperdrive"},{img:"P04",who:"VIXEN",line:"Stay on my wheels. Nobody touches my girls."},{img:"P05",who:"VIXEN",line:"Hyperdrive Base. Sophisticated Brutality. Let's go."},{img:"P06",card:"PINK VIPERS",sub:"SWARM — SCAR SWARM  ·  COBRA — HOOD STRIKE",who:"COBRA",line:"Sssso the old lady brought her babies."},{img:"P07",card:"PINK VIPERS",sub:"FANG — JET FANG  ·  HIVE — HEX NEST",who:"FANG",line:"Fresh meat on wheels."},{img:"P08",card:"LEVEL 2 — HYPERDRIVE",sub:"GENERATION MAYHEM",hold:2200}];function Cy(){return new Promise(r=>{Q.init(),Q.setArena("dock"),Q.startMusic();const t=document.createElement("div");t.id="cutscene";const e={};for(const l of Xh)if(!e[l.img]){const h=new Image;h.src=`cutscene/${l.img}.jpg`,t.appendChild(h),e[l.img]=h}const n=document.createElement("div");n.className="card";const i=document.createElement("div");i.className="cap",i.style.opacity="0",i.style.display="none";const s=document.createElement("div");s.className="skip",s.textContent="CLICK / ANY KEY TO SKIP",t.append(n,i,s),document.body.appendChild(t);let o=!1;const a=()=>{o||(o=!0,Q.stopVoice(),window.removeEventListener("keydown",c),t.remove(),r())},c=()=>a();t.addEventListener("click",a),setTimeout(()=>window.addEventListener("keydown",c),600),(async()=>{let l="";for(const h of Xh){if(o)return;if(h.img!==l){for(const u in e)e[u].classList.toggle("on",u===h.img);l=h.img}h.music&&Q.setArena(h.music),n.innerHTML=h.card?`${h.card}<small>${h.sub??""}</small>`:"",h.card&&Q.impact(),h.line?(i.innerHTML=`<b>${h.who}:</b>${h.line}`,i.style.opacity="1",await Q.say(h.who,h.line),await new Promise(u=>setTimeout(u,350))):(i.style.opacity="0",await new Promise(u=>setTimeout(u,h.hold??1500)))}a()})()})}function Oi(r){jt&&(Q.init(),Q.ui(),r==="new"&&jt.resetRun(),r==="retry"&&jt.retryWave(),jt.setState("playing"),en.requestLock(),gr.focus())}function cd(){Q.setMuted(!Q.muted),ae("btn-mute").textContent=Q.muted?"🔇 MUTED [M]":"🔊 SOUND [M]"}ae("btn-mute").addEventListener("click",r=>{r.stopPropagation(),cd()});ae("btn-pause").addEventListener("click",r=>{r.stopPropagation(),vr()});function vr(){jt&&jt.state==="playing"&&jt.setState("paused")}ae("btn-play").addEventListener("click",()=>Oi("new"));ae("btn-l2").addEventListener("click",r=>{!jt||localStorage.getItem("gm_l2_unlocked")!=="1"||(Q.init(),Q.ui(),jt.resetRun(),r.shiftKey?(jt.startLevel2(),jt.setState("playing"),en.requestLock()):jt.setState("cutscene"))});ae("btn-howto").addEventListener("click",()=>{Q.init(),Q.ui(),Tn("screen-howto")});ae("btn-howto-back").addEventListener("click",()=>{Q.ui(),Tn("screen-title")});ae("btn-credits").addEventListener("click",()=>{Q.init(),Q.ui(),qc="screen-title",Tn("screen-credits")});ae("btn-credits-w").addEventListener("click",()=>{Q.ui(),qc="screen-win",Tn("screen-credits")});ae("btn-credits-back").addEventListener("click",()=>{Q.ui(),Tn(qc)});ae("btn-resume").addEventListener("click",()=>Oi("resume"));ae("btn-replay-p").addEventListener("click",()=>Oi("new"));ae("btn-replay-w").addEventListener("click",()=>Oi("new"));ae("btn-replay-l").addEventListener("click",()=>Oi("new"));ae("btn-retry-l").addEventListener("click",()=>Oi("retry"));for(const r of["btn-menu-p","btn-menu-w","btn-menu-l"])ae(r).addEventListener("click",()=>{Q.ui(),jt?.resetRun(),jt?.setState("title")});ae("btn-quality").addEventListener("click",()=>{cn=cn==="HIGH"?"LOW":"HIGH",Kc()});window.addEventListener("keydown",r=>{if(jt){if(r.code==="KeyM"){cd();return}(r.code==="Escape"||r.code==="KeyP")&&jt.state==="playing"?vr():(r.code==="KeyP"||r.code==="Escape")&&jt.state==="paused"&&ae("screen-pause").classList.contains("hidden")===!1&&Oi("resume")}});gr.addEventListener("mousedown",()=>{jt?.state==="playing"&&!en.locked&&en.requestLock()});let Yh=!1;en.onLockChange=r=>{r?Yh=!0:Yh&&jt?.state==="playing"&&vr()};document.addEventListener("visibilitychange",()=>{document.hidden&&vr()});window.addEventListener("resize",Mo);ae("lockup").src=Yx;async function Iy(){const r=ae("load-status");await Kx((e,n,i)=>{r.textContent=`Loading ${i}… ${Math.round(e/n*100)}%`}),jt=new xc(pr,Ni,Te,en),jt.onStateChange=Ry,en.isTouch&&en.bindTouch(vr),Ey(),Mo(),jt.prewarm(Te),Te.compile(pr,Ni),r.textContent="";const t=ae("btn-play");t.disabled=!1,t.textContent="PLAY";{const e=ae("btn-l2");let n=!1;try{n=localStorage.getItem("gm_l2_unlocked")==="1"}catch{}e.disabled=!n,e.style.display=n?"":"none"}if(new URLSearchParams(location.search).get("level")==="2"&&localStorage.getItem("gm_l2_unlocked")==="1"){const e=setInterval(()=>{document.getElementById("cold-open")||(clearInterval(e),jt.startLevel2(),jt.setState("playing"))},300)}window.__gm=jt.debugApi(),window.__gm.ready=!0,window.__gm.quality=()=>cn,window.__gm.renderInfo=()=>({calls:Te.info.render.calls,triangles:Te.info.render.triangles,geometries:Te.info.memory.geometries,textures:Te.info.memory.textures}),window.__gm.setQuality=e=>{cn=e,Kc()}}const Py=new ed;let no=0,wa=0,io=0;function ld(){requestAnimationFrame(ld);const r=Math.min(Py.getDelta(),.1);if(jt&&(jt.update(r),Te.info.reset(),jt.state!=="title"&&jt.dmg.update(r,Ni,window.innerWidth,window.innerHeight),cn==="HIGH"&&Jn?Jn.render(r):Te.render(pr,Ni),no+=r,wa++,no>=1)){const t=wa/no;no=0,wa=0,window.__gmFps=t,jt.state==="playing"&&cn==="HIGH"&&t<38&&!window.__gmNoAutoQuality?(io++,io>=4&&(cn="LOW",Kc(!0),io=0)):io=0}}Iy().catch(r=>{console.error(r),ae("load-status").textContent="Failed to load: "+r});ld();(()=>{const r=document.createElement("div");r.id="cold-open",r.style.cssText="position:fixed;inset:0;z-index:9999;background:#000;display:flex;align-items:center;justify-content:center;cursor:pointer";const t=document.createElement("video");t.src="intro/GM_ColdOpen_Full_v003_nocrawl.mp4",t.muted=!1,t.playsInline=!0,t.preload="auto",t.style.cssText="width:100%;height:100%;object-fit:contain;display:none";const e=document.createElement("div");e.textContent="CLICK OR ANY KEY TO CONTINUE",e.style.cssText="position:absolute;right:24px;top:20px;color:#fff8;font:700 16px sans-serif;letter-spacing:1px;padding:8px 14px";const n=document.createElement("div");n.style.cssText='position:absolute;inset:0;display:flex;align-items:center;justify-content:center;text-align:center;padding:0 8vw;color:#ff2bd6;font:800 clamp(28px,5vw,72px) "Arial Black",Impact,sans-serif;letter-spacing:2px;line-height:1.2;text-shadow:0 0 6px #ff2bd6,0 0 18px #ff2bd6,0 0 42px #c0008f;opacity:0;transition:opacity .7s;pointer-events:none';const i=["They took her man.","She paid the bills.","Three daughters.<br>Three blood contracts.","Mom wasn't in the room.","Then the call.","Mama Bear is back.","Can you Survive the Circuit?"];r.append(t,n,e),document.body.appendChild(r);let s="cards",o=0,a=0;const c=()=>{s!=="done"&&(s="done",clearTimeout(o),window.removeEventListener("keydown",d),t.pause(),r.remove())},l=()=>{s==="cards"&&(s="movie",clearTimeout(o),n.remove(),t.style.display="",e.textContent="CLICK OR ANY KEY TO SKIP",t.muted=!1,t.volume=1,t.play().catch(()=>{t.muted=!0,t.play().catch(()=>{})}))},h=()=>{if(s==="cards"){if(a>=i.length){n.style.opacity="0",o=setTimeout(l,800);return}n.innerHTML=i[a++],n.style.opacity="1",o=setTimeout(()=>{n.style.opacity="0",o=setTimeout(h,800)},2800)}},u=()=>{s==="cards"?l():c()},d=f=>u();t.addEventListener("ended",c),t.addEventListener("error",c),r.addEventListener("click",u),window.addEventListener("keydown",d),o=setTimeout(h,500)})();const Ly=()=>{Q.unlock(),window.__gmAudio=()=>Q.ctx?.state};["pointerdown","touchend","keydown","click"].forEach(r=>window.addEventListener(r,Ly,{capture:!0,passive:!0}));
