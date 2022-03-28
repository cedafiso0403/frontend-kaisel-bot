import Header from '../components/Header';
import Footer from '../components/Footer';
import { ProjectMember } from '../components/ProjectMember';

const propsForCesar = {
  name: "Cesar Figueroa Socrarras",
  description: "Responsible for Riot Games API and original webdesigner",
  picture: "images/team/Cesar.png",
  githubLink: "",
  linkedInLink: "",
}

const propsForLeo = {
  name: "Leo Chung",
  description: "Responsible for media queries",
  picture: "images/team/Leo.png",
  githubLink: "",
  linkedInLink: "",
}

const propsForLucas = {
  name: "Lucas Lee",
  description: "Webdesigner and responsible for animations",
  picture: "images/team/lucas.png",
  githubLink: "",
  linkedInLink: "",
}

const propsForMartin = {
  name: "Martin Wong",
  description: "Main webdesigner and responsible for the Twitch API",
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
  