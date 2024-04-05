import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ProductForm.css';
import DOMPurify from 'dompurify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDollarSign, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const ProductForm = () => {
  // Define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Please enter a name for your new product')
      .matches(/^[a-zA-Z0-9\s]+$/, 'Only letters, numbers, and spaces are allowed'),
    price: Yup.number()
      .typeError('Please enter a valid price')
      .required('Please enter a price for your new product')
      .positive('Price must be positive'),
    description: Yup.string().required('Please enter a product description'),
    stock: Yup.number()
      .required('Please enter product stock')
      .positive('Stock must be positive')
      .integer('Stock must be an integer'),
    image1: Yup.string().required('Please provide the first image path'),
    category_id: Yup.number()
      .required('Please select a category ID')
      .positive('Category ID must be positive')
      .integer('Category ID must be an integer'),
  });

  // Initial form values
  const initialValues = {
    name: '',
    price: '',
    description: '',
    stock: '',
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    category_id: '',
  };

  // Handle form submission
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Sanitize user input before sending it to the server
    const sanitizedValues = {
      name: DOMPurify.sanitize(values.name),
      price: DOMPurify.sanitize(values.price),
      description: DOMPurify.sanitize(values.description),
      stock: DOMPurify.sanitize(values.stock),
      image1: DOMPurify.sanitize(values.image1),
      image2: DOMPurify.sanitize(values.image2),
      image3: DOMPurify.sanitize(values.image3),
      image4: DOMPurify.sanitize(values.image4),
      category_id: DOMPurify.sanitize(values.category_id),
    };

    // Log the values to the console before the network request
    console.log('Sanitized values being sent to the server:', sanitizedValues);

    // Define the fetch options
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sanitizedValues),
    };

    // Use fetch to send the post request
    fetch('http://35.212.170.89:5000/api/product/create.php', fetchOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Server responded with an error: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Server response data:', data);
        if (data.message) {
          console.log('Product added successfully:', data.message);
        } else {
          throw new Error('Invalid server response');
        }
        resetForm();
      })
      .catch(error => {
        console.error('Error adding product:', error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <main className="product-form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">
                <FontAwesomeIcon icon={faUser} /> Name:
              </label>
              <Field type="text"  placeholder="Enter new product name"  name="name" className="form-control" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="price">
                <FontAwesomeIcon icon={faDollarSign} /> Price:
              </label>
              <Field type="number" name="price" placeholder="Enter new product price" className="form-control" />
              <ErrorMessage name="price" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="stock">Stock:</label>
              <Field type="number" name="stock" placeholder="Enter new stock quantity " className="form-control" />
              <ErrorMessage name="stock" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="image1">Image 1:</label>
              <Field type="text" name="image1" placeholder="Enter new image 1" className="form-control" />
              <ErrorMessage name="image1" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="image2">Image 2:</label>
              <Field type="text" name="image2" placeholder="Enter new image 2 (optional)"  className="form-control" />
              <ErrorMessage name="image2" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="image3">Image 3:</label>
              <Field type="text" name="image3" placeholder="Enter new image 3 (optional)"  className="form-control" />
              <ErrorMessage name="image3" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="image4">Image 4:</label>
              <Field type="text" name="image4" placeholder="Enter new image 4 (optional)"  className="form-control" />
              <ErrorMessage name="image4" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="category_id">Category ID:</label>
              <Field type="number" name="category_id" placeholder="Enter new value category id"  className="form-control" />
              <ErrorMessage name="category_id" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="description">
                <FontAwesomeIcon icon={faInfoCircle} /> Description:
              </label>
              <Field type="text" name="description"  placeholder="Enter new product description"  className="form-control" />
              <ErrorMessage name="description" component="div" className="error" />
            </div>

            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? 'Adding...' : 'Add Product'}
            </button>
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default ProductForm;
