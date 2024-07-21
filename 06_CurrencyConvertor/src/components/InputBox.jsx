import React, {useId} from 'react'
// do not call useId to generate keys in list

function InputBox({
    label,
    amount,
    onAmountChange,   //method
    onCurrencyChange,   
    currencyOptions = [], 
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId();

    return (
        <div className={4`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1/2'>

                <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'>   {/*htmlfor is used for binding*/}
                    {label}
                </label>
 
                <input
                    id={amountInputId}   // for binding (here unique id is generated)
                    className='outline-none w-full bg-transparent py-1.5'
                    type='number'
                    placeholder='Amount'
                    disabled={amountDisable}
                    value={amount}
                    onChange={(event) => onAmountChange && onAmountChange(Number(event.target.value))}
                />
            </div>

            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='text-black/40 mb-2 w-full'>Currency Type</p>

                <select
                    className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                    value={selectCurrency}
                    onChange={(event) => onCurrencyChange && onCurrencyChange(event.target.value)}         
                    disabled = {currencyDisable}    
                    >
                        {/* Remember the "keys" in loops in react */}
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}

                    
                </select>
            </div>
        </div>
    );
}
export default InputBox; 