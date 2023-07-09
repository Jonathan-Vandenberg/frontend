'use client'

import React, {useState} from 'react';
import axios from 'axios';
import {Listing, ListingStatus, ListingType} from '../../../types'


const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL; // Replace with your API base URL

interface ListingForm {
  type: string;
  userId: string;
  assetId: string;
  quantity: number;
  price: number;
  status: string;
  expirationDate: string;
  signature: string;
  createdAt: Date;
  updatedAt: Date;
}

const CreateListingPage: React.FC = () => {
  const [formData, setFormData] = useState<Listing>({
    type: ListingType.AUCTION,
    userId: '',
    assetId: '',
    quantity: 0,
    auction: undefined,
    id: "12",
    listingActivities: [],
    trades: [],
    price: 0,
    status: ListingStatus.ACTIVE,
    expirationDate: new Date(),
    signature: '',
    createdAt: new Date(),
    updatedAt: new Date()
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('trying listing...')
    try {
      const response = await axios.post(`${API_BASE_URL}/create-listing`, formData);
      console.log('Listing created:', response.data);
      // Handle success (e.g., show a success message, redirect to listing page)
    } catch (error) {
      console.error('Error creating listing:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className={'text-white bg-gray'}>
      <h2>Create Listing</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="type">Type:</label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className={'text-black'}
          />
        </div>
        <div>
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            className={'text-black'}
          />
        </div>
        <div>
          <label htmlFor="assetId">Asset ID:</label>
          <input
            type="text"
            id="assetId"
            name="assetId"
            value={formData.assetId}
            onChange={handleChange}
            className={'text-black'}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className={'text-black'}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className={'text-black'}
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className={'text-black'}
          />
        </div>
        <div>
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="date"
            id="expirationDate"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            className={'text-black'}
          />
        </div>
        <div>
          <label htmlFor="signature">Signature:</label>
          <input
            type="text"
            id="signature"
            name="signature"
            value={formData.signature}
            onChange={handleChange}
            className={'text-black'}
          />
        </div>
        {/* Add more input fields for other listing properties */}
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateListingPage;
