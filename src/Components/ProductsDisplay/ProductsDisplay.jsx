import React,{useEffect,useState} from 'react'
import './ProductsDisplay.css'
import ProductCard from '../ProductCard'
import { MenBasketballImages, MenLifeStyleImage, MenRunningImages } from '../../UtilityFunctions/Men-Basketball-Images'
import { WomenLifeStyleImages, WomenSandalImages } from '../../UtilityFunctions/WomenImages'
import { KidsLifeStyle, KidsRunningImages, KidsToddlerImages } from '../../UtilityFunctions/KidsImages'
function ProductsDisplay(props) {
    var [sourceRoute,setSourceRoute] = useState('')
    var [subRoute,setSubRoute] = useState('')

    useEffect(()=>{
        setSourceRoute(props.sourceRoute)
        setSubRoute(props.match.params.uid)
        console.log(props)
    },[props.match.params.uid])
    const test = () =>{
        return (
            <h1>haahaha</h1>
        )
    }
    //MEN IMPORTS
    const menBasketBall = () =>{
        return MenBasketballImages.map((imgObj,index)=>{
            return(
                <ProductCard key={index} imageDetails={imgObj}/>
            )
            })
    }
    const menLifeStyle = () =>{
        return MenLifeStyleImage.map((imgObj,index)=>{
            return(
                <ProductCard key={index} imageDetails={imgObj}/>
            )
            })
    }
    const menRunning = () =>{
        return MenRunningImages.map((imgObj,index)=>{
            return(
                <ProductCard key={index} imageDetails={imgObj}/>
            )
            })
    }
    //WOMEN IMPORTS
    const womenLifeStlye = () =>{
        return WomenLifeStyleImages.map((imgObj,index)=>{
            return(
                <ProductCard key={index} imageDetails={imgObj}/>
            )
            })
    }
    const womenSandals = () =>{
        return WomenSandalImages.map((imgObj,index)=>{
            return(
                <ProductCard key={index} imageDetails={imgObj}/>
            )
            })
    }
    const womenRunning = () =>{
        return MenRunningImages.map((imgObj,index)=>{
            return(
                <ProductCard key={index} imageDetails={imgObj}/>
            )
            })
    }
    //KIDS IMPORTS
    const kidsLifeStlye = () =>{
        return KidsLifeStyle.map((imgObj,index)=>{
            return(
                <ProductCard key={index} imageDetails={imgObj}/>
            )
            })
    }
    const kidsRunning = () =>{
        return KidsRunningImages.map((imgObj,index)=>{
            return(
                <ProductCard key={index} imageDetails={imgObj}/>
            )
            })   
    }
    const kidsToddler = () =>{
        return KidsToddlerImages.map((imgObj,index)=>{
            return(
                <ProductCard key={index} imageDetails={imgObj}/>
            )
            })   
    }
    return (
        <div className="producstdisplay_container">
            <div className="products_display_wrapper flex">
                {
                    sourceRoute.toLowerCase()==='men' && subRoute.toLowerCase()==='basketball'?
                    menBasketBall()
                    :
                    sourceRoute.toLowerCase()==='men' && subRoute.toLowerCase()==='lifestyle'?
                    menLifeStyle()
                    :
                    sourceRoute.toLowerCase()==='men' && subRoute.toLowerCase()==='running'?
                    menRunning()
                    :
                    sourceRoute.toLowerCase()==='women' && subRoute.toLowerCase()==='lifestyle'?
                    womenLifeStlye()
                    :
                    sourceRoute.toLowerCase()==='women' && subRoute.toLowerCase()==='sandals & flipflops'?
                    womenSandals()
                    :
                    sourceRoute.toLowerCase()==='women' && subRoute.toLowerCase()==='running'?
                    womenRunning()
                    :
                    sourceRoute.toLowerCase()==='kids' && subRoute.toLowerCase()==='lifestyle'?
                    kidsLifeStlye()
                    :
                    sourceRoute.toLowerCase()==='kids' && subRoute.toLowerCase()==='running'?
                    kidsRunning()
                    :
                    sourceRoute.toLowerCase()==='kids' && subRoute.toLowerCase()==='baby & toddler'?
                    kidsToddler()
                    :
                    null
                }
            </div>
        </div>
    )
}

export default ProductsDisplay
