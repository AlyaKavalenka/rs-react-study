import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import AboutUs from './pages/AboutUs/AboutUs';
import Form from './pages/Form/Form';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

export function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="form" element={<Form />} />
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
