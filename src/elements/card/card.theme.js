import styled from 'styled-components';
import { layout } from 'styled-system'

export const CardStyledComponent = styled.div`
    ${layout}
    background: ${props => props.theme.colors.grey};
    color: ${props => props.theme.colors.black};
    line-height: 1.4;
    font-size: 16px;
    margin: 10px;
    padding: 24px;
    border-radius: 6px;
    border: 0px;
    ${props => props.shadow ? `
        display: inline-block;
        box-shadow: rgb(245, 245, 245) 1px 1px 0px 0px, rgb(245, 245, 245) 1px 1px 0px 0px, rgb(255, 255, 255) 3px 3px 0px 0px, rgb(245, 245, 245) 4px 4px 0px 0px, rgb(255, 255, 255) 6px 6px 0px 0px;
        background: $brand-grey;
        margin: 10px;
        padding: 24px;
        border-radius: 6px;
        transition: all 200ms ease 0s;
        &:hover {
            box-shadow: rgb(245, 245, 245) 1px 1px 0px 0px, rgb(255, 255, 255) 3px 3px 0px 0px, rgb(245, 245, 245) 4px 4px 0px 0px, rgb(255, 255, 255) 6px 6px 0px 0px, rgba(0, 0, 0, 0.05) 6px 8px 4px, rgba(0, 0, 0, 0.1) 6px 16px 20px;
        }
    `: ''}
    ${props => props.active ? `
        display: inline-block;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 30px 40px, rgba(0, 0, 0, 0.05) 0px 2px 4px;
        background-color: rgb(255, 255, 255);
        margin: 10px;
        padding: 24px;
        border-radius: 6px;
        transition: all 200ms ease 0s;
    `: ''}
    &:active {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 30px 40px, rgba(0, 0, 0, 0.05) 0px 2px 4px;
    }
`