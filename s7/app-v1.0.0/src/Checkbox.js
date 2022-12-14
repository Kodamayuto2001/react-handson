import { useState, useEffect } from "react";

export default function Checkbox() {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        localStorage.setItem("checkbox-value", checked);
        alert(`checked: ${checked.toString()}`);
    });

    return (
        <>
            <input 
                type="checkbox"
                value={checked}
                onChange={() => setChecked(checked => !checked)}
            />
            {checked ? "checked" : "not checked"}
        </>
    );
}