
const SectionTitle = ({ heading, subHeading, color }) => {

    return <div className={`text-${color} w-4/12 mx-auto text-center my-5`}>
        <p className="text-yellow-500 my-5">----{heading}----</p>
        <h1 className="text-4xl border-y-4 py-4">{subHeading}</h1>
    </div>

};

export default SectionTitle;