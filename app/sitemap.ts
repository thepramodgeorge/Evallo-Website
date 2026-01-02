import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

// Priority mapping for different types of pages
const priorityMap: Record<string, number> = {
  '/': 1.0,
  '/pricing': 0.9,
  '/about-us': 0.8,
  '/vs-typeform': 0.8,
  '/vs-surveymonkey': 0.8,
  '/blog': 0.7,
}

// Change frequency mapping
const changeFreqMap: Record<string, 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'> = {
  '/': 'weekly',
  '/pricing': 'weekly',
  '/about-us': 'monthly',
  '/vs-typeform': 'monthly',
  '/vs-surveymonkey': 'monthly',
  '/blog': 'weekly',
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://evallo.app'
  
  // Get all routes from the app directory
  const appDir = path.join(process.cwd(), 'app')
  
  // Function to recursively find all page.tsx files
  function getRoutes(dir: string, basePath: string = ''): string[] {
    let routes: string[] = []
    
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true })

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name)
        
        if (entry.isDirectory()) {
          // Skip api folder and hidden folders or special Next.js folders
          if (
            entry.name === 'api' || 
            entry.name.startsWith('_') || 
            entry.name.startsWith('(') ||
            entry.name.startsWith('.') ||
            entry.name.includes('[')
          ) {
            continue
          }
          routes = [...routes, ...getRoutes(fullPath, path.join(basePath, entry.name))]
        } else if (entry.name === 'page.tsx' || entry.name === 'page.js') {
          // Found a page, normalize path separators for URLs
          const routePath = basePath.split(path.sep).join('/')
          routes.push(routePath === '' ? '/' : `/${routePath}`)
        }
      }
    } catch (error) {
      console.error(`Error reading directory ${dir}:`, error)
    }
    
    return routes
  }

  const allRoutes = getRoutes(appDir)

  // Define pages to exclude from the sitemap
  // Note: Blog is now included as it has content
  const excludedRoutes: string[] = [
    // Add any routes that should be excluded here
  ]

  return allRoutes
    .filter(route => !excludedRoutes.includes(route))
    .map((route) => ({
      url: `${baseUrl}${route === '/' ? '' : route}`,
      lastModified: new Date(),
      priority: priorityMap[route] ?? 0.5,
      changeFrequency: changeFreqMap[route] ?? 'monthly',
    }))
}