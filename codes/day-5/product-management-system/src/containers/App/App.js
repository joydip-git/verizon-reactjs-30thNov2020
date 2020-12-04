import React, { Suspense } from 'react'
import RouteGenerator from '../../routes/RouteGenerator'
import { productRoutes } from '../../routes/productRoutes'

const DashBoard = React.lazy(() => import('../../components/Common/DashBoard/DashBoard'))

function App() {
  return (
    <div className="container">
      <Suspense fallback={<div>Loading....</div>}>
        <DashBoard />
        {/* <Route path='/' render={() => <span>PMS Home</span>} /> */}
        {/* <RouteGenerator /> */}

        <RouteGenerator routes={productRoutes} />
      </Suspense>
    </div>
  );
}

export default App;
