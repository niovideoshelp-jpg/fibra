import React from 'react';
import {useGsapTimeline} from '@remotion/gsap';
import {Board,useBoard,P,DataCard,Seabed} from '../kit';
export const Depth:React.FC=()=>{
 const {W,H}=useBoard();const d='M-150 '+H*.74+'C'+W*.25+' '+H*.48+' '+W*.43+' '+H*.96+' '+W*.67+' '+H*.77+'S'+W+' '+H*.61+' '+(W+200)+' '+H*.82;
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.from(s('[data-server]'),{y:100,opacity:0,stagger:.14,duration:.5},.1)
 .to(s('[data-top]'),{y:-H*.8,opacity:0,duration:1,ease:'power3.in'},2)
 .from(s('[data-sea]'),{y:H*.7,duration:1,ease:'power3.out'},2.5)
 .to(s('[data-lumens]'),{strokeDashoffset:-600,duration:8,ease:'none'},2.6)
 .fromTo(s('[data-cable-trace]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:2.1},3)
 .to(s('[data-underwater]'),{x:-W*.18,y:-H*.18,scale:1.55,duration:6.1,ease:'none',svgOrigin:W/2+' '+H*.75},3.8)
 .to(s('[data-dust]'),{y:-70,x:22,stagger:.02,duration:7,ease:'none'},3);
 });
 return <Board ref={scope} bg={P.night}>
 <g data-top>{[-1,0,1].map(i=><g key={i} transform={'translate('+(W/2+i*280)+' '+H*.42+')'}><g data-server transform="scale(1.25)"><DataCard kind={3}/></g></g>)}</g>
 <g data-sea><rect x="-200" y="-200" width={W+400} height={H+400} fill="url(#depth)"/><g data-underwater>
 <Seabed W={W} H={H}/><path d={d} stroke="#02091E" strokeWidth="28" fill="none"/><path d={d} stroke="#4B66AA" strokeWidth="14" fill="none"/>
 <path data-cable-trace d={d} pathLength={100} strokeDasharray="100" stroke={P.orange} strokeWidth="7" fill="none"/><path data-lumens d={d} pathLength={100} strokeDasharray="4 46" stroke={P.white} strokeWidth="7" fill="none"/>
 {Array.from({length:36},(_,i)=><g data-dust key={i}><circle cx={(i*193+41)%W} cy={H*.2+(i*113)%(H*.6)} r={i%4+1} fill={P.white} opacity=".24"/></g>)}
 </g></g></Board>;
};
