import React from "react";

export const  Purse = ({coins}) => {
    return(
        <div className="Purse">
            {Object.entries(coins).map(([coinType, amount]) => (
                <div key={coinType} className="coin-type">
                    <span className="coin-amount">{amount}</span>
                    <span className="coin-name">{coinType}</span>
                </div>
            ))}
        </div>
    );
}
//<span className={"`coin-icon ${cointype}-icon`"}></span>