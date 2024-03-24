
function FeaturesBox({ icon, title, desc }) {
    return (
        <div className="text-white element-center">
            <div>
                <img src={icon} />
            </div>
            <h6 className="text-xl mb-2">{title}</h6>
            <p className="text-sm">{desc}</p>
        </div>
    )
}

export default FeaturesBox