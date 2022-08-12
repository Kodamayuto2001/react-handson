import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Star from "./Star";

// export default function StarRating({ totalStars = 5 }) {
//     const [selectedStars] = useState(3);
//     return (
//         <>
//             {[...Array(totalStars)].map((n, i) => (
//                 <Star key={i} selected={selectedStars > i } />
//             ))}
//             <p>
//                 {selectedStars} of {totalStars} stars
//             </p>
//         </>
//     );
// }

export default function StarRating({ style = {}, totalStars = 5, ...props }) {
    const [selectedStars, setSelectedStars] = useState(0);
    return (
        <div style={{ padding: "5px", ...style }} {...props}>
            {[...Array(totalStars)].map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i + 1)}
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    );
}