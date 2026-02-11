import { useNavigate } from 'react-router-dom';
import { IntroSectionWrap, TextBox } from './IntroStyle';


const IntroSection = () => {
    
    const navigate = useNavigate();

    const san = ()=>{
        navigate(`/spots?area=1&category=A01010400`);
    }
    
    return (
        <IntroSectionWrap>
            <div className="bg"></div>
            <div className="inner">
                <div className="container">
                   <TextBox>
                        <h2>가장 아름다운 겨울을<br/>만나는 방법</h2>
                        <p>눈 덮인 설산의 절경과 맑은 공기를 느껴보세요.</p>
                        <button onClick={san}>
                            겨울 산 명소 찾기
                        </button>
                    </TextBox>
                </div>
            </div>
        </IntroSectionWrap>
    );
};

export default IntroSection;