import React from 'react';

function ConsoleClearer() {
  const handleClearClick = () => {
    console.clear()
  }

  return (
    <div>
      <button className="consoleClearer bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded shadow" onClick={handleClearClick}>
        ~
      </button>
    </div>
  )
}

export default ConsoleClearer