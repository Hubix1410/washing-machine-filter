import React from 'react';
import "./productCard.scss";
import { Price, ProductButton, SpecInfo } from './components';

function ProductCard({data}) {
    return (
        <div className="card">
            <img src={data.image} alt="zdjęcie pralki" className="card__image"/>
            <h2 className="card__title">{data.name}</h2>
            <SpecInfo 
                capacity={data.capacity}
                energyClass={data.energyClass}
                functions={data.functions}
                size={data.size}
            />
            <Price
                price={data.price}
                installments={data.installments}
            />
            <ProductButton/>
        </div>
    );
}

export default ProductCard;
