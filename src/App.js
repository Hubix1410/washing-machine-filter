import React, { useState } from 'react';
import "./app.scss";
import { FormSection, Header, ProductSection } from './components';

function App() {

  const [searchConfig, setSearchConfig] = useState({
    functions: "all",
    energyClass: "all",
    sortByForm: "all",
    capacity: 0,
  })

  return (
    <div className="container_app">
      <Header/>
      <FormSection setSearchConfig={setSearchConfig} searchConfig={searchConfig}/>
      <ProductSection searchConfig={searchConfig}/>
    </div>
  );
}

export default App;
