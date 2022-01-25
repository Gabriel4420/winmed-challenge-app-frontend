import { useState, useEffect } from 'react'
import api from '../../services/api'
import { parseCookies } from 'nookies'
import { TableDoc } from './style'
const TableDoctor = () => {
  const [data, setData] = useState([])
  const [id, setID] = useState('')

  const cookies = parseCookies()

  useEffect(() => {
    api
      .get('/doctors', {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((resp) => {
        setData(resp.data.doctors)
      })
      .catch((err) => console.log(err))
  }, [cookies])
  const handleDelete = async (id) => {
    try {
      await api.delete(`delete_doctor/${id}`, {
        data: {
          name: id,
        },
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      })
    } catch (error) {
      console.log(error)
    }
  }

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
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {data.map((data, key) => (
          <tr key={key}>
            <td key={key}>{data.name}</td>
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
            <td>
              <button type="button" onClick={() => handleDelete(data.name)}>
                &#x26A0; Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </TableDoc>
  )
}

export default TableDoctor
