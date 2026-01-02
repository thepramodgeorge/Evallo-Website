#!/bin/bash

# Accessibility Audit Script for Evallo Website
# This script helps identify common accessibility issues

echo "🔍 Evallo Website - Accessibility Audit"
echo "========================================"
echo ""

# 1. Check for images without alt text
echo "1️⃣  Checking for images without alt text..."
echo ""
grep -r "alt=\"\"" components/ app/ --include="*.tsx" --include="*.jsx" | wc -l | xargs -I {} echo "   Found {} images with empty alt text ⚠️"
echo ""

# 2. Check for buttons without aria-label or text
echo "2️⃣  Checking for icon-only buttons..."
echo ""
grep -r "<Button" components/ app/ --include="*.tsx" | grep -v "aria-label" | grep -v "children" | wc -l | xargs -I {} echo "   Found {} potential icon-only buttons ⚠️"
echo ""

# 3. Check for links without text
echo "3️⃣  Checking for links without discernible text..."
echo ""
grep -r "<Link.*>" components/ app/ --include="*.tsx" | grep -v "aria-label" | wc -l | xargs -I {} echo "   Found {} links to review ⚠️"
echo ""

# 4. Check for proper heading structure
echo "4️⃣  Checking heading structure..."
echo ""
echo "   H1 tags found:"
grep -r "<h1" components/ app/ --include="*.tsx" --include="*.jsx" -n
echo ""
echo "   H2 tags found:"
grep -r "<h2" components/ app/ --include="*.tsx" --include="*.jsx" -n | head -5
echo "   ..."
echo ""

# 5. Check for color contrast issues (common patterns)
echo "5️⃣  Checking for potential color contrast issues..."
echo ""
grep -r "text-gray-400\|text-gray-500\|text-muted" components/ app/ --include="*.tsx" | wc -l | xargs -I {} echo "   Found {} instances of potentially low-contrast text ⚠️"
echo ""

# 6. Check for ARIA attributes
echo "6️⃣  Checking ARIA attributes usage..."
echo ""
grep -r "aria-" components/ app/ --include="*.tsx" | wc -l | xargs -I {} echo "   Found {} ARIA attributes (review for correctness) ℹ️"
echo ""

# 7. Check for form inputs without labels
echo "7️⃣  Checking form inputs..."
echo ""
grep -r "<Input" components/ app/ --include="*.tsx" | grep -v "aria-label\|id=" | wc -l | xargs -I {} echo "   Found {} inputs to review for labels ⚠️"
echo ""

echo "========================================"
echo "✅ Accessibility audit complete!"
echo ""
echo "📋 Next Steps:"
echo "   1. Review files with empty alt text"
echo "   2. Add aria-label to icon-only buttons"
echo "   3. Ensure all links have descriptive text"
echo "   4. Verify heading hierarchy (H1→H2→H3)"
echo "   5. Test color contrast with tools"
echo ""
echo "🔧 Recommended Tools:"
echo "   - Chrome DevTools Lighthouse"
echo "   - axe DevTools extension"
echo "   - WAVE browser extension"
echo ""
