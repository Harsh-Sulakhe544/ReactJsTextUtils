// use the emmet : rfc ==> to create a simple component
import React from 'react'
import PropTypes from 'prop-types'  // i want to import prop-types ==> emmet is impt 
import { Link } from 'react-router-dom' // ==> we dont want routing 

export default function Navbar(props) {
  return (
      // <div> hello i am a Navbar </div>  // to create a simple component  

    //    create Navbar and use it anytime i want  ==> template , but remember to use ==> {props.component-entity} , component-entity can be anything 
    // to make-navigation balck ==> use navbar-dark 
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
    <div className="container-fluid">
      <Link to="/"  className="navbar-brand">{props.title } </Link> 
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse  navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav  me-auto  mb-2 mb-lg-0">
          <li className="nav-item">
            {/* active- visible always , we dont-want to keep that active-always */}
            <Link to="/home" className="nav-link active" aria-current="page" >Home</Link>
          </li>
          {/* the belowcode was just for routing  */}
          <li className="nav-item">
            <Link to="/newversion" className="nav-link">{props.aboutText}</Link>
          </li>

        </ul>
        {/* cuz i want to make that letters of dark-mode visble , i used BotStrap-class ==> to make text-light , use js-ternary-operaor  */}
        <div className="d-flex"> 
        {/* The d-flex class is used to create a full-screen width flexbox container and convert the items into it. ==> that blue-square-thing at top-right ==> TO CREATE A PALLET(BOX) , 
        remember that onClick wants a function name , not functioncall()  , if u want to pass a function() , create a arrowFunction =>() */}
          <div className="bg-primary rounded mx-2" onClick={ () => {props.toggleMode('primary')} } style={{height:'30px' , width:'30px' , cursor: 'pointer'}}></div>
          <div className="bg-danger rounded mx-2" onClick={ () => {props.toggleMode('danger')} } style={{height:'30px' , width:'30px' , cursor: 'pointer'}}></div>
          <div className="bg-success rounded mx-2" onClick={ () => {props.toggleMode('success')} } style={{height:'30px' , width:'30px' , cursor: 'pointer'}}></div>
          <div className="bg-warning rounded mx-2" onClick={ () => {props.toggleMode('warning')} } style={{height:'30px' , width:'30px' , cursor: 'pointer'}}></div>
          <div className="bg-info rounded mx-2" onClick={ () => {props.toggleMode('info')} } style={{height:'30px' , width:'30px' , cursor: 'pointer'}}></div>
        </div>
        <div className={`form-check form-switch  text-${props.mode=== 'light' ? 'dark' : 'light'}`}> 
          <input className="form-check-input"  onClick={() => {props.toggleMode(null)} } type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
             <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
        </div>
      </div>
    </div>
    </nav>
  )
}


Navbar.propTypes={title: PropTypes.string.isRequired ,
                    aboutText: PropTypes.string.isRequired}  // pts==> emmet for PropTypes.string

// u can use default-props  , isRequired for default-props gives no error 
Navbar.defaultProps={
    title:"Set title here",
    aboutText:"NewVersion"
}                    