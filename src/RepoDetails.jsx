import React from 'react'
import './App.css'

const RepoDetails = ({details, loading}) => {
    if(loading){
        return(
            <h1 className='loading'>Loading...</h1>
        )
    }
  return (
    <div className='details__wrap'>
        <h1 className='title__details'>Repo details</h1>
        <div className="details__container">
            <div className="h1__container">
                <span className='h1__span'>Name:</span>{details.name}
            </div>
            <div className="h1__container">
                <span className='h1__span'>Forks Count:</span>{details.forks}
                
            </div>
            <div className="h1__container">
                <span className='h1__span'>Language:</span>{details.language}
                
            </div>
            <div className="h1__container">
                <span className='h1__span'>Stars:</span>{details.stargazers_count}
                
            </div>
        </div>
    </div>
  )
}

export default RepoDetails
