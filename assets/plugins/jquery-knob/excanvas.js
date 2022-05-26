if(!document.createElement("canvas").getContext){(function(){var r=Math;var v=r.round;var w=r.sin;var u=r.cos;var a=r.abs;var D=r.sqrt;var E=10;var F=E/2;function o(){return this.context_||(this.context_=new f(this))}var C=Array.prototype.slice;function c(j,m,G){var i=C.call(arguments,2);return function(){return j.apply(m,i.concat(C.call(arguments)))}}var n={init:function(j){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var i=j||document;i.createElement("canvas");i.attachEvent("onreadystatechange",c(this.init_,this,i))}},init_:function(j){if(!j.namespaces.g_vml_){j.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML")}if(!j.namespaces.g_o_){j.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML")}if(!j.styleSheets.ex_canvas_){var H=j.createStyleSheet();H.owningElement.id="ex_canvas_";H.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}"}var m=j.getElementsByTagName("canvas");for(var G=0;G<m.length;G++){this.initElement(m[G])}},initElement:function(j){if(!j.getContext){j.getContext=o;j.innerHTML="";j.attachEvent("onpropertychange",x);j.attachEvent("onresize",y);var i=j.attributes;if(i.width&&i.width.specified){j.style.width=i.width.nodeValue+"px"}else{j.width=j.clientWidth}if(i.height&&i.height.specified){j.style.height=i.height.nodeValue+"px"}else{j.height=j.clientHeight}}return j}};function x(i){var j=i.srcElement;switch(i.propertyName){case"width":j.style.width=j.attributes.width.nodeValue+"px";j.getContext().clearRect();break;case"height":j.style.height=j.attributes.height.nodeValue+"px";j.getContext().clearRect();break}}function y(i){var j=i.srcElement;if(j.firstChild){j.firstChild.style.width=j.clientWidth+"px";j.firstChild.style.height=j.clientHeight+"px"}}n.init();var l=[];for(var p=0;p<16;p++){for(var q=0;q<16;q++){l[p*16+q]=p.toString(16)+q.toString(16)}}function k(){return[[1,0,0],[0,1,0],[0,0,1]]}function t(i,j){var m=k();for(var H=0;H<3;H++){for(var I=0;I<3;I++){var G=0;for(var J=0;J<3;J++){G+=i[H][J]*j[J][I]}m[H][I]=G}}return m}function h(i,j){j.fillStyle=i.fillStyle;j.lineCap=i.lineCap;j.lineJoin=i.lineJoin;j.lineWidth=i.lineWidth;j.miterLimit=i.miterLimit;j.shadowBlur=i.shadowBlur;j.shadowColor=i.shadowColor;j.shadowOffsetX=i.shadowOffsetX;j.shadowOffsetY=i.shadowOffsetY;j.strokeStyle=i.strokeStyle;j.globalAlpha=i.globalAlpha;j.arcScaleX_=i.arcScaleX_;j.arcScaleY_=i.arcScaleY_;j.lineScale_=i.lineScale_}function A(K){var J,j=1;K=String(K);if(K.substring(0,3)=="rgb"){var I=K.indexOf("(",3);var m=K.indexOf(")",I+1);var G=K.substring(I+1,m).split(",");J="#";for(var H=0;H<3;H++){J+=l[Number(G[H])]}if(G.length==4&&K.substr(3,1)=="a"){j=G[3]}}else{J=K}return{color:J,alpha:j}}function z(i){switch(i){case"butt":return"flat";case"round":return"round";case"square":default:return"square"}}function f(j){this.m_=k();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.strokeStyle="#000";this.fillStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=E*1;this.globalAlpha=1;this.canvas=j;var i=j.ownerDocument.createElement("div");i.style.width=j.clientWidth+"px";i.style.height=j.clientHeight+"px";i.style.overflow="hidden";i.style.position="absolute";j.appendChild(i);this.element_=i;this.arcScaleX_=1;this.arcScaleY_=1;this.lineScale_=1}var g=f.prototype;g.clearRect=function(){this.element_.innerHTML=""};g.beginPath=function(){this.currentPath_=[]};g.moveTo=function(i,j){var m=this.getCoords_(i,j);this.currentPath_.push({type:"moveTo",x:m.x,y:m.y});this.currentX_=m.x;this.currentY_=m.y};g.lineTo=function(i,j){var m=this.getCoords_(i,j);this.currentPath_.push({type:"lineTo",x:m.x,y:m.y});this.currentX_=m.x;this.currentY_=m.y};g.bezierCurveTo=function(i,j,m,G,H,I){var L=this.getCoords_(H,I);var J=this.getCoords_(i,j);var K=this.getCoords_(m,G);b(this,J,K,L)};function b(G,i,j,m){G.currentPath_.push({type:"bezierCurveTo",cp1x:i.x,cp1y:i.y,cp2x:j.x,cp2y:j.y,x:m.x,y:m.y});G.currentX_=m.x;G.currentY_=m.y}g.quadraticCurveTo=function(i,j,m,G){var H=this.getCoords_(i,j);var K=this.getCoords_(m,G);var I={x:this.currentX_+2/3*(H.x-this.currentX_),y:this.currentY_+2/3*(H.y-this.currentY_)};var J={x:I.x+(K.x-this.currentX_)/3,y:I.y+(K.y-this.currentY_)/3};b(this,I,J,K)};g.arc=function(I,J,m,H,j,i){m*=E;var G=i?"at":"wa";var O=I+u(H)*m-F;var Q=J+w(H)*m-F;var N=I+u(j)*m-F;var P=J+w(j)*m-F;if(O==N&&!i){O+=0.125}var K=this.getCoords_(I,J);var M=this.getCoords_(O,Q);var L=this.getCoords_(N,P);this.currentPath_.push({type:G,x:K.x,y:K.y,radius:m,xStart:M.x,yStart:M.y,xEnd:L.x,yEnd:L.y})};g.rect=function(m,G,j,i){this.moveTo(m,G);this.lineTo(m+j,G);this.lineTo(m+j,G+i);this.lineTo(m,G+i);this.closePath()};g.strokeRect=function(m,G,j,i){var H=this.currentPath_;this.beginPath();this.moveTo(m,G);this.lineTo(m+j,G);this.lineTo(m+j,G+i);this.lineTo(m,G+i);this.closePath();this.stroke();this.currentPath_=H};g.fillRect=function(m,G,j,i){var H=this.currentPath_;this.beginPath();this.moveTo(m,G);this.lineTo(m+j,G);this.lineTo(m+j,G+i);this.lineTo(m,G+i);this.closePath();this.fill();this.currentPath_=H};g.createLinearGradient=function(i,m,j,G){var H=new d("gradient");H.x0_=i;H.y0_=m;H.x1_=j;H.y1_=G;return H};g.createRadialGradient=function(m,H,i,G,I,j){var J=new d("gradientradial");J.x0_=m;J.y0_=H;J.r0_=i;J.x1_=G;J.y1_=I;J.r1_=j;return J};g.drawImage=function(Q,Z){var K,L,J,I,X,Y,V,U;var T=Q.runtimeStyle.width;var S=Q.runtimeStyle.height;Q.runtimeStyle.width="auto";Q.runtimeStyle.height="auto";var ab=Q.width;var N=Q.height;Q.runtimeStyle.width=T;Q.runtimeStyle.height=S;if(arguments.length==3){K=arguments[1];L=arguments[2];X=Y=0;V=J=ab;U=I=N}else{if(arguments.length==5){K=arguments[1];L=arguments[2];J=arguments[3];I=arguments[4];X=Y=0;V=ab;U=N}else{if(arguments.length==9){X=arguments[1];Y=arguments[2];V=arguments[3];U=arguments[4];K=arguments[5];L=arguments[6];J=arguments[7];I=arguments[8]}else{throw Error("Invalid number of arguments")}}}var G=this.getCoords_(K,L);var ad=V/2;var P=U/2;var aa=[];var ac=10;var O=10;aa.push(" <g_vml_:group",' coordsize="',E*ac,",",E*O,'"',' coordorigin="0,0"',' style="width:',ac,"px;height:",O,"px;position:absolute;");if(this.m_[0][0]!=1||this.m_[0][1]){var M=[];M.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",v(G.x/E),",","Dy=",v(G.y/E),"");var R=G;var i=this.getCoords_(K+J,L);var j=this.getCoords_(K,L+I);var m=this.getCoords_(K+J,L+I);R.x=r.max(R.x,i.x,j.x,m.x);R.y=r.max(R.y,i.y,j.y,m.y);aa.push("padding:0 ",v(R.x/E),"px ",v(R.y/E),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",M.join(""),", sizingmethod='clip');")}else{aa.push("top:",v(G.y/E),"px;left:",v(G.x/E),"px;")}aa.push(' ">','<g_vml_:image src="',Q.src,'"',' style="width:',E*J,"px;"," height:",E*I,'px;"',' cropleft="',X/ab,'"',' croptop="',Y/N,'"',' cropright="',(ab-X-V)/ab,'"',' cropbottom="',(N-Y-U)/N,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",aa.join(""))};g.stroke=function(m){var Z=[];var Y=false;var j=A(m?this.fillStyle:this.strokeStyle);var J=j.color;var ae=j.alpha*this.globalAlpha;var an=10;var T=10;Z.push("<g_vml_:shape",' filled="',!!m,'"',' style="position:absolute;width:',an,"px;height:",T,'px;"',' coordorigin="0 0" coordsize="',E*an," ",E*T,'"',' stroked="',!m,'"',' path="');var ad=false;var ac={x:null,y:null};var ab={x:null,y:null};for(var V=0;V<this.currentPath_.length;V++){var ah=this.currentPath_[V];var I;switch(ah.type){case"moveTo":I=ah;Z.push(" m ",v(ah.x),",",v(ah.y));break;case"lineTo":Z.push(" l ",v(ah.x),",",v(ah.y));break;case"close":Z.push(" x ");ah=null;break;case"bezierCurveTo":Z.push(" c ",v(ah.cp1x),",",v(ah.cp1y),",",v(ah.cp2x),",",v(ah.cp2y),",",v(ah.x),",",v(ah.y));break;case"at":case"wa":Z.push(" ",ah.type," ",v(ah.x-this.arcScaleX_*ah.radius),",",v(ah.y-this.arcScaleY_*ah.radius)," ",v(ah.x+this.arcScaleX_*ah.radius),",",v(ah.y+this.arcScaleY_*ah.radius)," ",v(ah.xStart),",",v(ah.yStart)," ",v(ah.xEnd),",",v(ah.yEnd));break}if(ah){if(ac.x==null||ah.x<ac.x){ac.x=ah.x}if(ab.x==null||ah.x>ab.x){ab.x=ah.x}if(ac.y==null||ah.y<ac.y){ac.y=ah.y}if(ab.y==null||ah.y>ab.y){ab.y=ah.y}}}Z.push(' ">');if(!m){var aa=this.lineScale_*this.lineWidth;if(aa<1){ae*=aa}Z.push("<g_vml_:stroke",' opacity="',ae,'"',' joinstyle="',this.lineJoin,'"',' miterlimit="',this.miterLimit,'"',' endcap="',z(this.lineCap),'"',' weight="',aa,'px"',' color="',J,'" />')}else{if(typeof this.fillStyle=="object"){var R=this.fillStyle;var G=0;var S={x:0,y:0};var ak=0;var Q=1;if(R.type_=="gradient"){var ap=R.x0_/this.arcScaleX_;var ar=R.y0_/this.arcScaleY_;var aq=R.x1_/this.arcScaleX_;var at=R.y1_/this.arcScaleY_;var ai=this.getCoords_(ap,ar);var aj=this.getCoords_(aq,at);var O=aj.x-ai.x;var P=aj.y-ai.y;G=Math.atan2(O,P)*180/Math.PI;if(G<0){G+=360}if(G<1e-06){G=0}}else{var ai=this.getCoords_(R.x0_,R.y0_);var ao=ab.x-ac.x;var U=ab.y-ac.y;S={x:(ai.x-ac.x)/ao,y:(ai.y-ac.y)/U};ao/=this.arcScaleX_*E;U/=this.arcScaleY_*E;var N=r.max(ao,U);ak=2*R.r0_/N;Q=2*R.r1_/N-ak}var am=R.colors_;am.sort(function(i,H){return i.offset-H.offset});var X=am.length;var K=am[0].color;var L=am[X-1].color;var af=am[0].alpha*this.globalAlpha;var ag=am[X-1].alpha*this.globalAlpha;var M=[];for(var V=0;V<X;V++){var al=am[V];M.push(al.offset*Q+ak+" "+al.color)}Z.push('<g_vml_:fill type="',R.type_,'"',' method="none" focus="100%"',' color="',K,'"',' color2="',L,'"',' colors="',M.join(","),'"',' opacity="',ag,'"',' g_o_:opacity2="',af,'"',' angle="',G,'"',' focusposition="',S.x,",",S.y,'" />')}else{Z.push('<g_vml_:fill color="',J,'" opacity="',ae,'" />')}}Z.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",Z.join(""))};g.fill=function(){this.stroke(true)};g.closePath=function(){this.currentPath_.push({type:"close"})};g.getCoords_=function(i,j){var G=this.m_;return{x:E*(i*G[0][0]+j*G[1][0]+G[2][0])-F,y:E*(i*G[0][1]+j*G[1][1]+G[2][1])-F}};g.save=function(){var i={};h(this,i);this.aStack_.push(i);this.mStack_.push(this.m_);this.m_=t(k(),this.m_)};g.restore=function(){h(this.aStack_.pop(),this);this.m_=this.mStack_.pop()};function s(H){for(var i=0;i<3;i++){for(var G=0;G<2;G++){if(!isFinite(H[i][G])||isNaN(H[i][G])){return false}}}return true}function B(i,G,H){if(!s(G)){return}i.m_=G;if(H){var j=G[0][0]*G[1][1]-G[0][1]*G[1][0];i.lineScale_=D(a(j))}}g.translate=function(i,j){var m=[[1,0,0],[0,1,0],[i,j,1]];B(this,t(m,this.m_),false)};g.rotate=function(i){var j=u(i);var G=w(i);var m=[[j,G,0],[-G,j,0],[0,0,1]];B(this,t(m,this.m_),false)};g.scale=function(i,j){this.arcScaleX_*=i;this.arcScaleY_*=j;var m=[[i,0,0],[0,j,0],[0,0,1]];B(this,t(m,this.m_),true)};g.transform=function(G,H,I,J,i,j){var m=[[G,H,0],[I,J,0],[i,j,1]];B(this,t(m,this.m_),true)};g.setTransform=function(H,I,J,K,i,j){var G=[[H,I,0],[J,K,0],[i,j,1]];B(this,G,true)};g.clip=function(){};g.arcTo=function(){};g.createPattern=function(){return new e};function d(i){this.type_=i;this.x0_=0;this.y0_=0;this.r0_=0;this.x1_=0;this.y1_=0;this.r1_=0;this.colors_=[]}d.prototype.addColorStop=function(j,i){i=A(i);this.colors_.push({offset:j,color:i.color,alpha:i.alpha})};function e(){}G_vmlCanvasManager=n;CanvasRenderingContext2D=f;CanvasGradient=d;CanvasPattern=e})()};