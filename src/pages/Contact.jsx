import Header from '../components/Header';
import Footer from '../components/Footer';
import { ProjectMember } from '../components/ProjectMember';

const propsForCesar = {
  name: "Cesar Figueroa Socrarras",
  description: "big brain because salad is named after him",
  picture: "images/TestImages.jpg"
}

const propsForLeo = {
  name: "Leo Chung",
  description: "can duplicate himself exactly once",
  picture: "images/TestImages.jpg"
}

const propsForLucas = {
  name: "Lucas Lee",
  description: "high chance of acheiving successful crossdressing",
  picture: "images/TestImages.jpg"
}

const propsForMartin = {
  name: "Martin Wong",
  description: "absolute gamer and chess champion",
  picture: "images/TestImages.jpg"
}

function Contact() {
    return (
      <div>
          <Header />
          <div className="content-page">
            <article className="project-members">
              <ProjectMember {...propsForCesar} />
              <ProjectMember {...propsForLeo} />
              <ProjectMember {...propsForLucas} />
              <ProjectMember {...propsForMartin} />  
            </article>
          

          </div>
          <Footer/>
      </div>
    );
  }
  
  export default Contact;
  