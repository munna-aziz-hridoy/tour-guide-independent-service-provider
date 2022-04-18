import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import ServiceDetails from "./Components/ServiceDetails/ServiceDetails";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NoRoutePage from "./Pages/NoRouePage/NoRoutePage";
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
          <Route path="/services" element={<Services />}></Route>
          <Route
            path="/servicesDetails/:servicesUrl"
            element={<ServiceDetails />}
          />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/checkout"
            element={
              <RequireAuth>
                <CheckOut />
              </RequireAuth>
            }
          />
          <Route path="/thanks" element={<ThanksPage />} />
          <Route path="*" element={<NoRoutePage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
