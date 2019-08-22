import React, {Fragment} from 'react';
import styled from 'styled-components';
import { width } from 'styled-system'

const Image = styled.img`
  width: 156px;
`;

export default function(){
    return (
        <Fragment>
            <Image width={1/2} src="/assets/home/MilliporeSigma.png" alt="Millipore Sigma" />
        </Fragment>
    )
}