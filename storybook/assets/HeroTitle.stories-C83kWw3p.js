const c={title:"Components/HeroTitle",tags:["autodocs"],parameters:{componentSubtitle:"hero-title component styles"},argTypes:{firstName:{control:"text"},lastName:{control:"text"},subtitle:{control:"text"},aboutLink:{control:"text"}}},i=({firstName:n,lastName:o,subtitle:l,aboutLink:r})=>`
  <div class="hero-content">
    <h1 class="hero-title">
      <span class="hero-name">
        <span class="first-name">${n}</span>
        <span class="last-name">${o}</span>
      </span>
    </h1>
    <p class="hero-subtitle">
      ${l}
    </p>
    <a href="${r}" class="cta-button primary">
      About Me
      <svg class="arrow-icon" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </a>
  </div>
`,s=i.bind({});s.args={firstName:"Bobbie",lastName:"Allsop",subtitle:'Designer of <span class="highlight">UX</span>, <span class="highlight">Games</span> & <span class="highlight">UI</span>',aboutLink:"/pages/about.html"};var a,t,e;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`({
  firstName,
  lastName,
  subtitle,
  aboutLink
}) => \`
  <div class="hero-content">
    <h1 class="hero-title">
      <span class="hero-name">
        <span class="first-name">\${firstName}</span>
        <span class="last-name">\${lastName}</span>
      </span>
    </h1>
    <p class="hero-subtitle">
      \${subtitle}
    </p>
    <a href="\${aboutLink}" class="cta-button primary">
      About Me
      <svg class="arrow-icon" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </a>
  </div>
\``,...(e=(t=s.parameters)==null?void 0:t.docs)==null?void 0:e.source}}};const p=["Default"];export{s as Default,p as __namedExportsOrder,c as default};
