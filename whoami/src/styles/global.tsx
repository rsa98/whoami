import styled from 'styled-components';

export const Global = styled.div`
    :root {
        /* brand colors */
        --brand-color-primary: #6644AF;
        --brand-color-secundary: #311767;
        /* Extended colors */
        --extended-color-lines: #;
        --extended-color-grey-300: #E2E4E5;
        --extended-color-grey-400: #CCCCCC;
        --extended-color-grey-500: #ECECEC;
        /* text colors */
        --text-color-white: #ffffff;
        --text-color-white-800: #f9f9f9;
        --text-color-black: #000000;
        --text-color-black-800: #222222;
        --text-color-black-700: #484848;
        --text-color-grey: #CCCCCC;
        /* background colors */
        --background-color-brand-primary: #6644AF;
        --background-color-brand-secundary: #311767;
        --background-color-light: #FFFFFF;
        --background-color-medium: #F6F8FA;
        --background-color-black: #2D2D2D;
    }

    h1 {
        font-size: 6.4rem;
    }

    h2 {
        font-size: 5.6rem;
    }

    h3 {
        font-size: 4.8rem;
    }

    h4 {
        font-size: 4.0rem;
    }

    h5 {
        font-size: 3.2rem;
    }

    h6 {
        font-size: 2.4rem;
    }

    .paragraph-xl {
        font-size: 2.0rem;
    }

    .paragraph-lg {
        font-size: 1.8rem;
    }

    .paragraph-md {
        font-size: 1.6rem;
    }

    .paragraph-sm {
        font-size: 1.4rem;
    }

    .paragraph-xs {
        font-size: 1.2rem;
    }

    .paragraph-quack {
        font-size: 1.0rem;
    }

    .paragraph-nano {
        font-size: .8rem;
    }
`