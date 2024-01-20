import react,{useState} from 'react';
export default function TextForm(props){
    const [text,setText]=useState('')
    //setText("new text")

    const handleUpClick = () => {
        // console.log("upercase clicked")
        // setText("you have cliked handleUpClick")
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upercase","success")
        document.title="textUtils-uppercase"
        
    }
    const handleLowClick = () => {
    
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
        document.title="textUtils-lowercase"
        
    }
    const handleclear = () => {
    
        let newText=" ";
        setText(newText)
        props.showAlert("Msg cleared","success")
        
    }
    const handleSpace = () => {
    
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("remove extra space","success")
        
    }
    const handleCopy= () => {
        var text= document.getElementById("mytext")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("copied","success")
        
    }
    const handleOnChange = (event) => {
        console.log("on change")
        setText(event.target.value)
    }
    return(
        <>
    <div className="container">
    <h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea className="form-control" id="mytext" value={text} onChange={handleOnChange} rows="8"></textarea>
   </div>
   <button className="btn btn-primary" onClick={handleUpClick} style={{margin:'10px'}}> Convert into uppercase</button>
   <button className="btn btn-primary" onClick={handleLowClick} style={{margin:'10px'}}>Convert into lowercase</button>
   <button className="btn btn-primary" onClick={handleclear} style={{margin:'10px'}} >Clear</button>
   <button className="btn btn-primary" onClick={handleSpace} style={{margin:'10px'}} >Remove extra space</button>
   <button className="btn btn-primary" onClick={handleCopy} >Copy</button>
   </div>
   <div className='container my-2'>
    <h1>Your next summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
   </div>
        </>
    )
}