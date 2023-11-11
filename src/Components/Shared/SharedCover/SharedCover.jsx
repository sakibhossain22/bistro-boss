import img from '../../../assets/menu/banner3.jpg'
const SharedCover = ({header, subHeader}) => {
    return (
        <div>
            <div className="hero h-[500px]" style={{ backgroundImage: `url(${img})` }}>
                <div className=""></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-full px-48 py-14 hero-overlay bg-opacity-60">
                        <h1 className="mb-5 text-5xl font-bold">{header}</h1>
                        <p className="mb-5 mx-6">{subHeader}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SharedCover;