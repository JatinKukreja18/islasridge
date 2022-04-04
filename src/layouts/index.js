import React from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";

const Layout = ({ location, isHomepage, children, navigation }) => {
  return (
    <TransitionProvider 
      location={location}
      mode="successive"
      enter={{
        opacity: 0,
        transform: "translateY(10px)",
        config: {
          duration: 300
        },
        onRest: () => {
          console.log("Hello, World!");
        }
      }}
      usual={{
        opacity: 1,transform: "translateY(0px)"
      }}
      leave={{
        opacity: 0,    
        transform: "translateY(5px)",    
        config: {
          duration: 300
        }
      }}
      >
        <Header isHomepage={isHomepage} navigation={navigation} />
        <main className="mainView">
          <TransitionViews>
              {children}
          </TransitionViews>
        </main>
        <Footer />
    </TransitionProvider>
  );
};

export default Layout;