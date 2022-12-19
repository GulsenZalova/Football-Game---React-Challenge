import React, { useEffect, useState } from 'react'

function SearchTask() {

const [orders,setOrders]=useState([])
const [inputValue,setİnputValue]=useState([])

useEffect(()=>{
    loadData()
},[])

 useEffect(()=>{
   let filteredOrders=orders.filter((order)=>{
    if(order.customerId.toLowerCase().includes(inputValue)){
      return order
    }
   })
  //  console.log(filteredOrders)
    setOrders(filteredOrders)
 },[inputValue])

 const loadData=()=>{
    fetch("https://northwind.vercel.app/api/orders")
    .then(res=>res.json())
    .then(data=>setOrders(data))
 }
  return (
    <div>
      <input type="text" value={inputValue} onChange={(e)=>setİnputValue(e.target.value)} />
      <table>
        <thead>
            <tr>
                <th>Id</th>
                
                <th>custumId</th>
                
                <th>0rderDate</th>
            </tr>
        </thead>
        <tbody>
            {
              orders &&  orders.map((order)=> <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customerId}</td>
                    <td>{order.orderDate}</td>
                  </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default SearchTask
