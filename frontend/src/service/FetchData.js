

async function fetchData(navigateString, methodType = "GET", dataContent = null) {
  console.log('on my way to the server')
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: methodType,
  };

  if (dataContent !== null) {
    options.body = JSON.stringify(dataContent);
  }
   console.log(navigateString,options);
  const response = await fetch(`http://localhost:3000/api/${navigateString}`, options);
  if(response.status !== 200){
    throw new Error(`HTTP error! status: ${response.status},message: ${response.json()}`);
  }
  console.log(`http://localhost:3000/api/${navigateString}`);
  const data = await response.json();
  console.log(data);
  return data;
}
export default fetchData;