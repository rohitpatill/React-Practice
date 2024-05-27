const foodItems = () =>{

    let foodItems = ["Dal", "meal", "Eggs", "Chicken", "purnpoli", "rohit"];
    //let foodItems =[];
    return (

        <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item  kgitem">
            {item}
          </li>
        ))}
      </ul>
    );
};
export default foodItems;