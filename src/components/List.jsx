import "../styles/List.css";

function List(props) {
  const category = props.category;
  const itemList = props.items;

  //fruits.sort((a, b) => a.name.localeCompare(b.name)); Ordenar por orden alfabetico.
  //fruits.sort((a, b) => b.name.localeCompare(a.name)); Ordenar orden inverso.
  //fruits.sort((a, b) => a.calories - b.calories); Ordenar de menos a mayor.
  //fruits.sort((a, b) => b.calories - a.calories); Ordenar de mayor a menor.

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b>
    </li>
  ));

  /*const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
  const list = lowCalFruits.map((lowCalFruits) => (
    <li key={lowCalFruits.id}>
      {lowCalFruits.name}: &nbsp;
      <b>{lowCalFruits.calories}</b>
    </li>
  ));*/

  return (
    <div className="container-list">
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </div>
  );
}

export default List;
