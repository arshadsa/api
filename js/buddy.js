const loadbuddies = () => {
  fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data));
};
loadbuddies();

const displayBuddies = (data) => {
  const buddies = document.getElementById('buddies');
  data.results.forEach((data)=>{
    const p = document.createElement('p');
    p.innerText = `
      Name: ${data.name.title} ${data.name.first} ${data.name.last}
      Email: ${data.email}
      `;
      buddies.appendChild(p);   
      return p;
   });
}
