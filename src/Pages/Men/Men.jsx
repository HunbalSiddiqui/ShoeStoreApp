import React from 'react'
import "./Men.css"
import SubCategoryNav from '../../Components/SubCategoryNav'
import ProductCard from '../../Components/ProductCard'
function Men() {
    const subCategories = ["Lifestyle","Basketball","Running"]
    return (
        <div className="men_container">
            <div className="men_wrapper">
                <div className="men_subcategory flex">
                    <SubCategoryNav  subCategories={subCategories} sourceRoute={"Men"}/>
                </div>
                <div className="product_display flex">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
        </div>
    )
}

export default Men
