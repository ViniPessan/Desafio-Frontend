import styled from 'styled-components';



export const ContainerHome = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 2rem;

  
  
`

export const ContentHome = styled.div`
    width: 80%;
    height: 8rem;
    background: #FFFFFF;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 3.4rem;

    @media(max-width: 768px){
        padding: 2rem 2.5rem;
        p {
        font-size: 0.8rem;
    }

    @media(max-width: 640px){
        padding: 2rem 2rem;

        p {
        font-size: 0.7rem;
    }
    }
   }

   @media(max-width: 560px){

    padding: 2rem 1.5rem;
    width: 85%;
        p {
        font-size: 0.6rem;
    }
    }

    @media(max-width: 425px){

        padding: 2rem 1rem;
        width: 90%;
        p {
        font-size: 0.6rem;
}
}
   
`


export const BoxNameEnterprise = styled.div`
    display: flex;
    align-items: space-between;
    justify-content: space-between;
    margin-bottom: 1rem;

    span {
        font-family: Inter, sans-serif;
        font-weight: 700;
        font-size: 1.3rem;
        color: #302E45;
        margin-right: 1.2rem;
    }

    img {
        cursor: pointer;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }

        & + img {
            margin-left: 0.75rem;
        }
    }

    @media(max-width: 768px){
        span {
        font-size: 1.1rem;
        margin-right: 0.8rem;
    }

    @media(max-width: 640px){
        span {
        font-size: 1rem;
        margin-right: 0.5rem;
    }
    }
}

    @media(max-width: 560px){
        span {
        font-size: 0.9rem;
        margin-right: 0.3rem;
    }
    }

    @media(max-width: 425px){
        span {
        font-size: 0.9rem;
        margin-right: 0.2rem;
    }
    }
    `


export const ContentLupa = styled.div`
    width: 80%;
    height: 2.5rem;
    border-bottom: 2px solid #BBB8D9;



    input {
        border: none;
        width: 90%;
        height: 100%;
        margin-left: 5px;
        right: 0;
        padding-left: 2.5rem; 
    }

    div {
        height: 100%;
        display: flex;
        align-items: flex-end;
        cursor: pointer;

        img {
            margin-right: 0.5rem;
        }

        p {
            font-family: Inter, sans-serif;
            font-weight: 400;
            font-size: 1rem;
            color: #302E45;
        }
    }

    
`

export const ContentStatus = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 25px;
        width: fit-content;
        padding: 5px 15px;
        border: 1px solid #BBB8D9;
        border-radius: 25px;

        font-family: Inter, sans-serif;
        font-weight: 300;
        font-size: 0.8rem;
        color: #302E45;

        & + div {
            margin-left: 15px;
        }
    }

    span{
        display: flex;
        padding-top: 10px;
    }

    img {
        cursor: pointer;
        padding: 5px;  
    }

    @media(max-width: 768px){
        div {
        height: 20px;
        width: fit-content;
        padding: 10px 5px;
        font-size: 0.6rem;

        & + div {
            margin-left: 8px;
        }

        
       
   }
   }

   @media(max-width: 590px){
        div {
        height: 20px;
        width: fit-content;
        padding: 10px 3px;
        font-size: 0.5rem;

        & + div {
            margin-left: 5px;
        }
   }
   }

   @media(max-width: 560px){
        div {
        height: 20px;
        width: fit-content;
        padding: 10px 3px;
        font-size: 0.5rem;

        & + div {
            margin-left: 5px;
        }
   }
   }

   @media(max-width: 425px){
        div {
        height: 20px;
        width: fit-content;
        padding: 10px 10px;
        font-size: 0.5rem;

        & + div {
            margin-left: 5px;
        }
   }
   }
`

export const ContainertLupa = styled.div`
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    margin-bottom: 1rem;

`