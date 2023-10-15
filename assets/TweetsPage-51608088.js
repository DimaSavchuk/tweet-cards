import{a as c,u as S,c as v,s,r as x,j as t,b as w,d as C,g as k,e as y}from"./index-2c4ecca9.js";import{C as F,a as L,b as B,T as I,S as R}from"./TweetsPageStyled-5016e119.js";function m(e=c){const n=e===c?S:v(e);return function(){const{store:i}=n();return i}}const U=m();function A(e=c){const n=e===c?U:m(e);return function(){return n().dispatch}}const D=A(),T="/tweet-cards/assets/CardBgImg-05d8e022.png",$=s.li`
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
`,E=s.img`
  width: 308px;
  height: 168px;

  margin-bottom: 88px;
`,H=s.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`,z=s.div`
  height: 80px;
  width: 80px;
  border: 8px;
  border-radius: 50%;

  background: #ebd8ff;
  box-shadow:
    0px 3.43693px 2.5777px 0px #fbf8ff inset,
    0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06),
    0px -1.71846px 3.43693px 0px #ae7be3 inset;
`,G=s.div`
  width: 62px;
  height: 62px;

  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,M=s.img`
  width: 100%;
  border-radius: 50%;
`,W=s.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;

  align-items: center;
  gap: 10px;
`,P=s.ul``,b=s.li`
  color: #ebd8ff;

  font-size: 20px;
  font-weight: 500;
  font-style: normal;

  text-transform: uppercase;

  padding-bottom: 16px;
`,V=s.button`
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
`,_=({userData:e,isFollowing:n,followUpdate:l})=>{const{id:i,user:p,tweets:a,followers:d,avatar:f}=e??{},[r,u]=x.useState(n),g=()=>{u(!r),l(i,!r)};return t.jsxs($,{children:[t.jsx(E,{src:T,alt:"bg"}),t.jsx(H,{children:t.jsx(z,{children:t.jsx(G,{children:t.jsx(M,{src:f})})})}),t.jsxs(W,{children:[t.jsxs(P,{children:[t.jsx(b,{children:`${a} tweets`}),t.jsx(b,{children:`${r?(d+1).toLocaleString("es-US"):d.toLocaleString("es-US")} followers`})]}),t.jsx(V,{onClick:g,style:{backgroundColor:r?"#5CD3A8":"#EBD8FF"},children:r?"Unfollow":"Follow"})]})]},i)},q=s.div`
  position: ${({position:e})=>e||"static"};
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  flex-direction: column;

  gap: 50px;
  align-items: center;

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
`,J=e=>e.users.users,K=e=>e.users.isLoading,Q=()=>{var h;const[e,n]=x.useState(3),[l,i]=x.useState("show all"),p=D(),a=w(J),d=w(o=>o.followingStatus),f=C(),r=x.useRef(((h=f.state)==null?void 0:h.from)??"/");x.useEffect(()=>{p(k())},[p]);const u=async(o,j)=>{await p(y({id:o,ifFollowing:j}))},g=()=>{switch(l){case"follow":return a.filter(o=>d[o.id]);case"followings":return a.filter(o=>!d[o.id]);default:return a}};return t.jsxs(q,{children:[t.jsxs(F,{children:[t.jsx(L,{to:r.current,children:"To Home"}),t.jsxs(B,{value:l,onChange:o=>i(o.target.value),children:[t.jsx("option",{value:"show all",children:"All"}),t.jsx("option",{value:"follow",children:"Follow"}),t.jsx("option",{value:"followings",children:"Followings"})]})]}),K?t.jsx("div",{children:"Loading..."}):t.jsx(I,{children:a&&a.slice(0,e).map(o=>t.jsx(_,{userData:o,isFollowing:d[o.id],followUpdate:u},o.id))}),e<g().length&&t.jsx(R,{onClick:()=>n(e+3),children:"Load More"})]})};export{Q as default};
