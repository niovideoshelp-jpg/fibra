import React from 'react';
import {AbsoluteFill,Sequence,useCurrentFrame,interpolate,Easing} from 'remotion';
import {Audio} from '@remotion/media';
import {Launch} from '../v2/scenes/Launch';
import {Orbit} from '../v2/scenes/Orbit';
import {Reversal} from '../v2/scenes/Reversal';
import {Coast} from '../v2/scenes/Coast';
import {World} from '../v2/scenes/World';
import {Traffic} from '../v2/scenes/Traffic';
import {Anatomy as Fiber} from './horizontal/Anatomy';
import {Abyss as Depth} from './horizontal/Abyss';
import {Laying} from './horizontal/Laying';
import {Impact} from '../v2/scenes/Impact';
import {Restore as Repair} from './horizontal/Restore';
import {AssetGate} from './gate';
import {Cloud} from '../v2/scenes/Cloud';
import {Arrival} from '../v2/scenes/Arrival';
export type FilmProps={audioSrc:string};
const shots=[
 {from:0,duration:111,C:Launch},{from:111,duration:199,C:Orbit},{from:310,duration:100,C:Reversal},
 {from:410,duration:205,C:Coast},{from:615,duration:390,C:World},{from:1005,duration:276,C:Traffic},
 {from:1281,duration:219,C:Fiber},{from:1500,duration:309,C:Depth},{from:1809,duration:270,C:Laying},
 {from:2079,duration:191,C:Impact},{from:2270,duration:262,C:Repair},{from:2532,duration:399,C:Cloud},
 {from:2931,duration:207,C:Arrival},
];
const SceneReveal:React.FC<{index:number;children:React.ReactNode}>=({index,children})=>{
 const frame=useCurrentFrame();
 const progress=interpolate(frame,[0,18],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.bezier(.22,.61,.36,1)});
 const dissolve=[1,4,6,9,12].includes(index);
 return <AbsoluteFill style={{opacity:index===0?1:dissolve?progress:1,maskImage:index===0||dissolve||progress===1?undefined:'linear-gradient(to top,black '+Math.max(0,progress*115-15)+'%,transparent '+(progress*115)+'%)',transform:index===0?'none':'translateY('+((1-progress)*10)+'px)'}}>{children}</AbsoluteFill>;
};
export const HorizontalFilm:React.FC<FilmProps>=({audioSrc})=>{
 return <AbsoluteFill><AssetGate/>
 {shots.map(({from,duration,C},index)=><Sequence from={from} durationInFrames={duration+(index<shots.length-1?18:0)} key={from}><SceneReveal index={index}><C/></SceneReveal></Sequence>)}
 {audioSrc?<Audio src={audioSrc}/>:null}
 </AbsoluteFill>;
};
