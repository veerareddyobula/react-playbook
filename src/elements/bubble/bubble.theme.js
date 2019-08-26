import styled from 'styled-components';

export const BubbleStyledComponent = styled.span`
    display: inline-block;
    border-radius: 50%;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 900;
    width: 30px;
    height: 30px;
    padding: 2px 0px;
    text-align: center;
    margin-right: 5px;
    margin-left: 5px;
    cursor: hand;
    ${props => props.default ? `{
        background-color: ${props.theme.colors.cyan};
    }`: ''}
    ${props => props.info ? `{
        background-color: ${props.theme.colors.yellow};
    }`: ''}
    ${props => props.active ? `{
        background-color: ${props.theme.colors.red};
    }`: ''}
    ${props => props.custom ? `{
        background-color: ${props.color};
    }`: ''}
    ${props => props.disabled ? `{
        background-color: ${props.theme.colors.disabled};
        cursor: not-allowed;
    }`: ''}
`