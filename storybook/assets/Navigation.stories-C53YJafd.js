const u={title:"Components/Navigation",tags:["autodocs"],parameters:{componentSubtitle:"navigation component styles"}},n=r=>{const{logoText:l,navLinks:s,menuOpen:a}=r;return`
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
        <div class="logo">${l}</div>
        <button class="mobile-menu-btn" aria-label="Toggle menu" aria-expanded="${a}" aria-controls="nav-links" id="menuBtn">
          <span class="sr-only">Menu</span>
          ☰
        </button>
        <ul class="nav-links${a?" active":""}" id="nav-links">
          ${s.map(e=>`<li><a href="${e.href}"${e.current?' aria-current="page"':""}>${e.label}</a></li>`).join("")}
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
  `};n.args={logoText:"Bobbie Allsop",navLinks:[{href:"/",label:"Home",current:!0},{href:"/pages/about.html",label:"About",current:!1},{href:"/pages/blog.html",label:"Blog",current:!1},{href:"/pages/contact.html",label:"Contact",current:!1}],menuOpen:!1};n.argTypes={logoText:{control:"text",name:"Logo Text"},navLinks:{control:"object",name:"Navigation Links"},menuOpen:{control:"boolean",name:"Menu Open (default)"}};var t,i,o;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
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
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const c=["NavigationHeader"];export{n as NavigationHeader,c as __namedExportsOrder,u as default};
