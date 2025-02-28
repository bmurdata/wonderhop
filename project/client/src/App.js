import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import ReadTrips from './pages/ReadTrips'
import CreateTrip from './pages/CreateTrip'
import EditTrip from './pages/EditTrip'
import CreateDestination from './pages/CreateDestination';
import ReadDestinations from './pages/ReadDestinations'
import TripDetails from './pages/TripDetails'
import { Link } from 'react-router-dom'
import CreateActivity from './pages/CreateActivity';
import AddToTrip from './pages/AddToTrip';
import Login from './pages/Login'
import Avatar from './components/Avatar'
import AddUserToTrip from './pages/AddUserToTrip'
import LoginPretty from './pages/Login';
const App = () => {
  const API_URL = 'http://localhost:3001'
  
  const [trips, setTrips] = useState([]);
  const [user, setUser] = useState([])

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`${API_URL}/auth/login/success`, { credentials: 'include' } )
      const json = await response.json()
      setUser(json.user)
    }

    const fetchTrips = async () => {
      const response = await fetch(`${API_URL}/api/trips`)
      const data = await response.json()
      setTrips(data)
      
    }
  
    getUser()
    fetchTrips()
  }, []);

  const logout = async () => {
    const url = `${API_URL}/auth/logout`
    const response = await fetch(url, { credentials: 'include' })
    await response.json()
    window.location.href = '/'
  }

  // Sets up routes
  let element = useRoutes([
    {
      path: '/',
      element: user && user.id ?
        <ReadTrips user={user} data={trips} /> : <Login api_url={API_URL} />
    },
    {
      path: '/trip/new',
      element: user && user.id ?
        <CreateTrip user={user} api_url={API_URL} /> : <Login api_url={API_URL} />
    },
    {
      path: '/edit/:id',
      element: user && user.id ?
        <EditTrip user={user} data={trips} api_url={API_URL} /> : <Login api_url={API_URL} />
    },
    {
      path: '/destinations',
      element: user && user.id ?
        <ReadDestinations user={user} /> : <Login api_url={API_URL} />
    },
    {
      path: '/trip/get/:id',
      element: user && user.id ?
        <TripDetails user={user} data={trips} api_url={API_URL} /> : <Login api_url={API_URL} />
    },
    {
      path: '/destination/new/:trip_id',
      element: user && user.id ?
        <CreateDestination user={user} api_url={API_URL} /> : <Login api_url={API_URL} />
    },
    {
      path: '/activity/create/:trip_id',
      element: user && user.id ?
        <CreateActivity user={user} api_url={API_URL} /> : <Login api_url={API_URL} />
    },
    {
      path: '/destinations/add/:destination_id',
      element: user && user.id ?
        <AddToTrip user={user} data={trips} api_url={API_URL} /> : <Login api_url={API_URL} />
    },
    {
      path: '/users/add/:trip_id',
      element: user && user.id ?
        <AddUserToTrip user={user} api_url={API_URL} /> : <Login api_url={API_URL} />
    },
  ]);

  
  return ( 

    <div className="App">
      

      {element}
    </div>

  );
}

export default App;
