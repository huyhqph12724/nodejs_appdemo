
import React from 'react';
import { Link } from 'react-router-dom';
const AdminProductPage = (props) => {
    console.log(props);
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Quản Lý Sản Phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to="/admin/product/add" className='btn btn-primary'>Thêm sản phẩm</Link>
                </div>
            </div>
            
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.products.map((product, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td><img src={product.image}></img></td>
                                <td>{product.price}</td>
                                <td>{product.status ? "Còn hàng":"Hết hàng"}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <Link to={`/admin/product/${product.id}`}  className='btn btn-primary'>Edit</Link>
                                    <button onClick={() => props.onRemove(product.id)} className='btn btn-danger'>Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminProductPage
