import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <Header />
      <Content>
        <h2>Welcome to My Website</h2>
        <p>This is a simple React website.</p>
        <UserProfile 
          name="John Doe" 
          email="john.doe@example.com" 
          bio="Software Developer with a passion for learning new technologies." 
        />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
