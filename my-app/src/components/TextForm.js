import React,{useState} from 'react'

function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","Sucess");

    }

    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","Sucess");

    }

    const handleClearClick=()=>{
        let newText='';
        setText(newText)

    }

    const handleCopy=()=>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces=()=>{
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "))

    }
    
    
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value)
    }
    
    
    const [text,setText]=useState("Enter Text here");



return (
<> 
<div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{background:props.mode==='light'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  </div>
  <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2> Your Text Summery</h2>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.008 *  text.split(" ").length}Minutes to Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here"}</p> 
  </div>
  </>
  )
}

export default TextForm