let profile=JSON.stringify({
    name:"Mano Winstaon",
    email:"manowinstaon@gmail.com",
    skills:["JavaScript","HTML","CSS"]
})

let bio=JSON.parse(profile)

console.log(bio.name)
console.log(bio.email)
console.log(bio.skills)
