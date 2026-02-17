import { useEffect, useState } from "react";
import Card from "./Components/card";
import MyPagination from "./Components/Pagination";

function App(){
  const [data,setData] = useState([])
  const [index,setIndex] = useState(1)
 async function getData(){
  const response = await fetch(`https://picsum.photos/v2/list?page=${index}&limit=20`)
  // .then(response => response.json()).then(data => console.log(data) )
  const data = await response.json()
  setData(data)
}
useEffect(()=>{
  getData()
},[index])
 let printUserData = <h3 className='text-gray-400 bg-black text-lg flex justify-center  items-center h-screen w-full font-semibold'>Loading...</h3>
 if(data.length > 0){
  printUserData = data.map((item,idx)=>(
    <Card key ={idx}  img ={item.download_url} author = {item.author} url={item.url} />
  ))
 }
  return(
 <div className="flex flex-wrap justify-center items-center gap-10 p-10 bg-black h-[-90%] w-full">
       {printUserData}
      <MyPagination index={index} setIndex={setIndex}/>
 </div>
  )
}
export default App;