import styled from "styled-components";

export type legendColors = {
  color:string;
}

export const Li = styled.li<legendColors>`


padding-left: 0; 
@media (max-width: 750px) {
  padding-left: 10%;
}
::before {
  content: "•"; /* Insert content that looks like bullets */
  @media (max-width: 750px) {
    font-size:12vw;
    vertical-align:middle;
  }
  font-size:4vw;
  padding-right: 4px;
  vertical-align:middle;
  color: ${props=>props.color}; /* Or a color you prefer */
}

.btn{
  background: none!important;
  border: none;
  font-size:.84vw;
  :hover{
    color: rgb(8, 165, 238);
  }
}
`

export const Legend = styled.div`
  padding: 0;
  margin: 0;
  background-color: rgb(212, 233, 239);
  border-radius: 10px;
  color: rgb(65, 184, 238);
  .title{
    text-align: center;
    font-size: 20px;
  }
  .values{
    list-style: none;
    vertical-align: middle;
  }
  .btn-mob{
    background: none!important;
    border: none;
    font-size: 4vw;
    :hover{
      color: rgb(8, 165, 238);
    }
  }

  .fonts{
    text-align: center;
    font-size: 15px;
  }
`;
