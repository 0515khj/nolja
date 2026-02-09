import styled from 'styled-components';


export const CategoryWrap = styled.div`
`;

export const CateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  align-items: center;
  justify-content: center;
`;



export const CateGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 16px;

  &:hover {

    span{
      background: #74B9FF;
      color: #fff;
    }
    .title{
      color: #74B9FF;
    }
    
  }

  /* background: #f8f9fa; */
  /* &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.15);
    background: ${props => props.$hoverColor || '#4facfe'};
    
    .title {
      color: #fff;
    }
  } */

  span {
    background: #f5f5f5;
    width: 70px;
    height: 70px;
    font-size: 22px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.5s;
  }
  
  .icon {
    font-size: 64px;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
  }
  
  .title {
    font-size: 20px;
    transition: color 0.3s;
  }

`;



