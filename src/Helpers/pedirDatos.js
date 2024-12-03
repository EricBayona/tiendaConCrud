import data from "../data/data.json"

export const pedirDatos = ()=>{

    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(data)
        }, 500)
})
}

export const pedirItemPorId=(id)=>{
    return new Promise((resolve, reject) => {
        const item = data.find((prod)=> prod.id == id);
        setTimeout(()=>{
            if (item){
                resolve(item);
            }else{
                reject({
                    error : "No se encontro el producto"
                });
            }
        },1000);
    });
};