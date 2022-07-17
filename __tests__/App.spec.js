import App from "../src/js/App";
import React from "react";

describe('Should render App component', () => {

    it('should contain "Мир Кино"', () => {
        const component = shallow(<App/>)
        const wrapper = component.find('#app-wrapper')
        expect(wrapper.length).toBe(1);
    });
});