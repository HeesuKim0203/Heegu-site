import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset}

    body { 
        width : 100% ;
        background-color : #FAFAFA ; 
    }

    .wrap {
        width : 1194px ;
        margin : 0 auto ;

        background-color : #eeeeee ;
    }

    a {
        color : black ;
        text-decoration : none ;
    }

` ;

export default GlobalStyle
