import React from 'react';
import "./resultsAmount.scss";

function ResultsAmount({amount}) {
    return (
        <div className="resultsAmount">
            <p className="resultsAmount__data">
                Liczba wyników: {amount}
            </p>
        </div>
    );
}

export default ResultsAmount;
