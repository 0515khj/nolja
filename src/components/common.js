import styled from 'styled-components';


export const HeaderWrap = styled.div`
width: 100%;
height: 80px;
background: #fff;
position: sticky; top: 0; left: 0;
z-index: 9999;
border-bottom: 1px solid #ddd;
.headerInner {
}
.container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
`
export const Logo = styled.div`
`

export const SearchBox = styled.div`
position: absolute;
left: 50%;
transform: translateX(-50%);
display: flex;
align-items: center;

input {
    border: 1px solid #ddd;
    padding: 0 50px 0 20px;
    border-radius: 50px;
    box-shadow: 0px 2px 8px rgba(0,0,0,0.1);
    width: 380px;
    height: 48px;
    transition: all 0.3s;
    &:hover {
        border-color: #74B9FF;
      box-shadow: 0px 4px 12px rgba(116, 185, 255, 0.25);
    }
    &::placeholder {
      color: #999;
    }
    &:focus {
      outline: none;
      
    }
}
i {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #74B9FF;
    position: absolute;
    right: 6px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s;
    
    &:hover {
      background-color: #5da3e8;
      transform: scale(1.05);
    }
    
    .search {
      color: #fff;
    }
}

`

export const HeaderRight = styled.div`

    ul {
    display: flex;
    align-items: center;
    gap: 40px;
    
    li {
      font-size: 16px;
      font-weight: 500;
      color: #333;
      cursor: pointer;
      transition: color 0.3s;
      
      &:hover {
        color: #74B9FF;
      }

      .ham {
        font-size: 20px;
        vertical-align: middle;
      }
    }
  }

`
export const Area = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 20px 0;
    background: #fff;
    /* border-top: 1px solid #e0e0e0; */
    box-shadow: 0 4px 12px rgba(0,0,0,0.4); 
    animation: slideDown 0.5s ease;

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    ul {
         width: 100%;
         margin: 0 auto;
         display: flex;
         align-items: center;
         justify-content: center;
         gap: 8px;
         flex-wrap: wrap;
        li{
            padding: 10px 20px;
            border: 1px solid transparent;
            border-radius: 8px;
            font-size: 15px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              background: #74B9FF;
              color: #fff;
              transform: translateY(-2px);
            }
        }
    }
`




export const FooterWrap = styled.div`


`