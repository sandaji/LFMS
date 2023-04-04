import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  saveProduct,
  listProducts,
  deleteProduct,
} from '../actions/productActions';
import { Button, Form,Table,Row } from 'react-bootstrap';
import {FaTrash,FaEdit} from 'react-icons/fa';
import {MdOutlineKeyboardBackspace,} from 'react-icons/md';
import {GrUpdate,} from 'react-icons/gr';



const EditBooks=(props)=> {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [numReviews, setNumReviews] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState();

  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList || {};

  const productSave = useSelector((state) => state.productSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave || {};

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = productDelete || {};
  const dispatch = useDispatch();

  useEffect(() => {
    if (successSave) {
      setModalVisible(false);
    }
    dispatch(listProducts());
    return () => {
      //
    };
  }, [successSave,dispatch, successDelete]);

  const openModal = (product) => {
    setModalVisible(true);
    setId(product._id);
    setTitle(product.title);
    setAuthor(product.author);
    setDescription(product.description);
    setCoverImage(product.coverImage);
    setNumReviews(product.numReviews);
    setCategory(product.category);
    setCountInStock(product.countInStock);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveProduct({
        _id: id,
        title,
        author,
        coverImage,
        numReviews,
        category,
        countInStock,
        description,
      })
    );
  };
  const deleteHandler = (product) => {
    dispatch(deleteProduct(product._id));
  };
  const uploadFileHandler = (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('coverImage', file);
    setUploading(true);
    axios
      .post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        setCoverImage(response.data);
        setUploading(false);
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
  };
  return (
    <Row className="content content-margined">
    
        <h3>Products</h3>

     
      {modalVisible && (
          <Form onSubmit={submitHandler}>
            
                <h2>Edit book Details</h2>
                {loadingSave && <div>Loading...</div>}
                {errorSave && <div>{errorSave}</div>}
           

              <Form.Group>
                <Form.Label htmlFor="title">title</Form.Label>
                <Form.Control
                  type="text"
                  title="title"
                  value={title}
                  id="title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="author">author</Form.Label>
                <Form.Control
                  type="text"
                  title="author"
                  value={author}
                  id="author"
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="coverImage">coverImage</Form.Label>
                <Form.Control
                  type="text"
                  title="coverImage"
                  value={coverImage}
                  id="coverImage"
                  onChange={(e) => setCoverImage(e.target.value)}
                />
                <Form.Control type="file" onChange={uploadFileHandler}/>
                {uploading && <div>Uploading...</div>}
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="numReviews">numReviews</Form.Label>
                <Form.Control
                  type="text"
                  title="numReviews"
                  value={numReviews}
                  id="numReviews"
                  onChange={(e) => setNumReviews(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="countInStock">CountInStock</Form.Label>
                <Form.Control
                  type="text"
                  title="countInStock"
                  value={countInStock}
                  id="countInStock"
                  onChange={(e) => setCountInStock(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="title">Category</Form.Label>
                <Form.Control
                  type="text"
                  title="category"
                  value={category}
                  id="category"
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="description">Description</Form.Label>
                <Form.Control
                  title="description"
                  value={description}
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Button type="submit" variant="success">
                  {id ? <GrUpdate  variant="success"/> : 'Create'}
                </Button>
              </Form.Group>

              <Form.Group>
                <Button
                  type="button"
                  onClick={() => setModalVisible(false)}
                  className="button secondary"
                >
                 <MdOutlineKeyboardBackspace />
                </Button>
             </Form.Group>
           
          </Form>
      
      )}

      <div className="product-list">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>ID</th>
              <th>title</th>
              <th>author</th>
              <th>Category</th>
              <th>countInStock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.count}</td>
                <td>{product._id}</td>
                <td>{product.title}</td>
                <td>{product.author}</td>
                <td>{product.category}</td>
                <td>{product.countInStock}</td>
                <td className='d-flex justify-content-between '>
                  <Button onClick={() => openModal(product)}>
                    <FaEdit />
                  </Button>{' '}
                  <Button
                    className="button" variant="danger"
                    onClick={() => deleteHandler(product)}
                  >
                   <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Row>
  );
}
export default EditBooks;
