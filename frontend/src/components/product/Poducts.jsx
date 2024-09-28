import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/product/productSlice";
import Loader from '../layouts/Loader';
import Cards from '../layouts/Cards';
import { useParams } from 'react-router-dom';
import Pagination from "react-js-pagination";
// import Slider from "@material-ui/core/Slider";
// import Typography from "@material-ui/core/Typography";
// import Navbar from './Navbar';

function Poducts() {
    const dispatch = useDispatch();
    const { keyword } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        dispatch(fetchProducts({keyword, page: currentPage}));
    }, [dispatch, keyword, currentPage]);
    const { data, isLoading, isError, resultperPage, productCount } = useSelector((state) => state.product);
    const setCurrentPageNo = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (isError) {
        return <h1>Error</h1>;
    }
    return (
        <Fragment>
            {/* <Navbar/> */}
            {isLoading ? (
                <Loader />
            ) : (
                <Fragment>
                    <h2 className='productsHeading'>Products</h2>
                    <div className="products">
                        {data && data.products.map((product,index) =><Cards key={product._id} product={product} />)}
                    </div>
                    <div className="paginationBox">
                        <Pagination
                            activePage={currentPage}
                            itemsCountPerPage={resultperPage}
                            totalItemsCount={productCount}
                            onChange={setCurrentPageNo}
                            nextPageText="Next"
                            prevPageText="Prev"
                            firstPageText="1st"
                            lastPageText="Last"
                            itemClass="page-item"
                            linkClass="page-link"
                            activeClass="pageItemActive"
                            activeLinkClass="pageLinkActive"
                        />
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default Poducts
