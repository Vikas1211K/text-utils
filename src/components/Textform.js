import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
    
    const haldle = (event)=>{
        settext(event.target.value)
    }
    const ChangeTextUpper = ()=>{
        let newtext=text.toUpperCase()
        settext(newtext)
    }
    const ChangeTextLower = ()=>{
        let newtext=text.toLowerCase()
        settext(newtext)
    }
    const clear= ()=>{
        settext("")
    }

    const copy= ()=>{
        var writtentext= text;
        console.log(writtentext);
        // writtentext.select();
        navigator.clipboard.writeText(writtentext);
        
        // var writtentext= document.getElementById("my-box");
        // console.log(writtentext);
        // writtentext.select();
        // navigator.clipboard.writeText(writtentext.value);
    }

    const [text, settext] = useState("")

    let wcount=text.split(/\s+/).filter((element)=>{return element.length !== 0}).length
    let ccount=text.length
    
    
    
    return (
        <>
            <div className="my-2" style={{backgrounColor: props.mode ===  "light"?'white':'grey', color:props.mode === "dark"?"white":"black"}}>
                <h2 className='my-1'>{props.title} </h2>
                <textarea className="form-control " value={text} style={{backgroundColor: props.mode ===  "dark"?'#8f8f8f':'white',  color:props.mode === "dark"?"white":"black"}} onChange={haldle} rows="10" name="text" id="my-box"></textarea>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={ChangeTextUpper} >To upper case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={ChangeTextLower} >To lower case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={clear} >Clear</button>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={copy} >Copy text</button>
                
                {/* <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={changefont} >Change Font</button> */}
                
            </div>
            
            <div className='conainer my-3' style={{backgrounColor: props.mode ===  "light"?'white':'grey', color:props.mode === "dark"?"white":"black"}}>
                <p>your text have: {wcount} words and {ccount} characteres</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter ur text to preview it.."}</p>
            </div>
        </>
    )
}
 Textform.propTypes={
     title: PropTypes.string
 }
