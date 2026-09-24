import React from 'react';
import {useGsapTimeline} from '@remotion/gsap';
import {Board,useBoard,P,Phone,Message} from '../kit';
export const Launch:React.FC=()=>{
 const {W,H}=useBoard();
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.from(s('[data-device]'),{y:H*.45,rotation:-7,scale:.9,opacity:0,duration:.7,ease:'power4.out'},0)
 .to(s('[data-device]'),{rotation:2,scale:1.05,duration:1.2,ease:'power2.inOut'},.7)
 .to(s('[data-phone-bubble]'),{scale:.78,duration:.2,yoyo:true,repeat:1,svgOrigin:'0 0'},1.35)
 .to(s('[data-phone-bubble]'),{opacity:0,duration:.18},1.7)
 .from(s('[data-flying]'),{scale:0,opacity:0,duration:.3,ease:'power3.out'},1.7)
 .to(s('[data-device]'),{x:-W*.32,rotation:-5,scale:.8,duration:.7,ease:'power3.in'},2)
 .to(s('[data-flying]'),{x:W*.34,y:-H*.08,rotation:3,scale:1.5,duration:.65,ease:'power2.inOut'},2.05)
 .to(s('[data-flying]'),{x:W*.8,y:-H*.15,scale:.2,duration:.6,ease:'power4.in'},2.75)
 .from(s('[data-ring]'),{scale:0,opacity:0,stagger:.1,duration:.9,svgOrigin:W/2+' '+H/2},.1)
 .to(s('[data-ring]'),{scale:1.7,opacity:0,duration:1.3,svgOrigin:W/2+' '+H/2},2.2);
 });
 return <Board ref={scope} bg={P.white}>
 {[1,2,3].map(i=><circle data-ring key={i} cx={W/2} cy={H/2} r={i*190} fill="none" stroke={P.muted} strokeWidth={i===1?3:1.5} opacity=".2"/>)}
 <g transform={'translate('+W/2+' '+H/2+')'}><g data-device><Phone/></g><g data-flying><Message/></g></g>
 </Board>;
};
