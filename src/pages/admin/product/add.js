import React from 'react'
import { useForm } from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
const AdminProductAddPage = ({onAdd}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();
    const onSubmit = (data) =>{
        console.log(data);
        onAdd(data);
        window.alert('Thêm sản phẩm thành công');
        history.push('/admin/product');
    }
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Thêm Sản Phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to="/admin/product" className='btn btn-primary'>Quay lại</Link>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="product-name" className="form-label">Tên sản phẩm</label>
                    <input type="text" 
                        className="form-control" 
                        id="product-name" 
                        {...register('name',{required: true})} 
                    />
                    {errors.name && <div className="form-text text-danger">Bắt buộc nhập tên sản phẩm</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="product-price" className="form-label">Giá sản phẩm</label>
                    <input type="number" 
                        className="form-control" 
                        id="product-price"
                        {...register('price',{required: true})}
                    />
                    {errors.price && <div className="form-text text-danger">Bắt buộc nhập giá sản phẩm</div>}
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" 
                    className="form-check-input" 
                    id="product-status"
                    {...register('status')}
                    />
                    <label className="form-check-label" htmlFor="product-status">Còn hàng</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default AdminProductAddPage
