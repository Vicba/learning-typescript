import React, { useState, useRef } from 'react';
import { CheckIcon, CopyIcon } from '../Icons';

type PasswordProps = {
    password: string
}

export default function Password({password} : PasswordProps) {
    const [clipboardIcon, setClipboardIcon] = useState<string>("clipboard");
    const passwordRef = useRef<HTMLParagraphElement>(null);

    const copyPassword = () => {
        if (passwordRef.current) {
            navigator.clipboard.writeText(passwordRef.current.textContent || "");
        }
    };

    const handleCopyClick = () => {
        copyPassword();
        setClipboardIcon("check");
        setTimeout(() => {
            setClipboardIcon("clipboard");
        }, 1000);
    };

    return (
        <div className='text-white bg-slate-600 w-full px-10 py-3 rounded-md flex flex-row justify-between'>
            <p className='text-xl font-bold tracking-wider' ref={passwordRef}>{password}</p>
            <button onClick={handleCopyClick}>
                {clipboardIcon === "clipboard" ? <CopyIcon /> : <CheckIcon />}
            </button>
        </div>
    );
}
