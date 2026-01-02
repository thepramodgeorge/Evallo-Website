# PageSpeed 100/100 Checklist - Evallo Website

## Current Status (Jan 3, 2026)
- ✅ Performance: 91/100 → **Target: 95-98/100**
- ⚠️  Accessibility: 86/100 → **Target: 95-100/100**
- ✅ Best Practices: 100/100
- ✅ SEO: 100/100

---

## ✅ Completed Optimizations

### Performance Optimizations
- [x] Font loading optimization (display: swap, preload)
- [x] DNS prefetch for Google Fonts
- [x] Hero image priority loading
- [x] Lazy loading for below-fold images
- [x] Responsive image sizes configuration
- [x] AVIF/WebP format support
- [x] Dynamic imports for code splitting
- [x] SWC minification enabled
- [x] Tree shaking for UI components
- [x] Production console.log removal
- [x] CSS optimization enabled
- [x] Compression enabled
- [x] Cache headers configured (1 year for static assets)
- [x] Image cache TTL optimization

### Accessibility Optimizations
- [x] Main landmark added
- [x] Skip-to-content link
- [x] Semantic HTML structure
- [x] Enhanced image alt text

### Security Optimizations
- [x] HSTS header
- [x] X-Frame-Options
- [x] Content Security Policy
- [x] X-Content-Type-Options
- [x] Referrer-Policy
- [x] Permissions-Policy
- [x] X-XSS-Protection

---

## ⚠️  Remaining Manual Fixes (for 100% Accessibility)

### 1. Fix ARIA Attribute Issues
**Priority:** HIGH

**Steps:**
1. Open Chrome DevTools → Lighthouse
2. Run Accessibility audit
3. Note all ARIA errors
4. Common issues to fix:
   - Invalid `aria-labelledby` references
   - `aria-hidden="true"` on focusable elements
   - Missing `aria-label` on icon buttons

**Example Fix:**
```tsx
// Before
<button><Icon /></button>

// After
<button aria-label="Open menu"><Icon /></button>
```

**Files to Check:**
- [ ] `components/ui/navbar-wrapper.tsx`
- [ ] `components/signin-dialog.tsx`
- [ ] `components/ui/button.tsx`
- [ ] `components/ui/dialog.tsx`
- [ ] `components/ui/dropdown-menu.tsx`

---

### 2. Fix Color Contrast Issues
**Priority:** HIGH

**Required Ratio:**
- Normal text: 4.5:1
- Large text (18pt+): 3:1
- UI components: 3:1

