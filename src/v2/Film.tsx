import React,{useEffect,useState} from 'react';
import {AbsoluteFill,Sequence,useCurrentFrame,interpolate,Easing,continueRender,delayRender,staticFile,cancelRender} from 'remotion';
import {Audio} from '@remotion/media';
import {Launch} from './scenes/Launch';
import {Orbit} from './scenes/Orbit';
import {Reversal} from './scenes/Reversal';
import {Coast} from './scenes/Coast';
import {World} from './scenes/World';
import {Traffic} from './scenes/Traffic';
import {Fiber} from './scenes/Fiber';
import {Depth} from './scenes/Depth';
import {Laying} from './scenes/Laying';
import {Impact} from './scenes/Impact';
import {Repair} from './scenes/Repair';
import {Cloud} from './scenes/Cloud';
import {Arrival} from './scenes/Arrival';
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
 return <AbsoluteFill style={{opacity:index===0?1:dissolve?progress:1,clipPath:index===0||dissolve?undefined:'inset('+(100-progress*100)+'% 0 0 0)',transform:index===0?'none':'translateY('+((1-progress)*10)+'px)'}}>{children}</AbsoluteFill>;
};
export const Film:React.FC<FilmProps>=({audioSrc})=>{
 const [handle]=useState(()=>delayRender('Carregando recortes transparentes'));
 useEffect(()=>{
  let cancelled=false;
  Promise.all(['cable.png','satellite.png'].map(file=>new Promise<void>((resolve,reject)=>{const img=new window.Image();img.onload=()=>resolve();img.onerror=()=>reject(new Error('Falha ao carregar '+file));img.src=staticFile('images/'+file);}))).then(()=>{if(!cancelled)continueRender(handle);}).catch(cancelRender);
  return()=>{cancelled=true;};
 },[handle]);
 return <AbsoluteFill>
 {shots.map(({from,duration,C},index)=><Sequence from={from} durationInFrames={duration+(index<shots.length-1?18:0)} key={from}><SceneReveal index={index}><C/></SceneReveal></Sequence>)}
 {audioSrc?<Audio src={audioSrc}/>:null}
 </AbsoluteFill>;
};
