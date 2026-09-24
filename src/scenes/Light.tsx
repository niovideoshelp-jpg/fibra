import React from 'react';
import {Img,staticFile,useVideoConfig} from 'remotion';
import {useGsapTimeline} from '@remotion/gsap';
import {Stage,Headline} from '../components/Stage';
import {C} from '../theme';
export const Light:React.FC=()=>{
 const {width:w,height:h}=useVideoConfig();const p=h>w;
 const scope=useGsapTimeline<HTMLDivElement>(({timeline,selector})=>{
 timeline.from(selector('[data-heading]'),{y:30,opacity:0,duration:.7},0)
 .from(selector('[data-cable]'),{scale:.86,x:140,opacity:0,duration:1.1,ease:'power3.out'},.2)
 .to(selector('[data-cable]'),{scale:1.06,duration:6},1.3)
 .to(selector('[data-beam]'),{strokeDashoffset:-300,duration:6.7,ease:'none',stagger:.12},.2)
 .from(selector('[data-caption]'),{opacity:0,y:20,duration:.7},4.1);
 });
 return <div ref={scope}><Stage chapter="05 / PULSOS DE LUZ"><Headline eyebrow="A INFORMAÇÃO MUDA DE FORMA">Dados viram<br/><em style={{color:C.cyan}}>luz.</em></Headline>
 <Img data-cable src={staticFile('images/cable.png')} style={{position:'absolute',width:p?1320:1360,left:p?-140:550,top:p?640:290}}/>
 <svg width={w} height={h} style={{position:'absolute',inset:0}}>
 {[0,1,2,3,4].map(i=><path key={i} data-beam pathLength={100} d={p?'M-100 '+(1320+i*23)+'Q350 1250 900 890':'M-50 '+(860+i*19)+'Q550 870 1100 640'} stroke={i%2?C.paper:C.cyan} strokeWidth={4} strokeDasharray="8 92" fill="none" opacity=".8"/>)}
 </svg>
 <div data-caption style={{position:'absolute',left:80,right:80,bottom:p?220:105,fontSize:p?42:33,color:C.paper}}>Uma rede imensa.<br/><span style={{opacity:.65}}>Fibras extraordinariamente finas.</span></div>
 </Stage></div>;
};
