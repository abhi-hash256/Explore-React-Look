import styled from "styled-components";

export const MainSection2DivContainer = styled.div`
   margin-top: 80px;
   display: flex;
   align-items: center;
   border: 0.5px solid #ccc;
   box-shadow: 4px 8px 15px 0 rgba(0, 0, 0, 0.14);
   border-radius: 8px;

   .jokes-heading-section {
     margin: 12px;
     width: 40%;

     img {
        width: 80%;
        border-radius: 12px;
     }
   }

   .jokes-content-section {
    padding: 12px;
    text-align: center;
    width: 60%;
     p {
        background: #fff3f3;
        padding: 18px;
        border-radius: 8px;
        box-shadow: 4px 8px 15px 0 rgba(0, 0, 0, 0.14);
     }

     .get-joke-btn {
        width: 20%;
        background: rgb(0, 159, 105);
        padding: 12px;
        color: #fff;
        border: none;
        border-radius: 12px;
        margin: 12px;
     }

     .multiple-jokes {
        background: red;
     }
   }
`