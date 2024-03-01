const initSliderBack = () => {
    const imageList = document.querySelector(".photo_slider .image_list")
    const slideButtons = document.querySelectorAll(".flex .slider_button")
    const slideScrollbar = document.querySelector(".flex .slider_scrollbar")
    const scrollbarThumb = document.querySelector(".flex .slider_scrollbar .scrollbar_thumb")
    const maxScrollLeft = imageList.scrollWigth - imageList.clientWidth;

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" })
        })
    })

    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (slideScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`
    }

    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();

    })
}

window.addEventListener("load", initSliderBack)


const initSliderPhoto = () => {
    const slideButtonsPhoto = document.querySelectorAll(".photo_list .slider_button_photo")
    const PhotoList = document.querySelector(".employee_slide .photo_list")

    slideButtonsPhoto.forEach(button => {
        button.addEventListener("click", () => {
            const directionPhoto = button.id === "prev-slide_photo" ? -1 : 1;
            const scrollAmountPhoto = PhotoList.clientWidth * directionPhoto;
            PhotoList.scrollBy({ left: scrollAmountPhoto, behavior: "smooth" });
        });
    });
}


window.addEventListener("load", initSliderPhoto)




