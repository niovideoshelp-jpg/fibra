import React from 'react';
import {useGsapTimeline} from '@remotion/gsap';
import {Board,useBoard,P,DataCard} from '../kit';
export const Traffic:React.FC=()=>{
 const {W,H,p}=useBoard();const cx=p?W*.5:W*.72,cy=p?H*.69:H*.5;
 const points=p?[[W*.3,H*.2],[W*.7,H*.34],[W*.3,H*.49],[W*.72,H*.62]]:[[W*.2,H*.25],[W*.45,H*.28],[W*.2,H*.73],[W*.47,H*.72]];
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.from(s('[data-hub]'),{scale:0,duration:.7,ease:'power3.out',svgOrigin:cx+' '+cy},0)
 .to(s('[data-flow]'),{strokeDashoffset:-800,duration:9.2,ease:'none'},0)
 .to(s('[data-hub-rays]'),{rotation:180,duration:9.2,svgOrigin:cx+' '+cy,ease:'none'},0)
 .from(s('[data-conduit]'),{opacity:0,stagger:.04,duration:.7},0);
 points.forEach(([x,y],i)=>{t.from(s('[data-card="'+i+'"]'),{scale:0,rotation:i%2?5:-5,opacity:0,duration:.45,ease:'power3.out'},3.7+i*.8)
 .to(s('[data-card="'+i+'"]'),{x:cx-x,y:cy-y,scale:.03,rotation:i%2?12:-12,duration:1.2,ease:'power3.in'},4.65+i*.8);});
 t.to(s('[data-hub]'),{scale:1.65,duration:.7,ease:'power3.in',svgOrigin:cx+' '+cy},8.4);
 });
 return <Board ref={scope} bg={P.night}>
 {Array.from({length:19},(_,i)=>{const y=(i-9)*11;const d=p?'M-100 '+(H*.1+i*60)+'Q'+W*.45+' '+H*.5+' '+cx+' '+(cy+y):'M-100 '+(H*.12+i*40)+'Q'+W*.45+' '+H*.5+' '+cx+' '+(cy+y);return <g key={i} data-conduit><path d={d} stroke={P.blue} strokeWidth="6" fill="none"/><path data-flow d={d} pathLength={100} strokeDasharray="7 93" stroke={i%3?P.cyan:P.orange} strokeWidth="6" fill="none"/></g>;})}
 <g data-hub><circle cx={cx} cy={cy} r="141" fill={P.blue}/><g data-hub-rays>{Array.from({length:16},(_,i)=><path key={i} d={'M'+(cx+95)+' '+cy+'h30'} transform={'rotate('+i*22.5+' '+cx+' '+cy+')'} stroke={P.cyan} strokeWidth="5"/>)}</g><circle cx={cx} cy={cy} r="81" fill={P.orange}/><circle cx={cx} cy={cy} r="26" fill={P.white}/></g>
 {points.map(([x,y],i)=><g key={i} transform={'translate('+x+' '+y+')'}><g data-card={i} transform={p?'scale(.9)':'scale(1)'}><DataCard kind={i}/></g></g>)}
 </Board>;
};
