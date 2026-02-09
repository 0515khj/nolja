import { categories } from "../data/categoryData";
import tourApi from "./tourApi"



const fetchTourData = async (areaCode, cat3) => {
    const response = await tourApi.get('/areaBasedList2', {
        params: {
            numOfRows: 100,
            pageNo: 1,
            arrange: 'C',
            contentTypeId: 12,
            areaCode: areaCode,
            cat1: 'A01',
            cat2: 'A0101',
            cat3: cat3
        }
    });
    return response.data.response.body.items.item || [];
};

/* 여기엔 카테고리 추가할때마다 작성 */
export const getValleys = (areaCode) => fetchTourData(areaCode, 'A01010900'); // 계곡
export const getBeaches = (areaCode) => fetchTourData(areaCode, 'A01011200'); // 바다 
export const getMountin = (areaCode) => fetchTourData(areaCode, 'A01010400'); // 산 

/* / 여기엔 카테고리 추가할때마다 작성 */


export const getAllSpots = async (areaCode) => {
    const categoryCodes = categories.map(ca => ca.code);
    let allData =[];
    for(let code of categoryCodes){
        const response = await tourApi.get('/areaBasedList2', {
            params: {
                numOfRows: 100,
                pageNo: 1,
                arrange: 'C',
                contentTypeId: 12,
                areaCode: areaCode,
                cat1: 'A01',
                cat2: 'A0101',
                cat3: code,
            }
        });
        const cateItem = response.data.response.body.items.item || [];
        allData = [...allData, ...cateItem];
    }

    return allData;
};

// 상세 정보 (설명 포함)
export const getSpotDetail = async (contentId) => {
    const response = await tourApi.get('/detailCommon2', {
        params: {
            contentId: contentId,
            // defaultYN: 'Y',
            // firstImageYN: 'Y',
            // areacodeYN: 'Y',
            // overviewYN: 'Y', 
            // mapinfoYN: 'Y',
        }
    });
    console.log('전체 응답:', response.data);
    return response.data.response.body.items.item[0];
};

/* 이미지 여러 장 */
export const getSpotImages = async(contentId)=>{
    const response = await tourApi.get('/detailImage2',{
        params: {
            contentId:contentId,
            imageYN:'Y',
        }
    })
    return response.data.response.body.items.item || [];
}

//
export const getCategoryCode = async (cat1, cat2) => {
  const response = await tourApi.get('/categoryCode1', {
    params: {
      numOfRows: 100,
      pageNo: 1,
      MobileOS: 'ETC',
      MobileApp: 'AppTest',
      cat1: cat1,
      cat2: cat2,
    }
  });
  console.log('카테고리 코드:', response.data);
  return response.data.response.body.items.item || [];
};

// best 랜덤으로 5개
export const getBestSpots = async()=>{
    const categoryArea = [
        { cat3: 'A01010900', areaCode: 32 },  // 계곡 - 강원
        { cat3: 'A01011200', areaCode: 6 },   // 바다 - 부산
        { cat3: 'A01010400', areaCode: 32 },  // 산 - 강원
    ]

    const promise = categoryArea.map(({cat3, areaCode})=>
        tourApi.get('/areaBasedList2',{
             params: {
                numOfRows: 2,
                pageNo: 1,
                arrange: 'C',
                contentTypeId: 12,
                areaCode: areaCode,
                cat1: 'A01',
                cat2: 'A0101',
                cat3: cat3,
             }
        })
    );
    const result = await Promise.all(promise);
    const allSpots = result.flatMap(all => all.data.response.body.items.item || []);
    return allSpots.sort(()=> Math.random() - 0.5).slice(0, 5);
}