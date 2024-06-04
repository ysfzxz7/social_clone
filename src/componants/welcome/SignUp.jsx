import { Link } from "react-router-dom";

export default function SignUp() {

  return (
    <>
      <h1>This is the sign up page</h1>
      <Link to={'/sign'}>to Login pager</Link>
    </>
  )
}