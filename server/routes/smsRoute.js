const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
  const { mobile, message } = req.body;

  const url = "http://sms.bulkssms.com/submitsms.jsp";
  const params = {
    user: "BRIJESH",
    key: "066c862acdXX",
    mobile: mobile,
    message: message,
    senderid: "UPDSMS",
    accusage: "1",
    entityid: "DLT Number",
    tempid: "1207169476099469445"
  };

  try {
    const response = await axios.get(url, { params });
    res.json({ success: true, data: response.data });
  } catch (error) {
    console.error("SMS Error:", error);
    res.status(500).json({ success: false, error: "Failed to send SMS" });
  }
});

module.exports = router;
