import React, { useState } from 'react';
import Clock from './Clock';
import {
    FormSheet,
    Fieldset,
    Legend,
    Label,
    LabelText,
    Input,
    Button,
    Text
} from "./styled";

const Form = ({ calculateResult, ratesData }) => {
    const [amount, setAmount] = useState("");
    const [sourceCurrency, setSourceCurrency] = useState("PLN");
    const [targetCurrency, setTargetCurrency] = useState("USD");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(+amount, sourceCurrency, targetCurrency);
    }
    const options = ratesData["data"]
        && Object.keys(ratesData["data"]["rates"]).map(plnRate =>
            <option key={plnRate}>{plnRate}</option>);


    return (
        <FormSheet onSubmit={onFormSubmit}>
            <Fieldset>
                <Legend>Przelicznik walut</Legend>
                <Clock />
                {ratesData["data"]
                    ? <>
                        <Label>
                            <LabelText>Kwota:</LabelText>
                            <Input
                                required
                                type="number"
                                step="0.01"
                                min="1"
                                max="999999"
                                value={amount}
                                onChange={({ target }) => setAmount(target.value)}
                            />
                        </Label>
                        <Label>
                            <LabelText>Posiadana waluta:</LabelText>
                            <Input
                                as="select"
                                value={sourceCurrency}
                                onChange={({ target }) => setSourceCurrency(target.value)}
                            >
                                {options}
                            </Input>
                        </Label>
                        <Label>
                            <LabelText>Oczekiwana waluta:</LabelText>
                            <Input
                                as="select"
                                value={targetCurrency}
                                onChange={({ target }) => setTargetCurrency(target.value)}
                            >
                                {options}
                            </Input>
                        </Label>
                        <Button>Wymień</Button>
                        <Text>
                            Kursy walut pochodzą z Europejskiego Banku Centralnego.<br />
                            Aktualne na dzień: {ratesData["data"]["date"]}
                        </Text>
                    </>
                    : ratesData === "error"
                        ? <Text>
                            Wystąpił błąd. Sprawdź połączenie internetowe,
                            a jeśli to nie pomoże - spróbuj ponownie później.
                        </Text>
                        : <Text>
                            Trwa pobieranie danych z Europejskiego Banku Centralnego.
                        </Text>
                }
            </Fieldset>
        </FormSheet>
    )
}
export default Form;