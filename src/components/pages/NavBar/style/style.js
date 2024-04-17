import styled from "styled-components";


export const MainNavBarContainer = styled.div`

   .content {
        background: rgb(247, 215, 126);
        border: 0.5px solid #ccc;
        display: flex;
        box-shadow: 4px 8px 15px 0 rgba(0, 0, 0, 0.14);
   }

   .drop-down {
     position: fixed;
     top: 20px;
     left: 6%;
     right: 6%;
     border-top-right-radius: 40px;
     border-bottom-right-radius: 40px;
   }

   .content-cart-div {
    background: #fff;
       flex-basis: 70%;
       border-top-right-radius: 40px;
       border-bottom-right-radius: 40px;
       padding: 12px;
       display: flex;
       ul {
          display: flex;
          background: #fff;
          margin: 8px;
          padding: 0;
    
          .content-div {
            width: 100px;
            display: flex;
            list-style: none;
            margin-right: 28px;
    
            .icon-img {
                fill: grey;
                position: relative;
                top: 2px;
                left: 12px;
            }
          }
       }
       
       .input-search {
          padding: 10px 16px 16px 20px;
          border: 0.5px solid #ccc;
          width: 50%;
          text-align: center;
          border-radius: 40px;
          margin-right: 12px;
          background-color: #fff;
          box-shadow: 2px 2px 8px 0 rgba(0,0,0,0.1);
       }
   }

   .checkout-code {
        flex-basis: 30%;
        text-align: center;

        .checkout-btn {
            width: 50%;
            background: #000;
            padding: 12px;
            color: #fff;
            border: none;
            border-radius: 12px;
            margin-top: 12px;
        }
   }
`;