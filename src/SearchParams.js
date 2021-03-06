import React, {useState, useEffect} from 'react';
import pet, {ANIMALS} from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const SearchParams = () => {
    const [location, setLocation] = useState('Seattle, WA'); 
    const [breeds, setBreeds] = useState([])
    const [animal, AnimalDropdown] = useDropdown ('Animal', "Dog", ANIMALS)
    const [breed, BreedDropdown, setBreed] = useDropdown("Breeds", "", breeds)

    useEffect(() => {
        setBreeds([]);
        setBreed([]);

        pet.breeds(animal).then(({breeds}) => {
            const breedStrings = breeds.map(({name}) => name)
            setBreeds(breedStrings)
        })
    }, [animal, setBreed, setBreeds])

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input 
                    id="location" 
                    value={location} 
                    placeholder="Location"
                    onChange={e => setLocation(e.target.value)} 
                    />
                </label>
                <AnimalDropdown/>
                <BreedDropdown/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams