import {bundle} from '@remotion/bundler';
import {selectComposition,renderStill} from '@remotion/renderer';
import {mkdir,writeFile} from 'node:fs/promises';
const serveUrl=await bundle({entryPoint:'src/index.ts'});
await mkdir('out/review',{recursive:true});
const frames=[60,210,375,520,810,1220,1385,1720,1940,2205,2450,2820,3070,1340,1400,1470,2095,2154,2238];
const results=[];
for(const id of ['FibraHorizontal','FibraVertical']){
 const composition=await selectComposition({serveUrl,id,inputProps:{audioSrc:''}});
 for(let i=0;i<frames.length;i++){
  const file='out/review/'+id+'-scene-'+String(i+1).padStart(2,'0')+'.png';
  await renderStill({serveUrl,composition,output:file,frame:frames[i],inputProps:{audioSrc:''},scale:.5});
  results.push({file,frame:frames[i],composition:id});
  console.log('RENDERED '+file);
 }
}
await writeFile('out/review/manifest.json',JSON.stringify(results,null,2));
