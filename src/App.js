import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch, Redirect} from 'react-router-dom';
import {Home} from './components/Home';
import {Service} from './components/Service';
import {Blog} from './components/Blog';
import {Contact} from './components/Contact';
import {NoMatch} from './components/NoMatch';
import {Layout} from './components/Layout';
import {Menu} from './components/Nav';
import {Price} from './components/Price';
import {Portfolio} from './components/Portfolio';
import {BackTop} from './components/BackTop';
import {Footer}  from './components/Footer';

const BlogRedirection = () => (
  <Redirect to="/blog/1"/>
)

function App() {
  return (
    <React.Fragment>
     
      <Router>
      <Menu />
        <Switch>

          <Route exact path="/"  component={Home} />
          <Route path="/services" component={Service} />
          <Route path="/price" component={Price} />
          <Route path="/portfolio" component={Portfolio} />
          <Route exact path="/blog/" component={BlogRedirection}/>
          <Route path="/blog/:blogid" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch>
        
      </Router>
  
      <BackTop />
     
      <Footer/>
      
    </React.Fragment>
  );
}

export default App;
