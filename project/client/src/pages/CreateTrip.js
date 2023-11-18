import React, { useState } from 'react';
import './CreateTrip.css'

const CreateTrip = ({user, api_url}) => {

    const [post, setPost] = useState({
        id: 0,
        title: "",
        body: "",
        status: "",
        num_days: 0,
        startdate: "",
        enddate: "",
        budget: 0.0,
        username: user.username,
        user_id:user.githubid
    })
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    
    const createPost = async (event) => {
        event.preventDefault();

        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        }

        await fetch(`${api_url}/api/trips`, options)
        window.location.href = '/'
    }


    return (
        <div>
            <center><h3> Create New Trip</h3></center>
            <form>
                <label>Title</label> <br />
                <input type="text" id="title" name="title" value={post.title} onChange={handleChange}/><br />
                <br/>

                <label>Notes</label><br />
                <textarea rows="5" cols="50" id="body" name="body" value={post.body} onChange={handleChange}>
                </textarea>
                <br/>

                <label>Status </label><br />
                <input type="text" id="status" name="status" value={post.status} onChange={handleChange}/><br />
                <br/>

                <label>Number of Days</label><br />
                <input type="number" id="num_days" name="num_days" value={post.num_days} onChange={handleChange}/><br />
                <br/>

                <label>Start Date </label><br />
                <input type="text" id="startdate" name="startdate" value={post.startdate} onChange={handleChange}/><br />
                <br/>

                <label>End Date </label><br />
                <input type="text" id="enddate" name="enddate" value={post.enddate} onChange={handleChange}/><br />
                <br/>

                <label>Total Cost</label><br />
                <input type="text" id="budget" name="budget" value={post.budget} onChange={handleChange}/><br />
                <br/>

                <input type="submit" value="Submit" onClick={createPost} />
            </form>
        </div>
    )
}

export default CreateTrip