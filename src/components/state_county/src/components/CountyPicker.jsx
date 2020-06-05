import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCounty } from "../api/index.js";

const CountyPicker = ({ handleCountyChange }) => {
  const [fetchedCounties, setFetchedCounties] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCounties(await fetchCounty());
    };
    fetchAPI();
  }, []);

  return (
    <FormControl>
      <NativeSelect
        defaultValue=""
        style={{ width: "250px", fontSize: "large" }}
        onChange={e => handleCountyChange(e.target.value)}
      >
        <option value="">Select A County</option>
        {fetchedCounties.map(({ county, province }, i) => (
          <option key={i} value={county}>
            {province} {county}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
export default CountyPicker;
