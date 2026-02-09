import React, { useEffect } from 'react';
import { getCategoryCode } from '../../api/tourService';

const Test = () => {

    useEffect(()=>{
        const test1 = async () => {
            
            try {
                

                 const codes = await getCategoryCode('A01', 'A0101');
                    console.log('코드 목록:', codes);
             
                
            } catch (error) {
                console.log(error)
            }
        }
        test1();
    },[])

    return (
        <div>
            sadsad
        </div>
    );
};

export default Test;