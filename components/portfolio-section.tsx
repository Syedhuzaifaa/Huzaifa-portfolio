"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/lib/portfolio-data"
import { PortfolioSlider } from "./portfolio-slider"
// Removed PortfolioGallery as it's not needed for only websites

export function PortfolioSection() {
  const websiteProjects = portfolioData.filter((project) => project.category === "websites")

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-br from-pink-50/50 via-purple-50/30 to-rose-50/50 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">My Web Development Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my collection of responsive, user-friendly websites and web applications built with modern
            technologies.
          </p>
        </motion.div>

        {/* Website Projects Slider */}
        {websiteProjects.length > 0 ? (
          <PortfolioSlider
            items={websiteProjects}
            title="💻 Web Development Projects"
            description="Modern websites and web applications with beautiful design and robust functionality."
          />
        ) : (
          <div className="text-center text-muted-foreground text-lg">No web projects to display yet.</div>
        )}
      </div>
    </section>
  )
}
