import React, { useState } from "react";
import "./style.css";
import Main from "./Main";
import Header from "./Header";

function WordCounter() {
    const [inputText, setInputText] = useState("");
    console.log(inputText);
    const handleInputChange = (event) => {
        const word = event.target.value;
        setInputText(word);
    };

    const countCharacters = () => {
        return inputText.length;
    };

    const countWords = () => {
        return inputText
            .trim()
            .split(/\s+/)
            .filter((letter) => letter !== "").length;
    };

    const countParagraphs = () => {
        return inputText
            .trim()
            .split(/\n+/)
            .filter((paragraph) => paragraph.trim() !== "").length;
    };

    const convertToUppercase = () => {
        setInputText(inputText.toUpperCase());
    };
    const convertToLowercase = () => {
        setInputText(inputText.toLowerCase());
    };
    return (
        <div>
            <Header />
            <Main
                handleInputChange={handleInputChange}
                countCharacters={countCharacters}
                inputText={inputText}
                countWords={countWords}
                countParagraphs={countParagraphs}
                convertToUppercase={convertToUppercase}
                convertToLowercase={convertToLowercase}
            />
        </div>
    );
}

export default WordCounter;
