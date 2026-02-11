import { areas } from "../data/areaData"
import campingApi from "./campingApi"


// 캠핑장 목록
export const getCampingList = async(areaCode)=>{
    try {
            const response = await campingApi.get('/basedList', {
                params: {
                    numOfRows: 3000,
                    pageNo: 1
                }
            });
            
            const items = response.data?.response?.body?.items?.item || [];
            const itemsArray = Array.isArray(items) ? items : [items];

            const doName = getDoName(areaCode)
            const filter = itemsArray.filter(item => item.doNm === doName)
            return filter;
    } catch (error) {
        console.error('캠핑 데이터 로드 실패 :',error)
        return [];
    }
}

// 캠핑장 정보
export const getCampingDetail = async(contentId) =>{
    const response = await campingApi.get('/basedList',{
        params: {
            contentId : contentId
        }
    });
    return response.data.response.body.items.item[0]
}


const getDoName = (areaCode) =>{
    const area = areas.find(a => a.code === areaCode);
    return area ? area.fullName : '';
}