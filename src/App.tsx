import './App.css'

function App() {

  return (
    <>
      <aside className="sidebar">
        <header className="sidebar-header">
            <img className="profile-img" src="https://dy7glz37jgl0b.cloudfront.net/advice/images/3f64195ec17bf2d488a315987f4861e5-woman-smiles-while-crossing-the-street-in-a-city_l.jpg" alt="Profile Photo"/>
            <h2>Personal Expense Control</h2>
        </header>

      <nav>
          <button>
              <span>
                  <i className="material-symbols-outlined">home</i>

                  <span>Dashboard</span>
              </span>
          </button>

          <button>
              <span>
                  <i className="material-symbols-outlined">upload_file</i>

                  <span>Expenses</span>
              </span>
          </button>
      </nav>

    </aside>

    <div id="table-body">
        <h1>Personal Expense Control</h1>

        <table id="table">

            <tr id="primary-row">

                <th>Entrada</th>
                <th>Saída</th>
                <th>Motivo</th>
                <th>Data</th>
                <th>Ações</th>

            </tr>

            <tr id="data-row">

                <td> R$1000,00 </td>
                <td> R$300,00 </td>
                <td> Aniversário </td>
                <td> 24/08/2023 </td>
                <td> Edit </td>

            </tr>
        </table>
    </div>
    </>
  )
}

export default App
