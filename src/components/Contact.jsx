import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import AnimatedSection from './AnimatedSection'

/**
 * Contact - Contact form and contact information
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const contactMethods = [
    {
      icon: <FiMail className="text-3xl" />,
      label: 'Email',
      value: 'varunavi.vi@gmail.com',
      href: 'mailto:varunavi.vi@gmail.com',
    },
    {
      icon: <FiPhone className="text-3xl" />,
      label: 'Phone',
      value: '+91 9787745835',
      href: 'tel:+919787745835',
    },
    {
      icon: <FiMapPin className="text-3xl" />,
      label: 'Location',
      value: 'India',
      href: '#',
    },
  ]

  const socialLinks = [
    { icon: <FaGithub className="text-2xl" />, href: 'https://github.com/varunavi09/', label: 'GitHub' },
    { icon: <FaLinkedin className="text-2xl" />, href: 'https://www.linkedin.com/in/varunavib/', label: 'LinkedIn' },
    { icon: <FaTwitter className="text-2xl" />, href: 'https://twitter.com', label: 'Twitter' },
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-text-secondary text-lg">
              Let's collaborate and create something amazing
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold mb-2 text-text-primary">
                  Name
                </label>
                <motion.input
                  whileFocus={{ borderColor: '#38BDF8', boxShadow: '0 0 10px rgba(56, 189, 248, 0.3)' }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-lg glass border border-accent border-opacity-20 focus:outline-none focus:border-opacity-50 bg-dark-secondary bg-opacity-50 text-text-primary placeholder-text-secondary transition-smooth"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold mb-2 text-text-primary">
                  Email
                </label>
                <motion.input
                  whileFocus={{ borderColor: '#38BDF8', boxShadow: '0 0 10px rgba(56, 189, 248, 0.3)' }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="varunavi.vi@gmail.com"
                  required
                  className="w-full px-4 py-3 rounded-lg glass border border-accent border-opacity-20 focus:outline-none focus:border-opacity-50 bg-dark-secondary bg-opacity-50 text-text-primary placeholder-text-secondary transition-smooth"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold mb-2 text-text-primary">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ borderColor: '#38BDF8', boxShadow: '0 0 10px rgba(56, 189, 248, 0.3)' }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg glass border border-accent border-opacity-20 focus:outline-none focus:border-opacity-50 bg-dark-secondary bg-opacity-50 text-text-primary placeholder-text-secondary transition-smooth resize-none"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(56, 189, 248, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full px-8 py-3 bg-accent text-dark-bg font-bold rounded-lg hover:bg-opacity-90 transition-smooth"
                >
                  {submitted ? '✓ Message Sent!' : 'Send Message'}
                </motion.button>
              </motion.div>
            </motion.form>
          </AnimatedSection>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <AnimatedSection delay={0.3}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    variants={itemVariants}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="glass p-6 rounded-xl border border-accent border-opacity-10 hover:border-opacity-30 transition-smooth group block"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-accent group-hover:scale-125 transition-transform duration-300">
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">{method.label}</h3>
                        <p className="text-text-secondary group-hover:text-accent transition-smooth">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </AnimatedSection>

            {/* Social Links */}
            <AnimatedSection delay={0.5}>
              <div>
                <h3 className="text-xl font-bold mb-6">Follow Me</h3>
                <motion.div
                  className="flex gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-4 glass rounded-lg border border-accent border-opacity-10 hover:border-opacity-30 text-accent hover:text-accent hover:bg-accent hover:bg-opacity-10 transition-smooth"
                      title={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
