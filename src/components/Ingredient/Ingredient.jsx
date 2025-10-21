const Ingredient = ({ ingredient, onAdd, onRemove, showAddButton, showRemoveButton }) => {
  return (
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      {showAddButton && (
        <button onClick={() => onAdd(ingredient)}>+</button>
      )}
      {showRemoveButton && (
        <button onClick={() => onRemove(ingredient)}>X</button>
      )}
    </li>
  );
};

export default Ingredient;