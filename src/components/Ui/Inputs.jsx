import React from 'react'

function Inputs({labels ,type = 'text', value, onChange,placeholder, ...props }) {
    return (
        <div>
            <label htmlFor="email" className="block text-gray-700">{labels}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full mt-1 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                {...props} // Spread operator to pass any additional props
            />
        </div>
    );
}

export default Inputs