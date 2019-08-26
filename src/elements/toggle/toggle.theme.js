import styled from 'styled-components';

export const ToggleStyledComponent = styled.div`
    label {
        cursor: pointer; 
    }

    label input {
        display: none; 
    }

    label span {
        width: 35px;
        border-radius: 20px;
        height: 20px;
        border: 1px solid #ddd;
        background-color: #ddd;
        box-shadow: #dfdfdf 0px 0px 0px 0px inset;
        transition: border 0.4s ease 0s, box-shadow 0.4s ease 0s;
        display: inline-block;
        vertical-align: middle;
        margin-right: 15px; 
    }

    label span:before {
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: white;
        content: " ";
        position: relative;
        left: 0px;
        transition: all 0.3s ease;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
        top: 1px; 
    }

    label > input:checked + span:before {
        left: 16px;
        top: 1px; 
    }

    label > input:checked {
        transition: border 0.4s ease 0s, box-shadow 0.4s ease 0s, background-color 1.2s ease 0s; 
    }

    label > input:checked + span {
        background-color: #2dbecd;
        border-color: #2dbecd;
        /*box-shadow: rgb(0, 105, 217) 0px 0px 0px 8px inset;*/ 
    }

    label > input:checked:disabled + span {
        cursor: not-allowed;
        background-color: #f8f8fc;
        border-color: #f8f8fc;
        /* box-shadow: rgb(109, 163, 221) 0px 0px 0px 8px inset;*/ 
    }
`