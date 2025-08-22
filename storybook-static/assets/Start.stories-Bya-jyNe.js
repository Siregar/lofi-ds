import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{M as r}from"./MockupContainer-DFlmSIB2.js";import{D as n}from"./DesktopLayout-yiv210Vh.js";import{S as m}from"./ScreenTitle-BnarTCY8.js";import{R as s}from"./RecentlyPlayed-Bw2G_Bcb.js";import{R as p}from"./Recommendation-BDkiUtjE.js";import{l as a}from"./lodash-UWXxMapT.js";import{M as d}from"./MobileLayout-CO9gnMa8.js";import{B as c}from"./ButtonGroup-BbFsyZ9O.js";import"./bundle-mjs-D6B6e0vX.js";import"./Diamond-Pm18YEpo.js";import"./SideNav-vbeBJvvs.js";import"./Cover-C2tgnAWT.js";import"./index-DutoEiXV.js";import"./Image-qcIvIx4z.js";import"./Library-D0IJtkQ0.js";import"./Search-ZGdxq2iL.js";import"./NavItem-CzvSy85_.js";import"./Text-9wmx06Py.js";import"./Header-DIqUgaVg.js";import"./ChevronRight-DTf5tONn.js";import"./IconButton-BZdQJsz1.js";import"./UserMenu-vPrcQzW1.js";import"./Dropdown-lzfVbiuM.js";import"./CaretDown-DkHk6BOk.js";import"./User-D3rec8TP.js";import"./SongControlBar-mK4LN5T6.js";import"./SongTitle-D97Skr4U.js";import"./Heart-D0JpPnO2.js";import"./VolumeControl-Dz5LAoxE.js";import"./ProgressBar-DUeLGzOv.js";import"./PlaybackControl-JI1d2kBb.js";import"./CaretRight-DpBg4uPu.js";import"./Card-DdNWjQzH.js";import"./iframe-Ccxzaw2-.js";import"./preload-helper-D9Z9MdNV.js";import"./TabBar-B4_ypxg5.js";import"./MiniSongControlBar-DTIDu-au.js";import"./Button-3PDmrxWv.js";const X={title:"Screens/Start"},t={render:()=>e.jsx(r,{device:"desktop",children:e.jsxs(n,{activeItemIndex:0,children:[e.jsx(m,{size:"large",textLength:40}),e.jsx(s,{textLength:30,className:"mb-4"}),a.times(5,i=>e.jsx(p,{textLength:20,className:"mb-4"},i))]})}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=1406-8562&mode=design&t=2wCJKB0RZhQTeUPc-4"}}},o={render:()=>e.jsx(r,{device:"mobile",children:e.jsxs(d,{headerSlot:()=>e.jsx(m,{size:"medium",textLength:40,numberOfActions:3}),stickySlot:()=>e.jsx(c,{numberOfButtons:2}),activeItemIndex:0,children:[e.jsx(s,{isMobile:!0,textLength:20}),a.times(5,i=>e.jsx(p,{isMobile:!0,textLength:30},i))]})}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=1406-10802&mode=design&t=2wCJKB0RZhQTeUPc-4"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <MockupContainer device="desktop">
      <DesktopLayout activeItemIndex={0}>
        <ScreenTitle size="large" textLength={40} />
        <RecentlyPlayed textLength={30} className="mb-4" />
        {times(5, i => <Recommendation key={i} textLength={20} className="mb-4" />)}
      </DesktopLayout>
    </MockupContainer>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=1406-8562&mode=design&t=2wCJKB0RZhQTeUPc-4'
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <MockupContainer device="mobile">
      <MobileLayout headerSlot={() => <ScreenTitle size="medium" textLength={40} numberOfActions={3} />} stickySlot={() => <ButtonGroup numberOfButtons={2} />} activeItemIndex={0}>
        <RecentlyPlayed isMobile textLength={20} />
        {times(5, i => <Recommendation key={i} isMobile textLength={30} />)}
      </MobileLayout>
    </MockupContainer>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=1406-10802&mode=design&t=2wCJKB0RZhQTeUPc-4'
    }
  }
}`,...o.parameters?.docs?.source}}};const Y=["desktop","Mobile"];export{o as Mobile,Y as __namedExportsOrder,X as default,t as desktop};
