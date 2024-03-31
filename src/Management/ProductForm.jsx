import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './ProductForm.css';
import DOMPurify from 'dompurify';

const ProductForm = () => {
  // Validate name and price field.
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Please enter a name for your new product')
      .matches(/^[a-zA-Z0-9\s]+$/, 'Only letters, numbers, and spaces are allowed'),
    price: Yup.number()
      .typeError('Please enter a valid price') 
      .required('Please enter a price for your new product')
      .positive('Price must be positive')
  });

    // Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    // Sanitize user input before sending it to the server
    const sanitizedValues = {
      name: DOMPurify.sanitize(values.name),
      price: DOMPurify.sanitize(values.price),
    };

    try {
      // Execute parameterized query
      await axios.post('/api/products', sanitizedValues);
      console.log('Product added successfully');
      resetForm();
    } catch (error) {
      console.error('Error adding product:', error);
    }
    setSubmitting(false);
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', price: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <label>Name:</label>
            <Field
              type="text" name="name" className="form-control"
              onChange={(e) => {
                const { value } = e.target;
                const sanitizedValue = value.replace(/[^a-zA-Z0-9\s]/g, ''); // Remove special characters
                setFieldValue('name', sanitizedValue); // Update Formik's value for 'name'
              }}
            />
            <ErrorMessage name="name" component="div" className="error" />
            <label>Price:</label>
            <Field type="text" name="price" className="form-control" />
            <ErrorMessage name="price" component="div" className="error" />
            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? 'Adding...' : 'Add Product'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductForm;
