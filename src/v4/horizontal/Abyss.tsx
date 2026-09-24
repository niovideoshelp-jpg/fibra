import React from 'react';
import {useGsapTimeline} from '@remotion/gsap';
import {Board,P,DataCard} from '../../v2/kit';
import {Asset,Dust,SignalLine} from '../shared';
export const Abyss:React.FC=()=>{
 const d='M180 352C390 324 530 350 670 515S820 588 970 494S1250 437 1430 465';
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.from(s('[data-server]'),{y:50,opacity:0,stagger:.1,duration:.6},0)
 .to(s('[data-server]'),{y:-350,opacity:0,stagger:.08,duration:.85,ease:'power2.in'},2)
 .from(s('[data-section]'),{y:230,opacity:0,duration:1.1,ease:'power3.out'},2.3)
 .from(s('[data-cable]'),{opacity:0,duration:.7},3)
 .to(s('[data-signal-line]'),{strokeDashoffset:-400,duration:7,ease:'none'},3)
 .from(s('[data-note]'),{opacity:0,y:20,duration:.7},4)
 .to(s('[data-geology]'),{scale:1.05,y:12,duration:6,ease:'sine.inOut',svgOrigin:'800 470'},3.5)
 .from(s('[data-rov]'),{x:170,y:-50,opacity:0,duration:1.2,ease:'power2.out'},7);
 });
 return <Board ref={scope} bg={P.deep}><Dust/>
 <g>{[-1,0,1].map(i=><g key={i} transform={'translate('+(800+i*310)+' 300)'}><g data-server><DataCard kind={3}/></g></g>)}</g>
 <g data-section><g data-geology><Asset name="seabed" x={145} y={110} width={1310}/>
 <g data-cable><SignalLine d={d} width={6}/></g></g>
 <g data-note><path d="M705 615V750H1110" stroke={P.white} strokeWidth="2" fill="none" opacity=".6"/><circle cx="705" cy="615" r="6" fill={P.orange}/><text x="1135" y="758" fontSize="25" letterSpacing="1.5" fontFamily="Arial,sans-serif" fill={P.white}>LEITO OCEÂNICO</text></g>
 <g data-rov><path d="M1080 305 840 500 1250 430Z" fill={P.white} opacity=".055"/><Asset name="rov" x={980} y={180} width={310} height={310}/></g></g>
 </Board>;
};
