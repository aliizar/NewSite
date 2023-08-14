import './App.css';
import Navbar from './Components/Navbar';
import NewsMonkey from './Components/NewsMonkey';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';


const App =()=> {
  const [progres, setprogres] = useState(0)
  
  const Setprogress=(Newprogres)=>{
    setprogres(Newprogres)
}

  return (
    
    <>
    <Router>
    <LoadingBar
        color='#f11946'
        progress={progres}
        
      />
      <Navbar/>
      <Routes>
           
            <Route
              exact path="/NewsMonkey"
              element={
                
                <NewsMonkey setProgress={Setprogress} PageSize={8} country='in'category='General'/> 
              }
            />
             
            <Route
              exact path="/Business"
              element={
                <NewsMonkey setProgress={Setprogress} key={'Business'} PageSize={8} country="in" category='Business'/> 
              }
            />
            <Route
               path="/Entertainment"
              element={
                <NewsMonkey setProgress={Setprogress} PageSize={8} country="in" key={'Entertainment'} category='Entertainment'/> 
              }
            />
            <Route
              exact path="/General"
              element={
                <NewsMonkey setProgress={Setprogress} key={'General'} PageSize={8} country="in" category='General'/> 
              }
            />
            <Route
              exact path="/Health"
              element={
                <NewsMonkey setProgress={Setprogress} key={'Health'} PageSize={8} country="in" category='Health'/> 
              }
            />
            <Route
              exact path="/Science"
              element={
                <NewsMonkey setProgress={Setprogress} key={'Science'} PageSize={8} country="in" category='Science'/> 
              }
            />
            <Route
              exact path="/Sports"
              element={
                <NewsMonkey setProgress={Setprogress} key={'Sports'} PageSize={8} country="in" category='Sports'/> 
              }
            />
            <Route
              exact path="/Technology"
              element={
                <NewsMonkey setProgress={Setprogress} key={'Technology'} PageSize={8} country="in" category='Technology'/> 
              }
            />
            
      </Routes>
    </Router>
    </>
  );

}
export default App;
