import React from 'react';
import {useGsapTimeline} from '@remotion/gsap';
import {Board,P} from '../../v2/kit';
import {RepairAsset,SurveyGrid} from '../shared';
export const Restore:React.FC=()=>{
 const route='M170 230C400 230 330 95 530 95H1090C1280 95 1210 230 1430 230';
 const scope=useGsapTimeline<SVGSVGElement>(({timeline:t,selector:s})=>{
 t.fromTo(s('[data-alt]'),{strokeDashoffset:100},{strokeDashoffset:0,duration:1.3,ease:'power2.inOut'},.25)
 .to(s('[data-pulse]'),{strokeDashoffset:-450,duration:8,ease:'none'},.7)
 .from(s('[data-detail]'),{y:90,opacity:0,duration:1,ease:'power3.out'},3.8)
 .from(s('[data-link]'),{opacity:0,duration:.6},4.3)
 .to(s('[data-shell]'),{y:174,duration:1.25,ease:'power2.inOut'},5.7)
 .to(s('[data-restored]'),{opacity:1,duration:.5},7)
 .from(s('[data-check]'),{scale:0,opacity:0,duration:.45,svgOrigin:'1370 670',ease:'power3.out'},7.2);
 });
 return <Board ref={scope} bg={P.white}><SurveyGrid/>
 <path d="M170 230H730M870 230H1430" stroke={P.night} strokeWidth="22" fill="none"/>
 <path data-alt d={route} pathLength={100} strokeDasharray="100" stroke={P.blue} strokeWidth="10" fill="none"/>
 <path data-pulse d={route} pathLength={100} strokeDasharray="4 46" stroke={P.orange} strokeWidth="6" fill="none"/>
 <path d="m756 208 88 44m-88 0 88-44" stroke={P.orange} strokeWidth="5"/>
 <path data-restored d="M725 230H875" stroke={P.cyan} strokeWidth="22" opacity="0"/>
 <path data-link d="M800 263V340" stroke={P.muted} strokeWidth="2" strokeDasharray="4 8"/>
 <g data-detail><g transform="translate(250 280) scale(.70)"><RepairAsset/></g></g>
 <g data-check><circle cx="1370" cy="670" r="34" fill={P.blue}/><path d="m1354 670 11 11 23-26" stroke={P.white} strokeWidth="6" fill="none" strokeLinecap="round"/></g>
 </Board>;
};
