import React, { useState } from "react";
import './App.css';
import './Header.css';
import './MoreTooltip.css'
import './NavTooltip.css'
import Header from './component/Header'
import Login from './component/Login'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams,
} from "react-router-dom";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//firebase
import firebase from "firebase/app";
import "firebase/auth";

import { UserContext } from "./context/UserContext";

import Automation from './component/Automation'
import Industrial from './component/Industrial'
import Printing from './component/Printing'
import Packaging from './component/Packaging'
import Services from './component/Services'
import OfferZone from './component/Offerzone'
import ImageSlider from './component/ImageSlider';
import { SliderData } from './component/SliderData';
import Navigation from './component/Navigation';
import Signin from './component/Signin';
import Signup from './component/Signup';
import Footer from './component/Footer';

import firebaseConfig from './config/firebaseConfig'
//init firebase
firebase.initializeApp(firebaseConfig);



const App = () =>{

  const [user, setUser] = useState(null);

  return(
    <div id="mainapp">
      {/* <Login /> */}
      <Header />
      <Navigation />
      <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Switch>
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />    
            <Route exact path="/automation" component={Automation} />
            <Route exact path="/industrial" component={Industrial} />
            <Route exact path="/printing" component={Printing} />
            <Route exact path="/packaging" component={Packaging} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/offerzone" component={OfferZone} />
        </Switch>
        </UserContext.Provider>
      </Router>
      <ImageSlider slides={SliderData}/>
      <Automation />
      <Printing />
      <Footer />
    </div>  
    
  )
}

export default App;
