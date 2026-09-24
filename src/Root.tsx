import React from 'react';
import {Composition} from 'remotion';
import {Film, FilmProps} from './Film';

const defaults: FilmProps = {audioSrc: ''};
export const Root: React.FC = () => (
  <>
    <Composition id="FibraHorizontal" component={Film} durationInFrames={3138} fps={30}
      width={1920} height={1080} defaultProps={defaults} />
    <Composition id="FibraVertical" component={Film} durationInFrames={3138} fps={30}
      width={1080} height={1920} defaultProps={defaults} />
  </>
);
