import React from 'react';
import {Img, staticFile, useVideoConfig} from 'remotion';
import {useGsapTimeline} from '@remotion/gsap';
import {Stage,Headline} from '../components/Stage';
import {Icon} from '../components/Icon';
import {C,sans} from '../theme';
export const Intro:React.FC=()=>{
 const {width,height}=useVideoConfig();const p=height>width;
 const scope=useGsapTimeline<HTMLDivElement>(({timeline,selector})=>{
 timeline.from(selector('[data-heading]'),{y:40,opacity:0,duration:.9,ease:'power3.out'},.1)
 .from(selector('[data-message]'),{scale:.7,opacity:0,duration:.7,ease:'back.out(1.5)'},.6)
 .from(selector('[data-satellite]'),{y:80,opacity:0,rotation:-8,duration:1.3},3.7)
 .to(selector('[data-satellite]'),{y:-25,rotation:4,duration:5},5)
 .to(selector('[data-satellite]'),{opacity:.12,duration:.5},10.35)
 .from(selector('[data-correction]'),{y:30,opacity:0,duration:.55,ease:'power3.out'},10.5);
 },{dependencies:[p]});
 return <div ref={scope}><Stage chapter="01 / O PERCURSO">
 <Headline eyebrow="UMA MENSAGEM. OUTRO LADO DO MUNDO.">Para onde<br/>ela vai?</Headline>
 <div data-message style={{position:'absolute',left:p?180:260,top:p?660:565,width:220,height:180,borderRadius:35,background:C.cyan,color:C.ink,display:'grid',placeItems:'center'}}><Icon name="message" size={125}/></div>
 <Img data-satellite src={staticFile('images/satellite.png')} style={{position:'absolute',width:p?800:930,left:p?260:930,top:p?780:160}}/>
 <div data-correction style={{position:'absolute',left:80,right:80,bottom:p?280:120,fontSize:p?70:64,fontWeight:700,letterSpacing:-2,color:C.gold,fontFamily:sans}}>NÃO É BEM ASSIM.</div>
 </Stage></div>;
};
