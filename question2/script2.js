const apiUrl = 'http://20.244.56.144:80/train/trains';
const authToken = 'eyJhbGci0iITUZzTINI TsInRSCCI6TkpXVCI9.eyI1eHAIOFE20DT2MkyNjQsImNvbXBhbn10YW11Tj0iVHI';

const fetchDataWithFetchAPI = async () => {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });

    if (!response.ok) {
      throw new Error('Request failed.');
    }

    const data = await response.json();
    console.log(data); 
  } catch (error) {
    console.error('Error fetching API:', error);
  }
};

fetchDataWithFetchAPI();
