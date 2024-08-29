import React from 'react'

const Button = ({btnText, classB}) => {
  return (
    <div>
      <input
              style={{ height: "50px" }}
              type="button"
              value={btnText}
              className={`bg-success rounded-3 border-none w-100 ${classB}`}
        />
    </div>
  )
}

export default Button
