import React, { useState } from 'react';
import NavNavigate from '../../components/frontdev/NavNavigate';
import Footer from '../../components/frontdev/Footer';

export default function TextCaseConverter() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [activeCase, setActiveCase] = useState('');

  const convertCase = (type) => {
    setActiveCase(type);
    
    if (!inputText.trim()) {
      setOutputText('');
      return;
    }

    switch (type) {
      case 'camel':
        setOutputText(toCamelCase(inputText));
        break;
      case 'pascal':
        setOutputText(toPascalCase(inputText));
        break;
      case 'snake':
        setOutputText(toSnakeCase(inputText));
        break;
      case 'kebab':
        setOutputText(toKebabCase(inputText));
        break;
      case 'upper':
        setOutputText(inputText.toUpperCase());
        break;
      case 'lower':
        setOutputText(inputText.toLowerCase());
        break;
      case 'capital':
        setOutputText(toCapitalCase(inputText));
        break;
      default:
        setOutputText(inputText);
    }
  };

  // Helper functions
  const toCamelCase = (str) => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => 
        index === 0 ? word.toLowerCase() : word.toUpperCase()
      )
      .replace(/\s+/g, '');
  };

  const toPascalCase = (str) => {
    return str
      .replace(/\w+/g, (word) => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .replace(/\s+/g, '');
  };

  const toSnakeCase = (str) => {
    return str
      .replace(/\W+/g, ' ')
      .split(/ |\B(?=[A-Z])/)
      .map(word => word.toLowerCase())
      .join('_');
  };

  const toKebabCase = (str) => {
    return str
      .replace(/\W+/g, ' ')
      .split(/ |\B(?=[A-Z])/)
      .map(word => word.toLowerCase())
      .join('-');
  };

  const toCapitalCase = (str) => {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const copyToClipboard = () => {
    if (!outputText) return;
    navigator.clipboard.writeText(outputText);
    // You can add a toast notification here if needed
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 transition-colors duration-300">
      <NavNavigate />
      <section className="max-w-4xl mx-auto px-5 pt-[15px] pb-10">
        <h1 className="text-2xl font-bold mb-6">Text Case Converter</h1>
        <p className="text-gray-600 mb-6">Ubah teks jadi camelCase, snake_case, PascalCase, atau UPPERCASE.</p>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-gray-200">
          <label htmlFor="input-text" className="block text-sm font-medium text-gray-700 mb-2">
            Input Text
          </label>
          <textarea
            id="input-text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 bg-white text-gray-800 focus:border-transparent"
            rows={4}
            placeholder="Masukkan teks di sini..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-gray-200">
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => convertCase('camel')}
              className={`px-3 py-2 rounded-md text-sm flex items-center ${activeCase === 'camel' ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              <i className="ri-text mr-2"></i> camelCase
            </button>
            <button
              onClick={() => convertCase('pascal')}
              className={`px-3 py-2 rounded-md text-sm flex items-center ${activeCase === 'pascal' ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              <i className="ri-text mr-2"></i> PascalCase
            </button>
            <button
              onClick={() => convertCase('snake')}
              className={`px-3 py-2 rounded-md text-sm flex items-center ${activeCase === 'snake' ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              <i className="ri-text mr-2"></i> snake_case
            </button>
            <button
              onClick={() => convertCase('kebab')}
              className={`px-3 py-2 rounded-md text-sm flex items-center ${activeCase === 'kebab' ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              <i className="ri-text mr-2"></i> kebab-case
            </button>
            <button
              onClick={() => convertCase('upper')}
              className={`px-3 py-2 rounded-md text-sm flex items-center ${activeCase === 'upper' ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              <i className="ri-arrow-up-line mr-2"></i> UPPERCASE
            </button>
            <button
              onClick={() => convertCase('lower')}
              className={`px-3 py-2 rounded-md text-sm flex items-center ${activeCase === 'lower' ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              <i className="ri-arrow-down-line mr-2"></i> lowercase
            </button>
            <button
              onClick={() => convertCase('capital')}
              className={`px-3 py-2 rounded-md text-sm flex items-center ${activeCase === 'capital' ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              <i className="ri-text mr-2"></i> Capital Case
            </button>
          </div>

          <label htmlFor="output-text" className="block text-sm font-medium text-gray-700 mb-2">
            Output Text
          </label>
          <div className="relative">
            <textarea
              id="output-text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 bg-white text-gray-800 focus:border-transparent"
              rows={4}
              readOnly
              value={outputText}
              placeholder="Hasil konversi akan muncul di sini..."
            />
            {outputText && (
              <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100"
                title="Copy to clipboard"
              >
                <i className="ri-clipboard-line"></i>
              </button>
            )}
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-600">
          <h3 className="font-bold text-gray-800 mb-2">About Text Cases:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-medium">camelCase</span>: firstWordLowerCaseThenCapitalized</li>
            <li><span className="font-medium">PascalCase</span>: EachWordCapitalizedNoSpaces</li>
            <li><span className="font-medium">snake_case</span>: words_separated_by_underscores</li>
            <li><span className="font-medium">kebab-case</span>: words-separated-by-hyphens</li>
            <li><span className="font-medium">Capital Case</span>: Each Word Capitalized</li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}