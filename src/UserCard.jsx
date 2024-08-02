function User(props){
  return(
    <div className="card-container">
      <span className={props.online ? "pro online" : "pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
      <img src={props.profile} className="img" alt="user" />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.description}</p>
      <div className="button">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skill">
        <h6>skills</h6>
        <ul>
        {props.skill.map((skill,index) => (
          <li key={index}>{skill}</li>
        ))
        }
      </ul>
      </div>
      

    </div>
  )
}

export const UserCard = () => {
  return (
      <User name="praveen" city="chennai" description="Front-end developer" skill={["HTML","CSS","javascript","Bootstrap","Reactjs"]} online={false} profile="images/image-1.png"/>
  )
}


