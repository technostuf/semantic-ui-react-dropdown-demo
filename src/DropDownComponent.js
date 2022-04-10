
import React, { useState } from "react";
import { Dropdown } from 'semantic-ui-react'

const DropDownComponent = () => {
    const [selected, setSelected] = useState("in");

    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href =
        "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
    document.head.appendChild(styleLink);

    const countryOptions = [
        { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
        { key: 'in', value: 'in', flag: 'in', text: 'India' },
        { key: 'us', value: 'us', flag: 'us', text: 'United States' },
        { key: 'gb', value: 'gb', flag: 'gb', text: 'United Kingdom' },
    ]

    const onChange = (event, result) => {
        console.log("event", result.value);
        setSelected(result.value);
    };

    return (
        <div>
            <h1>Semantic UI React Example - technostuf.com</h1>
            <div style={{
                display: 'block', width: 700, padding: 30
            }}>
                <br />
                <Dropdown
                    name="country"
                    fluid
                    search
                    selection
                    options={countryOptions}
                    onChange={onChange}
                    value={selected}
                />
            </div>
        </div>
    )
}
export default DropDownComponent;