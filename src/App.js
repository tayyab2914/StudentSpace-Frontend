import React from 'react';
import { message } from 'antd'; // Import message from Ant Design
import ProjectRoutes from './pages/ProjectRoutes';

function App() {
  // Initialize message API
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <div className="App">
      {contextHolder} {/* Make sure contextHolder is included */}
      <ProjectRoutes />
    </div>
  );
}

export default App;
