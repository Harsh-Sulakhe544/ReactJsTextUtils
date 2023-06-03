// rfc is emmet used for react component 
import React,{useState} from 'react'
// we have built word counter ==> like ==> https://wordcounter.net/
export default function TextForm(props) {
// arrow function
const handleUpClick =() => {
    // console.log("upperCase was clicked " + text)  , use this to see the extra text what we have written
    let newText=text.toUpperCase();
    // setText("you have clicked on handleUpClick")
    setText(newText)
    props.showAlert("Converted to UpperCase" , "success")
    
}
// TO CONVERT TO LOWER-CASE ==> lower-case
const handleLowClick =() => {
    // console.log("upperCase was clicked " + text)  , use this to see the extra text what we have written
    let newText=text.toLowerCase()
    // setText("you have clicked on handleUpClick")
    setText(newText)
    props.showAlert("Converted to LowerCase" , "success")
}

// TO delete the text 
const handleClearClick =() => {
    let newText="";
    setText(newText)    
    props.showAlert("Text Cleared" , "success")  // i want to give a alert when i change the mode 

}

const handleOnChange =(event) => {
    // console.log("on change")
    // console.log(event) // it is a sytheticBaseEvent

    // with the help of below statement we can give input in the text-area , eachtime i type a single-letter , then  handleOnChange is run,  
    setText(event.target.value)
}
// i want the user to enter a text and then Computer Speaks 
const speak = () => {
    props.showAlert("The Computer Wants to Speak" , "success")  // i want to give a alert when i change the mode 
    
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
}

// i want to coy something and store it in clipboard
const handleCopy=()=>{
    // console.log("i am copying ")
    
    /* let text=document.getElementById('myBox')
    text.select(); ==> 1 */
    // text.setSelectionRange(0,99999)  ==> u can also set the range;
    
    navigator.clipboard.writeText(text); // copying to clip-board => check windows+V (text.value ==> if i use text.select()a nd all below things )
    // document.getSelection().removeAllRanges() // ==> 2   ,  i want not to highlight-text if i copy the things  ==> i already have navigator  
    props.showAlert("Copied to Clipboard" , "success")  // i want to give a alert when i change the mode 
}

// i want to remove Extra-spaces :
const handleExtraSpaces = () => {
    let newText=text.split(/[ ]+/);  // regex-->javascripts  , this is removes all-white-spaces are removed and then in to a single array 
    setText(newText.join(" ")); // and finally leave it with the single space
    props.showAlert("Extra-Spaces has been Removed" , "success")  // i want to give a alert when i change the mode 

}
// Declare a new state variable, which we'll call "text" : and setText is a function , so that wherever we use text varibale , there we can update text using setText , update automatically
const [text, setText] = useState("");
// text="harshi";    // ==> u caannot use like this directly to change state 

// setText("new text");  ===>  proper way to change state 

  return (
    <> 
        <div className="container"   style= {{color: props.mode === 'dark' ? 'white' : '#042743'}}> 
            {/* the below is js code {js} , onChange is a event ,we are listening with the help of handeOnChange(event) , event object is freely(default-paramter) used  , but not shown , mb-4==>margin/bottom */}
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3  my-3">
            {/* the whole-line below has a value=text{text is a state variable} , which is value="text"  , so if user enters some letter say X , then value of whole-line changes to value = value+X  , { {}==> cuz object in js }*/}
                <textarea className="form-control"  value={text}  onChange={handleOnChange}  style= {{backgroundColor: props.mode=== 'dark' ? '#13466e' : 'white' , color: props.mode=== 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                {/* this will change just the backgroundColor , but i want to change text-color also */}
            </div>
            {/* when there is no text in the text-area , i want to disable the buttons */}
            <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>convert it to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleLowClick}>convert it to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleCopy}>Copy</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleExtraSpaces}>Remove Extra-Spaces</button>
            <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
     
            
        </div>
        {/* to create a section below the box  */}
        <div className="continer  my-3"   style = {{color:props.mode=== 'dark' ? 'white' : '#042743'}}>
            <h1>Your Text Summary </h1>
            {/* to print how many number of text-characters are present / typed in text-are ==> use {text.length} , 
            use {text.split(" ") ==> to print the same-words-below also  , use {text.split(" ").length ==> to get number of words in text-area}} , 
            u can GOOGLE : time to read-one-word : 1/125==0.008 , so i  need to calculate time also  , \s+ => white-space-moreThan-1 */}
            <p> <b> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words , {text.length} characters </b> </p>
            <p> <b>  {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read </b> </p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Nothing To preview"}</p>
        </div>
    </>  
  )
}