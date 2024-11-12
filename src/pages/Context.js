import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const Data = createContext()

function Context({children}) {
    useEffect(()=>{getProductData(); getUserData()}, [])
    const [showDiv, setShowDiv] = useState("")
    const [allProductList, setAllProductList] = useState("")
    
    const getProductData = ()=>{
        axios.get("http://localhost:5001/api/product").then((res) => {setAllProductList(res.data.data)})
    }

    const [allUserData, setAllUserData] = useState([])
    const getUserData = ()=>{
      axios.get("http://localhost:5001/api/user").then((res)=> setAllUserData(res.data.data))
    }
 
     const[oneProduct,setOneProduct]= useState({})
    
    const [myData, setMyData] = useState([])
    const myUserData = ()=>{
      axios.get("http://localhost:5001/api/user/"+ localStorage.getItem("userid")).then((res)=> setMyData(res.data.data))
    }
    

     const updateCart = (obj)=>{
      axios.put("http://localhost:5001/api/user/"+localStorage.getItem("userid"), obj ).then(()=>getUserData())
     }

     const removeCartItem = (obj)=>{
      axios.put("http://localhost:5001/api/user/"+localStorage.getItem("userid"), obj).then(()=> {getUserData(); window.location.reload(); setShowDiv("cart")})
     }

    
  return (
    <Data.Provider value={{oneProduct,setOneProduct, allProductList, getProductData, showDiv, setShowDiv, getUserData, allUserData,removeCartItem, updateCart, myUserData, myData}}>
      {children}
    </Data.Provider>
  )
}

export default Context