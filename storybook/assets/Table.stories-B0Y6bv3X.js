const x={title:"Components/Table",tags:["autodocs"],parameters:{componentSubtitle:"Table component for displaying structured data",docs:{description:{component:"Table component for displaying structured data with responsive design, dark theme support, and accessibility features. Requires table.css import for full styling."}}},argTypes:{showHeader:{control:"boolean"},headerText:{control:"text"},variant:{control:"select",options:["default","comparison","data"]}}},e={render:({showHeader:f,headerText:u})=>`
    <style>
      /* Inline CSS for demonstration */
      .demo-table-container {
        margin: 2rem 0;
        overflow-x: auto;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        border: 1px solid #e0e0e0;
      }
      .demo-table-block {
        width: 100%;
        border-collapse: collapse;
        background: #ffffff;
        font-size: 0.875rem;
        line-height: 1.6;
      }
      .demo-table-block th {
        background: #f8f9fa;
        color: #333333;
        font-weight: 600;
        text-align: left;
        padding: 1rem;
        border-bottom: 2px solid #e0e0e0;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .demo-table-block td {
        padding: 1rem;
        border-bottom: 1px solid #f0f0f0;
        vertical-align: top;
        color: #333333;
      }
      .demo-table-block tr:last-child td {
        border-bottom: none;
      }
      .demo-table-block tr:hover {
        background: #f8f9fa;
        transition: background-color 0.2s ease;
      }
      .demo-table-header {
        background: #2d2d2d;
        color: #cccccc;
        padding: 0.75rem 1.5rem;
        border-radius: 8px 8px 0 0;
        font-size: 0.875rem;
        font-weight: 500;
        border: 1px solid #333;
        border-bottom: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .demo-table-header::before {
        content: "📊";
        opacity: 0.8;
      }
      .demo-table-container .demo-table-block {
        border-radius: 0 0 8px 8px;
      }
    </style>
    
    <div class="demo-table-container">
      ${f?`<div class="demo-table-header">${u}</div>`:""}
      <table class="demo-table-block">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Designer</td>
            <td>UX</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>Developer</td>
            <td>Engineering</td>
          </tr>
          <tr>
            <td>Bob Johnson</td>
            <td>Manager</td>
            <td>Product</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,args:{showHeader:!1,headerText:"Team Members"},parameters:{docs:{description:{story:"Basic table with simple data structure."}}}},t={render:()=>`
    <style>
      /* Inline CSS for demonstration */
      .demo-table-container {
        margin: 2rem 0;
        overflow-x: auto;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        border: 1px solid #e0e0e0;
      }
      .demo-table-block {
        width: 100%;
        border-collapse: collapse;
        background: #ffffff;
        font-size: 0.875rem;
        line-height: 1.6;
      }
      .demo-table-block th {
        background: #f8f9fa;
        color: #333333;
        font-weight: 600;
        text-align: left;
        padding: 1rem;
        border-bottom: 2px solid #e0e0e0;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .demo-table-block td {
        padding: 1rem;
        border-bottom: 1px solid #f0f0f0;
        vertical-align: top;
        color: #333333;
      }
      .demo-table-block tr:last-child td {
        border-bottom: none;
      }
      .demo-table-block tr:hover {
        background: #f8f9fa;
        transition: background-color 0.2s ease;
      }
      .demo-table-header {
        background: #2d2d2d;
        color: #cccccc;
        padding: 0.75rem 1.5rem;
        border-radius: 8px 8px 0 0;
        font-size: 0.875rem;
        font-weight: 500;
        border: 1px solid #333;
        border-bottom: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .demo-table-header::before {
        content: "📊";
        opacity: 0.8;
      }
      .demo-table-container .demo-table-block {
        border-radius: 0 0 8px 8px;
      }
      .col-tool { width: 20%; min-width: 120px; }
      .col-strengths { width: 40%; min-width: 200px; }
      .col-weaknesses { width: 40%; min-width: 200px; }
    </style>
    
    <div class="demo-table-container">
      <div class="demo-table-header">AI Tool Comparison</div>
      <table class="demo-table-block">
        <thead>
          <tr>
            <th class="col-tool">Tool</th>
            <th class="col-strengths">Strengths</th>
            <th class="col-weaknesses">Weaknesses</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Tool">Cursor.ai</td>
            <td data-label="Strengths">IDE integration, file-level editing, prompt history</td>
            <td data-label="Weaknesses">Sometimes over-eager to modify Gradle files</td>
          </tr>
          <tr>
            <td data-label="Tool">Claude Sonnet 3.4</td>
            <td data-label="Strengths">Creative, exploratory</td>
            <td data-label="Weaknesses">Prone to error loops, inconsistent</td>
          </tr>
          <tr>
            <td data-label="Tool">Claude Sonnet 3.7</td>
            <td data-label="Strengths">More stable, useful for structure</td>
            <td data-label="Weaknesses">Still struggled with complex workflows</td>
          </tr>
          <tr>
            <td data-label="Tool">Claude Sonnet 4</td>
            <td data-label="Strengths">Best for debugging, accuracy, concise fixes</td>
            <td data-label="Weaknesses">Needs fewer—but smarter—prompts</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,parameters:{docs:{description:{story:"Comparison table showing AI tools with their strengths and weaknesses. Includes data-label attributes for mobile accessibility."}}}},o={render:()=>`
    <style>
      /* Inline CSS for demonstration */
      .demo-table-container {
        margin: 2rem 0;
        overflow-x: auto;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        border: 1px solid #e0e0e0;
      }
      .demo-table-block {
        width: 100%;
        border-collapse: collapse;
        background: #ffffff;
        font-size: 0.875rem;
        line-height: 1.6;
      }
      .demo-table-block th {
        background: #f8f9fa;
        color: #333333;
        font-weight: 600;
        text-align: left;
        padding: 1rem;
        border-bottom: 2px solid #e0e0e0;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .demo-table-block td {
        padding: 1rem;
        border-bottom: 1px solid #f0f0f0;
        vertical-align: top;
        color: #333333;
      }
      .demo-table-block tr:last-child td {
        border-bottom: none;
      }
      .demo-table-block tr:hover {
        background: #f8f9fa;
        transition: background-color 0.2s ease;
      }
      .demo-table-header {
        background: #2d2d2d;
        color: #cccccc;
        padding: 0.75rem 1.5rem;
        border-radius: 8px 8px 0 0;
        font-size: 0.875rem;
        font-weight: 500;
        border: 1px solid #333;
        border-bottom: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .demo-table-header::before {
        content: "📊";
        opacity: 0.8;
      }
      .demo-table-container .demo-table-block {
        border-radius: 0 0 8px 8px;
      }
      .text-right { text-align: right; }
    </style>
    
    <div class="demo-table-container">
      <div class="demo-table-header">Project Statistics</div>
      <table class="demo-table-block">
        <thead>
          <tr>
            <th>Project</th>
            <th>Duration</th>
            <th>Team Size</th>
            <th class="text-right">Budget</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Project">Website Redesign</td>
            <td data-label="Duration">3 months</td>
            <td data-label="Team Size">5 people</td>
            <td data-label="Budget" class="text-right">$25,000</td>
          </tr>
          <tr>
            <td data-label="Project">Mobile App</td>
            <td data-label="Duration">6 months</td>
            <td data-label="Team Size">8 people</td>
            <td data-label="Budget" class="text-right">$45,000</td>
          </tr>
          <tr>
            <td data-label="Project">Brand Identity</td>
            <td data-label="Duration">2 months</td>
            <td data-label="Team Size">3 people</td>
            <td data-label="Budget" class="text-right">$15,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,parameters:{docs:{description:{story:"Data table with numerical values and right-aligned columns for better readability."}}}},n={render:()=>`
    <style>
      /* Inline CSS for demonstration */
      .demo-table-container {
        margin: 2rem 0;
        overflow-x: auto;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        border: 1px solid #e0e0e0;
      }
      .demo-table-block {
        width: 100%;
        border-collapse: collapse;
        background: #ffffff;
        font-size: 0.875rem;
        line-height: 1.6;
      }
      .demo-table-block th {
        background: #f8f9fa;
        color: #333333;
        font-weight: 600;
        text-align: left;
        padding: 1rem;
        border-bottom: 2px solid #e0e0e0;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .demo-table-block td {
        padding: 1rem;
        border-bottom: 1px solid #f0f0f0;
        vertical-align: top;
        color: #333333;
      }
      .demo-table-block tr:last-child td {
        border-bottom: none;
      }
      .demo-table-block tr:hover {
        background: #f8f9fa;
        transition: background-color 0.2s ease;
      }
      .demo-table-header {
        background: #2d2d2d;
        color: #cccccc;
        padding: 0.75rem 1.5rem;
        border-radius: 8px 8px 0 0;
        font-size: 0.875rem;
        font-weight: 500;
        border: 1px solid #333;
        border-bottom: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .demo-table-header::before {
        content: "📊";
        opacity: 0.8;
      }
      .demo-table-container .demo-table-block {
        border-radius: 0 0 8px 8px;
      }
      
      /* Responsive styles for demonstration */
      @media (max-width: 768px) {
        .demo-table-container {
          margin: 1rem -1rem;
          border-radius: 0;
          border-left: none;
          border-right: none;
        }
        .demo-table-header {
          padding: 0.5rem 1rem;
          margin: 0 -1rem;
          border-radius: 0;
          border-left: none;
          border-right: none;
        }
        .demo-table-container .demo-table-block {
          border-radius: 0;
        }
        .demo-table-block th,
        .demo-table-block td {
          padding: 0.75rem 0.5rem;
          font-size: 0.8rem;
        }
      }
      
      @media (max-width: 480px) {
        .demo-table-block {
          display: block;
        }
        .demo-table-block thead {
          display: none;
        }
        .demo-table-block tbody {
          display: block;
        }
        .demo-table-block tr {
          display: block;
          margin-bottom: 1rem;
          padding: 1rem;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          background: #ffffff;
        }
        .demo-table-block td {
          display: block;
          padding: 0.5rem 0;
          border-bottom: 1px solid #f0f0f0;
          text-align: left;
        }
        .demo-table-block td:last-child {
          border-bottom: none;
        }
        .demo-table-block td::before {
          content: attr(data-label) ": ";
          font-weight: 600;
          color: #666666;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.5px;
        }
      }
    </style>
    
    <div class="demo-table-container">
      <div class="demo-table-header">Responsive Table Example</div>
      <table class="demo-table-block">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Description</th>
            <th>Status</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Feature">User Authentication</td>
            <td data-label="Description">Login and registration system with OAuth support</td>
            <td data-label="Status">Complete</td>
            <td data-label="Priority">High</td>
          </tr>
          <tr>
            <td data-label="Feature">Dashboard</td>
            <td data-label="Description">Main user dashboard with analytics and metrics</td>
            <td data-label="Status">In Progress</td>
            <td data-label="Priority">High</td>
          </tr>
          <tr>
            <td data-label="Feature">API Integration</td>
            <td data-label="Description">Third-party service integrations and webhooks</td>
            <td data-label="Status">Planned</td>
            <td data-label="Priority">Medium</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div style="margin-top: 2rem; padding: 1rem; background: #f8f9fa; border-radius: 8px;">
      <h4>Responsive Behavior:</h4>
      <ul>
        <li><strong>Desktop:</strong> Full table with all columns visible</li>
        <li><strong>Tablet:</strong> Reduced padding and font sizes</li>
        <li><strong>Mobile:</strong> Stacked layout with data labels</li>
      </ul>
      <p><em>Resize your browser window to see the responsive behavior in action.</em></p>
    </div>
  `,parameters:{docs:{description:{story:"Table demonstrating responsive behavior with mobile-first design and accessibility features."}}}};var a,r,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: ({
    showHeader,
    headerText
  }) => \`
    <style>
      /* Inline CSS for demonstration */
      .demo-table-container {
        margin: 2rem 0;
        overflow-x: auto;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        border: 1px solid #e0e0e0;
      }
      .demo-table-block {
        width: 100%;
        border-collapse: collapse;
        background: #ffffff;
        font-size: 0.875rem;
        line-height: 1.6;
      }
      .demo-table-block th {
        background: #f8f9fa;
        color: #333333;
        font-weight: 600;
        text-align: left;
        padding: 1rem;
        border-bottom: 2px solid #e0e0e0;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .demo-table-block td {
        padding: 1rem;
        border-bottom: 1px solid #f0f0f0;
        vertical-align: top;
        color: #333333;
      }
      .demo-table-block tr:last-child td {
        border-bottom: none;
      }
      .demo-table-block tr:hover {
        background: #f8f9fa;
        transition: background-color 0.2s ease;
      }
      .demo-table-header {
        background: #2d2d2d;
        color: #cccccc;
        padding: 0.75rem 1.5rem;
        border-radius: 8px 8px 0 0;
        font-size: 0.875rem;
        font-weight: 500;
        border: 1px solid #333;
        border-bottom: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .demo-table-header::before {
        content: "📊";
        opacity: 0.8;
      }
      .demo-table-container .demo-table-block {
        border-radius: 0 0 8px 8px;
      }
    </style>
    
    <div class="demo-table-container">
      \${showHeader ? \`<div class="demo-table-header">\${headerText}</div>\` : ''}
      <table class="demo-table-block">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Designer</td>
            <td>UX</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>Developer</td>
            <td>Engineering</td>
          </tr>
          <tr>
            <td>Bob Johnson</td>
            <td>Manager</td>
            <td>Product</td>
          </tr>
        </tbody>
      </table>
    </div>
  \`,
  args: {
    showHeader: false,
    headerText: 'Team Members'
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic table with simple data structure.'
      }
    }
  }
}`,...(d=(r=e.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var l,i,s;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => \`
    <style>
      /* Inline CSS for demonstration */
      .demo-table-container {
        margin: 2rem 0;
        overflow-x: auto;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        border: 1px solid #e0e0e0;
      }
      .demo-table-block {
        width: 100%;
        border-collapse: collapse;
        background: #ffffff;
        font-size: 0.875rem;
        line-height: 1.6;
      }
      .demo-table-block th {
        background: #f8f9fa;
        color: #333333;
        font-weight: 600;
        text-align: left;
        padding: 1rem;
        border-bottom: 2px solid #e0e0e0;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .demo-table-block td {
        padding: 1rem;
        border-bottom: 1px solid #f0f0f0;
        vertical-align: top;
        color: #333333;
      }
      .demo-table-block tr:last-child td {
        border-bottom: none;
      }
      .demo-table-block tr:hover {
        background: #f8f9fa;
        transition: background-color 0.2s ease;
      }
      .demo-table-header {
        background: #2d2d2d;
        color: #cccccc;
        padding: 0.75rem 1.5rem;
        border-radius: 8px 8px 0 0;
        font-size: 0.875rem;
        font-weight: 500;
        border: 1px solid #333;
        border-bottom: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .demo-table-header::before {
        content: "📊";
        opacity: 0.8;
      }
      .demo-table-container .demo-table-block {
        border-radius: 0 0 8px 8px;
      }
      .col-tool { width: 20%; min-width: 120px; }
      .col-strengths { width: 40%; min-width: 200px; }
      .col-weaknesses { width: 40%; min-width: 200px; }
    </style>
    
    <div class="demo-table-container">
      <div class="demo-table-header">AI Tool Comparison</div>
      <table class="demo-table-block">
        <thead>
          <tr>
            <th class="col-tool">Tool</th>
            <th class="col-strengths">Strengths</th>
            <th class="col-weaknesses">Weaknesses</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Tool">Cursor.ai</td>
            <td data-label="Strengths">IDE integration, file-level editing, prompt history</td>
            <td data-label="Weaknesses">Sometimes over-eager to modify Gradle files</td>
          </tr>
          <tr>
            <td data-label="Tool">Claude Sonnet 3.4</td>
            <td data-label="Strengths">Creative, exploratory</td>
            <td data-label="Weaknesses">Prone to error loops, inconsistent</td>
          </tr>
          <tr>
            <td data-label="Tool">Claude Sonnet 3.7</td>
            <td data-label="Strengths">More stable, useful for structure</td>
            <td data-label="Weaknesses">Still struggled with complex workflows</td>
          </tr>
          <tr>
            <td data-label="Tool">Claude Sonnet 4</td>
            <td data-label="Strengths">Best for debugging, accuracy, concise fixes</td>
            <td data-label="Weaknesses">Needs fewer—but smarter—prompts</td>
          </tr>
        </tbody>
      </table>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Comparison table showing AI tools with their strengths and weaknesses. Includes data-label attributes for mobile accessibility.'
      }
    }
  }
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var b,c,m;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => \`
    <style>
      /* Inline CSS for demonstration */
      .demo-table-container {
        margin: 2rem 0;
        overflow-x: auto;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        border: 1px solid #e0e0e0;
      }
      .demo-table-block {
        width: 100%;
        border-collapse: collapse;
        background: #ffffff;
        font-size: 0.875rem;
        line-height: 1.6;
      }
      .demo-table-block th {
        background: #f8f9fa;
        color: #333333;
        font-weight: 600;
        text-align: left;
        padding: 1rem;
        border-bottom: 2px solid #e0e0e0;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .demo-table-block td {
        padding: 1rem;
        border-bottom: 1px solid #f0f0f0;
        vertical-align: top;
        color: #333333;
      }
      .demo-table-block tr:last-child td {
        border-bottom: none;
      }
      .demo-table-block tr:hover {
        background: #f8f9fa;
        transition: background-color 0.2s ease;
      }
      .demo-table-header {
        background: #2d2d2d;
        color: #cccccc;
        padding: 0.75rem 1.5rem;
        border-radius: 8px 8px 0 0;
        font-size: 0.875rem;
        font-weight: 500;
        border: 1px solid #333;
        border-bottom: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .demo-table-header::before {
        content: "📊";
        opacity: 0.8;
      }
      .demo-table-container .demo-table-block {
        border-radius: 0 0 8px 8px;
      }
      .text-right { text-align: right; }
    </style>
    
    <div class="demo-table-container">
      <div class="demo-table-header">Project Statistics</div>
      <table class="demo-table-block">
        <thead>
          <tr>
            <th>Project</th>
            <th>Duration</th>
            <th>Team Size</th>
            <th class="text-right">Budget</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Project">Website Redesign</td>
            <td data-label="Duration">3 months</td>
            <td data-label="Team Size">5 people</td>
            <td data-label="Budget" class="text-right">$25,000</td>
          </tr>
          <tr>
            <td data-label="Project">Mobile App</td>
            <td data-label="Duration">6 months</td>
            <td data-label="Team Size">8 people</td>
            <td data-label="Budget" class="text-right">$45,000</td>
          </tr>
          <tr>
            <td data-label="Project">Brand Identity</td>
            <td data-label="Duration">2 months</td>
            <td data-label="Team Size">3 people</td>
            <td data-label="Budget" class="text-right">$15,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Data table with numerical values and right-aligned columns for better readability.'
      }
    }
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,h,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => \`
    <style>
      /* Inline CSS for demonstration */
      .demo-table-container {
        margin: 2rem 0;
        overflow-x: auto;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        border: 1px solid #e0e0e0;
      }
      .demo-table-block {
        width: 100%;
        border-collapse: collapse;
        background: #ffffff;
        font-size: 0.875rem;
        line-height: 1.6;
      }
      .demo-table-block th {
        background: #f8f9fa;
        color: #333333;
        font-weight: 600;
        text-align: left;
        padding: 1rem;
        border-bottom: 2px solid #e0e0e0;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .demo-table-block td {
        padding: 1rem;
        border-bottom: 1px solid #f0f0f0;
        vertical-align: top;
        color: #333333;
      }
      .demo-table-block tr:last-child td {
        border-bottom: none;
      }
      .demo-table-block tr:hover {
        background: #f8f9fa;
        transition: background-color 0.2s ease;
      }
      .demo-table-header {
        background: #2d2d2d;
        color: #cccccc;
        padding: 0.75rem 1.5rem;
        border-radius: 8px 8px 0 0;
        font-size: 0.875rem;
        font-weight: 500;
        border: 1px solid #333;
        border-bottom: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .demo-table-header::before {
        content: "📊";
        opacity: 0.8;
      }
      .demo-table-container .demo-table-block {
        border-radius: 0 0 8px 8px;
      }
      
      /* Responsive styles for demonstration */
      @media (max-width: 768px) {
        .demo-table-container {
          margin: 1rem -1rem;
          border-radius: 0;
          border-left: none;
          border-right: none;
        }
        .demo-table-header {
          padding: 0.5rem 1rem;
          margin: 0 -1rem;
          border-radius: 0;
          border-left: none;
          border-right: none;
        }
        .demo-table-container .demo-table-block {
          border-radius: 0;
        }
        .demo-table-block th,
        .demo-table-block td {
          padding: 0.75rem 0.5rem;
          font-size: 0.8rem;
        }
      }
      
      @media (max-width: 480px) {
        .demo-table-block {
          display: block;
        }
        .demo-table-block thead {
          display: none;
        }
        .demo-table-block tbody {
          display: block;
        }
        .demo-table-block tr {
          display: block;
          margin-bottom: 1rem;
          padding: 1rem;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          background: #ffffff;
        }
        .demo-table-block td {
          display: block;
          padding: 0.5rem 0;
          border-bottom: 1px solid #f0f0f0;
          text-align: left;
        }
        .demo-table-block td:last-child {
          border-bottom: none;
        }
        .demo-table-block td::before {
          content: attr(data-label) ": ";
          font-weight: 600;
          color: #666666;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.5px;
        }
      }
    </style>
    
    <div class="demo-table-container">
      <div class="demo-table-header">Responsive Table Example</div>
      <table class="demo-table-block">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Description</th>
            <th>Status</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Feature">User Authentication</td>
            <td data-label="Description">Login and registration system with OAuth support</td>
            <td data-label="Status">Complete</td>
            <td data-label="Priority">High</td>
          </tr>
          <tr>
            <td data-label="Feature">Dashboard</td>
            <td data-label="Description">Main user dashboard with analytics and metrics</td>
            <td data-label="Status">In Progress</td>
            <td data-label="Priority">High</td>
          </tr>
          <tr>
            <td data-label="Feature">API Integration</td>
            <td data-label="Description">Third-party service integrations and webhooks</td>
            <td data-label="Status">Planned</td>
            <td data-label="Priority">Medium</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div style="margin-top: 2rem; padding: 1rem; background: #f8f9fa; border-radius: 8px;">
      <h4>Responsive Behavior:</h4>
      <ul>
        <li><strong>Desktop:</strong> Full table with all columns visible</li>
        <li><strong>Tablet:</strong> Reduced padding and font sizes</li>
        <li><strong>Mobile:</strong> Stacked layout with data labels</li>
      </ul>
      <p><em>Resize your browser window to see the responsive behavior in action.</em></p>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Table demonstrating responsive behavior with mobile-first design and accessibility features.'
      }
    }
  }
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const k=["BasicTable","AIToolsComparison","DataTable","ResponsiveTable"];export{t as AIToolsComparison,e as BasicTable,o as DataTable,n as ResponsiveTable,k as __namedExportsOrder,x as default};
