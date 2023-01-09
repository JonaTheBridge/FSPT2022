const MongoDB = {
  main: {
    uri: "mongodb://127.0.0.1:27017/main",
    config:{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  }
}

const MySQL = {
  main:{
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'main',
  }
};

export { MongoDB, MySQL };