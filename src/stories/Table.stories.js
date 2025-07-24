export default {
  title: 'Components/Table',
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Table component for displaying structured data',
    docs: {
      description: {
        component: 'Table component for displaying structured data with responsive design, accessibility features, and brand color integration. Requires table.css import for full styling.'
      }
    }
  },
  
  argTypes: {
    showHeader: { control: 'boolean' },
    headerText: { control: 'text' },
    variant: {
      control: 'select',
      options: ['default', 'comparison', 'data'],
    },
  },
};

// Basic table without header
export const BasicTable = {
  render: ({ showHeader, headerText }) => `
    <style>
      /* Inline CSS for demonstration - matches table.css */
      .demo-table-container {
        margin: 2rem 0;
        overflow-x: auto;
        border-radius: 4px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        border: 1px solid #e0e0e0;
        outline: 2px solid transparent;
        outline-offset: 2px;
      }
      .demo-table-container:focus-within {
        outline-color: #00A7E1;
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
        color: #2c3e50;
        font-weight: 500;
        text-align: left;
        padding: 1rem;
        border-bottom: 2px solid #e0e0e0;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        position: relative;
      }
      .demo-table-block td {
        padding: 1rem;
        border-bottom: 1px solid #f8f9fa;
        vertical-align: top;
        color: #333;
      }
      .demo-table-block tr:last-child td {
        border-bottom: none;
      }
      .demo-table-block tr:hover {
        background: #f8f9fa;
        transition: background-color 0.2s ease;
      }
      .demo-table-block tr:focus-within {
        background: #f8f9fa;
        outline: 2px solid #00A7E1;
        outline-offset: -2px;
      }
      .demo-table-block td:focus,
      .demo-table-block th:focus {
        outline: 2px solid #00A7E1;
        outline-offset: -2px;
        background: rgba(0, 167, 225, 0.1);
      }
      .demo-table-header {
        background: #00A7E1;
        color: #ffffff;
        padding: 0.75rem 1.5rem;
        border-radius: 4px 4px 0 0;
        font-size: 0.875rem;
        font-weight: 500;
        border: 1px solid #00A7E1;
        border-bottom: none;
        display: flex;
        align-items: center;
        position: sticky;
        top: 0;
        z-index: 10;
      }
      .demo-table-container .demo-table-block {
        border-radius: 0 0 4px 4px;
      }
    </style>
    
    <div class="demo-table-container">
      ${showHeader ? `<div class="demo-table-header">${headerText}</div>` : ''}
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
  `,
  args: {
    showHeader: false,
    headerText: 'Team Members',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic table with simple data structure.'
      }
    }
  }
};

// AI Tools Comparison Table (from the blog post)
export const AIToolsComparison = {
  render: () => `
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
        background: #00A7E1;
        color: #ffffff;
        padding: 0.75rem 1.5rem;
        border-radius: 4px 4px 0 0;
        font-size: 0.875rem;
        font-weight: 500;
        border: 1px solid #00A7E1;
        border-bottom: none;
        display: flex;
        align-items: center;
        position: sticky;
        top: 0;
        z-index: 10;
      }
      .demo-table-container .demo-table-block {
        border-radius: 0 0 4px 4px;
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
  `,
  parameters: {
    docs: {
      description: {
        story: 'Comparison table showing AI tools with their strengths and weaknesses. Includes data-label attributes for mobile accessibility.'
      }
    }
  }
};

// Data table with numbers
export const DataTable = {
  render: () => `
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
        background: #00A7E1;
        color: #ffffff;
        padding: 0.75rem 1.5rem;
        border-radius: 4px 4px 0 0;
        font-size: 0.875rem;
        font-weight: 500;
        border: 1px solid #00A7E1;
        border-bottom: none;
        display: flex;
        align-items: center;
        position: sticky;
        top: 0;
        z-index: 10;
      }
      .demo-table-container .demo-table-block {
        border-radius: 0 0 4px 4px;
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
  `,
  parameters: {
    docs: {
      description: {
        story: 'Data table with numerical values and right-aligned columns for better readability.'
      }
    }
  }
};

// Responsive table example
export const ResponsiveTable = {
  render: () => `
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
      
      /* Responsive styles for demonstration - matches table.css */
      @media (max-width: 768px) {
        .demo-table-container {
          border-radius: 0;
          border-left: none;
          border-right: none;
          overflow-x: visible;
        }
        .demo-table-header {
          padding: 0.5rem 1rem;
          margin: 0 0 0 0;
          border-radius: 0;
          border-left: none;
          border-right: none;
          width: 100%;
          box-sizing: border-box;
        }
        .demo-table-container .demo-table-block {
          border-radius: 0;
          table-layout: auto;
          width: 100%;
        }
        .demo-table-block th,
        .demo-table-block td {
          padding: 0.5rem 0.5rem;
          font-size: 0.75rem;
          word-wrap: break-word;
          overflow-wrap: break-word;
          white-space: normal;
          min-width: 0;
        }
        .demo-table-block .col-tool,
        .demo-table-block .col-strengths,
        .demo-table-block .col-weaknesses {
          min-width: 0;
          width: auto;
        }
      }
      
      @media (max-width: 480px) {
        .demo-table-container {
          overflow-x: hidden;
          width: 100%;
          max-width: 100vw;
          background: transparent;
          margin: 0;
          overflow-x: auto;
          border-radius: 0;
          box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
          border: 0;
          outline: 0;
          outline-offset: 0;
        }
        .demo-table-block {
          display: block;
          width: 100%;
          max-width: 100%;
          background: transparent;
        }
        .demo-table-block thead {
          display: none;
        }
        .demo-table-block tbody {
          display: block;
          width: 100%;
          background: transparent;
        }
        .demo-table-block tr {
          display: block;
          width: 100%;
          margin-bottom: 1rem;
          padding: 1rem;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          background: #ffffff;
          box-sizing: border-box;
        }
        .demo-table-block td {
          display: block;
          width: 100%;
          padding: 0.5rem 0;
          border-bottom: 1px solid #f8f9fa;
          text-align: left;
          box-sizing: border-box;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        .demo-table-block td:last-child {
          border-bottom: none;
        }
        .demo-table-block td::before {
          content: attr(data-label) ": ";
          font-weight: 500;
          color: #666;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.5px;
          display: inline-block;
          min-width: 80px;
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
  `,
  parameters: {
    docs: {
      description: {
        story: 'Table demonstrating responsive behavior with mobile-first design and accessibility features.'
      }
    }
  }
}; 