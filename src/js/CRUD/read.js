fetch('http://localhost:3000/comics/2')
  .then(res => res.json())
  .then(console.log);
