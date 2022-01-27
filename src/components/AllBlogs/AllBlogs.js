import React, { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import classes from './Table.module.css';
import { FaEdit } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const history = useHistory();
  const loadOrders = async () => {
    const response = await fetch(
      'https://frozen-citadel-34677.herokuapp.com/blog/admin'
    );
    const responseData = await response.json();
    setOrders(responseData.data);
  };

  //Load all orders
  useEffect(() => {
    loadOrders();
  }, []);
  //Delete order handler
  const handleDelete = async (_id) => {
    if (window.confirm('Are You sure you want to delete the blog?')) {
      const response = await fetch(
        `https://frozen-citadel-34677.herokuapp.com/blog/${_id}`,
        {
          method: 'DELETE',
        }
      );
      const responseData = await response.json();
      if (responseData.status === 'success') {
        loadOrders();
      }
    }
  };
  //Shipped order handler
  const handleShipped = async (_id) => {
    const response = await fetch(
      `https://frozen-citadel-34677.herokuapp.com/blog/${_id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ approve: true }),
      }
    );
    const responseData = await response.json();
    if (responseData.status === 'success') {
      loadOrders();
    }
  };
  let count = 1;
  return (
    <section className={classes.orders}>
      <h2 className="section-heading ">All Blogs</h2>
      <div className="separator-2"></div>
      <div className="container-fluid">
        <div className="row">
          <div className={`col-md-12 ${classes['main-datatable']}`}>
            <div className={classes.card_body}>
              <div className={classes['overflow-x']}>
                <table
                  style={{ width: '100%' }}
                  className={`table ${classes['cust-datatable']} ${classes.dataTable} ${classes['no-footer']}`}
                >
                  <thead>
                    <tr>
                      <th style={{ minWidth: '50px' }}>ID</th>
                      <th style={{ minWidth: '200px' }}>Title</th>
                      <th style={{ minWidth: '160px' }}>Author</th>
                      <th style={{ minWidth: '206px' }}>Description</th>
                      <th style={{ minWidth: '135px' }}>Location</th>
                      <th style={{ minWidth: '120px' }}>Expense</th>
                      <th style={{ minWidth: '50px' }}>Rating</th>
                      <th style={{ minWidth: '150px' }}>Status</th>
                      <th style={{ minWidth: '260px' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => {
                      return (
                        <tr key={order._id}>
                          <td>{count++}</td>
                          <td>
                            <img
                              src={order.imageCover}
                              alt={order.title}
                              className="img-fluid rounded-circle me-2"
                              width="40"
                            />
                            {order.title?.substr(0, 50)}...
                          </td>
                          <td>
                            <span
                              className={`${classes.mode} ${classes.mode_email}`}
                            >
                              {order.author}
                            </span>
                          </td>
                          <td>{order.description?.substr(0, 50)}...</td>
                          <td>{order.location}</td>
                          <td>${order.expense}</td>
                          <td>{order.ratingsAverage}</td>
                          <td>
                            <span
                              className={`${classes.mode} ${
                                order.approve
                                  ? classes.mode_on
                                  : classes.mode_off
                              }`}
                            >
                              {order.approve ? 'Approved' : 'Pending'}
                            </span>
                          </td>
                          <td>
                            {!order.approve && (
                              <button
                                className={`btn btn-sm me-3 ${classes.mark}`}
                                onClick={() => handleShipped(order._id)}
                              >
                                Mark as Approved
                              </button>
                            )}
                            <FaEdit
                              className={classes.edit}
                              onClick={() =>
                                history.push(`/dashboard/edit/${order._id}`)
                              }
                            />
                            <MdDelete
                              className={classes.delete}
                              onClick={() => handleDelete(order._id)}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageAllOrders;
