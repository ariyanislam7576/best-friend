const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5&fbclid=IwAR0C0wSKRKXHkKTishA_w6bIGRWL6vbBmPCls1aI0gtgcOAVml_WM6aTS5o')
        .then(res => res.json())
        .then(data => displayBuddies(data.results))
}
const displayBuddies = buddies => {
    console.log(buddies);
   const myBuddy = document.getElementById('user')
   for(const buddy of buddies){
       const div = document.createElement('div')
       div.classList.add('card')
       div.innerHTML = `
       <div class="row g-0">
              <div class="col-md-4">
                <img width="200px" src="${buddy.picture.large}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"> ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional.</p>
                  <h5>${buddy.email}<h5/>
                  <h5>${buddy.phone}<h5/>
                </div>
              </div>
            </div>
       
       `
       myBuddy.appendChild(div)
   }

}