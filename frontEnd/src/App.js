import React, { useState } from 'react';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import ChatBot from 'react-simple-chatbot';
import Medicaments from './components/Medicaments';
import Clothes from './components/Clothes';
import Blood from './components/Blood';
import Hair from './components/Hair';
import Feedback from './components/Feedback';
import FAQ from './components/FAQ';
import ChildrenSituation from './components/ChildrenSituation';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript

function App() {
  const [menuView, setMenuView] = useState(false);
  const [view, setView] = useState("Home");
  const [term, setTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const changeView = (newView) => {
    setView(newView);
  };

  const toggleMenu = () => {
    setMenuView(!menuView);
  };

  const switchView = (option) => {
    setView(option);
    setMenuView(false);
  };

  const onViewDetails = (event) => {
    setSelectedEvent(event);
    setView('Event Details');
  };

  const onBackToList = () => {
    setSelectedEvent(null);
    setView('Event List');
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
            switchView('Donation Impact');
            return 'You can find Donation Impact items by clicking on "Donation Impact" in the navbar.';
          } else {
            return `I'm not sure how to help with that. Is there anything else you'd like to know?`;
          }
        }
      },
      trigger: '3',
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
   
  const config = {
      floating: true,
  };
  return (
    <div>
    <Navbar changeView={changeView} set={setTerm}/>
    {view==="Home" && <Home   term={term} changeView={changeView}/>}
    {view==="Hair" && <Hair  term={term} changeView={changeView}/>}
    {view==="Blood" && <Blood  term={term} changeView={changeView}/>}
    {view==="Clothes" && <Clothes term={term} changeView={changeView}/>}
    {view==="Medicaments" && <Medicaments  term={term} changeView={changeView}/>}
    {view==="Feedback" && <Feedback  term={term} changeView={changeView}/>}
    {view==="FAQ" && <FAQ term={term} changeView={changeView}/>}
    {view==="ChildrenSituation" && <ChildrenSituation term={term} changeView={changeView}/>}
    {view === "Event List" && <EventList term={term} changeView={changeView} onViewDetails={onViewDetails} />}
    {view === "Event Details" && selectedEvent && (<EventDetails event={selectedEvent} onBackToList={onBackToList} />
    )}
    <ChatBot headerTitle="ChatBot" steps={steps} {...config} />
    <Footer />
  </div>
);
}
  

export default App 
