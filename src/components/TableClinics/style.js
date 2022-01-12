import styled from 'styled-components'

export const TableCli = styled.table`
  width: 100%;
  border-collapse: collapse;
  display: block;
  overflow-x: auto;
  thead {
    height: 40px;
    background-color: #d9d9d990;
  }
  th {
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    color: #276869;
  }
  tr {
    height: 40px;
    font-weight: bold;
    color: #f2f2f2;
  }
  tr:nth-child(even) {
    background-color: #d9d9d990;
    color: #276869;
    font-weight: bold;
  }
  td {
    max-width: 100%;
    height: 40px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 5px;
    padding-right: 5px;
  }
`
