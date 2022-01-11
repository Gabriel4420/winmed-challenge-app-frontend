import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-image: linear-gradient(#54b5b7a8, #8c73c7b6), url('./bg.jpeg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  h1 {
    font-size: 50px;
    font-weight: 200;
    text-shadow: 0.05em 0.05em 0.05em #333;
    color: white;
  }
  .form form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: 10px;
    background-image: linear-gradient(#296364, #413262);
    padding: 50px;
    border-radius: 40px;
  }
  .form input {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 35px;
    margin-bottom: 20px;
    color: #333;
    font-weight: bold;
    width: 82%;
    outline: 0;
    border: none;
    border-radius: 30px;
    padding-left: 20px;
    font-size: 20px;
    &::placeholder {
      color: #333;
      font-weight: bold;
      text-shadow: none;
    }
    box-shadow: 5px 4px 5px -3px rgba(0, 0, 0, 0.64);
  }
  .form button {
    background-color: #54b5b7;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 20px;
    padding: 15px;
    margin-bottom: 39px;
    width: 20%;
    font-weight: bold;
  }
  .form button:hover {
    background-color: #276869;
  }
  a {
    font-weight: bold;
    font-size: 24px;
  }
  a:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  .showPassword2 {
    padding: 10px !important;
    border-radius: 100px;
    width: 10% !important;
    cursor: pointer;
    margin-bottom: 25px !important;
  }
`
