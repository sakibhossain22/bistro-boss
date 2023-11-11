import img from '../../../assets/home/chef-service.jpg'
const ChefSharedMenu = ({ heading, subHeading }) => {
    return (
        <div className='my-10'>
            <div className='flex items-center justify-center' style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '400px' }}>
                <div className='w-1/2 mx-auto text-center bg-black bg-opacity-50 text-white py-4 px-5'>
                    <div>
                        <h1 className='text-4xl font-bold uppercase'>{heading}</h1>
                        <p className='my-4'>{subHeading}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefSharedMenu;