import './App.css'
import ClassBasedComponent from './components/class-based-component'
import FunctionalComponent from './components/functional-component'
import ProductList from './components/products';
import Users from './components/users';
import ContextButtonComponent from './components/context-concept/button.jsx';
import ContextTextComponent from "./components/context-concept/text.jsx";
import UseReducerExample from "./components/use-reducer-example.jsx";
import FormComponent from "./components/form";
import LoginComponent from "./components/login";
import RegisterComponent from "./components/register";


const dummyProductData = ['Product 1', 'Product 2', "product 3"];

function App() {

  return (
    <div>
      <h1>React JS Concepts 2024</h1>
      {/* <ClassBasedComponent/> */}
      {/* <FunctionalComponent/> */}

    {/* <ProductList listOfProducts={dummyProductData} name="Roxy" city="ABC" /> */}
    {/* <Users /> */}
    {/* <UseReducerExample /> */}
    {/* <ContextButtonComponent/>
    <ContextTextComponent /> */}
    {/* <FormComponent /> */}
      <div style={{display : 'flex', gap: '20px' }}>
        <LoginComponent />
        <RegisterComponent />
      </div>
    </div>
  )
}

export default App
