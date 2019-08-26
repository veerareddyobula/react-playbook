import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { layout } from 'styled-system'
import theme from './../styles/globalStyles'

const Container = styled.div`
    display: flex;
    justify-content:space-around;
    margin-top: 2rem;
    padding: 2rem;
    ${layout}
`

const StoryContainer = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <Container width={[1]}>
                {props.children}
            </Container>
        </ThemeProvider>
    )
}

const DefaultLayoutDecorator = storyFn => <StoryContainer>{storyFn()}</StoryContainer>
export default DefaultLayoutDecorator;