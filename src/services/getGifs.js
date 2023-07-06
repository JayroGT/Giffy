const apiKey = `9atqf9smbYNBYgYd2nx4ZktDWuFjGfKj`

export default function getGifs({keyword = 'morty' } = {}) {

    const apiURL= `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips` 

    return fetch(apiURL)
      .then(res => res.json())
      .then(response =>{
        const {data = []} = response  // data es el array de gifs
        if(Array.isArray(data)){ //  si es un array de gifs
            const gifs = data.map(  image => {
                const {images, title, id} = image
                const { url } = images.fixed_height_downsampled
                return {title, id, url} 
            })
        return gifs
        }
      })    
}