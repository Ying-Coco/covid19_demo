import React from 'react';
import {Cards, Chart, StatePicker, CountyPicker} from './components/export';
import styles from './CountyState.module.css';
import {fetchUSData} from './api/index.js';


class App extends React.Component{
  state = {
    data:{},
     state:"",
     county:"",
  };

async componentDidMount (){
  const fetchedUSdata = await fetchUSData();
  this.setState({data: fetchedUSdata });
}

handleStateChange = async (state) => {
  const fetchedData = await fetchUSData({ state });
  this.setState({data:fetchedData, state: state});
};

handleCountyChange = async (county) => {
  const fetchedDatas = await fetchUSData({county});
  this.setState({data:fetchedDatas, county: county });
}; 

  render(){
    const {data, state, county} = this.state;
    return(
      <div className={styles.container} >
        <Cards data={data}/>
        
        
        <StatePicker handleStateChange = {this.handleStateChange} /> 
        <br></br>
        OR
        <br></br>
           <CountyPicker handleCountyChange ={this.handleCountyChange}/>
        <br></br>
        
        <Chart data={data} state={state} county={county}/>
      </div>
    )
  }
}
export default App;