

export default async function getAllUsers() {
    const allusers=await fetch("https://jsonplaceholder.typicode.com/users")

    if(!allusers.ok) throw new Error("not found")

    return allusers.json()
  
}
