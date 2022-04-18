import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ServiceDetails from "./Components/ServiceDetails/ServiceDetails";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Services from "./Pages/Services/Services";
import ThanksPage from "./Pages/ThanksPage/ThanksPage";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto my-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:homeServicesUrl" element={<ServiceDetails />} />
          <Route path="/services" element={<Services />}></Route>
          <Route path="services/:servicesUrl" element={<ServiceDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/thanks" element={<ThanksPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
