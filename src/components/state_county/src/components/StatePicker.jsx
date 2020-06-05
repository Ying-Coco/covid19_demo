import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from './StatePicker.module.css';
import { fetchStates } from "../api/index.js";

const StatePicker = ({ handleStateChange }) => {
  const [fetchedStates, setFetchedStates] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedStates(await fetchStates());
    };
    fetchAPI();
  }, []);

  return (
    <FormControl>
      <NativeSelect defaultValue="" style={{ width: "250px", fontSize: "large", float: "right" }}
        onChange={e => handleStateChange(e.target.value)}
      >
        <option value="">Select a State(Default USA)</option>
        {fetchedStates.map(({ state, state_code }, i) => (
          <option key={i} value={state}>
            {state_code} {state}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
export default StatePicker;
