import { Helmet } from 'react-helmet-async';
import Cover from '../Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';



const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    const offered = menu.filter(item => item.category === "offered");

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu </title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title="Our Menu"></Cover>
            <SectionTitle subHeading="Don't miss" heading="TODAY'S OFFER"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}> </MenuCategory>
            {/* dessert menu item */}
            <MenuCategory items={dessert}
                title={"Dessert"}
                img={dessertImg}>
            </MenuCategory>
            {/* pizza menu item */}
            <MenuCategory
                items={pizza}
                title={"Pizza"}
                img={pizzaImg}>

            </MenuCategory>
            {/* pizza menu item */}
            <MenuCategory
                items={salad}
                title={"Salad"}
                img={saladImg}>

            </MenuCategory>
            {/* pizza menu item */}
            <MenuCategory
                items={soup}
                title={"Soup"}
                img={soupImg}>

            </MenuCategory>

        </div>
    );
};

export default Menu;