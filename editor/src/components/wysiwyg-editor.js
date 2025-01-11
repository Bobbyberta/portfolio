export class WYSIWYGEditor {
    constructor(selector, options = {}) {
        this.container = document.querySelector(selector);
        this.options = {
            toolbarItems: [
                'heading',
                'paragraph',
                'bold',
                'italic',
                'link',
                'bulletList',
                'orderedList',
                'image',
                'codeBlock',
                ...options.toolbarItems || []
            ],
            customStyles: options.customStyles || [],
            onChange: options.onChange || (() => {}),
        };
        
        this.init();
    }

    init() {
        this.createToolbar();
        this.createEditor();
        this.attachEventListeners();
    }

    createToolbar() {
        const toolbar = document.createElement('div');
        toolbar.className = 'wysiwyg-toolbar';
        
        this.options.toolbarItems.forEach(item => {
            const button = this.createToolbarButton(item);
            toolbar.appendChild(button);
        });

        this.container.appendChild(toolbar);
    }

    createToolbarButton(type) {
        const button = document.createElement('button');
        button.className = 'wysiwyg-toolbar-button';
        button.setAttribute('data-command', type);
        button.innerHTML = this.getButtonIcon(type);
        
        return button;
    }

    createEditor() {
        const editor = document.createElement('div');
        editor.className = 'wysiwyg-content';
        editor.contentEditable = true;
        editor.setAttribute('role', 'textbox');
        editor.setAttribute('aria-multiline', 'true');
        editor.setAttribute('spellcheck', 'false');
        
        this.container.appendChild(editor);
        this.editor = editor;
    }

    attachEventListeners() {
        this.container.addEventListener('click', (e) => {
            if (e.target.closest('.wysiwyg-toolbar-button')) {
                const command = e.target.closest('.wysiwyg-toolbar-button').dataset.command;
                this.executeCommand(command);
            }
        });

        this.editor.addEventListener('input', () => {
            this.options.onChange(this.editor.innerHTML);
        });
    }

    executeCommand(command) {
        switch (command) {
            case 'heading':
                document.execCommand('formatBlock', false, '<h2>');
                break;
            case 'paragraph':
                document.execCommand('formatBlock', false, '<p>');
                break;
            case 'bold':
                document.execCommand('bold', false, null);
                break;
            case 'italic':
                document.execCommand('italic', false, null);
                break;
            case 'link':
                const url = prompt('Enter URL:');
                if (url) document.execCommand('createLink', false, url);
                break;
            case 'bulletList':
                document.execCommand('insertUnorderedList', false, null);
                break;
            case 'orderedList':
                document.execCommand('insertOrderedList', false, null);
                break;
            case 'image':
                const imgUrl = prompt('Enter image URL:');
                if (imgUrl) document.execCommand('insertImage', false, imgUrl);
                break;
            case 'codeBlock':
                document.execCommand('formatBlock', false, '<pre>');
                break;
        }
    }

    getButtonIcon(type) {
        // You can replace these with SVG icons
        const icons = {
            heading: 'H',
            paragraph: 'P',
            bold: 'B',
            italic: 'I',
            link: 'Link',
            bulletList: 'List',
            orderedList: '1,2,3',
            image: 'IMG',
            codeBlock: 'Code',
        };
        return icons[type] || type;
    }

    getContent() {
        // Convert visible spans back to comments when saving
        const content = this.editor.innerHTML;
        return content.replace(
            /<div class="css-annotation"[^>]*>🎨\s*([^<]+)<\/div>/g,
            '<!-- CSS Classes: $1 -->'
        );
    }

    setContent(html) {
        if (!html || typeof html !== 'string') {
            console.error('Invalid content received:', html);
            this.editor.innerHTML = '';
            return;
        }

        // Convert class annotations to visible spans
        const processedHtml = html.replace(
            /<!--\s*CSS Classes:\s*([^>]+?)\s*-->/g,
            '<div class="css-annotation" contenteditable="false">🎨 $1</div>'
        );
        this.editor.innerHTML = processedHtml;
    }
} 