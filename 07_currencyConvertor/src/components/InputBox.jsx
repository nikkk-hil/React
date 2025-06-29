import React, {useId} from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    amountDisable = false,
    currencyOptions = [],
    onCurrencyChange,
    selectCurrency = "usd",
    currencyDisable = false,

}){
 
    const amountInputId = useId();

   return(
    <>
        <div className="h-28 m-6 rounded-xl bg-white">
            <div className="flex justify-between px-2 py-3 text-md text-gray-500">
                <label htmlFor="amountInputId">
                {label}
                </label>
                <p>Currency Type</p>
            </div>
            <div className="h-12 flex justify-between">
                <input 
                className="outline-none px-2 w-6/12 text-2xl"
                type="number"
                placeholder="Amount"
                disabled={amountDisable}
                value={amount}
                onChange={(e) => onAmountChange && 
                onAmountChange(Number(e.target.value))}
                />
                <select 
                className="px-2 text-lg"
                value={selectCurrency}
                onChange={(e) => onCurrencyChange &&
                    onCurrencyChange(e.target.value)
                }
                disabled={currencyDisable}
                >
                    {
                        currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>

    </>
   ) 
}

export default InputBox;