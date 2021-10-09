import React from 'react';
import Notes from './Notes';
const Home = () => {
    return (
        <>
            <form className="container">
                <div className="mb-3">
                    <label htmlFor="eie" className="form-label">Email address</label>
                    <input type="email" autoComplete="email" className="form-control" id="eie" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="eip" className="form-label">Password</label>
                    <input type="password" autoComplete="current-password" className="form-control" id="eip" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <Notes />
        </>
    )
}

export default Home
