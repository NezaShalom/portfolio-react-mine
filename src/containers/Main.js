import React, {Component} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
import {StyleProvider} from "../contexts/StyleContext";
import "./Main.css";
import Profile from "./profile/Profile";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWhite: false
    };
  }
  render() {
    return (
      <div>
        <StyleProvider
          value={{isWhite: this.state.isWhite, changeTheme: this.changeTheme}}
        >
          <Header />
          <Greeting /> 
          <Skills />
          {/* <StackProgress /> */}
          <Projects />
          
          {/* <WorkExperience />
           */}
          {/* <StartupProject />
          <Achievement />
          <Blogs />
          <Talks />
          <Twitter />
          <Podcast /> */}
          <Profile />
          <Footer /> 
          <Top />
        </StyleProvider>
      </div>
    );
  }
}
