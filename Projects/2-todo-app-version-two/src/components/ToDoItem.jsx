function ToDoItem1({todoName , todoDate}) {

  
return (
<div className="container ">
<div className="row kg-row">
  <div className="col-6">
   {todoName}
  </div>
  <div className="col-4">
  {todoDate}
  </div>
  <div className="col-2">
  <button type="button" className="btn btn-danger  kg-button
">Delet</button>
  </div>
</div>
</div>
);
}

export default ToDoItem1;