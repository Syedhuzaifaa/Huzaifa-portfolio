import Link from "next/link"
import { Github, Linkedin, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/syedhuzaifaa", label: "GitHub" }, // Placeholder
    { icon: Linkedin, href: "https://linkedin.com/in/syedhuzaifa", label: "LinkedIn" }, // Placeholder
    { icon: Instagram, href: "https://instagram.com/syedhuzaifa", label: "Instagram" }, // Placeholder
    { icon: Mail, href: "mailto:syedhuzaifa1120@gmail.com", label: "Email" }, // Placeholder
  ]

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold text-primary mb-4 block">
              Syed Huzaifa
            </Link>
            <p className="text-muted-foreground mb-4">
              Dedicated Web Developer crafting robust and user-friendly digital experiences.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <Button key={social.label} variant="ghost" size="icon" asChild>
                  <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-4 w-4" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>syedhuzaifa1120@gmail.com</p> {/* Placeholder */}
              <p>+92 308 8290018</p> {/* Placeholder */}
              <p>Karachi, Pakistan</p> {/* Placeholder */}
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Syed Huzaifa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
