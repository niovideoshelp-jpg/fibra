import {bundle} from '@remotion/bundler';
import {selectComposition,renderStill} from '@remotion/renderer';
import {mkdir,writeFile} from 'node:fs/promises';
const serveUrl=await bundle({entryPoint:'src/index.ts'});
await mkdir('out/review',{recursive:true});
const frames=[210,480,820,1220,1370,1710,1920,2230,2420,2830,3070];
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
