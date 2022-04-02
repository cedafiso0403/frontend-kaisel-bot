import {render, screen} from '@testing-library/react';
import ValorantAPI from '../../components/ValorantAPI';
import '@testing-library/jest-dom';

const props = {
    user: 15,
    region: "NA"
}

describe("Testing RIOT API Feature #3", () => {
    test('Render Valorant Stats', () => {
        render(<ValorantAPI {...props} />);
    })

    test('Expect chosen region', ()=>{
        render(<ValorantAPI {...props} />);
        const selectedRegion = screen.getByText("You have chosen the " + props.region + " region.").closest('h2');
        expect(selectedRegion).toBeInTheDocument();
    })
})
