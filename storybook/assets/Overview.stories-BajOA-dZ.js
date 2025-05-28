const x={title:"Components/Overview",tags:["autodocs"],parameters:{componentSubtitle:"overview component styles"}},n=i=>{const{skillsTitle:l,skillsTags:o,softwareTitle:r,softwareTags:s,experienceTitle:f,experienceData:c}=i;return`
    <style>
      .collapsible-content { display: none; }
      .collapsible-section.open .collapsible-content { display: block; }
      .collapsible-trigger { cursor: pointer; background: none; border: none; font-size: 1.1rem; display: flex; align-items: center; gap: 0.5em; }
      .chevron { width: 1em; height: 1em; transition: transform 0.2s; }
      .collapsible-section.open .chevron { transform: rotate(180deg); }
      .tags-grid { display: flex; flex-wrap: wrap; gap: 0.5em; list-style: none; padding: 0; }
      .tag-item { background: #f0f0f0; border-radius: 4px; padding: 0.2em 0.6em; }
      .experience-bar { margin: 1em 0; }
      .bar { display: flex; height: 1.5em; border-radius: 0.5em; overflow: hidden; }
      .segment { display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.9em; }
      .segment.games { background: #4a90e2; }
      .segment.product { background: #50e3c2; }
      .segment.ux { background: #b8e986; color: #333; }
      .experience-key { display: flex; flex-wrap: wrap; gap: 1em; margin-top: 0.5em; }
      .key-item { display: flex; align-items: center; gap: 0.3em; }
      .key-dot { width: 1em; height: 1em; border-radius: 50%; display: inline-block; }
      .key-item.games .key-dot { background: #4a90e2; }
      .key-item.product .key-dot { background: #50e3c2; }
      .key-item.ux .key-dot { background: #b8e986; border: 1px solid #333; }
      .key-item.total { font-weight: bold; }
    </style>
    <div class="overview">
      <div class="overview-card">
        <h2>Overview</h2>
        <!-- Skills section -->
        <div class="collapsible-section" id="skills-section">
          <button class="collapsible-trigger" aria-expanded="false">
            <span>${l}</span>
            <svg class="chevron" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <div class="collapsible-content">
            <ul class="tags-grid">
              ${o.map(e=>`<li class="tag-item"><span class="tag-text">${e}</span></li>`).join("")}
            </ul>
          </div>
        </div>
        <!-- Software section -->
        <div class="collapsible-section" id="software-section">
          <button class="collapsible-trigger" aria-expanded="false">
            <span>${r}</span>
            <svg class="chevron" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <div class="collapsible-content">
            <ul class="tags-grid">
              ${s.map(e=>`<li class="tag-item"><span class="tag-text">${e}</span></li>`).join("")}
            </ul>
          </div>
        </div>
        <!-- Experience section -->
        <div class="collapsible-section" id="experience-section">
          <button class="collapsible-trigger" aria-expanded="false">
            <span>${f}</span>
            <svg class="chevron" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <div class="collapsible-content">
            <div class="experience-bar">
              <div class="bar">
                ${c.segments.map(e=>`<div class="segment ${e.class}" style="width: ${e.width}"><span class="segment-label">${e.label}</span></div>`).join("")}
              </div>
              <div class="experience-key">
                ${c.key.map(e=>`<div class="key-item ${e.class}"><span class="key-dot"></span><span class="key-label">${e.label}</span><span class="key-years">${e.years}</span></div>`).join("")}
                <div class="key-item total"><span class="key-years">${c.total}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script>
      const sections = document.currentScript.previousElementSibling.querySelectorAll('.collapsible-section');
      sections.forEach(section => {
        const btn = section.querySelector('.collapsible-trigger');
        const content = section.querySelector('.collapsible-content');
        btn.onclick = () => {
          const open = section.classList.toggle('open');
          btn.setAttribute('aria-expanded', open);
        };
      });
    <\/script>
  `};n.args={skillsTitle:"Skills & Expertise",skillsTags:["Strong Communication","Visual Thinking","Workshop Facilitation","User Research","Collaborative Tools","Usability Testing","UI/UX Design","Game Design","Basic Coding Knowledge"],softwareTitle:"Software",softwareTags:["Figma","Maze","Miro"],experienceTitle:"Experience (8 years)",experienceData:{segments:[{class:"games",width:"25%",label:"Games Design"},{class:"product",width:"12.5%",label:"Product Design"},{class:"ux",width:"62.5%",label:"UX Design"}],key:[{class:"games",label:"Games Design",years:"2 years"},{class:"product",label:"Product Design",years:"1 year"},{class:"ux",label:"UX Design",years:"5 years"}],total:"Total: 8 years design experience"}};n.argTypes={skillsTitle:{control:"text",name:"Skills Section Title"},skillsTags:{control:"object",name:"Skills Tags"},softwareTitle:{control:"text",name:"Software Section Title"},softwareTags:{control:"object",name:"Software Tags"},experienceTitle:{control:"text",name:"Experience Section Title"},experienceData:{control:"object",name:"Experience Data"}};const a=i=>{const{segments:l,key:o,total:r}=i;return`
    <style>
      .experience-bar { margin: 1em 0; }
      .bar { display: flex; height: 1.5em; border-radius: 0.5em; overflow: hidden; }
      .segment { display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.9em; }
      .segment.games { background: #4a90e2; }
      .segment.product { background: #50e3c2; }
      .segment.ux { background: #b8e986; color: #333; }
      .experience-key { display: flex; flex-wrap: wrap; gap: 1em; margin-top: 0.5em; }
      .key-item { display: flex; align-items: center; gap: 0.3em; }
      .key-dot { width: 1em; height: 1em; border-radius: 50%; display: inline-block; }
      .key-item.games .key-dot { background: #4a90e2; }
      .key-item.product .key-dot { background: #50e3c2; }
      .key-item.ux .key-dot { background: #b8e986; border: 1px solid #333; }
      .key-item.total { font-weight: bold; }
    </style>
    <div class="experience-bar">
      <div class="bar">
        ${l.map(s=>`<div class="segment ${s.class}" style="width: ${s.width}"><span class="segment-label">${s.label}</span></div>`).join("")}
      </div>
      <div class="experience-key">
        ${o.map(s=>`<div class="key-item ${s.class}"><span class="key-dot"></span><span class="key-label">${s.label}</span><span class="key-years">${s.years}</span></div>`).join("")}
        <div class="key-item total"><span class="key-years">${r}</span></div>
      </div>
    </div>
  `};a.args={segments:[{class:"games",width:"25%",label:"Games Design"},{class:"product",width:"12.5%",label:"Product Design"},{class:"ux",width:"62.5%",label:"UX Design"}],key:[{class:"games",label:"Games Design",years:"2 years"},{class:"product",label:"Product Design",years:"1 year"},{class:"ux",label:"UX Design",years:"5 years"}],total:"Total: 8 years design experience"};a.argTypes={segments:{control:"object",name:"Segments"},key:{control:"object",name:"Key"},total:{control:"text",name:"Total Experience"}};const t=i=>{const{softwareTitle:l,softwareTags:o}=i;return`
    <style>
      .collapsible-content { display: none; }
      .collapsible-section.open .collapsible-content { display: block; }
      .collapsible-trigger { cursor: pointer; background: none; border: none; font-size: 1.1rem; display: flex; align-items: center; gap: 0.5em; }
      .chevron { width: 1em; height: 1em; transition: transform 0.2s; }
      .collapsible-section.open .chevron { transform: rotate(180deg); }
      .tags-grid { display: flex; flex-wrap: wrap; gap: 0.5em; list-style: none; padding: 0; }
      .tag-item { background: #f0f0f0; border-radius: 4px; padding: 0.2em 0.6em; }
    </style>
    <div class="collapsible-section open" id="software-section">
      <button class="collapsible-trigger" aria-expanded="true">
        <span>${l}</span>
        <svg class="chevron" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="collapsible-content">
        <ul class="tags-grid">
          ${o.map(r=>`<li class="tag-item"><span class="tag-text">${r}</span></li>`).join("")}
        </ul>
      </div>
    </div>
    <script>
      const section = document.currentScript.previousElementSibling;
      const btn = section.querySelector('.collapsible-trigger');
      btn.onclick = () => {
        const open = section.classList.toggle('open');
        btn.setAttribute('aria-expanded', open);
      };
    <\/script>
  `};t.args={softwareTitle:"Software",softwareTags:["Figma","Maze","Miro"]};t.argTypes={softwareTitle:{control:"text",name:"Software Section Title"},softwareTags:{control:"object",name:"Software Tags"}};var p,d,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const {
    skillsTitle,
    skillsTags,
    softwareTitle,
    softwareTags,
    experienceTitle,
    experienceData
  } = args;
  return \`
    <style>
      .collapsible-content { display: none; }
      .collapsible-section.open .collapsible-content { display: block; }
      .collapsible-trigger { cursor: pointer; background: none; border: none; font-size: 1.1rem; display: flex; align-items: center; gap: 0.5em; }
      .chevron { width: 1em; height: 1em; transition: transform 0.2s; }
      .collapsible-section.open .chevron { transform: rotate(180deg); }
      .tags-grid { display: flex; flex-wrap: wrap; gap: 0.5em; list-style: none; padding: 0; }
      .tag-item { background: #f0f0f0; border-radius: 4px; padding: 0.2em 0.6em; }
      .experience-bar { margin: 1em 0; }
      .bar { display: flex; height: 1.5em; border-radius: 0.5em; overflow: hidden; }
      .segment { display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.9em; }
      .segment.games { background: #4a90e2; }
      .segment.product { background: #50e3c2; }
      .segment.ux { background: #b8e986; color: #333; }
      .experience-key { display: flex; flex-wrap: wrap; gap: 1em; margin-top: 0.5em; }
      .key-item { display: flex; align-items: center; gap: 0.3em; }
      .key-dot { width: 1em; height: 1em; border-radius: 50%; display: inline-block; }
      .key-item.games .key-dot { background: #4a90e2; }
      .key-item.product .key-dot { background: #50e3c2; }
      .key-item.ux .key-dot { background: #b8e986; border: 1px solid #333; }
      .key-item.total { font-weight: bold; }
    </style>
    <div class="overview">
      <div class="overview-card">
        <h2>Overview</h2>
        <!-- Skills section -->
        <div class="collapsible-section" id="skills-section">
          <button class="collapsible-trigger" aria-expanded="false">
            <span>\${skillsTitle}</span>
            <svg class="chevron" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <div class="collapsible-content">
            <ul class="tags-grid">
              \${skillsTags.map(tag => \`<li class="tag-item"><span class="tag-text">\${tag}</span></li>\`).join('')}
            </ul>
          </div>
        </div>
        <!-- Software section -->
        <div class="collapsible-section" id="software-section">
          <button class="collapsible-trigger" aria-expanded="false">
            <span>\${softwareTitle}</span>
            <svg class="chevron" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <div class="collapsible-content">
            <ul class="tags-grid">
              \${softwareTags.map(tag => \`<li class="tag-item"><span class="tag-text">\${tag}</span></li>\`).join('')}
            </ul>
          </div>
        </div>
        <!-- Experience section -->
        <div class="collapsible-section" id="experience-section">
          <button class="collapsible-trigger" aria-expanded="false">
            <span>\${experienceTitle}</span>
            <svg class="chevron" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <div class="collapsible-content">
            <div class="experience-bar">
              <div class="bar">
                \${experienceData.segments.map(seg => \`<div class="segment \${seg.class}" style="width: \${seg.width}"><span class="segment-label">\${seg.label}</span></div>\`).join('')}
              </div>
              <div class="experience-key">
                \${experienceData.key.map(key => \`<div class="key-item \${key.class}"><span class="key-dot"></span><span class="key-label">\${key.label}</span><span class="key-years">\${key.years}</span></div>\`).join('')}
                <div class="key-item total"><span class="key-years">\${experienceData.total}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script>
      const sections = document.currentScript.previousElementSibling.querySelectorAll('.collapsible-section');
      sections.forEach(section => {
        const btn = section.querySelector('.collapsible-trigger');
        const content = section.querySelector('.collapsible-content');
        btn.onclick = () => {
          const open = section.classList.toggle('open');
          btn.setAttribute('aria-expanded', open);
        };
      });
    <\/script>
  \`;
}`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var m,b,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const {
    segments,
    key,
    total
  } = args;
  return \`
    <style>
      .experience-bar { margin: 1em 0; }
      .bar { display: flex; height: 1.5em; border-radius: 0.5em; overflow: hidden; }
      .segment { display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.9em; }
      .segment.games { background: #4a90e2; }
      .segment.product { background: #50e3c2; }
      .segment.ux { background: #b8e986; color: #333; }
      .experience-key { display: flex; flex-wrap: wrap; gap: 1em; margin-top: 0.5em; }
      .key-item { display: flex; align-items: center; gap: 0.3em; }
      .key-dot { width: 1em; height: 1em; border-radius: 50%; display: inline-block; }
      .key-item.games .key-dot { background: #4a90e2; }
      .key-item.product .key-dot { background: #50e3c2; }
      .key-item.ux .key-dot { background: #b8e986; border: 1px solid #333; }
      .key-item.total { font-weight: bold; }
    </style>
    <div class="experience-bar">
      <div class="bar">
        \${segments.map(seg => \`<div class="segment \${seg.class}" style="width: \${seg.width}"><span class="segment-label">\${seg.label}</span></div>\`).join('')}
      </div>
      <div class="experience-key">
        \${key.map(k => \`<div class="key-item \${k.class}"><span class="key-dot"></span><span class="key-label">\${k.label}</span><span class="key-years">\${k.years}</span></div>\`).join('')}
        <div class="key-item total"><span class="key-years">\${total}</span></div>
      </div>
    </div>
  \`;
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,u,k;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const {
    softwareTitle,
    softwareTags
  } = args;
  return \`
    <style>
      .collapsible-content { display: none; }
      .collapsible-section.open .collapsible-content { display: block; }
      .collapsible-trigger { cursor: pointer; background: none; border: none; font-size: 1.1rem; display: flex; align-items: center; gap: 0.5em; }
      .chevron { width: 1em; height: 1em; transition: transform 0.2s; }
      .collapsible-section.open .chevron { transform: rotate(180deg); }
      .tags-grid { display: flex; flex-wrap: wrap; gap: 0.5em; list-style: none; padding: 0; }
      .tag-item { background: #f0f0f0; border-radius: 4px; padding: 0.2em 0.6em; }
    </style>
    <div class="collapsible-section open" id="software-section">
      <button class="collapsible-trigger" aria-expanded="true">
        <span>\${softwareTitle}</span>
        <svg class="chevron" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="collapsible-content">
        <ul class="tags-grid">
          \${softwareTags.map(tag => \`<li class="tag-item"><span class="tag-text">\${tag}</span></li>\`).join('')}
        </ul>
      </div>
    </div>
    <script>
      const section = document.currentScript.previousElementSibling;
      const btn = section.querySelector('.collapsible-trigger');
      btn.onclick = () => {
        const open = section.classList.toggle('open');
        btn.setAttribute('aria-expanded', open);
      };
    <\/script>
  \`;
}`,...(k=(u=t.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};const w=["OverviewSection","ExperienceTimeline","SoftwareSection"];export{a as ExperienceTimeline,n as OverviewSection,t as SoftwareSection,w as __namedExportsOrder,x as default};
