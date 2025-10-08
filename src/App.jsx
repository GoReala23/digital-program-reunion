// ================================================
// App.jsx
// Purpose: Root component that handles routing between pages
// Why: Adds animated page transitions using Framer Motion
// ================================================

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import EventSchedule from './pages/EventSchedule/EventSchedule';
import Nostalgia from './pages/Nostalgia/Nostalgia';
import ClosingReflections from './pages/ClosingReflections/ClosingReflections';
import Footer from './components/Footer/Footer';

import './App.css';

// 🎬 Animation Variants
const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// 🌫️ Shared Page Wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    className='page-fade'
    variants={fadeVariants}
    initial='initial'
    animate='animate'
    exit='exit'
    transition={{ duration: 0.6, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

// 🚦 Page Routing with Animation
const AnimatedRoutes = () => {
  const location = useLocation();

  const routes = [
    { path: '/', element: <EventSchedule /> },
    { path: '/schedule', element: <EventSchedule /> },
    { path: '/nostalgia', element: <Nostalgia /> },
    { path: '/closing', element: <ClosingReflections /> },
  ];

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<PageWrapper>{element}</PageWrapper>}
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <div className='app'>
        <main className='app__content'>
          <AnimatedRoutes />
        </main>
        <footer className='app__footer'>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}
