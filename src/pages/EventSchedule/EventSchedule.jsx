// ================================================
// EventSchedule.jsx
// Purpose: Displays the 50th Reunion evening schedule
// Why: Page 1 of the digital program (Home / Schedule)
// ================================================

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../styles/navButtons.css';
import './EventSchedule.css';

export default function EventSchedule() {
  const navigate = useNavigate();

  return (
    <div className='eventSchedule'>
      <div className='eventSchedule__wrapper'>
        {/* 🎓 Reunion Banner */}
        <motion.div
          className='eventSchedule__banner'
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          CLASS OF 1975
        </motion.div>

        {/* 🏷️ Title */}
        <motion.h1
          className='eventSchedule__title'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          50<sup>th</sup> Reunion
        </motion.h1>
        <h2 className='eventSchedule__subtitle'>Evening Program Schedule</h2>

        {/* 🙏 Invocation Section */}
        <div className='eventSchedule__section eventSchedule__section--invocation'>
          <h3 className='eventSchedule__sectionTitle'>
            Program Invocation &amp; Blessing of the Food
          </h3>
          <p className='eventSchedule__invocationText'>
            Rev. Arcilous Mincey, Jr. <br />
            1st MBC of Highland Pines <br />
            Boca Ciega High School
          </p>
          <hr className='eventSchedule__divider' />
        </div>

        {/* 📅 Schedule Sections */}
        <div className='eventSchedule__sections'>
          {[
            {
              time: '7:00 – 8:00 PM',
              list: ['Registration', 'Photographs', 'Cocktails / Meet & Greet'],
            },
            {
              time: '8:00 – 9:30 PM',
              list: ['Welcome', 'Invocation', 'Dinner'],
            },
            {
              time: '9:30 – 11:00 PM',
              list: ['Dancing', 'Reminiscing', 'Closing Remarks'],
            },
          ].map(({ time, list }) => (
            <div key={time} className='eventSchedule__section'>
              <p className='eventSchedule__time'>{time}</p>
              <ul className='eventSchedule__list'>
                {list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 🧭 Page Navigation */}
        <div className='page-nav'>
          <button className='nav-button nav-button--active' disabled>
            Schedule
          </button>
          <button className='nav-button' onClick={() => navigate('/nostalgia')}>
            Let’s Go Back in Time →
          </button>
          <button className='nav-button' onClick={() => navigate('/closing')}>
            View Closing Message →
          </button>
        </div>
      </div>
    </div>
  );
}
