import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils, } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart()

    // get isAdmin value from the database
    const [isAdmin] = useAdmin()

    return (
        <div className="flex">
            {/* dashboard sidebar content */}
            <div className="w-64 min-h-full bg-orange-400">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard/adminHome'> <FaHome className="text-xl"></FaHome> Admin Home  </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/addItems'> <FaUtensils className="text-xl"></FaUtensils> Add Items  </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageItem'> <FaList className="text-xl"></FaList>Manage items  </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageBookings'> <FaBook className="text-xl"></FaBook> Manage Bookings   </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/allUser'> <FaUsers className="text-xl"></FaUsers> All User </NavLink>
                            </li>

                        </> :
                            <>
                                <li>
                                    <NavLink to='/dashboard/userHome'> <FaHome className="text-xl"></FaHome> User Home  </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/history'> <FaCalendar className="text-xl"></FaCalendar> not Payment History  </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/cart'> <FaShoppingCart className="text-xl"></FaShoppingCart> My Cart ({cart.length}) </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/review'> <FaAd className="text-xl"></FaAd> Add Review  </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/paymentHistory'> <FaList className="text-xl"></FaList>  Real Payment History  </NavLink>
                                </li>

                            </>
                    }

                    {/* shared nav link */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'> <FaHome className="text-xl"></FaHome> Home  </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'> <FaSearch className="text-xl"></FaSearch> Menu  </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/contact'> <FaEnvelope className="text-xl"></FaEnvelope> Contact  </NavLink>
                    </li>

                </ul>
            </div>
            {/* dashboard content  */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;