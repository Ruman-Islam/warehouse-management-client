import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../Firebase/Firebase.config";

const UseGetProducts = (message) => {

    const navigate = useNavigate();
    const [user, ,] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [changeState, setChangeState] = useState(false);
    const [userTotalProducts, setUserTotalProducts] = useState(0);
    const [totalProductCount, setTotalProductCount] = useState(0);
    const [limit, setLimit] = useState(14);
    const [pageNumber, setPageNumber] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [error, setError] = useState('');

    let url;
    if (message === 'my-items') {
        url = `http://localhost:5000/products-user?email=${user?.email}&limit=${limit}&pageNumber=${pageNumber}`;
    } else if (message === 'inventory-list') {
        url = `http://localhost:5000/products?limit=${limit}&pageNumber=${pageNumber}}`;
    } else {
        url = "http://localhost:5000/products";
    }

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                if (message === 'inventory-list') {
                    if (data.success) {
                        data.products.sort((a, b) => {
                            if (a.productName < b.productName) { return -1 }
                            if (b.productName > a.productName) { return 1 }
                        })
                        setProducts(data.products);
                        setTotalProductCount(data.count);
                        setTotalPage(Math.ceil(data.count / limit));
                        setIsLoading(false);
                        return;
                    }
                } else if (message === 'my-items') {
                    if (data.success) {
                        data.products.sort((a, b) => {
                            if (a.productName < b.productName) { return -1 }
                            if (b.productName > a.productName) { return 1 }
                        })
                        setProducts(data.products);
                        setUserTotalProducts(data.count);
                        setTotalPage(Math.ceil(data.count / limit));
                        setIsLoading(false);
                        return;
                    }
                } else {
                    setIsLoading(false);
                    data.products.sort((a, b) => {
                        if (a.productName < b.productName) { return -1 }
                        if (b.productName > a.productName) { return 1 }
                    })
                    setProducts(data.products);
                }
            } catch (err) {
                console.log(err);
                setIsLoading(false);
                if (err.response.status === 404) {
                    setError(err.response?.data?.message)
                    return;
                }
                if (err.response?.statusText === 'Not found') {
                    setError(err.response?.statusText)
                    setChangeState(!changeState);
                    return;
                }
                if (err.response.status === 403 || err.response.status === 401) {
                    setIsLoading(false);
                    signOut(auth);
                    navigate('/login');
                    return;
                }
                if (err.response.status === 500) {
                    setIsLoading(false);
                    setError(err.response?.data?.message);
                    return;
                }
            }
        })()
    }, [setProducts, navigate, userTotalProducts, limit, pageNumber, url, message, changeState]);

    return {
        products,
        setProducts,
        isLoading,
        userTotalProducts,
        totalProductCount,
        limit,
        setLimit,
        pageNumber,
        setPageNumber,
        totalPage,
        changeState,
        setChangeState,
        error
    }
}

export default UseGetProducts;