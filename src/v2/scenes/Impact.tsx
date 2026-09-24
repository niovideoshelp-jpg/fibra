import React from 'react';
import {useGsapTimeline} from '@remotion/gsap';
import {Board,useBoard,P,Anchor,Seabed} from '../kit';
export const Impact:React.FC=()=>{
 const {W,H}=useBoard();const cy=H*.69;
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.fromTo(s('[data-crack]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:.65},.2)
 .to(s('[data-left]'),{x:-35,y:12,rotation:-2,duration:.15},.72)
 .to(s('[data-right]'),{x:35,y:-12,rotation:2,duration:.15},.72)
 .from(s('[data-spark]'),{scale:0,opacity:0,duration:.12,svgOrigin:W/2+' '+cy},.72)
 .to(s('[data-spark]'),{opacity:0,scale:1.5,duration:.4,svgOrigin:W/2+' '+cy},.9)
 .to(s('[data-camera]'),{keyframes:[{x:-14,y:7,duration:.06},{x:14,y:-7,duration:.06},{x:-8,y:4,duration:.06},{x:0,y:0,duration:.06}]},.72)
 .from(s('[data-anchor]'),{y:-H,rotation:-22,duration:.65,ease:'power3.in'},1.8)
 .to(s('[data-camera]'),{keyframes:[{x:-15,duration:.06},{x:15,duration:.06},{x:0,duration:.06}]},2.44)
 .to(s('[data-anchor]'),{y:110,rotation:13,opacity:0,duration:.6},3.15)
 .from(s('[data-net]'),{y:-H*.5,rotation:-20,opacity:0,duration:.6,ease:'power3.in'},3.9)
 .to(s('[data-net]'),{x:W*.18,y:110,rotation:18,duration:1.7,ease:'power2.inOut'},4.5);
 });
 return <Board ref={scope} bg={P.sea}><g data-camera><Seabed W={W} H={H}/>
 <g data-left><path d={'M-100 '+cy+'H'+(W/2-12)} stroke={P.night} strokeWidth="38"/><path d={'M-100 '+cy+'H'+(W/2-12)} stroke={P.cyan} strokeWidth="8"/></g>
 <g data-right><path d={'M'+(W/2+12)+' '+cy+'H'+(W+100)} stroke={P.night} strokeWidth="38"/><path d={'M'+(W/2+12)+' '+cy+'H'+(W+100)} stroke={P.orange} strokeWidth="8"/></g>
 <path data-crack d={'M'+W*.45+' '+H+'l90-'+H*.14+'-80-'+H*.09+' 66-'+H*.14+'-42-'+H*.12} pathLength={100} strokeDasharray="100" stroke={P.orange} strokeWidth="12" fill="none"/>
 <g data-spark>{Array.from({length:9},(_,i)=><path key={i} d={'M'+(W/2+42)+' '+cy+'h68'} transform={'rotate('+i*40+' '+W/2+' '+cy+')'} stroke={P.white} strokeWidth="9"/>)}</g>
 <g transform={'translate('+W/2+' '+(cy-120)+')'}><g data-anchor><path d={'M0-140V-'+H} stroke="url(#steel)" strokeWidth="12"/><Anchor/></g></g>
 <g transform={'translate('+W*.48+' '+(cy-120)+')'}><g data-net><path d="M-240-340H240L160 130Q0 230-160 130Z" fill={P.cyan} fillOpacity=".1" stroke={P.white} strokeWidth="10"/>
 {Array.from({length:9},(_,i)=><path key={i} d={'M'+(-210+i*52)+'-330L'+(-140+i*35)+' 135M-220 '+(-290+i*50)+'H220'} stroke={P.cyan} strokeWidth="4"/>)}</g></g>
 </g></Board>;
};
