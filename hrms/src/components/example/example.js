import React from 'react'
import { PropTypes} from 'prop-types'

const Example = ({text,onclickHanle})=> {
  return (
    <button onclick={onclickHanle}>
        {text}
    </button>
  )
}
Example.propTypes= {
    text:PropTypes.string,
    onclickHanle:PropTypes.func
}


export default Example