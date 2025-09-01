import React, { useState } from 'react';
import axios from 'axios';

const Sms = () => {
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendSms = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/sms/', {
        mobile,
        message,
      });
      setResponse(res.data.data);
    } catch (error) {
      setResponse("Failed to send SMS");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>Send SMS</h3>
      <input
        type="text"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <button onClick={sendSms}>Send</button>
      <p>Response: {response}</p>
    </div>
  );
};

export default Sms;
