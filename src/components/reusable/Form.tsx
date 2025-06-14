import { Button } from "@/components/ui/button";
import { useState } from "react";
import {ALC1,ALC2, DC, SC} from "@/Data/char.jsx"

const Form = () => {
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [passLen, setpasslen] = useState(10);
  const [showPass, setshowPass] = useState('');

  const GenPas = () => {
    let showPass = '';
    let CharSet='';
    if(uppercase || lowercase ||numbers ||symbols  )
    {
     if(uppercase) CharSet+= ALC1;
     if(lowercase) CharSet+= ALC2;
     if(numbers) CharSet+= DC;
     if(symbols) CharSet+= SC;
     for(let i = 0; i<passLen; i++)
     {
      showPass += CharSet.charAt(Math.floor(Math.random() * CharSet.length));
      
    }
    setshowPass(showPass);
    }
  else{
    alert("Enter at least one option");
  }

  };

  return (
    <div className="bg-secondary text-center p-4 rounded-[10px] space-y-5 mt-10 mx-0 sm:mx-0 md:mx-20 lg:mx-72">
      <p className="text-xl md:text-3xl text-primary ">
        Welcome to Password Generator!
      </p>

      <div className=" justify-between items-center space-x-5">
        <input
          className="border border-primary rounded-[5px] py-1.5 px-1 outline-none w-1/2"
          readOnly
          value={showPass}
        />
        <Button className="cursor-pointer outline-none py-1.5 px-1 shadow-2xl w-1/4" onClick={() => {navigator.clipboard.writeText(showPass)}}>
          Copy
        </Button>
      </div>

      <div className="justify-center items-center space-y-8 mt-10 bg-accent rounded-[10px] p-4">
        <div className="flex justify-center items-center space-x-33">
          <p className="text-primary">Select Numbers</p>
          <input
            className="text-center border border-primary rounded-[5px] py-1.5 px-1 outline-none w-1/4 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
            type="number"
            value={passLen}
            max={20}
            min={8}
            onChange={(event) => setpasslen(Number(event.target.value))}
          />
        </div>

        <div className="flex justify-center items-center space-x-33">
          <p className="text-primary">Capital Letters</p>
          <input
            className=""
            type="checkbox"
            checked={uppercase}
            onClick={() => setUppercase(!uppercase)}
          />
        </div>

        <div className="flex justify-center items-center space-x-36">
          <p className="text-primary">Small Letters</p>
          <input
            className=""
            type="checkbox"
            checked={lowercase}
            onClick={() => setLowercase(!lowercase)}
          />
        </div>

        <div className="flex justify-center items-center space-x-28">
          <p className="text-primary">Include Numbers</p>
          <input
            className=""
            type="checkbox"
            checked={numbers}
            onClick={() => setNumbers(!numbers)}
          />
        </div>

        <div className="flex justify-center items-center space-x-30">
          <p className="text-primary">Symbols Letters</p>
          <input
            className=""
            type="checkbox"
            checked={symbols}
            onClick={() => setSymbols(!symbols)}
          />
        </div>
      </div>

      <button
        className="bg-primary text-primary-foreground text-lg font-medium px-4 py-2 rounded w-1/2 p-3 mt-2"
        onClick={GenPas}
      >
        Generate Password
      </button>
    </div>
  );
};

export default Form;
