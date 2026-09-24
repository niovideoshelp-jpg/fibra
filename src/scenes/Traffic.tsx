import React from 'react';
import {useVideoConfig} from 'remotion';
import {useGsapTimeline} from '@remotion/gsap';
import {Stage,Headline} from '../components/Stage';
import {Icon,IconName} from '../components/Icon';
import {C} from '../theme';
export const Traffic:React.FC=()=>{
 const {width:w,height:h}=useVideoConfig();const p=h>w;
 const items:[IconName,string][]=[['video','VÍDEOS'],['phone','CHAMADAS'],['bank','TRANSAÇÕES'],['server','DADOS']];
 const scope=useGsapTimeline<HTMLDivElement>(({timeline,selector})=>{
 timeline.from(selector('[data-heading]'),{y:30,opacity:0,duration:.7},0)
 .from(selector('[data-item]'),{y:60,opacity:0,stagger:.85,duration:.7,ease:'power3.out'},3.9)
 .from(selector('[data-under]'),{scaleX:0,transformOrigin:'left',duration:1.2},1.2);
 });
 return <div ref={scope}><Stage chapter="04 / INFORMAÇÃO" light><Headline eyebrow="POR DENTRO DESSAS FIBRAS">O mundo<br/>em movimento.</Headline>
 <div data-under style={{position:'absolute',left:80,top:p?475:470,width:p?680:920,height:4,background:C.ink}}/>
 <div style={{position:'absolute',top:p?750:650,left:80,right:80,display:'grid',gridTemplateColumns:p?'1fr 1fr':'repeat(4,1fr)',gap:p?100:60}}>
 {items.map(([name,label])=><div data-item key={name} style={{textAlign:'center'}}><Icon name={name} size={p?145:120}/><div style={{marginTop:30,fontSize:27,letterSpacing:2,fontWeight:600}}>{label}</div></div>)}
 </div></Stage></div>;
};
