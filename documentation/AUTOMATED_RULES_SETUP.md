# Automated Cursor Rules Setup

## Overview

Your Cursor rules are now automatically updated whenever code is pushed, ensuring AI suggestions are always current with your latest codebase changes.

## Three-Layer Automation

### 1. 🔄 Pre-Push Hook (Local)
**File**: `.husky/pre-push`
**Triggers**: Every `git push`
**Actions**:
- Updates Cursor rules before push
- Stages rule changes if detected
- Provides helpful feedback
- Ensures rules are current before sharing code

**Example output**:
```
🔄 Updating Cursor rules before push...
Successfully updated Cursor rules with:
  - 144 CSS classes
  - 86 HTML classes in use
  - 54 custom properties
  - 570 selectors
  - 4 accessibility attributes
📝 Cursor rules were updated. Staging changes...
💡 Tip: You may want to commit these rule updates before pushing:
   git commit -m 'Update Cursor rules'
✅ Pre-push checks completed!
```

### 2. 🤖 GitHub Actions (Remote)
**File**: `.github/workflows/update-cursor-rules.yml`
**Triggers**: Push to main branch when relevant files change
**Watches**:
- `src/**/*.css` - Stylesheet changes
- `src/**/*.html` - Template and structure changes  
- `vite.config.mjs` - Build configuration changes
- `package.json` - Dependency changes
- `scripts/update-cursor-rules.js` - Script updates

**Actions**:
- Updates rules on the server
- Automatically commits changes back to repo
- Uses descriptive commit messages
- Skips CI to prevent infinite loops

### 3. 👀 File Watcher (Development)
**File**: `scripts/watch-cursor-rules.js`
**Triggers**: File changes during development
**Command**: `npm run watch-cursor`
**Actions**:
- Real-time rule updates
- Debounced for performance
- Monitors relevant file types only

## Smart Features

### Intelligent Detection
- Only commits when rules actually change
- Skips updates if no changes detected
- Provides detailed logging of what was captured

### Performance Optimized
- Debounced file watching (1-second delay)
- Targeted file monitoring (only relevant extensions)
- Efficient regex patterns for scanning

### Git Integration
- Descriptive commit messages with emoji indicators
- `[skip ci]` flag prevents unnecessary builds
- Automatic staging of rule changes
- Proper Git configuration for automated commits

## Usage Examples

### Daily Development
```bash
# Start development with auto-updating rules
npm run watch-cursor
npm run dev
```

### Manual Updates
```bash
# Update rules manually
npm run update-cursor

# Check if updates are needed
npm run check-rules
```

### Git Operations
```bash
# Rules update automatically before push
git push origin main

# If you want to commit rule updates separately
git add .cursor/rules .cursor/.cursorrules
git commit -m "Update Cursor rules"
```

## File Structure

```
.husky/
└── pre-push              # Local Git hook

.github/workflows/
├── pages.yml             # Updated with rule integration
└── update-cursor-rules.yml # Dedicated rules workflow

scripts/
├── update-cursor-rules.js  # Enhanced scanning script
└── watch-cursor-rules.js   # Optimized file watcher

.cursor/
├── rules                   # YAML configuration
└── .cursorrules           # Markdown documentation
```

## Workflow Integration

### Enhanced GitHub Pages Workflow
The existing `pages.yml` workflow now:
1. Updates Cursor rules before building
2. Commits rule changes if detected
3. Continues with normal deployment

### Dedicated Rules Workflow
The new `update-cursor-rules.yml` workflow:
1. Triggers only on relevant file changes
2. Updates rules in isolation
3. Commits changes with detailed messages
4. Skips CI to prevent loops

## Benefits

### For You
- ✅ Rules always current without manual intervention
- ✅ Better AI suggestions based on latest code
- ✅ No need to remember to update rules
- ✅ Automatic documentation of changes

### For Collaborators
- ✅ Consistent Cursor experience across team
- ✅ Rules committed to version control
- ✅ Clear history of rule changes
- ✅ No setup required for new team members

### For AI Assistance
- ✅ 144 CSS classes always available
- ✅ 86 HTML patterns kept current
- ✅ 54 design tokens up-to-date
- ✅ 570 selectors for comprehensive context

## Troubleshooting

### Hook Not Running
```bash
# Reinstall Husky hooks
npm run prepare
```

### Rules Not Updating
```bash
# Check file permissions
chmod +x .husky/pre-push

# Manual update
npm run update-cursor-rules
```

### GitHub Action Failing
- Check workflow permissions in repository settings
- Ensure `GITHUB_TOKEN` has write access
- Verify workflow file syntax

## Monitoring

Watch for successful rule updates in:
- Pre-push hook output (local terminal)
- GitHub Actions logs (repository Actions tab)
- Git commit history (automated commits)
- Rule file timestamps (`.cursor/rules` and `.cursor/.cursorrules`)

The system is now fully automated and will keep your Cursor rules synchronized with your evolving codebase!
