import React from 'react';
import {useVideoConfig} from 'remotion';
import {useGsapTimeline} from '@remotion/gsap';
import {Stage,Headline} from '../components/Stage';
import {Ocean} from '../components/Ocean';
import {C} from '../theme';
export const Descent:React.FC=()=>{
 const {width:w,height:h}=useVideoConfig();const p=h>w;
 const d=p?'M200 590L200 840Q200 940 440 1040T760 1690':'M180 450L550 450Q720 460 860 700T1710 960';
 const scope=useGsapTimeline<HTMLDivElement>(({timeline,selector})=>{
 timeline.from(selector('[data-heading]'),{y:-40,opacity:0,duration:.7},0)
 .fromTo(selector('[data-descent]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:5.6,ease:'power1.inOut'},.4)
 .to(selector('[data-signal]'),{strokeDashoffset:-100,duration:5.6,ease:'none'},.6)
 .from(selector('[data-depth]'),{opacity:0,duration:1},3.2);
 });
 return <div ref={scope}><Stage chapter="02 / PROFUNDIDADE"><Ocean width={w} height={h} surface={p?850:480}/>
 <Headline eyebrow="O CAMINHO REAL">Sua mensagem<br/><em style={{color:C.cyan}}>desce.</em></Headline>
 <svg width={w} height={h} style={{position:'absolute'}}>
 <path d={p?'M0 830H310L400 960L350 1130L0 1370Z':'M0 450H520L680 580L560 730L0 830Z'} fill="#475957"/>
 <path data-descent d={d} pathLength={100} strokeDasharray="100" strokeWidth={9} stroke={C.cyan} fill="none"/>
 <path data-signal d={d} pathLength={100} strokeDasharray="3 97" strokeWidth={14} stroke={C.paper} fill="none"/>
 </svg>
 <div data-depth style={{position:'absolute',right:80,bottom:180,textAlign:'right',fontSize:28,letterSpacing:3,color:C.cyan}}>REDE TERRESTRE<br/><span style={{opacity:.5}}>↓ COSTA ↓ OCEANO</span></div>
 </Stage></div>;
};
