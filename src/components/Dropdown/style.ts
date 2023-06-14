import styled from "styled-components";


export const Li = styled.li`

margin-bottom:5px;
font-size:.8em;
text-align: center;
padding-bottom:15px;
a:hover {
  color:rgb(4, 107, 224);
  text-decoration: none;
}


.btn{
  background: none!important;
  border: none;
  font-size:1.1vw;
  @media (max-width: 750px) {
    font-size: 1.1em;
    padding-bottom: 3%;
  }
  color:  rgb(4, 107, 224);

  :hover{
    color: rgb(8, 165, 238);
    border:none;
  }
}

`
