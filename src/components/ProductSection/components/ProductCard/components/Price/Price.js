import React from 'react';
import "./price.scss";

function Price({price, installments}) {

    const installmentsPrice = (price/installments).toFixed(2);
    price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

    return (
        <div className="price">
            <p>
                <span className="price__date">
                    Cena obowjązuje: 15.09.2022 - 21.09.2022
                </span><br/>

                <span className="price__mainPrice">
                    {price}
                    <div className="price__subPrice">
                    00<br/>zł
                    </div>
                </span><br/>

                <span className="price__installments">
                    {installmentsPrice}zł x {installments} rat
                </span>
            </p>
        </div>
    );
}

export default Price;
