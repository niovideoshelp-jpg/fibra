import React,{useState,useEffect} from 'react';
import {delayRender,continueRender,cancelRender,staticFile} from 'remotion';
export const AssetGate:React.FC=()=>{
 const [handle]=useState(()=>delayRender('Carregando ilustrações documentais'));
 useEffect(()=>{let disposed=false;Promise.all(['cutaway','seabed','rov','joint'].map(n=>new Promise<void>((resolve,reject)=>{const i=new window.Image();i.onload=()=>resolve();i.onerror=()=>reject(new Error('Falha em '+n));i.src=staticFile('images/v4-'+n+'.png');}))).then(()=>{if(!disposed)continueRender(handle);}).catch(cancelRender);return()=>{disposed=true;};},[handle]);return null;
};
