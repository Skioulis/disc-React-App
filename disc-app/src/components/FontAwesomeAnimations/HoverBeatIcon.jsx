import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function HoverBeatIcon({ icon, className, size = "sm", title }) {
    const [hover, setHover] = useState(false);
    return (
        <span
            className={className}
            title={title}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ display: "inline-block" }}
        >
      <FontAwesomeIcon icon={icon} size={size} beat={hover} />
    </span>
    );
}