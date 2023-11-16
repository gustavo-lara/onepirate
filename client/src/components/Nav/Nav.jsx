import React from 'react'
import { Link } from 'react-router-dom'

const navigation = [
    { component: "/", name:"ONEPIRATE"},
    { component: "singin", name:"Sing In"},
    { component: "singup", name:"Sing Up"},
]

const Nav = () => {
  return (
    <div>
        {navigation.map((item) => (
          <Link key={item.name} to={item.component}>
            {item.name}
          </Link>
        ))}
    </div>
  )
}

export default Nav