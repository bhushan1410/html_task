function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function asyncFunction() {
  console.log("Before delay");
  await delay(2000);
  console.log("After delay");
}

asyncFunction();
