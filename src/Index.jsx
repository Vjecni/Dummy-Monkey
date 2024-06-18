// src/App.js
import React, { useState } from 'react';
import { transliterate } from './transliterate';

function Index() {
  const [cyrillicText, setCyrillicText] = useState('');
  const [latinText, setLatinText] = useState('');

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setCyrillicText(inputText);
    setLatinText(transliterate(inputText));
  };

  return (
    <section className="container">
        <div className="content">
            <div className="title">
                <h1>Welcome to this very simple cyrilic to Latin translator</h1>
            </div>
            <div className="content-flex">
                <div className="textare-plh">
                    <textarea
                        value={cyrillicText}
                        onChange={handleInputChange}
                        placeholder="Enter Cyrillic text here"
                    />
                </div>
                <div className="textare-plh">
                    <textarea
                        value={latinText}
                        readOnly
                        placeholder="Latin translation will appear here"
                    />
                </div>
            </div>
        </div>
    </section>
  );
}

export default Index;
