// promise

let newPromise = new Promise((resolve, reject) => {
  let dataReceived = true;
  if (dataReceived) {
    resolve("Data Received");
  } else {
    reject("Data Not Received");
  }
});

newPromise.then(console.log).catch(console.log);

let newPromise1 = new Promise((resolve, reject) => {
  let dataReceived = false;
  if (dataReceived) {
    resolve("Data Received");
  } else {
    reject("Data Not Received");
  }
});

newPromise1
  .then((message) => {
    console.log("Success: " + message);
    return "Next Success" + message;
  })
  .then((nextMessage) => {
    // chain method
    console.log(nextMessage);
  })
  .catch((error) => {
    console.log("Failure: " + error);
  })
  .finally(() => {
    console.log("End");
  });

// normal callback function

function fetchProfile(successcallBack, errorCallBack) {
  let dataReceived = true;
  if (dataReceived) {
    successcallBack("Data Received");
  } else {
    errorCallBack("Data Not Received");
  }
}

fetchProfile(
  (message) => {
    console.log(message);
    fetchProfile(
      (nextMessage) => {
        console.log("Next Message: " + nextMessage);
      },
      (nextError) => {
        console.log("Next Error: " + nextError);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
