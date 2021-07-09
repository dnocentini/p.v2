import React from 'react';
import { Container, Grid } from '@material-ui/core';

import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';

import './App.css';



function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3} style={{backgroundColor: 'blue'}}>
          <Profile />
        </Grid>
        <Grid item xs style={{backgroundColor: 'red'}}>
          <Header />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
