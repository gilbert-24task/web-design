
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/Home'
import BlogPage from './pages/Blog';
import './styles/global.scss';
import RootLayout from './shared/components/Layouts/RootLayout';


function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/blog' element={<BlogPage/>}></Route>
        <Route path='/blog/:id' element={<BlogPage/>}></Route>
      </Routes>
    </RootLayout>
  );
}

export default App;
