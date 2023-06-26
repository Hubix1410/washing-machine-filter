import React from 'react';
import "./loadAll.scss";

function LoadAll({isAll, setIsAll}) {

    function toggleIsAll(){
        if(isAll === true){
            setIsAll(false);
        }else{
            setIsAll(true);
        }
    }

    let buttonClass =  "";

    if(isAll){
        buttonClass = "loadAll__arrow loadAll__arrow--showLess";
    } else {
        buttonClass = "loadAll__arrow loadAll__arrow--showMore";
    }

    return (
        <div className="loadAll">
            <button className="loadAll__button" onClick={()=>toggleIsAll()}>
                {isAll ?
                    "Pokaz mniej"
                :
                    "Pokaz więcej"
                }
                <div className={buttonClass}></div>
            </button>
        </div>
    );
}

export default LoadAll;
