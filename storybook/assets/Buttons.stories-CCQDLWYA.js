const m={title:"Components/Buttons",tags:["autodocs"],parameters:{componentSubtitle:"buttons component styles"},argTypes:{label:{control:"text"},variant:{control:"select",options:["primary","secondary"]},showIcon:{control:"boolean"}}},a={render:({label:s})=>`
    <button class="button">${s}</button>
  `,args:{label:"Click me"}},n={render:({label:s,variant:v,showIcon:b})=>`
    <div class="cta-buttons">
      <a href="#" class="cta-button ${v}">
        ${s}
        ${b?`
          <svg class="arrow-icon" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        `:""}
      </a>
    </div>
  `,args:{label:"Learn More",variant:"primary",showIcon:!0}},r={render:()=>`
    <div class="cta-buttons">
      <a href="#" class="cta-button primary">
        Primary CTA
        <svg class="arrow-icon" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
      <a href="#" class="cta-button secondary">
        Secondary CTA
        <svg class="arrow-icon" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  `};var t,o,e;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: ({
    label
  }) => \`
    <button class="button">\${label}</button>
  \`,
  args: {
    label: 'Click me'
  }
}`,...(e=(o=a.parameters)==null?void 0:o.docs)==null?void 0:e.source}}};var c,l,i;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: ({
    label,
    variant,
    showIcon
  }) => \`
    <div class="cta-buttons">
      <a href="#" class="cta-button \${variant}">
        \${label}
        \${showIcon ? \`
          <svg class="arrow-icon" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        \` : ''}
      </a>
    </div>
  \`,
  args: {
    label: 'Learn More',
    variant: 'primary',
    showIcon: true
  }
}`,...(i=(l=n.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var u,d,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => \`
    <div class="cta-buttons">
      <a href="#" class="cta-button primary">
        Primary CTA
        <svg class="arrow-icon" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
      <a href="#" class="cta-button secondary">
        Secondary CTA
        <svg class="arrow-icon" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  \`
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const g=["Regular","CTAButton","CTAButtonGroup"];export{n as CTAButton,r as CTAButtonGroup,a as Regular,g as __namedExportsOrder,m as default};
