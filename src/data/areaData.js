export const areas = [
  { code: 1, name: '서울', fullName: '서울특별시' },  
  { code: 2, name: '인천', fullName: '인천광역시' },  
  { code: 3, name: '대전', fullName: '대전광역시' },  
  { code: 4, name: '대구', fullName: '대구광역시' },  
  { code: 5, name: '광주', fullName: '광주광역시' },  
  { code: 6, name: '부산', fullName: '부산광역시' },  
  { code: 7, name: '울산', fullName: '울산광역시' },  
  { code: 8, name: '세종', fullName: '세종특별자치시' },
  { code: 31, name: '경기', fullName: '경기도' },
  { code: 32, name: '강원', fullName: '강원특별자치도' },
  { code: 33, name: '충북', fullName: '충청북도' },
  { code: 34, name: '충남', fullName: '충청남도' },
  { code: 35, name: '경북', fullName: '경상북도' },
  { code: 36, name: '경남', fullName: '경상남도' },
  { code: 37, name: '전북', fullName: '전북특별자치도' },
  { code: 38, name: '전남', fullName: '전라남도' },
  { code: 39, name: '제주', fullName: '제주특별자치도' }
];

// 코드 → 이름 변환 함수
export const getAreaName = (areaCode) => {
  
  // 없으면 빈 값
  if (!areaCode) return '';
  
  // 숫자 문자열 → 숫자 변환
  let code = areaCode;
  if (typeof areaCode === 'string' && !isNaN(areaCode)) {
    code = parseInt(areaCode);
  }
  
  // 숫자면 매핑
  if (typeof code === 'number') {
    const area = areas.find(a => a.code === code);
    return area ? area.name : ''; 
  }
  
  // 문자열 (고캠핑)
  if (typeof code === 'string') {
    return code
      .replace('특별자치도', '')
      .replace('특별자치시', '')
      .replace('특별시', '')
      .replace('광역시', '')
      .trim();
  }
  
  return '';  


};