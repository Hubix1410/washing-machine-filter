import React from 'react';
import "./specInfo.scss";

function SpecInfo({capacity, energyClass, functions, size}) {

    const energyClassLogo =`specInfo__energyIcon specInfo__energyIcon--${energyClass}`

    return (
        <div className="specInfo">
            <p className="specInfo__text">
                <span className="specInfo__capaticy">
                    Pojemność (kg):&nbsp;
                </span>
                    {capacity} kg
                <br/>
                <span className="specInfo__size">
                    Wymiary (GxSxW):&nbsp;
                </span>
                    {size} cm
                <br/>
                <span className="specInfo__functions">
                    Funkcje:&nbsp;
                </span>
                    {functions.toString().replace(/,/g, ", ")}
                <br/>
                <br/>
                <span className="specInfo__energy">
                    Klasa Energetyczna:&nbsp;
                </span>
                <div className={energyClassLogo}>
                    {energyClass}
                </div>
            </p>
        </div>
    );
}

export default SpecInfo;
