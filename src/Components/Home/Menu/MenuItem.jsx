
const MenuItem = ({item}) => {
    console.log(item);
    const {image, category, name, price, recipe} = item
    return (
        <div>
            <div className="flex gap-5 items-center justify-center">
                <img className="w-28 rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px]" src={image} alt="" />
                <div>
                    <h1 className="text-xl font-bold">{name}-------</h1>
                    <p>{recipe}</p>
                </div>
                <p className="font-bold">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;