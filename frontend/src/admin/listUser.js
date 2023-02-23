import React from 'react'
import Table from 'react-bootstrap/Table';

const ListUser = () => {
  return (
    <div>
<Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>#</th>
          <th>username</th>
          <th>email</th>
          <th>last active</th>
          <th>book count</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto@mdo</td>
          <td>15 may 2023</td>
          <td>15</td>
          <td>good</td>
        </tr>
        
         
      </tbody>
    </Table>

    </div>
  )
}

export default ListUser