import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "store";
import { Provider } from "react-redux";

import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import Blog from "containers/pages/Blog";
import Cases from "containers/pages/Cases";
import Services from "containers/pages/Services";
import About from "containers/pages/About";
import Carrer from "containers/pages/Carrer";
import Contact from "containers/pages/Contact";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/Cases" element={<Cases/>} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/Carrer" element={<Carrer/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </Router>
    </Provider>
    
  );
}

export default App;
