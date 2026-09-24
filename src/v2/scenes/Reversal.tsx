import React from 'react';
import {useGsapTimeline} from '@remotion/gsap';
import {Board,useBoard,P,Message} from '../kit';
export const Reversal:React.FC=()=>{
 const {W,H}=useBoard();
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.fromTo(s('[data-up]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:.55},0)
 .from(s('[data-cross]'),{scale:0,rotation:-40,duration:.3,ease:'back.out(2)',svgOrigin:W/2+' '+H*.25},.45)
 .to(s('[data-up]'),{opacity:.15,duration:.2},.5)
 .to(s('[data-message]'),{y:-65,rotation:-8,duration:.35,ease:'power2.out'},.1)
 .to(s('[data-message]'),{y:H*.8,rotation:18,scale:.18,duration:1.8,ease:'power3.in'},1.1)
 .fromTo(s('[data-down]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:1.6,ease:'power3.in'},1.1)
 .to(s('[data-fall-lines]'),{y:H*.6,opacity:1,duration:1.4,ease:'power3.in'},1.5);
 });
 return <Board ref={scope} bg={P.white}>
 <path data-up d={'M'+W/2+' '+H*.53+'V'+H*.13} stroke={P.muted} strokeWidth="10" strokeDasharray="100" pathLength={100} fill="none"/>
 <g data-cross><path d={'M'+(W/2-40)+' '+(H*.25-40)+'l80 80m0-80-80 80'} fill="none" stroke={P.orange} strokeWidth="22" strokeLinecap="round"/></g>
 <g data-fall-lines opacity=".1">{[-180,-100,100,180].map(x=><path key={x} d={'M'+(W/2+x)+' '+(-H*.2)+'V'+H*.35} stroke={P.blue} strokeWidth={x%100?3:8}/>)}</g>
 <path data-down d={'M'+W/2+' '+H*.55+'V'+H*1.5} stroke={P.orange} strokeWidth="14" strokeDasharray="100" pathLength={100} fill="none"/>
 <g transform={'translate('+W/2+' '+H*.52+')'}><g data-message><Message/></g></g>
 </Board>;
};
