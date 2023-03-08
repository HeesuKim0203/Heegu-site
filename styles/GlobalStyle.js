import styled, { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const Container = styled.div`
    width : 1194px ;
    margin : 0 auto ;
` ;

const GlobalStyle = createGlobalStyle`
    /* style reset */
    ${reset}

    /* Basic Style */
    body { 
        background-color : #FAFAFA ; 
    }

    #wrap {
        width : 100% ;
    }

    a {
        color : black ;
        text-decoration : none ;
    }

    .draggable {
        -webkit-user-select : text ;
        -moz-user-select : text ;
        -ms-user-select : text ;
        user-select : text ;
    }

` ;

export { 
    GlobalStyle,
    Container
} ;
