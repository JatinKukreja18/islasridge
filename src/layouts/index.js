import React from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";

const Layout = ({ location, isHomepage, children, navigation }) => {
  return (
    <TransitionProvider location={location}>
        <Header isHomepage={isHomepage} navigation={navigation} />
    
        <TransitionViews>
            {children}
        </TransitionViews>
        <Footer />
    </TransitionProvider>
  );
};

export default Layout;