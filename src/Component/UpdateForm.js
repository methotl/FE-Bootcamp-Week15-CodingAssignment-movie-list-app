import React, {useState} from 'react';

const initialState = {
    id: '',
    title: ''
}

function UpdateForm() {
    const [formData, setFormData] = useState({initialState})

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const updateData = async () => {
        const res = await fetch(`https://631cb9a51b470e0e120914ce.mockapi.io/api/moviereviews/movies/${formData.id}`, {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        const data = await res.json()
        console.log(data)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        updateData();
        setFormData(initialState);
    }

    return (
        <div>
            <h2>Update Movies in the List</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder='Enter Movie ID'
                        name='id'
                        value={formData.id}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder='Enter New Movie'
                        name='title'
                        value={formData.title}
                        onChange={onChange}
                    />
                </div>
                <br></br>
                <button className = "updateButton" type="submit">Update Selected Movie Title</button>
                
            </form>
        </div>
    )

}

export default UpdateForm