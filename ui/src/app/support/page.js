'use client';
import { useState } from 'react';
import { 
  Search, Mail, Book, MessageCircle, ChevronDown, 
  Send, Phone, HelpCircle, ArrowRight, LifeBuoy, 
  Zap, Shield, Clock, ExternalLink 
} from 'lucide-react';
import Header from '../components/header';

const faqs = [
  { q: "How do I create an account?", a: "Click on Sign Up and fill in your details. You will receive a verification email to activate your account." },
  { q: "How do I reset my password?", a: "Use the 'Forgot Password' link on the login page. Follow the instructions sent to your registered email." },
  { q: "How to track my order?", a: "Navigate to Dashboard > Orders > Track Order and enter your unique order ID to see real-time updates." },
  { q: "What payment methods do you accept?", a: "We accept all major Gpay, Phonepay, PayPal, and secure bank transfers." },
  { q: "How long does shipping take?", a: "Standard shipping takes 5-7 business days. Express shipping options are available for 2-3 day delivery." },
];

const guides = [
  { title: "Getting Started", desc: "Learn the basics and set up your account", icon: "🚀", link: "#", color: "bg-orange-50" },
  { title: "Dashboard Manual", desc: "Navigate and customize your workspace", icon: "📊", link: "#", color: "bg-blue-50" },
  { title: "Managing Orders", desc: "Track, modify and manage your orders", icon: "📦", link: "#", color: "bg-green-50" },
  { title: "Account Settings", desc: "Update your profile and preferences", icon: "⚙️", link: "#", color: "bg-purple-50" },
  { title: "Billing & Payments", desc: "Manage payment methods and invoices", icon: "💳", link: "#", color: "bg-pink-50" },
  { title: "Security Guide", desc: "Keep your account safe and secure", icon: "🔒", link: "#", color: "bg-slate-100" },
];

const contactOptions = [
  { icon: Mail, title: "Email Support", desc: "support@example.com", color: "bg-blue-50 text-blue-600" },
  { icon: Phone, title: "Phone Support", desc: "+1 (555) 123-4567", color: "bg-emerald-50 text-emerald-600" },
  { icon: MessageCircle, title: "Live Chat", desc: "Available 24/7", color: "bg-violet-50 text-violet-600" },
];

export default function SupportPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in all fields');
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const filteredFaqs = faqs.filter(faq => 
    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#1f807b] py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-indigo-500/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            How can we <span className="text-[#c7e8e2]">help you?</span>
          </h1>
          <p className="text-slate-300 text-base md:text-xl max-w-2xl mx-auto mb-10 px-4">
            Search our knowledge base or get in touch with our experts.
          </p>
          
          {/* <div className="relative max-w-2xl mx-auto group px-2 sm:px-0">
            <Search className="absolute left-6 sm:left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
            <input
              type="text"
              placeholder="Describe your issue..."
              className="w-full pl-12 sm:pl-14 pr-6 py-4 sm:py-5 bg-slate-900/50 border border-slate-700 rounded-2xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm transition-all shadow-2xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div> */}
        </div>
      </section>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 relative z-10 pb-20">
        
        {/* Quick Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
          {contactOptions.map((option, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all group cursor-pointer">
              <div className={`${option.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <option.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{option.title}</h3>
              <p className="text-slate-500 text-sm mb-4 break-words">{option.desc}</p>
              <div className="flex items-center text-blue-600 font-semibold text-xs uppercase tracking-wider group-hover:gap-2 transition-all">
                Connect <ArrowRight size={14} className="ml-1" />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT: Self-Service Content */}
          <div className="lg:col-span-2 space-y-16 md:space-y-20">
            
            {/* Guides Bento Grid */}
            <section>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Knowledge Base</h2>
                  <p className="text-slate-500 mt-1 text-sm md:text-base">Explore detailed documentation and tutorials.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {guides.map((guide, i) => (
                  <a key={i} href={guide.link} className={`p-6 ${guide.color} border border-transparent rounded-2xl hover:border-slate-200 transition-all flex items-start gap-4 group`}>
                    <span className="text-3xl group-hover:scale-125 transition-transform shrink-0">{guide.icon}</span>
                    <div>
                      <h4 className="font-bold text-slate-900 flex items-center gap-1">
                        {guide.title} <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-sm text-slate-600 mt-1">{guide.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* FAQs */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-600 text-white rounded-lg shrink-0">
                  <HelpCircle size={20} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Popular Questions</h2>
              </div>
              <div className="space-y-2">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, i) => (
                    <Accordion key={i} question={faq.q} answer={faq.a} />
                  ))
                ) : (
                  <div className="text-center py-10 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                    <p className="text-slate-500">No results found for "{searchQuery}"</p>
                  </div>
                )}
              </div>
            </section>
          </div>

          {/* RIGHT: Sticky Contact Form */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8 bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg shrink-0">
                  <LifeBuoy size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Make an Ticket</h3>
                </div>
              </div>

              {submitted ? (
                <div className="py-10 text-center animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Message Received!</h4>
                  <p className="text-sm text-slate-500 mt-2">Check your email for a confirmation and ticket number.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-500 uppercase ml-1">Name</label>
                    <input 
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-500 uppercase ml-1">Email</label>
                    <input 
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-500 uppercase ml-1">Message</label>
                    <textarea 
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your issue..." 
                      rows={4} 
                      className="w-full p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all resize-none text-sm sm:text-base"
                    ></textarea>
                  </div>
                  <button 
                    onClick={handleSubmit}
                    className="w-full py-4 bg-[#1f807b] text-white rounded-xl font-bold hover:bg-[#155E5A] transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-200 mt-2"
                  >
                    <Send size={18} /> Send Ticket
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Accordion({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border-b border-slate-100 transition-all duration-300 ${open ? 'bg-blue-50/40 sm:-mx-4 px-4 rounded-2xl border-transparent' : ''}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex justify-between items-start text-left focus:outline-none"
      >
        <span className={`font-semibold text-base md:text-lg transition-colors pr-4 ${open ? 'text-blue-600' : 'text-slate-800'}`}>
          {question}
        </span>
        <div className={`p-1 rounded-full transition-all shrink-0 ${open ? 'bg-blue-100 text-blue-600 rotate-180' : 'text-slate-400'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${open ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
}