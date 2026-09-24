import React from 'react';
import {useGsapTimeline} from '@remotion/gsap';
import {Board,useBoard,P,Ship,Seabed} from '../kit';
export const Laying:React.FC=()=>{
 const {W,H,p}=useBoard();const sc=p?1.18:1.14,bx=W*.52,by=p?H*.33:H*.32,stern=bx-285*sc;
 const cable=(offset:number)=>'M'+(stern+offset)+' '+(by+50)+'C'+(stern-100+offset)+' '+H*.62+' '+W*.3+' '+H*.82+' '+W*.65+' '+H*.84+'S'+W+' '+H*.78+' '+(W+100)+' '+H*.86;
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.from(s('[data-vessel]'),{x:-W*.3,opacity:0,duration:.8,ease:'power3.out'},0)
 .to(s('[data-vessel]'),{x:W*.12,duration:8,ease:'none'},.8)
 .to(s('[data-bob]'),{y:-9,rotation:1.1,repeat:5,yoyo:true,duration:1.3,ease:'sine.inOut'},0)
 .to(s('[data-reel]'),{rotation:-720,duration:9,ease:'none',transformOrigin:'center'},0)
 .fromTo(s('[data-lay]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:5,ease:'none'},.2)
 .to(s('[data-catenary]'),{attr:{d:cable(W*.12)},duration:8,ease:'none'},.8)
 .to(s('[data-flow]'),{strokeDashoffset:-240,duration:8,ease:'none'},1)
 .from(s('[data-rov]'),{x:W*.4,y:100,opacity:0,duration:1.3,ease:'power3.out'},4.2)
 .fromTo(s('[data-sonar]'),{scale:.1,opacity:.8},{scale:2.5,opacity:0,repeat:3,duration:1.05,svgOrigin:W*.68+' '+H*.68},4.4);
 });
 return <Board ref={scope} bg={P.white}>
 <path d={'M-200 '+H*.39+'Q'+W*.3+' '+H*.34+' '+W*.57+' '+H*.4+'T'+(W+200)+' '+H*.39+'V'+(H+200)+'H-200Z'} fill="url(#depth)"/>
 <Seabed W={W} H={H}/>
 <path data-catenary d={cable(0)} fill="none" stroke={P.night} strokeWidth="18"/>
 <path data-catenary data-lay d={cable(0)} pathLength={100} strokeDasharray="100" fill="none" stroke={P.orange} strokeWidth="7"/>
 <path data-catenary data-flow d={cable(0)} pathLength={100} strokeDasharray="5 95" fill="none" stroke={P.white} strokeWidth="7"/>
 <g transform={'translate('+bx+' '+by+') scale('+sc+')'}><g data-vessel><g data-bob><Ship/></g></g></g>
 <circle data-sonar cx={W*.68} cy={H*.68} r="55" fill="none" stroke={P.cyan} strokeWidth="3"/>
 <g transform={'translate('+W*.68+' '+H*.68+')'}><g data-rov><rect x="-66" y="-27" width="132" height="69" rx="24" fill={P.orange}/><circle cx="39" cy="1" r="18" fill={P.night}/><circle cx="42" cy="-2" r="8" fill={P.white}/><path d="M-40 39v30h43M29 40v30h-27" fill="none" stroke={P.white} strokeWidth="9" strokeLinecap="round"/><path d="M-78-31H69M-88 1h-38" stroke={P.night} strokeWidth="13" strokeLinecap="round"/></g></g>
 </Board>;
};
