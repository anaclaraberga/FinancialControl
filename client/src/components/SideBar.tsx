import './SideBar.css'

export default function SideBar() {
    return(
        <>

        <aside id="sidebar">
            <header className="sidebar-header">

                <img className="profile-img" src="https://dy7glz37jgl0b.cloudfront.net/advice/images/3f64195ec17bf2d488a315987f4861e5-woman-smiles-while-crossing-the-street-in-a-city_l.jpg" alt="Profile Photo"/>
                <h2>Personal Expense Control</h2>

            </header>

            <nav>
                <a href='/'>
                    <span>
                        <i className="material-symbols-outlined">home</i>

                        <span>Dashboard</span>
                    </span>
                </a>

                <a href='/'>
                    <span>
                        <i className="material-symbols-outlined">upload_file</i>

                        <span>Sobre mim</span>
                    </span>
                </a>
            </nav>

        </aside>
        </>
    )
}