import{s as e,r as n,j as t,u as m}from"./index-9a0dc60d.js";e.div`
  width: 100%;
  height: 100vh;
`;const u=e.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 48px;
`,b="/tweet-cards/assets/CardBgImg-05d8e022.png",j=e.li`
  position: relative;
  /* width: 380px; */
  /* height: 460px; */

  padding: 28px 36px;
  border-radius: 20px;

  background: linear-gradient(
    115deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.62157px 0px rgba(0, 0, 0, 0.23);

  &::after {
    position: absolute;
    right: 0;
    top: 50%;

    content: '';
    height: 8px;
    width: 100%;
    flex-shrink: 0;

    background: #ebd8ff;
    box-shadow:
      0px 3.43693px 2.5777px 0px #fbf8ff inset,
      0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06),
      0px -1.71846px 3.43693px 0px #ae7be3 inset;

    transform: translate(0, -50%);
  }
`,v=e.img`
  width: 308px;
  height: 168px;

  margin-bottom: 88px;
`,y=e.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`,C=e.div`
  height: 80px;
  width: 80px;
  border: 8px;
  border-radius: 50%;

  background: #ebd8ff;
  box-shadow:
    0px 3.43693px 2.5777px 0px #fbf8ff inset,
    0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06),
    0px -1.71846px 3.43693px 0px #ae7be3 inset;
`,S=e.div`
  width: 62px;
  height: 62px;

  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,k=e.img`
  width: 100%;
  border-radius: 50%;
`,I=e.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;

  align-items: center;
  gap: 10px;
`,F=e.ul``,f=e.li`
  color: #ebd8ff;

  font-size: 20px;
  font-weight: 500;
  font-style: normal;

  text-transform: uppercase;

  padding-bottom: 16px;
`,A=e.button`
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);

  width: 196px;
  padding: 14px 28px;
  border-radius: 10.3px;

  border: none;

  font-family: inherit;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;

  margin-bottom: 8px;
`,B=({userData:o})=>{const{id:x,user:s,tweets:i,followers:d,avatar:g}=o??{},[r,h]=n.useState(!1),[a,l]=n.useState(d);let p=d.toLocaleString("en-US");const w=()=>{l(r?a-1:a+1),h(!r)};return n.useEffect(()=>{const c=a.toLocaleString("en-US");c!==p&&(p=c)},[a]),t.jsxs(j,{children:[t.jsx(v,{src:b,alt:"bg"}),t.jsx(y,{children:t.jsx(C,{children:t.jsx(S,{children:t.jsx(k,{src:g})})})}),t.jsxs(I,{children:[t.jsxs(F,{children:[t.jsx(f,{children:`${i} tweets`}),t.jsx(f,{children:`${p} followers`})]}),t.jsx(A,{onClick:w,children:r?"Unfollow":"Follow"})]})]},x)},E=e.div`
  position: ${({position:o})=>o||"static"};
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 375px) {
    max-width: 375px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    max-width: 768px;
  }

  @media (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
    max-width: 1440px;
  }
`,T=()=>{const[o,x]=n.useState(1),{data:s}=m(o);return console.log(s),n.useEffect(()=>{},[o]),t.jsx(E,{children:t.jsx(u,{children:s&&s.map(i=>t.jsx(B,{userData:i},i.id))})})};export{T as default};
