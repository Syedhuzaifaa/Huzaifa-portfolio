"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Code, Server, Database, Zap } from "lucide-react" // Changed icons

export function AboutSection() {
  const skills = [
    "WordPress Custom Theme Building",
    "Elementor",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "Tailwind CSS",
    "SASS",
    "Laravel",
    "Next.js",
    "MongoDB",
    "SQL",
    "Responsive Design",
    "User-Friendly Interfaces",
    "Full-Stack Development",
  ]

  const stats = [
    { icon: Code, label: "Web Projects", value: "100+", color: "text-pink-500" }, // Updated
    { icon: Server, label: "Years Experience", value: "4+", color: "text-purple-500" }, // Updated
    { icon: Database, label: "Databases Used", value: "MongoDB & SQL", color: "text-rose-500" }, // Updated
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-rose-50/50 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-pink-200/30 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-40 h-40 bg-purple-200/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            I'm a dedicated web developer passionate about crafting robust, user-friendly, and visually appealing
            digital experiences. My expertise spans from custom WordPress theme development to building modern
            full-stack applications.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              className="absolute -top-4 -left-4 w-8 h-8 bg-pink-400 rounded-full opacity-60"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 0.3, 0.6],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <div className="flex items-center mb-6">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Code className="h-8 w-8 text-pink-500 mr-3" /> {/* Changed icon */}
              </motion.div>
              <h3 className="text-2xl font-bold gradient-text-alt">My Development Journey</h3>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-6"
            >
              My journey into web development began with a fascination for how websites are built and how they can
              impact businesses. I started with HTML, CSS, and JavaScript, quickly moving into modern frameworks and
              backend technologies.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-6"
            >
              I specialize in creating custom WordPress themes from scratch, translating Figma designs into
              pixel-perfect websites, and building dynamic applications with React, Next.js, and Laravel. My goal is
              always to deliver fully responsive, high-performance solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-muted-foreground"
            >
              Whether it's a simple static site or a complex web application with MongoDB or SQL databases, I focus on
              clean code, scalability, and an exceptional user experience. Let's build something amazing together! 🚀
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative"
              >
                <Card className="text-center border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover-lift glow-effect">
                  <CardContent className="p-6 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-purple-100/50 opacity-0 hover:opacity-100 transition-opacity"
                      initial={false}
                    />
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <stat.icon className={`h-8 w-8 mx-auto mb-4 ${stat.color} relative z-10`} />
                    </motion.div>
                    <motion.div
                      className="text-2xl font-bold mb-2 gradient-text relative z-10"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-muted-foreground relative z-10">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Zap className="h-6 w-6 text-pink-500 mr-2" />
            </motion.div>
            <h3 className="text-2xl font-bold text-center gradient-text-alt">Skills & Tools</h3>
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Code className="h-6 w-6 text-purple-500 ml-2" /> {/* Changed icon */}
            </motion.div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }} // Reduced delay for faster appearance
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge className="text-sm py-2 px-4 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 border-pink-200 hover:from-pink-200 hover:to-purple-200 transition-all cursor-pointer hover-lift">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
