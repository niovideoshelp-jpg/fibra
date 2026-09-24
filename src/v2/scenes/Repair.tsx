import React from 'react';
import {useGsapTimeline} from '@remotion/gsap';
import {Board,useBoard,P} from '../kit';
export const Repair:React.FC=()=>{
 const {W,H,p}=useBoard();const cy=H*.62,x1=W*.12,x2=W*.88;
 const alt='M'+x1+' '+cy+'C'+W*.22+' '+cy+' '+W*.2+' '+H*.3+' '+W*.38+' '+H*.3+'H'+W*.65+'C'+W*.84+' '+H*.3+' '+W*.78+' '+cy+' '+x2+' '+cy;
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.fromTo(s('[data-camera]'),{scale:1.13,y:-H*.02},{scale:1,y:0,rotation:0,duration:1.4,svgOrigin:W/2+' '+cy,ease:'power3.out'},0)
 .fromTo(s('[data-alt]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:1.45,ease:'power2.inOut'},.8)
 .to(s('[data-packet]'),{strokeDashoffset:-450,duration:6.7,ease:'none'},1.6)
 .from(s('[data-node]'),{scale:0,stagger:.1,duration:.5,transformOrigin:'center',ease:'power3.out'},.5)
 .from(s('[data-clamp-top]'),{y:-130,opacity:0,duration:.65,ease:'power3.out'},4.2)
 .from(s('[data-clamp-bottom]'),{y:130,opacity:0,duration:.65,ease:'power3.out'},4.3)
 .to(s('[data-bolt]'),{rotation:270,duration:.65,stagger:.08,transformOrigin:'center'},5.1)
 .to(s('[data-healed]'),{opacity:1,duration:.25},6)
 .to(s('[data-restored-packet]'),{strokeDashoffset:-180,duration:2.3,ease:'none'},6.1)
 .to(s('[data-camera]'),{scale:1.035,rotation:0,duration:2.6,ease:'power2.inOut',svgOrigin:W/2+' '+H/2},6);
 });
 return <Board ref={scope} bg={P.white}><g data-camera>
 <path d={alt} stroke={P.night} strokeWidth="28" fill="none" opacity=".13" transform="translate(12 22)"/>
 <path data-alt d={alt} pathLength={100} strokeDasharray="100" stroke={P.blue} strokeWidth="19" fill="none"/>
 <path data-packet d={alt} pathLength={100} strokeDasharray="6 44" stroke={P.orange} strokeWidth="9" fill="none"/>
 <path d={'M'+x1+' '+cy+'H'+(W/2-90)+'M'+(W/2+90)+' '+cy+'H'+x2} stroke={P.night} strokeWidth="34" fill="none"/>
 <path d={'M'+x1+' '+cy+'H'+(W/2-90)+'M'+(W/2+90)+' '+cy+'H'+x2} stroke={P.orange} strokeWidth="9" fill="none" opacity=".4"/>
 {[[x1,cy],[x2,cy],[W*.38,H*.3],[W*.65,H*.3]].map(([x,y],i)=><g data-node key={i}><ellipse cx={x+8} cy={y+20} rx="33" ry="20" fill={P.night} opacity=".15"/><circle cx={x} cy={y} r="28" fill={P.blue}/><circle cx={x-4} cy={y-5} r="13" fill={P.white}/></g>)}
 <g transform={'translate('+W/2+' '+cy+')'}>
 <path data-healed d="M-100 0H100" stroke={P.cyan} strokeWidth="12" opacity="0"/>
 <g data-clamp-top><path d="M-116-9V-49Q-116-78-81-78H81Q116-78 116-49V-9H86V-38H-86V-9Z" fill={P.blue}/><path d="M-84-62H84" stroke={P.muted} strokeWidth="9" strokeLinecap="round"/></g>
 <g data-clamp-bottom><path d="M-116 9V49Q-116 78-81 78H81Q116 78 116 49V9H86V38H-86V9Z" fill={P.orange}/><path d="M-84 62H84" stroke={P.white} strokeWidth="9" strokeLinecap="round" opacity=".6"/></g>
 {[-90,90].flatMap(x=>[-36,36].map(y=><g data-bolt key={x+','+y}><circle cx={x} cy={y} r="10" fill={P.night}/><path d={'M'+(x-5)+' '+y+'h10'} stroke={P.white} strokeWidth="3"/></g>))}
 </g>
 <path data-restored-packet d={'M'+x1+' '+cy+'H'+x2} pathLength={100} strokeDasharray="3 97" stroke={P.orange} strokeWidth="12" fill="none"/>
 </g></Board>;
};
