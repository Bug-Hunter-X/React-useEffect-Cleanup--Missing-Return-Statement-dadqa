# React useEffect Cleanup: Missing Return Statement

This repository demonstrates a common React bug involving useEffect's cleanup function.  Forgetting to return a cleanup function within useEffect can lead to memory leaks and unintended side effects, particularly when dealing with event listeners or other resources that need to be released when the component unmounts.

The `bug.js` file shows the incorrect implementation, while `bugSolution.js` provides the corrected version.

## Bug:
In `bug.js`, the useEffect hook adds an event listener. However, it omits the cleanup function that is crucial for removing this listener when the component is unmounted. This can result in the listener remaining active even after the component is no longer needed, potentially causing memory leaks and unexpected behavior.

## Solution:
`bugSolution.js` corrects this by adding a cleanup function (returned from useEffect) that removes the event listener when the component unmounts, preventing potential issues.
