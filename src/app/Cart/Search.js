import React from 'react';

export default ({ term, handleInput }) => (
    <div><input value={term} name="search" onInput={handleInput} /></div>
)