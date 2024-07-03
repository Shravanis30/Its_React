import { useEffect, useState } from "react";

// hooks are purely js so js is used

// the unspoken rule of the hooks is to use the word "use" before the method name
// hooks take optional argument but somtime it doesnt

function useCurrencyInfo(currency) {
        const [data, setData] = useState({});
        useEffect(() => {
            fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
                .then((res) => res.json())
                .then((res) => setData(res[currency]))
        }, [currency])

        console.log(data);
        return data

    }


export default useCurrencyInfo;