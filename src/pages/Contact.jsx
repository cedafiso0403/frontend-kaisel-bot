import Header from '../components/Header';
import Footer from '../components/Footer';
import { ProjectMember } from '../components/ProjectMember';

const propsForCesar = {
  name: "Cesar Figueroa Socrarras",
  description: "big brain because salad is named after him",
  picture: "images/TestImages.jpg",
  githubLink: "",
  linkedInLink: "",
}

const propsForLeo = {
  name: "Leo Chung",
  description: "can duplicate himself exactly once",
  picture: "images/TestImages.jpg",
  githubLink: "",
  linkedInLink: "",
}

const propsForLucas = {
  name: "Lucas Lee",
  description: "high chance of acheiving successful crossdressing",
  picture: "images/TestImages.jpg",
  githubLink: "",
  linkedInLink: "",
}

const propsForMartin = {
  name: "Martin Wong",
  description: "absolute gamer and chess champion",
  picture: "images/TestImages.jpg",
  githubLink: "",
  linkedInLink: "",
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
  