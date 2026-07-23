import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiMessageCircle, FiSend } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/portfolioData'

// NOTE: Replace these with your own EmailJS credentials.
// Sign up free at https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setStatus('success')
        formRef.current.reset()
      })
      .catch(() => setStatus('error'))
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-px max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something"
            highlight="great together"
            subtitle="Have a project in mind or a campaign that needs better ROI? Reach out."
          />

          <div className="mt-8 flex flex-col gap-4">
            <a href={`mailto:${profile.email}`} className="glass-card p-4 flex items-center gap-4">
              <span className="w-11 h-11 rounded-xl bg-brand-gradient flex items-center justify-center text-white">
                <FiMail />
              </span>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Email</p>
                <p className="font-medium text-sm">{profile.email}</p>
              </div>
            </a>

            <a href={`tel:${profile.phone}`} className="glass-card p-4 flex items-center gap-4">
              <span className="w-11 h-11 rounded-xl bg-brand-gradient flex items-center justify-center text-white">
                <FiPhone />
              </span>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Phone</p>
                <p className="font-medium text-sm">{profile.phone}</p>
              </div>
            </a>

            <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="glass-card p-4 flex items-center gap-4">
              <span className="w-11 h-11 rounded-xl bg-brand-gradient flex items-center justify-center text-white">
                <FiMessageCircle />
              </span>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">WhatsApp</p>
                <p className="font-medium text-sm">Chat instantly</p>
              </div>
            </a>

            <div className="flex gap-3 mt-2">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline !px-4 !py-2.5 flex-1">
                <FiLinkedin /> LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-outline !px-4 !py-2.5 flex-1">
                <FiGithub /> GitHub
              </a>
            </div>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-7 sm:p-8 flex flex-col gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input
                id="name"
                name="user_name"
                type="text"
                required
                placeholder="Your name"
                className="mt-1.5 w-full rounded-xl border border-slate-300 dark:border-white/15 bg-white/70 dark:bg-white/5 px-4 py-2.5 text-sm outline-none focus:border-brand-purple"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                id="email"
                name="user_email"
                type="email"
                required
                placeholder="you@example.com"
                className="mt-1.5 w-full rounded-xl border border-slate-300 dark:border-white/15 bg-white/70 dark:bg-white/5 px-4 py-2.5 text-sm outline-none focus:border-brand-purple"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="Project inquiry"
              className="mt-1.5 w-full rounded-xl border border-slate-300 dark:border-white/15 bg-white/70 dark:bg-white/5 px-4 py-2.5 text-sm outline-none focus:border-brand-purple"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="mt-1.5 w-full rounded-xl border border-slate-300 dark:border-white/15 bg-white/70 dark:bg-white/5 px-4 py-2.5 text-sm outline-none focus:border-brand-purple resize-none"
            />
          </div>

          <button type="submit" disabled={status === 'sending'} className="btn-primary mt-2 disabled:opacity-60">
            {status === 'sending' ? 'Sending...' : <>Send Message <FiSend /></>}
          </button>

          {status === 'success' && (
            <p className="text-sm text-green-600 dark:text-green-400">Message sent! I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-500">
              Something went wrong. Please add your EmailJS credentials in Contact.jsx, or email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
