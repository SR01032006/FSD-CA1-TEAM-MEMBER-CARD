import React from 'react';
import './App.css';
import TeamMemberCard from './components/TeamMemberCard';

function App() {

  const teamMembers=[{id:21,name:"Sarvesh",title:"Software development Engineer"},
    {id:20,name:"Shreya",title:"Mechanical Engineer"},
    {id:8,name:"Viji",title:"Senior Manager"}
  ]

  return (
    <div>
      {teamMembers.map((member)=>(
        <div>
          {<TeamMemberCard member={member}/>}
        </div>
      ))}
    </div>    
  )
}

export default App
