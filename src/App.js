import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/Users/HomePage';
import Header from './components/layout/Header/Header';
import UserPages from './pages/Users/UserPages';
import AdminPage from './pages/Admin/AdminPage';


function App() {
  return (
    <BrowserRouter>
      <ToastContainer />

      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/user/*" element={<UserPages />} />
        <Route path="/admin/*" element={<AdminPage />} />


      </Routes>
    </BrowserRouter>


  );
}

export default App;
