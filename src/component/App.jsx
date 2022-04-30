import React from 'react';
import Header from "./Header";
import Contact from './Contact';
import Footer from './Footer';
import Intro from './Intro';
import Project from './Project';
import detail from "../detail";
function App() {
    return(
        <div>
            <Header />
            <Intro />
            <Project 
                name={detail[0].name}
                 link={detail[0].gitURL}
                img={detail[0].imgURL}
                about={detail[0].about}
            />
            
            
        
            <Contact />
            <Footer />
        </div>
    );
}
   
    export default App;