
var url2 = 'http://20.244.56.144/numbers/primes';
var url1 = 'http://20.244.56.144/numbers/fibo';
var url3 = 'http://20.244.56.144/numbers/odd';
var arr = new Set(); // Set accepts only unique elements 

function addingToArr(data) {
  data.forEach(element => {
    arr.add(element);
  });
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getAllData() {
  try {
    const response1 = await fetch(url1);
    await delay(500); 

    const arr1 = await response1.json();

    const response2 = await fetch(url2);
    await delay(500); 

    const arr2 = await response2.json();

    const response3 = await fetch(url3);
    await delay(500); 

    const arr3 = await response3.json();

    addingToArr(arr1);
    addingToArr(arr2);
    addingToArr(arr3);
    arr.sort();
    console.log(arr);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function init() {
  document.addEventListener('DOMContentLoaded', getAllData);
}

init();
