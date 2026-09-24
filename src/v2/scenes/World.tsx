import React from 'react';
import {useGsapTimeline} from '@remotion/gsap';
import {Board,useBoard,P} from '../kit';
import {landPath} from '../land';
export const worldNodes=[[294,137],[500,107],[371,315],[474,143],[551,344],[702,191],[888,151],[788,246],[879,322],[172,161],[608,217],[944,343]];
export const worldEdges=[[0,1],[0,3],[2,3],[2,4],[3,4],[1,5],[3,10],[10,5],[5,7],[6,7],[7,8],[8,11],[4,7],[0,9],[9,6],[6,8],[1,6],[2,0]];
export const World:React.FC=()=>{
 const {W,H,p}=useBoard();const S=p?.86:1.34;
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.from(s('[data-land]'),{opacity:0,duration:.55},0)
 .fromTo(s('[data-route]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:1.4,stagger:.23,ease:'power2.inOut'},.25)
 .from(s('[data-node]'),{scale:0,opacity:0,duration:.4,stagger:.08,transformOrigin:'center'},.2)
 .to(s('[data-pulse]'),{strokeDashoffset:-650,duration:12,ease:'none',stagger:.03},.7)

 .fromTo(s('[data-camera]'),{scale:1.15,y:H*.025},{scale:1,x:0,y:0,duration:3.2,ease:'sine.inOut',svgOrigin:'0 0'},0)
 .to(s('[data-camera]'),{x:W*.025,scale:1.08,duration:4,ease:'sine.inOut',svgOrigin:'0 0'},3.2)
 .to(s('[data-camera]'),{x:-W*.025,scale:1.12,duration:4.1,ease:'sine.inOut',svgOrigin:'0 0'},7.2)
 .to(s('[data-camera]'),{x:0,scale:1.08,duration:1.7,ease:'sine.inOut',svgOrigin:'0 0'},11.3);
 });
 return <Board ref={scope} bg={P.blue}><g transform={'translate('+W/2+' '+H/2+')'}><g data-camera><g transform={'translate('+(-W/2)+' '+(-H/2)+')'}>{p?<>
 <defs><clipPath id="atlantic-detail"><rect x={W*.08} y={H*.14} width={W*.84} height={H*.30} rx="8"/></clipPath></defs>
 <rect x={W*.08} y={H*.14} width={W*.84} height={H*.30} rx="8" fill={P.sea} stroke={P.muted} strokeWidth="2"/>
 <g clipPath="url(#atlantic-detail)"><g transform={'translate('+(W/2-420*2.65)+' '+(H*.29-205*2.65)+') scale(2.65)'}><path d={landPath} fill={P.white} opacity=".88"/>{[[0,1],[2,3],[2,4],[3,4]].map(([a,b],i)=>{const A=worldNodes[a],B=worldNodes[b];const d='M'+A[0]+' '+A[1]+'Q'+(A[0]+B[0])/2+' '+((A[1]+B[1])/2-45)+' '+B[0]+' '+B[1];return <g key={i}><path d={d} stroke={P.orange} strokeWidth="2" fill="none"/><path data-pulse d={d} pathLength={100} strokeDasharray="3 97" stroke={P.white} strokeWidth="3" fill="none"/>{[A,B].map(([x,y],j)=><circle key={j} cx={x} cy={y} r="4" fill={P.night}/>)}</g>;})}</g></g>
 <path d={'M'+W*.25+' '+H*.44+'L'+W*.39+' '+H*.58+'M'+W*.75+' '+H*.44+'L'+W*.54+' '+H*.58} fill="none" stroke={P.white} strokeOpacity=".4" strokeWidth="2" strokeDasharray="5 8"/>
 </>:null}<g transform={'translate('+(W/2-500*S)+' '+((p?H*.66:H/2)-250*S)+') scale('+S+')'}>
 {Array.from({length:7},(_,i)=><path key={i} d={'M0 '+(i*70)+'H1000M'+(i*160)+' 0V500'} stroke={P.white} opacity=".08" fill="none"/>)}
 <path data-land d={landPath} fill={P.white} opacity=".92"/>
 {worldEdges.map(([a,b],i)=>{const A=worldNodes[a],B=worldNodes[b];const d='M'+A[0]+' '+A[1]+'Q'+(A[0]+B[0])/2+' '+((A[1]+B[1])/2-30-Math.abs(A[0]-B[0])*.12)+' '+B[0]+' '+B[1];return <g key={i}><path data-route d={d} pathLength={100} strokeDasharray="100" stroke={i%3?P.orange:P.cyan} strokeWidth="3" fill="none"/><path data-pulse d={d} pathLength={100} strokeDasharray="3 97" stroke={P.white} strokeWidth="5" fill="none"/></g>;})}
 {worldNodes.map(([x,y],i)=><g key={i} data-node><circle cx={x} cy={y} r="8" fill={P.night}/><circle cx={x} cy={y} r="3" fill={P.orange}/></g>)}
 </g></g></g></g></Board>;
};
