import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(true);
  const [specialCharAllowed, setspecialCharAllowed] = useState(true);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  // using useCallBack for memoization, so that the function is not recreated on every render (optimization)
  const generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass="";
    if(numAllowed) str += "0123456789";
    if(specialCharAllowed) str += "!@#$%^&*()_-+~?<>[]{}";

    for(let i=0; i<length; i++){
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, numAllowed, specialCharAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef?.current?.select();
    navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    generatePassword();
  }, [length, numAllowed, specialCharAllowed, generatePassword]);

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="p-4 w-fit bg-gray-900 rounded-2xl">
        <h1 className="text-5xl text-white text-center">Password Generator</h1>

        <div className="flex flex-row items-center justify-center rounded-2xl shadow overflow-hidden m-4 mt-7">
          <input
            type="text"
            value={password}
            className="w-full p-2 text-white bg-gray-800 outline-none"
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-[dodgerblue] text-white p-2 px-3 outline-none cursor-pointer hover:bg-blue-600 active:bg-blue-500"
            onClick={copyPassword}
          >
            Copy
          </button>
        </div>

        <div className="flex text-md items-center justify-center m-4 flex-wrap gap-2 text-yellow-300">
          <input
            type="range"
            name="length"
            id="len"
            value={length}
            min={6}
            max={32}
            className="cursor-pointer"
            onChange={(event) => setLength(event.target.value)}
          />
          <label htmlFor="len" className="mx-1 mr-4 cursor-pointer">
            Length: {length}
          </label>

          <input
            type="checkbox"
            name="numAllowed"
            id="numAllowed"
            defaultChecked={numAllowed}
            className="cursor-pointer"
            onChange={() => setNumAllowed((prev) => !prev)}
          />
          <label htmlFor="numAllowed" className="mx-1 mr-4 cursor-pointer">
            Numbers Allowed
          </label>

          <input
            type="checkbox"
            name="charAllowed"
            id="charAllowed"
            defaultChecked={specialCharAllowed}
            className="cursor-pointer"
            onChange={() => setspecialCharAllowed((prev) => !prev)}
          />
          <label htmlFor="charAllowed" className="mx-1 cursor-pointer">
            Special Characters Allowed
          </label>
        </div>
      </div>
    </div>
  );
}

export default App
