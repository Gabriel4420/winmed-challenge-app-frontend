import styled from 'styled-components'

export const TableDoc = styled.table`
  width: 100%;
  border-collapse: collapse;
  display: block;
  overflow-x: auto;
  white-space: nowrap;

  thead {
    height: 40px;
    background-color: ${(props) => props.theme.colors['primary+1']};
  }

  th {
    text-align: center;
  }
  tr {
    height: 40px;
  }
  tr:nth-child(even) {
    background-color: ${(props) => props.theme.colors['dark']};
    color: white;
  }
  td {
    max-width: 160px;
    height: 40px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 5px;
    padding-right: 5px;
  }
`