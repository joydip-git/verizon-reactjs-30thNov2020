// import Home from '../components/Common/Home/Home'
// import PageNotFound from '../components/Common/PageNotFound/PageNotFound'

// import ProductContainer from '../containers/Product/ProductContainer'
// import AddProduct from '../components/Product/AddProduct/AddProduct'
// import ProductDetail from '../components/Product/ProductDetail/ProductDetail'
// import UpdateProduct from '../components/Product/UpdateProduct/UpdateProduct'

import { lazy } from 'react'

const Home = lazy(() => import('../components/Common/Home/Home'))
const PageNotFound = lazy(() => import('../components/Common/PageNotFound/PageNotFound'))
const ProductContainer = lazy(() => import('../containers/Product/ProductContainer'));
const AddProduct = lazy(() => import('../components/Product/AddProduct/AddProduct'));
const ProductDetail = lazy(() => import('../components/Product/ProductDetail/ProductDetail'));
const UpdateProduct = lazy(() => import('../components/Product/UpdateProduct/UpdateProduct'));

export const productRoutes = [
    {
        id: 1,
        url: '/',
        componentName: Home
    },
    {
        id: 2,
        url: '/home',
        componentName: Home
    },
    {
        id: 3,
        url: '/products',
        componentName: ProductContainer
    },
    {
        id: 4,
        url: '/products/:id',
        componentName: ProductDetail
    },
    {
        id: 5,
        url: '/product/update/:id',
        componentName: UpdateProduct
    },
    {
        id: 6,
        url: '/product/add',
        componentName: AddProduct
    },
    {
        id: 7,
        url: '*',
        componentName: PageNotFound
    }
]