// css imports
import './GetStartedButton.css';

import React from 'react'

const GetStartedButton = ({ children, backgroundColor, textColor }) => {
    return (
        <div className={`get-started-button`} style={{ color: textColor, backgroundColor: backgroundColor }}>
            {children}
        </div>
    )
}

export default GetStartedButton
