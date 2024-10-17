import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; 

const Calculator = () => {
  const [input, setInput] = useState("0");
  const [isDarkMode, setIsDarkMode] = useState(true); 

  const handleInput = (value) => {
    if (input === "0" || input === "Error") {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  const clearInput = () => setInput("0"); 

  const clearLastEntry = () => {
    
    setInput(input.length > 1 ? input.slice(0, -1) : "0");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString()); 
    } catch (error) {
      setInput("Error"); 
    }
  };

  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-90 rounded-xl flex justify-center items-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
      <div className={`w-120 h-auto p-10 rounded-lg shadow-lg relative ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        
        <div className="absolute top-2 left-2 text-lg font-semibold text-gray-500 dark:text-gray-300">
          Calc
        </div>

        <button 
          className="absolute top-2 right-2 p-1 bg-gray-300 dark:bg-gray-600 rounded-full shadow"
          onClick={toggleTheme}
        >
          {isDarkMode ? <FaSun className="text-yellow-500"/> : <FaMoon className="text-blue-500"/>}
        </button>

        <div className={`text-right text-3xl p-5 mb-5 rounded-lg ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
          {input}
        </div>

        <div className="grid grid-cols-4 gap-4">
          <button className={`p-5 text-xl font-bold rounded-lg ${isDarkMode ? 'bg-gray-700 text-blue-600' : 'bg-gray-300 text-black'}`} onClick={clearInput}>AC</button>
          <button className={`p-5 text-xl font-bold rounded-lg ${isDarkMode ? 'bg-gray-700 text-blue-600' : 'bg-gray-300 text-black'}`} onClick={clearLastEntry}>C</button>
          <button className={`p-5 text-xl font-bold rounded-lg ${isDarkMode ? 'bg-gray-700 text-blue-600' : 'bg-gray-300 text-black'}`} onClick={() => handleInput('%')}>%</button>
          <button className="p-5 text-3xl font-bold bg-gray-700 text-pink-800 rounded-lg" onClick={() => handleInput('/')}>÷</button>

          <button className={`p-5 text-xl rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleInput('7')}>7</button>
          <button className={`p-5 text-xl rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleInput('8')}>8</button>
          <button className={`p-5 text-xl rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleInput('9')}>9</button>
          <button className="p-5 text-3xl font-bold bg-gray-700 text-pink-800 rounded-lg" onClick={() => handleInput('*')}>×</button>

          <button className={`p-5 text-xl rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleInput('4')}>4</button>
          <button className={`p-5 text-xl rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleInput('5')}>5</button>
          <button className={`p-5 text-xl rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleInput('6')}>6</button>
          <button className="p-5 text-3xl font-bold bg-gray-700 text-pink-800 rounded-lg" onClick={() => handleInput('-')}>−</button>

          <button className={`p-5 text-xl rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleInput('1')}>1</button>
          <button className={`p-5 text-xl rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleInput('2')}>2</button>
          <button className={`p-5 text-xl rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleInput('3')}>3</button>
          <button className="p-5 text-3xl font-bold bg-gray-700 text-pink-800 rounded-lg" onClick={() => handleInput('+')}>+</button>

          <button className={`col-span-2 p-5 text-xl rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleInput('0')}>0</button>
          <button className={`p-5 text-xl rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleInput('.')}>.</button>
          <button className="p-5 text-3xl font-bold bg-pink-700 text-white rounded-lg" onClick={calculateResult}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
