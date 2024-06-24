import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const Notification = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="warning" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Выбор города</Alert.Heading>
        <p>
          Пожалуйста, выберите ваш город.
        </p>
      </Alert>
    );
  }
  return null;
};

export default Notification;
