import React from 'react'
import './Women.css'
import SubCategoryNav from '../../Components/SubCategoryNav'

function Women() {
    const subCategories = ["Lifestyle","Sandals & Flipflops","Running"]
    return (
        <div className="men_container">
            <div className="men_wrapper">
                <div className="men_subcategory flex">
                    <SubCategoryNav  subCategories={subCategories} sourceRoute={"women"}/>
                </div>
            </div>
        </div>
    )
}

export default Women
