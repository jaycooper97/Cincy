const AttractionDetails = ({ attraction }) => {
    return (
        <div className="attraction-details">
            <h4>{attraction.name}</h4>
            <p><strong></strong>{attraction.description}</p>
            <p><strong>Address: </strong>{attraction.address}</p>
            <p><strong>Hours: </strong>{attraction.hours}</p>
            <p><strong>Phone number: </strong>{attraction.number}</p>
            <p><strong>Rating: </strong>{attraction.rating}</p>
            <p><strong>Price range: </strong>{attraction.pricing}</p>
            <p><strong>Category: </strong>{attraction.category}</p>
        </div>
    )
}

export default AttractionDetails