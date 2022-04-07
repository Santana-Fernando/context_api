import P from 'prop-types'
import { useCounterContext } from '../../Contexts/CounterContext'

export const Button = ({children, onButtonClick, disabled = false}) => {
    const [state, actions] = useCounterContext()
    return (
        <button disabled={disabled} style={{ fontSize: '60px'}} onClick={onButtonClick}>{children}</button>
    )
}

Button.protoTypes = {
    children: P.node.isRequired,
    onButtonClick: P.func.isRequired 
}