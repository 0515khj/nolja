import styled from 'styled-components';



export const BestWrap = styled.div`
  margin-top: 100px;
  padding: 40px 0;
  
  .section-title {
    margin-bottom: 50px;
    
    h2 {
      font-size: 32px;
      font-weight: 700;
      color: #333;
      margin-bottom: 15px;
    }
    
    p {
      font-size: 16px;
      color: #666;
    }
  }
`;

export const BestBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
  }
`;

export const BestCard = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(116, 185, 255, 0.3);
    
    img {
      transform: scale(1.05);
    }
  }
  
  img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    transition: transform 0.3s;
  }
  
  .info {
    padding: 16px;
    
    span:first-child {
      display: inline-block;
      padding: 4px 10px;
      background: #e3f2fd;
      color: #74B9FF;
      font-size: 12px;
      font-weight: 500;
      border-radius: 4px;
      margin-bottom: 8px;
    }
    
    h3 {
      font-size: 16px;
      font-weight: 600;
      color: #333;
      margin: 8px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    span:last-child {
      display: inline-block;
      padding: 3px 8px;
      background: #f5f5f5;
      color: #999;
      font-size: 11px;
      border-radius: 3px;
    }
  }
`