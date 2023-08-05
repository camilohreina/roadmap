import { Link } from "../Link"
export default function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <img
                src='/vite.svg'
                alt='Foto de differnt'
            />
            <p>Differnt Esta creando un nuevo react router para uds</p>
            <Link to='/'>Ir a home</Link>
        </>
    )
}