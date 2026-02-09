import { LuMountain,LuWaves ,LuDog } from "react-icons/lu";
import { FaPersonSkiing } from "react-icons/fa6";
import { PiMountains } from "react-icons/pi";
import { GiCampingTent } from "react-icons/gi";



export const categories = [
   { 
    id: 1, 
    name: '계곡', 
    code: 'A01010900', 
    icon: LuMountain, 
    $hoverColor: '#4facfe' 
  },
  { 
    id: 2, 
    name: '바다', 
    code: 'A01011200', 
    icon: LuWaves, 
    $hoverColor: '#26C6DA' 
  },
  { 
    id: 3, 
    name: '스키', 
    code: 'A01010XXX', 
    icon: FaPersonSkiing , 
    $hoverColor: '#42A5F5' 
  },
  { 
    id: 4, 
    name: '등산', 
    code: 'A01010400', 
    icon: PiMountains, 
    $hoverColor: '#8D6E63' 
  },
  { 
    id: 5, 
    name: '애견동반', 
    code: 'A01010XXX', 
    icon: LuDog, 
    $hoverColor: '#FFA726' 
  },
  { 
    id: 6, 
    name: '캠핑', 
    code: 'A01010XXX', 
    icon: GiCampingTent, 
    $hoverColor: '#66BB6A' 
  },
  // { 
  //   id: 7, 
  //   name: '펜션', 
  //   code: 'A01010XXX', 
  //   icon: LuMountain, 
  //   $hoverColor: '#AB47BC' 
  // },
  // { 
  //   id: 8, 
  //   name: '호텔', 
  //   code: 'A01010XXX', 
  //   icon: LuMountain, 
  //   $hoverColor: '#5C6BC0' 
  // },
]

export const getCategoryName = (code) => {
  if (code === 'all') return '전체';
  const category = categories.find(c => c.code === code);
  return category ? category.name : '전체';
};