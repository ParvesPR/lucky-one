import React from 'react';
import './Qna.css';

const Qns = () => {
    return (
        <div className='qna'>
            <div>
                <h3>Question-01: How React Works?</h3>
                <p>Ans: React is a Popular JavaScript framework library. It's work is component based, like component which we make in a react app. It has two parts or ingredients first: state, second: props. using these ingredients we can organise our components in a hierarchical structure. Props or properties gives us scope to send data parent to child and also it is possible to end back child to parent in different way. And this the easy to maintain all database.</p>
            </div>
            <div>
                <h3>Question-02: Props vs State</h3>
                <p>Ans: First of all Props are read-only. On the other hand Sate is read and write also. In Props, Data is passed from one component to another component. But in State, Data is passed within the component only. Props can't be modified so, it immutable; State can be modified so, it is mutable. Props can be used with functional component and state also. There, State can be used only with the state component.</p>
            </div>
            <div>
                <h3>How useState Works?</h3>
                <p>Ans: useState is a HOOK that approve us to have state variables in functional components. And it allows us declare one or more state variable in function components. Basically, react keeps track of these state variables and ensures they stay up-to-date on subsequent re-renders of the component. If I pass the initial state to this function and it returns me a variable with the current state value and another function to update this value.</p>
            </div>
        </div>
    );
};

export default Qns;