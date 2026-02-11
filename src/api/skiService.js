import skiData from '../data/skiResorts.json'

export const getSkiList = async(areaCode)=>{
    try {
        const skiFilter = skiData.filter(ski => ski.areacode === String(areaCode));
        return skiFilter;
    } catch (error) {
        console.error('스키장 업데이트 실패 :',error);
        return [];
    }
    
}

export const getSkiDetail = async(contentId) =>{
    const ski = skiData.find(ski => ski.contentid === contentId);
    return ski || null;
}