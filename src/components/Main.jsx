import React from "react";

function Main({
    handleInputChange,
    countCharacters,
    inputText,
    countWords,
    countParagraphs,
    convertToUppercase,
    convertToLowercase,
}) {
    return (
        <div className="container">
            <div className="render_data">
                <div className="card_render">
                    <h3>📝Word</h3>
                    <p>{countCharacters()}</p>
                </div>
                <div className="card_render">
                    <h3>✍Letter</h3>
                    <p>{countWords()}</p>
                </div>
                <div className="card_render">
                    <h3>📜Paragraph</h3>
                    <p>{countParagraphs()}</p>
                </div>
            </div>
            <div className="input_tex">
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Enter/Paste Your Text Here"
                    value={inputText}
                    onChange={handleInputChange}
                />
            </div>
            <div className="clicks">
                <button onClick={convertToUppercase}>Click to Uppercase</button>
                <button onClick={convertToLowercase}>Click to Lowercase</button>
            </div>
        </div>
    );
}

export default Main;
