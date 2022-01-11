import { useState, useEffect } from 'react'
import api from '../../services/api'
import { parseCookies } from 'nookies'
import { TableDoc } from './style'
const TableDoctor = () => {
  const [data, setData] = useState([])
  const cookies = parseCookies()
  useEffect(() => {
    api
      .get('/doctors', {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((resp) => setData(resp.data.doctors))
      .catch((err) => console.log(err))
  }, [cookies])

  return (
    <TableDoc>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Sexo</th>
          <th>Idade</th>
          <th>CPF</th>
          <th>RG</th>
          <th>Telefone</th>
          <th>CEP</th>
          <th>Cidade</th>
          <th>Numero</th>
          <th>Especialidade</th>
          <th>CRM</th>
          
        </tr>
      </thead>

      <tbody>
        {data.map((data, key) => (
          <tr key={key}>
            <td>{data.name}</td>
            <td>{data.sex}</td>
            <td>{data.age}</td>
            <td>{data.cpf}</td>
            <td>{data.rg}</td>
            <td>{data.phone}</td>
            <td>{data.cep}</td>
            <td>{data.city}</td>
            <td>{data.number}</td>
            <td>{data.speciality}</td>
            <td>{data.crm}</td>
            
          </tr>
        ))}
      </tbody>
    </TableDoc>
  )
}

export default TableDoctor
