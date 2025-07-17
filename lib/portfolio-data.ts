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
    title: "Primordial Website",
    description: "website with Email Sender, responsive.",
    category: "websites",
    image: "/premordial1.png?height=300&width=400",
    images: [
      "/premordial2.png?height=400&width=600&text=E-commerce+Homepage",
      "/premordial3.png?height=400&width=600&text=Product+Page",
      "/premordial4.png?height=400&width=600&text=Checkout+Flow",
      "/premordial5.png?height=400&width=600&text=Checkout+Flow",
    ],
    technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "Elementor"],
    year: "2024",
    liveUrl: "https://primordialcreations.com",
    // githubUrl: "https://github.com/syedhuzaifa/ecommerce", // Placeholder
  },
  {
    id: "14",
    title: "FHS ZOOM (Product Website)",
    description: "Full-stack E-commerce Product website, responsive and secure.",
    category: "websites",
    image: "/fhs2.png?height=300&width=400",
    images: [
      "/fhs1.png?height=400&width=600&text=E-commerce+Homepage",
      "/fhs2.png?height=400&width=600&text=E-commerce+Homepage",
      "/fhs3.png?height=400&width=600&text=Product+Page",
      "/fhs4.png?height=400&width=600&text=Checkout+Flow",
      "/fhs5.png?height=400&width=600&text=Checkout+Flow",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    year: "2024",
    liveUrl: "https://fhszoom.net",
    githubUrl: "https://github.com/syedhuzaifa/fhszoom", // Placeholder
  },
  {
    id: "15",
    title: "Ismail Resin",
    description: "Responsive website for a Resin Company built with Bootstrap and Laravel.",
    category: "websites",
    image: "/resin1.png?height=300&width=400",
    images: [
      "/resin1.png?height=400&width=600&text=Restaurant+Homepage",
      "/resin2.png?height=400&width=600&text=Menu+Page",
      "/resin3.png?height=400&width=600&text=Online+Ordering",
      "/resin4.png?height=400&width=600&text=Online+Ordering",
      "/resin5.png?height=400&width=600&text=Online+Ordering",
    ],
    technologies: ["HTML", "Css", "JS", "Bootstrap", "Laravel", "SQL"],
    year: "2023",
    liveUrl: "https://www.ismailresin.com.pk/",
    // githubUrl: "https://github.com/syedhuzaifa/restaurant-app", // Placeholder
  },
  {
    id: "16",
    title: "Exhibition Order Taking Website",
    description: "A modern and responsive personal Order Taking website showcasing all the products.",
    category: "websites",
    image: "/online1.png?height=300&width=400",
    images: [
      "/online2.png?height=400&width=600&text=Portfolio+Home",
      "/online3.png?height=400&width=600&text=Portfolio+About",
      "/online4.png?height=400&width=600&text=Portfolio+Projects",
      "/online5.png?height=400&width=600&text=Portfolio+Projects",
      "/online6.png?height=400&width=600&text=Portfolio+Projects",
    ],
    technologies: ["HTML", "CSS", "BootStrap", "Laravel", "SQL"],
    year: "2023",
    liveUrl: "https://online.ismailindustries.com.pk/", // Placeholder
    // githubUrl: "https://github.com/syedhuzaifa/personal-portfolio", // Placeholder
  },
  {
    id: "17",
    title: "Broad Mind Interior",
    description: "Blog Website Showcasing the interior work and services, built with React & Next.js.",
    category: "websites",
    image: "/bmi1.png?height=300&width=400",
    images: [
      "/bmi2.png?height=400&width=600&text=Dashboard+Overview",
      "/bmi3.png?height=400&width=600&text=Analytics+View",
      "/bmi4.png?height=400&width=600&text=User+Management",
      "/bmi5.png?height=400&width=600&text=User+Management",
      "/bmi6.png?height=400&width=600&text=User+Management",
    ],
    technologies: ["React", "TypeScript", "Next.js", "MongoDB"],
    year: "2023",
    liveUrl: "https://www.bmiinterior.com/",
    // githubUrl: "https://github.com/syedhuzaifa/saas-dashboard", // Placeholder
  },
  {
    id: "18",
    title: "Orbit UAE",
    description: "A fully custom, responsive WordPress theme built from scratch for a Product Showcase.",
    category: "websites",
    image: "/worky.png?height=300&width=400",
    images: [
      "/worky4.png?height=400&width=600&text=WordPress+Blog+Responsive",
      "/worky5.png?height=400&width=600&text=WordPress+Blog+Responsive",
      // "/worky1.png?height=400&width=600&text=WordPress+Blog+Homepage",
      "/worky2.png?height=400&width=600&text=WordPress+Blog+Post",
      "/worky3.png?height=400&width=600&text=WordPress+Blog+Responsive",
      "/worky6.png?height=400&width=600&text=WordPress+Blog+Responsive",
      "/worky7.png?height=400&width=600&text=WordPress+Blog+Responsive",
    ],
    technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "Elementor"],
    year: "2024",
    liveUrl: "https://worky.orbituae.com/", // Placeholder
    // githubUrl: "https://github.com/syedhuzaifa/wp-custom-theme", // Placeholder
  },
 
]
