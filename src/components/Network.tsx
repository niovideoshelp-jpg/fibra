import React from 'react';
import {C} from '../theme';
export const Network: React.FC<{width:number;height:number; broken?:boolean}> = ({width,height,broken=false}) => {
 const nodes=[[.10,.63],[.24,.24],[.43,.76],[.52,.33],[.73,.65],[.89,.25]];
 const edges=[[0,1],[0,2],[0,3],[1,3],[2,3],[2,4],[3,4],[3,5],[4,5]];
 return <svg viewBox="0 0 1000 650" width={width} height={height} style={{overflow:'visible'}}>
 <circle cx="500" cy="330" r="310" fill="none" stroke={C.paper} opacity=".08"/>
 <ellipse cx="500" cy="330" rx="155" ry="310" fill="none" stroke={C.paper} opacity=".08"/>
 <ellipse cx="500" cy="330" rx="310" ry="120" fill="none" stroke={C.paper} opacity=".08"/>
 {edges.map(([a,b],i)=>{const x1=nodes[a][0]*1000,y1=nodes[a][1]*650,x2=nodes[b][0]*1000,y2=nodes[b][1]*650;
 return <g key={i}><path data-route pathLength={100} d={'M'+x1+' '+y1+' Q'+(x1+x2)/2+' '+((y1+y2)/2-70)+' '+x2+' '+y2} fill="none" stroke={broken&&i===3?C.danger:C.cyan} strokeWidth={broken&&i===3?4:2.5} opacity={broken&&i===3?.25:.65}/>
 <path data-pulse pathLength={100} strokeDasharray="3 97" d={'M'+x1+' '+y1+' Q'+(x1+x2)/2+' '+((y1+y2)/2-70)+' '+x2+' '+y2} fill="none" stroke={C.paper} strokeWidth={4}/></g>;})}
 {nodes.map(([x,y],i)=><g key={i} data-node><circle cx={x*1000} cy={y*650} r={19} fill={C.ink} stroke={C.cyan} strokeWidth={2}/><circle cx={x*1000} cy={y*650} r={5} fill={C.cyan}/></g>)}
 </svg>;
};
