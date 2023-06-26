import React, { useState } from 'react';
import collect from 'collect.js';
import "./productSection.scss";
import { LoadAll, NoResults, ProductCard, ResultsAmount } from './components';

const data = {
    "models": [
    {
        "image":"https://images.samsung.com/is/image/samsung/pl-washer-ww90t986ashs6-ww90t986ash-s6-frontwhite-304036688?$1300_1038_PNG$",
        "name":"WW90T986ASH, Pralka QuickDrive™, 9 kg, biała",
        "size": "55 x 60 x 85",
        "capacity":9,
        "functions": ["Drzwi AddWash", "Panel AI Control", "Silnik inwerterowy"],
        "energyClass": "A",
        "price": 4819,
        "installments": 30,
        "popularity": 4
    },
    {
        "image":"https://images.samsung.com/is/image/samsung/p6pim/pl/dv90bb5245aws6/gallery/pl-dv5000b-dv90bb5245aws6-535483399?$1300_1038_PNG$",
        "name":"Bespoke AI™ DV90BB5245AW Suszarka OptimalDry 9 kg Biała",
        "size": "55 x 60 x 85",
        "capacity":9,
        "functions": ["Drzwi AddWash", "Panel AI Control", "Wyświetlacz Elektroniczny"],
        "energyClass": "A",
        "price": 3799,
        "installments": 30,
        "popularity": 6
    },
    {
        "image":"https://images.samsung.com/is/image/samsung/pl-dryer-dv90t7240bhs6-dv90t7240bh-s6-frontwhite-308536262?$1300_1038_PNG$",
        "name":"DV90T7240BH, Suszarka z technologią OptimalDry, 9 kg",
        "size": "55 x 60 x 85",
        "capacity":9,
        "functions": ["Drzwi AddWash", "Silnik inwerterowy", "Wyświetlacz Elektroniczny"],
        "energyClass": "A",
        "price": 3909,
        "installments": 30,
        "popularity": 3
    },
    {
        "image":"https://images.samsung.com/is/image/samsung/pl-combo-wd80t554dbes6-wd80t554dbe-s6-frontwhite-305212942?$1300_1038_PNG$",
        "name":"WD80T554DBE, Pralko-suszarka z technologią AirWash, 8/5 kg, biała",
        "size": "55 x 60 x 85",
        "capacity":10,
        "functions": ["Panel AI Control", "Silnik inwerterowy", "Wyświetlacz Elektroniczny"],
        "energyClass": "E",
        "price": 3399,
        "installments": 30,
        "popularity": 1
    },
    {
        "image":"https://images.samsung.com/is/image/samsung/pl-washer-ww8nk62e0rweo-ww8nk62e0rw-eo-frontwhite-310936641?$1300_1038_PNG$",
        "name":"WW8NK62E0RW, Pralka EcoBubble™ slim, 8kg, biała",
        "size": "55 x 60 x 85",
        "capacity":8,
        "functions": ["Drzwi AddWash", "Panel AI Control", "Silnik inwerterowy"],
        "energyClass": "C",
        "price": 2509,
        "installments": 30,
        "popularity": 5
    },
    {
        "image":"https://images.samsung.com/is/image/samsung/pl-washer-ww70t552daes6-ww70t552dae-s6-frontwhite-305212669?$1300_1038_PNG$",
        "name":"WW90T504DATAA, Pralka EcoBubble™, 7 kg, biała",
        "size": "55 x 60 x 85",
        "capacity":7,
        "functions": ["Drzwi AddWash", "Panel AI Control", "Wyświetlacz Elektroniczny"],
        "energyClass": "A",
        "price": 2039,
        "installments": 30,
        "popularity": 2
    },
    {
        "image":"https://images.samsung.com/is/image/samsung/p6pim/pl/wd8nk52e3aw-eo/gallery/pl-combo-wd8nk52e0awle-382914-wd8nk52e3aw-eo-530550477?$1300_1038_PNG$",
        "name":"WD8NK52E3AW, Pralko-suszarka Slim, 8 kg, biała",
        "size": "55 x 60 x 85",
        "capacity":11,
        "functions": ["Drzwi AddWash", "Silnik inwerterowy", "Wyświetlacz Elektroniczny"],
        "energyClass": "F",
        "price": 2229,
        "installments": 30,
        "popularity": 9
    },
    {
        "image":"https://images.samsung.com/is/image/samsung/p6pim/pl/wd8nk52e0aw-eo/gallery/pl-combo-wd8nk52e0awle-wd8nk52e0aw-eo-530550327?$1300_1038_PNG$",
        "name":"WD8NK52E0AW, Pralko-suszarka slim, 8/5 kg, biała",
        "size": "55 x 60 x 85",
        "capacity":11,
        "functions": ["Panel AI Control", "Silnik inwerterowy", "Wyświetlacz Elektroniczny"],
        "energyClass": "F",
        "price": 2669,
        "installments": 30,
        "popularity": 8
    },
    {
        "image":"https://images.samsung.com/is/image/samsung/p6pim/pl/ww90t4020ee-eo/gallery/pl-front-loading-washer-ww70t4020cheo-406307-ww90t4020ee-eo-530304856?$1300_1038_PNG$",
        "name":"WW90T4020EE, Pralka, Silnik Digital Inverter, 9 kg, biała",
        "size": "55 x 60 x 85",
        "capacity":7,
        "functions": ["Drzwi AddWash", "Panel AI Control", "Silnik inwerterowy"],
        "energyClass": "D",
        "price": 2059,
        "installments": 30,
        "popularity": 7
    },
    {
        "image":"https://images.samsung.com/is/image/samsung/p6pim/pl/ww90t504dat-s6/gallery/pl-front-loading-washer-ww85t504dae-ww90t504dat-s6-469754838?$1300_1038_PNG$",
        "name":"WW70A6S28AE, Pralka Slim QuickDrive™, 7 kg, biała",
        "size": "55 x 60 x 85",
        "capacity":7,
        "functions": ["Drzwi AddWash", "Panel AI Control", "Wyświetlacz Elektroniczny"],
        "energyClass": "D",
        "price": 2779,
        "installments": 30,
        "popularity": 11
    },
    {
        "image":"https://images.samsung.com/is/image/samsung/p6pim/pl/wd8nk52e0zx-eo/gallery/pl-wd5500k-wd8nk52e0zwle-wd8nk52e0zx-eo-530550356?$1300_1038_PNG$",
        "name":"WD8NK52E0ZX, Pralko-suszarka slim, 12 kg, inox",
        "size": "55 x 60 x 85",
        "capacity":12,
        "functions": ["Drzwi AddWash", "Silnik inwerterowy", "Wyświetlacz Elektroniczny"],
        "energyClass": "F",
        "price": 1539,
        "installments": 30,
        "popularity": 12
    },
    {
        "image":"https://images.samsung.com/is/image/samsung/p6pim/pl/wd8nk52e0aw-eo/gallery/pl-combo-wd8nk52e0awle-wd8nk52e0aw-eo-530550327?$1300_1038_PNG$",
        "name":"WD8NK52E0ZX, Pralko-suszarka slim, 8/5 kg, inox",
        "size": "55 x 60 x 85",
        "capacity":13,
        "functions": ["Drzwi AddWash", "Silnik inwerterowy", "Wyświetlacz Elektroniczny"],
        "energyClass": "F",
        "price": 1539,
        "installments": 30,
        "popularity": 10
    },
    {
        "image":"https://images.samsung.com/is/image/samsung/p6pim/pl/wd8nk52e0zx-eo/gallery/pl-wd5500k-wd8nk52e0zwle-wd8nk52e0zx-eo-530550356?$1300_1038_PNG$",
        "name":"WW70A6S28AY, Pralka Slim QuickDrive™, 7 kg, biała",
        "size": "55 x 60 x 85",
        "capacity":11,
        "functions": ["Silnik inwerterowy", "Wyświetlacz Elektroniczny"],
        "energyClass": "B",
        "price": 1200,
        "installments": 30,
        "popularity": 13
    }
]
}

