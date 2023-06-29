import React, { useEffect, useState } from "react";
import Container from "./components/container";
import Form from "./components/form";
import Layout from "./components/layout";
import Password from "./components/password";

function App() {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [range, setRange] = useState<number>(0);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  const generatePassword = (e: React.FormEvent) => {
    e.preventDefault();

    if(!includeLowercase && !includeNumbers && !includeUppercase && !includeSpecialChars){
      alert("You have to check a property!")
      return;
    } 

    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+-=[]{}|;':,.<>?";

    let characters = "";
    let password = "";

    if (includeLowercase) characters += lowercaseLetters;
    if (includeUppercase) characters += uppercaseLetters;
    if (includeNumbers) characters += numbers;
    if (includeSpecialChars) characters += specialChars;

    for (let i = 0; i < range; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    setGeneratedPassword(password);
  };


  return (
    <>
      <Layout>
        <Container>
          <h1 className="text-slate-600 text-base font-bold">
            Password Generator
          </h1>
          <Password password={generatedPassword} />
          <Form
            generate={generatePassword}
            range={range}
            setRange={setRange}
            includeLowercase={includeLowercase}
            setIncludeLowercase={setIncludeLowercase}
            includeUppercase={includeUppercase}
            setIncludeUppercase={setIncludeUppercase}
            includeNumbers={includeNumbers}
            setIncludeNumbers={setIncludeNumbers}
            includeSpecialChars={includeSpecialChars}
            setIncludeSpecialChars={setIncludeSpecialChars}
          />
        </Container>
      </Layout>
    </>
  );
}

export default App;
