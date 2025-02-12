import React from 'react'

const Loading = () => {
    return (
        <div className="h-[85vh]">
            <div className="flex space-x-2 h-[70vh] justify-center items-center">
                <div className="fade-dot w-3 h-3 bg-[#9DB4C0] rounded-full"></div>
                <div className="fade-dot w-3 h-3 bg-[#9DB4C0] rounded-full"></div>
                <div className="fade-dot w-3 h-3 bg-[#9DB4C0] rounded-full"></div>
            </div>
        </div>

    )
}

export default Loading
