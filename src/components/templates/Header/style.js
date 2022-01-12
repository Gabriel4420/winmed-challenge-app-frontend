import styled from 'styled-components'

export const Container = styled.div`
  background-color: #d9d9d990;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .input-avatar-area {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
  }
  .avatar-area {
    display: flex;
    flex-direction: row;
    width: 20%;
    padding: 10px;
  }
  .avatar-area img {
    display: flex;
    flex-direction: row;
    width: 80%;
    padding: 0px;
  }

  .texts-Area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .texts-Area h4,
  .texts-Area h3 {
    margin: 0;
    color: #fff;
  }

  @media (min-width: 280px) and (max-width: 480px) {
    padding: 0 !important;
    .input-avatar-area {
      align-items: center;
      justify-content: center;
      margin-right: 40px;
    }
    .avatar-area {
      display: flex;
      flex-direction: row;
      width: 30%;
      padding: 0px;
    }

    .avatar-area img {
      display: flex;
      flex-direction: column;
      width: 80%;
    }

    .texts-Area {
      font-size: 10px;
      margin-right: 10px;
    }
  }

  @media (min-width: 481px) and (max-width: 878px) {
    padding: 0 !important;
    .input-avatar-area {
      align-items: center;
      justify-content: center;
      margin-right: 40px;
    }
    .avatar-area {
      display: flex;
      flex-direction: row;
      width: 30%;
      padding: 0px;
    }

    .avatar-area img {
      display: flex;
      flex-direction: column;
      width: 80%;
    }

    .texts-Area {
      font-size: 14px;
      margin-right: 10px;
    }
  }
`
export const Logo = styled.img`
  height: 40px;
  width: auto;
  @media (min-width: 280px) and (max-width: 480px) {
    height: 20px;
    margin-left: 10px;
  }

  @media (min-width: 481px) and (max-width: 897px) {
    height: 30px;
    margin-left: 10px;
  }
`
export const Avatar = styled.img`
  height: 70px;
  width: 70%;
  border-radius: 25%;
  @media (min-width: 280px) and (max-width: 480px) {
    height: 30px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    height: 50px;
  }
`

export const SearchInput = styled.input`
  border: 0;
  border-radius: 25px;
  width: ${(props) => (props.active ? '300' : 0)}px;
  transition: all ease 0.8s;
  height: 50px;
  background-color: #bbb;
  background-image: url('./search.png');
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: 10px center;
  outline: 0;
  padding-left: 50px;
  cursor: pointer;
  font-size: 20px;

  &:focus {
    cursor: text;
  }
  @media (min-width: 280px) and (max-width: 370px) {
    display: none;
  }
  @media (min-width: 370px) and (max-width: 390px) {
    height: 20px;
    width: ${(props) => (props.active ? '100' : 0)}px;
    background-size: 15px;
    background-position: 15px center;
    font-size: 14px;
  }
  @media (min-width: 390px) and (max-width: 480px) {
    height: 20px;
    width: ${(props) => (props.active ? '130' : 0)}px;
    background-size: 15px;
    background-position: 15px center;
    font-size: 14px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    height: 40px;
    width: ${(props) => (props.active ? '160' : 0)}px;
    background-size: 15px;
    background-position: 15px center;
    font-size: 14px;
    margin-right: 30px;
  }
`
