const d={title:"Components/Navigation",tags:["autodocs"],parameters:{componentSubtitle:"navigation component styles"}},o=l=>{const{logoText:i,navLinks:n,menuOpen:a}=l;return`
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
      @media (min-width: 600px) {
        .nav-links { display: flex !important; }
        .mobile-menu-btn { display: none; }
      }
      .mobile-menu-btn {
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
      }
    </style>
    <header>
      <nav>
        <div class="logo">${i}</div>
        <button class="mobile-menu-btn" aria-label="Toggle menu" aria-expanded="${a}" aria-controls="nav-links" id="menuBtn">
          <span class="sr-only">Menu</span>
          ☰
        </button>
        <ul class="nav-links${a?" active":""}" id="nav-links">
          ${n.map(t=>`<li><a href="${t.href}"${t.current?' aria-current="page"':""}>${t.label}</a></li>`).join("")}
        </ul>
      </nav>
    </header>
    <script>
      const navLinks = document.currentScript.previousElementSibling.querySelector('#nav-links');
      const menuBtn = document.currentScript.previousElementSibling.querySelector('#menuBtn');
      menuBtn.onclick = () => {
        const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !expanded);
        navLinks.classList.toggle('active');
      };
    <\/script>
  `};o.args={logoText:"Bobbie Allsop",navLinks:[{href:"/",label:"Home",current:!0},{href:"/pages/about.html",label:"About",current:!1},{href:"/pages/blog.html",label:"Blog",current:!1},{href:"/pages/contact.html",label:"Contact",current:!1}],menuOpen:!1};o.argTypes={logoText:{control:"text",name:"Logo Text"},navLinks:{control:"object",name:"Navigation Links"},menuOpen:{control:"boolean",name:"Menu Open (default)"}};const e=l=>{const{logoText:i,navLinks:n,menuOpen:a}=l;return`
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
        <div class="logo">${i}</div>
        <button class="mobile-menu-btn" aria-label="Toggle menu" aria-expanded="${a}" aria-controls="nav-links" id="menuBtnMobile">
          <span class="sr-only">Menu</span>
          ☰
        </button>
        <ul class="nav-links${a?" active":""}" id="nav-links-mobile">
          ${n.map(t=>`<li><a href="${t.href}"${t.current?' aria-current="page"':""}>${t.label}</a></li>`).join("")}
        </ul>
      </nav>
    </header>
  `};e.args={logoText:"Bobbie Allsop",navLinks:[{href:"/",label:"Home",current:!0},{href:"/pages/about.html",label:"About",current:!1},{href:"/pages/blog.html",label:"Blog",current:!1},{href:"/pages/contact.html",label:"Contact",current:!1}],menuOpen:!1};e.argTypes={logoText:{control:"text",name:"Logo Text"},navLinks:{control:"object",name:"Navigation Links"},menuOpen:{control:"boolean",name:"Menu Open (default)"}};e.parameters={viewport:{defaultViewport:"mobile1"}};e.play=async({canvasElement:l})=>{const i=l.querySelector("#nav-links-mobile"),n=l.querySelector("#menuBtnMobile");!i||!n||(n.onclick=()=>{const a=n.getAttribute("aria-expanded")==="true";n.setAttribute("aria-expanded",!a),i.classList.toggle("active")})};var r,s,c;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
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
      @media (min-width: 600px) {
        .nav-links { display: flex !important; }
        .mobile-menu-btn { display: none; }
      }
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
        <button class="mobile-menu-btn" aria-label="Toggle menu" aria-expanded="\${menuOpen}" aria-controls="nav-links" id="menuBtn">
          <span class="sr-only">Menu</span>
          ☰
        </button>
        <ul class="nav-links\${menuOpen ? ' active' : ''}" id="nav-links">
          \${navLinks.map(link => \`<li><a href="\${link.href}"\${link.current ? ' aria-current=\\"page\\"' : ''}>\${link.label}</a></li>\`).join('')}
        </ul>
      </nav>
    </header>
    <script>
      const navLinks = document.currentScript.previousElementSibling.querySelector('#nav-links');
      const menuBtn = document.currentScript.previousElementSibling.querySelector('#menuBtn');
      menuBtn.onclick = () => {
        const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !expanded);
        navLinks.classList.toggle('active');
      };
    <\/script>
  \`;
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var u,p,m;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const b=["NavigationHeader","NavigationHeaderMobile"];export{o as NavigationHeader,e as NavigationHeaderMobile,b as __namedExportsOrder,d as default};
