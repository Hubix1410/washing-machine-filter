import React from 'react';
import "./forms.scss";


function Forms({searchConfig, setSearchConfig}){

    function changeSearchConfig(event, searchType){
        let _searchConfig = {...searchConfig};
        _searchConfig[searchType] = event.target.value
        setSearchConfig(_searchConfig);
    }

    return(
        <section className="forms">
            <div className="forms__container">
                <p className="forms__label">
                    Sortuj po:
                </p>
                <select name="sortBy"  className="forms__select" value={searchConfig.sortByForm} onChange={(value)=>changeSearchConfig(value, "sortByForm")}>
                    <option className="forms__option" value="all">Wszystkie</option>
                    <option className="forms__option" value="price">Cena</option>
                    <option className="forms__option" value="capacity">Pojemność</option>
                    <option className="forms__option" value="popularity">Popularność</option>
                </select>
            </div>

            <div className="forms__container">
                <p className="forms__label">
                    Funkcje:
                </p>
                <select name="functions" className="forms__select" value={searchConfig.functions} onChange={(value)=>changeSearchConfig(value, "functions")}>
                    <option className="forms__option" value="all">Wszystkie</option>
                    <option className="forms__option" value="all">Wszystkie</option>
                    <option className="forms__option" value="all">Wszystkie</option>
                    <option className="forms__option" value="all">Wszystkie</option>
                </select>
            </div>

            <div className="forms__container">
                <p className="forms__label">
                    Klasa energetyczna:
                </p>
                <select name="cars" className="forms__select" value={searchConfig.energyClass} onChange={(value)=>changeSearchConfig(value, "energyClass")}>
                    <option className="forms__option" value="all">Wszystkie</option>
                    <option className="forms__option" value="A">A</option>
                    <option className="forms__option" value="B">B</option>
                    <option className="forms__option" value="C">C</option>
                    <option className="forms__option" value="D">D</option>
                    <option className="forms__option" value="E">E</option>
                    <option className="forms__option" value="F">F</option>
                </select>
            </div>

            <div className="forms__container">
                <p className="forms__label">
                    Pojemność:
                </p>
                <select name="capacity" className="forms__select" value={searchConfig.capacity} onChange={(value)=>changeSearchConfig(value, "capacity")}>
                    <option className="forms__option" value="0">Wszystkie</option>
                    <option className="forms__option" value="7">7kg</option>
                    <option className="forms__option" value="8">8kg</option>
                    <option className="forms__option" value="9">9kg</option>
                    <option className="forms__option" value="10">10kg</option>
                    <option className="forms__option" value="11">11kg</option>
                    <option className="forms__option" value="12">12kg</option>
                    <option className="forms__option" value="13">13kg</option>
                </select>
            </div>
        </section>
    )
}

export default Forms;