export const getAllProducts=async()=>{
    const res = await fetch('http://localhost:8000/products');
    const data = await res.json();
    console.log(data)
    return data;
}