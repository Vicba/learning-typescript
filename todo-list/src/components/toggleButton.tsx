import {useState, useEffect} from 'react'

import { MoonIcon, SunIcon } from '../Icons';

export default function ToggleButton() {
    const [theme, setTheme] = useState<string>("dark")

    useEffect(() => {
        let storageTheme = localStorage.getItem("theme") as string;

        if(!storageTheme){
            localStorage.setItem("theme", theme);
        } else{
            setTheme(storageTheme)
            storageTheme === "light" ? document.querySelector("html")?.classList.remove("dark") : null;
            storageTheme === "dark" ? document.querySelector("html")?.classList.add("dark") : null;
        }

    }, []);



    const changeTheme = (theme: string) => {
        let newTheme = theme === "light" ? "dark" : "light";

        localStorage.setItem("theme", newTheme);
        setTheme(newTheme)

        newTheme === "light"
            ? document.querySelector("html")?.classList.remove("dark")
            : document.querySelector("html")?.classList.add("dark");
    };

    return (
        <button
            className="p-2 rounded-md bg-transparent hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
            onClick={() => changeTheme(theme)}>
                {theme === "light" && <MoonIcon/>}
                {theme === "dark" && <SunIcon/>}
        </button>
    )
}
