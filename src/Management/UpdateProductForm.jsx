import React, { useState } from 'react';
import * as Yup from 'yup';
import './ProductForm.css'; // Make sure you have the correct path to your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDollarSign, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const UpdateProductForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
    sold: '',
    description: '',
    stock: '',
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    category_id: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation Schema
  const validationSchema = Yup.object().shape({
    // name: Yup.string()
    //   .required('Please enter a name for your product')
    //   .matches(/^[a-zA-Z0-9\s]+$/, 'Only letters, numbers, and spaces are allowed'),
    price: Yup.number()
      .typeError('Please enter a valid price')
      .required('Please enter a price for your product')
      .positive('Price must be positive'),
    stock: Yup.number()
      .required('Please enter product stock')
      .positive('Stock must be positive')
      .integer('Stock must be an integer'),
    image1: Yup.string().required('Please provide the first image path')
    // category_id: Yup.number()
    //   .required('Please select a category ID')
    //   .positive('Category ID must be positive')
    //   .integer('Category ID must be an integer'),
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

    // Category mapping from name to ID
    const categoryMap = {
      'Limited': 1,
      'Retail': 2,
      // Add other category mappings here
    };

  const fetchProductDetails = () => {
    // Fetch product details using formData.id
    const productId = formData.id;
    if (!productId) {
      console.log("Product ID is required to fetch details.");
      return;
    }
    console.log(`Fetching details for product ID: ${productId}`);

    fetch(`http://35.212.170.89:5000/api/product/read_single.php?id=${productId}`)
    .then(response => response.json())
    .then(data => {
      if (data) {
        console.log('Fetched product data:', data);
        setFormData({
          ...formData,
          name: data.name || '',
          price: data.price || '',
          sold: data.sold || '',
          description: data.description || '',
          stock: data.stock.toString() || '',
          image1: data.images.img1 || '',
          image2: data.images.img2 || '',
          image3: data.images.img3 || '',
          image4: data.images.img4 || '',
          category_id: categoryMap[data.category_name] || '', // Convert the category name to ID
        });
      }
    })
    .catch(error => console.error('Fetching product details failed', error));
};



const handleSubmit = async (event) => {
  event.preventDefault();
  setIsSubmitting(true);



// Convert category_id to a number if it's still a string
const categoryId = typeof formData.category_id === 'string' ? 
categoryMap[formData.category_id] || 0 : 
formData.category_id;
  
  // Create a new object that will be sent to the server, including converting values to the expected types
  const submitData = {
    id: parseInt(formData.id), // Converting id to a number
    name: formData.name,
    price: parseFloat(formData.price), // Converting price to a float
    description: formData.description,
    stock: parseInt(formData.stock, 10), // Converting stock to a number
    sold: parseInt(formData.sold, 10), // You might need this field, as your server endpoint might expect it
    image1: formData.image1,
    image2: formData.image2,
    image3: formData.image3,
    image4: formData.image4,
    category_id: categoryId// Converting category_id to a number
  };

  console.log('Submitting form data:', submitData);

  try {
    // Validate form data
    await validationSchema.validate(submitData, { abortEarly: false });

    // If validation passes, submit the data
    const response = await fetch('http://35.212.170.89:5000/api/product/update.php', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submitData),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorResponse.message}`);
    }

    const result = await response.json();
    console.log('Product updated successfully:', result);
    // Handle successful update here
  } catch (error) {
    console.error('Error updating the product:', error);
    setErrors({ submit: error.message || 'Error updating product.' });
  } finally {
    setIsSubmitting(false);
  }
};



  return (
  <main>
    <form onSubmit={handleSubmit} className="product-form-container">
      {errors.submit && <div className="error">{errors.submit}</div>}
      <div className="form-group">
        <label htmlFor="id">Product ID:</label>
        <input
          type="number"
          name="id"
          id="id"
          className="form-control"
          value={formData.id}
          onChange={handleInputChange}
          aria-describedby="id-error"
        />
        {errors.id && <div id="id-error" className="error">{errors.id}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="name">
          <FontAwesomeIcon icon={faUser} /> Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={formData.name}
          onChange={handleInputChange}
          aria-labelledby="name-label"
          aria-describedby="name-error"
        />
        {errors.name && <div id="name-error" className="error">{errors.name}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="price">
          <FontAwesomeIcon icon={faDollarSign} /> Price:
        </label>
        <input
          type="number"
          name="price"
          id="price"
          className="form-control"
          value={formData.price}
          onChange={handleInputChange}
          aria-describedby="price-error"
        />
        {errors.price && <div id="price-error" className="error">{errors.price}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="sold">
          <FontAwesomeIcon icon={faDollarSign} /> Sold:
        </label>
        <input
          type="number"
          name="sold"
          id="sold"
          className="form-control"
          value={formData.sold}
          onChange={handleInputChange}
          aria-describedby="sold-error"
        />
        {errors.sold && <div id="sold-error" className="error">{errors.sold}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="description">
          <FontAwesomeIcon icon={faInfoCircle} /> Description:
        </label>
        <input
          type="text"
          name="description"
          id="description"
          className="form-control"
          value={formData.description}
          onChange={handleInputChange}
          aria-describedby="description-error"
        />
        {errors.description && <div id="description-error" className="error">{errors.description}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="stock">
          <FontAwesomeIcon icon={faInfoCircle} /> Stock:
        </label>
        <input
          type="number"
          name="stock"
          id="stock"
          className="form-control"
          value={formData.stock}
          onChange={handleInputChange}
          aria-describedby="stock-error"
        />
        {errors.stock && <div id="stock-error" className="error">{errors.stock}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="image1">
          <FontAwesomeIcon icon={faInfoCircle} /> Image 1:
        </label>
        <input
          type="text"
          name="image1"
          id="image1"
          className="form-control"
          value={formData.image1}
          onChange={handleInputChange}
          aria-describedby="image1-error"
        />
        {errors.image1 && <div id="image1-error" className="error">{errors.image1}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="image2">
          <FontAwesomeIcon icon={faInfoCircle} /> Image 2:
        </label>
        <input
          type="text"
          name="image2"
          id="image2"
          className="form-control"
          value={formData.image2}
          onChange={handleInputChange}
          aria-describedby="image2-error"
        />
        {errors.image2 && <div id="image2-error" className="error">{errors.image2}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="image3">
          <FontAwesomeIcon icon={faInfoCircle} /> Image 3:
        </label>
        <input
          type="text"
          name="image3"
          id="image3"
          className="form-control"
          value={formData.image3}
          onChange={handleInputChange}
          aria-describedby="image3-error"
        />
        {errors.image3 && <div id="image3-error" className="error">{errors.image3}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="image4">
          <FontAwesomeIcon icon={faInfoCircle} /> Image 4:
        </label>
        <input
          type="text"
          name="image4"
          id="image4"
          className="form-control"
          value={formData.image4}
          onChange={handleInputChange}
          aria-describedby="image4-error"
        />
        {errors.image4 && <div id="image4-error" className="error">{errors.image4}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="category_id">
          <FontAwesomeIcon icon={faInfoCircle} /> Category ID:
        </label>
        <input
          type="text"
          name="category_id"
          id="category_id"
          className="form-control"
          value={formData.category_id}
          onChange={handleInputChange}
          aria-describedby="category_id-error"
        />
        {errors.category_id && <div id="category_id-error" className="error">{errors.category_id}</div>}
      </div>
      <button type="submit" className="btn" disabled={isSubmitting}>
        {isSubmitting ? 'Updating...' : 'Update Product'}
      </button>
    </form>
  </main>
  
  );


};

export default UpdateProductForm;