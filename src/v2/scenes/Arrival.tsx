import React from 'react';
import {useGsapTimeline} from '@remotion/gsap';
import {Board,useBoard,P,Phone,Message} from '../kit';
import {landPath} from '../land';
export const Arrival:React.FC=()=>{
 const {W,H,p}=useBoard();const cy=H*.45;
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.from(s('[data-device]'),{y:100,rotation:17,scale:1.5,opacity:0,duration:.7,ease:'power3.out'},0)
 .from(s('[data-message]'),{x:-W*.7,y:100,scale:.1,opacity:0,duration:.65,ease:'power2.out'},.2)
 .to(s('[data-message]'),{scale:.02,opacity:0,y:15,duration:.35,ease:'power3.in'},.95)
 .to(s('[data-phone-bubble]'),{opacity:0,scale:.1,duration:.25},1.2)
 .to(s('[data-phone-tick]'),{opacity:1,duration:.2},1.5)
 .fromTo(s('[data-link]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:1.2},.7)
 .to(s('[data-cable-light]'),{strokeDashoffset:-300,duration:5,ease:'none'},1.2)
 .from(s('[data-global]'),{opacity:0,scale:.7,duration:1.3,svgOrigin:W/2+' '+H/2},2.2)
 .to(s('[data-device]'),{scale:p?.96:.86,rotation:-7,y:p?20:-10,duration:2.2,ease:'power3.inOut'},2.5)
 .from(s('[data-echo]'),{scale:.1,opacity:0,stagger:.15,duration:1.1,svgOrigin:W/2+' '+cy},1.5)
 .to(s('[data-echo]'),{scale:1.8,opacity:0,duration:1.6,svgOrigin:W/2+' '+cy},2.5)
 .to(s('[data-global]'),{x:-35,rotation:3,duration:3.7,ease:'none',svgOrigin:W/2+' '+H/2},3);
 });
 const d='M'+W/2+' '+(cy+270)+'V'+H*.8+'Q'+W/2+' '+H*.94+' '+W*.22+' '+H*.9+'T-'+W*.2+' '+H*.77;
 return <Board ref={scope} bg={P.white}>
 <g data-global><path d={landPath} transform={'translate('+(W/2-750)+' '+(H/2-375)+') scale(1.5)'} fill={P.blue} opacity=".08"/></g>
 {[250,340,450].map(r=><circle data-echo key={r} cx={W/2} cy={cy} r={r} stroke={P.orange} strokeWidth="3" fill="none" opacity=".4"/>)}
 <path data-link d={d} pathLength={100} strokeDasharray="100" stroke={P.night} strokeWidth="28" fill="none"/>
 <path data-cable-light d={d} pathLength={100} strokeDasharray="4 96" stroke={P.orange} strokeWidth="9" fill="none"/>
 <g transform={'translate('+W/2+' '+cy+')'}><g data-device><Phone/></g><g data-message><Message/></g></g>
 </Board>;
};
