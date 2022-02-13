import styled from "styled-components";

export const RentalEstimateContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 45px auto 70px;
text-align: center;
font-size: 14px;
line-height: 25px;
color: #8D8D8D;

`
export const RentalText = styled.p`
padding: 0 80px;
@media(max-width:720px){
  padding: 0;
}
`


export const ContainerEstimitePrice = styled.div`
display: flex;
padding: 63px 0;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;

h1 {
font-size: 20px;
color: #F95258;
line-height: 24px;
text-transform:uppercase;
}

h3 { 
font-size: 50px;
line-height: 55px;
color: #343434;
padding: 20px 0;
dispaly:inline-block
}
span{
border: 2px solid #F95258;
border-radius: 10px;
padding: 10px;

}

`