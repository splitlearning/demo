(this.webpackJsonpresnet_react_ts_app=this.webpackJsonpresnet_react_ts_app||[]).push([[0],{17:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),i=n(7),l=n.n(i),c=(n(17),n(4)),r=n.n(c),o=n(8),d=n(9),u=n(10),p=n(12),g=n(11),m=n(5),h=n(6),f=n.n(h),j=n(1),b=n.n(j),v=(n(25),n(0)),x="http://splitlearning.mit.edu/SplitLearningInference/resnet18_client.onnx",y=function(e){Object(p.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).session=new m.InferenceSession({backendHint:"cpu"}),a.preprocessImage=function(e){var t=e.width,n=e.height,a=224,s=224;t>n?s=t/n*224:t<n&&(a=n/t*224),console.log("Resized ("+t+"px, "+n+"px) Image to ("+s+"px, "+a+"px)");var i=document.createElement("canvas");if(i.width=s,i.height=a,i.getContext("2d").drawImage(e,0,0,s,a),a>s)var l=i.getContext("2d").getImageData(0,(a-224)/2,224,224+(a-224)/2).data;else l=i.getContext("2d").getImageData(0,0,224,224).data;var c=f()(new Float32Array(l),[224,224,4]),r=f()(new Float32Array(150528),[1,3,224,224]);return b.a.assign(r.pick(0,0,null,null),c.pick(null,null,2)),b.a.assign(r.pick(0,1,null,null),c.pick(null,null,1)),b.a.assign(r.pick(0,2,null,null),c.pick(null,null,0)),b.a.divseq(r,255),b.a.subseq(r.pick(0,0,null,null),.485),b.a.subseq(r.pick(0,1,null,null),.456),b.a.subseq(r.pick(0,2,null,null),.406),b.a.divseq(r.pick(0,0,null,null),.229),b.a.divseq(r.pick(0,1,null,null),.224),b.a.divseq(r.pick(0,2,null,null),.225),new m.Tensor(r.data,"float32",[1,3,224,224])},a.classifyImage=Object(o.a)(r.a.mark((function e(){var t,n,s,i,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=document.getElementById("imageView"),a.state.modelLoaded){e.next=7;break}return a.setState({loading:"Loading client model..."}),e.next=5,a.session.loadModel(x);case 5:console.log("loaded client model from "+x),a.setState({modelLoaded:!0});case 7:if(!t){e.next=21;break}return a.setState({loading:"Client model inference..."}),n=a.preprocessImage(t),console.log("Input Image Tensor: "+n.data),e.next=13,a.session.run([n]);case 13:s=e.sent,i=s.values().next().value,console.log("Output of Client Model (splitActivation): "+i.data),a.setState({loading:"Sending split activations for server model inference..."}),l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({dims:i.dims,data:Array.from(i.data)})},fetch("http://matlaber5.media.mit.edu:5000/inference",l).then((function(e){return e.json()})).then((function(e){a.setState({class:e.class,loading:null})})),e.next=22;break;case 21:console.error("There was an error accessing the uploaded image. Please try again.");case 22:case"end":return e.stop()}}),e)}))),a.updatePreview=function(){document.getElementById("imageLoader").style.display="block";var e=document.getElementById("inputImage").files[0];console.log(e),e&&a.setState({imageURL:URL.createObjectURL(e)}),document.getElementById("imageLoader").style.display="none"},a.state={loading:null,modelLoaded:!1,class:null,imageURL:null},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)("header",{className:"App-header",children:[Object(v.jsx)("h1",{children:"ResNet18 Split Inference Demo"}),Object(v.jsx)("p",{className:"desc",children:"Your uploaded image is sent through the client model which returns the split activations of a cut layer within the full ResNet18 model. These activations are sent to a server where the remaining of the inference is completed. This allows you to perform inference on a model present on a third party server while preserving your image's privacy."}),null===this.state.loading?Object(v.jsxs)("div",{children:[Object(v.jsx)("input",{onChange:this.updatePreview,type:"file",id:"inputImage",accept:"image/jpeg"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{type:"submit",onClick:this.classifyImage,value:"Classify Image",id:"submit"}),Object(v.jsx)("div",{id:"imageLoader",className:"loader"}),this.state.class?Object(v.jsxs)("p",{children:["Class: ",this.state.class]}):Object(v.jsxs)("span",{children:[Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]}),Object(v.jsx)("img",{id:"imageView",src:this.state.imageURL})]}):Object(v.jsx)("p",{children:this.state.loading})]})})}}]),n}(a.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),a(e),s(e),i(e),l(e)}))};l.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(y,{})}),document.getElementById("root")),O()}},[[27,1,2]]]);
//# sourceMappingURL=main.d8d0ced8.chunk.js.map