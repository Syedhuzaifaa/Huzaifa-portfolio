export interface PortfolioItem {
  id: string
  title: string
  description: string
  category: "websites" // Only "websites" category now
  image: string // Main thumbnail image
  images?: string[] // Array of additional images for detailed view
  technologies: string[]
  year: string
  liveUrl?: string
  githubUrl?: string
}

export const portfolioData: PortfolioItem[] = [
  // Websites
  {
    id: "13",
    title: "E-commerce Platform",
    description: "Full-stack e-commerce website with payment integration, responsive and secure.",
    category: "websites",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600&text=E-commerce+Homepage",
      "/placeholder.svg?height=400&width=600&text=Product+Page",
      "/placeholder.svg?height=400&width=600&text=Checkout+Flow",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
    year: "2024",
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/syedhuzaifa/ecommerce", // Placeholder
  },
  {
    id: "14",
    title: "Restaurant Website with Online Ordering",
    description: "Responsive website for a local restaurant with online ordering, built with React and Node.js.",
    category: "websites",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600&text=Restaurant+Homepage",
      "/placeholder.svg?height=400&width=600&text=Menu+Page",
      "/placeholder.svg?height=400&width=600&text=Online+Ordering",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "CSS"],
    year: "2024",
    liveUrl: "https://example-restaurant.com",
    githubUrl: "https://github.com/syedhuzaifa/restaurant-app", // Placeholder
  },
  {
    id: "15",
    title: "Personal Portfolio Website",
    description: "A modern and responsive personal portfolio website showcasing development projects.",
    category: "websites",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600&text=Portfolio+Home",
      "/placeholder.svg?height=400&width=600&text=Portfolio+About",
      "/placeholder.svg?height=400&width=600&text=Portfolio+Projects",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    year: "2023",
    liveUrl: "https://syedhuzaifa-portfolio.com", // Placeholder
    githubUrl: "https://github.com/syedhuzaifa/personal-portfolio", // Placeholder
  },
  {
    id: "16",
    title: "SaaS Dashboard Application",
    description: "An intuitive and data-rich dashboard for a SaaS application, built with React and a SQL backend.",
    category: "websites",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600&text=Dashboard+Overview",
      "/placeholder.svg?height=400&width=600&text=Analytics+View",
      "/placeholder.svg?height=400&width=600&text=User+Management",
    ],
    technologies: ["React", "TypeScript", "Chart.js", "Material-UI", "Laravel", "SQL"],
    year: "2023",
    liveUrl: "https://saas-dashboard.com",
    githubUrl: "https://github.com/syedhuzaifa/saas-dashboard", // Placeholder
  },
  {
    id: "17",
    title: "Custom WordPress Blog Theme",
    description: "A fully custom, responsive WordPress theme built from scratch for a modern blog.",
    category: "websites",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600&text=WordPress+Blog+Homepage",
      "/placeholder.svg?height=400&width=600&text=WordPress+Blog+Post",
      "/placeholder.svg?height=400&width=600&text=WordPress+Blog+Responsive",
    ],
    technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "Elementor"],
    year: "2024",
    liveUrl: "https://custom-wp-blog.com", // Placeholder
    githubUrl: "https://github.com/syedhuzaifa/wp-custom-theme", // Placeholder
  },
  {
    id: "18",
    title: "Static Marketing Website",
    description: "A fast, responsive static website built with HTML, CSS, and JavaScript for a marketing campaign.",
    category: "websites",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600&text=Static+Site+Homepage",
      "/placeholder.svg?height=400&width=600&text=Static+Site+Features",
      "/placeholder.svg?height=400&width=600&text=Static+Site+Contact",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "SASS"],
    year: "2023",
    liveUrl: "https://static-marketing-site.com", // Placeholder
    githubUrl: "https://github.com/syedhuzaifa/static-marketing-site", // Placeholder
  },
]
