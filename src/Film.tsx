import React from 'react';
import {AbsoluteFill,Audio} from 'remotion';
import {TransitionSeries} from '@remotion/transitions';
import {Intro} from './scenes/Intro';
import {Descent} from './scenes/Descent';
import {Connections} from './scenes/Connections';
import {Traffic} from './scenes/Traffic';
import {Light} from './scenes/Light';
import {Seabed} from './scenes/Seabed';
import {Ships} from './scenes/Ships';
import {Risks} from './scenes/Risks';
import {Reroute} from './scenes/Reroute';
import {Cloud} from './scenes/Cloud';
import {Ending} from './scenes/Ending';
export type FilmProps={audioSrc:string};
export const Film:React.FC<FilmProps>=({audioSrc})=><AbsoluteFill>
 <TransitionSeries>
  <TransitionSeries.Sequence durationInFrames={410} name="01 Mensagem"><Intro/></TransitionSeries.Sequence>
  <TransitionSeries.Sequence durationInFrames={205} name="02 Descida"><Descent/></TransitionSeries.Sequence>
  <TransitionSeries.Sequence durationInFrames={390} name="03 Continentes"><Connections/></TransitionSeries.Sequence>
  <TransitionSeries.Sequence durationInFrames={276} name="04 Informacao"><Traffic/></TransitionSeries.Sequence>
  <TransitionSeries.Sequence durationInFrames={219} name="05 Luz"><Light/></TransitionSeries.Sequence>
  <TransitionSeries.Sequence durationInFrames={309} name="06 Fundo do oceano"><Seabed/></TransitionSeries.Sequence>
  <TransitionSeries.Sequence durationInFrames={270} name="07 Navios"><Ships/></TransitionSeries.Sequence>
  <TransitionSeries.Sequence durationInFrames={191} name="08 Riscos"><Risks/></TransitionSeries.Sequence>
  <TransitionSeries.Sequence durationInFrames={262} name="09 Desvio"><Reroute/></TransitionSeries.Sequence>
  <TransitionSeries.Sequence durationInFrames={399} name="10 Nuvem"><Cloud/></TransitionSeries.Sequence>
  <TransitionSeries.Sequence durationInFrames={207} name="11 Real"><Ending/></TransitionSeries.Sequence>
 </TransitionSeries>
 {audioSrc ? <Audio src={audioSrc}/> : null}
</AbsoluteFill>;
