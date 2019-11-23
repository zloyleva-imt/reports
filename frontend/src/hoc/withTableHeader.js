import React from "react";

export const withTableHeader = Component => props => (
    <thead>
        <tr>
            <Component {...props}/>
        </tr>
    </thead>
)