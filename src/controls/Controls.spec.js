// Test away!
import React from "react";
import Controls from "./Controls";
import { render, fireEvent } from "@testing-library/react";

test('Controls renders correctly',()=>{
    expect(render(<Controls/>)).toMatchSnapshot();
});

test('Locks gate when gate is closed and lock button is clicked',()=>{
    const toggleLockedMock = jest.fn();
    const toggleClosedMock = jest.fn();
    const { getByText } = render(
        <Controls toggleLocked={toggleLockedMock} locked={false} closed={true}  toggleClosed={toggleClosedMock}/>
    );
    const lockButton = getByText(/Lock Gate/i);
    fireEvent.click(lockButton);
    expect(toggleLockedMock).toHaveBeenCalled();
});

test('Does not Lock gate when gate is open and lock button is clicked',()=>{
    const toggleLockedMock = jest.fn();
    const toggleClosedMock = jest.fn();
    const { queryByText } = render(
        <Controls toggleLocked={toggleLockedMock} locked={false} closed={false}  toggleClosed={toggleClosedMock}/>
    );
    const lockButton = queryByText(/Lock Gate/i);
    fireEvent.click(lockButton);
    expect(toggleLockedMock).toHaveBeenCalledTimes(0);
});

test('Does not open gate when gate is locked and open gate button is clicked',()=>{
    const toggleLockedMock = jest.fn();
    const toggleClosedMock = jest.fn();
    const { queryByText } = render(
        <Controls toggleLocked={toggleLockedMock} locked={true} closed={true}  toggleClosed={toggleClosedMock}/>
    );
    const openButton = queryByText(/Open Gate/i);
    fireEvent.click(openButton);
    expect(toggleClosedMock).toHaveBeenCalledTimes(0);
});

test('Does open gate when gate is unlocked and open gate button is clicked',()=>{
    const toggleLockedMock = jest.fn();
    const toggleClosedMock = jest.fn();
    const { queryByText } = render(
        <Controls toggleLocked={toggleLockedMock} locked={false} closed={true}  toggleClosed={toggleClosedMock}/>
    );
    const openButton = queryByText(/Open Gate/i);
    fireEvent.click(openButton);
    expect(toggleClosedMock).toHaveBeenCalled();
});

test('Does close gate when gate is unlocked and open gate button is clicked',()=>{
    const toggleLockedMock = jest.fn();
    const toggleClosedMock = jest.fn();
    const { queryByText } = render(
        <Controls toggleLocked={toggleLockedMock} locked={false} closed={false}  toggleClosed={toggleClosedMock}/>
    );
    const openButton = queryByText(/Close Gate/i);
    fireEvent.click(openButton);
    expect(toggleClosedMock).toHaveBeenCalled();
});


