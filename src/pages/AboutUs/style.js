import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .aboutusContainer{
        display: flex;
        justify-content: space-between;
        width: 75vw;
        height: 75vh;
    }

    .left{
        width: 35vw;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 70px;

        span{
            color: grey;
        }
    }

    .right{
        width: 30vw;
        margin-top: 90px;

        p{
            margin-top: 30px;
            font-weight: 600;
        }
    }

    .apresentation{
        width: 75vw;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        span{
            color: grey;
            font-weight: 600;
        }
    }

    .cardContainer{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 40px;
    }

    .card{
        width: 36vw;
        height: 200px;
        display: flex;
        
        picture{
            width: 120px;
            height: 120px;
            img{
                width: 120px;
                height: 120px;
                border-radius: 100%;
            }
        }

        .textContainer{
            width: 65%;
            margin-left: 10px;
        }


    }
`