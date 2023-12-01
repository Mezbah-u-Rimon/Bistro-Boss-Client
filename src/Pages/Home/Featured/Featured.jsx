import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg"


const Featured = () => {
    return (
        <div style={{ backgroundImage: `url(${featured})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
            className="bg-fixed"
        >
            <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                className="w-full h-full pt-5 pb-16 md:px-20 text-white">
                <SectionTitle subHeading={"Check it out"}
                    heading={"FROM OUR MENU"}
                > </SectionTitle>

                <div className="flex flex-col lg:flex-row gap-7 items-center">
                    <div>
                        <img src={featured} alt="" />
                    </div>
                    <div>
                        <p className="text-2xl ">March 20, 2023</p>
                        <p className="text-2xl ">
                            WHERE CAN I GET SOME?
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil provident natus corrupti voluptas porro, blanditiis architecto, ipsam omnis iure aperiam, rem ipsum odio fugiat ipsa! Error, ratione ullam, sapiente sunt vero libero vitae veniam ipsam cum necessitatibus quia velit doloribus atque id et labore nemo illo fugiat? Et, aspernatur asperiores!
                        </p>
                        <button className="btn btn-outline border-0 border-b-2 text-white mt-3 "> Order Now </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;