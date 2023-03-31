function myfunc()
{
    var search = document.getElementById('search');
    var image = document.querySelectorAll('.image');

    for(let i = 0; i<image.length;i++){
        image[i].style.display = 'none';
    }
    for(let j = 0; j<image.length;j++){
        var title = image[j].getAttribute("data-title");
        if(search.value == title){
            image[j].style.display = 'block';
        }
        if(search.value == ''){
            image[j].style.display = 'block';
        }
    }
}