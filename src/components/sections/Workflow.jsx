import { motion } from 'framer-motion';
import { Camera, Cloud, Scissors, Send } from 'lucide-react';

const steps = [
  {
    icon: <Camera className="w-8 h-8 text-sky-500" />,
    title: "Capture",
    description: "Shoot in high resolution on your smartphone. Airshare runs in the background, chunking files the second you hit record.",
  },
  {
    icon: <Cloud className="w-8 h-8 text-blue-500" />,
    title: "Sync",
    description: "Multi-threaded upload pushes footage to a secure cloud server instantly. No waiting for the card to fill up.",
  },
  {
    icon: <Scissors className="w-8 h-8 text-purple-500" />,
    title: "Edit",
    description: "Editors access proxy or original files directly from the cloud drive in their NLE. Zero download time.",
  },
  {
    icon: <Send className="w-8 h-8 text-emerald-500" />,
    title: "Deliver",
    description: "Push changes back to the client instantly. Real-time feedback overlay on the video itself.",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function Workflow() {
  return (
    <section className="py-24 px-6 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-6">Seamless from Capture to Delivery</h2>
          <p className="text-lg text-slate-600">The fastest workflow you've never experienced. Turn hours of DIT work into literally zero.</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
            >
              {/* Subtle hover background highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-[100px] -z-10 translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:-translate-y-0 transition-transform duration-500 ease-out" />
              
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-6 z-10 relative">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
