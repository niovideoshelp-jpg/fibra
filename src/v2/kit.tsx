import React from 'react';
import {AbsoluteFill,useVideoConfig} from 'remotion';
export const P={blue:'#1249F3',night:'#080F2B',ink:'#101B43',white:'#FFF9E9',orange:'#FF6B35',cyan:'#58EBD1',muted:'#819CFF',sea:'#06299D',deep:'#030A23',sand:'#FFD4A5'};
export const useBoard=()=>{const {width,height}=useVideoConfig();const p=height>width;return {p,W:p?1000:1600,H:p?1777.778:900};};
export const Board=React.forwardRef<SVGSVGElement,{children:React.ReactNode;bg?:string}>(({children,bg=P.blue},ref)=>{
 const {W,H}=useBoard();
 return <AbsoluteFill style={{background:bg,overflow:'hidden'}}><svg ref={ref} viewBox={'0 0 '+W+' '+H} width="100%" height="100%" style={{overflow:'hidden'}}>
 <defs>
 <linearGradient id="steel" x1="0" x2="1"><stop stopColor="#405475"/><stop offset=".4" stopColor="#D6E0EC"/><stop offset=".55" stopColor="#647592"/><stop offset="1" stopColor="#1B2C50"/></linearGradient>
 <linearGradient id="copper" x1="0" x2="1"><stop stopColor="#743426"/><stop offset=".35" stopColor="#FFC395"/><stop offset=".6" stopColor="#9B432A"/><stop offset="1" stopColor="#FFC395"/></linearGradient>
 <linearGradient id="depth" x1="0" x2="0" y1="0" y2="1"><stop stopColor={P.blue}/><stop offset="1" stopColor={P.deep}/></linearGradient>
 <radialGradient id="beam"><stop stopColor={P.white} stopOpacity=".9"/><stop offset=".25" stopColor={P.orange} stopOpacity=".7"/><stop offset="1" stopColor={P.orange} stopOpacity="0"/></radialGradient>
 </defs>
 {children}
 </svg></AbsoluteFill>;
});
export const Message:React.FC=()=> <g><path d="M-65-44H65Q85-44 85-24V27Q85 45 63 45H-30L-68 70V44Q-85 44-85 25V-23Q-85-44-65-44Z" fill={P.orange} stroke={P.night} strokeWidth="6"/><path d="M-63-26H58" stroke={P.white} strokeOpacity=".55" strokeWidth="5" strokeLinecap="round"/>{[-32,0,32].map(x=><circle key={x} cx={x} cy="8" r="8" fill={P.white}/>)}</g>;
export const Phone:React.FC=()=> <g>
 <rect x="-155" y="-285" width="310" height="565" rx="47" fill={P.night}/><rect x="-137" y="-267" width="274" height="532" rx="33" fill={P.white}/>
 <path d="M-62-267H62V-246Q62-231 45-231H-45Q-62-231-62-246Z" fill={P.night}/><circle cx="40" cy="-249" r="5" fill={P.blue}/>
 <rect x="-110" y="-201" width="37" height="37" rx="18" fill={P.blue}/><rect x="-55" y="-195" width="145" height="9" rx="4" fill={P.muted}/><rect x="-55" y="-179" width="79" height="7" rx="3" fill={P.muted} opacity=".5"/>
 <rect x="-107" y="-125" width="142" height="65" rx="19" fill="#DEE5FF"/><path d="M-86-102H6M-86-85H-10" stroke={P.muted} strokeWidth="8" strokeLinecap="round"/>
 <g data-phone-bubble transform="translate(25 15) scale(.65)"><Message/></g>
 <g data-phone-tick opacity="0"><path d="m35 99 18 17 39-43" stroke={P.blue} strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round"/></g>
 <rect x="-109" y="197" width="218" height="37" rx="18" fill="#DEE5FF"/><circle cx="87" cy="215" r="12" fill={P.blue}/><path d="M-38 253H38" stroke={P.night} strokeWidth="5" strokeLinecap="round"/>
 <path d="M-155-183V-120M-155-95V-42M155-130V-55" stroke={P.muted} strokeWidth="5" strokeLinecap="round"/>
 </g>;
export const CloudShape:React.FC=()=> <g><path d="M-260 100C-340 100-350-25-267-51C-274-196-53-232 12-125C122-217 285-90 241 5C350 24 327 149 241 153H-230Z" fill={P.night} opacity=".2" transform="translate(14 23)"/><path d="M-260 100C-340 100-350-25-267-51C-274-196-53-232 12-125C122-217 285-90 241 5C350 24 327 149 241 153H-230Z" fill={P.white}/><path d="M-250 64H183" stroke="#DDE7FF" strokeWidth="23" strokeLinecap="round"/></g>;
export const Reel:React.FC=()=> <g data-reel><circle r="54" fill={P.night}/><circle r="45" fill={P.orange}/>{Array.from({length:12},(_,i)=><path key={i} d="M0-9V-43" transform={'rotate('+i*30+')'} stroke={P.night} strokeWidth="5"/>)}<circle r="12" fill={P.white}/><circle r="5" fill={P.night}/></g>;
export const Ship:React.FC=()=> <g>
 <path d="M-313 61H316L260 151H-221Q-280 144-313 61Z" fill={P.night}/><path d="M-292 91H298L283 116H-270Z" fill={P.orange}/>
 <path d="M-316 55H312L333 38H-323Z" fill={P.white}/><path d="M-325 42H330" stroke={P.night} strokeWidth="9"/>
 <path d="M106 38V-81H242L253 38Z" fill="#DCE6FF" stroke={P.night} strokeWidth="4"/><path d="M84-87H253V-66H84Z" fill="#DCE6FF" stroke={P.night} strokeWidth="4"/><path d="M138-106H221V-87H138Z" fill="#DCE6FF" stroke={P.night} strokeWidth="4"/>
 <path d="M115-62H237V-31H115Z" fill={P.blue}/>{[130,165,200,230].map(x=><path key={x} d={'M'+x+'-61V-32'} stroke={P.night} strokeWidth="5"/>)}
 <path d="M181-106V-205M145-165H224M163-188H208" stroke={P.night} strokeWidth="6"/><circle cx="197" cy="-188" r="10" fill={P.white}/><path d="M209-193V-216" stroke={P.orange} strokeWidth="6"/>
 <path d="M-287 39V-109H-192V-92H-265V39" fill="#DCE6FF" stroke={P.night} strokeWidth="4"/><path d="M-240-94-202 25M-272-94-289 25" stroke={P.orange} strokeWidth="10"/>
 <g transform="translate(-120 -13)"><Reel/></g><g transform="translate(7 -13)"><Reel/></g>
 {[-205,-150,-95,-40,15,70,125,180,235].map(x=><circle key={x} cx={x} cy="77" r="5" fill={P.white}/>)}
 <path d="M-220 26H65V37H-220Z" fill={P.muted}/><path d="M-230 14H72M-230-2H72" stroke={P.white} strokeWidth="4"/>
 </g>;
