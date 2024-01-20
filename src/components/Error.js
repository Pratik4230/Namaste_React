import {useRouteError} from 'react-router-dom'

const Error = () => {
    const err = useRouteError();
    console.log(err)
return (
    <>
  <h1>Oops !!!</h1>
  <h2>Something went Wrong !!</h2>
  <h4>{err.status}</h4> <h4>{err.statusText}</h4>
  <p>{err.data}</p>
  </>
)
}

export default Error;