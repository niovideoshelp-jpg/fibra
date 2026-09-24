import React from 'react';
import {staticFile,useCurrentFrame} from 'remotion';
import {P} from '../v2/kit';
export const Asset:React.FC<{name:string;x:number;y:number;width:number;height?:number;opacity?:number}>=({name,x,y,width,height=width*2/3,opacity=1})=><image href={staticFile('images/v4-'+name+'.png')} x={x} y={y} width={width} height={height} opacity={opacity}/>;
export const Dust:React.FC<{width?:number;height?:number}>=({width=1600,height=900})=>{
 const frame=useCurrentFrame();return <g opacity=".23">{Array.from({length:28},(_,i)=><circle key={i} cx={(i*173+29)%width+Math.sin(frame/90+i)*6} cy={((i*113+frame*.11)%height)} r={i%3*.6+.7} fill={P.white}/>)}</g>;
};
export const SurveyGrid:React.FC<{width?:number;height?:number}>=({width=1600,height=900})=><g stroke={P.muted} strokeWidth="1" opacity=".11">{Array.from({length:12},(_,i)=><path key={i} d={'M'+i*width/11+' 0V'+height+'M0 '+i*height/11+'H'+width}/>)}</g>;
export const RepairAsset:React.FC=()=> <g>
 <defs><clipPath id="joint-upper"><rect width="1536" height="462"/></clipPath><clipPath id="joint-lower"><rect y="462" width="1536" height="562"/></clipPath></defs>
 <g clipPath="url(#joint-lower)"><Asset name="joint" x={0} y={0} width={1536}/></g>
 <g data-shell><g clipPath="url(#joint-upper)"><Asset name="joint" x={0} y={0} width={1536}/></g></g>
 </g>;
export const SignalLine:React.FC<{d:string;width?:number}>=({d,width=9})=><g><path d={d} fill="none" stroke={P.night} strokeWidth={width+12} strokeLinecap="round"/><path data-signal-line d={d} pathLength={100} strokeDasharray="3 47" fill="none" stroke={P.orange} strokeWidth={width} strokeLinecap="round"/></g>;
