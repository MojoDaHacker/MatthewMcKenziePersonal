import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default props => {
  var repos = Object.values(props)
  repos.pop()

  return (
    <>
      <p>
        {props.children.what.what}
      </p>
      <p className="text-center">
        Down below is a list of links to my pinned repositories on GitHub : 
      </p>
      <ListGroup>
        {repos.map(repo => (
          <ListGroup.Item target="_blank" className="bg-transparent border-0 text-primary" action href={repo.url}>{repo.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </>
  )
}