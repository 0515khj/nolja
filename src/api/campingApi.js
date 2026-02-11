import axios from "axios";



const API_KEY = import.meta.env.VITE_API_KEY; 

const campingApi = axios.create({
    baseURL: 'https://apis.data.go.kr/B551011/GoCamping',
    params: {
        serviceKey:API_KEY,
        MobileOS:'ETC',
        MobileApp:'AppTest',
        _type:'json'
    }
});

export default campingApi;