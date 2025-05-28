const y={title:"Components/SectionCta",tags:["autodocs"],parameters:{componentSubtitle:"section-cta component styles"}},t=r=>{const{heading:o,ctaText:c,ctaText2:s,primaryLabel:i,primaryHref:l,secondaryLabel:d,secondaryHref:m}=r;return`
    <div class="cta-content">
      <h2>${o}</h2>
      <div class="cta-text">
        <p>${c}</p>
        <p>${s}</p>
      </div>
      <div class="cta-buttons">
        <a href="${l}" class="cta-button primary">${i}</a>
        <a href="${m}" class="cta-button secondary">${d}</a>
      </div>
    </div>
  `};t.args={heading:"Thank you for reading my case study!",ctaText:"Want to work with me? Feel free to contact me!",ctaText2:"...or just say hello on my social media.",primaryLabel:"Contact Me",primaryHref:"/pages/contact.html",secondaryLabel:"Back to Blog",secondaryHref:"/pages/blog.html"};t.argTypes={heading:{control:"text",name:"Heading"},ctaText:{control:"text",name:"CTA Text 1"},ctaText2:{control:"text",name:"CTA Text 2"},primaryLabel:{control:"text",name:"Primary Button Label"},primaryHref:{control:"text",name:"Primary Button Link"},secondaryLabel:{control:"text",name:"Secondary Button Label"},secondaryHref:{control:"text",name:"Secondary Button Link"}};var a,e,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const {
    heading,
    ctaText,
    ctaText2,
    primaryLabel,
    primaryHref,
    secondaryLabel,
    secondaryHref
  } = args;
  return \`
    <div class="cta-content">
      <h2>\${heading}</h2>
      <div class="cta-text">
        <p>\${ctaText}</p>
        <p>\${ctaText2}</p>
      </div>
      <div class="cta-buttons">
        <a href="\${primaryHref}" class="cta-button primary">\${primaryLabel}</a>
        <a href="\${secondaryHref}" class="cta-button secondary">\${secondaryLabel}</a>
      </div>
    </div>
  \`;
}`,...(n=(e=t.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const p=["CallToActionFooter"];export{t as CallToActionFooter,p as __namedExportsOrder,y as default};
