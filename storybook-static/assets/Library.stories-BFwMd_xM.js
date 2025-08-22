import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{M as r}from"./MockupContainer-DFlmSIB2.js";import{D as p}from"./DesktopLayout-yiv210Vh.js";import{B as i}from"./ButtonGroup-BbFsyZ9O.js";import{O as m}from"./Overview-D_rTtNnI.js";import{M as a}from"./MobileLayout-CO9gnMa8.js";import{S as s}from"./ScreenTitle-BnarTCY8.js";import"./bundle-mjs-D6B6e0vX.js";import"./Diamond-Pm18YEpo.js";import"./SideNav-vbeBJvvs.js";import"./lodash-UWXxMapT.js";import"./iframe-Ccxzaw2-.js";import"./preload-helper-D9Z9MdNV.js";import"./Cover-C2tgnAWT.js";import"./index-DutoEiXV.js";import"./Image-qcIvIx4z.js";import"./Library-D0IJtkQ0.js";import"./Search-ZGdxq2iL.js";import"./NavItem-CzvSy85_.js";import"./Text-9wmx06Py.js";import"./Header-DIqUgaVg.js";import"./ChevronRight-DTf5tONn.js";import"./IconButton-BZdQJsz1.js";import"./UserMenu-vPrcQzW1.js";import"./Dropdown-lzfVbiuM.js";import"./CaretDown-DkHk6BOk.js";import"./User-D3rec8TP.js";import"./SongControlBar-mK4LN5T6.js";import"./SongTitle-D97Skr4U.js";import"./Heart-D0JpPnO2.js";import"./VolumeControl-Dz5LAoxE.js";import"./ProgressBar-DUeLGzOv.js";import"./PlaybackControl-JI1d2kBb.js";import"./CaretRight-DpBg4uPu.js";import"./Button-3PDmrxWv.js";import"./Card-DdNWjQzH.js";import"./TabBar-B4_ypxg5.js";import"./MiniSongControlBar-DTIDu-au.js";const Z={title:"Screens/Library"},t={render:()=>e.jsx(r,{device:"desktop",children:e.jsxs(p,{activeItemIndex:2,headerSlot:()=>e.jsx(i,{noMargin:!0,numberOfButtons:4}),children:[e.jsx(s,{size:"medium",textLength:40,hasSearch:!0,hasDropdown:!0}),e.jsx(m,{})]})}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=1406-6746&mode=design&t=2wCJKB0RZhQTeUPc-4"}}},o={render:()=>e.jsx(r,{device:"mobile",children:e.jsx(a,{headerSlot:()=>e.jsx(s,{hasUser:!0,size:"medium",variant:"light",textLength:40,numberOfActions:2}),stickySlot:()=>e.jsx(i,{numberOfButtons:2}),activeItemIndex:2,children:e.jsx(m,{isMobile:!0})})}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WeAreDevelopers-Spotify-Demo?type=design&node-id=1406-9512&mode=design"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <MockupContainer device="desktop">
      <DesktopLayout activeItemIndex={2} headerSlot={() => <ButtonGroup noMargin numberOfButtons={4} />}>
        <ScreenTitle size="medium" textLength={40} hasSearch hasDropdown />
        <Overview />
      </DesktopLayout>
    </MockupContainer>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WAD-Spotify-Demo?type=design&node-id=1406-6746&mode=design&t=2wCJKB0RZhQTeUPc-4'
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <MockupContainer device="mobile">
      <MobileLayout headerSlot={() => <ScreenTitle hasUser size="medium" variant="light" textLength={40} numberOfActions={2} />} stickySlot={() => <ButtonGroup numberOfButtons={2} />} activeItemIndex={2}>
        <Overview isMobile />
      </MobileLayout>
    </MockupContainer>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uNfItH7AROAE9pf8RVHvtc/WeAreDevelopers-Spotify-Demo?type=design&node-id=1406-9512&mode=design'
    }
  }
}`,...o.parameters?.docs?.source}}};const _=["Desktop","Mobile"];export{t as Desktop,o as Mobile,_ as __namedExportsOrder,Z as default};
