import React from 'react';
import "./formSection.scss";
import { Forms, Search } from './components';

function FormSection({searchConfig, setSearchConfig}){
    return(
        <section>
            <Search/>
            <Forms setSearchConfig={setSearchConfig} searchConfig={searchConfig}/>
        </section>
    )
}

export default FormSection;