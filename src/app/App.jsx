import {Helmet} from 'react-helmet'

// Router
import AppRouter from './router'

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Stack Bucket</title>
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" 
          rel="stylesheet" 
        />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" 
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" 
          crossorigin="anonymous" 
        />
      </Helmet>

      <AppRouter />
      
    </div>
  );
}

export default App;
