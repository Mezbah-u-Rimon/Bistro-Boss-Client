

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div>
            <div className='mt-20 mb-10 md:w-full lg:w-4/12 mx-auto'>
                <p className='text-[#D99904] text-center'>--- {subHeading}---</p>
                <div className='divider -mb-1'></div>
                <h3 className='text-3xl text-center uppercase'> {heading} </h3>
                <div className='divider -mt-1'></div>
            </div>
        </div>
    );
};

export default SectionTitle;