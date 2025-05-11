import React, { useState } from 'react';
import NotificationModal from './NotificationModal';
import ControlledForm from './ControlledForm';
import UncontrolledForm from './UncontrolledForm';
import ErrorBoundary from './ErrorBoundary';
// import ThemeToggle from './ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

function Task_3() {
  const [showModal, setShowModal] = useState(false);
  const [crash, setCrash] = useState(false);

  return (
    <ThemeProvider>
      {/* <ThemeToggle /> */}
       
      <button onClick={() => setShowModal(true)}>Show Notification</button>
<br /><br />
      {showModal && <NotificationModal onClose={() => setShowModal(false)} />}
      <ControlledForm />
      <br />
      <UncontrolledForm />
      <br />
      <ErrorBoundary>
        <button onClick={() => setCrash(true)}>Crash App</button>
        {crash && <div>{(() => { throw new Error("Crashed!"); })()}</div>}
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default Task_3;
