import React, { useEffect } from 'react';
import { message } from 'antd'; // Import message from Ant Design
import ProjectRoutes from './pages/ProjectRoutes';
import { ensureGtag, trackPageVisit } from './analytics/analytics_invokers';
import Description from './components/Home/Description';
import { PRODUCTION } from './values';
// import Description from './components/Description';
import { Helmet } from 'react-helmet';

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
      {PRODUCTION && (
        <Helmet>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1691781600316534" crossorigin="anonymous" ></script>
        </Helmet>
      )}
      <Description /> 
    </div>
  );
}

export default App;
