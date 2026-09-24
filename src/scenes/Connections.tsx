import React from 'react';
import {useVideoConfig} from 'remotion';
import {useGsapTimeline} from '@remotion/gsap';
import {Stage,Headline} from '../components/Stage';
import {Network} from '../components/Network';
import {C} from '../theme';
export const Connections:React.FC=()=>{
 const {width:w,height:h}=useVideoConfig();const p=h>w;
 const scope=useGsapTimeline<HTMLDivElement>(({timeline,selector})=>{
 timeline.from(selector('[data-heading]'),{y:30,opacity:0,duration:.8},0)
 .from(selector('[data-node]'),{opacity:0,scale:.4,transformOrigin:'center',stagger:.13,duration:.7},.4)
 .fromTo(selector('[data-route]'),{strokeDasharray:'100',strokeDashoffset:100},{strokeDashoffset:0,stagger:.13,duration:2.3,ease:'power2.inOut'},.8)
 .to(selector('[data-pulse]'),{strokeDashoffset:-300,duration:11,ease:'none'},1.8);
 });
 return <div ref={scope}><Stage chapter="03 / CONEXÕES"><Headline eyebrow="MILHARES DE QUILÔMETROS">Continentes<br/>conectados.</Headline>
 <div style={{position:'absolute',left:p?40:650,top:p?620:330,width:p?1000:1170}}><Network width={p?1000:1170} height={p?850:700}/></div>
 <div style={{position:'absolute',left:80,bottom:p?290:210,fontSize:p?38:32,lineHeight:1.9,color:C.cyan}}>ATLÂNTICO<br/>PACÍFICO<br/>OCEANOS DO PLANETA</div>
 <div style={{position:'absolute',right:80,bottom:65,fontSize:15,letterSpacing:2,opacity:.5}}>REDE ILUSTRATIVA · SEM ESCALA</div>
 </Stage></div>;
};
