/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Output from './Components/Output.js';
import './App.css';
import Select from './Components/Controls/Select';
import Text from './Components/Controls/Text';

function App() {
  const [params, setParams] = useState({
    paras: 2,
    format: 'html',
    text: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const textGenerator = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://baconipsum.com/api/?type=all-meat&paras=${params.paras}&start-with-lorem=1&format=${params.format}`
      );
      setParams(prev => ({ ...prev, text: response.data }));
    } catch (err) {
      console.error('Error fetching text:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    textGenerator();
  }, [params.paras, params.format]);

  const showHtml = format => {
    setParams(prev => ({ ...prev, format }));
  };

  const changeParamHandler = paras => {
    setParams(prev => ({ ...prev, paras }));
  };

  return (
    <div className='App'>
      <div className='container'>
        <header>
          <h1 className='text-center'>Text Generator</h1>
          <div className='headline-wrapper'>
            <p className='tagline'>Where Words Come to Life</p>
            <p className='subheadline'>
              <span className='highlight'>Instant</span> text generation. Create
              engaging content in <span className='highlight'>seconds</span>.
            </p>
          </div>
        </header>

        <main>
          <div className='form-inline'>
            <div className='form-group'>
              <label>Paragraphs:</label>
              <Text value={params.paras} onChange={changeParamHandler} />
            </div>
            <div className='form-group'>
              <label>Format:</label>
              <Select value={params.format} onChange={showHtml} />
            </div>
          </div>

          {isLoading ? (
            <div className='loading'>Generating text...</div>
          ) : (
            <Output value={params.text} />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
