"use strict";

const outSliderPictures = (dragon)=> {
    let out = '';
    for(let i = 1;  i < dragon.flickr_images.length;  i++){
        out+= `<img src="${dragon.flickr_images[i]}" class="slider-img" title="dragon photo" />`;
    }
    return out;
};

class HTMLService {

    // шаблон вывода 
    paintDragon(dragon) {
        return ` 
            <div class="slider">
                <div class="slider-line" style="width: 4820px; transform: translate(0px);">
                 ${outSliderPictures(dragon)} 
                </div>
            </div>  
            <div class="slider-button">
                <button class="slider-prev">Prev</button>
                <button class="slider-next">Next</button>
            </div>
         <hr>
            <div class="description-blosc">
                <p class="name"><span>Product name:</span>  ${dragon.name}  </p>   
                <p class="description"><span>Description:</span>  ${dragon.description} </p>
                <a href="${dragon.wikipedia}" class="link-wikipedia" target="_blank">Linking to Wikipedia</a>
                <div class="options">
                    <p class="options-text"><span>Height w trunk:</span>  ${dragon.height_w_trunk.meters} m </p>
                    <p class="options-text"><span>Dry mass kg:</span>  ${dragon.dry_mass_kg} kg </p>
                    <p class="options-text"><span>First flight:</span>  ${dragon.first_flight} </p>
                </div>
            </div>
        `;
    }

    paintError(e) {
        return `<p class="error">${e.message}</p>`;
    }

}

 