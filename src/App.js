// google : https://www.favicon-generator.org/  ==> to generate favicon to replace react 

// make sure that u are in the path : PS D:\programminglanguages\WebDevelopmentsSeries\NodeJSAndFrontEndReactJS\ReactJS\textutils> , then 
// run the code in terminal by using : npm start 
import './App.css';
import Navbar from './Components/Navbar'; // i want to add a component => Navbar
import TextForm from './Components/TextForm';
import NewVersion from './Components/NewVersion';
import React, { useState } from 'react'
import Alert from './Components/Alert';

import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

// imr ==>  emmet to use react for class based componnent 


// below text gets bolder , but even then <b></b> aklso treated as string and printed
// let name = "<b>harshi</b>"; // this is just  js , we can use it below by using {name} , whatevr inside is {js} ==> js 

function App() {
  const [mode,setMode]=useState('light') // i want to change the mode of the nav-bar when i wish ==> use switches-bootstrap
  const [alert,setAlert] = useState(null) // initially alert is a object 

  const showAlert=(message , type)=>{ // here showAlert will show the status , so it should be different form the above initial-obj name
    // After 3 seconds , i want the Alert to go automatically ==> use setTimeOut()
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  // i want to add a list of colrs to successively change the colos when i cick on them , but only-color can give a response at a time , but ti want all colrs to give response 
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-info');
  }

  // cls is type of class it is : primary , seconsary , danger ==> css bootstrap classes
  const toggleMode=(cls)=>{
    removeBodyClasses() // so we need to remove the initial-classes
    // console.log(cls) // cls-primary => for pallet  , if u click on that-switch=>toggle-mode => cls==> synthetic-Base-Event  
    document.body.classList.add('bg-' + cls) // i want to add a list of colrs to successively change the colos when i cick on them , but only-color can give a response at a time  
    if(mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='#042743' // this is dark-blue , cuz i want some difference
      showAlert("Dark Mode has been Enabled" , "success")  // i want to give a alert when i change the mode 
      // document.title="TextUtils - Dark Mode" // we can change the title of the Page as we require

      // i can even change title after certain set of time ==> whenever equired , use setInterval()  ==> some-people do it for Money==>to install Apps
      // use both the commented functions below 
      // setInterval(() => {
      //   document.title="TextUtils -Amazing- Dark Mode" // we can change the title of the Page as we require
        
      // }, 2000);
      
      // setInterval(() => {
      //   document.title="INstall TextUtils now" // we can change the title of the Page as we require
        
      // }, 1400);
    }
    
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light Mode has been Enabled" , "success")  // i want to give a alert when i change the mode 
      // document.title="TextUtils - Light Mode" // we can change the title of the Page as we require
    }
    
  }
  //   the entire below code is called JSX (it is combo with javascript & html) , u are returning App only , (u cannot return anyother thing )
  //   the below <> and </> is just used to add code before jsx ==> jsx fragment ==> to return only 1 thing  , but i wan tto treturn multiple things
  //   u can return multiple commments using <> and </> ex : <Navbar> </Navbar> , that / is compulsory 
  
  //   let us say --> i want to change the title of Navbar ==> we need to pass props (properties) as TextUtils ==> heading is TextUtils
  // PROPS :  WE CAN REDEFINE VARIABLES INSIDE COMPONENTS AS WE WISH , AND USE IT ANY-TIME TO SAVE-THE TIME IN ANY-PROJECT , 
  // HERE Navbar is a component , title , aboutText =>props
  // u can pass 34-> title , but in console ==> errors , cuz title is a string , {title will display 34 on screen } 
    
  //   <Navbar/>  ==> iw will consider default-values of title and about-text  ==> DEFAULT-PROPS     
  //   <Navbar/> //  ==> if string.isRequired ==> then its compulsory to mention the title ==> { but , Navbar.defaultProps should be commented otherwise error in console , chrome ==> ERROR   

  // i want to use text-form  , use container class of bootstrap ==> then text-box in the center x axis*/}

  /* // ==> we can use this also , below TextForm  */


  // <NewVersion/>  ==> this is for ABOUT-PAGE , cuz i want a response to load only that center part while navbar and other things are fixed , 
  // so less data to spend , */
  return (
      <> 
        <BrowserRouter>
            <Navbar title="TextUtils" mode={mode} aboutText={"NewVersion"} toggleMode={toggleMode} />
              <Alert alert = {alert}/>            
            <div className="container my-3">
              
              <Routes> 
                <Route exact path='/newversion' element={<NewVersion mode={mode} />}></Route>
                <Route exact path='/' element={<TextForm showAlert={showAlert} heading=" Try TextUtils- Word Counter, Character Counter, Remove Extra Spaces" mode={mode}  />}
                ></Route>
              </Routes>
            </div>
        </BrowserRouter>
      </>
    );
}
export default App;
