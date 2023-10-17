import{j as e,T as r,r as c}from"./index-585dccb2.js";import{S as l}from"./index-8c3b8f0b.js";const m="_root_an8hm_1",h={root:m},g="_root_wua92_1",p="_container_wua92_17",d="_list_wua92_34",u="_item_wua92_51",y="_image_wua92_69",s={root:g,container:p,list:d,item:u,image:y},_="_root_rqjya_1",j="_margin_rqjya_12",x="_width_rqjya_26",f="_terminology_rqjya_41",w="_text_rqjya_41",a={root:_,margin:j,width:x,terminology:f,text:w};function v({technology:o,description:i}){return e.jsxs("div",{className:a.root,children:[e.jsx(r,{additionalStyles:`${a.text} ${a.terminology}`,children:"The terminology…"}),e.jsx(r,{text:"heading 3",additionalStyles:a.margin,children:o}),e.jsx(r,{additionalStyles:a.width,children:i})]})}const n=[{technology:"LAUNCH VEHICLE",desc:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",img:"src/entities/technology-item/assets/image-launch-vehicle-portrait.jpg",imgLandscape:"src/entities/technology-item/assets/image-launch-vehicle-landscape.jpg"},{technology:"SPACEPORT",desc:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",img:"src/entities/technology-item/assets/image-space-capsule-portrait.jpg",imgLandscape:"src/entities/technology-item/assets/image-space-capsule-landscape.jpg"},{technology:"SPACE CAPSULE",desc:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",img:"src/entities/technology-item/assets/image-spaceport-portrait.jpg",imgLandscape:"src/entities/technology-item/assets/image-spaceport-landscape.jpg"}];function E(){const[o,i]=c.useState(0);return e.jsxs("div",{className:s.root,children:[e.jsx(l,{data:n,slide:o,setSlide:i,vertical:!0}),e.jsx("div",{className:s.container,children:e.jsx("ul",{className:s.list,style:{transform:`translateY( ${o*-683*2}px)`,transition:"transform 250ms linear"},children:n.map(t=>e.jsxs("li",{className:s.item,children:[e.jsx(v,{technology:t.technology,description:t.desc}),e.jsxs("picture",{children:[e.jsx("source",{srcSet:t.imgLandscape,media:"(max-width: 1300px)"}),e.jsx("img",{src:t.img,alt:t.technology,className:s.image})]})]}))})})]})}function C(){return e.jsx("main",{className:h.root,children:e.jsx(E,{})})}export{C as default};