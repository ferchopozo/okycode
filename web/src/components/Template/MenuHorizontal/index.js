import React from 'react'


export const MenuHorizontal = ({children})=>{
    return(
        <nav className='navigator'>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                {children}
            </div>
        </nav>
    )
}