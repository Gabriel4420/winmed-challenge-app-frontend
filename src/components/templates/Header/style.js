import styled from 'styled-components'

export const Container = styled.div`
  background-color: #d9d9d990;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

  .texts-Area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: no-wrap;
    line-height: 0.1px;
    width: 100%;
  }
`
export const Logo = styled.img`
  height: 40px;
  width: auto;
`
export const Avatar = styled.img`
  height: 70px;
  width: 70%;
  border-radius: 25%;
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
`
