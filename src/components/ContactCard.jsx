import { motion } from 'framer-motion'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'
import AnimatedSection from './AnimatedSection'

export default function ContactCard() {
  const socialLinks = [
    { icon: FiLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/varunavib/', color: 'text-blue-400' },
    { icon: FiGithub, label: 'GitHub', url: 'https://github.com/varunavi09/', color: 'text-cyan-400' },
    { icon: FiMail, label: 'Email', url: 'mailto:varunavi.v1@gmail.com', color: 'text-pink-400' },
  ]

  const contactInfo = [
    { icon: MdEmail, label: 'Email', value: 'varunavi.v1@gmail.com', link: 'mailto:varunavi.v1@gmail.com' },
    { icon: MdLocationOn, label: 'Location', value: 'Tamil Nadu, India' },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    window.location.href = 'mailto:varunavi.v1@gmail.com'
  }

  return (
    <AnimatedSection id="contact" className="min-h-screen bg-gradient-to-br from-dark-bg via-secondary-bg to-dark-bg py-20 flex items-center creative-section">
      <div className="max-w-4xl mx-auto px-4 w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-text-secondary text-lg">
            Have an exciting opportunity or just want to connect?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information - Business Card Style */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="kinetic-card relative p-8 rounded-[1.75rem] border border-teal-300/30 backdrop-blur-md overflow-hidden group hover:border-violet-300/60 transition-all">
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />

              {/* Content */}
              <div className="relative z-10">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold text-text-primary mb-8"
                >
                  Contact Information
                </motion.h3>

                {/* Contact Items */}
                <div className="space-y-6 mb-8">
                  {contactInfo.map((item, idx) => (
                    <motion.a
                      key={idx}
                      href={item.link}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-secondary-bg/70 hover:bg-teal-300/10 transition-colors cursor-pointer group/item border border-white/5"
                    >
                      <div className="text-3xl text-teal-200 group-hover/item:scale-110 transition-transform">
                        <item.icon />
                      </div>
                      <div>
                        <p className="text-text-secondary text-sm uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="text-text-primary font-semibold text-lg group-hover/item:text-teal-200 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-300 to-transparent my-8" />

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4"
                >
                  <p className="text-text-secondary text-sm mb-4 uppercase tracking-wide">
                    Follow Me
                  </p>
                  <div className="flex gap-4">
                    {socialLinks.map((link, idx) => (
                      <motion.a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className={`text-3xl ${link.color} hover:shadow-lg transition-all`}
                        title={link.label}
                      >
                        <link.icon />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-secondary-bg/80 border border-teal-300/20 focus:border-violet-300/60 outline-none text-text-primary placeholder-text-secondary transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl bg-secondary-bg/80 border border-teal-300/20 focus:border-violet-300/60 outline-none text-text-primary placeholder-text-secondary transition-all"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl bg-secondary-bg/80 border border-teal-300/20 focus:border-violet-300/60 outline-none text-text-primary placeholder-text-secondary transition-all resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="holo-button w-full px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-teal-300/30 transition-all flex items-center justify-center gap-2"
              >
                Send Message
              </motion.button>
            </form>

            {/* Alternative */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center text-text-secondary text-sm mt-6"
            >
              Or reach out directly at{' '}
              <motion.a
                href="mailto:varunavi.v1@gmail.com"
                whileHover={{ color: '#5EEAD4' }}
                className="text-teal-200 font-semibold hover:underline"
              >
                varunavi.v1@gmail.com
              </motion.a>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
