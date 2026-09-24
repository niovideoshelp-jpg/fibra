import React from 'react';
import {Img,staticFile,useVideoConfig} from 'remotion';
import {useGsapTimeline} from '@remotion/gsap';
import {Stage,Headline} from '../components/Stage';
import {Ocean} from '../components/Ocean';
import {C} from '../theme';
export const Ships:React.FC=()=>{
 const {width:w,height:h}=useVideoConfig();const p=h>w;
 const scope=useGsapTimeline<HTMLDivElement>(({timeline,selector})=>{
 timeline.from(selector('[data-heading]'),{y:30,opacity:0,duration:.7},0)
 .from(selector('[data-ship]'),{x:-230,opacity:0,duration:1.6,ease:'power2.out'},.2)
 .to(selector('[data-ship]'),{x:80,y:-10,duration:6,ease:'none'},1.8)
 .fromTo(selector('[data-lay]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:6},1)
 .from(selector('[data-label]'),{opacity:0,y:30,duration:.8},3);
 });
 return <div ref={scope}><Stage chapter="07 / MANUTENÇÃO"><Ocean width={w} height={h} surface={p?1150:760}/>
 <Headline eyebrow="QUEM CONSTRÓI ESSA REDE?">Navios instalam.<br/>Equipes reparam.</Headline>
 <svg width={w} height={h} style={{position:'absolute'}}><path data-lay pathLength={100} strokeDasharray="100" d={p?'M190 1070Q80 1390 520 1590T1100 1730':'M380 720Q200 990 1000 950T1940 940'} stroke={C.cyan} strokeWidth={6} fill="none"/></svg>
 <Img data-ship src={staticFile('images/ship.png')} style={{position:'absolute',width:p?1040:1180,left:p?-10:650,top:p?650:310}}/>
 <div data-label style={{position:'absolute',left:80,bottom:p?140:100,color:C.cyan,fontSize:p?28:28,letterSpacing:2}}>INSTALAR → LOCALIZAR → REPARAR</div>
 </Stage></div>;
};
