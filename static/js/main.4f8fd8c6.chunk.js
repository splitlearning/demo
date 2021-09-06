(this.webpackJsonpresnet_react_ts_app=this.webpackJsonpresnet_react_ts_app||[]).push([[0],{17:function(e,t,s){},25:function(e,t,s){},27:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),i=s(7),l=s.n(i),c=(s(17),s(5)),r=s.n(c),o=s(8),d=s(9),p=s(10),u=s(12),h=s(11),m=s(6),j=s(3),b=s.n(j),g=s(1),x=s.n(g),f=(s(25),s(0)),v="https://splitlearning.mit.edu/SplitLearningInference/client_models/",y="https://sl-demo-backend.herokuapp.com/inference",O=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).session=null,a.preprocessImage=function(e){var t=e.width,s=e.height,a=224,n=224;t>s?n=t/s*224:t<s&&(a=s/t*224),console.log("Resized ("+t+"px, "+s+"px) Image to ("+n+"px, "+a+"px)");var i=document.createElement("canvas");if(i.width=n,i.height=a,i.getContext("2d").drawImage(e,0,0,n,a),a>n)var l=i.getContext("2d").getImageData(0,(a-224)/2,224,224+(a-224)/2).data;else l=i.getContext("2d").getImageData(0,0,224,224).data;var c=b()(new Float32Array(l),[224,224,4]),r=b()(new Float32Array(150528),[1,3,224,224]);return x.a.assign(r.pick(0,0,null,null),c.pick(null,null,2)),x.a.assign(r.pick(0,1,null,null),c.pick(null,null,1)),x.a.assign(r.pick(0,2,null,null),c.pick(null,null,0)),x.a.divseq(r,255),x.a.subseq(r.pick(0,0,null,null),.485),x.a.subseq(r.pick(0,1,null,null),.456),x.a.subseq(r.pick(0,2,null,null),.406),x.a.divseq(r.pick(0,0,null,null),.229),x.a.divseq(r.pick(0,1,null,null),.224),x.a.divseq(r.pick(0,2,null,null),.225),new m.Tensor(r.data,"float32",[1,3,224,224])},a.greyscaleToRGBA=function(e){for(var t=new Uint8ClampedArray(e.shape[0]*e.shape[1]*4),s=0,a=e.shape[0],n=e.shape[1],i=0;i<a;i++)for(var l=0;l<n;l++){var c=e.get(i,l);t[s]=c,t[s+1]=c,t[s+2]=c,t[s+3]=255,s+=4}return t},a.classifyImage=Object(o.a)(r.a.mark((function e(){var t,s,n,i,l,c,o,d,p,u,h,j,g,f,O,L,w;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=document.getElementById("imageView"),a.state.modelLoaded){e.next=8;break}return a.setState({status:"Loading client model...",class:null}),a.session=new m.InferenceSession({backendHint:"cpu"}),e.next=6,a.session.loadModel(v+"resnet18_client_sl_"+a.state.splitLayer+".onnx");case 6:console.log("loaded client model from "+v+"resnet18_client_sl_"+a.state.splitLayer+".onnx"),a.setState({modelLoaded:!0});case 8:if(!t){e.next=26;break}return a.setState({status:"Client model inference..."}),s=a.preprocessImage(t),e.next=13,a.session.run([s]);case 13:for(n=e.sent,i=n.values().next().value,console.log("Dimensions: "+i.dims),l=b()(i.data,i.dims),c=l.shape[1],o=l.shape[2],d=l.shape[3],(p=document.getElementById("previews")).innerHTML="",u=0;u<10;u++)h=l.pick(0,Math.floor(Math.random()*c),null,null),j=b()(h.data.slice(),h.shape,h.stride,h.offset),x.a.mulseq(j,255/x.a.sup(j)),g=a.greyscaleToRGBA(j),f=document.createElement("canvas"),O=f.getContext("2d"),f.width=o,f.height=d,(L=O.createImageData(o,d)).data.set(g),O.putImageData(L,0,0),(w=document.createElement("img")).className="preview",w.id=u.toString(),w.width=o,w.height=d,w.src=f.toDataURL(),p.appendChild(w);setTimeout((function(){a.setState({status:"Sending split activations for server model inference (Split Layer="+a.state.splitLayer+") ..."});var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({dims:i.dims,data:Array.from(i.data),splitLayer:a.state.splitLayer})};console.log("Sending to "+y+" with split layer of "+a.state.splitLayer),fetch(y,e).then((function(e){return e.json()})).then((function(e){a.setState({status:null,class:e.class})}))}),2e3),e.next=27;break;case 26:console.error("There was an error accessing the uploaded image. Please try again.");case 27:case"end":return e.stop()}}),e)}))),a.updatePreview=function(){document.getElementById("imageLoader").style.display="block";var e=document.getElementById("inputImage").files[0];console.log(e),e&&a.setState({imageURL:URL.createObjectURL(e)}),document.getElementById("imageLoader").style.display="none"},a.updateRangePreview=function(){var e=document.getElementById("splitLayerRange").value;a.setState({modelLoaded:!1,splitLayer:parseInt(e)})},a.state={status:null,modelLoaded:!1,class:null,imageURL:null,splitLayer:5},a}return Object(p.a)(s,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("header",{className:"App-header",children:[Object(f.jsx)("h1",{children:"ResNet18 Split Inference Demo"}),Object(f.jsxs)("p",{className:"desc",children:["A pre-trained ResNet18 model is split into ",Object(f.jsx)("b",{children:"two"})," separate models \u2014 ",Object(f.jsx)("b",{children:"client"})," (Alice) and ",Object(f.jsx)("b",{children:"server"})," (Bob)."]}),Object(f.jsx)("img",{id:"splitInferenceDiagram",src:"split_inference_diagram.png"}),Object(f.jsxs)("p",{className:"desc",children:["Your ",Object(f.jsx)("b",{children:"uploaded image"})," is sent through the client model which returns the ",Object(f.jsx)("b",{children:"split activations"})," of a cut layer within the full model.",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"These activations are sent to a server where the remaining of the inference is completed. The ",Object(f.jsx)("b",{children:"output tensor"})," is then sent back to the client.",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"This allows you to perform ",Object(f.jsx)("b",{children:"inference"})," on a model present on a ",Object(f.jsx)("b",{children:"third party"})," server while ",Object(f.jsx)("b",{children:"preserving your image's privacy"}),"."]}),Object(f.jsxs)("div",{style:{textAlign:"left"},children:[Object(f.jsx)("span",{children:"Split Layer: \xa0"}),Object(f.jsx)("input",{id:"splitLayerRange",type:"range",min:"2",value:this.state.splitLayer,max:"7",step:"1",onChange:this.updateRangePreview,disabled:null!==this.state.status}),"\xa0",Object(f.jsx)("span",{id:"splitLayerPreview",children:this.state.splitLayer}),Object(f.jsx)("br",{}),Object(f.jsx)("span",{children:"Input Image: \xa0"}),Object(f.jsx)("input",{onChange:this.updatePreview,type:"file",id:"inputImage",accept:"image/jpeg",disabled:null!==this.state.status})]}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{id:"imageLoader",className:"loader"}),Object(f.jsx)("img",{id:"imageView",src:this.state.imageURL,style:{display:null===this.state.imageURL?"none":"block"}}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{type:"submit",onClick:this.classifyImage,value:"Classify Image",id:"submit"}),Object(f.jsx)("br",{}),null!==this.state.status?Object(f.jsx)("hr",{className:"divider"}):Object(f.jsx)("span",{}),this.state.class?Object(f.jsx)("div",{className:"output",children:Object(f.jsxs)("p",{children:["Class: ",this.state.class]})}):Object(f.jsx)("p",{className:"loadMsg",children:this.state.status}),Object(f.jsx)("br",{}),null!==this.state.status||this.state.class?Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"Split Activations: \xa0\xa0"}),Object(f.jsx)("div",{id:"previews"})]}):Object(f.jsx)("span",{})]})})}}]),s}(a.Component),L=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,28)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,l=t.getTTFB;s(e),a(e),n(e),i(e),l(e)}))};l.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(O,{})}),document.getElementById("root")),L()}},[[27,1,2]]]);
//# sourceMappingURL=main.4f8fd8c6.chunk.js.map