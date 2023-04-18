import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import AboutUs from './pages/AboutUs/AboutUs';
import Form from './pages/Form/Form';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import { store } from './Store/store';

export function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="about" element={<AboutUs />} />
        <Route
          path="form"
          element={
            <Form
              id={0}
              name=""
              description=""
              price={0}
              popularity={0}
              stock={0}
              animeName=""
              category=""
              images={[]}
              date={new Date()}
              order=""
            />
          }
        />
      </Routes>
    </div>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}
