// rfce ==> to get the snippet of Alert()
import React from 'react'

function Alert(props) {
    // to  make that success==> SUCCESS , U AN ALSO MAKE Success
    const capitalize = (word) => {
        const lower=word.toLowerCase();
        return lower.toUpperCase();  // SUCCESS 
        // return lower.charAt(0).toUpperCase() + lower.slice(1); // to make it Success  , slice(1) ==> leaving one(S , fetch all-remaining and display-it)   
    }
  return (
    // i want a proper height for alert meassage , so that other things shouldn't change ==> CLS PROPERTY (CUSTOM-LAYOUT-SHIFT)
    // we cam compare 2 things , if (props.alert==null , cuz of && ==> then further expression won't be evaluated  , 
    // this happens cuz all the JSX will be converted into javascriptCalls )
    <div style={{height:'50px'}}> 
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        {/* data-bs-dismiss ==> will bring that x mark to the extreme right-side , btn-close ==> will make button-right-side and also active  */}
      </div>}    
    </div>
  )
}

export default Alert