import React from 'react'
import DashBoard from '../../components/Common/DashBoard/DashBoard'
import RouteGenerator from '../../routes/RouteGenerator'
import { productRoutes } from '../../routes/productRoutes'

function App() {
  return (
    <div className="container">
      <DashBoard />
      {/* <Route path='/' render={() => <span>PMS Home</span>} /> */}
      {/* <RouteGenerator /> */}
      <RouteGenerator routes={productRoutes} />
    </div>
  );
}

export default App;
