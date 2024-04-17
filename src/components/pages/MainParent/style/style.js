import styled from "styled-components";


export const MainParentContainer = styled.div`
   margin: 60px;

   .option-container {
        align-items: center;
        justify-content: space-between;
        display: flex;
   }

   .sidecontainer {
      width: 40%;
      padding: 30px;
      text-align: center;
      border-radius: 0.5 solid #ccc;
      box-shadow: 4px 8px 15px 0 rgba(0, 0, 0, 0.14);
      border-radius: 12px;
      
      .checkout-btn {
        width: 70%;
        background: #000;
        padding: 12px;
        color: #fff;
        border: none;
        border-radius: 12px;
        margin: 8px 12px;
        cursor: pointer;
     }

     .active-btn {
        border: 1px solid green;
        background: #fff;
        color: #000;
        pointer-events: none;
        cursor: not-allowed;
     }
   }

   .image-container {
      width: 60%;
      text-align: center;
      margin-left: 22px;

      img {
         width: 100%;
      }
   }

   .no-data-found {
      width: 80%;
      margin: 30px auto;
      padding: 18px;
      text-align: center;
      background: #f6f6f6;
      border-radius: 12px;
   }
`;