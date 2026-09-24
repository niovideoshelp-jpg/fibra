import React from 'react';
export type IconName = 'message'|'video'|'phone'|'bank'|'server'|'anchor'|'quake'|'net'|'cloud'|'repair';
const paths: Record<IconName, React.ReactNode> = {
 message: <><path d="M12 17h72v48H42L23 83V65H12z"/><path d="M27 32h41M27 45h27"/></>,
 video: <><rect x="12" y="23" width="52" height="50" rx="9"/><path d="m64 40 23-13v44L64 58z"/></>,
 phone: <><path d="M27 13h17l7 23-12 8c7 12 13 18 25 25l8-12 20 9v17c-1 8-9 11-18 8C39 79 19 58 12 28c-2-9 5-15 15-15z"/></>,
 bank: <><path d="m10 32 38-22 38 22zM16 80h64M12 89h73M24 37v39M47 37v39M70 37v39"/></>,
 server: <><rect x="16" y="13" width="64" height="21" rx="3"/><rect x="16" y="40" width="64" height="21" rx="3"/><rect x="16" y="67" width="64" height="21" rx="3"/><path d="M25 24h4M25 51h4M25 78h4M43 24h27M43 51h27M43 78h27"/></>,
 anchor: <><circle cx="48" cy="18" r="10"/><path d="M48 28v57M28 39h40M13 57v13c8 17 23 22 35 15 12 7 27 2 35-15V57M13 57l-8 12M13 57l12 5M83 57l8 12M83 57l-12 5"/></>,
 quake: <><path d="m10 70 20-22 12 10 20-37 24 49M52 24l-7 28 14 8-13 29"/></>,
 net: <><path d="M12 13h73L73 85H24zM20 31h61M22 49h56M24 67h51M31 14l5 70M49 14v70M67 14l-5 70"/></>,
 cloud: <path d="M24 71C5 71 1 44 20 39c-2-23 33-35 45-12 29-8 40 33 15 43z"/>,
 repair: <><path d="M59 16a22 22 0 0 0-25 29L10 69l17 17 25-26a22 22 0 0 0 29-25L67 48 52 33z"/></>,
};
export const Icon: React.FC<{name:IconName; size?:number; color?:string}> = ({name,size=96,color='currentColor'}) =>
 <svg viewBox="0 0 96 96" width={size} height={size} fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
