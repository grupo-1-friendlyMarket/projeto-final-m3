import styled from 'styled-components'

export const ContainerCard = styled.div`
    width: 100%;
    min-width: 200px;
    max-width: 345px;
    padding: 15px;
    display: flex;
    flex-direction: column;

    .cardImg{
        width: 100%;
    }
    
    .containerInfo{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }
    
    .containerBtns{
        display: flex;
        width: 100%;
        justify-content: space-evenly;
    }
`

