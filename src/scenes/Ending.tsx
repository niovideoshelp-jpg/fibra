import React from 'react';
import {Img,staticFile,useVideoConfig} from 'remotion';
import {useGsapTimeline} from '@remotion/gsap';
import {Stage,Headline} from '../components/Stage';
import {C} from '../theme';
export const Ending:React.FC=()=>{
 const {height:h,width:w}=useVideoConfig();const p=h>w;
 const scope=useGsapTimeline<HTMLDivElement>(({timeline,selector})=>{
 timeline.from(selector('[data-heading]'),{opacity:0,y:35,duration:.9},.1)
 .from(selector('[data-last-cable]'),{opacity:0,scale:1.15,duration:1.5},.3)
 .from(selector('[data-real]'),{opacity:0,y:45,duration:.8,ease:'power3.out'},3.1)
 .to(selector('[data-last-cable]'),{scale:1.03,duration:5},1.8);
 });
 return <div ref={scope}><Stage chapter="11 / CONEXÃO REAL">
 <Img data-last-cable src={staticFile('images/cable.png')} style={{position:'absolute',width:p?1000:1200,left:p?40:700,top:p?640:230,opacity:.65}}/>
 <Headline eyebrow="POR TRÁS DO QUE PARECE INVISÍVEL">A internet<br/>é física.</Headline>
 <div data-real style={{position:'absolute',left:80,right:80,bottom:p?280:170,fontSize:p?92:96,lineHeight:1,letterSpacing:-4,fontWeight:700,color:C.cyan}}>EXTREMAMENTE<br/>REAL.</div>
 </Stage></div>;
};
