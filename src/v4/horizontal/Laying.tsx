import React from 'react';
import {useCurrentFrame} from 'remotion';
import {useGsapTimeline} from '@remotion/gsap';
import {Board,useBoard,P,Ship,Seabed} from '../../v2/kit';
import {Asset,Dust} from '../shared';
export const Laying:React.FC=()=>{
 const {W,H,p}=useBoard();const frame=useCurrentFrame();
 const sc=p?1.02:.98,bx=W*.5,by=H*.39-100*sc;
 const progress=Math.min(1,frame/270),dx=W*.10*(progress-.5),dy=Math.sin(progress*Math.PI*4)*3;
 const stern=bx+dx-285*sc;
 const cable='M'+stern+' '+(by+dy+42*sc)+'C'+(stern-60)+' '+H*.61+' '+W*.35+' '+H*.77+' '+W*.68+' '+H*.76+'S'+W+' '+H*.75+' '+(W+100)+' '+H*.77;
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.to(s('[data-reel]'),{rotation:-720,duration:9,ease:'none',transformOrigin:'center'},0)
 .from(s('[data-catenary]'),{opacity:0,duration:.75},0)
 .to(s('[data-flow]'),{strokeDashoffset:-240,duration:8,ease:'none'},1)
 .from(s('[data-rov]'),{x:W*.4,y:100,opacity:0,duration:1.3,ease:'power3.out'},4.2)
 .fromTo(s('[data-sonar]'),{scale:.1,opacity:.8},{scale:2.5,opacity:0,repeat:3,duration:1.05,svgOrigin:W*.68+' '+H*.73},4.4);
 });
 return <Board ref={scope} bg={P.white}>
 <path d={'M-200 '+H*.39+'Q'+W*.3+' '+H*.34+' '+W*.57+' '+H*.4+'T'+(W+200)+' '+H*.39+'V'+(H+200)+'H-200Z'} fill="url(#depth)"/>
 <Seabed W={W} H={H}/>
 <path data-catenary d={cable} fill="none" stroke={P.night} strokeWidth="18"/>
 <path data-catenary d={cable} pathLength={100} strokeDasharray="100" fill="none" stroke={P.orange} strokeWidth="7"/>
 <path data-catenary data-flow d={cable} pathLength={100} strokeDasharray="5 95" fill="none" stroke={P.white} strokeWidth="7"/>
 <g transform={'translate('+(bx+dx)+' '+(by+dy)+') scale('+sc+')'}><g data-vessel><g data-bob><Ship/></g></g></g>
 <circle data-sonar cx={W*.68} cy={H*.73} r="55" fill="none" stroke={P.cyan} strokeWidth="3"/>
 <g transform={'translate('+W*.68+' '+H*.73+')'}><g data-rov><path d="M-30-20-200 180H130Z" fill={P.white} opacity=".07"/><Asset name="rov" x={-170} y={-175} width={340} height={340}/></g></g>
 <Dust/>
 </Board>;
};
