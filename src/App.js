import React, { useState } from 'react';
import Header from './components/Header';
import CurrencySelector from './components/CurrencySelector';
import ConverterForm from './components/ConverterForm';
import ExchangeRateDisplay from './components/ExchangeRateDisplay';

const App = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('USD');
    const [rates, setRates] = useState({
        UAH: 41.9,
        USD: 1.0,
        EUR: 0.91,
        GBP: 0.78,
    });

    return (
        <div className="app">
            <Header />
            <main>
                <h1>Currency Exchange</h1>
                <CurrencySelector
                    selectedCurrency={selectedCurrency}
                    setSelectedCurrency={setSelectedCurrency}
                />
                <ExchangeRateDisplay
                    selectedCurrency={selectedCurrency}
                    rates={rates}
                />
                <ConverterForm
                    rates={rates}
                    selectedCurrency={selectedCurrency}
                />
            </main>
        </div>
    );
};

export default App;
