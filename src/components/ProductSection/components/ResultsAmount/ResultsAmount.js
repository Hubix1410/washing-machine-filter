import React from 'react';
import "./resultsAmount.scss";

function ResultsAmount({amount}) {
    return (
        <div className="results">
            <p className="results__data">
                Liczba wyników: {amount}
            </p>
        </div>
    );
}

export default ResultsAmount;
