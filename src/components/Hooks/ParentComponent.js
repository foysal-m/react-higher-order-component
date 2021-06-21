import React, { useState } from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count'

function ParentComponent() {
  const [age, setAge] = useState(25)
  const [salary, setSalary] = useState(1000)

  const incrementAge = () => {
    setAge(age + 1)
  }

  const incrementSalary = () => {
    setSalary(salary + 1000)
  }
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>increment Salary</Button>
    </div>
  )
}

export default ParentComponent
