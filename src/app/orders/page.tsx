'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useRouter} from "next/navigation";

// const API_BASE_URL = 'https://api-testnet.arttaca.io'; // Replace with your API base URL
const API_BASE_URL = process.env.NEXT_PUBLIC_DATABASE_URL
interface Order {
    id: string;
    userAddress: string;
    quantity: number;
    type: 'BUY' | 'SELL';
    // Other order properties...
}

const OrdersPage: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [newOrder, setNewOrder] = useState<Order>({
        id: '1',
        userAddress: '',
        quantity: 0,
        type: 'BUY',
        // Other order properties...
    });

    const router = useRouter()

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/orders`);
            setOrders(response.data);
            router.refresh()
        } catch (error) {
            console.error('Error fetching orders:', error);
        }

    };

    const createOrder = async () => {
        try {
            const response = await axios.post(`${API_BASE_URL}/orders`, newOrder);
            console.log('Order created:', response.data);
            setNewOrder({ // Reset the form fields after successful creation
                id:"1",
                userAddress: '',
                quantity: 0,
                type: 'BUY',
                // Other order properties...
            });
        } catch (error) {
            console.error('Error creating order:', error);
        }
        router.refresh()
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewOrder((prevOrder) => ({
            ...prevOrder,
            [name]: value,
        }));
    };

    return (
        <div className={'text-black'}>
            <h2>Orders</h2>
            <div>
                <label htmlFor="userAddress">User Address:</label>
                <input
                    type="text"
                    id="userAddress"
                    name="userAddress"
                    value={newOrder.userAddress}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="quantity">Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={newOrder.quantity}
                    onChange={handleChange}
                />
            </div>
            {/*<div>*/}
            {/*    <label htmlFor="type">Type:</label>*/}
            {/*    <select*/}
            {/*        id="type"*/}
            {/*        name="type"*/}
            {/*        value={newOrder.type}*/}
            {/*        onChange={handleChange}*/}
            {/*    >*/}
            {/*        <option value="BUY">BUY</option>*/}
            {/*        <option value="SELL">SELL</option>*/}
            {/*    </select>*/}
            {/*</div>*/}
            {/* Other input fields for order properties */}
            <button className={'bg-green-300'} onClick={createOrder}>Create Order</button>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>{order.id}</li>
                ))}
            </ul>
        </div>
    );
};

export default OrdersPage;
