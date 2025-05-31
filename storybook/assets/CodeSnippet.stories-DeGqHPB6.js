const I={title:"Components/Code Snippet",parameters:{layout:"padded",docs:{description:{component:"Code snippet component for displaying formatted code blocks with syntax highlighting and professional styling."}}}},e={render:()=>`
    <div>
      <h3>Basic Code Snippet</h3>
      <p>A simple code block with dark theme styling:</p>
      <pre class="code-snippet"><code>function hello() {
    console.log('Hello, World!');
    return true;
}</code></pre>
    </div>
  `,parameters:{docs:{description:{story:"Basic code snippet with dark theme background and monospace font."}}}},n={render:d=>`
    <div>
      <h3>Code Block with Header</h3>
      <p>Code snippet with a descriptive header showing file path:</p>
      <div class="code-block">
        <div class="code-header">${d.filename}</div>
        <pre class="code-snippet"><code>${d.code}</code></pre>
      </div>
    </div>
  `,args:{filename:".github/workflows/deploy.yml",code:`name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build`},argTypes:{filename:{control:"text",description:"Header text showing file path or description"},code:{control:"text",description:"Code content to display"}},parameters:{docs:{description:{story:"Code block with a header showing file path or description. Includes lightning bolt icon."}}}},o={render:()=>`
    <div>
      <h3>JavaScript Code Example</h3>
      <div class="code-block">
        <div class="code-header">src/components/Portfolio.js</div>
        <pre class="code-snippet"><code>import React, { useState, useEffect } from 'react';

const Portfolio = ({ projects }) => {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="portfolio-container">
      {loading ? (
        <div className="loading">Loading projects...</div>
      ) : (
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Portfolio;</code></pre>
      </div>
    </div>
  `,parameters:{docs:{description:{story:"Example showing JavaScript/React code with proper formatting and readability."}}}},t={render:()=>`
    <div>
      <h3>CSS Code Example</h3>
      <div class="code-block">
        <div class="code-header">src/styles/components/button.css</div>
        <pre class="code-snippet"><code>.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
}

.button.primary {
  background: #007bff;
  color: white;
}

.button.primary:hover {
  background: #0056b3;
  transform: translateY(-1px);
}

.button.secondary {
  background: transparent;
  color: #007bff;
  border: 1px solid #007bff;
}

@media (max-width: 768px) {
  .button {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
}</code></pre>
      </div>
    </div>
  `,parameters:{docs:{description:{story:"CSS code example showing component styling with media queries."}}}},s={render:()=>`
    <div>
      <h3>Inline Code</h3>
      <p>
        You can use inline code like <code>npm install</code> or <code>git commit -m "message"</code> 
        within paragraphs. This is useful for mentioning specific commands, variables like 
        <code>useState</code>, or file names like <code>package.json</code>.
      </p>
      <p>
        Inline code can also be used for API endpoints like <code>/api/users/:id</code> or 
        CSS classes like <code>.container</code> and <code>#navigation</code>.
      </p>
    </div>
  `,parameters:{docs:{description:{story:"Inline code styling for use within text content. Automatically styled differently from code blocks."}}}},r={render:()=>`
    <div>
      <h3>Multiple Code Blocks</h3>
      <p>Here's how multiple code blocks look when used together:</p>
      
      <div class="code-block">
        <div class="code-header">package.json</div>
        <pre class="code-snippet"><code>{
  "name": "portfolio",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}</code></pre>
      </div>

      <p>And then install dependencies:</p>

      <pre class="code-snippet"><code>npm install
npm run dev</code></pre>

      <p>You can also use inline commands like <code>npm start</code> between code blocks.</p>
    </div>
  `,parameters:{docs:{description:{story:"Example showing multiple code blocks with different styles used together in content."}}}},i={render:()=>`
    <div>
      <h3>Terminal Commands</h3>
      <div class="code-block">
        <div class="code-header">Terminal</div>
        <pre class="code-snippet"><code># Clone the repository
git clone https://github.com/username/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy</code></pre>
      </div>
    </div>
  `,parameters:{docs:{description:{story:"Terminal/bash commands with comments, useful for setup instructions."}}}};var c,a,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => \`
    <div>
      <h3>Basic Code Snippet</h3>
      <p>A simple code block with dark theme styling:</p>
      <pre class="code-snippet"><code>function hello() {
    console.log('Hello, World!');
    return true;
}</code></pre>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Basic code snippet with dark theme background and monospace font.'
      }
    }
  }
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var l,m,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => \`
    <div>
      <h3>Code Block with Header</h3>
      <p>Code snippet with a descriptive header showing file path:</p>
      <div class="code-block">
        <div class="code-header">\${args.filename}</div>
        <pre class="code-snippet"><code>\${args.code}</code></pre>
      </div>
    </div>
  \`,
  args: {
    filename: '.github/workflows/deploy.yml',
    code: \`name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build\`
  },
  argTypes: {
    filename: {
      control: 'text',
      description: 'Header text showing file path or description'
    },
    code: {
      control: 'text',
      description: 'Code content to display'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Code block with a header showing file path or description. Includes lightning bolt icon.'
      }
    }
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,v,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => \`
    <div>
      <h3>JavaScript Code Example</h3>
      <div class="code-block">
        <div class="code-header">src/components/Portfolio.js</div>
        <pre class="code-snippet"><code>import React, { useState, useEffect } from 'react';

const Portfolio = ({ projects }) => {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="portfolio-container">
      {loading ? (
        <div className="loading">Loading projects...</div>
      ) : (
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Portfolio;</code></pre>
      </div>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Example showing JavaScript/React code with proper formatting and readability.'
      }
    }
  }
}`,...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,b,k;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => \`
    <div>
      <h3>CSS Code Example</h3>
      <div class="code-block">
        <div class="code-header">src/styles/components/button.css</div>
        <pre class="code-snippet"><code>.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
}

.button.primary {
  background: #007bff;
  color: white;
}

.button.primary:hover {
  background: #0056b3;
  transform: translateY(-1px);
}

.button.secondary {
  background: transparent;
  color: #007bff;
  border: 1px solid #007bff;
}

@media (max-width: 768px) {
  .button {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
}</code></pre>
      </div>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'CSS code example showing component styling with media queries.'
      }
    }
  }
}`,...(k=(b=t.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var y,w,C;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => \`
    <div>
      <h3>Inline Code</h3>
      <p>
        You can use inline code like <code>npm install</code> or <code>git commit -m "message"</code> 
        within paragraphs. This is useful for mentioning specific commands, variables like 
        <code>useState</code>, or file names like <code>package.json</code>.
      </p>
      <p>
        Inline code can also be used for API endpoints like <code>/api/users/:id</code> or 
        CSS classes like <code>.container</code> and <code>#navigation</code>.
      </p>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Inline code styling for use within text content. Automatically styled differently from code blocks.'
      }
    }
  }
}`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var S,j,x;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => \`
    <div>
      <h3>Multiple Code Blocks</h3>
      <p>Here's how multiple code blocks look when used together:</p>
      
      <div class="code-block">
        <div class="code-header">package.json</div>
        <pre class="code-snippet"><code>{
  "name": "portfolio",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}</code></pre>
      </div>

      <p>And then install dependencies:</p>

      <pre class="code-snippet"><code>npm install
npm run dev</code></pre>

      <p>You can also use inline commands like <code>npm start</code> between code blocks.</p>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Example showing multiple code blocks with different styles used together in content.'
      }
    }
  }
}`,...(x=(j=r.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var P,B,H;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => \`
    <div>
      <h3>Terminal Commands</h3>
      <div class="code-block">
        <div class="code-header">Terminal</div>
        <pre class="code-snippet"><code># Clone the repository
git clone https://github.com/username/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy</code></pre>
      </div>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Terminal/bash commands with comments, useful for setup instructions.'
      }
    }
  }
}`,...(H=(B=i.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const T=["BasicCodeSnippet","CodeBlockWithHeader","JavaScriptCode","CSSCode","InlineCode","MultipleCodeBlocks","TerminalCommands"];export{e as BasicCodeSnippet,t as CSSCode,n as CodeBlockWithHeader,s as InlineCode,o as JavaScriptCode,r as MultipleCodeBlocks,i as TerminalCommands,T as __namedExportsOrder,I as default};
