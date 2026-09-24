import React from 'react';
import {useGsapTimeline} from '@remotion/gsap';
import {Board,useBoard,P,Seabed} from '../kit';
export const Coast:React.FC=()=>{
 const {W,H,p}=useBoard();const x1=W*.23,y1=H*.28,x2=W*.46,y2=H*.43,x3=W*.56,y3=H*.64,x4=W*.8,y4=H*.88;
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.from(s('[data-building]'),{y:-80,opacity:0,stagger:.035,duration:.5,ease:'power3.out'},.05)
 .fromTo(s('[data-cable]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:4.6,ease:'none'},.1)
 .set(s('[data-dot]'),{x:x1,y:y1})
 .to(s('[data-dot]'),{x:x2,y:y1,duration:1.2,ease:'none'},.2)
 .to(s('[data-dot]'),{x:x2,y:y2,duration:1,ease:'none'},1.4)
 .to(s('[data-dot]'),{x:x3,y:y3,duration:1.3,ease:'none'},2.4)
 .to(s('[data-dot]'),{x:x4,y:y4,duration:1.6,ease:'none'},3.7)
 .to(s('[data-camera]'),{y:-H*.16,x:-W*.12,scale:1.22,svgOrigin:W*.5+' '+H*.55,duration:3.6,ease:'power2.inOut'},2.6)
 .to(s('[data-waterlines]'),{x:140,duration:6.83,ease:'none'},0);
 });
 const d='M'+x1+' '+y1+'H'+x2+'V'+y2+'L'+x3+' '+y3+'L'+x4+' '+y4;
 return <Board ref={scope} bg={P.white}><g data-camera>
 <path d={'M-200 '+H*.39+'H'+W*.47+'L'+W*.6+' '+H*.52+'L'+W*.42+' '+H*.7+'L-200 '+H*.84+'Z'} fill={P.sand}/>
 <path d={'M'+W*.47+' '+H*.39+'H'+(W+400)+'V'+(H+400)+'H-300V'+H*.84+'L'+W*.42+' '+H*.7+'L'+W*.6+' '+H*.52+'Z'} fill="url(#depth)"/>
 <Seabed W={W} H={H}/>
 <g data-waterlines>{Array.from({length:10},(_,i)=><path key={i} d={'M'+(W*.52+i*60)+' '+(H*.42+i*10)+'h180'} stroke={P.white} opacity=".3" strokeWidth="3"/>)}</g>
 {Array.from({length:9},(_,i)=>{const bx=W*.05+(i%3)*85,by=H*.22+Math.floor(i/3)*58;const ht=70+(i*43)%85;return <g key={i} data-building><path d={'M'+bx+' '+by+'v-'+ht+'l35-18 44 15v'+ht+'l-44 18Z'} fill={i%2?P.muted:P.blue}/><path d={'M'+bx+' '+(by-ht)+'l35 17v'+ht+'l-35-17Z'} fill={P.night} opacity=".3"/>{[0,1,2].map(j=><path key={j} d={'M'+(bx+46)+' '+(by-ht+31+j*22)+'h19'} stroke={P.white} strokeWidth="5" opacity=".7"/>)}</g>;})}
 <path d={d} stroke={P.night} strokeWidth="20" fill="none" strokeLinejoin="round"/>
 <path data-cable d={d} pathLength={100} strokeDasharray="100" stroke={P.orange} strokeWidth="9" fill="none" strokeLinejoin="round"/>
 <g data-dot><circle r="56" fill="url(#beam)"/><circle r="12" fill={P.white}/></g>
 </g></Board>;
};