export const CableFace:React.FC=()=> <g>
 <g data-jacket><circle r="232" fill={P.night} stroke="#566787" strokeWidth="10"/></g>
 <g data-armor><circle r="210" fill="#415272"/>{Array.from({length:38},(_,i)=><circle key={i} cx={193*Math.cos(i*Math.PI/19)} cy={193*Math.sin(i*Math.PI/19)} r="13" fill="url(#steel)" stroke={P.night} strokeWidth="2"/>)}</g>
 <g data-copper><circle r="169" fill="url(#copper)"/></g><g data-liner><circle r="146" fill={P.white}/></g><circle r="131" fill={P.night}/>
 <g data-fiber-group>{Array.from({length:19},(_,i)=>{const ring=i===0?0:i<7?1:2;const j=i===0?0:i<7?i-1:i-7;const n=ring===1?6:12;const a=j*Math.PI*2/n;return <g key={i} data-fiber><circle cx={Math.cos(a)*ring*43} cy={Math.sin(a)*ring*43} r="17" fill="#174BA0" stroke={P.cyan} strokeWidth="4"/><circle cx={Math.cos(a)*ring*43-4} cy={Math.sin(a)*ring*43-4} r="6" fill={P.white}/></g>;})}</g>
 </g>;
export const DataCard:React.FC<{kind:number}> =({kind})=><g>
 <rect x="-128" y="-91" width="256" height="182" rx="20" fill={P.night} transform="translate(13 15)"/>
 <rect x="-128" y="-91" width="256" height="182" rx="20" fill={P.white} stroke={P.night} strokeWidth="5"/>
 <path d="M-127-52H127" stroke={P.night} strokeWidth="4"/>{[-104,-86,-68].map(x=><circle key={x} cx={x} cy="-72" r="5" fill={P.orange}/>)}
 {kind===0?<><rect x="-102" y="-34" width="204" height="104" rx="7" fill={P.blue}/><path d="m-18-16 51 32-51 32Z" fill={P.white}/></>:kind===1?<><path d="M-80 22H-67L-51-11-30 61-9-26 11 44 31-4 46 23H83" fill="none" stroke={P.blue} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/></>:kind===2?<><circle cy="15" r="49" fill={P.orange}/><path d="M-20-10H13Q33-10 33 6T13 22H-16Q-33 22-30 39H25M0-34V63" fill="none" stroke={P.white} strokeWidth="10"/></>:<>{[-25,10,45].map(y=><g key={y}><rect x="-88" y={y} width="176" height="27" rx="6" fill={P.blue}/><circle cx="-71" cy={y+13} r="5" fill={P.cyan}/><path d={'M-45 '+(y+13)+'H62'} stroke={P.white} opacity=".55" strokeWidth="5"/></g>)}</>}
 </g>;
export const Anchor:React.FC=()=> <g><circle cy="-108" r="25" fill="none" stroke="url(#steel)" strokeWidth="18"/><path d="M0-83V132M-53-49H53M-102 47Q-100 158 0 132Q101 157 103 47M-102 47-126 86M-102 47-62 63M103 47 125 88M103 47 64 64" fill="none" stroke="url(#steel)" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round"/></g>;
export const Seabed:React.FC<{W:number;H:number}> =({W,H})=><g>
 <path d={'M-400 '+H*.76+'Q'+W*.13+' '+H*.57+' '+W*.46+' '+H*.8+'T'+(W+400)+' '+H*.7+'V'+(H+400)+'H-400Z'} fill="#072269"/>
 <path d={'M-400 '+H*.86+'Q'+W*.18+' '+H*.73+' '+W*.51+' '+H*.88+'T'+(W+400)+' '+H*.79+'V'+(H+400)+'H-400Z'} fill="#16357E"/>
 <path d={'M-400 '+H*.96+'Q'+W*.22+' '+H*.82+' '+W*.5+' '+H*.97+'T'+(W+400)+' '+H*.9+'V'+(H+400)+'H-400Z'} fill={P.deep}/>
 {Array.from({length:40},(_,i)=><circle key={i} cx={(i*137+67)%W} cy={H*.4+(i*71)%(H*.5)} r={i%4+1.5} fill={P.cyan} opacity=".17"/>)}
 </g>;
