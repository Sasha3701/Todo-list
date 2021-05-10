import Jumbotron from 'react-bootstrap/Jumbotron'

let NoTask = () => {
  return (
    <Jumbotron className="w-50 text-center">
      <h1>No tasks!</h1>
      <p>
      You can rest or do something else.
      </p>
    </Jumbotron>
  );
};

export default NoTask