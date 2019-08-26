import styled from 'styled-components';

export const ItemStyle = styled.div`
    display: flex;
    justify-content: center;
    text-align:center;
    min-height: 3.5rem;
    flex-direction:column;
    position: relative
    :hover {
        background-color: #333;
        color: #64b0f2;
    }
`

export const ActiveStyleComponent = styled.div`
    color: #fff;
    cursor: pointer;
    &:hover{
        color: ${props => props.theme.colors.primary};
        text-decoration:none;
    }
`
export const MoreAnchorStyleComponent = styled.div`
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
    margin-left: 5px;
    margin-right: 5px;
    &:hover{
        color: ${props => props.theme.colors.primary};
        text-decoration:none;
    }
`

export const LogoImg = styled.img`
    vertical-align: middle;
    border-style: none;
`

export const ProfileImage = styled.img`
    width: 31px;
    height: 31px;
    box-shadow: 0px 0px 1px 1px #ffcb14;
    border-radius: 100px;
    &:hover {
        width: 31px;
    }
`

export const MenuIconStyleComponent = styled.div`
    background: url('assets/sidebar/dashboard/${props => props.options.icons.normal}') center;
    background-size: 25px;
    background-repeat: no-repeat;
    height: 30px;
    :hover {
        background: url('assets/sidebar/dashboard/${props => props.options.icons.hover}') center;
        background-size: 25px;
        background-repeat: no-repeat;
        height: 30px;
    }
`
export const DisplayName = styled.p`
    font-size: 7px;
`

export const SubMenuStyledComponent = styled.div`
    position: absolute;
    min-height: 3.5rem;
    width: 212px;
    background-color: #515151;
    left: 60px;
    top: 0px;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 0.4rem;
    div:first-of-type {
        display: flex;
        justify-content: flex-end;
    }
`