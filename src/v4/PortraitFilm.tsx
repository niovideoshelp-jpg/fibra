import React from 'react';
import {AbsoluteFill,Sequence,useCurrentFrame,interpolate,Easing} from 'remotion';
import {Audio} from '@remotion/media';
import {Send,SpaceToEarth,Descent} from './portrait/Opening';
import {Connections,DataFlow,AnatomyVertical} from './portrait/Network';
import {AbyssVertical,DeployVertical,HazardsVertical} from './portrait/Ocean';
import {RestoreVertical,PhysicalVertical,Receive} from './portrait/Ending';
import {AssetGate} from './gate';
export type PortraitProps={audioSrc:string};
const shots=[
 {from:0,duration:111,C:Send},{from:111,duration:299,C:SpaceToEarth},
 {from:410,duration:205,C:Descent},{from:615,duration:390,C:Connections},
 {from:1005,duration:276,C:DataFlow},{from:1281,duration:219,C:AnatomyVertical},
 {from:1500,duration:309,C:AbyssVertical},{from:1809,duration:270,C:DeployVertical},
 {from:2079,duration:191,C:HazardsVertical},{from:2270,duration:262,C:RestoreVertical},
 {from:2532,duration:399,C:PhysicalVertical},{from:2931,duration:207,C:Receive}
];
const Passage:React.FC<{first:boolean;children:React.ReactNode}>=({first,children})=>{
 const f=useCurrentFrame();const p=interpolate(f,[0,14],[0,1],{extrapolateRight:'clamp',easing:Easing.bezier(.22,.61,.36,1)});
 return <AbsoluteFill style={{opacity:first?1:p,transform:first?'none':'translateY('+((1-p)*22)+'px)'}}>{children}</AbsoluteFill>;
};
export const PortraitFilm:React.FC<PortraitProps>=({audioSrc})=><AbsoluteFill><AssetGate/>
 {shots.map(({from,duration,C},i)=><Sequence key={from} from={from} durationInFrames={duration+(i<11?14:0)}><Passage first={i===0}><C/></Passage></Sequence>)}
 {audioSrc?<Audio src={audioSrc}/>:null}
 </AbsoluteFill>;
