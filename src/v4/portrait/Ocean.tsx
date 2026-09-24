import React from 'react';
import {useCurrentFrame} from 'remotion';
import {useGsapTimeline} from '@remotion/gsap';
import {Board,P,DataCard,Ship,Anchor} from '../../v2/kit';
import {Asset,Dust,SignalLine} from '../shared';
export const AbyssVertical:React.FC=()=>{
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.from(s('[data-server]'),{opacity:0,y:40,stagger:.2,duration:.6},0)
 .to(s('[data-server]'),{opacity:0,y:-220,duration:.9,stagger:.12},2)
 .from(s('[data-ground]'),{y:220,opacity:0,duration:1.2,ease:'power3.out'},2.5)
 .fromTo(s('[data-route]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:3.2,ease:'sine.inOut'},3)
 .from(s('[data-flow]'),{opacity:0,duration:.5},3.3)
 .to(s('[data-flow]'),{strokeDashoffset:-380,duration:6.5,ease:'none'},3.3)
 .from(s('[data-depth-tick]'),{opacity:0,x:-25,stagger:.08,duration:.5},3.2)
 .from(s('[data-bottom-label]'),{opacity:0,duration:.8},6);
 });
 return <Board ref={scope} bg={P.deep}><Dust width={1000} height={1778}/>
 {[300,555].map((y,i)=><g key={y} transform={'translate(500 '+y+')'}><g data-server><DataCard kind={3}/></g></g>)}
 <g data-ground><Asset name="seabed" x={-90} y={1040} width={1180}/></g>
 <path data-route d="M500 120V1040Q500 1240 670 1410" pathLength={100} strokeDasharray="100" stroke={P.orange} strokeWidth="9" fill="none"/>
 <path data-flow d="M500 120V1040Q500 1240 670 1410" pathLength={100} strokeDasharray="3 47" stroke={P.white} strokeWidth="6" fill="none"/>
 {[380,540,700,860,1020].map((y,i)=><g data-depth-tick key={y}><path d={'M170 '+y+'h'+(i%2?25:55)} stroke={P.muted} strokeWidth="2"/><path d={'M790 '+y+'h40'} stroke={P.muted} strokeWidth="2"/></g>)}
 <g data-bottom-label><path d="M660 1430H830V1500" stroke={P.white} strokeWidth="2" fill="none"/><text x="820" y="1545" textAnchor="end" fontFamily="Arial,sans-serif" fontSize="24" letterSpacing="1" fill={P.white}>LEITO OCEÂNICO</text></g>
 </Board>;
};
export const DeployVertical:React.FC=()=>{
 const frame=useCurrentFrame();const dx=(Math.min(frame,270)/270-.5)*60,dy=Math.sin(frame/25)*3;const bx=500+dx,by=395+dy,sc=1.05;
 const cable='M'+(bx-285*sc)+' '+(by+42*sc)+'C120 750 200 1150 470 1390S760 1460 1100 1440';
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.to(s('[data-reel]'),{rotation:-550,duration:9,ease:'none',transformOrigin:'center'},0)
 .to(s('[data-signal-line]'),{strokeDashoffset:-350,duration:9,ease:'none'},0)
 .from(s('[data-rov]'),{y:-180,opacity:0,duration:1.3,ease:'power3.out'},4)
 .fromTo(s('[data-sonar]'),{opacity:.6,scale:.2},{opacity:0,scale:2.2,repeat:3,duration:1.2,svgOrigin:'500 1310'},4.8)
 .from(s('[data-beam]'),{opacity:0,duration:.7},4.5);
 });
 return <Board ref={scope} bg={P.white}>
 <path d="M0 500Q250 470 500 500T1000 500V1778H0Z" fill="url(#depth)"/><Dust width={1000} height={1778}/>
 <Asset name="seabed" x={-140} y={1250} width={1280}/>
 <SignalLine d={cable} width={7}/>
 <g transform={'translate('+bx+' '+by+') scale('+sc+')'}><Ship/></g>
 <g data-rov><path data-beam d="M480 1000 300 1430 740 1430Z" fill={P.white} opacity=".065"/><Asset name="rov" x={330} y={790} width={420} height={420}/></g>
 <circle data-sonar cx="500" cy="1310" r="80" fill="none" stroke={P.cyan} strokeWidth="3"/>
 </Board>;
};
export const HazardsVertical:React.FC=()=>{
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.fromTo(s('[data-crack]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:.65},.15)
 .to(s('[data-upper]'),{x:-22,y:-22,duration:.14},.72)
 .to(s('[data-lower]'),{x:22,y:22,duration:.14},.72)
 .to(s('[data-shake]'),{keyframes:[{x:-10,duration:.07},{x:10,duration:.07},{x:0,duration:.07}]},.72)
 .from(s('[data-anchor]'),{y:-900,opacity:0,duration:.7,ease:'power2.in'},1.75)
 .to(s('[data-anchor]'),{y:140,opacity:0,duration:.55},3.1)
 .from(s('[data-net]'),{x:600,y:-300,opacity:0,duration:.75,ease:'power2.out'},3.85)
 .to(s('[data-net]'),{x:-120,y:210,duration:1.6,ease:'sine.inOut'},4.6);
 });
 return <Board ref={scope} bg={P.deep}><Dust width={1000} height={1778}/><Asset name="seabed" x={-220} y={1240} width={1440} opacity={.65}/>
 <g data-shake><g data-upper><path d="M500-100V840" stroke={P.night} strokeWidth="34"/><path d="M500-100V840" stroke={P.cyan} strokeWidth="8"/></g><g data-lower><path d="M500 900V1900" stroke={P.night} strokeWidth="34"/><path d="M500 900V1900" stroke={P.orange} strokeWidth="8"/></g>
 <path data-crack d="M-40 895 290 820 425 920 520 850 720 910 1060 805" stroke={P.orange} strokeWidth="7" fill="none" pathLength={100} strokeDasharray="100"/>
 <g transform="translate(500 740) scale(1.2)"><g data-anchor><path d="M0-130V-750" stroke={P.muted} strokeWidth="10"/><Anchor/></g></g>
 <g transform="translate(560 785)"><g data-net><path d="M-240-270H240L160 260Q0 340-160 260Z" fill={P.cyan} fillOpacity=".06" stroke={P.white} strokeWidth="5"/>{Array.from({length:9},(_,i)=><path key={i} d={'M'+(-210+i*52)+'-265L'+(-140+i*35)+' 260M-210 '+(-210+i*54)+'H210'} stroke={P.cyan} strokeWidth="2"/>)}</g></g>
 </g></Board>;
};
