import React from "react";
// THIS CODE IS GIVING ERROR : JSUT WASTE PAGE 
export default function NewVersion(props) {
  // u can create your own style using , a javascript-object  , javaScript uses camelCase for all CSS properties ,  using style={js-obj} , and alter it
  // go to console in chrome , type : $0.style.backgroundColor="red"  ==> whole body gets red , {$0 ==> specific-selected-element in chrome}
  // if u select class navbar from Elements option and type : $0.style.backgroundColor="red" only-color-navbar gets changed 

  // const [ myStyle , setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // })

  let myStyle={
    color:props.mode==='dark' ? 'white': '#042743',
    backgroundColor:props.mode==='dark' ? 'rgb(36 74 104)': 'white',
    border:'2px solid',
    borderColor:props.mode ==='dark' ? 'white': '#042743'
  }
  return (
    <div  className="container" >
      <h1 className="my-3" style= {{color:props.mode==='dark' ? 'white': '#042743'}}> About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong> Analyze your Text </strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong> Free to Use </strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text . TextUtils reports the number of words and characters .thus it is suitable for writing text with word/ character limit 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong> Browser Compatible </strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.

      </div>
    </div>
  </div>
</div>

    </div>
  );
}