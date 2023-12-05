import { useEffect, useState } from 'react';

const Attraction = () => {
    const [attractions, setAttractions] = useState(null)

    useEffect(() => {
        const fetchAttractions = async () => {
            const response = await fetch('http://localhost:4000/cincy')
            const json = await response.json()

            if(response.ok) {
                setAttractions(json)
            }
        }

        fetchAttractions()
    }, [])

    return (
        <div className="attraction">
            <div className="attractions">
                {attractions && attractions.map((attraction) => (
                    <p key={attraction._category}>{attraction.name}</p>
                ))}
            </div>
        </div>
    )
}