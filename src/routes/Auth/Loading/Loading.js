import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center">
            <div className="spinner-border animate-spin w-4 h-4 rounded-full" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;