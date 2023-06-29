import React from "react";

interface FormProps {
  generate: (e: React.FormEvent) => void;
  range: number;
  setRange: React.Dispatch<React.SetStateAction<number>>;
  includeLowercase: boolean;
  setIncludeLowercase: React.Dispatch<React.SetStateAction<boolean>>;
  includeUppercase: boolean;
  setIncludeUppercase: React.Dispatch<React.SetStateAction<boolean>>;
  includeNumbers: boolean;
  setIncludeNumbers: React.Dispatch<React.SetStateAction<boolean>>;
  includeSpecialChars: boolean;
  setIncludeSpecialChars: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Form({
  generate,
  range,
  setRange,
  includeLowercase,
  setIncludeLowercase,
  includeUppercase,
  setIncludeUppercase,
  includeNumbers,
  setIncludeNumbers,
  includeSpecialChars,
  setIncludeSpecialChars,
}: FormProps) {
  return (
    <form
      onSubmit={generate}
      className="text-white bg-slate-600 w-full px-10 py-3 rounded-md flex flex-col"
    >
      <p className="mb-2 flex justify-between">
        Character length <span>{range}</span>
      </p>
      <input
        type="range"
        min={1}
        max={20}
        onChange={(e) => setRange(Number(e.target.value))}
        value={range}
        className="mb-5 w-full h-1 bg-black rounded focus:outline-none appearance-none text-green-200"
      />
      <div className="flex flex-col items-start mb-8">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="lowercase"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
            className="mr-2"
          />
          <label htmlFor="lowercase">Include Lowercase Letters</label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="uppercase"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
            className="mr-2"
          />
          <label htmlFor="uppercase">Include Uppercase Letters</label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="numbers"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
            className="mr-2"
          />
          <label htmlFor="numbers">Include Numbers</label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="specialChars"
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
            className="mr-2"
          />
          <label htmlFor="specialChars">Include Special Characters</label>
        </div>
      </div>

      <button type="submit" className="w-full border-2 bg-green-600 flex items-center justify-center rounded-md py-2 hover:bg-slate-600 hover:border-2 hover:border-green-600 mb-4">Generate</button>
    </form>
  );
}
