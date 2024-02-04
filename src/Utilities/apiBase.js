import axios from "axios"


const apiInstance = axios.create({
    baseURL: 'http://localhost:3001'
  });


const getData =async(pathAsArray)=>{

    let promiseContainer = [];
    pathAsArray.map(e=>{
        let currentPromise = new Promise(async(res,rej)=>{
            let request = await apiInstance.get(e);
            res(request.data)
        });
      promiseContainer.push(currentPromise);
    })
    return Promise.all(promiseContainer)
}


export {getData};