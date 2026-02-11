import { LuMountain,LuWaves ,LuDog } from "react-icons/lu";
import { PiMountains } from "react-icons/pi";
import { GiCampingTent } from "react-icons/gi";
import { BsSnow2 } from "react-icons/bs";


export const categories = [
   { 
    id: 1, 
    name: '계곡', 
    code: 'A01010900', 
    icon: LuMountain, 
  },
  { 
    id: 2, 
    name: '바다', 
    code: 'A01011200', 
    icon: LuWaves, 
  },
  { 
    id: 3, 
    name: '스키장/썰매장', 
    code: 'SKI', 
    icon: BsSnow2 , 
  },
  { 
    id: 4, 
    name: '산', 
    code: 'A01010400', 
    icon: PiMountains, 
  },
  { 
    id: 5, 
    name: '애견동반', 
    code: 'A01010XXX', 
    icon: LuDog, 
  },
  { 
    id: 6, 
    name: '캠핑장', 
    code: 'CAMPING', 
    icon: GiCampingTent, 
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
  const category = categories.find(c => c.code === code);
  return category ? category.name : '';
};