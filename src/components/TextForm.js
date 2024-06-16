import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {


    const [text,setText] =  useState("")


    const handleUpClick = () =>{
        if(text.length>0)
            {
                setText(text.toUpperCase())
                props.showAlert("Converted to UpperCase","success")
            }
        
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const handleLoClick = (event)=>{
        if(text.length>0)
            {
                
                setText(text.toLowerCase())
                props.showAlert("Converted to LowerCase","success")
            }
    }

    const handleTClick = ()=>{
        if(text.length>0)
            {
                var s = "";
                if(text!==" ")
                    {
                        var str = text.split(" ")
                        for(var i=0;i<str.length;i++)
                            {
                                s += str[i].charAt(0).toUpperCase()+str[i].substring(1).toLowerCase()+" ";
                            }
                        setText(s)
                    }
                props.showAlert("Converted to Title Case","success")
            }

    }

    const handleClear = ()=>{
        if(text.length>0)
            {
                
                setText("")
                props.showAlert("Clear Text","success")
            }
    }

    const handleReverse = ()=>{
        if(text.length>0)
            {
                
                var s = "";
                for (var i=text.length-1;i>=0;i--)
                    {
                        s+= text[i];
                    }
                    setText(s)
                props.showAlert("Reversed succcessfully","success")
            }
    }

    const handleWhiteSpace = ()=>{
        if(text.length>0)
            {
                
                var s = text.split(" ")
                var str = "";
                for(var i=0;i<s.length;i++)
                    {
                        str+=s[i];
                    }
                    setText(str)
                props.showAlert("Removed All whiteSpacess Successfully","success")
            }
    }

    const handleToggle = ()=>{
        if(text.length>0)
            {
                var s = "";
                if(text!==" ")
                    {
                        var str = text.split(" ")
                        for(var i=0;i<str.length;i++)
                            {
                                s += str[i].charAt(0).toLowerCase()+str[i].substring(1).toUpperCase()+" ";
                            }
                        setText(s);
                    }
                props.showAlert("Toggle the Title Case","success");
            }
    }

    const handleCopy = ()=>{
        if(text.length>0)
            {

                navigator.clipboard.writeText(text);
                props.showAlert("Copied to Clipboard Successfully","success");
            }
    }

    const check = (s)=>{

        var wc = 0
        for(var i=0;i<s.length;i++)
            {
                if(s[i]!=="")
                    {
                        wc++;
                    }
            } 
        return wc;
    }

    const [ut,setUtterence] = useState(null);

    const handleSpeak = ()=>{
        if(text.length>0)
            {
                const sync = window.speechSynthesis;
                sync.speak(ut)
            }
    }

    useEffect(() => {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(text);  
        
        setUtterence(u);

        return () => {
          synth.cancel();
        };
      }, [text]);


      

  return (
    <>
     <div className='container'>
        <h2>{props.head}</h2>
        <div className="mb-2">
            <textarea className="form-control" onChange={handleOnChange} value={text} rows="8" placeholder='Enter text here'></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleTClick}>Convert to TitleCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleWhiteSpace}>Remove WhiteSpaces</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleReverse}>Reversal Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleToggle}>Case Toggle</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleSpeak}>Text to Speech</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>

        
        

    </div>
    <div className="container">
        <h3>Your Text Summary</h3>
        <p><b>{check(text.split(/\s+/))}</b> words and <b>{text.length}</b> characters</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter the text in the textbow to preview it"}</p>
    </div>
    </>
   
  )
}

TextForm.prototype = {
    head: PropTypes.string.isRequired
}