import  User from "./User";
import UserClass from "./UserClass";
const About = ()=> {
return (
    <div>
        <h1>About-Us</h1>
        <h2>This is my About us page</h2>
        <User name={"Lucifer Tyagi"}
              location = {"Meerut"}  
        />
        <UserClass name={"Yagyansh Tyagi (class)"}
                   location={"Ghaziabad"} 
        />
    </div>
)
}

export default About;