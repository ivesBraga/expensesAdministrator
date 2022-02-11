const apiUrl = 'https://economia.awesomeapi.com.br/json/all';

const walletAPI = async () => {
  const response = await fetch(apiUrl);
  const obj = response.json();
  return obj;
};

export default walletAPI;
