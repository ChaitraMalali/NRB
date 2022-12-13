import {useRouteError} from "react-router-dom"
const ErrorComponent = () => {
    const errorData = useRouteError();
    return (
        <>
        <h1>Oops</h1>
        <h2>Something really !Kool</h2>
        <h3>Details : {errorData.statusText || errorData.message}</h3>
        </>
    )
}
export default ErrorComponent;