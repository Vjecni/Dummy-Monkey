// src/App.js
import React, { useState } from 'react';
import { transliterate, reverseTransliterate } from './transliterate';

function Index() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [switcher, setSwitcher] = useState(false);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setInputText(inputText);
    if (switcher) {
      setOutputText(reverseTransliterate(inputText));
    } else {
      setOutputText(transliterate(inputText));
    }
  };

  const switchRoles = () => {
    setSwitcher(!switcher);
    setInputText('');
    setOutputText('');
  };

  return (
    <section className="container">
      <div className="content">
        <div className="title">
          <h1>
            Welcome to this very simple {switcher ? 'Latin to Cyrillic' : 'Cyrillic to Latin'} translator
          </h1>
        </div>
        <div className="content-flex">
          <div className="textare-plh">
            <textarea
              value={inputText}
              onChange={handleInputChange}
              placeholder={switcher ? "Enter Latin text here" : "Enter Cyrillic text here"}
            />
          </div>
          <div className="switch-pl" onClick={switchRoles}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 2L21 6M21 6L17 10M21 6H7.8C6.11984 6 5.27976 6 4.63803 6.32698C4.07354 6.6146 3.6146 7.07354 3.32698 7.63803C3 8.27976 3 9.11984 3 10.8V11M3 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V13M3 18L7 22M3 18L7 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="textare-plh">
            <textarea
              value={outputText}
              readOnly
              placeholder={switcher ? "Cyrillic translation will appear here" : "Latin translation will appear here"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
