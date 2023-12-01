import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../../Sheared/MenuItems/MenuItems";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");

    return (
        <div className="mb-12">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    popular.map(item => <MenuItems
                        key={item._id}
                        item={item}>
                    </MenuItems>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-2 text-center mx-auto block mt-3 "> View Full Menu </button>
        </div>
    );
};

export default PopularMenu;