let items = {
    fruit: ["apple","banana"],
    veg: ["onion", "tomato"]
  };
  
  function showItems({
    fruit: [f1, f2],
    veg: [v1, v2] 
  }) 
  {
    console.log(f1);
    console.log(f2);
    console.log(v1);
    console.log(v2);
  }
  showItems(items);