import NavBar from "../NavBar/NavBar";


function Header() {
    return ( 
        <header className=" flex gap-4 justify-around bg-black text-white p-5 mb-5 uppercase ">
            <span>Ola, cara</span>
            <h1>Bem-vindo ao MovieApp</h1>
            <NavBar/>
        </header>
    );
}

export default Header;