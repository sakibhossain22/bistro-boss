import img from '../../../assets/home/featured.jpg'
import SectionTitle from '../../Shared/SectionTiitle/SectionTitle';
const FeaturedMenu = () => {
    return (
        <div>
            <div className="hero bg-fixed" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '500px' }}>

                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">

                    <div>
                        <div>
                            <SectionTitle heading='Check It Out' subHeading='From Our Menu' color={'white'}></SectionTitle>
                        </div>
                        <div className='flex gap-8 mx-auto w-3/4 items-center justify-center'>
                            <img className='w-96' src={img} alt="" />
                            <div className='text-left text-white'>
                                <p>March 30, 2023</p>
                                <h1 className="mb-5 text-3xl font-bold">Where Can i Get Some</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className='rounded-lg border-b-4'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedMenu;