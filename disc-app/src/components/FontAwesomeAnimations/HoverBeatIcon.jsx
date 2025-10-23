import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function HoverBeatIcon({ icon, className, size = "sm", title }) {
    const [hover, setHover] = useState(false);
    const [adjSize, setAdjSize] = useState(size);

    return (
        <span
            className={className}
            title={title}
            onMouseEnter={() => {
                setHover(true);
                setAdjSize("2x");
            }
        }
            onMouseLeave={() => {
                setHover(false);
                setAdjSize("sm");
            }
        }
            style={{ display: "inline-block" }}
        >
      <FontAwesomeIcon icon={icon} size={adjSize} beat={hover} />
    </span>
    );
}