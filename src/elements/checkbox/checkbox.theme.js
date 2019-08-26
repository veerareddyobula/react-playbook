import styled from 'styled-components';

export const CheckboxLabel = styled.label`
    display: inline-flex;
    cursor: pointer;
    align-items: center;
    outline: none;
    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        -webkit-appearance: checkbox; 
    }
    .checkmark {
        display: inline-block;
        position: relative;
        width: 20px;
        height: 20px;
        margin: 0px 7px 0px 0px;
        border-radius: 7px;
        border: 1.5px solid #E9E9ED; 
    }

    :hover input ~ .checkmark {
        border: 1.5px solid #2dbecd; 
    }

    input:checked ~ .checkmark {
        border: 1.5px solid #2dbecd;
        background-color: #2dbecd; 
    }
    
    input:checked:hover ~ .checkmark {
        border: 1.5px solid #2ab0be;
        background-color: #2ab0be; 
    }

    .checkmark:after {
        content: "";
        margin: 2px auto;
        display: none; 
    }
    
    input:checked ~ .checkmark:after {
        display: block; 
    }

    .checkbox-field.checkbox-disabled {
        opacity: 0.3;
        cursor: not-allowed; 
    }
    
    .checkbox-field.checkbox-disabled:hover input ~ .checkmark {
        border: 0px !important; 
    }

    .checkmark:after {
        width: 5px;
        height: 9px;
        border: solid white;
        border-width: 0 2px 2px 0;
        border-radius: 2px;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(50deg); 
    }
`