import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AdminLayout from './layouts/admin';
import WebsiteLayout from './layouts/website';
import AdminProductPage from './pages/admin/product';
import AdminProductAddPage from './pages/admin/product/add';
import AdminProductEditPage from './pages/admin/product/edit';
const Routers = (props) => {
    return (
        <Router>
            <Switch>
                <Route path="/admin">
                    <AdminLayout>
                        <Switch>
                            <Route exact path="/admin/product">
                                <AdminProductPage {...props}/>
                            </Route>
                            <Route exact path="/admin/product/add">
                                <AdminProductAddPage {...props}/>
                            </Route>
                            <Route path="/admin/product/:id">
                                <AdminProductEditPage {...props}/>
                            </Route>
                        </Switch>
                    </AdminLayout>
                </Route>

                <Route path="/website">
                    <WebsiteLayout />
                </Route>
                
            </Switch>
        </Router>
    )
}

export default Routers
