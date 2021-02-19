//🌎🚀 Import React, State hook, and Container
import React, {useState} from 'react';
import Container from './components/Container';
import "./App.css";


//🌎🚀 I want this button to render a container component, which fetches APOD API rendering an IMG & 2 text containers: Caption, which includes the image {title,copyright, date} and Text {explanation}

//! Currently the 'stargaze' button renders the Container on first click & closes the Container on next click. This was not my original intent but works for now

export default function App() {
  const stargaze = () => {setClicked(!clicked);}
  const [clicked, setClicked] = useState(false);
  return (
    <div className="App">
      <p>
        Look through this telescope at the universe around you:
      </p>
      <button onClick={stargaze}>stargaze!</button>
      {
        clicked && <Container />
      }
    </div>
  );
}