import React from 'react'

const Character = ({name, side}) => (
    <li>{name} - <strong>{side}</strong></li>
)

export default Character