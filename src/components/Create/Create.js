import React, { useState } from 'react';

function Create({ onCreate }) {
    const [query, setQuery] = useState('');

    const handleCreate = () => {
        // Call the onCreate callback with the query when the button is clicked
        onCreate(query);
    };

    const handleInputChange = (event) => {
        // Update the query state when the input value changes
        setQuery(event.target.value);
    };

    const handleKeyPress = (event) => {
        // Call handleCreate if Enter key is pressed
        if (event.key === 'Enter') {
            handleCreate();
        }
    };

    return (
        <div className="create">
            <input
                type="text"
                placeholder="Give me a topic you hate"
                value={query}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="searchInput"
            />
            <button onClick={handleCreate} className="searchButton">
                Create
            </button>
        </div>
    );
}

export default Create;
