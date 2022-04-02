import { ProjectMember } from "../../components/ProjectMember";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';

const cardInformation = {
    name: "Cesar Figueroa",
    picture: "#",
    description: "Big boss",
    githubLink: "https://github.com/cedafiso0403",
    linkedInLink: "https://www.linkedin.com/in/cesar-figueroa-462063154/"
}

test('Render without crashing', ()=>{
    render(<ProjectMember {...cardInformation}/>)
})

test('Render name for Project Member card', ()=>{
    render(<ProjectMember {...cardInformation}/>)
    const memberName = screen.getByText(cardInformation.name).closest('h2');
    expect(memberName).toBeInTheDocument();
})

test('Render description for Project Member card', ()=>{
    render(<ProjectMember {...cardInformation}/>)
    const memberDescription = screen.getByText(cardInformation.description).closest('p');
    expect(memberDescription).toBeInTheDocument();
})

test('Render github icon for Project Member card', ()=>{
    render(<ProjectMember {...cardInformation}/>)
    const memberGitHubIcon = screen.getByAltText("github account").closest('img');
    expect(memberGitHubIcon).toBeInTheDocument();
})

test('Render linkedin icon for Project Member card', ()=>{
    render(<ProjectMember {...cardInformation}/>)
    const memberLinkedinIcon = screen.getByAltText("linkedin account").closest('img');
    expect(memberLinkedinIcon).toBeInTheDocument();
})

test('Render github link for Project Member card', ()=>{
    render(<ProjectMember {...cardInformation}/>)
    const links = screen.getAllByRole("link");
    let index = -1;
    let regex = new RegExp(''+cardInformation.githubLink+'')
    links.forEach((element,i) => {
        if(regex.test(element))
        index = 1
    });
    expect(links[index]).toBeInTheDocument();
})

test('Render linkedin link for Project Member card', ()=>{
    render(<ProjectMember {...cardInformation}/>)
    const links = screen.getAllByRole("link");
    let index = -1;
    let regex = new RegExp(''+cardInformation.linkedInLink+'')
    links.forEach((element,i) => {
        if(regex.test(element))
        index = 1
    });
    expect(links[index]).toBeInTheDocument();
})
