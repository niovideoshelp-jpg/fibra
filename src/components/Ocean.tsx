import React from 'react';
import {C} from '../theme';
export const Ocean: React.FC<{width:number;height:number;surface?:number}> = ({width,height,surface=height*.52}) => <svg width={width} height={height} viewBox={'0 0 '+width+' '+height} style={{position:'absolute',inset:0}}>
  <defs><linearGradient id="water" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#1d5962"/><stop offset="1" stopColor="#041116"/></linearGradient></defs>
  <path d={'M0 '+surface+' Q'+width*.2+' '+(surface-18)+' '+width*.4+' '+surface+' T'+width+' '+surface+' V'+height+' H0Z'} fill="url(#water)"/>
  {[0,1,2,3].map(i=><path key={i} d={'M0 '+(surface+i*13)+' Q'+width*.2+' '+(surface-18+i*13)+' '+width*.4+' '+(surface+i*13)+' T'+width+' '+(surface+i*13)} fill="none" stroke={C.cyan} opacity={.42-i*.08} strokeWidth={2}/>)}
  <path d={'M0 '+height*.90+' Q'+width*.2+' '+height*.83+' '+width*.4+' '+height*.9+' T'+width+' '+height*.89+' V'+height+' H0Z'} fill="#163039"/>
  {[...Array(28)].map((_,i)=><circle key={i} cx={(i*157+71)%width} cy={surface+90+(i*119)%(Math.max(1,height-surface-140))} r={i%3+1} fill={C.cyan} opacity=".16"/>)}
</svg>;
