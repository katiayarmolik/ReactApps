import React from 'react';

const ExchangeRateDisplay = ({ selectedCurrency, rates }) => {
    return (
        <div className="exchange-rate">
            <h3>Exchange Rate</h3>
            <p>1 {selectedCurrency} = {rates[selectedCurrency]} base units</p>
        </div>
    );
};

export default ExchangeRateDisplay;
