import React from 'react'
import Button from '@material-ui/core/Button'
import { navigate} from '@reach/router'

const NavItem = props => {
    const {routeTo, label} = props

    const handleClick = () => {
        navigate(`/${routeTo}`)
    }

    return (
        <Button onClick={handleClick}>
            {label}
        </Button>
    )
}

export default NavItem