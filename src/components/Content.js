import React from 'react'
import Part from './Part'

const Content = (props) => {
  const elm = props.contents.map((content) => {
    return(<Part content={content} key={content.title} />)
  })

  return(
    <>{elm}</>
  )
}

export default Content
