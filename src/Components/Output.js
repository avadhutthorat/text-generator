import React, { useState } from 'react';

const Output = ({ value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const textToCopy = Array.isArray(value) ? value.join('\n\n') : value;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className='output-container'>
      <div className='output-header'>
        <h3>Generated Text</h3>
        <button
          className={`copy-button ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
        >
          <span className='button-content'>
            {copied ? (
              <>
                <svg className='check-icon' viewBox='0 0 24 24'>
                  <path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z' />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className='copy-icon' viewBox='0 0 24 24'>
                  <path d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z' />
                </svg>
                Copy
              </>
            )}
          </span>
        </button>
      </div>
      <div className='output-content'>
        {Array.isArray(value) ? (
          value.map((paragraph, index) => (
            <p key={index} style={{ marginBottom: '1rem' }}>
              {paragraph}
            </p>
          ))
        ) : (
          <p>{value}</p>
        )}
      </div>
    </div>
  );
};

export default Output;
