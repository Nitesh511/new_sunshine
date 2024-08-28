import React from "react";
import { Routes,Route} from "react-router-dom";
import Dashboard from "../dashboard/dashboard";
import Blinds_page from "../blinds/blinds_page";
import Curtains_Page from "../curtains/curtains";
import Shutter from "../shutters/shutter";
import Awnings_Page from "../awnings/awnings";
import Commercial_Page from "../commercial/commercial";
import ContactUs from "../contactus/contactus";
import Productdetails from "../productdetails/productdetails";
import AboutUs from "../aboutus/aboutus";
import BrochureRequestForm from "../bourchers_form/bourches_form";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/blinds" element={<Blinds_page/>}></Route>
    <Route path="/blinds/:slug" element={<Productdetails/>}></Route>
    <Route path="/curtains" element={<Curtains_Page/>}></Route>
    <Route path="/curtains/:slug" element={<Productdetails/>}></Route>
    <Route path="/shutters" element={<Shutter/>}></Route>
    <Route path="/shutters/:slug" element={<Productdetails/>}></Route>
    <Route path="/awnings" element={<Awnings_Page/>}></Route>
    <Route path="/awnings/:slug" element={<Productdetails/>}></Route>
    <Route path="/commercial" element={<Commercial_Page/>}></Route>
    <Route path="/contact" element={<ContactUs/>}></Route>
    <Route path="/aboutus" element={<AboutUs/>}></Route>
    <Route path="/request" element={<div className="mt-10 mb-10"><BrochureRequestForm/></div>}></Route>
    
    

  </Routes>


);

export default AppRoutes;
