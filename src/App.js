import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from './pages/Store';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import NoPage from './pages/NoPage';



function App() {
  return (
    <>
    <Container>
    <NavbarComponent />
    <BrowserRouter>
      <Routes>
      <Route>
        <Route index element={<Store />} />
        <Route path="success" element={<Success />} />
        <Route path="cancel" element={<Cancel />} />
        <Route path="*" element={<NoPage />} />
      </Route>
      </Routes>
    </BrowserRouter>
    </Container>
    
    </>
  );
}

export default App;
