const Ue={title:"Components/Overview",tags:["autodocs"],parameters:{componentSubtitle:"overview component styles"}},n={render:()=>`
    <div class="overview">
      overview component
    </div>
  `},a={render:()=>`
    <div class="overview-card">
      overview-card component
    </div>
  `},r={render:()=>`
    <div class="collapsible-section">
      collapsible-section component
    </div>
  `},o={render:()=>`
    <div class="collapsible-trigger">
      collapsible-trigger component
    </div>
  `},t={render:()=>`
    <div class="chevron">
      chevron component
    </div>
  `},i={render:()=>`
    <div class="collapsible-content">
      collapsible-content component
    </div>
  `},c={render:()=>`
    <div class="experience-bar">
      experience-bar component
    </div>
  `},l={render:()=>`
    <div class="bar">
      bar component
    </div>
  `},d={render:()=>`
    <div class="segment">
      segment component
    </div>
  `},p={render:()=>`
    <div class="games">
      games component
    </div>
  `},m={render:()=>`
    <div class="product">
      product component
    </div>
  `},v={render:()=>`
    <div class="ux">
      ux component
    </div>
  `},g={render:()=>`
    <div class="segment-label">
      segment-label component
    </div>
  `},b={render:()=>`
    <div class="experience-key">
      experience-key component
    </div>
  `},u={render:()=>`
    <div class="key-item">
      key-item component
    </div>
  `},y={render:()=>`
    <div class="key-dot">
      key-dot component
    </div>
  `},k={render:()=>`
    <div class="key-label">
      key-label component
    </div>
  `},x={render:()=>`
    <div class="key-years">
      key-years component
    </div>
  `},w={render:()=>`
    <div class="total">
      total component
    </div>
  `},s=Ee=>{const{skillsTitle:je,skillsTags:Be,softwareTitle:Ke,softwareTags:Oe,experienceTitle:Me,experienceData:f}=Ee;return`
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
            <span>${je}</span>
            <svg class="chevron" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <div class="collapsible-content">
            <ul class="tags-grid">
              ${Be.map(e=>`<li class="tag-item"><span class="tag-text">${e}</span></li>`).join("")}
            </ul>
          </div>
        </div>
        <!-- Software section -->
        <div class="collapsible-section" id="software-section">
          <button class="collapsible-trigger" aria-expanded="false">
            <span>${Ke}</span>
            <svg class="chevron" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <div class="collapsible-content">
            <ul class="tags-grid">
              ${Oe.map(e=>`<li class="tag-item"><span class="tag-text">${e}</span></li>`).join("")}
            </ul>
          </div>
        </div>
        <!-- Experience section -->
        <div class="collapsible-section" id="experience-section">
          <button class="collapsible-trigger" aria-expanded="false">
            <span>${Me}</span>
            <svg class="chevron" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <div class="collapsible-content">
            <div class="experience-bar">
              <div class="bar">
                ${f.segments.map(e=>`<div class="segment ${e.class}" style="width: ${e.width}"><span class="segment-label">${e.label}</span></div>`).join("")}
              </div>
              <div class="experience-key">
                ${f.key.map(e=>`<div class="key-item ${e.class}"><span class="key-dot"></span><span class="key-label">${e.label}</span><span class="key-years">${e.years}</span></div>`).join("")}
                <div class="key-item total"><span class="key-years">${f.total}</span></div>
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
  `};s.args={skillsTitle:"Skills & Expertise",skillsTags:["Strong Communication","Visual Thinking","Workshop Facilitation","User Research","Collaborative Tools","Usability Testing","UI/UX Design","Game Design","Basic Coding Knowledge"],softwareTitle:"Software",softwareTags:["Figma","Maze","Miro"],experienceTitle:"Experience (8 years)",experienceData:{segments:[{class:"games",width:"25%",label:"Games Design"},{class:"product",width:"12.5%",label:"Product Design"},{class:"ux",width:"62.5%",label:"UX Design"}],key:[{class:"games",label:"Games Design",years:"2 years"},{class:"product",label:"Product Design",years:"1 year"},{class:"ux",label:"UX Design",years:"5 years"}],total:"Total: 8 years design experience"}};s.argTypes={skillsTitle:{control:"text",name:"Skills Section Title"},skillsTags:{control:"object",name:"Skills Tags"},softwareTitle:{control:"text",name:"Software Section Title"},softwareTags:{control:"object",name:"Software Tags"},experienceTitle:{control:"text",name:"Experience Section Title"},experienceData:{control:"object",name:"Experience Data"}};var h,S,T;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => \`
    <div class="overview">
      overview component
    </div>
  \`
}`,...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var $,D,C;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => \`
    <div class="overview-card">
      overview-card component
    </div>
  \`
}`,...(C=(D=a.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var E,j,B;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => \`
    <div class="collapsible-section">
      collapsible-section component
    </div>
  \`
}`,...(B=(j=r.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var K,O,M;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => \`
    <div class="collapsible-trigger">
      collapsible-trigger component
    </div>
  \`
}`,...(M=(O=o.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var U,q,L;t.parameters={...t.parameters,docs:{...(U=t.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => \`
    <div class="chevron">
      chevron component
    </div>
  \`
}`,...(L=(q=t.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var z,G,A;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => \`
    <div class="collapsible-content">
      collapsible-content component
    </div>
  \`
}`,...(A=(G=i.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var P,I,X;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => \`
    <div class="experience-bar">
      experience-bar component
    </div>
  \`
}`,...(X=(I=c.parameters)==null?void 0:I.docs)==null?void 0:X.source}}};var _,F,Y;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => \`
    <div class="bar">
      bar component
    </div>
  \`
}`,...(Y=(F=l.parameters)==null?void 0:F.docs)==null?void 0:Y.source}}};var R,V,W;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => \`
    <div class="segment">
      segment component
    </div>
  \`
}`,...(W=(V=d.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var H,J,N;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => \`
    <div class="games">
      games component
    </div>
  \`
}`,...(N=(J=p.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};var Q,Z,ee;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => \`
    <div class="product">
      product component
    </div>
  \`
}`,...(ee=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var se,ne,ae;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => \`
    <div class="ux">
      ux component
    </div>
  \`
}`,...(ae=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var re,oe,te;g.parameters={...g.parameters,docs:{...(re=g.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => \`
    <div class="segment-label">
      segment-label component
    </div>
  \`
}`,...(te=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ie,ce,le;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => \`
    <div class="experience-key">
      experience-key component
    </div>
  \`
}`,...(le=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,pe,me;u.parameters={...u.parameters,docs:{...(de=u.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => \`
    <div class="key-item">
      key-item component
    </div>
  \`
}`,...(me=(pe=u.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ve,ge,be;y.parameters={...y.parameters,docs:{...(ve=y.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => \`
    <div class="key-dot">
      key-dot component
    </div>
  \`
}`,...(be=(ge=y.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var ue,ye,ke;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => \`
    <div class="key-label">
      key-label component
    </div>
  \`
}`,...(ke=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:ke.source}}};var xe,we,fe;x.parameters={...x.parameters,docs:{...(xe=x.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => \`
    <div class="key-years">
      key-years component
    </div>
  \`
}`,...(fe=(we=x.parameters)==null?void 0:we.docs)==null?void 0:fe.source}}};var he,Se,Te;w.parameters={...w.parameters,docs:{...(he=w.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => \`
    <div class="total">
      total component
    </div>
  \`
}`,...(Te=(Se=w.parameters)==null?void 0:Se.docs)==null?void 0:Te.source}}};var $e,De,Ce;s.parameters={...s.parameters,docs:{...($e=s.parameters)==null?void 0:$e.docs,source:{originalSource:`args => {
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
}`,...(Ce=(De=s.parameters)==null?void 0:De.docs)==null?void 0:Ce.source}}};const qe=["Overview","OverviewCard","CollapsibleSection","CollapsibleTrigger","Chevron","CollapsibleContent","ExperienceBar","Bar","Segment","Games","Product","Ux","SegmentLabel","ExperienceKey","KeyItem","KeyDot","KeyLabel","KeyYears","Total","OverviewSection"];export{l as Bar,t as Chevron,i as CollapsibleContent,r as CollapsibleSection,o as CollapsibleTrigger,c as ExperienceBar,b as ExperienceKey,p as Games,y as KeyDot,u as KeyItem,k as KeyLabel,x as KeyYears,n as Overview,a as OverviewCard,s as OverviewSection,m as Product,d as Segment,g as SegmentLabel,w as Total,v as Ux,qe as __namedExportsOrder,Ue as default};
