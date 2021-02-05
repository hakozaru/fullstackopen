import React from 'react'

const FlashMessage = ({flashMessage}) => {
  if(!flashMessage.message) return <div></div>

  const errorStyle = {
    color: "red",
    background: "lightgrey",
    fontSize: "20",
    borderStyle: "solid",
    borderRadius: "5",
    padding: "10",
    marginBottom: "10"
  }

  const successStyle = {
    color: "green",
    background: "lightgrey",
    fontSize: "20",
    borderStyle: "solid",
    borderRadius: "5",
    padding: "10",
    marginBottom: "10"
  }

  return(
    <div style={flashMessage.error ? errorStyle : successStyle}>
      {flashMessage.message}
    </div>
  )
}

export default FlashMessage
