import {render, screen} from "@testing-library/react";
import Footer from "../../components/Footer";
import '@testing-library/jest-dom';

test('Renders Header Home link element',()=>{
    render(<Footer/>);
    const linkElement = screen.getByText(/Project Kaisel/i);
    expect(linkElement).toBeInTheDocument();
});