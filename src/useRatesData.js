
import { useState, useEffect } from "react";
import axios from 'axios';

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState("");

    useEffect(() => {
        axios.get("https://api.exchangeratesapi.io/latest?base=PLN")
            .then(response => setRatesData(response))
            .catch(() => setRatesData("error"))
    }, [])

    return ratesData;
}