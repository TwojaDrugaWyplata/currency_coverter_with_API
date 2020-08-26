import React from 'react';
import { ResultBox } from "./styled";

const Result = ({ result }) => {
    return result &&
        <ResultBox>
            Otrzymujesz {result}. Mądrze je zagospodaruj :)
        </ResultBox>;
}
export default Result;