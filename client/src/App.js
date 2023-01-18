
import './App.css';
import Form from './components/form/form';
import Header from './components/header/header';
import LandingPage from './components/landing-page/landing-page';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/addpost' element={<Form />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
