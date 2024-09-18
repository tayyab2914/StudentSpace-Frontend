import React, { useEffect } from 'react';
import { message } from 'antd'; // Import message from Ant Design
import ProjectRoutes from './pages/ProjectRoutes';
import { ensureGtag, trackPageVisit } from './analytics/analytics_invokers';

function App() {
  // Initialize message API
  const [messageApi, contextHolder] = message.useMessage();
useEffect(()=>{
trackPageVisit()
ensureGtag()
},[])
  return (
    <div className="App">
      {contextHolder} {/* Make sure contextHolder is included */}
      <ProjectRoutes />
    </div>
  );
}

export default App;
