import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import AboutUs from './pages/AboutUs/AboutUs';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

export function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
