import{j as e,T as i,r as m}from"./index-f80c13eb.js";import{S as c}from"./index-3ccdb1eb.js";const l="_root_1duse_1",h={root:l},g="_root_18wne_1",d="_container_18wne_25",u="_item_18wne_31",f="_img_18wne_44",s={root:g,container:d,item:u,img:f},w="_bio_1n4mw_1",p="_margin_1n4mw_15",n={bio:w,margin:p};function b({role:r,name:a,bio:t}){return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"heading4",children:r}),e.jsx(i,{variant:"heading3",className:n.margin,children:a}),e.jsx(i,{className:n.bio,children:t})]})}const o=[{name:"Douglas Hurley",role:"Commander ",bio:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",img:"src/entities/crew-member/assets/image-douglas-hurley.webp",imgRight:137},{name:"MARK SHUTTLEWORTH",role:"Mission Specialist ",bio:"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",img:"src/entities/crew-member/assets/image-mark-shuttleworth.webp",imgRight:186.56},{name:"Victor Glover",role:"PILOT",bio:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",img:"src/entities/crew-member/assets/image-victor-glover.webp",imgRight:142.61},{name:"Anousheh Ansari",role:"Flight Engineer",bio:"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",img:"src/entities/crew-member/assets/image-anousheh-ansari.webp",imgRight:89.43}];function _(){const[r,a]=m.useState(0);return e.jsxs("div",{className:s.root,children:[e.jsx("ul",{className:s.container,style:{transform:`translateX( ${r*-200}%)`,transition:"transform 250ms linear"},children:o.map(t=>e.jsxs("li",{className:s.item,children:[e.jsx(b,{role:t.role,name:t.name,bio:t.bio}),e.jsx("img",{src:t.img,alt:t.name,className:s.img,style:{right:t.imgRight}})]},t.name+t.role))}),e.jsx(c,{data:o,slide:r,setSlide:a})]})}function y(){return e.jsx("main",{className:h.root,children:e.jsx(_,{})})}export{y as default};
