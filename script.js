const userids = document.getElementById("userids");

const fetchedids = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data =  await res.json();
    console.log(data);
    const reqdata = data.map((a) => {
        const singleid = document.createElement("div");
        singleid.innerHTML=`<ul><b>Name:  ${a.name}</b></ul><ul>Email:  ${a.email}</ul><ul>Street:  ${a.address.street}</ul><ul>City:  ${a.address.city}</ul>`
       
        singleid.style.padding="30px 30px 30px 30px";
        singleid.style.fontSize="12px"
        singleid.style.margin="30px";
        singleid.style.borderRadius="5px"
        singleid.style.backgroundColor="aqua";
        userids.appendChild(singleid)
    });
    
    console.log(reqdata)

    
      
    
    
    

}
window.onload = fetchedids
