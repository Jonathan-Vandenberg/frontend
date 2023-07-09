'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Listing } from '../../../types'

const API_BASE_URL = process.env.API_BASE_URL; // Replace with your API base URL

const ListingPage: React.FC = () => {
    const [listings, setListings] = useState<Listing[]>([]);
    const router = useRouter();

    // useEffect(() => {
    //     fetchListings();
    // }, []);

    // const fetchListings = async () => {
    //     try {
    //         const response = await axios.get(`${API_BASE_URL}/listings`);
    //         setListings(response.data);
    //         router.refresh();
    //     } catch (error) {
    //         console.error('Error fetching listings:', error);
    //     }
    // };

    return (
        <div>
            <h2>Listings</h2>
            <ul>
                {listings.map((listing) => (
                    <li key={listing.id} className={"text-white"}>{listing.id}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListingPage;
