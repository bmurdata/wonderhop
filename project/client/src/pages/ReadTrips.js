import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
const ReadTrips = (props) => {

    const [posts, setPosts] = useState([]);
    

    useEffect(() => {
        setPosts(props.data);
    }, [props]);
    //posts[0].num_days=1
    return (
        <div className="ReadTrips">
            <Navbar/>
            <Hero/>
            <h2 className='py-4'>View Other Trips</h2>
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card key={post.id} 
                         id={post.id} 
                         title={post.title} 
                         description={post.body} 
                         img_url={post.img_url} 
                         num_days={post.num_days}
                         start_date={post.startdate}
                         end_date={post.enddate}
                         total_cost={post.budget} />
                ) : <h3 className="noResults">{'No Trips Yet 😞'}</h3>
            }
        </div>  
    )
}

export default ReadTrips;