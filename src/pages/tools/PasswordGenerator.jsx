import React, { useState, useCallback } from 'react';
import NavNavigate from '../../components/frontdev/NavNavigate';
import Footer from '../../components/frontdev/Footer';

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    let charset = '';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (!charset) {
      alert('Please select at least one character type');
      return;
    }

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }

    setPassword(newPassword);
    setCopied(false);
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  const copyToClipboard = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 transition-colors duration-300">
      <NavNavigate />
      <section className="max-w-4xl mx-auto px-5 pt-[95px] pb-10">
        <h1 className="text-3xl font-bold mb-6 text-black">Password Generator</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="text-xl font-mono bg-gray-100 px-4 py-2 rounded flex-1 mr-4 truncate">
              {password || 'Your password will appear here...'}
            </div>
            <button
              onClick={copyToClipboard}
              disabled={!password}
              className={`px-4 py-2 rounded-md flex items-center ${password ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
            >
              <i className={`ri-${copied ? 'check-line' : 'clipboard-line'} mr-2`}></i>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <button
            onClick={generatePassword}
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors mb-6 flex items-center justify-center"
          >
            <i className="ri-refresh-line mr-2"></i> Generate Password
          </button>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label htmlFor="length" className="font-medium">Password Length: {length}</label>
              <input
                type="range"
                id="length"
                min="4"
                max="32"
                value={length}
                onChange={(e) => setLength(parseInt(e.target.value))}
                className="w-48"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="uppercase"
                checked={includeUppercase}
                onChange={() => setIncludeUppercase(!includeUppercase)}
                className="mr-2 h-5 w-5"
              />
              <label htmlFor="uppercase">Include Uppercase Letters (A-Z)</label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="lowercase"
                checked={includeLowercase}
                onChange={() => setIncludeLowercase(!includeLowercase)}
                className="mr-2 h-5 w-5"
              />
              <label htmlFor="lowercase">Include Lowercase Letters (a-z)</label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="numbers"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
                className="mr-2 h-5 w-5"
              />
              <label htmlFor="numbers">Include Numbers (0-9)</label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="symbols"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols(!includeSymbols)}
                className="mr-2 h-5 w-5"
              />
              <label htmlFor="symbols">Include Symbols (!@#$% etc.)</label>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-600">
          <h3 className="font-bold text-black mb-2">Password Tips:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use at least 12 characters for better security</li>
            <li>Combine different character types for stronger passwords</li>
            <li>Avoid using personal information or common words</li>
            <li>Don't reuse passwords across different accounts</li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}