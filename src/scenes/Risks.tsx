import React from 'react';
import {useVideoConfig} from 'remotion';
import {useGsapTimeline} from '@remotion/gsap';
import {Stage,Headline} from '../components/Stage';
import {Icon,IconName} from '../components/Icon';
import {C} from '../theme';
export const Risks:React.FC=()=>{
 const {height:h,width:w}=useVideoConfig();const p=h>w;
 const items:[IconName,string][]=[['quake','TERREMOTOS'],['anchor','ÂNCORAS'],['net','PESCA']];
 const scope=useGsapTimeline<HTMLDivElement>(({timeline,selector})=>{
 timeline.from(selector('[data-heading]'),{y:20,opacity:0,duration:.7},0)
 .from(selector('[data-risk]'),{scale:.75,opacity:0,y:-70,stagger:1.4,duration:.6,ease:'power3.out'},.1)
 .fromTo(selector('[data-break]'),{scaleX:0},{scaleX:1,duration:.45},4.1);
 });
 return <div ref={scope}><Stage chapter="08 / VULNERABILIDADE" light>
 <Headline eyebrow="NEM TUDO ESTÁ SOB CONTROLE">Conexões<br/>podem se romper.</Headline>
 <div style={{position:'absolute',top:p?750:650,left:80,right:80,display:'flex',flexDirection:p?'column':'row',justifyContent:'space-around',gap:p?100:70}}>
 {items.map(([name,label])=><div data-risk key={name} style={{display:'flex',flexDirection:p?'row':'column',alignItems:'center',gap:30}}><Icon name={name} size={p?130:145}/><div style={{fontSize:p?37:27,letterSpacing:2}}>{label}</div></div>)}
 </div>
 <div data-break style={{position:'absolute',left:80,right:80,bottom:p?220:90,height:5,background:C.danger,transformOrigin:'left'}}/>
 </Stage></div>;
};
