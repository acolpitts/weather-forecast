import React from "react";
import PropTypes from "prop-types";

const CitySelect = ({ cities, handleSelect }) => {
  return (
    <select className="text-gray-500 px-2 h-10" onChange={handleSelect}>
      <option value="reset">City</option>
      {cities.map((city, idx) => {
        return (
          <option key={idx} value={city.id}>
            {city.name}
          </option>
        );
      })}
    </select>
  );
};

CitySelect.propTypes = {
  cities: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default CitySelect;
