import React, { useState } from 'react';
import "./productButton.scss";

function ProductButton() {

    const [isToggled, setToggle] = useState(false)

    return (
        <div className="productButton">
            {isToggled?
                <button
                    onClick={() => setToggle(false)}
                    className="productButton--active productButton--base"
                >
                    WYBRANE
                </button>
                :
                <button
                    onClick={() => setToggle(true)}
                    className="productButton--inactive productButton--base"
                >
                    WYBIERZ
                </button>
            }
        </div>
    );
}

export default ProductButton;
