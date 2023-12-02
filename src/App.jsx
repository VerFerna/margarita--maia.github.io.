
import './style.scss';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting=" Mi tienda"/>

    </div>
  )
}

export default App