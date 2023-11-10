import img from '../../../assets/home/chef-service.jpg'
const ChefServIce = () => {
    return (
        <div className='my-10'>
            <div className='flex items-center justify-center' style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '400px' }}>
                <div className='w-1/2 mx-auto text-center bg-white text-black py-4 px-5'>
                    <div>
                        <h1 className='text-4xl font-bold uppercase'>Bistro Boss</h1>
                        <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefServIce;