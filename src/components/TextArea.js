import React,{useState} from 'react'


export default function TextArea(props) {
    const [text,setText]=useState('Enter text here...')
    
    // const [mode,setMode]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })

    // const toggleBg = () =>{
    //     if(mode.color==='black'){
    //         setMode({
    //             color:'white',
    //             backgroundColor:'black'
    //             })
    //             setBtn("Enable Light Mode")
    //             }
    //             else{
    //                 setMode({
    //                     color:'black',
    //                     backgroundColor:'white'
    //                     })
    //                     setBtn("Enable Dark Mode")
    //                     }
                        
    // }
    const handelUpCase =()=>{
        setText(text.toUpperCase())
        props.showAlert("Text converted to uppercase","success")
    }
    const handelLowCase =()=>{
        setText(text.toLowerCase())
        props.showAlert("Text converted to lowercase","success")
    }
    const handelCapCase =()=>{
        let newText = text.split(' ')
        newText = newText.map((element)=>{
            return element.charAt(0).toUpperCase()+element.slice(1).toLowerCase(
                )
                })
            setText(newText.join(' '))
            props.showAlert("Text converted to sentense case","success")
    }
    const handelClear =()=>{
        let newText = ""
            setText(newText)
            props.showAlert("Text cleared","success")
    }
    const handelCopy =()=>{
        navigator.clipboard.writeText(text); 
        props.showAlert("Text copied","success")
    }
    const handelSpace =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleSave = () => {
        const element = document.createElement("a");
        const file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "text.txt";
        document.body.appendChild(element);
        element.click();
        props.showAlert("Text saved to file", "success");
    };

    // Function to load text from a file
    const handleLoad = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setText(e.target.result);
        };
        reader.readAsText(file);
        props.showAlert("Text loaded from file", "success");
    };
    const handelChange =(event)=>{
        setText(event.target.value)
    }

    return (

        <div>
            
            <div className="container mb-3 my-3" /*style={mode}*/>
                <h1 className='my-4 mt-4'>{props.heading}</h1>
                <textarea className="form-control" id="myText" rows="8" value={text} onChange={handelChange}></textarea>
                <button disabled={text.length===0} className="btn btn-primary my-4 mx-2" id="btn" onClick={handelUpCase}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary my-4 mx-2" id="btn" onClick={handelLowCase}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary my-4 mx-2" id="btn" onClick={handelCapCase}>Convert to Sentencecase</button>
                <button disabled={text.length===0} className="btn btn-primary my-4 mx-2" id="btn" onClick={handelClear}>Clear text</button>
                <button disabled={text.length===0} className="btn btn-primary my-4 mx-2" id="btn" onClick={handelCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary my-4 mx-2" id="btn" onClick={handelSpace}>Remove Extra Space</button>
                {/* <button disabled={text.length===0} className="btn btn-primary my-4 mx-2" id="btn" onClick={toggleBg}>{btnText}</button> */}
                <br/>
                <button disabled={text.length === 0} className="btn btn-primary mt-0 my-4 mx-2" onClick={handleSave}>Save Text</button>
                <label className="btn btn-primary mt-0 my-4 mx-2">
                    Load Text
                    <input type="file" style={{ display: 'none' }} onChange={handleLoad} />
                </label>


            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0
            }).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length
            }).length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
            </div>

        </div>
    )
}
