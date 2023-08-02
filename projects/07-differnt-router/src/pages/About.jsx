import { Link } from "../Link"
export default function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <img
                src='https://pbs.twimg.com/profile_images/1614338394745610243/DnxZH1TD_400x400.jpg'
                alt='Foto de differnt'
            />
            <p>Differnt Esta creando un nuevo react router para uds</p>
            <Link to='/'>Ir a home</Link>
        </>
    )
}