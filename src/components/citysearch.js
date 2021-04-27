import React, { useState } from 'react';
import { FormControl, Button } from 'react-bootstrap'

const CitySearch = ({onSearch}) => {
    const [city, setCity] = useState('');

    return (
        <div>
            <FormControl className="searchbar"
            placeholder="Enter city"
            onChange={(e) => setCity(e.target.value)}
            value={city}/>
            <Button onClick={() => onSearch(city)}>Check Weather</Button>
        </div>
    )
  };
  
  export default CitySearch;