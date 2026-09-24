import React from 'react';
import {useCurrentFrame} from 'remotion';
import {useGsapTimeline} from '@remotion/gsap';
import {Board,useBoard,P} from '../kit';
import {landPath} from '../land';
export const Orbit:React.FC=()=>{
 const {W,H,p}=useBoard();const frame=useCurrentFrame();
 const cx=W*.5,cy=H*.92,r=p?W*.64:H*.56;
 const sx=W*.61,sy=H*.25, ax=W*.27,ay=cy-r*.57,bx=W*.79,by=cy-r*.49;
 const qx=W*.25,qy=H*.21,rx=W*.86,ry=H*.30;
 const t=Math.max(0,Math.min(1,(frame-42)/105));const half=t<.5;const u=half?t*2:(t-.5)*2;
 const x=half?(1-u)*(1-u)*ax+2*(1-u)*u*qx+u*u*sx:(1-u)*(1-u)*sx+2*(1-u)*u*rx+u*u*bx;
 const y=half?(1-u)*(1-u)*ay+2*(1-u)*u*qy+u*u*sy:(1-u)*(1-u)*sy+2*(1-u)*u*ry+u*u*by;
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:tl,selector:s})=>{
 tl.from(s('[data-planet]'),{y:70,opacity:0,duration:1.2,ease:'power2.out'},0)
 .from(s('[data-rig]'),{opacity:0,duration:.7},.35)
 .fromTo(s('[data-route]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:2.8,ease:'sine.inOut'},.65)
 .from(s('[data-signal]'),{opacity:0,duration:.2},1.35)
 .to(s('[data-signal]'),{opacity:0,duration:.3},5.15)
 .to(s('[data-camera]'),{scale:1.055,y:-H*.012,duration:6.65,ease:'sine.inOut',svgOrigin:W/2+' '+H*.5},0);
 });
 return <Board ref={scope} bg={P.night}><g data-camera>
 {Array.from({length:35},(_,i)=><circle key={i} cx={(i*191+17)%W} cy={(i*157+53)%H} r={i%4===0?1.5:.8} fill={P.white} opacity=".27"/>)}
 <g data-planet><defs><clipPath id="earth-orbit"><circle cx={cx} cy={cy} r={r}/></clipPath></defs>
 <circle cx={cx} cy={cy} r={r+13} fill="none" stroke={P.muted} strokeOpacity=".3" strokeWidth="1"/>
 <circle cx={cx} cy={cy} r={r} fill={P.sea} stroke={P.muted} strokeWidth="2"/>
 <g clipPath="url(#earth-orbit)"><path d={landPath} transform={'translate('+(cx-r*1.04)+' '+(cy-r)+') scale('+r*2.25/1000+' '+r*2/500+')'} fill={P.cyan} opacity=".72"/>
 {[-.65,-.32,0,.32,.65].map((v,i)=><ellipse key={i} cx={cx} cy={cy+v*r} rx={r*Math.sqrt(1-v*v)} ry={r*.11} fill="none" stroke={P.white} strokeWidth="1" opacity=".12"/>)}
 <circle cx={cx+r*.86} cy={cy+r*.27} r={r*.95} fill={P.night} opacity=".33"/></g></g>
 <g data-rig>
 <path data-route d={'M'+ax+' '+ay+'Q'+qx+' '+qy+' '+sx+' '+sy+'Q'+rx+' '+ry+' '+bx+' '+by} pathLength={100} strokeDasharray="100" fill="none" stroke={P.orange} strokeWidth="4"/>
 {[ [ax,ay],[bx,by] ].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="10" fill={P.orange}/><circle cx={x} cy={y} r="22" fill="none" stroke={P.orange} strokeWidth="2" opacity=".5"/></g>)}
 <g transform={'translate('+sx+' '+sy+') scale('+(p?.90:.85)+')'}>
 <g transform="rotate(-17)">
 <path d="M-80-80H80V-10H-80Z" fill="#B4A06A" stroke={P.night} strokeWidth="4"/>
 <path d="M-63-72H64V-20H-63Z" fill="#CABB8B"/><path d="M-55-64H54M-55-49H54M-55-34H54" stroke="#8C794E" strokeWidth="3"/>
 <path d="M-78-46H-250M78-46H250" stroke={P.white} strokeWidth="9"/>
 {[-1,1].map(side=><g key={side} transform={'translate('+(side*190)+' -46)'}><rect x="-86" y="-67" width="172" height="134" fill="#444C40" stroke={P.muted} strokeWidth="5"/>{[-60,-30,0,30,60].map(x=><path key={x} d={'M'+x+'-63V63'} stroke={P.cyan} strokeWidth="1" opacity=".7"/>)}{[-42,-21,0,21,42].map(y=><path key={y} d={'M-81 '+y+'H81'} stroke={P.cyan} strokeWidth="1" opacity=".7"/>)}</g>)}
 <path d="M0-11V7" stroke="#CABB8B" strokeWidth="14"/><ellipse cy="6" rx="55" ry="32" fill={P.white} stroke={P.muted} strokeWidth="3"/><path d="M-45 2Q0 30 45 2" fill="none" stroke={P.muted} strokeWidth="2"/><path d="M-35 12 0 0 35 12M0 0V-22" fill="none" stroke={P.night} strokeWidth="3"/><circle r="6" fill={P.orange}/>
 </g></g>
 <g data-signal><circle cx={x} cy={y} r="22" fill="url(#beam)"/><circle cx={x} cy={y} r="6" fill={P.white}/></g>
 </g></g></Board>;
};
