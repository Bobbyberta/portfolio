const u={title:"Components/DesignProcess",tags:["autodocs"],parameters:{componentSubtitle:"design-process component styles"}},e=n=>{const{sectionTitle:i,steps:a}=n;return`
    <section class="case-study-approach">
      <h2>${i}</h2>
      <div class="approach-grid">
        ${a.map(t=>`
          <div class="approach-item">
            <h3>${t.title}</h3>
            <p>${t.description}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `};e.args={sectionTitle:"My Approach",steps:[{title:"Understanding the User",description:"Analyzing existing user feedback and collaborating with sales and support teams."},{title:"Conceptualization",description:"Combining function machine concept with bubble shooter mechanic."},{title:"Rapid Prototyping",description:"Utilizing paper prototypes and a reusable game template."},{title:"User Testing",description:"Conducting sessions with target users in school settings."}]};e.argTypes={sectionTitle:{control:"text",name:"Section Title"},steps:{control:"object",name:"Steps",description:"Array of approach steps (title and description)"}};const s=n=>{const{stepNumber:i,stepTitle:a,descriptionParagraphs:t,imageSrc:g,imageAlt:m}=n;return`
    <div class="process-step">
      <h3>${i}. ${a}</h3>
      <div class="process-content">
        <div class="process-description">
          ${t.map(h=>`<p>${h}</p>`).join("")}
        </div>
        <div class="img-container process-image">
          <img src="${g}" 
               alt="${m}" 
               class="img-responsive"
               loading="lazy">
        </div>
      </div>
    </div>
  `};s.args={stepNumber:1,stepTitle:"Define",descriptionParagraphs:["Replacing an old game - Mangahigh were discontinuing Algebra Meltdown and wanted a new algebra game to take its place. After speaking with sales and support, users loved the function machine element but found the game as a whole too difficult.","I focused on the function machine element and started looking at a way to simplify the mechanic."],imageSrc:"../../assets/images/bubble-function-algebra-meltdown.PNG",imageAlt:"Original Algebra Meltdown game screenshot"};s.argTypes={stepNumber:{control:"number",name:"Step Number"},stepTitle:{control:"text",name:"Step Title"},descriptionParagraphs:{control:"object",name:"Description Paragraphs"},imageSrc:{control:"text",name:"Image Source"},imageAlt:{control:"text",name:"Image Alt Text"}};var o,r,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const {
    sectionTitle,
    steps
  } = args;
  return \`
    <section class="case-study-approach">
      <h2>\${sectionTitle}</h2>
      <div class="approach-grid">
        \${steps.map(step => \`
          <div class="approach-item">
            <h3>\${step.title}</h3>
            <p>\${step.description}</p>
          </div>
        \`).join('')}
      </div>
    </section>
  \`;
}`,...(c=(r=e.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var p,l,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const {
    stepNumber,
    stepTitle,
    descriptionParagraphs,
    imageSrc,
    imageAlt
  } = args;
  return \`
    <div class="process-step">
      <h3>\${stepNumber}. \${stepTitle}</h3>
      <div class="process-content">
        <div class="process-description">
          \${descriptionParagraphs.map(p => \`<p>\${p}</p>\`).join('')}
        </div>
        <div class="img-container process-image">
          <img src="\${imageSrc}" 
               alt="\${imageAlt}" 
               class="img-responsive"
               loading="lazy">
        </div>
      </div>
    </div>
  \`;
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const v=["DesignApproachSection","ProcessStepSection"];export{e as DesignApproachSection,s as ProcessStepSection,v as __namedExportsOrder,u as default};
