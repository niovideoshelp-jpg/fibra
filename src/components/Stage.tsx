import React from 'react';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import {C, sans, serif} from '../theme';

export const Stage: React.FC<{children: React.ReactNode; chapter: string; light?: boolean}> = ({children, chapter, light = false}) => {
  const {width, height} = useVideoConfig();
  return <AbsoluteFill style={{background: light ? C.paper : C.ink, color: light ? C.ink : C.paper, fontFamily: sans, overflow: 'hidden'}}>
    <AbsoluteFill style={{opacity: .22, backgroundImage: 'radial-gradient(circle at 65% 40%, #23727b 0%, transparent 65%)'}}/>
    <svg width={width} height={height} style={{position: 'absolute', opacity: .07}}>
      <defs><pattern id={'grid-' + chapter} width="90" height="90" patternUnits="userSpaceOnUse"><path d="M90 0H0V90" fill="none" stroke={light ? C.ink : C.paper}/></pattern></defs>
      <rect width="100%" height="100%" fill={'url(#grid-' + chapter + ')'}/>
    </svg>
    <div style={{position: 'absolute', top: 60, left: 80, right: 80, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 19, letterSpacing: 4, fontWeight: 600}}>
      <span>FIBRA</span><span style={{opacity: .55}}>{chapter}</span>
    </div>
    {children}
    <div style={{position:'absolute',bottom:50,left:80,width:48,height:2,background:light?C.ink:C.cyan}}/>
  </AbsoluteFill>;
};
export const Headline: React.FC<{children: React.ReactNode; eyebrow?: string; top?: number; color?: string; size?: number}> = ({children, eyebrow, top = 180, color, size}) => {
  const {width,height} = useVideoConfig();
  const portrait = height > width;
  return <div data-heading style={{position:'absolute',top,left:80,right:80,zIndex:5,color}}>
    {eyebrow && <div style={{fontSize:22,letterSpacing:4,marginBottom:24,fontFamily:sans,fontWeight:600}}>{eyebrow}</div>}
    <div style={{fontFamily:serif,fontSize:size ?? (portrait?91:110),letterSpacing:-3,lineHeight:1.03,maxWidth:portrait?920:1420,fontWeight:400}}>{children}</div>
  </div>;
};
