import React from 'react';
import {useGsapTimeline} from '@remotion/gsap';
import {Board,P,CableFace} from '../../v2/kit';
import {Asset,SurveyGrid} from '../shared';
export const Anatomy:React.FC=()=>{
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.from(s('[data-cutaway]'),{x:70,opacity:0,duration:.8,ease:'power3.out'},0)
 .to(s('[data-cutaway]'),{x:-35,scale:1.055,duration:6.5,ease:'sine.inOut',svgOrigin:'520 440'},.8)
 .from(s('[data-disc]'),{opacity:0,y:20,duration:.75,ease:'power3.out'},.8)
 .fromTo(s('[data-leader]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:.7,stagger:.18},1)
 .from(s('[data-label]'),{x:25,opacity:0,stagger:.3,duration:.65,ease:'power2.out'},1.4)
 .to(s('[data-armor]'),{rotation:12,duration:5.5,ease:'sine.inOut',svgOrigin:'0 0'},1.6)
 .to(s('[data-flow]'),{strokeDashoffset:-500,duration:6,ease:'none'},1)
 .from(s('[data-micro]'),{y:25,opacity:0,duration:.6},3.5)
 .to(s('[data-micro-pulse]'),{strokeDashoffset:-300,duration:3,ease:'none'},4);
 });
 return <Board ref={scope} bg={P.white}><SurveyGrid/>
 <g data-cutaway><Asset name="cutaway" x={-30} y={65} width={1130}/></g>
 <path d="M1020 110V785" stroke={P.muted} strokeWidth="2" opacity=".4"/>
 <g data-disc><g transform="translate(1250 310) scale(.64)"><CableFace/></g></g>
 <path data-leader d="M520 545Q860 680 1120 380" pathLength={100} strokeDasharray="100" fill="none" stroke={P.orange} strokeWidth="2"/>
 <g fontFamily="Arial,sans-serif" fontSize="23" letterSpacing="1.5">
 {[['REVESTIMENTO',P.night],['ARMADURA',P.muted],['FIBRAS ÓPTICAS',P.orange]].map(([label,color],i)=><g data-label key={label} transform={'translate(1110 '+(560+i*68)+')'}><circle r="10" fill={color}/><text x="26" y="8" fill={P.ink}>{label}</text></g>)}</g>
 <g data-micro><path d="M120 784H900" stroke={P.muted} strokeWidth="12" strokeLinecap="round"/><path data-micro-pulse d="M120 784H900" pathLength={100} strokeDasharray="5 28" stroke={P.orange} strokeWidth="7" fill="none"/><text x="120" y="748" fill={P.ink} fontFamily="Arial,sans-serif" fontSize="23" letterSpacing="2">LUZ TRANSPORTANDO DADOS</text></g>
 </Board>;
};
