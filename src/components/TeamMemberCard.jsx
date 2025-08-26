import React from 'react'

function TeamMemberCard({member}) {
  return (
    <div>
        <h4>Name: {member.name}</h4>
        <p>Job Title: {member.title}</p>
    </div>
  )
}

export default TeamMemberCard