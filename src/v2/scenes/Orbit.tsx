import React from 'react';
import {staticFile} from 'remotion';
import {useGsapTimeline} from '@remotion/gsap';
import {Board,useBoard,P,Message} from '../kit';
import {landPath} from '../land';
export const Orbit:React.FC=()=>{
 const {W,H,p}=useBoard();const r=p?570:620;const cx=W*.47,cy=H*.95;
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.from(s('[data-planet]'),{y:r*.6,scale:.65,duration:1.1,ease:'power3.out',svgOrigin:cx+' '+cy},0)
 .from(s('[data-satellite]'),{x:W*.45,y:-H*.15,rotation:35,duration:1.1,ease:'power3.out'},.2)
 .to(s('[data-satellite]'),{x:-130,y:80,rotation:-8,duration:4.6,ease:'none'},1.3)
 .fromTo(s('[data-orbit]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:2,ease:'power2.inOut'},.8)
 .to(s('[data-wave]'),{scale:1.5,opacity:0,stagger:.25,repeat:3,duration:1.1,svgOrigin:W*.65+' '+H*.26},.9)
 .to(s('[data-earth-sweep]'),{x:-170,duration:6.6,ease:'none'},0)
 .to(s('[data-signal]'),{keyframes:[{x:W*.27,y:-H*.22,duration:.7},{x:W*.08,y:-H*.43,duration:.9},{x:-W*.23,y:-H*.14,duration:.9}],ease:'none'},2)
 .to(s('[data-camera]'),{scale:1.14,rotation:5,duration:6.63,svgOrigin:W/2+' '+H/2,ease:'none'},0);
 });
 const orbit='M'+W*.18+' '+H*.82+' Q'+W*.3+' '+(-H*.2)+' '+W*.86+' '+H*.38;
 return <Board ref={scope} bg={P.night}><g data-camera>
 {Array.from({length:65},(_,i)=><circle key={i} cx={(i*191+17)%W} cy={(i*157+53)%H} r={i%4===0?2.2:1} fill={P.white} opacity={.2+(i%5)*.1}/>)}
 <g data-planet><defs><clipPath id="earth-orbit"><circle cx={cx} cy={cy} r={r}/></clipPath></defs><circle cx={cx} cy={cy} r={r+24} fill={P.blue} opacity=".15"/><circle cx={cx} cy={cy} r={r} fill={P.blue} stroke={P.muted} strokeWidth="5"/>
 <g clipPath="url(#earth-orbit)"><g data-earth-sweep><path d={landPath} transform={'translate('+(cx-r)+' '+(cy-r)+') scale('+r*2.4/1000+' '+r*2/500+')'} fill={P.cyan}/></g><circle cx={cx+r*.65} cy={cy+r*.6} r={r*.95} fill={P.night} opacity=".28"/></g></g>
 <path data-orbit d={orbit} pathLength={100} strokeDasharray="100" fill="none" stroke={P.orange} strokeWidth="8"/>
 {[45,80,120].map(r=><circle data-wave key={r} cx={W*.65} cy={H*.26} r={r} fill="none" stroke={P.white} strokeWidth="3" opacity=".4"/>)}
 <g transform={'translate('+W*.65+' '+H*.25+')'}><g data-satellite><image href={staticFile('images/satellite.png')} x="-280" y="-280" width="560" height="560"/></g></g>
 <g transform={'translate('+W*.35+' '+H*.7+')'}><g data-signal transform="scale(.34)"><Message/></g></g>
 </g></Board>;
};
