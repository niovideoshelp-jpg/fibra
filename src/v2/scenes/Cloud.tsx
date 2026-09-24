import React from 'react';
import {useGsapTimeline} from '@remotion/gsap';
import {Board,useBoard,P,CloudShape,Message,Seabed} from '../kit';
import {landPath} from '../land';
import {worldNodes,worldEdges} from './World';
export const Cloud:React.FC=()=>{
 const {W,H,p}=useBoard();const cx=W/2,cy=H*.34;const sc=p?1.45:1.38;
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.from(s('[data-cloud]'),{scale:.05,y:H*.2,duration:.7,ease:'back.out(1.4)'},0)
 .to(s('[data-cloud]'),{y:-30,rotation:4,duration:1.2,yoyo:true,repeat:1,ease:'sine.inOut'},.8)
 .from(s('[data-msg]'),{x:-W*.7,y:100,scale:0,opacity:0,duration:.75,ease:'power3.out'},.9)
 .to(s('[data-msg]'),{x:0,y:0,scale:.05,opacity:0,duration:.55,ease:'power3.in'},1.9)
 .fromTo(s('[data-tethers]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:1.7,stagger:.12},2.3)
 .to(s('[data-cloud-top]'),{y:-H*.36,scale:.75,duration:1.5,ease:'power3.inOut',svgOrigin:cx+' '+cy},4.9)
 .from(s('[data-water]'),{y:H*.7,duration:1.5,ease:'power3.inOut'},4.9)
 .from(s('[data-world]'),{opacity:0,y:H*.23,scale:.6,duration:1.2,ease:'power3.out',svgOrigin:W/2+' '+H*.62},6)
 .fromTo(s('[data-cable]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:1.3,stagger:.1},6.6)
 .to(s('[data-cablelight]'),{strokeDashoffset:-360,duration:6,ease:'none'},7)
 .to(s('[data-world]'),{rotation:8,scale:1.17,y:-H*.025,duration:4.2,svgOrigin:W/2+' '+H*.62,ease:'power1.inOut'},9);
 });
 return <Board ref={scope} bg={P.blue}>
 <g data-cloud-top><g transform={'translate('+cx+' '+cy+')'}><g data-cloud transform={p?'scale(1.12)':'scale(1.4)'}><CloudShape/></g><g data-msg transform="scale(.5)"><Message/></g></g>
 {[-1,0,1].map(i=><path data-tethers key={i} d={'M'+(cx+i*135)+' '+(cy+100)+'V'+H*.71} pathLength={100} strokeDasharray="100" stroke={P.orange} strokeWidth="9" fill="none"/>)}
 </g>
 <g data-water><path d={'M-100 '+H*.36+'Q'+W*.2+' '+H*.32+' '+W*.48+' '+H*.36+'T'+(W+100)+' '+H*.36+'V'+(H+200)+'H-100Z'} fill="url(#depth)"/><Seabed W={W} H={H}/></g>
 <g data-world><g transform={'translate('+(W/2-500*sc)+' '+(H*.62-250*sc)+') scale('+sc+')'}>
 <path d={landPath} fill={P.muted} opacity=".25"/>
 {worldEdges.map(([a,b],i)=>{const A=worldNodes[a],B=worldNodes[b];const d='M'+A[0]+' '+A[1]+'Q'+(A[0]+B[0])/2+' '+((A[1]+B[1])/2+60)+' '+B[0]+' '+B[1];return <g key={i}><path data-cable d={d} pathLength={100} strokeDasharray="100" stroke={P.cyan} strokeWidth="3" fill="none"/><path data-cablelight d={d} pathLength={100} strokeDasharray="4 96" stroke={P.orange} strokeWidth="5" fill="none"/></g>;})}
 {worldNodes.map(([x,y],i)=><circle key={i} cx={x} cy={y} r="6" fill={P.white}/>)}
 </g></g></Board>;
};
