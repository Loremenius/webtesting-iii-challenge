// Test away!

import React from "react";
import Display from "./Display";
import { render } from "@testing-library/react";

test('Display renders correctly',()=>{
    expect(render(<Display/>)).toMatchSnapshot();
});

test('Defaults to opened and unlocked gate',()=>{
    const { getByText } = render(<Display/>);
    const openStatus = getByText(/open/i);
    const lockStatus = getByText(/unlocked/i);
    expect(openStatus.textContent).toBe("Open");
    expect(lockStatus.textContent).toBe("Unlocked");
});

test('Displays closed when closed prop is true',()=>{
    const { getByText } = render(<Display closed={true}/>);
    const openStatus = getByText(/closed/i);
    expect(openStatus.textContent).toBe("Closed");
    expect(openStatus.className).toBe("led red-led");
});

test('Displays locked when locked prop is true',()=>{
    const { getByText } = render(<Display locked={true}/>);
    const lockStatus = getByText(/locked/i);
    expect(lockStatus.textContent).toBe("Locked");
    expect(lockStatus.className).toBe("led red-led");
});

test('Displays unlocked when locked prop is false',()=>{
    const { getByText } = render(<Display locked={false}/>);
    const lockStatus = getByText(/locked/i);
    expect(lockStatus.textContent).toBe("Unlocked");
    expect(lockStatus.className).toBe("led green-led");
});

test('Displays open when closed prop is false',()=>{
    const { getByText } = render(<Display closed={false}/>);
    const openStatus = getByText(/open/i);
    expect(openStatus.textContent).toBe("Open");
    expect(openStatus.className).toBe("led green-led");
});