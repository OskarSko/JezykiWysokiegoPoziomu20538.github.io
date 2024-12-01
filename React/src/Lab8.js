import React from "react";
import './App.css';
import Counter from './lab8Files/Counter.js';
import BrokenCounter from './lab8Files/BrokenCounter.js';

import HandleClick from './lab8Files/HandleClick.js';
import HandleMouseOver from './lab8Files/HandleMouseOver.js';
import ShowImage from './lab8Files/ShowImage.js';
import LoadDataFromJson from './lab8Files/loadDataFromJson.js';
import UploadFile from './lab8Files/uploadFile.js';
import ChangeStyle from './lab8Files/ChangeStyle.js';

function Lab8(){
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Lab 8 - React</h1>

            <div style={{ marginBottom: '50px' }}>
                <h2>Prawidłowy licznik</h2>
                <Counter />
            </div>
            <div style={{ marginBottom: '50px' }}>
                <h2>Nieprawidłowy licznik</h2>
                <BrokenCounter />
            </div>

            <div style={{ marginBottom: '50px' }}>
                <h2>Obsługa kliknięcia</h2>
                <HandleClick />
            </div>
            <div style={{ marginBottom: '50px' }}>
                <h2>Obsługa najazdu myszką</h2>
                <HandleMouseOver />
            </div>
            <div style={{ marginBottom: '50px' }}>
                <h2>Pokaż obraz</h2>
                <ShowImage />
            </div>
            <div style={{ marginBottom: '50px' }}>
                <h2>Załaduj dane z JSON</h2>
                <LoadDataFromJson />
            </div>
            <div style={{ marginBottom: '50px' }}>
                <h2>Prześlij plik</h2>
                <UploadFile />
            </div>
            <div style={{ marginBottom: '50px' }}>
                <h2>Zmień styl</h2>
                <ChangeStyle />
            </div>
        </div>
    );
};
export default Lab8;