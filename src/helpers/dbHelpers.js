const closeConnectionToDB = (client) => {
  client.close();
};

export { closeConnectionToDB };
