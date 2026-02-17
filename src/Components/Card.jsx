function Card(props){
    return(
          <div className="flex flex-col flex-wrap">
           <a href={props.url} className="cursor-pointer"> <img  className="h-65 w-65 rounded-4xl flex object-cover" src={props.img} alt="pic" />
             <h1 className="text-white  text-lg text-center mt-1">{props.author}</h1></a> 
          </div>   
    )
}
export default Card;