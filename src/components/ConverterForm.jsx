import React, { useState } from 'react';

const ConverterForm = ({ rates, selectedCurrency }) => {
    const [amount, setAmount] = useState('');
    const [converted, setConverted] = useState('');

    const handleConvert = () => {
        const rate = rates[selectedCurrency];
        setConverted((amount * rate).toFixed(2));
    };

    return (
        <div className="converter-form">
            <label>Amount in {selectedCurrency}:</label>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
            />
            <button onClick={handleConvert}>Convert</button>
            {converted && (
                <p>Converted Amount: {converted} base units</p>
            )}
        </div>
    );
};

export default ConverterForm;
