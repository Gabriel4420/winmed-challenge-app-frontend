import styled from 'styled-components'

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #d9d9d990;
  margin-top: 0px;
  margin-bottom: 0px !important;
  padding: 10px;

  .form-control-group {
    display: flex;
    width: 100%;
  }

  .form-control-group input {
    padding: 5px;
    border-radius: 5px;
    outline: none;
    border: none;
    box-shadow: 5px 4px 5px -3px rgba(0, 0, 0, 0.64);
  }

  .col {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    margin: 10px;
    width: 100%;
  }

  .form-control-group label {
    margin-bottom: 5px;
  }

  .btn-cadastrar {
    padding: 10px;
    border: none;
    background-color: blue;
    color: white;
    cursor: pointer;
  }

  @media (min-width: 280px) and (max-width: 480px) {
    margin-top: 0;
    margin-bottom: 0;
    .form-control-group {
      flex-direction: column;
    }

    .form-control-group input {
      width: 90%;
    }

    .btn-cadastrar {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 40px;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin-top: 0;
    margin-bottom: 0;
   

    .form-control-group input {
      width: 90%;
    }

    .btn-cadastrar {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 40px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
  }
`
