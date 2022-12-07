
async function addRetries(url, n) {
    try {
      return await axios.get(url);
    } catch (err) {
      if (n === 1) {
        throw err;
      }
      return await addRetries(url, n - 1);
    }
  }
  
  let result = addRetries(
    'https://northwind.vercel.app/api/suppliers34n1u',
    4
  );
  
  console.log(result);
  







