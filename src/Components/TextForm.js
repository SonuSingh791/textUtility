import React, { useState } from "react";
// import PropTypes from 'prop-types'

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    // console.log("UpperCase was clicked");
    // setText("UpperCase was clicked")
    setText(text.toUpperCase());
    props.showAlert("Text has been converted into Uppercase","success")
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Text has been converted into Lowercase","success")
  };
  const handleCopyTextlick = () => {
    const copyText = document.getElementById("text-area");
    // copyText.select();
    // let cText=copyText.value;
    // console.log(cText);
    
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Text copied","success")
    
  };
  const handleRemoveSpacesClick = () => {
    setText(text.split(/[ ]+/).join(" "));
    props.showAlert("Spaces Removed","success")
    
  };
  
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared","success")
  };

  const lengthOfWord = () => {
    if (text === "") return 0;
    else {
      return (text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length)
    }
  };
  const handleOnChange = (e) => {
    // console.log("handleOnChange")
    // console.log(e.target.value);
    setText(e.target.value);
  };

  const handleSearchClick=()=>{
    const text = document.getElementById("search-btn").innerHTML;
    
  }

  return (
    <>
      <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="text-area"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{color:props.mode==="light"?"black":"white",backgroundColor:props.mode==="dark"?"#000b17":"white"}}
            placeholder="Enter your text here."
          ></textarea>
        </div>
        <button disabled={lengthOfWord()===0} className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={lengthOfWord()===0} className="btn btn-primary my-1 mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={lengthOfWord()===0} className="btn btn-primary my-1 mx-1" onClick={handleRemoveSpacesClick}>
          Remove Spaces
        </button>
        <button disabled={lengthOfWord()===0} className="btn btn-primary my-1 mx-1" onClick={handleCopyTextlick}>
          Copy Text
        </button>
        <button disabled={lengthOfWord()===0} className="btn btn-primary my-1 mx-1" onClick={handleClearClick}>
          Clear
        </button>
        <button disabled={lengthOfWord()===0} id="search-btn" className="btn btn-primary my-1 mx-1" onClick={handleSearchClick}>
          Search
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text summary</h2>
        <p>
          {lengthOfWord()} Words {text.length} Characters
        </p>
        <p>Takes {0.008 * lengthOfWord()} minutes to read</p>
      </div>
    </>
  );
}
