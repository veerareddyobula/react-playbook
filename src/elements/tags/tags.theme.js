import styled from 'styled-components';
import { layout } from 'styled-system';

export const TagsStyledComponent = styled.div`
    ${layout}
    display: inline-flex;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
    min-width: 100px;
    max-width: 100%;
    cursor: default;
    background-color: #2dbecd;
    padding: 2px 0px;
    border-radius: 16px;
    transition: all 200ms ease 0s;
    border-width: 2px;
    border-style: solid;
    border-color: #2dbecd;
    border-image: initial;

    .tag-content {
        max-width: calc(100% - 29px);
        font-size: 12px;
        margin-left: 10px;
        color: white;
        font-weight: 900;
    }
    .outline-content {
        color: #2dbecd !important; 
    }
    .tag-label {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .tag-icon {
        display: inline-block;
        position: relative; 
    }
    :after {
        color: white;
        padding: 1px 3px;
        width: 16px;
        height: 21px; 
    }
    .disabled, .disabled-outline {
        cursor: not-allowed;
        opacity: 0.3; 
    }

    .outline {
        background-color: white !important; 
    }
    .outline:after {
        color: #2dbecd !important;
        padding: 1px 3px;
        width: 16px;
        height: 21px;
        content: "X\A0";
    }

    .disappear {
        display: none; 
    }
`