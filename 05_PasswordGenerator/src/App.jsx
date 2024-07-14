import { useCallback, useEffect, useRef, useState } from "react"


function App() {

  const [length, SetLength] = useState(8);
  const [NumberAllowed, SetNumberAllowed] = useState(false);
  const [CharAllowed, SetCharAllowed] = useState(false);
  const [Password, SetPassword] = useState("");

  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (NumberAllowed) str += "0987654321"
    if (CharAllowed) str += "!@#$%^&*()_+=-{}[]|~`?/"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    SetPassword(pass)

  }, [length, NumberAllowed, CharAllowed])

  const copyPasswordToClipbord = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password);
  }, [Password])

  useEffect(() => {

    PasswordGenerator()

  }, [length, NumberAllowed, CharAllowed, PasswordGenerator])

  return (

    <div className="bg-slate-900 w-full h-screen">
      <div className="w-full max-w-xl mx-auto rounded-lg p-2 my-14 text-orange-500 bg-slate-700">

        <h1 className="text-white text-4xl text-center my-5">Password Generator</h1>

        <div className="flex rounded-lg overflow-hidden my-2 mx-3">

          <input
            type="text"
            value={Password}
            className="outline-none w-full py-2 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipbord}
            className="bg-sky-700 px-5 text-white hover:bg-sky-800">copy</button>
        </div>

        <div className="flex text-lg gap-x-5">
          <div className="flex items-center gap-x-2 py-3">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer ml-4"
              onChange={(event) => SetLength(event.target.value)}
            />
            <label>Length:{length}</label>
          </div>

          <div className="flex items-center gap-x-2 py-3">
            <input
              type="checkbox"
              defaultChecked={NumberAllowed}
              id="numberInput"
              onChange={() => {
                SetNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number{NumberAllowed}</label>
          </div>

          <div className="flex items-center gap-x-2 py-3">
            <input
              type="checkbox"
              defaultChecked={CharAllowed}
              id="charInput"
              onChange={() => {
                SetCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Character{CharAllowed}</label>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
