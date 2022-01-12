import styled from 'styled-components'

const InputPassword = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 35px;
  margin-bottom: 20px;
  color: #333;
  font-weight: bold;
  max-width: 70% !important;
  outline: 0;
  border: none;
  border-radius: 30px;
  padding-left: 20px;
  font-size: 20px;
  margin-right: 10px;
  &::placeholder {
    color: #333;
    font-weight: 200;
    text-shadow: none;
  }
  box-shadow: 5px 4px 5px -3px rgba(0, 0, 0, 0.64);

  @media (min-width: 280px) and (max-width: 480px) {
    max-width: 100% !important;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    .form form {
      width: 90%;
      margin: 5px;
    }

    .form input {
      width: 82%;
      line-height: 30px;
      font-size: 18px;
      margin-bottom: 5px;
      margin-top: 15px;
    }

    .showPassword {
      padding: 5px !important;
      width: 10% !important;
      margin-top: 10px !important;
      margin-bottom: 0px !important;
    }

    .form button {
      width: 50%;
      padding: 5px;
      font-size: 18px;
      width: 50%;
      margin-top: 20px;
    }

    .form input::placeholder {
      font-size: 18px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .form form {
      width: 90%;
      margin: 5px;
    }

    .form input {
      width: 82%;
      line-height: 30px;
      font-size: 18px;
      margin-bottom: 5px;
      margin-top: 15px;
    }

    .showPassword {
      padding: 5px !important;
      width: 10% !important;
      margin-top: 10px !important;
      margin-bottom: 0px !important;
    }

    .form button {
      width: 50%;
      padding: 5px;
      font-size: 18px;
      width: 50%;
      margin-top: 20px;
    }

    .form input::placeholder {
      font-size: 18px;
    }
  }
`

export default InputPassword
