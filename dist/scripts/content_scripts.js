"use strict";(()=>{var s=`::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.2) !important;
    border-radius: 8px;
}
::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #bbb;
    box-shadow: inset 0 0 6px rgba(0,0,0,0.25) !important;
}
::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(0,255,0,0.4) !important;
}

:root {

    /** \u4E3B\u9898\u8272\uFF0C\u5E94\u8BE5\u5176\u4ED6\u7531js\u8FDB\u884C\u62D3\u5C55 */
    --tool-white: --yq-yuque-grey-9;
    --yq-ant-heading-color: var(--tool-white);
    --yq-white: var(--tool-base);
    --yq-bg-secondary: var(--tool-secondary);
    --yq-text-body: var(--tool-white);

    --yq-background-base: var(--tool-base);
    /* --yq-text-primary: var(--tool-white); */
    --yq-black: var(--tool-white);
    --yq-bg-primary-hover: var(--tool-hover);
    --yq-ant-btn-default-bg: var(tool-btn-bg);
    --yq-ant-btn-default-border: var(tool-btn-bg);
    --yq-ant-input-bg: var(tool-btn-bg);
    --yq-ant-input-addon-bg: var(tool-btn-bg);

    --yq-border-primary: var(--yq-yuque-green-1);
    --yq-theme: var(--yq-yuque-green-7);
}

html, body ,
.footer, .main-wrapper, html, html body{
    background-color: var(--tool-base);
}
.ant-input-group-addon {
    background-color: var(--tool-btn-bg);
    border-color: var(--tool-btn-bg);
}
#header {
    background-color: var(--yq-bg-primary-hover);
}
ne-quote {
    padding: 1em;
    border-radius: .5em;
    background-color: var(--yq-bg-primary-hover);
}
ne-quote::before {
    /* background-color: var(--yq-bg-primary-hover); */
    display: none;
}
.ne-viewer ne-card {
    border: none !important;
}
ne-code-content {
    border-color: var(--tool-hover);
}

ne-p {
    color: var(--tool-text)
}
.isWin > .lark > .main-wrapper > div {
    background-color: transparent !important;
    background-image: none !important;
}
.isWin > .lark > .main-wrapper > div > div > div {
    background-color: var(--tool-secondary);
}
.ant-table-tbody>tr.ant-table-row:hover>td {
    background-color: var(--tool-secondary);

}
#main {
    min-height: calc(100vh - 64px)
}
.Books-module_book_wAfDM.larkui-card-transparent-head {
    background-color: transparent !important;
}`;var y=[["tool-secondary","#242526"],["tool-base","#18191a"],["tool-hover","#3a3b3c"],["tool-btn-bg","#464E5F"],["tool-text","#B5B5C3"]],u=[["yq-yuque-grey-9","#FAFAFA"],["yq-yuque-grey-8","#F4F5F5"],["yq-yuque-grey-7","#EFF0F0"],["yq-yuque-grey-6","#E7E9E8"],["yq-yuque-grey-5","#D8DAD9"],["yq-yuque-grey-4","#BEC0BF"],["yq-yuque-grey-3","#8A8F8D"],["yq-yuque-grey-2","#585A5A"],["yq-yuque-grey-1","#262626"]];var l=o=>{let t=document.createElement("style");return t.innerHTML=o,t},d=(o,t)=>{let e=`__yuque_theme_${o}`;window.localStorage.setItem(e,t)},c=(o,t)=>{let e=`__yuque_theme_${o}`;return window.localStorage.getItem(e)??t},i=o=>{let e=`
    :root {${o.map(([r,a])=>`--${r}: ${a};`).join(" ")}}
    `;return l(e)},n=o=>{let t=document.querySelector(`style[${o}]`);if(t!==null)return t;let e=document.createElement("style"),r=document.createAttribute(o);return e.setAttributeNode(r),document.documentElement.appendChild(e),e};var b=()=>{let o=document.querySelector(".main-wrapper div[style]");if(o!==null){let t="yuque-theme-"+Math.random().toString(16).replaceAll(".","");o.id=t,o.style.background="";let e=n(t);e.innerHTML=`
            #${t} { background: var(--yq-bg-primary) !important }
            #${t} > div > div { background: var(--tool-secondary) !important}
        `}};var p=y.map(([o,t])=>[o,c(o,t)]),q=u.map(([o,t])=>[o,c(o,t)]),m=document.createDocumentFragment(),[...h]=[i(p),i(q),l(s)];h.forEach(o=>m.appendChild(o));document.documentElement?.appendChild(m);chrome.runtime.onMessage.addListener(({action:o,data:t})=>{if(o==="config_change"){let[e,r]=t,a=n(e);a.innerHTML=` :root { --${e}: ${r} }`,d(e,r)}});Promise.resolve().then(b);})();