import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import ProductPage from './pages/ProductPage';
import ProductCreatePage from './pages/ProductCreatePage';


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/create-product" element={<ProductCreatePage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;