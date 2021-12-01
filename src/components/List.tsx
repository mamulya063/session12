
  const List =(props:any) => {
    return (
      <div>
         <div className ="tableHeader">
         <span>Title</span>
         <span>URL</span>
         <span>Author</span>
         </div>
  {props.stories.map((item:any) =>(
    <Item item={item}/>
  ))}
  </div>
  );
    };

const Item =({item }:any) =>(
  <div>
    <span>{item.title}</span>
    <span>{item.url}</span>
    <span>{item.author}</span>
  </div>
);   
       

export default List;