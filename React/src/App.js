import './App.css';
import Counter from './Counter.js';
import BrokenCounter from './BrokenCounter';

import HandleClick from './HandleClick';
import HandleMouseOver from './HandleMouseOver';
import ShowImage from './ShowImage';
import LoadDataFromJson from './loadDataFromJson.js';
import UploadFile from './uploadFile.js';
import ChangeStyle from './ChangeStyle';

const App = () => {
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

export default App;
