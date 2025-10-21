import Ingredient from '../Ingredient/Ingredient';

const IngredientList = (props) => {
  return (
    <div>
        <ul>
            {props.ingredients.map((ingredient, index) => (
                <Ingredient
                    key={index}
                    ingredient={ingredient}
                    onAdd={props.addToBurger}
                    showAddButton={true}
                    showRemoveButton={false}
                />
            ))}
        </ul>
    </div>
  );
};

export default IngredientList;