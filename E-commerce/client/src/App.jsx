import { Routes,Route } from 'react-router-dom'
import Authlayout from './components/auth/Layout'
import Authlogin from './pages/auth/Login'
import Authregister from './pages/auth/Register'
import Adminlayout from './components/admin_view_comp/Adminlayout'
import AdminProducts from './pages/admin-view/AdminProducts'
import AdminOrders from './pages/admin-view/AdminOrders'
import AdminDashboard from './pages/admin-view/AdminDashboard'
import Shoppinglayout from './components/shopping_view_comp/Shoppinglayout'
import Notfound from './pages/not-found/Notfound'
import Shoppinghome from './pages/shopping-view_page/Shoppinghome'
import Shoppinglist from './pages/shopping-view_page/Shoppinglist'
import Shoppingcheckout from './pages/shopping-view_page/Shoppingcheckout'
import Shoppingaccount from './pages/shopping-view_page/Shoppingaccount'
import AdminFeatures from './pages/admin-view/AdminFeatures'
import CheckAuth from './components/common/CheckAuth'
import UnAuthpage from './pages/unauth_page/UnAuthpage'


function App() {
  const isAuthenticated = true;
  const user = {
    name: 'John Doe',
    role: "admin"
  };

  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      
      <Routes>
        <Route path='/auth' 
        element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <Authlayout/>
          </CheckAuth>
        }>
          <Route path='login' element={<Authlogin/>}/>
          <Route path='register' element={<Authregister/>}/>
        </Route>
        <Route path='/admin'element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <Adminlayout/>
          </CheckAuth>
        } >
          <Route path='dashboard' element={<AdminDashboard/>}/>
          <Route path='products' element={<AdminProducts/>}/>
          <Route path='orders' element={<AdminOrders/>}/>
          <Route path='features' element={<AdminFeatures/>}/>
        </Route>
        <Route path='/shop' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <Shoppinglayout/>
          </CheckAuth>
        }>
        <Route path='home' element={<Shoppinghome/>}/>
        <Route path='list' element={<Shoppinglist/>}/>
        <Route path='checkout' element={<Shoppingcheckout/>}/>
        <Route path='account' element={<Shoppingaccount/>}/>        
        </Route>
        <Route path='*' element={<Notfound/> } />
        <Route path='unauth-page' element={<UnAuthpage/> } />
      </Routes>

    </div>
  )
}

export default App
