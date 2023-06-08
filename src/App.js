import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Link as ScrollLink, Element, scroller } from 'react-scroll';
import './App.css';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Staff from './Components/Staff';

function App() {
const scrollToComponent = (component) => {
scroller.scrollTo(component, {
duration: 800,
delay: 0,
smooth: 'easeInOutQuart',
offset: 50, // Adjust the offset to account for a fixed header if applicable
});
};

return (
<Router>
<div>
<nav>
<ul>
<li>
<ScrollLink
to="home"
spy={true}
smooth={true}
offset={-50}
duration={800}
onClick={() => scrollToComponent('home')}
>
Home
</ScrollLink>
</li>
<li>
<ScrollLink
to="services"
spy={true}
smooth={true}
offset={-50}
duration={800}
onClick={() => scrollToComponent('services')}
>
Services
</ScrollLink>
</li>
<li>
<ScrollLink
to="staff"
spy={true}
smooth={true}
offset={-50}
duration={800}
onClick={() => scrollToComponent('staff')}
>
Staff
</ScrollLink>
</li>
<li>
<ScrollLink
to="gallery"
spy={true}
smooth={true}
offset={-50}
duration={800}
onClick={() => scrollToComponent('gallery')}
>
Gallery
</ScrollLink>
</li>
<li>
<ScrollLink
to="AboutUs"
spy={true}
smooth={true}
offset={-50}
duration={800}
onClick={() => scrollToComponent('AboutUs')}
>
About
</ScrollLink>
</li>
<li>
<ScrollLink
to="contact"
spy={true}
smooth={true}
offset={-50}
duration={800}
onClick={() => scrollToComponent('contact')}
>
Contact
</ScrollLink>
</li>
</ul>
</nav>
<Element name="home">
      <Home />
    </Element>

    <Element name="services">
      <Services />
    </Element>

    <Element name="staff">
      <Staff />
    </Element>

    <Element name="gallery">
      <Gallery />
    </Element>

    <Element name="AboutUs">
      <AboutUs />
    </Element>

    <Element name="contact">
      <Contact />
    </Element>
  </div>
</Router>
);
}

export default App;
