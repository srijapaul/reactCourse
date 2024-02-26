import React,{useState} from 'react'

export default function TextArea(props) {
    const[text,setText]=useState("");
    const handleUpclick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleDownclick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase","success");
  }
  const handleClearclick=()=>{
    let newText="";
    setText(newText);
    props.showAlert("Text Cleared","success");
  }
  const handleCapclick=()=>{
    let newText=text.toLowerCase().split(' ').map((word)=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
    setText(newText);
    props.showAlert("Capitalized First Letters","success");
  }
  const handleInverseclick=()=>{
    let newText=text.split('').map(char=> char === char.toUpperCase()?char.toLowerCase():char.toUpperCase()).join('');
    setText(newText);
    props.showAlert("Inversed Text","success");
  }

  const handleRemoveExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert("Extra Spaces Removed","success");
  }


  const handleOnchange=(event)=>{
    setText(event.target.value);
}
    
  return (
    <>
    <h2> Try TextDose to manipulate your texts </h2>
    <div className="container"  >
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.Textarea}</label>
        <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleUpclick}>UPPERCASE</button>
      <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleDownclick}>lowercase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleClearclick}>Clear</button>
      <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleCapclick}>Capitalize First Letters </button>
      <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleInverseclick}>iNVERSE</button>
      <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
      
      
        </div><div className='container'>
            <h1>Your text summary</h1>
            <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        
            <p>
      {text.trim() === "" ? "nothing to read as of now" : `${0.008 *text.split(" ").filter((element) => element.trim().length !== 0).length} minutes to read`}
    </p>
           {/* <p> {0.008 * text.split(" ").length} minutes to read</p> */}

          </div></>
  )
}
