const b={title:"Components/Navigation",tags:["autodocs"],parameters:{componentSubtitle:"navigation component styles"}},t=l=>{const{logoText:o,navLinks:n}=l;return`
    <header>
      <nav>
        <div class="logo">${o}</div>
        <button class="mobile-menu-btn" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-links" id="menuBtnSection">
          <span class="sr-only">Menu</span>
          ☰
        </button>
        <ul class="nav-links" id="nav-links-section">
          ${n.map(e=>`<li><a href="${e.href}"${e.current?' aria-current="page"':""}>${e.label}</a></li>`).join("")}
        </ul>
      </nav>
    </header>
  `};t.args={logoText:"Bobbie Allsop",navLinks:[{href:"/",label:"Home",current:!0},{href:"/pages/about.html",label:"About",current:!1},{href:"/pages/blog.html",label:"Blog",current:!1},{href:"/pages/contact.html",label:"Contact",current:!1}]};t.argTypes={logoText:{control:"text",name:"Logo Text"},navLinks:{control:"object",name:"Navigation Links"}};const a=l=>{const{logoText:o,navLinks:n,menuOpen:e}=l;return`
    <style>
      .nav-links {
        display: none;
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .nav-links.active {
        display: block;
      }
      /* Force mobile styles regardless of viewport */
      .mobile-menu-btn { display: inline-block !important; }
      .nav-links { display: none !important; }
      .nav-links.active { display: block !important; }
      .mobile-menu-btn {
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
      }
    </style>
    <header>
      <nav>
        <div class="logo">${o}</div>
        <button class="mobile-menu-btn" aria-label="Toggle menu" aria-expanded="${e}" aria-controls="nav-links" id="menuBtnMobile">
          <span class="sr-only">Menu</span>
          ☰
        </button>
        <ul class="nav-links${e?" active":""}" id="nav-links-mobile">
          ${n.map(r=>`<li><a href="${r.href}"${r.current?' aria-current="page"':""}>${r.label}</a></li>`).join("")}
        </ul>
      </nav>
    </header>
  `};a.args={logoText:"Bobbie Allsop",navLinks:[{href:"/",label:"Home",current:!0},{href:"/pages/about.html",label:"About",current:!1},{href:"/pages/blog.html",label:"Blog",current:!1},{href:"/pages/contact.html",label:"Contact",current:!1}],menuOpen:!1};a.argTypes={logoText:{control:"text",name:"Logo Text"},navLinks:{control:"object",name:"Navigation Links"},menuOpen:{control:"boolean",name:"Menu Open (default)"}};a.parameters={viewport:{defaultViewport:"mobile1"}};a.play=async({canvasElement:l})=>{const o=l.querySelector("#nav-links-mobile"),n=l.querySelector("#menuBtnMobile");!o||!n||(n.onclick=()=>{const e=n.getAttribute("aria-expanded")==="true";n.setAttribute("aria-expanded",!e),o.classList.toggle("active")})};var s,i,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const {
    logoText,
    navLinks
  } = args;
  return \`
    <header>
      <nav>
        <div class="logo">\${logoText}</div>
        <button class="mobile-menu-btn" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-links" id="menuBtnSection">
          <span class="sr-only">Menu</span>
          ☰
        </button>
        <ul class="nav-links" id="nav-links-section">
          \${navLinks.map(link => \`<li><a href="\${link.href}"\${link.current ? ' aria-current="page"' : ''}>\${link.label}</a></li>\`).join('')}
        </ul>
      </nav>
    </header>
  \`;
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const {
    logoText,
    navLinks,
    menuOpen
  } = args;
  return \`
    <style>
      .nav-links {
        display: none;
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .nav-links.active {
        display: block;
      }
      /* Force mobile styles regardless of viewport */
      .mobile-menu-btn { display: inline-block !important; }
      .nav-links { display: none !important; }
      .nav-links.active { display: block !important; }
      .mobile-menu-btn {
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
      }
    </style>
    <header>
      <nav>
        <div class="logo">\${logoText}</div>
        <button class="mobile-menu-btn" aria-label="Toggle menu" aria-expanded="\${menuOpen}" aria-controls="nav-links" id="menuBtnMobile">
          <span class="sr-only">Menu</span>
          ☰
        </button>
        <ul class="nav-links\${menuOpen ? ' active' : ''}" id="nav-links-mobile">
          \${navLinks.map(link => \`<li><a href="\${link.href}"\${link.current ? ' aria-current=\\"page\\"' : ''}>\${link.label}</a></li>\`).join('')}
        </ul>
      </nav>
    </header>
  \`;
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const d=["NavHeaderSection","NavigationHeaderMobile"];export{t as NavHeaderSection,a as NavigationHeaderMobile,d as __namedExportsOrder,b as default};
