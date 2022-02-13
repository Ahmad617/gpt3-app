import './App.css';
import { Blog, Footer, Features, Header, Possibility, WhatGPT3 } from './containers';
import { Article, Brand, CTA, Feature, Navbar } from './components';

function App() {

  return (
    <div className="App">
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
