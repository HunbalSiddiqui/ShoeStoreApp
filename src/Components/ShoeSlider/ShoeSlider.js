import React from 'react'
import './ShoeSlider.css'
import one from './homepackage/one.jpg'
import two from './homepackage/two.jpg'
import three from './homepackage/three.jpg'
import four from './homepackage/four.jpg'
import five from './homepackage/five.jpg'
import six from './homepackage/six.jpg'
import seven from './homepackage/seven.jpg'
export default function ShoeSlider() {
    return (
        <div className="flex">
            <div className="image_card">
            </div>
            <div className="image_card">
                <img src={one} style={{width:'100%',height:'100%'}} alt="./"></img>
            </div>
            <div className="image_card">
                <img src={two} style={{width:'100%',height:'100%'}} alt="./"></img>
            </div>
            <div className="image_card">
                <img src={three} style={{width:'100%',height:'100%'}} alt="./"></img>
            </div>
            <div className="image_card">
                <img src={four} style={{width:'100%',height:'100%'}} alt="./"></img>
            </div>
            <div className="image_card">
                <img src={five} style={{width:'100%',height:'100%'}} alt="./"></img>
            </div>
            <div className="image_card">
                <img src={six} style={{width:'100%',height:'100%'}} alt="./"></img>
            </div>
            <div className="image_card">
                <img src={seven} style={{width:'100%',height:'100%'}} alt="./"></img>
            </div>
            
        </div>
    )
}
