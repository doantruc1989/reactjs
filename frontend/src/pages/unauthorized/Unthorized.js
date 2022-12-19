import React from 'react'
import './unthorized.css'
import { Link } from 'react-router-dom';

const Unthorized = () => {
    return (
        <div className='unthorized'>
            <div className="ghost">
                <div className="ghost--navbar"></div>
                <div className="ghost--columns">
                    <div className="ghost--column">
                        <div className="code"></div>
                        <div className="code"></div>
                        <div className="code"></div>
                        <div className="code"></div>
                    </div>
                    <div className="ghost--column">
                        <div className="code"></div>
                        <div className="code"></div>
                        <div className="code"></div>
                        <div className="code"></div>
                    </div>
                    <div className="ghost--column">
                        <div className="code"></div>
                        <div className="code"></div>
                        <div className="code"></div>
                        <div className="code"></div>
                    </div>

                </div>
                <div className="ghost--main">
                    <div className="code"></div>
                    <div className="code"></div>

                </div>

            </div>

            <h1 className="police-tape police-tape--1">
                &nbsp;&nbsp;&nbsp;&nbsp;Error: 403&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Error: 403&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Error: 403&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Error: 403&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Error: 403&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Error: 403&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Error: 403
            </h1>
            <h1 className="police-tape police-tape--2">Forbidden&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forbidden&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forbidden&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forbidden&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forbidden&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forbidden&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
            <div className='backtohome'>
                <Link to='/' className='backtohome-link'>Back to Home Page</Link>
            </div>

        </div>
    )
}

export default Unthorized