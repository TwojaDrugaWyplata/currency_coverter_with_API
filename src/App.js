import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import Form from "./Form";
import Result from "./Result";
import { useRatesData } from "./useRatesData";

const App = () => {
    const [result, setResult] = useState("");
    const ratesData = useRatesData();

    const calculateResult = (amount, sourceCurrency, targetCurrency) => {
        const plnRates = ratesData["data"]["rates"];
        const resultValue = amount * plnRates[targetCurrency] / plnRates[sourceCurrency];
        setResult(
            `${resultValue.toFixed(2)}${targetCurrency}`
        );
    }

    return (
        <>
            <Header />
            <Container>
                <Form calculateResult={calculateResult} ratesData={ratesData} />
                <Result result={result} />
            </Container>
            <Footer />
        </>
    );
}
export default App;