import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../../services/Api";
import ProductItem from "../../shared/components/product-item";
import Pagination from "../../shared/components/Pagination";
const Search = () => {
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const page = Number(searchParams.get("page")) || 1;
  useEffect(()=>{
    getProducts({
      params:{
        name: keyword,
        limit: 6,
        page,
      }
    })
      .then(({data})=>{
        // Set products
        setProducts(data.data.docs)

        // Set pages
        setPages(data.data.pages);
      })
      .catch((error)=>console.log(error))

  }, [keyword, page]);
  return (
    <div>
      {/*	List Product	*/}
      <div className="products">
        <div id="search-result">
          Kết quả tìm kiếm với sản phẩm <span>{keyword}</span>
        </div>
        <div className="product-list card-deck">
          {
            products?.map((product, index)=>
              <ProductItem key={index} item={product}/>
            )
          }
        </div>
      </div>
      {/*	End List Product	*/}
      <Pagination pages={pages}/>
    </div>
  );
};
export default Search;
