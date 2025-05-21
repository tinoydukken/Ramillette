import React from 'react';
import './OrdersTable.css';

const orders = [
    { id: '34VB5540K83', date: 'May 21, 2019', status: 'In Progress', total: '$358.75' },
    { id: '78A643CD409', date: 'December 09, 2018', status: 'Canceled', total: '$760.50' },
    { id: '112P45A90V2', date: 'October 15, 2018', status: 'Delayed', total: '$1,264.00' },
    { id: '28BA67U0981', date: 'July 19, 2018', status: 'Delivered', total: '$198.35' },
    { id: '502TR872W2', date: 'April 04, 2018', status: 'Delivered', total: '$2,133.90' },
    { id: '502TR872W2', date: 'April 04, 2018', status: 'Delivered', total: '$2,133.90' },
    { id: '78A643CD409', date: 'December 09, 2018', status: 'Canceled', total: '$760.50' },
];

const statusColors = {
    'In Progress': 'blue',
    'Canceled': 'red',
    'Delayed': 'orange',
    'Delivered': 'green'
};

export default function OrdersTable() {
    return (
        <div className="orders-table-wrapper">
            <table className="orders-table">
                <thead>
                    <tr>
                        <th>Order #</th>
                        <th>Date Purchased</th>
                        <th>Status</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td className="order-id">{order.id}</td>
                            <td>{order.date}</td>
                            <td>
                                <span className={`status-badge ${statusColors[order.status].toLowerCase()}`}>
                                    {order.status}
                                </span>
                            </td>
                            <td>{order.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination">
                <button disabled>&laquo;</button>
                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
                <button>&raquo;</button>
            </div>
        </div>
    );
}
