fetch('https://picsum.photos/v2/list')
.then(response=>response.json())
.then(data=>{data.forEach(photoObj => {
    photoUl = document.getElementById('photo-list');
    listEl = document.createElement('li');
    listEl.innerText = photoObj.author;
    photoUl.appendChild(listEl);
    listEl.addEventListener('click', function(){
        document.getElementById('photo-url').src = photoObj.download_url;
        document.getElementById('url').innerText = photoObj.url;
        document.getElementById('photo-width').innerText = photoObj.width;
        document.getElementById('photo-height').innerText = photoObj.height;
    })
    console.log(photoObj); 
});
})