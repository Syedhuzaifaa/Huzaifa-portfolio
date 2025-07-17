
"use client"

import type React from "react"
import { useState, useTransition } from "react" // 👈 useTransition for pending state
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
// import { useToast } from "@/hooks/use-toast"
import { submitContactForm } from "@/app/actions/contact"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast" // ✅ make sure this is also imported


export function ContactSection() {
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: "",
    email: "", // capital "S"
    message: "", // not "message"
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  // const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setIsSubmitting(true)

  const form = new FormData()
  form.append("name", formData.name)
  form.append("email", formData.email)
  form.append("message", formData.message)

  try {
    const response = await submitContactForm(form)

    toast({
      title: response.success ? "Message sent!" : "Something went wrong",
      description: response.message,
      variant: response.success ? "default" : "destructive",
    })

    if (response.success) {
      setFormData({ name: "", email: "", message: "" })
    }
  } catch (err) {
    toast({
      title: "Server Error",
      description: "Something went wrong while sending your message.",
      variant: "destructive",
    })
  } finally {
    setIsSubmitting(false)
  }
}



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "syedhuzaifa1120@gmail.com",
      href: "mailto:syedhuzaifa1120@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 308 8290018",
      href: "#",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Karachi, Pakistan",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/syedhuzaifaa",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/syedhuzaifaa",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/syedhuzaifaa",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your project to life? Get in touch and let's discuss how I can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      {info.href !== "#" ? (
                        <Link href={info.href} className="text-foreground hover:text-primary transition-colors">
                          {info.value}
                        </Link>
                      ) : (
                        <div className="text-foreground">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Button variant="outline" size="icon" asChild>
                      <Link href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-4 w-4" />
                        <span className="sr-only">{social.label}</span>
                      </Link>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Quick Response</h4>
                <p className="text-muted-foreground text-sm">
                  I typically respond to messages within 24 hours. For urgent projects, feel free to call me directly.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
