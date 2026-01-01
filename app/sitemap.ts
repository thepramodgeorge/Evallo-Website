import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://evallo.app' // Replace with your actual domain
  
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
  const excludedRoutes: string[] = [
    '/blog',
  ]

  return allRoutes
    .filter(route => !excludedRoutes.includes(route))
    .map((route) => ({
      url: `${baseUrl}${route === '/' ? '' : route}`,
      lastModified: new Date(),
    }))
}