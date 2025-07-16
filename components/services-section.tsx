"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Code, Globe, Layout, Database, Server, Smartphone } from "lucide-react" // Updated icons

export function ServicesSection() {
  const services = [
    {
      icon: Layout, // Changed icon
      title: "WordPress Custom Theme Development",
      description:
        "Building unique, high-performance WordPress themes from scratch, tailored to your design (Figma, Elementor).",
      features: ["Custom Themes", "Elementor Integration", "Responsive Design", "Performance Optimization"],
      category: "Web Development",
    },
    {
      icon: Code,
      title: "Frontend Development (HTML, CSS, JS)",
      description: "Crafting clean, semantic, and fully responsive user interfaces using core web technologies.",
      features: ["HTML5", "CSS3", "JavaScript (ES6+)", "Cross-Browser Compatibility"],
      category: "Web Development",
    },
    {
      icon: Smartphone, // Changed icon
      title: "Responsive Web Design",
      description:
        "Ensuring your website looks and functions flawlessly on any device, from desktops to mobile phones.",
      features: ["Mobile-First Approach", "Fluid Layouts", "Media Queries", "Cross-Device Testing"],
      category: "Web Development",
    },
    {
      icon: Code,
      title: "React & Next.js Development",
      description: "Building dynamic and scalable single-page applications and server-rendered React apps.",
      features: ["React.js", "Next.js (App Router)", "Component-Based Architecture", "State Management"],
      category: "Web Development",
    },
    {
      icon: Code,
      title: "Modern CSS Frameworks (Bootstrap, Tailwind, SASS)",
      description: "Utilizing powerful CSS frameworks and preprocessors for efficient and maintainable styling.",
      features: ["Bootstrap", "Tailwind CSS", "SASS/SCSS", "Modular CSS"],
      category: "Web Development",
    },
    {
      icon: Server, // Changed icon
      title: "Backend Development (Laravel, Next.js)",
      description: "Developing robust and secure server-side logic and APIs for your web applications.",
      features: ["Laravel (PHP)", "Next.js API Routes", "RESTful APIs", "Authentication & Authorization"],
      category: "Web Development",
    },
    {
      icon: Database, // Changed icon
      title: "Database Integration (MongoDB, SQL)",
      description: "Designing and integrating efficient database solutions for data storage and retrieval.",
      features: ["MongoDB (NoSQL)", "SQL Databases (MySQL, PostgreSQL)", "Database Schema Design", "Data Migration"],
      category: "Web Development",
    },
    {
      icon: Globe,
      title: "Full-Stack Web Applications",
      description: "End-to-end development of complete web solutions, from frontend to backend and database.",
      features: ["Concept to Deployment", "Scalable Architecture", "Security Best Practices", "Maintenance & Support"],
      category: "Web Development",
    },
  ]

  // All services are now "Web Development"
  const webDevelopmentServices = services.filter((service) => service.category === "Web Development")

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Web Development Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From custom WordPress themes to full-stack applications, I offer comprehensive solutions to bring your
            digital vision to life.
          </p>
        </motion.div>

        {/* Web Development Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            <Code className="inline-block mr-2 h-6 w-6" />
            Web Development Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {" "}
            {/* Adjusted grid for better layout */}
            {webDevelopmentServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <service.icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs mr-2 mb-2">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
