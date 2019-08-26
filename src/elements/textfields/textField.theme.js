import styled from 'styled-components';
import { layout } from 'styled-system';

export const Flex = styled.div`
    ${layout}
    label {
        color: ${props => props.theme.input.label.color};
        font-size: 15px;
    }
    ${props => (
        props.inline ? `{
            display: flex;
            flex-direction: row;
            label {
                margin-right: 0.5rem !important;
            }
        }`: `{
            display: flex;
            flex-direction: column
        }`
    )}
`

export const InputText = styled.input`
    ${layout}
    font-size: 13px;
    color: ${props => props.theme.colors.black};
    border-radius: ${props => props.theme.radius.radius};
`