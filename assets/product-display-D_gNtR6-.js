import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{On as t,o as n,s as r}from"./iframe-CT6OUoJY.js";import{i,n as a}from"./page-CNIgj3L3.js";import{n as o,t as s}from"./image-placeholder-DqtxuZxx.js";import{n as c,t as l}from"./badge-B5WdqG56.js";import{a as u,d}from"./field-B2oR0QpV.js";import{c as f,i as p,s as m,t as h}from"./format-CRK3OQkd.js";import{i as g,n as _,r as v}from"./category-color-BcTzuAKI.js";function y(e,t){return e?e.start.getTime()>t.getTime()?`Reserved`:!e.end||e.end.getTime()>t.getTime()?`On Sale`:`Sale Ended`:`Draft`}function b(e,t,n=h){let r=t.find(t=>t.id===e.categoryId);return!e.paymentInUse||!e.registered||r?.kind!==`used`?`Draft`:y(e.sale,n)}function x(e,t=h){return y(e.sale,t)}function S({status:e}){return(0,k.jsx)(l,{variant:A[e],children:e})}function C({inUse:e}){return e?(0,k.jsx)(l,{variant:`secondary`,children:`사용`}):(0,k.jsx)(l,{variant:`destructive`,children:`사용 안 함`})}function w({caption:e,color:t,empty:r,showCaption:i,className:a}){let o=r||!e;return(0,k.jsx)(`div`,{className:n(`shrink-0`,a),title:o?`이미지 없음`:e,children:(0,k.jsx)(s,{caption:i?e:void 0,empty:o,tintClassName:!o&&t?_[t].tint:void 0})})}function T({caption:e,color:t,empty:n}){return(0,k.jsx)(w,{caption:e,color:t,empty:n,className:`w-16`})}function E(e,t){return e?`${p(e.start,t)} ~ ${e.end?p(e.end,t):`무기한`}`:`-`}function D({limit:e}){if(!e.use)return(0,k.jsx)(k.Fragment,{children:`사용 안 함`});let t=`${e.time??``} (UTC+9)`,n={누적:null,일간:`매일 ${t}`,주간:`매주 ${e.weekday}요일 ${t}`,월간:`매월 ${e.day}일 ${t}`,연간:`매년 ${e.month}월 ${e.day}일 ${t}`}[e.cycle];return(0,k.jsx)(k.Fragment,{children:[`사용`,e.cycle,n,`${e.quantity}개`].filter(Boolean).join(` · `)})}function O({product:e,category:t,showPaymentUsage:n,status:r}){return(0,k.jsxs)(u,{children:[(0,k.jsx)(a,{label:`상품명`,specId:`info-name`,children:e.name}),n&&(0,k.jsx)(a,{label:`Payment 사용 여부`,specId:`info-usage`,children:(0,k.jsx)(C,{inUse:e.paymentInUse})}),(0,k.jsx)(a,{label:`상태`,specId:`info-status`,children:(0,k.jsx)(S,{status:r??b(e,[t])})}),(0,k.jsx)(a,{label:`PAY-CHORUS 상품 ID`,specId:`info-id`,children:e.id}),(0,k.jsx)(a,{label:`가격`,specId:`info-price`,children:m(e.price,e.currency)}),(0,k.jsx)(a,{label:`이미지`,specId:`info-image`,children:(0,k.jsx)(w,{caption:e.imageCaption,color:t.color??`WHITE`,showCaption:!0,className:`w-32`})}),(0,k.jsx)(a,{label:`카테고리`,specId:`info-category`,children:(0,k.jsxs)(`span`,{className:`inline-flex items-center gap-2`,children:[(0,k.jsx)(v,{color:t.color??`WHITE`}),t.name]})}),(0,k.jsx)(a,{label:`판매기간`,specId:`info-period`,children:E(e.sale,`second`)}),(0,k.jsx)(a,{label:`구매 제한`,specId:`info-limit`,children:(0,k.jsx)(D,{limit:e.limit})}),(0,k.jsx)(a,{label:`안내 문구`,specId:`info-notice`,children:(0,k.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,k.jsx)(`span`,{children:e.notice?`사용`:`미사용`}),e.notice&&(0,k.jsx)(`span`,{className:`whitespace-pre-line`,children:e.notice})]})})]})}var k,A;function j(){return(j=e((()=>{c(),d(),r(),g(),f(),o(),i(),k=t(),A={"On Sale":`default`,Reserved:`secondary`,"Sale Ended":`outline`,Draft:`ghost`},S.__docgenInfo={description:``,methods:[],displayName:`ProductStatusBadge`,props:{status:{required:!0,tsType:{name:`union`,raw:`'Draft' | 'Reserved' | 'On Sale' | 'Sale Ended'`,elements:[{name:`literal`,value:`'Draft'`},{name:`literal`,value:`'Reserved'`},{name:`literal`,value:`'On Sale'`},{name:`literal`,value:`'Sale Ended'`}]},description:``}}},C.__docgenInfo={description:`Payment 사용 여부(PD 3.4).`,methods:[],displayName:`PaymentUsageBadge`,props:{inUse:{required:!0,tsType:{name:`boolean`},description:``}}},T.__docgenInfo={description:`목록 행의 상품 썸네일(64px).`,methods:[],displayName:`ProductThumb`,props:{caption:{required:!1,tsType:{name:`string`},description:``},color:{required:!1,tsType:{name:`union`,raw:`CategoryColor | 'WHITE'`,elements:[{name:`CategoryColor`},{name:`literal`,value:`'WHITE'`}]},description:``},empty:{required:!1,tsType:{name:`boolean`},description:``}}},D.__docgenInfo={description:`구매 제한 요약(PD 7.1, 7.2). 초기화 기준은 KST이므로 "(UTC+9)"를 붙인다(PD 2).`,methods:[],displayName:`PurchaseLimitSummary`,props:{limit:{required:!0,tsType:{name:`union`,raw:`| { use: false }
| {
    use: true;
    cycle: LimitCycle;
    quantity: number;
    weekday?: Weekday;
    day?: number;
    month?: number;
    time?: string;
  }`,elements:[{name:`signature`,type:`object`,raw:`{ use: false }`,signature:{properties:[{key:`use`,value:{name:`literal`,value:`false`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{
  use: true;
  cycle: LimitCycle;
  quantity: number;
  weekday?: Weekday;
  day?: number;
  month?: number;
  time?: string;
}`,signature:{properties:[{key:`use`,value:{name:`literal`,value:`true`,required:!0}},{key:`cycle`,value:{name:`union`,raw:`'누적' | '일간' | '주간' | '월간' | '연간'`,elements:[{name:`literal`,value:`'누적'`},{name:`literal`,value:`'일간'`},{name:`literal`,value:`'주간'`},{name:`literal`,value:`'월간'`},{name:`literal`,value:`'연간'`}],required:!0}},{key:`quantity`,value:{name:`number`,required:!0}},{key:`weekday`,value:{name:`union`,raw:`'월' | '화' | '수' | '목' | '금' | '토' | '일'`,elements:[{name:`literal`,value:`'월'`},{name:`literal`,value:`'화'`},{name:`literal`,value:`'수'`},{name:`literal`,value:`'목'`},{name:`literal`,value:`'금'`},{name:`literal`,value:`'토'`},{name:`literal`,value:`'일'`}],required:!1}},{key:`day`,value:{name:`number`,required:!1}},{key:`month`,value:{name:`number`,required:!1}},{key:`time`,value:{name:`string`,required:!1}}]}}]},description:``}}},O.__docgenInfo={description:"상품 상세 조회 필드(PD 6.1 순서). 라이브 프리뷰 상세(PD 8.2)는 showPaymentUsage={false}이고 status에\n`getPublishedStatus` 결과를 넘긴다. status를 주지 않으면 작업본 기준(`getProductStatus`)으로 category로 판정한다.",methods:[],displayName:`ProductDetailView`,props:{product:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{
  id: string;
  /** 상품명·통화·가격·Payment 사용 여부는 Payment 현재 값(PD 4.1). */
  name: string;
  currency: Currency;
  price: number;
  paymentInUse: boolean;
  /** Webshop에서 한 번이라도 저장했는지(PD 4.2). 미등록은 기본 카테고리·판매 기간 없음·Draft. */
  registered: boolean;
  categoryId: string;
  imageCaption?: string;
  /** 없음 = 미설정, end 없음 = 무기한(PD 5.3, 6.4). */
  sale?: { start: Date; end?: Date };
  limit: PurchaseLimit;
  /** 안내 문구. 없음 = 미사용(PD 6.5). */
  notice?: string;
  /** 카테고리 안의 순서. */
  order: number;
  /** Payment에서 삭제된 상품. 목록·라이브 프리뷰에서 빠진다(PD 4.3). */
  deletedFromPayment?: boolean;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0},description:`상품명·통화·가격·Payment 사용 여부는 Payment 현재 값(PD 4.1).`},{key:`currency`,value:{name:`Currency`,required:!0}},{key:`price`,value:{name:`number`,required:!0}},{key:`paymentInUse`,value:{name:`boolean`,required:!0}},{key:`registered`,value:{name:`boolean`,required:!0},description:`Webshop에서 한 번이라도 저장했는지(PD 4.2). 미등록은 기본 카테고리·판매 기간 없음·Draft.`},{key:`categoryId`,value:{name:`string`,required:!0}},{key:`imageCaption`,value:{name:`string`,required:!1}},{key:`sale`,value:{name:`signature`,type:`object`,raw:`{ start: Date; end?: Date }`,signature:{properties:[{key:`start`,value:{name:`Date`,required:!0}},{key:`end`,value:{name:`Date`,required:!1}}]},required:!1},description:`없음 = 미설정, end 없음 = 무기한(PD 5.3, 6.4).`},{key:`limit`,value:{name:`union`,raw:`| { use: false }
| {
    use: true;
    cycle: LimitCycle;
    quantity: number;
    weekday?: Weekday;
    day?: number;
    month?: number;
    time?: string;
  }`,elements:[{name:`signature`,type:`object`,raw:`{ use: false }`,signature:{properties:[{key:`use`,value:{name:`literal`,value:`false`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{
  use: true;
  cycle: LimitCycle;
  quantity: number;
  weekday?: Weekday;
  day?: number;
  month?: number;
  time?: string;
}`,signature:{properties:[{key:`use`,value:{name:`literal`,value:`true`,required:!0}},{key:`cycle`,value:{name:`union`,raw:`'누적' | '일간' | '주간' | '월간' | '연간'`,elements:[{name:`literal`,value:`'누적'`},{name:`literal`,value:`'일간'`},{name:`literal`,value:`'주간'`},{name:`literal`,value:`'월간'`},{name:`literal`,value:`'연간'`}],required:!0}},{key:`quantity`,value:{name:`number`,required:!0}},{key:`weekday`,value:{name:`union`,raw:`'월' | '화' | '수' | '목' | '금' | '토' | '일'`,elements:[{name:`literal`,value:`'월'`},{name:`literal`,value:`'화'`},{name:`literal`,value:`'수'`},{name:`literal`,value:`'목'`},{name:`literal`,value:`'금'`},{name:`literal`,value:`'토'`},{name:`literal`,value:`'일'`}],required:!1}},{key:`day`,value:{name:`number`,required:!1}},{key:`month`,value:{name:`number`,required:!1}},{key:`time`,value:{name:`string`,required:!1}}]}}],required:!0}},{key:`notice`,value:{name:`string`,required:!1},description:`안내 문구. 없음 = 미사용(PD 6.5).`},{key:`order`,value:{name:`number`,required:!0},description:`카테고리 안의 순서.`},{key:`deletedFromPayment`,value:{name:`boolean`,required:!1},description:`Payment에서 삭제된 상품. 목록·라이브 프리뷰에서 빠진다(PD 4.3).`}]}},description:``},category:{required:!0,tsType:{name:`Pick`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  name: string;
  description?: string;
  kind: CategoryKind;
  /** 상품 배경색. 기본 카테고리는 없음(흰색). */
  color?: CategoryColor;
  /** 최종 수정일(수정한 적 없으면 등록 시각). 기본 카테고리는 없음. */
  updatedAt?: Date;
  /** 같은 목록(사용·미사용) 안의 순서. 기본 카테고리는 0. */
  order: number;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`description`,value:{name:`string`,required:!1}},{key:`kind`,value:{name:`union`,raw:`'default' | 'used' | 'unused'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'used'`},{name:`literal`,value:`'unused'`}],required:!0}},{key:`color`,value:{name:`CategoryColor`,required:!1},description:`상품 배경색. 기본 카테고리는 없음(흰색).`},{key:`updatedAt`,value:{name:`Date`,required:!1},description:`최종 수정일(수정한 적 없으면 등록 시각). 기본 카테고리는 없음.`},{key:`order`,value:{name:`number`,required:!0},description:`같은 목록(사용·미사용) 안의 순서. 기본 카테고리는 0.`}]}},{name:`union`,raw:`'id' | 'name' | 'kind' | 'color'`,elements:[{name:`literal`,value:`'id'`},{name:`literal`,value:`'name'`},{name:`literal`,value:`'kind'`},{name:`literal`,value:`'color'`}]}],raw:`Pick<Category, 'id' | 'name' | 'kind' | 'color'>`},description:``},showPaymentUsage:{required:!0,tsType:{name:`boolean`},description:``},status:{required:!1,tsType:{name:`union`,raw:`'Draft' | 'Reserved' | 'On Sale' | 'Sale Ended'`,elements:[{name:`literal`,value:`'Draft'`},{name:`literal`,value:`'Reserved'`},{name:`literal`,value:`'On Sale'`},{name:`literal`,value:`'Sale Ended'`}]},description:``}}}})))()}export{E as a,j as c,T as i,O as n,b as o,S as r,x as s,C as t};