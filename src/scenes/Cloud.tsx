import React from 'react';
import {useVideoConfig} from 'remotion';
import {useGsapTimeline} from '@remotion/gsap';
import {Stage,Headline} from '../components/Stage';
import {Icon} from '../components/Icon';
import {Network} from '../components/Network';
import {C} from '../theme';
export const Cloud:React.FC=()=>{
 const {width:w,height:h}=useVideoConfig();const p=h>w;
 const scope=useGsapTimeline<HTMLDivElement>(({timeline,selector})=>{
 timeline.from(selector('[data-heading]'),{y:30,opacity:0,duration:.7},0)
 .from(selector('[data-cloud]'),{opacity:0,y:80,duration:1},.3)
 .to(selector('[data-cloud]'),{opacity:.08,y:-70,scale:1.15,duration:1.5},5.6)
 .from(selector('[data-net]'),{opacity:0,scale:.8,duration:1.5},5.7)
 .to(selector('[data-pulse]'),{strokeDashoffset:-200,duration:7,ease:'none'},6)
 .from(selector('[data-physical]'),{opacity:0,y:25,duration:.9},6.6);
 });
 return <div ref={scope}><Stage chapter="10 / A NUVEM"><Headline eyebrow="TALVEZ A IMAGEM CERTA SEJA OUTRA">A nuvem<br/>tem raízes.</Headline>
 <div data-cloud style={{position:'absolute',left:p?190:970,top:p?650:440,color:C.paper}}><Icon name="cloud" size={p?700:600}/></div>
 <div data-net style={{position:'absolute',left:p?20:630,top:p?670:340}}><Network width={p?1040:1200} height={p?940:650}/></div>
 <div data-physical style={{position:'absolute',left:80,right:80,bottom:p?250:110,fontSize:p?43:38,color:C.cyan}}>Uma rede física.<br/>Sob os oceanos.</div>
 </Stage></div>;
};
