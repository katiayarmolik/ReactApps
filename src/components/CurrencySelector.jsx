import React from 'react';

const CurrencySelector = ({ selectedCurrency, setSelectedCurrency }) => {
    return (
        <div className="currency-selector">
            <label>Select currency:</label>
            <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
            >
                <option value="UAH">UAH (Ukrainian Hryvnia)</option>
                <option value="USD">USD (US Dollar)</option>
                <option value="EUR">EUR (Euro)</option>
                <option value="GBP">GBP (British Pound)</option>
            </select>
        </div>
    );
};

export default CurrencySelector;
