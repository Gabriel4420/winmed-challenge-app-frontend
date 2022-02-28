import { useState, useEffect } from 'react'
import api from '../../services/api'
import { parseCookies } from 'nookies'
import { TableCli } from './style'
const TableClinic = () => {
  const [data, setData] = useState([])
  const cookies = parseCookies()

  useEffect(() => {
    api
      .get('/clinics', {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((resp) => setData(resp.data.Clinics))
      .catch((err) => console.log(err))
  }, [cookies])

  const handleDelete = async (id) => {
    try {
      await api.delete(`delete_clinic/${id}`, {
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
    <TableCli>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Telefone</th>
          <th>Endereço</th>
          <th>Cep</th>
          <th>Cidade</th>
          <th>Numero</th>
          <th>Deletar</th>
        </tr>
      </thead>

      <tbody>
        {data.map((data, key) => (
          <tr key={key}>
            <td>{data.name}</td>
            <td>{data.phone}</td>
            <td>{data.address}</td>
            <td>{data.cep}</td>
            <td>{data.city}</td>
            <td>{data.number}</td>
            <td>
              <button type="button" onClick={() => handleDelete(data.name)}>
                &#x26A0; Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </TableCli>
  )
}

export default TableClinic
