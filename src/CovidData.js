import React from 'react';
import './CovidData.css';
import React, { useState } from 'react';

function Dataa() {
  const [data, setData] = useState([]);
  const [timee, setTimee] = useState([]);

  const [confirmed, setConfirmed] = useState('');
  const [date, setDate] = useState('');

  const [deceased, setDeceased] = useState('');
  const [recovered, setRecovered] = useState('');
  const [tested, setTested] = useState('');
  const [total, setTotal] = useState('');
  const [vaccinated1, setVaccinated1] = useState('');
  const [vaccinated2, setVaccinated2] = useState('');
  const [delta21_14, setDelta21_14] = useState('');
  const [delta7, setDelta7] = useState('');


  const ress = () => {
    fetch('https://data.covid19india.org/v4/min/data.min.json')
      .then((response) => response.json())
      .then((json) => {
        setConfirmed(json.TN.total.confirmed);
        setRecovered(json.TN.total.recovered);
        setDeceased(json.TN.total.deceased);
        console.log(json);
      });
  };
  
  const fin = () => {
    fetch('https://data.covid19india.org/v4/min/data.min.json')
      .then((response) => response.json())
      .then((json) => {
        setDelta21_14(json.TN.delta21_14.confirmed);
        setDelta7(json.TN.delta7.recovered);
        
      });
  };

  const ret = () => {
    fetch('https://data.covid19india.org/v4/min/data.min.json')
      .then((response) => response.json())
      .then((json) => {
        setRecovered(json.AN.total.recovered);
      });
  };

  const tym = () => {
    fetch('https://data.covid19india.org/v4/min/timeseries.min.json')
      .then((response) => response.json())
      .then((json) => {
        setDate(json.AN.dates.delta);
      });
  };

  const setVall = ({
    confirmed,
    recovered,
    deceased,
  })
  => {
    setConfirmed(confirmed);
    setRecovered(recovered);
    setDeceased(deceased);
  };

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (props) => {
    props.preventDefault();
    fetch('https://data.covid19india.org/v4/min/data.min.json')
      .then((res) => res.json())
      .then((json) => {
        setVall(json.userInput.total.confirmed);
      });
    }
  /*
  let keys = Object.keys(ress);
  console.log('Key', keys);
  let val = Object.values(data);
  console.log('val', val);
*/
  return (
    <div>
      <h1> COVID TRACKER APPLICATION - INDIA </h1>

      <div>
          <input  placeholder="Enter Country Name" />
          <br />
          <br />

          <button onClick={ress}> Search </button>
          <p>confirmed : {confirmed} </p>

          <p>deceased : {deceased}</p>

          <p>recovered : {recovered} </p>
        </div>
      <br />
      <div>
       
      </div>
      <br />
      <div>
        <label for="States">Choose a States:</label>
        <select name="State" id="state">
          <option valuve="">Select a States</option>
          <option value="stateName" >AN</option>
          <option value="stateName">AP</option>
          <option value="stateName">AR</option>
          <option value="stateName">AS</option>
          <option value="stateName">BR</option>
          <option value="stateName">CH</option>
          <option value="stateName">CT</option>
          <option value="stateName">DL</option>
          <option value="stateName">DN</option>
          <option value="stateName">GA</option>
          <option value="stateName">GJ</option>
          <option value="stateName">HP</option>
          <option value="stateName">HR</option>
          <option value="stateName">JH</option>
          <option value="stateName">JK</option>
          <option value="stateName">KA</option>
          <option value="stateName">KL</option>
          <option value="stateName">LA</option>
          <option value="stateName">LD</option>
          <option value="stateName">MH</option>
          <option value="stateName">ML</option>
          <option value="stateName">MN</option>
          <option value="stateName">MP</option>
          <option value="stateName">MZ</option>
          <option value="stateName">NL</option>
          <option value="stateName">OR</option>
          <option value="stateName">PB</option>
          <option value="stateName">PY</option>
          <option value="stateName">RJ</option>
          <option value="stateName">SK</option>
          <option value="stateName">TG</option>
          <option value="stateName">TN</option>
          <option value="stateName">TR</option>
          <option value="stateName">TT</option>
          <option value="stateName">UP</option>
          <option value="stateName">UT</option>
          <option value="stateName">WB</option>
        
        
        </select>
        <br/>
        <br/>

      <button onClick={fin}>find</button>

<p>delta : {delta21_14} </p>
<p>delta7 : {delta7} </p>


        <br/>

        
      </div>
      <br />
      <div>
        <input type="date" id="covidDate" />
        <button onClick={tym}> Search </button>
        <br />
        <p>Date : {date}</p>
      </div>
      <br />
      <br />

      <div>
        <button onClick={ret}> Sort </button>
      </div>
      <br />
      <br />
      <button onClick={ress}> AN </button>
      <br />
      <br />
    </div>
  );
}
export default Dataa;
