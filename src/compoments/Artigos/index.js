import React, { useState, useEffect } from 'react'

import { MappingDataUsersList } from './mapping'

export const ListArtigos = () => {
    const list = [0,1,2,3,4,5,6,7]
    return (
        <>

            {list.map(key => {
                return (
                    <MappingDataUsersList />
                )
            })}
        </>
    )
}