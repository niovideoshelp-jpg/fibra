import React from 'react';
import {useGsapTimeline} from '@remotion/gsap';
import {Board,P,DataCard,CableFace} from '../../v2/kit';
import {landPath} from '../../v2/land';
import {worldNodes,worldEdges} from '../../v2/scenes/World';
import {Asset,SurveyGrid} from '../shared';
export const Connections:React.FC=()=>{
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.from(s('[data-panel]'),{y:65,opacity:0,stagger:.6,duration:1,ease:'power3.out'},0)
 .fromTo(s('[data-route]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:1.4,stagger:.15,ease:'sine.inOut'},1)
 .to(s('[data-flow]'),{strokeDashoffset:-550,duration:12,ease:'none'},.8)
 .fromTo(s('[data-spine]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:1.4},3.3);
 });
 return <Board ref={scope} bg={P.white}><SurveyGrid width={1000} height={1778}/>
 {[{cy:500,cx:425,sy:205,title:'ATLÂNTICO'},{cy:1240,cx:810,sy:240,title:'ÁSIA–PACÍFICO'}].map(({cy,cx,sy,title},j)=><g key={title} data-panel>
 <defs><clipPath id={'native-map-'+j}><rect x="85" y={cy-245} width="830" height="490" rx="8"/></clipPath></defs>
 <rect x="85" y={cy-245} width="830" height="490" rx="8" fill={P.sea}/><g clipPath={'url(#native-map-'+j+')'}><g transform={'translate('+(500-cx*2.3)+' '+(cy-sy*2.3)+') scale(2.3)'}>
 <path d={landPath} fill={P.white} opacity=".88"/>
 {worldEdges.filter((_,i)=>j===0?i<7:i>=7&&i<13).map(([a,b],i)=>{const A=worldNodes[a],B=worldNodes[b];const d='M'+A[0]+' '+A[1]+'Q'+(A[0]+B[0])/2+' '+((A[1]+B[1])/2-45)+' '+B[0]+' '+B[1];return <g key={i}><path data-route d={d} pathLength={100} strokeDasharray="100" stroke={P.orange} strokeWidth="2" fill="none"/><path data-flow d={d} pathLength={100} strokeDasharray="3 97" stroke={P.white} strokeWidth="3" fill="none"/>{[A,B].map(([x,y],k)=><circle key={k} cx={x} cy={y} r="4" fill={P.night}/>)}</g>;})}
 </g></g><text x="85" y={cy-278} fill={P.ink} fontFamily="Arial,sans-serif" fontSize="31" letterSpacing="3">{title}</text>
 </g>)}
 <path data-spine d="M500 745V995" pathLength={100} strokeDasharray="100" fill="none" stroke={P.orange} strokeWidth="5"/><circle cx="500" cy="745" r="10" fill={P.orange}/><circle cx="500" cy="995" r="10" fill={P.orange}/>
 </Board>;
};
export const DataFlow:React.FC=()=>{
 const ys=[340,610,880,1150];
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.to(s('[data-flow]'),{strokeDashoffset:-500,duration:9.5,ease:'none'},0)
 .from(s('[data-hub]'),{opacity:0,duration:.6},0);
 ys.forEach((y,i)=>{const x=i%2?760:240;t.from(s('[data-card="'+i+'"]'),{x:i%2?80:-80,opacity:0,duration:.55,ease:'power3.out'},3.65+i*.8)
 .to(s('[data-card="'+i+'"]'),{x:500-x,y:1435-y,scale:.06,duration:1.05,ease:'power2.in'},4.7+i*.8);});
 });
 return <Board ref={scope} bg={P.night}>
 {Array.from({length:11},(_,i)=><g key={i}><path d={'M'+(425+i*15)+' 140V1290Q'+(425+i*15)+' 1435 500 1435'} stroke={P.blue} strokeWidth="5" fill="none"/><path data-flow d={'M'+(425+i*15)+' 140V1290Q'+(425+i*15)+' 1435 500 1435'} pathLength={100} strokeDasharray="4 46" stroke={i%3?P.cyan:P.orange} strokeWidth="5" fill="none"/></g>)}
 {ys.map((y,i)=><g key={y} transform={'translate('+(i%2?760:240)+' '+y+')'}><g data-card={i}><g transform="scale(.85)"><DataCard kind={i}/></g></g></g>)}
 <g data-hub transform="translate(500 1435) scale(.48)"><CableFace/></g>
 </Board>;
};
export const AnatomyVertical:React.FC=()=>{
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.from(s('[data-photo]'),{y:60,opacity:0,duration:.8,ease:'power3.out'},0)
 .from(s('[data-section]'),{y:70,opacity:0,duration:.8,ease:'power3.out'},.6)
 .to(s('[data-jacket]'),{y:-155,duration:1.2,ease:'power2.inOut'},1.8)
 .to(s('[data-armor]'),{y:-65,duration:1.2,ease:'power2.inOut'},1.95)
 .to(s('[data-copper]'),{y:35,duration:1.2,ease:'power2.inOut'},2.1)
 .to(s('[data-liner]'),{y:110,duration:1.2,ease:'power2.inOut'},2.2)
 .to(s('[data-fiber-group]'),{y:220,duration:1.2,ease:'power2.inOut'},2.35)
 .from(s('[data-key]'),{opacity:0,y:20,duration:.6,stagger:.22},2.7)
 .to(s('[data-photon]'),{strokeDashoffset:-300,duration:3.6,ease:'none'},3.5)
 .to(s('[data-photo]'),{opacity:.65,duration:1.5},4.5);
 });
 return <Board ref={scope} bg={P.white}><SurveyGrid width={1000} height={1778}/>
 <g data-photo><Asset name="cutaway" x={40} y={110} width={920}/></g>
 <path d="M500 675V775" stroke={P.muted} strokeWidth="2" strokeDasharray="5 7"/>
 <g transform="translate(500 1080) scale(.88)"><g data-section><CableFace/></g></g>
 <g fontFamily="Arial,sans-serif" fontSize="22" fill={P.ink}>
 {[['PROTEÇÃO',160],['ARMADURA',430],['FIBRAS ÓPTICAS',700]].map(([s,x],i)=><g key={s} data-key><circle cx={Number(x)-23} cy="1553" r="7" fill={[P.night,P.muted,P.orange][i]}/><text x={x} y="1560">{s}</text></g>)}</g>
 <path d="M130 1630H870" stroke={P.muted} strokeWidth="8"/><path data-photon d="M130 1630H870" pathLength={100} strokeDasharray="4 29" stroke={P.orange} strokeWidth="5"/>
 </Board>;
};
