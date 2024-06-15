import React from 'react'

export default function About(props) {   

  return (
    <div className='container'>
        <h2 className='mx-1 my-3'>{props.head}</h2>
        <div className="card text-center mb-3" style={props.mystyle}>
            <div className="card-body">
                <p className="card-text">TextUtils is a versatile web application designed to perform various text manipulation tasks on user-provided strings. With its user-friendly interface, TextUtils offers a range of utilities to efficiently transform and process text.</p>
            </div>
        </div>

        <div className="card text-right mb-3" style={props.mystyle}>
            <div className="card-body">
                <h3>Key Features</h3>
                <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center" >
                    <div className="col" >
                        <div className="card" style={props.mystyle}>
                            <div className="card-body">
                                <h5 className="card-title">Uppercase Conversion</h5>
                                <p className="card-text">Converts all characters in the input text to uppercase. <br/> Example: "hello world" - "HELLO WORLD"</p>
                            </div>
                        </div>
                    </div> 

                    <div className="col">
                        <div className="card" style={props.mystyle}>
                            <div className="card-body">
                                <h5 className="card-title">Lowercase Conversion</h5>
                                <p className="card-text">Converts all characters in the input text to lowercase. <br/> Example: "HELLO WORLD" - "hello world"</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={props.mystyle}>
                            <div className="card-body">
                                <h5 className="card-title">Title Case Conversion</h5>
                                <p className="card-text">Converts the first character of each word to uppercase and the rest to lowercase. <br/> Example: "hello world" - "Hello World"</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={props.mystyle}>
                            <div className="card-body">
                                <h5 className="card-title">Clear Text</h5>
                                <p className="card-text">Clears the input text, leaving an empty text area. Useful for quickly removing unwanted text.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={props.mystyle}>
                            <div className="card-body">
                                <h5 className="card-title">Character Count</h5>
                                <p className="card-text">Counts the number of characters in the input text. Often displayed dynamically as the user types.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={props.mystyle}>
                            <div className="card-body">
                                <h5 className="card-title">Word Count</h5>
                                <p className="card-text">Counts the words in the input text, helping gauge text length</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={props.mystyle}>
                            <div className="card-body">
                                <h5 className="card-title">Rempove All White Spaces</h5>
                                <p className="card-text">Removes all white spaces from the input text. <br/> Example: "hello   world" - "hello world"</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={props.mystyle}>
                            <div className="card-body">
                                <h5 className="card-title">Text Reversal</h5>
                                <p className="card-text">Reverses the entire string. <br/> Example: "hello world" - "dlrow olleh"</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={props.mystyle}>
                            <div className="card-body">
                                <h5 className="card-title">Character Case Toggle</h5>
                                <p className="card-text">Toggles the case of each character in the string. <br/> Example: "Hello World" - "hELLO wORLD"</p>
                            </div>
                        </div>
                    </div>
                    <div className="col justify-center">
                        <div className="card" style={props.mystyle}>
                            <div className="card-body">
                                <h5 className="card-title">Copy Text</h5>
                                <p className="card-text">Provides a quick way to copy the processed text to the clipboard. Enhances usability by allowing easy pasting elsewhere.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p className='text-center'>©Copy Right 2024, Designed By : Mohammed Saif Ansari </p>
    </div>
  )
}
