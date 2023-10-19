import{j as e,r as l}from"./index-79511f7a.js";import{T as s,S as d,H as h}from"./index-8f2cd513.js";const u="_margin_1j0eb_1",g="_image_1j0eb_11",c={margin:u,image:g},x="/space-tourism/assets/image-moon-85007328.webp",p="/space-tourism/assets/image-mars-331b18c2.webp",j="/space-tourism/assets/image-europa-1633fd2e.webp",_="/space-tourism/assets/image-titan-5aa00dfe.webp",m=[{name:"Moon",desc:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",dist:"384,400 km",time:"3 days",img:x},{name:"Mars",desc:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",dist:"225 MIL. km",time:"9 months",img:p},{name:"EUROPA",desc:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",dist:"628 MIL. km",time:"3 years",img:j},{name:"TITAN",desc:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",dist:"1.6 BIL. km",time:"7 years",img:_}],f="_root_1w0em_1",i={root:f,"margin-bottom":"_margin-bottom_1w0em_13","text-center":"_text-center_1w0em_29"},y="_root_1grig_1",n={root:y,"text-center":"_text-center_1grig_29"};function v({currentPlanet:t}){return e.jsxs("div",{className:n.root,children:[e.jsxs("div",{children:[e.jsx(s,{variant:"subheading2",className:n["text-center"],children:"avg. distance"}),e.jsx(s,{variant:"subheading1",className:n["text-center"],children:t.dist})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"subheading2",className:n["text-center"],children:"est. travel time"}),e.jsx(s,{variant:"subheading1",className:n["text-center"],children:t.time})]})]})}function b({currentPlanet:t}){return e.jsxs("div",{className:`${i.root}`,children:[e.jsxs("div",{children:[e.jsx(s,{variant:"heading2",className:i["margin-bottom"],children:t.name}),e.jsx(s,{className:i["text-center"],children:t.desc})]}),e.jsx(v,{currentPlanet:t})]})}const k=t=>{const[a,o]=l.useState(t[0]);return{planet:a,setPlanet:o}},w="_root_t6kxc_1",N={root:w};function P({data:t,currentPlanet:a,setCurrentPlanet:o}){return e.jsx("ul",{className:N.root,children:t.map(r=>e.jsx("li",{onClick:()=>o(r),children:e.jsx(d,{value:a.name,expectedValue:r.name,children:e.jsx(s,{variant:"nav",children:r.name})})},r.name))})}function $(){const{planet:t,setPlanet:a}=k(m);return e.jsxs(e.Fragment,{children:[e.jsx("img",{src:t.img,alt:t.name,className:c.image}),e.jsxs("div",{className:c.margin,children:[e.jsx(P,{data:m,currentPlanet:t,setCurrentPlanet:a}),e.jsx(b,{currentPlanet:t})]})]})}const T="_root_1e1hs_1",A={root:T};function I(){return e.jsxs("main",{className:A.root,children:[e.jsx(h,{}),e.jsx($,{})]})}export{I as default};
