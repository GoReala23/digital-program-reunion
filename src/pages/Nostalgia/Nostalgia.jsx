// ================================================
// Nostalgia.jsx
// Purpose: Displays nostalgic content from 1975 for attendees
// Why: Page 2 of the digital reunion program
// ================================================

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { nostalgiaData } from '../../data/nostalgiaData';
import '../../styles/navButtons.css';
import './Nostalgia.css';

export default function Nostalgia() {
  const [activeSection, setActiveSection] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const navigate = useNavigate();

  const activeData = activeSection ? nostalgiaData[activeSection] : null;

  // Disable scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeSection ? 'hidden' : 'auto';
  }, [activeSection]);

  // Shared gallery image handler
  const changeImage = (section, direction) => {
    setActiveImageIndex((prev) => {
      const len = section.items.length;
      return direction === 'next' ? (prev + 1) % len : (prev - 1 + len) % len;
    });
  };

  const handleToggle = (id) => {
    setActiveSection((prev) => (prev === id ? null : id));
    setActiveImageIndex(0);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <div className='nostalgia'>
      <div className='nostalgia__wrapper'>
        <motion.h1
          className='nostalgia__title'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Do You Remember?
        </motion.h1>

        {/* 🎞️ Nostalgia Cards */}
        {Object.entries(nostalgiaData).map(([key, section]) => (
          <motion.div
            key={key}
            id={key}
            className={`nostalgia__card ${
              activeSection === key ? 'nostalgia__card--active' : ''
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => handleToggle(key)}
              className='nostalgia__header'
            >
              <h2 className='nostalgia__sectionTitle'>{section.title}</h2>
              <div className='nostalgia__preview'>
                <div className='nostalgia__previewFrame'>
                  <img
                    src={section.heroImage || section.items[0].image}
                    alt={`${section.title} preview`}
                    className='nostalgia__previewImg nostalgia__previewImg--hero'
                  />
                </div>
              </div>
              <p className='nostalgia__caption'>{section.description}</p>
              <span
                className={`nostalgia__arrow ${
                  activeSection === key ? 'nostalgia__arrow--open' : ''
                }`}
              >
                ▼
              </span>
            </button>
          </motion.div>
        ))}

        {/* 🖼️ Modal (appears when a section is active) */}
        <AnimatePresence>
          {activeData && (
            <>
              {/* Dimmed Background */}
              <motion.div
                key='backdrop'
                className='nostalgia__backdrop'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveSection(null)}
              />

              {/* Focused Modal Content */}
              <motion.div
                key='focus'
                className='nostalgia__focus'
                variants={modalVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
                transition={{ duration: 0.4 }}
              >
                <div className='nostalgia__gallery'>
                  <h2 className='nostalgia__modalTitle'>
                    {activeData.items[activeImageIndex].name}
                  </h2>

                  {activeData.items[activeImageIndex].note && (
                    <p className='nostalgia__modalNote'>
                      {activeData.items[activeImageIndex].note}
                    </p>
                  )}

                  <div className='nostalgia__gallery-frame'>
                    <motion.img
                      key={activeData.items[activeImageIndex].image}
                      src={activeData.items[activeImageIndex].image}
                      alt={activeData.items[activeImageIndex].name}
                      className='nostalgia__gallery-image'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Arrows */}
                    {activeData.items.length > 1 && (
                      <>
                        <button
                          className='nostalgia__gallery-arrow nostalgia__gallery-arrow--left'
                          aria-label='Previous image'
                          onClick={() => changeImage(activeData, 'prev')}
                        >
                          ←
                        </button>
                        <button
                          className='nostalgia__gallery-arrow nostalgia__gallery-arrow--right'
                          aria-label='Next image'
                          onClick={() => changeImage(activeData, 'next')}
                        >
                          →
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnails */}
                  <div className='nostalgia__gallery-thumbnails'>
                    {activeData.items.map((imgObj, idx) => (
                      <img
                        key={idx}
                        src={imgObj.image}
                        alt={imgObj.name}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`nostalgia__gallery-thumbnail ${
                          activeImageIndex === idx
                            ? 'nostalgia__gallery-thumbnail--active'
                            : ''
                        }`}
                      />
                    ))}
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={() => setActiveSection(null)}
                    className='nostalgia__gallery-close'
                    aria-label='Close gallery'
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* 🧭 Page Navigation */}
        <div className='page-nav'>
          <button
            className='nav-button nav-button--schedule'
            onClick={() => navigate('/schedule')}
          >
            ← Back to Schedule
          </button>
          <button className='nav-button nav-button--active' disabled>
            These were the days
          </button>
          <button
            className='nav-button nav-button--closing'
            onClick={() => navigate('/closing')}
          >
            View Closing Message →
          </button>
        </div>
      </div>
    </div>
  );
}
