import{displData} from './cityApi.js';
import {ComunityControler, City} from './community.js';

const url = 'http://localhost:5000';

const fetchServer = {
  
  async loadData(CityInput){
    let data = await postData(url + "all")
    console.log(data.lenght);
    if()
  }
}