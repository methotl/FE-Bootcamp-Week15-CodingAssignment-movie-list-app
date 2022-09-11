import React, {useState} from 'react';

const initialState = {
    title: '',
}

function MovieForm() {
    const [formData, setFormData] = useState(initialState)

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const postData = async () => {
        const res = await fetch(`https://631cb9a51b470e0e120914ce.mockapi.io/api/moviereviews/movies`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        const data = await res.json()
        console.log(data)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        postData();
        setFormData(initialState);
    }


    return (
        <div>
            <h1>Favorite Movies List</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <input 
                        type='text'
                        placeholder='Add Favorite Movie'
                        name='title'
                        value={formData.title}
                        onChange={onChange}
                    />
                </div>
                <br></br>
                <button className="submitButton" type="submit">Add to List</button>
            </form>
        </div>
    )
}

export default MovieForm