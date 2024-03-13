import React,{ useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import StripePayment from "./components/StripePayment";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import HomepageCarousel from "./components/HomepageCarousel";
import HomepageService from "./components/HomepageService";
import HomepageAbout from "./components/HomepageAbout";
import HomepageFunfacts from "./components/HomepageFunfacts";
import HomepageContact from "./components/HomepageContact";
import HomepageReview from "./components/HomepageReview";
import HomepageInfo from "./components/HomepageInfo";
import Student from "./components/Student";
import Business from "./components/Business";
import Tourist from "./components/Tourist";
import Work from "./components/Work";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import SetUpMeeting from "./components/SetUpMeeting";
import Chatbot from "./components/Chatbot";

function App() {
  const [showButton, setShowButton] = useState(true);
  return (
    <BrowserRouter>
      <Routes>
        {/* Use a top-level route for the layout */}
        <Route
          path="/"
          element={
            <>
              { <Header showButton={showButton}/>}
              {/* Use Outlet to render child routes */}
              <Outlet />
              <Chatbot/>
              <HomepageInfo/>
              <Footer />
            </>
          }
        >
          {/* Use nested routes for the Body component */}
          <Route index element={<Body />} />
          <Route path="stripePayment" element={<StripePayment setShowButton={setShowButton}/>} />
          <Route path="HomepageCarousel" element={<HomepageCarousel />}/>
          <Route path="HomepageService" element={<HomepageService />}/>
          <Route path="HomepageAbout" element={<HomepageAbout />}/>
          <Route path="HomepageFunfacts" element={<HomepageFunfacts />}/>
          <Route path="HomepageContact" element={<HomepageContact/>}/>
          <Route path="HomepageInfo" element={<HomepageInfo/>}/>
          <Route path="Student" element={<Student/>}/>
          <Route path="Business" element={<Business/>}/>
          <Route path="Tourist" element={<Tourist/>}/>
          <Route path="Work" element={<Work/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="Service" element={<Service/>}/>
          <Route path="Contact" element={<Contact/>}/>
          {/* <Route path="Chatbot" element={<Chatbot/>}/> */}
          
          <Route path="SetUpMeeting" element={<SetUpMeeting setShowButton={setShowButton}/>}/>
          
          <Route path="HomepageReview" element={<HomepageReview/>}/>
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
