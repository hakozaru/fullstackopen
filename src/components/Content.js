import React from 'react'

const Content = (props) => {
  const elm = props.contents.map((content, i) => {
    const humanIndex = i + 1
    return(
      <p key={`part${humanIndex}`}>
        {content.title} {content[`exercises${humanIndex}`]}
      </p>
    )
  })

  return(
    <>{ elm }</>
  )
}

export default Content
