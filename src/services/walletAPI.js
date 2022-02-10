const apiUrl = 'https://economia.awesomeapi.com.br/json/all';

const walletAPI = async () => {
  const response = await fetch(apiUrl);
  const price = response.json();
  return price;
};

export default walletAPI;
