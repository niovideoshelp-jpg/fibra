import React from 'react';
import {useVideoConfig} from 'remotion';
import {useGsapTimeline} from '@remotion/gsap';
import {Stage,Headline} from '../components/Stage';
import {Ocean} from '../components/Ocean';
import {C} from '../theme';
export const Seabed:React.FC=()=>{
 const {width:w,height:h}=useVideoConfig();const p=h>w;
 const scope=useGsapTimeline<HTMLDivElement>(({timeline,selector})=>{
 timeline.from(selector('[data-heading]'),{y:35,opacity:0,duration:.9},.1)
 .from(selector('[data-floorline]'),{opacity:0,duration:1.5},2)
 .to(selector('[data-floorpulse]'),{strokeDashoffset:-130,duration:8,ease:'none'},1)
 .from(selector('[data-bottom]'),{opacity:0,y:30,duration:.8},6.3);
 });
 const d='M-10 '+h*.84+' Q'+w*.24+' '+h*.73+' '+w*.5+' '+h*.83+' T'+(w+20)+' '+h*.8;
 return <div ref={scope}><Stage chapter="06 / INFRAESTRUTURA"><Ocean width={w} height={h} surface={h*.52}/>
 <Headline eyebrow="PARECE ABSTRATO. É FÍSICO.">No fundo<br/>do oceano.</Headline>
 <svg width={w} height={h} style={{position:'absolute'}}><path data-floorline d={d} fill="none" stroke={C.cyan} strokeWidth={8}/><path data-floorpulse d={d} pathLength={100} fill="none" stroke={C.paper} strokeWidth={11} strokeDasharray="4 96"/></svg>
 <div data-bottom style={{position:'absolute',left:80,bottom:p?210:135,fontSize:p?43:34,color:C.cyan}}>Tecnologia real.<br/>Em um ambiente extremo.</div>
 </Stage></div>;
};
