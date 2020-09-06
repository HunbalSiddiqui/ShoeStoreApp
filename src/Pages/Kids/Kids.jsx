import React from 'react'
import './Kids.css'
import SubCategoryNav from '../../Components/SubCategoryNav'

function Kids() {
    const subCategories = ["Baby & Toddler","LifeStyle","Running"]
    return (
        <div className="men_container">
            <div className="men_wrapper">
                <div className="men_subcategory flex">
                    <SubCategoryNav  subCategories={subCategories}/>
                </div>
            </div>
        </div>
    )
}

export default Kids
