import{S as C,i as D,s as H,k as p,q as N,a as y,l as g,m as E,r as q,h as _,c as b,b as w,D as f,u as A,B as k,L as J}from"../../../../chunks/index-7a9c1bf6.js";function x(c,e,r){const l=c.slice();return l[1]=e[r],l}function I(c){let e,r,l=JSON.stringify(c[1])+"",s;return{c(){e=p("article"),r=p("p"),s=N(l)},l(o){e=g(o,"ARTICLE",{});var h=E(e);r=g(h,"P",{});var d=E(r);s=q(d,l),d.forEach(_),h.forEach(_)},m(o,h){w(o,e,h),f(e,r),f(r,s)},p(o,h){h&1&&l!==(l=JSON.stringify(o[1])+"")&&A(s,l)},d(o){o&&_(e)}}}function L(c){let e,r,l="Showing results for: "+c[0].params.category,s,o,h,d,u,m=c[0].response,n=[];for(let t=0;t<m.length;t+=1)n[t]=I(x(c,m,t));return{c(){e=p("main"),r=p("h2"),s=N(l),o=y(),h=p("hr"),d=y(),u=p("div");for(let t=0;t<n.length;t+=1)n[t].c()},l(t){e=g(t,"MAIN",{});var i=E(e);r=g(i,"H2",{});var a=E(r);s=q(a,l),a.forEach(_),o=b(i),h=g(i,"HR",{}),d=b(i),u=g(i,"DIV",{});var v=E(u);for(let S=0;S<n.length;S+=1)n[S].l(v);v.forEach(_),i.forEach(_)},m(t,i){w(t,e,i),f(e,r),f(r,s),f(e,o),f(e,h),f(e,d),f(e,u);for(let a=0;a<n.length;a+=1)n[a].m(u,null)},p(t,[i]){if(i&1&&l!==(l="Showing results for: "+t[0].params.category)&&A(s,l),i&1){m=t[0].response;let a;for(a=0;a<m.length;a+=1){const v=x(t,m,a);n[a]?n[a].p(v,i):(n[a]=I(v),n[a].c(),n[a].m(u,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=m.length}},i:k,o:k,d(t){t&&_(e),J(n,t)}}}function O(c,e,r){let{data:l}=e;return c.$$set=s=>{"data"in s&&r(0,l=s.data)},[l]}class R extends C{constructor(e){super(),D(this,e,O,L,H,{data:0})}}export{R as default};
