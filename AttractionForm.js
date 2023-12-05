import { useState } from 'react';
import { useAttractionsContext } from './hooks/useAttractionsContext'


const AttractionForm = () => {
    const { dispatch } = useAttractionsContext()

    //states
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [address, setAddress] = useState('')
    const [hours, setHours] = useState('')
    const [number, setNumber] = useState('')
    const [rating, setRating] = useState('')
    const [pricing, setPricing] = useState('')
    const [category, setCategory] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] =nuseState([])

    //submission handler
    const handleSubmit = async (e) => {
        e.preventDefault()

        const attraction = { name, description, address, hours, number, rating, pricing, category }

        //post request
        const response = await fetch('/cincy', {
            method: 'POST',
            body: JSON.stringify(attraction), headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }

        if(response.ok) {
            setName('')
            setDescription('')
            setAddress('')
            setHours('')
            setNumber('')
            setRating('')
            setPricing('')
            setCategory('')
            setError(null)
            setEmptyFields([])
            console.log('new attraction added!')
            dispatch({type: 'CREATE_ATTRACTION', payload: json})
        }
    }



    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Attraction</h3>


            <label>Attraction Name:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={emptyFields.includes('name') ? 'error' : ''}
            />

            <label>Description:</label>
            <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className={emptyFields.includes('description') ? 'error' : ''}
            />

            <label>Address:</label>
            <input
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                className={emptyFields.includes('address') ? 'error' : ''}
            />

            <label>Hours:</label>
            <input
                type="text"
                onChange={(e) => setHours(e.target.value)}
                value={hours}
                className={emptyFields.includes('hours') ? 'error' : ''}
            />

            <label>Phone Number:</label>
            <input
                type="number"
                onChange={(e) => setNumber(e.target.value)}
                value={number}
                className={emptyFields.includes('number') ? 'error' : ''}
            />

            <label>Rating:</label>
            <input
                type="number"
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                className={emptyFields.includes('rating') ? 'error' : ''}
            />

            <label>Price Range:</label>
            <input
                type="number"
                onChange={(e) => setPricing(e.target.value)}
                value={pricing}
                className={emptyFields.includes('pricing') ? 'error' : ''}
            />

            <label>Category:</label>
            <input
                type="text"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                className={emptyFields.includes('category') ? 'error' : ''}
            />
            <button>Add Attraction</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default AttractionForm