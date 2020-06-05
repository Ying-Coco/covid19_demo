import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";

import { fetchCountries } from "../api";

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        };
        fetchAPI();
    }, []);
  

  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect defaultValue="" style={{width:"300px",fontSize:"large", alignContent:"center"}} onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="" style={{alignContent:"center"}} >Global</option>
        {fetchedCountries.map((country, i) => <option style={{alignContent:"center"}} key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
};
export default CountryPicker;


