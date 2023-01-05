import React from "react"
import Header from "./components/common/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./components/singlePages/SinglePage"
import Culture from "./components/culture/Culture"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepages} />
          <Route path='/singlepage/:id' exact component={SinglePage} />
          <Route exact path='/culture' component={Culture} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}


export default App