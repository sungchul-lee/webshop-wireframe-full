import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./react-dom-CwkDzVs4.js";import{On as n,o as r,s as i}from"./iframe-CT6OUoJY.js";function a({text:e}){return e.split(`
`).map((e,t)=>(0,c.jsxs)(s.Fragment,{children:[t>0&&(0,c.jsx)(`br`,{}),e]},t))}function o({blocks:e}){return(0,c.jsx)(`div`,{className:`flex flex-col gap-3`,children:e.map((e,t)=>{switch(e.type){case`heading`:{let n=`h${e.level}`;return(0,c.jsx)(n,{className:r(`font-heading font-semibold`,l[e.level]),children:e.text},t)}case`paragraph`:return(0,c.jsx)(`p`,{className:r(u[e.align??`left`],e.bold&&`font-bold`,e.italic&&`italic`,e.underline&&`underline`),children:(0,c.jsx)(a,{text:e.text})},t);case`list`:{let n=e.ordered?`ol`:`ul`;return(0,c.jsx)(n,{className:r(`flex flex-col gap-1 pl-6`,e.ordered?`list-decimal`:`list-disc`),children:e.items.map((e,t)=>(0,c.jsx)(`li`,{children:e},t))},t)}case`link`:return(0,c.jsx)(`p`,{children:(0,c.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noreferrer`,className:`text-primary underline underline-offset-4`,children:e.text})},t)}})})}var s,c,l,u;function d(){return(d=e((()=>{s=t(),i(),c=n(),l={1:`text-2xl`,2:`text-xl`,3:`text-lg`},u={left:`text-left`,center:`text-center`,right:`text-right`},o.__docgenInfo={description:`서식 있는 텍스트 편집기로 작성한 내용을 서식 그대로 보여 준다(점검 화면 내용 등). 링크는 새 창으로 연다.
운영자가 작성한 콘텐츠 자체를 렌더링하므로 제목·문단·목록·링크를 의미 요소로 그린다.`,methods:[],displayName:`RichContent`,props:{blocks:{required:!0,tsType:{name:`Array`,elements:[{name:`union`,raw:`| { type: 'heading'; level: 1 | 2 | 3; text: string }
| {
    type: 'paragraph';
    text: string;
    align?: 'left' | 'center' | 'right';
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
  }
| { type: 'list'; ordered: boolean; items: string[] }
| { type: 'link'; text: string; href: string }`,elements:[{name:`signature`,type:`object`,raw:`{ type: 'heading'; level: 1 | 2 | 3; text: string }`,signature:{properties:[{key:`type`,value:{name:`literal`,value:`'heading'`,required:!0}},{key:`level`,value:{name:`union`,raw:`1 | 2 | 3`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`}],required:!0}},{key:`text`,value:{name:`string`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{
  type: 'paragraph';
  text: string;
  align?: 'left' | 'center' | 'right';
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}`,signature:{properties:[{key:`type`,value:{name:`literal`,value:`'paragraph'`,required:!0}},{key:`text`,value:{name:`string`,required:!0}},{key:`align`,value:{name:`union`,raw:`'left' | 'center' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'right'`}],required:!1}},{key:`bold`,value:{name:`boolean`,required:!1}},{key:`italic`,value:{name:`boolean`,required:!1}},{key:`underline`,value:{name:`boolean`,required:!1}}]}},{name:`signature`,type:`object`,raw:`{ type: 'list'; ordered: boolean; items: string[] }`,signature:{properties:[{key:`type`,value:{name:`literal`,value:`'list'`,required:!0}},{key:`ordered`,value:{name:`boolean`,required:!0}},{key:`items`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ type: 'link'; text: string; href: string }`,signature:{properties:[{key:`type`,value:{name:`literal`,value:`'link'`,required:!0}},{key:`text`,value:{name:`string`,required:!0}},{key:`href`,value:{name:`string`,required:!0}}]}}]}],raw:`RichContentBlock[]`},description:``}}}})))()}export{d as n,o as t};