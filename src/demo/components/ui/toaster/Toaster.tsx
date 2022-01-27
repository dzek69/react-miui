import React, { useCallback, useState } from "react";
import { useToaster } from "../../../../components/ui/toaster/Toaster";
import { Button } from "../../../../components/ui/button/Button";
import { Input } from "../../../../components/form/Input";

interface Props {}

const ToasterDemo: React.FC<Props> = (props) => {
    const toast = useToaster();
    const [text, setText] = useState("");

    const handleToast = useCallback(() => {
        toast(text || "Lorem ipsum dolor sit amet");
    }, [text]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }, []);

    return (
        <div>
            <Input onChange={handleChange} value={text} placeholder={"Fill in text to display"} />
            <Button onClick={handleToast}>Show toast</Button>
        </div>
    );
};

export { ToasterDemo };
