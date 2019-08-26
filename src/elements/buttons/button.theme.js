import styled from 'styled-components';
import { system } from 'styled-system'

export const Btn = styled.button`
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-basis: auto;
    min-width: 40px;
    min-height: 40px;
    cursor: pointer;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    padding: 8px 0px;
    border-radius: 6px;
    transition: all 200ms ease 0s;
    outline: none !important;
    position: relative;
    font-size: 16px;
    letter-spacing: 0.2px;
    font-weight: 700;
    opacity: 1;
    padding: 0px 30px;
    ${props => props.primary ? `{
        background-color: rgb(45, 190, 205) !important;
        color: rgb(255, 255, 255);    
        &:hover{
            background-color: rgb(41, 171, 185) !important;
        }
        &:active{
            background-color: rgb(32, 133, 144) !important;
        }
        &:disabled{
            opacity: 0.3;
            cursor: not-allowed;
        }
    }`: ''}
    ${props => props.info ? `{
        background-color: rgb(248, 248, 252) !important;
        color:rgb(45, 190, 205) !important;    
        &:hover{
            background-color: rgb(243, 243, 247) !important;
        }
        &:active{
            background-color: rgb(233, 233, 237) !important;
        }
        &:disabled{
            opacity: 0.3;
            cursor: not-allowed;
        }
        
    }`: ''}
    ${props => props.warning ? `{
        background-color:#FFC832 !important;
        color:#531B25 !important;    
        &:hover{
            color:#1B1B25;
            background-color: #F3BE2F !important;
        }
        &:active{
            color:#1B1B25;
            background-color: #DDAC28 !important;
        }
        &:disabled{
            opacity: 0.3;
            cursor: not-allowed;
        }
    }`: ''}
    ${props => props.link ? `{
        position: relative;
        padding-bottom: 1px;
        letter-spacing: 0.2px;
        font-size: 15px;
        font-weight: 700;
        color: rgb(45, 190, 205);
        margin: 0px 5px;
        
        &:disabled{
            opacity: 0.3;
            cursor: not-allowed;
        }
        
        &:visited {
            text-decoration: none !important;
            font-weight:bold !important;
        }  
        &:focus, &:hover {
            font-weight: 900 !important;
            color: rgb(45, 190, 205);        
            text-decoration: none !important;
            border: 0px !important;
        }    
    }`: ''}
`
export const ResponsiveButton = styled(Btn)`
    ${system({
        height: 'elementHeight',
    })}
`
