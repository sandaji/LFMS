import React from 'react'
import { Table } from 'react-bootstrap'
import {FaTrash,FaEdit} from 'react-icons/fa'

const ListBooks = () => {
  return (
    <div>    
    <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>ISNB</th>
              <th>Stock</th>
              <th>Count</th>
              <th>image</th>
              <th>brand</th>
              <th>category</th>
              <th>rating</th>
              <th>numReviews</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>12323443</td>
              <td>15</td>
              <td>9</td>
              <td>images/7.jpg</td>
              <td>programming</td>
              <td>python</td>
              <td>3.5</td>
              <td>35</td>
              <td className='d-flex align-items-center justify-content-around'>
                <FaEdit color='blue' /><FaTrash color='red'/>
                </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>12323443</td>
              <td>15</td>
              <td>9</td>
              <td>images/7.jpg</td>
              <td>programming</td>
              <td>python</td>
              <td>3.5</td>
              <td>35</td>
              <td className='d-flex align-items-center justify-content-around'><FaEdit color='blue' /><FaTrash color='red'/></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>12323443</td>
              <td>15</td>
              <td>9</td>
              <td>images/7.jpg</td>
              <td>programming</td>
              <td>python</td>
              <td>3.5</td>
              <td>35</td>
              <td className='d-flex align-items-center justify-content-around'><FaEdit color='blue' /><FaTrash color='red'/></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>12323443</td>
              <td>15</td>
              <td>9</td>
              <td>images/7.jpg</td>
              <td>programming</td>
              <td>python</td>
              <td>3.5</td>
              <td>35</td>
              <td className='d-flex align-items-center justify-content-around'><FaEdit color='blue' /><FaTrash color='red'/></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>12323443</td>
              <td>15</td>
              <td>9</td>
              <td>images/7.jpg</td>
              <td>programming</td>
              <td>python</td>
              <td>3.5</td>
              <td>35</td>
              <td className='d-flex align-items-center justify-content-around'><FaEdit color='blue' /><FaTrash color='red'/></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>12323443</td>
              <td>15</td>
              <td>9</td>
              <td>images/7.jpg</td>
              <td>programming</td>
              <td>python</td>
              <td>3.5</td>
              <td>35</td>
              <td className='d-flex align-items-center justify-content-around'><FaEdit color='blue' /><FaTrash color='red'/></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>12323443</td>
              <td>15</td>
              <td>9</td>
              <td>images/7.jpg</td>
              <td>programming</td>
              <td>python</td>
              <td>3.5</td>
              <td>35</td>
              <td className='d-flex align-items-center justify-content-around'><FaEdit color='blue' /><FaTrash color='red'/></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>12323443</td>
              <td>15</td>
              <td>9</td>
              <td>images/7.jpg</td>
              <td>programming</td>
              <td>python</td>
              <td>3.5</td>
              <td>35</td>
              <td className='d-flex align-items-center justify-content-around'><FaEdit color='blue' /><FaTrash color='red'/></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>12323443</td>
              <td>15</td>
              <td>9</td>
              <td>images/7.jpg</td>
              <td>programming</td>
              <td>python</td>
              <td>3.5</td>
              <td>35</td>
              <td className='d-flex align-items-center justify-content-around'><FaEdit color='blue' /><FaTrash color='red'/></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>12323443</td>
              <td>15</td>
              <td>9</td>
              <td>images/7.jpg</td>
              <td>programming</td>
              <td>python</td>
              <td>3.5</td>
              <td>35</td>
              <td className='d-flex align-items-center justify-content-around'><FaEdit color='blue' /><FaTrash color='red'/></td>
            </tr>
            
             
          </tbody>
        </Table></div>
  )
}

export default ListBooks