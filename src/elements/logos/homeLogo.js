import React, { Fragment } from 'react';
import styled from 'styled-components'
import { layout } from 'styled-system'

const ImageElement = styled.img`
    ${layout}
`
export default function () {
    return (
        <Fragment>
            <ImageElement width={['5rem', '10rem', '15rem']} src="/assets/home/MilliporeSigma.png" alt="Millipore Sigma" />
        </Fragment>
    )
}