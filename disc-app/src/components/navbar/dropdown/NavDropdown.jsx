import React, {useState} from "react";
import './NavDropdown.css'

function NavDropdown() {
    const testValues = ["Όλα", "Τραγούδι", "Άτομο", "Δίσκος"];
    const [selectedValue, setSelectedValue] = useState(testValues[0]);
    return (
        <div>
            <select
                className="dropdown"
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}

            >
                {testValues.map((value) => (
                    <option className="dropdown-option" key={value} value={value}>
                    {value}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default NavDropdown;