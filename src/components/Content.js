import React from 'react'
import Part from './Part'

const Content = (props) => {
  const elm = props.course.parts.map((part) => {
    return(<Part part={part} key={part.name} />)
  })

  return(
    <>{elm}</>
  )
}

export default Content
