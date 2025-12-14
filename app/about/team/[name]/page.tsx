import React from 'react'

const DynamicRoutingPage = async ({params}) => {
    const name = (await params).name;
  return (
    <div>DynamicRoutingPage {name}</div>
  )
}

export default DynamicRoutingPage