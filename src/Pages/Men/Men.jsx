import React from 'react'
import "./Men.css"
import SubCategoryNav from '../../Components/SubCategoryNav'
function Men(props) {
    const subCategories = ["Lifestyle","Basketball","Running"]
    return (
        <div className="men_container">
            <div className="men_wrapper">
                <div className="men_subcategory flex">
                    <SubCategoryNav  subCategories={subCategories} sourceRoute={"Men"}/>
                </div>
            </div>
        </div>
    )
}

export default Men
