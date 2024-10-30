import React,{ useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
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
import HomepageMap from "./components/HomepageMap";
import StudyPermit from "./components/StudyPermit";
import PNP from "./components/PNP";
import VisitorVisa from "./components/VisitorVisa";
import WorkAndTravelPermit from "./components/WorkAndTravelPermit";
import About from "./components/About";
import LMIA from "./components/LMIA";
import FamilySponsorship from "./components/FamilySponsorship";
import ExpressEntry from "./components/ExpressEntry";
import Contact from "./components/Contact";
import SetUpMeeting from "./components/SetUpMeeting";
import Chatbot from "./components/Chatbot";
import Admin from "./components/Admin";
import Dashboard from "./components/Dashboard";
import BlogEditor from "./components/BlogEditor";
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomeNavbar from "./components/HomeNavbar";
import Main from "./js/main";



function App() {
  const [showButton, setShowButton] = useState(true);
  
  return (
    <BrowserRouter>
      <Main/>
      <HomeNavbar/>
      <Routes>
        {/* Use a top-level route for the layout */}
         <Route
          path="/"
          element=
          {<Layout showButton={showButton} />}
          
            // <>
            //   {!isAdminPage && <Header showButton={showButton}/>}
            //   {/* Use Outlet to render child routes */}
            //   <Outlet />
            //   {!isAdminPage && <Chatbot/>}
            //   {!isAdminPage && <HomepageInfo/>}
            //   {!isAdminPage && <Footer />}
            // </>
          
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
          <Route path="StudyPermit" element={<StudyPermit/>}/>
          <Route path="PNP" element={<PNP/>}/>
          <Route path="VisitorVisa" element={<VisitorVisa/>}/>
          <Route path="FamilySponsorship" element={<FamilySponsorship/>}/>
          <Route path="ExpressEntry" element={<ExpressEntry/>}/>
          <Route path="WorkAndTravelPermit" element={<WorkAndTravelPermit/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="LMIA" element={<LMIA/>}/>
          <Route path="BlogEditor" element={<BlogEditor/>}/>
          <Route path="Contact" element={<Contact/>}/>
          <Route path="Admin" element={<Admin/>}/>
          <Route path="Dashboard" element={<Dashboard/>}/>
          {/* <Route path="Chatbot" element={<Chatbot/>}/> */}
          
          <Route path="SetUpMeeting" element={<SetUpMeeting setShowButton={setShowButton}/>}/>
          
          <Route path="HomepageReview" element={<HomepageReview/>}/>
          <Route path="HomepageMap" element={<HomepageMap/>}/>
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
// Custom Route component for handling layout
function Layout({ showButton }) {
  const location = useLocation();
  const isAdminPage = location.pathname.includes("/Admin");
  const isDashboard = location.pathname.includes("/Dashboard");

  return (
    <>
      {/* {!isAdminPage && !isDashboard && <Header showButton={showButton} />} */}
      <Outlet />
      {!isAdminPage && !isDashboard && <Chatbot />}
      {!isAdminPage && !isDashboard && <HomepageInfo/>}
      {!isAdminPage && !isDashboard && <Footer />}
    </>
  );
}

export default App;
