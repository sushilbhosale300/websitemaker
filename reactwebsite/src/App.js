
import './App.css';
import './Header.css';
import './MoreTooltip.css'
import './NavTooltip.css'
import Header from './component/Header'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";


import Automation from './component/Automation'
import Industrial from './component/Industrial'
import Printing from './component/Printing'
import Packaging from './component/Packaging'
import Services from './component/Services'
import OfferZone from './component/Offerzone'
import ImageSlider from './component/ImageSlider';
import { SliderData } from './component/SliderData';
import Navigation from './component/Navigation';



const App = () =>{
  return(
    <div>
    
    <div>
      <Header />
    </div>
    <div>
      <Navigation />
    </div>
    <div>
    <Router>
      <Switch>
          <Route exact path="/automation" component={Automation} />
          <Route exact path="/industrial" component={Industrial} />
          <Route exact path="/printing" component={Printing} />
          <Route exact path="/packaging" component={Packaging} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/offerzone" component={OfferZone} />
      </Switch>
    </Router>
    </div>
    <div>
      <ImageSlider slides={SliderData}/>
    </div>
     
    </div>  
    
  )
}

export default App;
