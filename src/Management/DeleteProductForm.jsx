import React, { useState } from 'react';
import './ProductForm.css'; // Reuse the same styles if they are applicable
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const DeleteProductForm = () => {
  const [productId, setProductId] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    setProductId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://35.212.170.89/api/product/delete.php', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: productId }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('Product deleted successfully');
      // Here you could clear the input or provide a success message
      setProductId('');
    } catch (error) {
      console.error('Error deleting the product:', error);
      setErrors({ submit: 'Error deleting product. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="product-form-container">
      {/* <h2>Delete Product</h2> */}
      {errors.submit && <div className="error">{errors.submit}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product ID:</label>
          <input
            type="number"
            name="id"
            className="form-control"
            value={productId}
            onChange={handleInputChange}
            disabled={isSubmitting}
          />
        </div>
        <button type="submit" className="btn" disabled={isSubmitting || !productId}>
          <FontAwesomeIcon icon={faTrash} /> {isSubmitting ? 'Deleting...' : 'Delete Product'}
        </button>
      </form>
    </div>
  );
};

export default DeleteProductForm;
