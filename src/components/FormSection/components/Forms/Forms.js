import "./forms.scss";
import React from 'react';
import Select from 'react-select';

function Forms({searchConfig, setSearchConfig}) {

  const sortOptions = [
    { value: 'all', label: 'Wszystkie' },
    { value: 'price', label: 'Cena' },
    { value: 'capacity', label: 'Pojemność' },
    { value: 'popularity', label: 'Popularność' }
  ];

  const functionsOptions = [
    { value: 'all', label: 'Wszystkie' },
    { value: 'Drzwi AddWash', label: 'Drzwi AddWash' },
    { value: 'Panel AI Control', label: 'Panel AI Control' },
    { value: 'Silnik inwerterowy', label: 'Silnik inwerterowy' },
    { value: 'Wyświetlacz Elektroniczny', label: 'Wyświetlacz Elektroniczny' }
  ];

  const energyClassOptions = [
    { value: 'all', label: 'Wszystkie' },
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
    { value: 'D', label: 'D' },
    { value: 'E', label: 'E' },
    { value: 'F', label: 'F' }
  ];

  const capacityOptions = [
    { value: '0', label: 'Wszystkie' },
    { value: '7', label: '7kg' },
    { value: '8', label: '8kg' },
    { value: '9', label: '9kg' },
    { value: '10', label: '10kg' },
    { value: '11', label: '11kg' },
    { value: '12', label: '12kg' },
    { value: '13', label: '13kg' }
  ];

  function changeSearchConfig(value, searchType) {
    let _searchConfig = {...searchConfig};
    _searchConfig[searchType] = value;
    setSearchConfig(_searchConfig);
  }

  return (
    <section className="forms">
      <div className="forms__container">
        <p className="forms__label">Sortuj po:</p>
        <Select
          name="sortBy"
          className="forms__select"
          value={sortOptions.find(option => option.value === searchConfig.formSortBy)}
          options={sortOptions}
          onChange={(selectedOption) => changeSearchConfig(selectedOption.value, 'formSortBy')}
        />
      </div>

      <div className="forms__container">
        <p className="forms__label">Funkcje:</p>
        <Select
          name="functions"
          className="forms__select"
          value={functionsOptions.find(option => option.value === searchConfig.functions)}
          options={functionsOptions}
          onChange={(selectedOption) => changeSearchConfig(selectedOption.value, 'functions')}
        />
      </div>

      <div className="forms__container">
        <p className="forms__label">Klasa energetyczna:</p>
        <Select
          name="cars"
          className="forms__select"
          value={energyClassOptions.find(option => option.value === searchConfig.energyClass)}
          options={energyClassOptions}
          onChange={(selectedOption) => changeSearchConfig(selectedOption.value, 'energyClass')}
        />
      </div>

      <div className="forms__container">
        <p className="forms__label">Pojemność:</p>
        <Select
          name="capacity"
          className="forms__select"
          value={capacityOptions.find(option => option.value === searchConfig.capacity)}
          options={capacityOptions}
          onChange={(selectedOption) => changeSearchConfig(selectedOption.value, 'capacity')}
        />
      </div>
    </section>
  );
}

export default Forms;