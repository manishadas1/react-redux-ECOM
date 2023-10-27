import React, {useEffect} from 'react';
import Slider from '../../components/Slider/Slider';
import Category from '../../components/Category/Category';
import productList from '../../components/productList/productList';
import singleCategory from '../../components/singleCategory/singleCategory';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../Store/productSlice';
import { fetchCategories, fetchProductsByCategory } from '../../Store/categorySlice';
import "./homePage.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  const {data: categories, status: categoryStatus} = useSelector((state) => state.category);
  const {data: products, status: productStatus} = useSelector((state) => state.product);
  const {catProductAll: productsByCategory, catProductAllStatus} = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchProductsByCategory(1, 'all'));
    dispatch(fetchProductsByCategory(2, 'all'));
    
  }, []);

  return (
    <div className = "home-page">
      <Slider />
      <Category categories = {categories} status = {categoryStatus} />
      <productList products = {products} status = {productStatus} />
      <section>
        { productsByCategory[0] && <singleCategory products = {productsByCategory[0]} status = {catProductAllStatus} /> }
      </section>
      <section>
        { productsByCategory[1] && <singleCategory products = {productsByCategory[1]} status = {catProductAllStatus} /> }
      </section>
    </div>
  )
}

export default HomePage;