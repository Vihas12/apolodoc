import React, { useState } from 'react';

interface ShowMoreInputsProps {
  buttonText: string;         // Initial button text, e.g., "Show More" or "+10 More"
  inputLabels: string[];      // Labels for checkboxes
}

const ShowMoreInputs: React.FC<ShowMoreInputsProps> = ({ buttonText, inputLabels }) => {
  const [showInputs, setShowInputs] = useState(false);

  return (
    <div>
      {showInputs && (
        <div className="space-y-4 mb-2">
          {inputLabels.map((label, idx) => (
            <label key={idx} className="block">
              <input type="checkbox" className="mr-2" /> {label}
            </label>
          ))}
        </div>
      )}
      <button
        className="text-cyan-800 font-semibold text-sm cursor-pointer"
        onClick={() => setShowInputs(!showInputs)}
      >
        {showInputs ? 'Show Less' : buttonText}
      </button>
    </div>
  );
};

export default ShowMoreInputs;
