import axios from 'axios';
const url = "https://disease.sh/v2";

export const fetchUSData = async ({ county, state } = {}) => {
    let changeableUrl = `${url}/countries/USA`; 
   if (county) {
     try {
       const { data } = await axios.get(`${url}/jhucsse/counties/${county}`);
       const modifiedData = {
         cases: data[0].stats.confirmed,
         recovered: data[0].stats.recovered,
         deaths: data[0].stats.deaths
       };
 
       /* return stats.map((confirmed) => confirmed.value); */
       console.log(modifiedData);
       return modifiedData;
     } catch (error) {
       console.log(error);
     }
   }
   if (state) {
     try {
       const {
         data: { cases, deaths, updated }
       } = await axios.get(`${url}/states/${state}`);
       const modifiedData = {
         cases,
         deaths,
         updated
       };
       console.log(modifiedData);
       return modifiedData;
     } catch (error) {
       console.log(error);
     }
   }
 
     try{
         const {data:{cases, deaths, recovered, updated}, } = await axios.get(changeableUrl);
         const modifiedData ={
             cases,
             deaths,
             recovered,
             updated
         }
         console.log(modifiedData);
         return modifiedData;
     }catch(error){
         console.log(error);
     } 
 };

 export const fetchDailyStateData =async (state)=>{
    if(state)
    {
        try{
        const {data} = await axios.get(`${url}/nyt/states/${state}`);
        const modifiedData = data.map((dailyData) =>({
            cases: dailyData.cases,
            deaths:dailyData.deaths,
            date: dailyData.date,
        
        }));
            return modifiedData; 
        
        }catch(error){
            console.log(error);
        }
    }
    else{
        try{
            const {data} = await axios.get(`${url}/nyt/usa`);
            const modifiedData = data.map((dailyData) =>({
                cases: dailyData.cases,
                deaths:dailyData.deaths,
                date: dailyData.date,
            
            }));
                return modifiedData;        
            }catch(error){
                console.log(error);
            }
    }
}

 export const fetchStates = async () => {
    const countyUrl = "https://covidtracking.com/api/v1/states/info.json";
     try{
        const {data}= await axios.get(countyUrl);
        const modifiedData = data.map((fetchedStates) => ({
            state : fetchedStates.name, 
            state_code : fetchedStates.state, 
     }));  
        return modifiedData;
     }catch(error){
         console.log(error);
     }
 }

 export const fetchCounty = async () => {
    const countyUrl = "https://disease.sh/v2/jhucsse/counties";
     try{
        const {data}= await axios.get(countyUrl);
        const modifiedData = data.map((fetchedCounty) => ({
            county : fetchedCounty.county, 
            province : fetchedCounty.province, 
     }));  
     
        return modifiedData;
     }catch(error){
         console.log(error);
     }
 }
