import { Link } from "react-router-dom";
import MenuItems from "../../Sheared/MenuItems/MenuItems";
import Cover from "../Cover/Cover";


const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-5 mt-16">
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}>
                    </MenuItems>)
                }
            </div>
            <Link className="flex justify-center" to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-2 text-black my-3 "> Order Now </button>
            </Link>
        </div>
    );
};

export default MenuCategory;