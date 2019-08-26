import styled from 'styled-components';
import { layout } from 'styled-system';

export const SidebarStyledComponent = styled.div`
    ${layout}
    background-color: ${props => props.primary ? props.theme.colors.leftSidebarBg : props.theme.colors.secondary};
`

export const SidebarItems = styled.div`
    display: grid;
    grid-template-columns: 60px;
    align-items: center;
    background-color: ${props => props.primary ? props.theme.colors.leftSidebarBg : props.theme.colors.secondary};
`
