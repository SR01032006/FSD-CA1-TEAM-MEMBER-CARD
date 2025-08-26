import React from 'react';
import './App.css';
import TeamMemberCard from './components/TeamMemberCard';

function App() {

  const teamMembers=[{id:21,name:"Sujaykiran",title:"Software development Engineer"},
    {id:20,name:"Saanvi",title:"Mechanical Engineer"},
    {id:8,name:"Niharika",title:"Senior Manager"}
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