function ProductSection({searchConfig}) {

    const [isAll, setIsAll] = useState(false)

    function fiilterWashingMashine(searchConfig){
        let filteredData = data.models;

        if(searchConfig.functions !== "all"){
            filteredData = filteredData.filter((value) =>{
                return value.functions.includes(searchConfig.functions);
            })
        }

        if(searchConfig.energyClass !== "all"){
            filteredData = filteredData.filter((value) =>{
                return value.energyClass === searchConfig.energyClass;
            })
        }

        if(parseInt(searchConfig.capacity) !== 0){
            filteredData = filteredData.filter((value) =>{
                return value.capacity === parseInt(searchConfig.capacity);
            })
        }

        if(searchConfig.sortByForm !== "all"){
            filteredData = collect(filteredData).sortBy(searchConfig.sortByForm);
            filteredData = filteredData.items
        }

        if(searchConfig.searchByName){
            filteredData = filteredData.filter((value) =>{
                return value.name.toLowerCase().includes(searchConfig.searchByName.toLowerCase())
            })
        }

        return filteredData;
    }

    let displayData = fiilterWashingMashine(searchConfig);
    const resultsAmount = displayData.length;

    if(isAll === false && resultsAmount > 6){
        displayData = displayData.slice(0,6);
    }

    return (
        <main className="prodSection">
            <ResultsAmount amount={resultsAmount}/>
            {
                displayData.length !== 0
                ?
                    displayData.map((element) =>{
                        return (
                        <ProductCard data={element} key={element.name}/>
                        )
                    })
                :
                    <NoResults/>
            }
            {
                displayData.length < 6
                ?
                    ""
                :
                    <LoadAll isAll={isAll} setIsAll={setIsAll}/>
            }

        </main>
    );
}

export default ProductSection;
