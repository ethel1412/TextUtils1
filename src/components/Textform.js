import React,{useState} from 'react'

export default function Textform(props) {

    const Spaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const Copy = ()=>{
        var text = document.getElementById("textbox");
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied","success");

    }
    const Clear = ()=>{
        setText("");
    }
    const Loclick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }

    const Upclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const Change = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container' style = {{color : props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="textbox" onChange={Change} style={{backgroundColor : props.mode==='light'?'white':'grey' , color : props.mode==='dark'?'white':'black'}} value={text} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={Upclick} >Convert To Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={Loclick} >Convert To Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={Clear} >Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={Copy} >Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={Spaces} >Manage spaces</button>
    </div>
    <div className="container my-3" style = {{color : props.mode==='dark'?'white':'black'}} >
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.8 * text.split(" ").length} minutes to read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview here"}</p>
    </div>
    </>
  )
}
