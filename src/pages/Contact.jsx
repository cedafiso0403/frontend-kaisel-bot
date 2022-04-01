import Header from '../components/Header';
import Footer from '../components/Footer';
import { ProjectMember } from '../components/ProjectMember';

const propsForCesar = {
  name: "Cesar Figueroa Socrarras",
  description: "Original webdesigner and responsible for the Riot Games API and integration tests.",
  picture: "images/team/Cesar.png",
  githubLink: "https://github.com/cedafiso",
  linkedInLink: "",
}

const propsForLeo = {
  name: "Leo Chung",
  description: "Responsible for media queries and unit tests.",
  picture: "images/team/Leo.png",
  githubLink: "",
  linkedInLink: "",
}

const propsForLucas = {
  name: "Lucas Lee",
  description: "Webdesigner and responsible for the Valorant section of Riot Games API.",
  picture: "images/team/Lucas.png",
  githubLink: "https://github.com/LucasDLee",
  linkedInLink: "https://www.linkedin.com/in/lucas-l-7b0bb3201/",
}

const propsForMartin = {
  name: "Martin Wong",
  description: "Idea conceiver, main webdesigner and responsible for the Twitch API",
  picture: "images/team/Martin.png",
  githubLink: "https://github.com/Mighty303",
  linkedInLink: "https://www.linkedin.com/in/martin-wong-b05160230/",
}

function Contact() {
    return (
      <div>
          <Header />
          <main>
            <h1>Team Members</h1>
            <hr></hr>
            <article className="project-members-list">
              <ProjectMember {...propsForCesar} />
              <ProjectMember {...propsForLeo} />
              <ProjectMember {...propsForLucas} />
              <ProjectMember {...propsForMartin} />  
            </article>
          </main>
          <Footer/>
      </div>
    );
  }
  
  export default Contact;
  