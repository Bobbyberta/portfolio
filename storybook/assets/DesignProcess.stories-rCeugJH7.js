const l={title:"Components/DesignProcess",tags:["autodocs"],parameters:{componentSubtitle:"design-process component styles"}},e=a=>{const{stepNumber:i,stepTitle:n,descriptionParagraphs:o,imageSrc:c,imageAlt:p}=a;return`
    <div class="process-step">
      <h3>${i}. ${n}</h3>
      <div class="process-content">
        <div class="process-description">
          ${o.map(m=>`<p>${m}</p>`).join("")}
        </div>
        <div class="img-container process-image">
          <img src="${c}" 
               alt="${p}" 
               class="img-responsive"
               loading="lazy">
        </div>
      </div>
    </div>
  `};e.args={stepNumber:1,stepTitle:"Name of stage",descriptionParagraphs:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat sem in quam porta, quis ullamcorper turpis pharetra. Nam augue mauris, tristique id sem eu, ultricies pellentesque erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","Praesent tristique eleifend tortor at hendrerit. Nulla sapien lorem, fermentum non dolor a, malesuada iaculis ante. Curabitur efficitur est non."],imageSrc:"../../assets/images/bubble-function-algebra-meltdown.PNG",imageAlt:"Original Algebra Meltdown game screenshot"};e.argTypes={stepNumber:{control:"number",name:"Step Number"},stepTitle:{control:"text",name:"Step Title"},descriptionParagraphs:{control:"object",name:"Description Paragraphs"},imageSrc:{control:"text",name:"Image Source"},imageAlt:{control:"text",name:"Image Alt Text"}};var s,t,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const u=["ProcessStepSection"];export{e as ProcessStepSection,u as __namedExportsOrder,l as default};
