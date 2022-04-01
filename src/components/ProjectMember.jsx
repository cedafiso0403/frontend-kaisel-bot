import React from "react";
import "../styles/components/projectmember.css";
import "../styles/components/mediaquery.css";

export class ProjectMember extends React.Component {
    render() {
        let memberName = this.props.name;
        let memberImage = this.props.picture;
        let memberDescription = this.props.description;
        let memberGithub = this.props.githubLink;
        let memberLinkedIn = this.props.linkedInLink;
        return (
            <article>
                <section className="memberSection">
                    <img src={memberImage} width="250" height="250" alt={memberName}></img>
                    <h2>{memberName}</h2>
                    <p>{memberDescription}</p>
                    <div className="memberSocials">
                        <a href={memberGithub}><img src="images/company-icons/github.png" alt="github account" width="40" height="40"></img></a>
                        <a href={memberLinkedIn}><img src="images/company-icons/linkedin.png" alt="linkedin account" width="40" height="40"></img></a>
                    </div>
                </section>
            </article>
        );
    }
}