import React,{useState} from 'react'

export default function TextArea(props) {
    const[text,setText]=useState("");
    const handleUpclick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleDownclick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
  }
  const handleClearclick=()=>{
    let newText="";
    setText(newText);
  }
  const handleCapclick=()=>{
    let newText=text.toLowerCase().split(' ').map((word)=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
    setText(newText);
  }
  const handleInverseclick=()=>{
    let newText=text.split('').map(char=> char === char.toUpperCase()?char.toLowerCase():char.toUpperCase()).join('');
    setText(newText);
  }

  const handleRemoveExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(' '));
  }

  const handleOnchange=(event)=>{
    setText(event.target.value);
}
    
  return (
    <><div className="container"  >
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.Textarea}</label>
        <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button className='btn btn-primary mx-2' onClick={handleUpclick}>UPPERCASE</button>
      <button className='btn btn-primary mx-2' onClick={handleDownclick}>lowercase</button>
      <button className='btn btn-primary mx-2' onClick={handleClearclick}>Clear</button>
      <button className='btn btn-primary mx-2' onClick={handleCapclick}>Capitalize First Letters </button>
      <button className='btn btn-primary mx-2' onClick={handleInverseclick}>iNVERSE</button>
      <button className='btn btn-primary mx-2' onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
      
      
    </div><div className='container'>
        <h1>Your text summary</h1>
    <p> {text.split(" ").length} words and {text.length} characters</p>
       <p> {0.008 * text.split(" ").length} minutes to read</p>

      </div></>
  )
}
