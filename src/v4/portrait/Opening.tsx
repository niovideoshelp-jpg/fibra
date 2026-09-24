import React from 'react';
import {useCurrentFrame,interpolate,Easing} from 'remotion';
import {useGsapTimeline} from '@remotion/gsap';
import {Board,P,Phone,Message,DataCard} from '../../v2/kit';
import {landPath} from '../../v2/land';
import {Asset,SurveyGrid,Dust} from '../shared';
export const Send:React.FC=()=>{
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.from(s('[data-phone]'),{y:100,opacity:0,duration:.7,ease:'power3.out'},0)
 .to(s('[data-phone-bubble]'),{opacity:0,duration:.12},1.65)
 .from(s('[data-msg]'),{opacity:0,scale:.8,duration:.15},1.65)
 .to(s('[data-msg]'),{y:950,scale:.2,duration:1.55,ease:'power2.in'},1.85)
 .fromTo(s('[data-channel]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:1.6,ease:'power2.in'},1.8)
 .to(s('[data-phone]'),{y:-80,opacity:.75,duration:1.3,ease:'sine.inOut'},2);
 });
 return <Board ref={scope} bg={P.white}><SurveyGrid width={1000} height={1778}/>
 <path data-channel d="M500 830V1840" pathLength={100} strokeDasharray="100" stroke={P.orange} strokeWidth="5"/>
 <g transform="translate(500 655) scale(1.35)"><g data-phone><Phone/></g></g>
 <g transform="translate(530 675)"><g data-msg><Message/></g></g>
 </Board>;
};
const Satellite:React.FC=()=> <g>
 <path d="M-85-58H85V-20H-85Z" fill="#B4A06A" stroke={P.night} strokeWidth="4"/>
 <path d="M-260-38H260" stroke={P.white} strokeWidth="7"/>
 {[-1,1].map(side=><g key={side} transform={'translate('+(side*187)+' -40)'}><rect x="-77" y="-65" width="154" height="130" fill={P.sea} stroke={P.muted} strokeWidth="4"/>{[-50,-25,0,25,50].map(x=><path key={x} d={'M'+x+'-60V60'} stroke={P.cyan} strokeWidth="1"/>)}{[-40,-20,0,20,40].map(y=><path key={y} d={'M-72 '+y+'H72'} stroke={P.cyan} strokeWidth="1"/>)}</g>)}
 <path d="M0-20V0" stroke={P.muted} strokeWidth="14"/><ellipse cy="7" rx="49" ry="29" fill={P.white}/><path d="M-36 13 0 0 36 13" stroke={P.night} strokeWidth="3" fill="none"/><circle r="6" fill={P.orange}/>
 </g>;
export const SpaceToEarth:React.FC=()=>{
 const frame=useCurrentFrame();const u=Math.max(0,Math.min(1,(frame-35)/100));const v=u<.5?u*2:(u-.5)*2;
 const x=u<.5?(1-v)**2*260+2*(1-v)*v*110+v*v*500:(1-v)**2*500+2*(1-v)*v*890+v*v*740;
 const y=u<.5?(1-v)**2*1010+2*(1-v)*v*400+v*v*400:(1-v)**2*400+2*(1-v)*v*400+v*v*1010;
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.from(s('[data-earth]'),{y:70,opacity:0,duration:1},0)
 .from(s('[data-space]'),{opacity:0,duration:.7},.1)
 .fromTo(s('[data-route]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:2.6,ease:'sine.inOut'},.7)
 .to(s('[data-space]'),{opacity:.16,duration:.6},6.7)
 .from(s('[data-cross]'),{opacity:0,scale:.7,duration:.5,svgOrigin:'500 400'},6.8)
 .to(s('[data-earth]'),{y:500,opacity:0,duration:1.2,ease:'power2.in'},7.2)
 .fromTo(s('[data-down]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:1.4,ease:'power2.in'},7.6)
 .from(s('[data-fall]'),{opacity:0,duration:.2},7.4)
 .to(s('[data-fall]'),{y:1500,duration:1.8,ease:'power2.in'},7.5);
 });
 return <Board ref={scope} bg={P.night}><Dust width={1000} height={1778}/>
 <g data-earth><defs><clipPath id="portrait-earth"><circle cx="500" cy="1120" r="340"/></clipPath></defs><circle cx="500" cy="1120" r="348" fill="none" stroke={P.muted} opacity=".4"/><circle cx="500" cy="1120" r="340" fill={P.sea}/><g clipPath="url(#portrait-earth)"><path d={landPath} transform="translate(95 785) scale(.84 1.3)" fill={P.cyan} opacity=".8"/></g></g>
 <g data-space><path data-route d="M260 1010Q110 400 500 400Q890 400 740 1010" fill="none" pathLength={100} strokeDasharray="100" stroke={P.orange} strokeWidth="5"/><g transform="translate(500 400)"><Satellite/></g><circle cx={x} cy={y} r="9" fill={P.white}/>{[[260,1010],[740,1010]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="13" fill={P.orange}/>)}</g>
 <g data-cross><path d="m470 370 60 60m-60 0 60-60" fill="none" stroke={P.orange} strokeWidth="13" strokeLinecap="round"/></g>
 <path data-down d="M500 600V1850" pathLength={100} strokeDasharray="100" stroke={P.orange} strokeWidth="6" fill="none"/>
 <g transform="translate(500 700)"><g data-fall><circle r="16" fill={P.white}/></g></g>
 </Board>;
};
export const Descent:React.FC=()=>{
 const frame=useCurrentFrame();const q=interpolate(frame,[0,160],[0,1],{extrapolateRight:'clamp',easing:Easing.bezier(.42,0,.58,1)});const y=320+q*1080;
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.from(s('[data-geology]'),{y:180,opacity:0,duration:1.3,ease:'power3.out'},.5)
 .fromTo(s('[data-route]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:4.8,ease:'sine.inOut'},0)
 .from(s('[data-horizon]'),{opacity:0,duration:.9},.3);
 });
 return <Board ref={scope} bg={P.white}>
 <rect data-horizon y="540" width="1000" height="1238" fill="url(#depth)"/>
 <g transform="translate(500 235) scale(.78)"><DataCard kind={3}/></g>
 <path d="M0 535Q250 510 500 535T1000 535" fill="none" stroke={P.muted} strokeWidth="3"/>
 <g data-geology><Asset name="seabed" x={-80} y={1000} width={1160}/></g>
 <path d="M500 308V1400" stroke={P.night} strokeWidth="28"/>
 <path data-route d="M500 308V1400" pathLength={100} strokeDasharray="100" stroke={P.orange} strokeWidth="9"/>
 <circle cx="500" cy={y} r="45" fill="url(#beam)"/><circle cx="500" cy={y} r="10" fill={P.white}/>
 {[700,850,1000,1150,1300].map((y,i)=><path key={y} d={'M'+(i%2?535:440)+' '+y+'h25'} stroke={P.white} opacity=".35" strokeWidth="2"/>)}
 </Board>;
};
