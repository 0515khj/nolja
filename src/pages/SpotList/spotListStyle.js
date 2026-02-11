import styled from 'styled-components';

export const SpotListWrap = styled.div`
  padding: 40px 0;
  min-height: 100vh;
  background: #f8f9fa;
  margin: 0px auto 50px;
  
  .section-title {
    h2 {
      font-size: 32px;
      font-weight: 700;
      color: #333;
      display: inline;
      margin-right: 5px;
    }
    
    span {
      font-size: 22px;
      font-weight: 500;
      color: #74B9FF;
      margin-left: 5px;
    }
  }
  
  .container {
    position: relative;
    display: flex;
    gap: 50px;
  }
`;

export const SpotLeft = styled.aside`
  flex: 1;
  align-self: flex-start;
  position: sticky; top: 80px; left: 0;
  padding-top: 130px;
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #333;
    padding-bottom: 10px;
    border-bottom: 2px solid #74B9FF;
  }
  
  ul {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    li {
      padding: 12px 16px;
      margin-bottom: 8px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s;
      font-size: 15px;
      color: #666;
      
      &:hover {
        background: #e3f2fd;
        color: #74B9FF;
        transform: translateX(5px);
      }
      
      &.active {
        background: #74B9FF;
        color: #fff;
        font-weight: 600;
      }
    }
  }
`;

export const SpotRight = styled.div`
  flex: 9;
`;

export const CategoryFilter = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 2px solid #e0e0e0;
  
  button {
    padding: 10px 24px;
    border: 2px solid #e0e0e0;
    border-radius: 25px;
    background: #fff;
    color: #666;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    
    &:hover:not(:disabled) {
      border-color: #74B9FF;
      color: #333;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(116, 185, 255, 0.2);
    }
    
    &.active {
      background: #74B9FF;
      color: #fff;
      border-color: #74B9FF;
      cursor: default;

      &:hover {
      color: #fff;
      }
    }
    
    &:disabled {
      background: #f5f5f5;
      color: #ccc;
      border-color: #e0e0e0;
      cursor: not-allowed;
    }
  }
`;

export const SpotsItem = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
  }
`;

export const SpotCard = styled.div`
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
`;

export const NoData = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  
  .loading {
    display: flex;
    align-items: center;
    gap: 20px;
    
    h3 {
      font-size: 24px;
      font-weight: 600;
      color: #333;
    }
    
    img {
      width: 60px;
      height: 60px;
    }
  }
  
  h3 {
    font-size: 20px;
    font-weight: 600;
    color: #666;
    margin-bottom: 10px;
  }
  
  span {
    font-size: 14px;
    color: #999;
  }
`;

export const PageBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 60px;
  padding: 20px 0;
  
  button {
    min-width: 40px;
    height: 40px;
    padding: 0 12px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background: #fff;
    color: #666;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    
    &:hover:not(:disabled) {
      border-color: #74B9FF;
      color: #74B9FF;
      background: #e3f2fd;
    }
    
    &:disabled {
      background: #f5f5f5;
      color: #ccc;
      cursor: not-allowed;
    }
    
    /* 활성 페이지 */
    &[style*="background: rgb(51, 51, 51)"] {
      background: #74B9FF !important;
      color: #fff !important;
      border-color: #74B9FF !important;
    }
  }
`;
