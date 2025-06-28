import React from 'react';
import ProgressBar from "./common/ProgressBar/index.jsx";

const MainContainer = ({children, className, title, progress}) => {
    return (
        <div className={className}>
            <h3>{title.toUpperCase()}</h3>
            <ProgressBar progress={progress}/>
            {children}
        </div>
    );
};

export default MainContainer;