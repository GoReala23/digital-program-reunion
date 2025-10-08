// ================================================
// ClosingReflections.jsx
// Purpose: Final emotional sendoff celebrating
// each attendee’s journey, growth, and legacy.
// Why: Page 3 of the digital reunion program
// ================================================

import React from 'react';
// import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../../styles/navButtons.css';
import './ClosingReflections.css';

export default function ClosingReflections() {
  const navigate = useNavigate();

  return (
    <section className='closing-bg flex flex-col items-center justify-center min-h-screen text-center px-6 py-20'>
      <motion.div
        className='max-w-3xl fade-in px-4 md:px-8 pb-10'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className='text-3xl md:text-4xl font-bold mb-6 text-amber-800'>
          Through It All…
        </h1>

        <p className='leading-relaxed text-lg md:text-xl text-[#2b1b0f] mb-6'>
          As we look around tonight, we see more than familiar faces — we see
          stories. Stories of triumph and loss, of laughter and late nights, of
          dreams that found their way, even when the road turned rough.
        </p>

        <p className='leading-relaxed text-lg md:text-xl text-[#2b1b0f] mb-6'>
          Each of us has carried our share of battles, but also built legacies —
          in families, friendships, faith, and perseverance. The years may have
          changed our pace, but not our purpose. We are living proof that time
          may move forward, but true spirit never fades.
        </p>

        <p className='leading-relaxed text-lg md:text-xl text-[#2b1b0f] mb-6'>
          So tonight, we celebrate <strong>every step</strong> — the ones that
          lifted us high, and the ones that taught us how to rise again. We
          honor the heartaches that made us stronger, the testimonies that
          shaped our truth, and the love that still ties us all together.
        </p>

        <p className='leading-relaxed text-lg md:text-xl text-[#2b1b0f] italic'>
          Here’s to us — the dreamers, the doers, the believers, still writing
          new chapters with pride in where we’ve been and gratitude for where we
          stand.
        </p>

        <p className='mt-10 text-amber-900 font-semibold tracking-wide'>
          — With love and respect for every story in this room
        </p>

        {/* 🧭 Page Navigation */}
        <div className='page-nav mt-12 mb-8'>
          <button className='nav-button' onClick={() => navigate('/schedule')}>
            ← Back to Schedule
          </button>
          <button className='nav-button' onClick={() => navigate('/nostalgia')}>
            Reminisce →
          </button>
          <button className='nav-button nav-button--active' disabled>
            Closing Reflections
          </button>
        </div>
      </motion.div>
    </section>
  );
}
