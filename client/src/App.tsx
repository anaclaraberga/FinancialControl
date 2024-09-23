import './App.css'

import SideBar from './components/SideBar'
import InputValue from './components/InputValue'

function App() {

  return (
    <>
      <SideBar/>

      <div id="body">

        <InputValue></InputValue>

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

        <div>
          <button className='button-secondary'>Adicionar renda</button>
        </div>
      </div>
    </>
  )
}

export default App
