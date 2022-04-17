import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import ServiceDetails from "./Components/ServiceDetails/ServiceDetails";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Home from "./Pages/Home/Home";
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
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/thanks" element={<ThanksPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
