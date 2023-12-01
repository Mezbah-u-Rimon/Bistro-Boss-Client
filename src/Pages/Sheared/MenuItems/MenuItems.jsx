

const MenuItems = ({ item }) => {
    const { name, recipe, image, price } = item || {};

    return (
        <div className="flex items-center gap-5 mb-6 p-4">
            <img className="w-[110px] rounded-r-full rounded-bl-full" src={image} alt="" />
            <div>
                <div className="flex justify-between items-center">
                    <h3 className="uppercase text-lg">{name} ----------</h3>
                    <p className="text-[#D99904]">${price}</p>
                </div>
                <p>
                    {recipe}
                </p>
            </div>


        </div>
    );
};

export default MenuItems;