import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import Banner from "./components/banner";
import Acasa from "./components/acasa";
import Phone from './components/phone';
import Footer from './components/footer';
import Copyright from './components/copyright';
import Meniu from './components/meniu';
import MeniuV2 from './components/meniu-v2';

function App() {

  const [pageRender, setPageRender] = React.useState("Home")
  
  function setPage(args) {
      window.scrollTo(0 ,0)
      setPageRender(args)

  }


  console.log(pageRender)

  return (
    <>
    {pageRender === "Home" ?
    <div className="App">
      <Navbar />
      <Banner />
      <Acasa />
      <Meniu setPage = {setPage}/>
      <Phone />
      <Footer />
      <Copyright />
    </div>
    :
    <>
    <MeniuV2 setPage = {setPage} optionTitle={pageRender}/>
    <Phone />
    </>
    }
    </>

  )
}

export default App;
