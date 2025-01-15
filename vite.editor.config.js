import { resolve } from 'path'
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'

// Plugin to serve website content
function websiteContentPlugin() {
	return {
		name: 'website-content',
		configureServer(server) {
			server.middlewares.use((req, res, next) => {
				if (!req.url?.startsWith('/website-content/')) {
					return next();
				}

				const rootDir = process.cwd();
				const requestedFile = req.url.replace('/website-content/', '');
				
				let filePath;
				if (requestedFile === 'index.html') {
					filePath = path.join(rootDir, 'src', 'index.html');
				} else if (requestedFile === 'blog.html' || requestedFile === 'blog/index.html') {
					filePath = path.join(rootDir, 'src', 'pages', 'blog.html');
				} else {
					filePath = path.join(rootDir, 'src', 'pages', requestedFile);
				}

				if (fs.existsSync(filePath)) {
					const content = fs.readFileSync(filePath, 'utf-8');
					res.setHeader('Content-Type', 'text/plain');
					res.end(content);
				} else {
					next();
				}
			});
		}
	};
}

export default defineConfig({
	base: '/portfolio/',
	root: resolve(__dirname, 'editor/src'),
	publicDir: false,
	server: {
		port: 3001,
		fs: {
			strict: false,
			allow: ['..', '../..']
		}
	},
	resolve: {
		alias: {
			'@website': resolve(__dirname, 'src'),
			'@editor': resolve(__dirname, 'editor/src'),
			'@styles': resolve(__dirname, 'src/styles'),
			'@website-styles': resolve(__dirname, 'src/styles'),
			'@editor-styles': resolve(__dirname, 'editor/src/styles')
		}
	},
	build: {
		outDir: resolve(__dirname, 'dist/editor'),
		emptyOutDir: true,
		rollupOptions: {
			input: resolve(__dirname, 'editor/src/index.html')
		}
	},
	optimizeDeps: {
		include: [
			'./components/wysiwyg-editor.js',
			'./components/content-manager.js',
			'./components/content-export.js',
			'./utils/content-updater.js',
			'./utils/github-updater.js',
			'./config.js'
		]
	},
	css: {
		preprocessorOptions: {
			css: {
				additionalData: `
					@import "${resolve(__dirname, 'src/styles/base/variables.css')}";
					@import "${resolve(__dirname, 'src/styles/base/reset.css')}";
					@import "${resolve(__dirname, 'src/styles/base/typography.css')}";
				`
			}
		},
		modules: {
			scopeBehaviour: 'local'
		},
		devSourcemap: true
	},
	define: {
		'process.env.BASE_URL': JSON.stringify('/portfolio/')
	},
	plugins: [websiteContentPlugin()]
})