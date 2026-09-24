import React from 'react';
import {useGsapTimeline} from '@remotion/gsap';
import {Board,P,CloudShape,Phone,Message,DataCard} from '../../v2/kit';
import {Asset,RepairAsset,SurveyGrid,Dust} from '../shared';
export const RestoreVertical:React.FC=()=>{
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.fromTo(s('[data-bypass]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:1.4,ease:'sine.inOut'},.2)
 .to(s('[data-flow]'),{strokeDashoffset:-420,duration:8.7,ease:'none'},.5)
 .to(s('[data-network]'),{scale:.35,y:-30,duration:1.3,ease:'power2.inOut',svgOrigin:'500 220'},3.5)
 .from(s('[data-detail]'),{opacity:0,y:120,duration:1.1,ease:'power3.out'},4)
 .to(s('[data-shell]'),{y:174,duration:1.2,ease:'power2.inOut'},5.8)
 .to(s('[data-restored]'),{opacity:1,duration:.5},7);
 });
 return <Board ref={scope} bg={P.white}><SurveyGrid width={1000} height={1778}/>
 <g data-network><path d="M500 220V730M500 940V1510" stroke={P.night} strokeWidth="26"/><path data-bypass d="M500 350C780 350 790 560 790 810S780 1380 500 1380" pathLength={100} strokeDasharray="100" stroke={P.blue} strokeWidth="12" fill="none"/><path data-flow d="M500 350C780 350 790 560 790 810S780 1380 500 1380" pathLength={100} strokeDasharray="4 46" stroke={P.orange} strokeWidth="7" fill="none"/><path d="m460 790 80 90m-80 0 80-90" stroke={P.orange} strokeWidth="9"/><path data-restored d="M500 720V950" stroke={P.cyan} strokeWidth="26" opacity="0"/>{[350,1380].map(y=><circle key={y} cx="500" cy={y} r="20" fill={P.orange}/>)}</g>
 <g data-detail><g transform="translate(500 1110) rotate(90) scale(.62) translate(-768 -512)"><RepairAsset/></g></g>
 </Board>;
};
export const PhysicalVertical:React.FC=()=>{
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.from(s('[data-cloud]'),{y:80,opacity:0,duration:.9,ease:'power3.out'},0)
 .from(s('[data-message]'),{y:-120,opacity:0,duration:.7},1)
 .to(s('[data-message]'),{y:85,opacity:0,duration:.7},2)
 .to(s('[data-cloud]'),{y:-180,opacity:0,duration:1.3,ease:'power2.in'},4.4)
 .fromTo(s('[data-spine]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:2.2,ease:'sine.inOut'},4.7)
 .from(s('[data-material]'),{y:80,opacity:0,stagger:.6,duration:1,ease:'power3.out'},5.4)
 .from(s('[data-flow]'),{opacity:0,duration:.5},5.5)
 .to(s('[data-flow]'),{strokeDashoffset:-350,duration:6,ease:'none'},6)
 .from(s('[data-geology]'),{y:180,opacity:0,duration:1.2,ease:'power3.out'},7);
 });
 return <Board ref={scope} bg={P.deep}><Dust width={1000} height={1778}/>
 <g transform="translate(500 480)"><g data-cloud><CloudShape/></g><g data-message transform="scale(.55)"><Message/></g></g>
 <path data-spine d="M500 250V1460" pathLength={100} strokeDasharray="100" stroke={P.blue} strokeWidth="16"/>
 <path data-flow d="M500 250V1460" pathLength={100} strokeDasharray="4 46" stroke={P.orange} strokeWidth="6"/>
 <g data-material><g transform="translate(500 480) scale(1.05)"><DataCard kind={3}/></g></g>
 <g data-material><Asset name="cutaway" x={100} y={690} width={800}/></g>
 <g data-geology><Asset name="seabed" x={-110} y={1140} width={1220}/></g>
 </Board>;
};
export const Receive:React.FC=()=>{
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.from(s('[data-device]'),{y:65,opacity:0,duration:.8,ease:'power3.out'},0)
 .set(s('[data-phone-bubble]'),{opacity:0},0)
 .to(s('[data-flow]'),{strokeDashoffset:-350,duration:6.9,ease:'none'},0)
 .from(s('[data-message]'),{y:670,opacity:0,duration:1.15,ease:'power2.out'},.1)
 .to(s('[data-message]'),{scale:.3,opacity:0,duration:.35},1.25)
 .to(s('[data-phone-bubble]'),{opacity:1,duration:.25},1.3)
 .to(s('[data-phone-bubble]'),{opacity:0,duration:.3},2)
 .to(s('[data-phone-tick]'),{opacity:1,duration:.35},2.1)
 .fromTo(s('[data-ring]'),{scale:.7,opacity:0},{scale:1.1,opacity:.35,duration:1.4,stagger:.15,svgOrigin:'500 800'},1.7)
 .to(s('[data-ring]'),{opacity:.08,duration:2},3.8);
 });
 return <Board ref={scope} bg={P.white}><SurveyGrid width={1000} height={1778}/>
 {[300,385,465].map(r=><ellipse data-ring key={r} cx="500" cy="800" rx={r} ry={r*1.15} fill="none" stroke={P.muted} strokeWidth="2"/>)}
 
 <g transform="translate(500 800) scale(1.3)"><g data-device><path d="M0 800V280" stroke={P.night} strokeWidth="18"/><path data-flow d="M0 800V280" pathLength={100} strokeDasharray="4 46" stroke={P.orange} strokeWidth="5"/><Phone/></g></g>
 <g transform="translate(520 820)"><g data-message><Message/></g></g>
 </Board>;
};
