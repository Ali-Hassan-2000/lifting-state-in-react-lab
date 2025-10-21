import Ingredient from '../Ingredient/Ingredient';

const BurgerStack = (props) => {
  return (
    <>
        {props.stack.length === 0 ? ( <p>No Ingredients</p> ) : 
        (
            <ul>
                {props.stack.map((ingredient, index) => (
                    <Ingredient
                    key={index}
                    ingredient={ingredient}
                    onRemove={props.removeFromBurger}
                    showAddButton={false}
                    showRemoveButton={true}
                    />
                ))}
            </ul>
        )}
    </>
  );
};

export default BurgerStack;