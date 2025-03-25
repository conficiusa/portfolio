import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Define base URL - replace with your actual domain when deploying
  const baseUrl = 'https://conficiusadda.vercel.app'
  
  // Define all your static routes
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
   
  ]
}