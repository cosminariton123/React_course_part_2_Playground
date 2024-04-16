import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError(); //This is how we get the text of the error
  console.log(error);

  return (
    <>
      <h1>Oops...</h1>

      <p>
        {isRouteErrorResponse(error)
          ? "Sorry, invalid page" //This error is like a 404
          : "Sorry, an unexpected error has occurred."}
        {/*The application crashed => bad*/}
      </p>
    </>
  );
};

export default ErrorPage;
