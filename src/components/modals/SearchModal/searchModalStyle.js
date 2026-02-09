import styled from 'styled-components';

export const SearchModalWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6); 
    backdrop-filter: blur(5px);
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    animation: fadeIn 0.3s ease;
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    `

export const CloseBtn = styled.div`
    position: absolute;
    top: 10%;
    right: 25%;
    transform: translateY(-10%);

    button {
        font-size: 32px;
        transition: 0.3s ease;
        &:hover {
            transform: rotate(180deg);
        }
    }

`

export const SearchBox = styled.div`
    width: 100%;
    height: 70vh;
    background: #fff;  
    margin: 0 auto;
    padding: 30px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    animation: slideDown 0.3s ease;
    position: relative;

    display: flex; 
    flex-direction: column;
    justify-content: center;  
    align-items: center;  
    padding-top: 60px;  
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    input {
        width: 90%;
        max-width: 700px;
        padding: 16px 20px;
        border: 2px solid #74B9FF;
        border-radius: 12px;
        font-size: 18px;
        
        &:focus {
            outline: none;
            box-shadow: 0 0 0 4px rgba(116, 185, 255, 0.2);
        }
        
        &::placeholder {
            color: #999;
        }
    }
`

export const RecommendSection = styled.div`
    margin-top: 40px;
    width: 90%;  
    max-width: 700px;
   

`;

export const RecommendTitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin-bottom: 20px;
    text-align: left;
`;

export const RecommendList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    max-width: 500px;
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const RecommendItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 18px;
    background: #f8f9fa;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s;
    
    .emoji {
        font-size: 24px;
    }
    
    .name {
        font-size: 15px;
        font-weight: 500;
        color: #333;
    }
    
    &:hover {
        background: #74B9FF;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(116, 185, 255, 0.3);
        
        .name {
            color: #fff;
        }
    }
`