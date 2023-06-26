import React from 'react';
import "./noResults.scss";

function NoResults() {
    return (
        <div className="noResults">
            <p className="noResults__data">
                Brak pralek o wskazanej konfiguracji
            </p>
        </div>
    );
}

export default NoResults;
