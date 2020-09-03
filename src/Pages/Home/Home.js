import React,{Fragment} from 'react'
import './Home.css'
import ShoeSlider from '../../Components/ShoeSlider/ShoeSlider'
export default function Home() {
    return (
    <Fragment>    
        <div className="home_container">
            <div className="home_wrapper">
            </div>
            <div className="slide_wrapper flex" id="slider">
                <ShoeSlider/>
            </div>
        </div>
    </Fragment>
    )
}
