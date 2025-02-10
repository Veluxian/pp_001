import React from "react";

export const  Purse = ({currency}) => {
    if (!currency || !Array.isArray(currency)) {
        return(<div> no hay datos</div>)
    }
    
    return(
        <div className="Purse">
            {currency.map((purse) => (
                <div key={purse.idPurse}>
                    <h3> Monedero numero : {purse.idPurse}</h3>
                    <ul>
                        {purse.coins.map((coins) => (
                            <li key={coins}>
                                Tipo de moneda : {coins.coinType}, Cantidad: {coins.quantity}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
//<span className={"`coin-icon ${cointype}-icon`"}></span>