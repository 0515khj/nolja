import axios from "axios";

const tourApi = axios.create({
    baseURL:'https://apis.data.go.kr/B551011/KorService2',
    params: {
        serviceKey:import.meta.env.VITE_API_KEY,
        MobileOS:'ETC',
        MobileApp:'NoljaApp',
        _type:'json',
    }
});

export default tourApi;