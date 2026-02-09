import styled from 'styled-components';

export const IntroSectionWrap = styled.div`
    height: 65vh;
    color: #fff;
    position: relative;
    .bg {
        width: 100%;
        height: 100%;
        z-index: -1;
        filter: brightness(80%);
        background-image:url(/images/mainbg2.png);
        background-size: cover;
        background-position: bottom;
    }
    .container {
        position: absolute;
        bottom: 0;
        color: #fff;
        top: 50%; 
        left: 50%;
        transform: translate(-50%,-50%); 

        padding: 0 20px;
        z-index: 100;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
    `
    export const TextBox = styled.div`
        text-align: left;
        display: flex;
        flex-direction: column;
        gap: 20px;

        h2 {
            font-size: 48px;
            font-weight: 700;
            line-height: 1.3;
            margin-bottom: 16px;
            text-shadow: 2px 2px 10px rgba(0,0,0,0.3); 
        }

        p {
            font-size: 18px;
            font-weight: 300; 
            margin-bottom: 32px;
            opacity: 0.9;
        }

        button {
            background: transparent;
            border: 1px solid rgba(255, 255, 255, 0.6);
            color: #fff;
            font-size: 16px;
            font-weight: 600;
            padding: 15px 40px;
            cursor: pointer;
            transition: all 0.3s ease;
            backdrop-filter: blur(4px); 

            &:hover {
                background: #fff;
                color: #333;
                border-color: #fff;
                transform: translateY(-3px); 
            }
        }
        @media (max-width: 768px) {
            text-align: center; 
            h2 { font-size: 32px; }
            p { font-size: 15px; }
            .container {
                justify-content: center;
            }
    }
    `