import React from 'react';
import {staticFile} from 'remotion';
import {useGsapTimeline} from '@remotion/gsap';
import {Board,useBoard,P,CableFace} from '../kit';
export const Fiber:React.FC=()=>{
 const {W,H,p}=useBoard();
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.from(s('[data-photo]'),{x:W*.4,rotation:-5,scale:.6,opacity:0,duration:.6,ease:'power3.out'},0)
 .to(s('[data-photo]'),{scale:1.8,x:-W*.3,opacity:0,duration:.8,ease:'power3.in'},1)
 .from(s('[data-face]'),{scale:.05,rotation:-8,opacity:0,duration:.8,ease:'power3.out',svgOrigin:'0 0'},1.1)
 .to(s('[data-jacket]'),{x:-160,rotation:-30,svgOrigin:'0 0',duration:.8,ease:'power3.inOut'},2.1)
 .to(s('[data-armor]'),{x:-85,rotation:35,svgOrigin:'0 0',duration:.8,ease:'power3.inOut'},2.2)
 .to(s('[data-copper]'),{x:20,duration:.8,ease:'power3.inOut'},2.3)
 .to(s('[data-liner]'),{x:75,duration:.8,ease:'power3.inOut'},2.35)
 .to(s('[data-fiber-group]'),{x:125,rotation:30,svgOrigin:'0 0',duration:.8,ease:'power3.inOut'},2.4)
 .to(s('[data-face]'),{scale:3.4,x:-360,opacity:0,duration:.65,ease:'power3.in',svgOrigin:'0 0'},4.1)
 .from(s('[data-tunnel]'),{opacity:0,duration:.2},4.3)
 .fromTo(s('[data-tunnel-ring]'),{scale:.03,opacity:0},{scale:3.5,opacity:.7,duration:1.05,stagger:.13,repeat:2,ease:'power2.in',svgOrigin:W/2+' '+H/2},4.4)
 .to(s('[data-streak]'),{strokeDashoffset:-350,duration:2.9,ease:'none'},4.4);
 });
 return <Board ref={scope} bg={P.night}>
 <g transform={'translate('+W/2+' '+H/2+')'}><g data-photo><image href={staticFile('images/cable.png')} x={p?-570:-640} y="-400" width={p?1140:1280} height={p?760:853}/></g><g data-face transform={'scale('+(p?1.10:1.35)+')'}><CableFace/></g></g>
 <g data-tunnel>{Array.from({length:12},(_,i)=><ellipse data-tunnel-ring key={i} cx={W/2} cy={H/2} rx={50+i*20} ry={50+i*20} fill="none" stroke={i%3?P.blue:P.cyan} strokeWidth={i%3?12:4}/>)}
 {Array.from({length:22},(_,i)=>{const a=i*Math.PI/11;return <path data-streak key={i} d={'M'+(W/2+Math.cos(a)*30)+' '+(H/2+Math.sin(a)*30)+'L'+(W/2+Math.cos(a)*W*1.2)+' '+(H/2+Math.sin(a)*H*1.2)} stroke={i%4?P.cyan:P.orange} strokeWidth={i%4?4:10} fill="none" pathLength={100} strokeDasharray="8 92"/>;})}
 <circle cx={W/2} cy={H/2} r="70" fill="url(#beam)"/><circle cx={W/2} cy={H/2} r="12" fill={P.white}/></g>
 </Board>;
};
