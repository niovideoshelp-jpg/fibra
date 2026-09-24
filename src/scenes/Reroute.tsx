import React from 'react';
import {useVideoConfig} from 'remotion';
import {useGsapTimeline} from '@remotion/gsap';
import {Stage,Headline} from '../components/Stage';
import {Icon} from '../components/Icon';
import {C} from '../theme';
export const Reroute:React.FC=()=>{
 const {width:w,height:h}=useVideoConfig();const p=h>w;
 const scope=useGsapTimeline<HTMLDivElement>(({timeline,selector})=>{
 timeline.from(selector('[data-heading]'),{y:30,opacity:0,duration:.7},0)
 .fromTo(selector('[data-alt]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:2,ease:'power2.inOut'},.6)
 .to(selector('[data-reroute-pulse]'),{strokeDashoffset:-200,duration:7,ease:'none'},1.1)
 .from(selector('[data-repair]'),{scale:.5,opacity:0,duration:.7,ease:'back.out(1.5)'},4.4)
 .to(selector('[data-original]'),{stroke:C.cyan,opacity:.6,duration:.8},6.7);
 });
 return <div ref={scope}><Stage chapter="09 / REDUNDÂNCIA"><Headline eyebrow="QUANDO UMA ROTA FALHA">A informação<br/>muda de caminho.</Headline>
 <div style={{position:'absolute',left:p?80:280,right:p?80:280,top:p?780:480}}>
 <svg viewBox="0 0 1000 500" width="100%" style={{overflow:'visible'}}>
 <path data-original d="M40 330H425M575 330H960" stroke={C.danger} opacity=".65" strokeWidth={8} fill="none"/>
 <path data-alt d="M40 330C190 330 180 70 330 70H690C830 70 810 330 960 330" pathLength={100} strokeDasharray="100" strokeWidth={7} stroke={C.cyan} fill="none"/>
 <path data-reroute-pulse d="M40 330C190 330 180 70 330 70H690C830 70 810 330 960 330" pathLength={100} strokeDasharray="4 96" strokeWidth={12} stroke={C.paper} fill="none"/>
 <circle cx="40" cy="330" r="21" fill={C.cyan}/><circle cx="960" cy="330" r="21" fill={C.cyan}/>
 <text x="490" y="15" textAnchor="middle" fill={C.cyan} fontSize="19" letterSpacing="3">ROTA ALTERNATIVA</text>
 </svg>
 </div>
 <div data-repair style={{position:'absolute',left:'calc(50% - 55px)',top:p?1140:840,color:C.gold}}><Icon name="repair" size={110}/></div>
 <div style={{position:'absolute',left:80,bottom:p?230:85,fontSize:26,letterSpacing:2,opacity:.65}}>DESVIO DE TRÁFEGO + REPARO DO TRECHO</div>
 </Stage></div>;
};
