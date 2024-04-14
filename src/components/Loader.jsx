import React from 'react'

const Loader = () => {



    return (
        <div style={{
            position: 'absolute', top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <div className='circle'></div>
            <h4 className='text-center'>Loading...</h4>
        </div>
    )
}

export default Loader
