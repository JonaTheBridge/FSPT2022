let TOKEN;
const hr = '--------------------------------------------------';

async function testBattery() {
  console.log(hr);
	colorLog('yellow', `START OF TEST`);
  //------------------------------------------------------------------ //
	await Test(1, 1, 'register', 'POST', {"username": "testuser", "email":"test@email.com", "password": "123456"});
	await Login({"id": "testuser", "password": "123456"});
	await Test(2, 1, 'update', 'PUT', {"email": "", "password": ""});
	await Test(3, 1, 'delete', 'DELETE', '')
	await Login({"id": "testuser", "password": "123456"});

  //------------------------------------------------------------------ //
  console.log(hr);
  colorLog('yellow', "END OF TEST");
  console.log(hr);
}

async function Login(user){
	console.log(hr);
	colorLog('yellow', `Pretest: Login`);
  const getToken = await fetchServer('login', 'POST', user, '');
  const token = getToken.data.token;
  getToken.status===200 ? colorLog('green', `Test PASSED`) : colorLog('red', `Test FAILED`);
  TOKEN = token;
}

async function Test(id, showdata, route, method, body){
	console.log(hr);
	colorLog('yellow', `TEST: ${id}, ROUTE: ${route}, METHOD: ${method}`);
  try {
    const response = await fetchServer(route, method, body, TOKEN);
    const testStatus = (response.status === 200);
    showdata ? colorLog('pink', JSON.stringify(response.data)) : null;
    testStatus ? colorLog('green', `Test PASSED`) : colorLog('red', `Test FAILED`);
  } catch (error) {
    colorLog('red', `Test FAILED`);
    colorLog('red', `Error: ${error.message}`)
  }
}

async function fetchServer(route, method, body, token) {
  const controller = new AbortController();
  const timeout = 5000;
  const domain = 'http://localhost:3003/';
  const getUrl = domain + route;
  const config = {
    method: method,
    headers: {
      'content-type': 'application/json',
    },
    signal: controller.signal,
  }
  if (body !== '') {
    if (method === 'POST' || method === 'PUT' || method === 'DELETE') {config.body = JSON.stringify(body)}
  }
  if (token !== '') {config.headers.authorization = token}
  
  const id = setTimeout(() => controller.abort(), timeout);
  const fetched = await fetch(getUrl, config);
  clearTimeout(id);
  const status = fetched.status;
  const parsed = await fetched.json();
  const response = {status: status, data: parsed};
  return response;
}

function colorLog(color, string) {
  const colors = {
    'red':31,
    'green':32,
    'yellow':33,
    'blue':34,
    'pink':35,
    'cyan':36,
    'greybg':40,
    'redbg':41,
    'greenbg':42,
    'yellowbg':43,
    'bluebg':44,
    'pinkbg':45,
    'cyanbg':46,
    'whitebg':47,
  };
  const log = '\u001b[' + colors[color] + 'm' + string + '\u001b[0m';
  console.log(log);
}

testBattery();