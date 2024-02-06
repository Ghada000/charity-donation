import React,{useState} from 'react'
import { ThemeProvider } from 'styled-components'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Donation from "./components/Donation"
import Footer from './components/Footer'
import ChatBot from 'react-simple-chatbot'







function App() {
  const [menuView, setMenuView] = useState(false);
  const [view, setView] = useState('default')
  const toggleMenu = () => {
    setMenuView(!menuView);
  };

  const switchView = (option) => {
    setView(option);
    setMenuView(false);
  };



  const steps = [
    {
      id: '0',
      message: 'Welcome! What is your name?',
      trigger: '1',
    },
    {
      id: '1',
      user: true,
      trigger: '2',
    },
    {
      id: '2',
      message: 'Hi there, how can I help you?',
      trigger: '3',
    },
    {
      id: '3',
      user: true,
      trigger: '4',
    },
    
    {
      id: '4',
      message: ({ previousValue }) => {
        if (previousValue) {
          const lowerCaseInput = previousValue.toLowerCase();
  
          if (lowerCaseInput.includes('home')) {
            switchView('Home');
            return 'You can find home items by clicking on "Home" in the navbar.';
          } else if (lowerCaseInput.includes('donation')) {
            switchView('Donation');
            return 'You can find Donation items by clicking on "Donation" in the navbar.';
          } else if (lowerCaseInput.includes('donation impact')) {
            // Assuming 'donation impact' is another option you want to handle
            // You need to add a switchView statement for it if necessary
            return 'You can find Donation Impact items by clicking on "Donation Impact" in the navbar.';
          } else {
            return `I'm not sure how to help with that. Is there anything else you'd like to know?`;
          }
        } else{
          return
        }
      },
      trigger: '4',
    },
  ];
  
  
  // Creating our own theme
  const theme = {
      background: '#fff',
      headerBgColor: '#09605f',
      headerFontSize: '20px',
      botBubbleColor: '#0F3789',
      headerFontColor: 'white',
      botFontColor: 'white',
      userBubbleColor: '#09605f',
      userFontColor: 'white',
  };
   
  // Set some properties of the bot
  const config = {
      // botAvatar: "img.png",
      floating: true,
  };
  return (
    <div>
        <Navbar/>
        <Home/>
        <ThemeProvider theme={theme}>
                <ChatBot
 
                    headerTitle="ChatBot"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
  
        <Footer/>
    </div>
  )
}

export default App
