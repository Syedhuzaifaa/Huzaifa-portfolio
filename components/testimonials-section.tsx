"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

export function TestimonialsSection() {
 const testimonials = [
  {
    id: 1,
    name: "Zainab Ali",
    role: "Co-Founder",
    company: "The Social Nest",
    image: "/person.png?height=60&width=60",
    rating: 5,
    quote:
      "Huzaifa was super easy to work with. He really understood what we needed and built a clean, fast website that our users love. The process was smooth, and he handled everything from start to finish without needing constant input.",
  },
  {
    id: 2,
    name: "Hamza Rafiq",
    role: "Founder",
    company: "Rafiq Prints",
    image: "/person.png?height=60&width=60",
    rating: 5,
    quote:
      "I wasn’t sure what I wanted at first, but Huzaifa guided me through it all. The site turned out way better than I expected. Super happy with how professional it looks now.",
  },
      {
      id: 6,
      name: "Alex Kumar",
      role: "Business Owner",
      company: "Local Restaurant",
      image: "/person.png?height=60&width=60",
      rating: 5,
      quote:
        "The presentation design John created helped us secure important investors. His work is professional and impactful.",
    },
  {
    id: 3,
    name: "Nimra Qureshi",
    role: "Freelance Photographer",
    company: "Nimra Shoots",
    image: "/person.png?height=60&width=60",
    rating: 5,
    quote:
      "I needed a portfolio that felt personal but still professional. Huzaifa nailed it. It’s simple, fast, and exactly how I imagined — maybe even better.",
  },
  {
    id: 4,
    name: "Tariq Mehmood",
    role: "Manager",
    company: "Pak Home Services",
    image: "/person.png?height=60&width=60",
    rating: 5,
    quote:
      "We had a tight deadline and not much clarity on design, but Huzaifa still managed to deliver on time and made everything look clean and modern. Definitely working with him again.",
  },
  {
    id: 5,
    name: "Imran Zubair",
    role: "Operations Lead",
    company: "LogiFleet",
    image: "/person.png?height=60&width=60",
    rating: 5,
    quote:
      "The dashboard he built for our internal team works flawlessly. It’s clean, responsive, and makes our daily tasks so much easier now.",
  },
]


  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it - here's what my clients have to say about working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.image || "/person.png"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
