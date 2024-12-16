import React from 'react';

const SearchBar = ({ value, isLoading, handleSubmit, onChange }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          placeholder="Search Recipe"
          onChange={onChange}
          disabled={isLoading}
          className="form-control"
        />
        <input
          type="submit"
          className="btn"
          value="Search"
          disabled={isLoading || !value}
        />
      </form>
    </div>
  );
};

export default SearchBar;
