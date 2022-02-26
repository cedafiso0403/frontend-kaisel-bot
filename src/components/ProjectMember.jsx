import React from "react";
import "../styles/components/projectmember.css";

export class ProjectMember extends React.Component {
    render() {
        let memberName = this.props.name;
        let memberImage = this.props.picture;
        let memberDescription = this.props.description;
        return (
            <section className="memberSection">
                <img src={memberImage} width="250" height="250" alt={memberName}></img>
                <h2>{memberName}</h2>
                <p>{memberDescription}</p>
            </section>
        );
    }
}