**Steps:**
1. Install [axe DevTools](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
2. Scan each page
3. Note all contrast failures
4. Update colors in `globals.css` or Tailwind config

**Common Problem Areas:**
```tsx
// Low contrast examples to fix:
text-gray-400 on white background
text-muted-foreground with low opacity
Placeholder text colors
Disabled button text
```

**Fix Examples:**
```css
/* Before */
.text-muted-foreground {
  opacity: 0.6; /* Too light */
}

/* After */
.text-muted-foreground {
  opacity: 0.8; /* Better contrast */
}
```

**Files to Check:**
- [ ] `app/globals.css`
- [ ] `components/ui/button.tsx`
- [ ] `components/footer.tsx`
- [ ] `components/testimonial-banner.tsx`

---

### 3. Add Discernible Names to Links
**Priority:** MEDIUM

**Issue:** Links containing only icons or images without text alternatives

**Steps:**
1. Find all `<Link>` components with only icons
2. Add descriptive `aria-label` or visible text
3. Ensure link purpose is clear from link text alone

**Example Fixes:**
```tsx
// ❌ Bad - No discernible name
<Link href="/pricing">
  <ArrowRight />
</Link>

// ✅ Good - Has aria-label
<Link href="/pricing" aria-label="View pricing plans">
  <ArrowRight />
</Link>

// ✅ Better - Has visible text
<Link href="/pricing">
  View Pricing <ArrowRight />
</Link>

// ✅ Best - Screen reader only text
<Link href="/pricing">
  <span className="sr-only">View pricing plans</span>
  <ArrowRight aria-hidden="true" />
</Link>
```

**Files to Check:**
- [ ] `components/hero-02/hero-02.tsx`
- [ ] `components/footer.tsx`
- [ ] `components/site-header.tsx`
- [ ] `components/ui/navbar-wrapper.tsx`

---

### 4. Fix Heading Hierarchy
**Priority:** MEDIUM

**Requirements:**
- Only ONE `<h1>` per page
- Don't skip heading levels (h1 → h2 → h3, not h1 → h3)
- Headings should represent content structure

**Steps:**
1. Install [HeadingsMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi) extension
2. Review heading structure on each page
3. Fix any skipped levels or multiple h1s

**Common Issues:**
```tsx
// ❌ Bad - Skips h2
<h1>Page Title</h1>
<h3>Section Title</h3>

// ✅ Good - Proper hierarchy
<h1>Page Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
```

**Files to Check:**
- [ ] `app/page.tsx` (ensure only one h1)
- [ ] `components/hero-02/hero-02.tsx`
- [ ] `components/features-04/features-04.tsx`
- [ ] `components/features-06/features-06.tsx`
- [ ] `components/pricing/page.tsx`

---

### 5. Form Labels and Inputs
**Priority:** MEDIUM

**Requirements:**
- Every form input must have an associated label
- Use `<label>` with `htmlFor` or wrap input
- Provide clear error messages

**Example Fix:**
```tsx
// ❌ Bad - No label
<Input type="email" placeholder="Email" />

// ✅ Good - Has label
<Label htmlFor="email">Email Address</Label>
<Input id="email" type="email" />

// ✅ Better - With description
<Label htmlFor="email">
  Email Address
  <span className="text-muted-foreground text-sm">
    We'll never share your email
  </span>
</Label>
<Input id="email" type="email" aria-describedby="email-help" />
```

**Files to Check:**
- [ ] `components/login-form.tsx`
- [ ] `components/input-form.tsx`
- [ ] `components/builderform.tsx`
- [ ] `components/signin-dialog.tsx`

---

## 🧪 Testing Instructions

### Local Testing (Before Deploy)

#### 1. Build and Test Production Bundle
```bash
cd "/Users/pramod/Documents/Vibe Coded Apps/evallo website"

# Clean build
rm -rf .next

# Production build
npm run build

# Start production server
npm run start
```

#### 2. Run PageSpeed Insights on Localhost
```bash
# In another terminal, run:
npx lighthouse http://localhost:3000 \
  --view \
  --output html \
  --output-path ./lighthouse-report.html

# Or visit:
# https://pagespeed.web.dev/
# Enter: http://localhost:3000
```

#### 3. Run Accessibility Audit Script
```bash
cd "/Users/pramod/Documents/Vibe Coded Apps/evallo website"
./scripts/accessibility-audit.sh
```

#### 4. Manual Accessibility Testing
- [ ] Tab through entire page (keyboard navigation)
- [ ] Test with screen reader (VoiceOver on Mac: Cmd+F5)
- [ ] Verify all interactive elements are keyboard accessible
- [ ] Check color contrast with DevTools
- [ ] Test responsive design (mobile, tablet, desktop)

---

### After Deployment Testing

#### 1. Run PageSpeed Insights on Production
```
https://pagespeed.web.dev/
Enter: https://evallo.app
```

Expected Scores After All Fixes:
- Performance: 95-98/100 ✅
- Accessibility: 95-100/100 ✅
- Best Practices: 100/100 ✅
- SEO: 100/100 ✅

#### 2. Test Core Web Vitals
Visit Google Search Console:
- Go to Core Web Vitals report
- Check LCP, FID, CLS metrics
- Ensure all pages are "Good"

#### 3. Security Headers Check
```
https://securityheaders.com/?q=https://evallo.app
```
Expected: A+ rating

#### 4. Cross-Browser Testing
- [ ] Chrome (Desktop + Mobile)
- [ ] Safari (Desktop + Mobile)
- [ ] Firefox
- [ ] Edge

---

## 📊 Performance Monitoring Setup

### 1. Add Web Vitals Tracking

Create `app/web-vitals.tsx`:
```tsx
'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to analytics service
    console.log(metric)
    
    // Example: Send to Google Analytics
    if (window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(
          metric.name === 'CLS' ? metric.value * 1000 : metric.value
        ),
        event_label: metric.id,
        non_interaction: true,
      })
    }
  })
  
  return null
}
```

Add to `app/layout.tsx`:
```tsx
import { WebVitals } from './web-vitals'

// In body
<WebVitals />
```

### 2. Set Up Lighthouse CI

```bash
npm install -D @lhci/cli

# Create config
cat > lighthouserc.js << 'EOF'
module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      url: ['http://localhost:3000'],
    },
    assert: {
      assertions: {
        'categories:performance': ['error', {minScore: 0.95}],
        'categories:accessibility': ['error', {minScore: 0.95}],
        'categories:best-practices': ['error', {minScore: 1}],
        'categories:seo': ['error', {minScore: 1}],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
EOF

# Add to package.json
{
  "scripts": {
    "lighthouse": "lhci autorun"
  }
}

# Run it
npm run lighthouse
```

---

## 🎯 Quick Wins for Immediate Improvement

If you only have 30 minutes, fix these first:

### Priority 1 (10 min)
- [ ] Add `aria-label` to all icon-only buttons
- [ ] Fix empty alt text on images
- [ ] Verify only one h1 per page

### Priority 2 (10 min)
- [ ] Fix color contrast on muted text
- [ ] Add labels to form inputs
- [ ] Test keyboard navigation

### Priority 3 (10 min)
- [ ] Fix heading hierarchy
- [ ] Add descriptive link text
- [ ] Test with screen reader

---

## 📈 Expected Timeline

### Immediate (Today)
- [x] Automated optimizations applied
- [x] Next.js config updated
- [x] Middleware created
- [x] Dynamic imports added
- [x] Image optimization configured

### Next Session (1-2 hours)
- [ ] Fix ARIA attributes
- [ ] Fix color contrast
- [ ] Fix link names
- [ ] Fix heading hierarchy
- [ ] Test locally

### Before Deploy (30 min)
- [ ] Run production build
- [ ] Test on localhost
- [ ] Run accessibility audit
- [ ] Manual keyboard testing

### After Deploy (1 hour)
- [ ] Monitor PageSpeed scores
- [ ] Check Core Web Vitals
- [ ] Set up monitoring
- [ ] Document results

---

## 🔧 Useful Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Production server
npm run start

# Accessibility audit
./scripts/accessibility-audit.sh

# Bundle analysis
npm run analyze

# Lighthouse CI
npm run lighthouse

# Clean cache
rm -rf .next node_modules/.cache
```

---

## 📚 Resources

### Tools
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/)
- [HeadingsMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi)

### Documentation
- [Web.dev Performance](https://web.dev/performance/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Next.js Performance](https://nextjs.org/docs/advanced-features/measuring-performance)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

---

## ✅ Final Checklist Before Going Live

- [ ] All accessibility issues fixed
- [ ] Production build successful
- [ ] PageSpeed score 95+ on all metrics
- [ ] Tested on mobile and desktop
- [ ] Screen reader testing complete
- [ ] Keyboard navigation working
- [ ] Security headers verified
- [ ] Core Web Vitals in "Good" range
- [ ] No console errors
- [ ] Analytics tracking configured

---

**Status:** 🟢 Automated optimizations complete | 🟡 Manual accessibility fixes needed

**Next Action:** Fix accessibility issues (1-2 hours) → Test → Deploy

**Expected Final Scores:**
- Performance: 95-98/100 🎯
- Accessibility: 95-100/100 🎯
- Best Practices: 100/100 ✅
- SEO: 100/100 ✅
