import '@/app/assets/css/style.Slider.css';

export class Slider {
    parentElement: HTMLDivElement
    images: Array<string>
    index: number

    constructor(parentElement : HTMLDivElement, images : Array<string> = []) {
        if (parentElement == null) {
            throw "Error, parentElement does not exist";
        }
      this.parentElement = parentElement;
      this.images = images;
      this.index = 1;
  
      this.render();
      this.showSlides(1);
    }
  
    nextSlide(n : number) {
      this.showSlides(this.index += n);
    }
    
    prevSlide(n : number) {
      this.showSlides(this.index += n);
    }
    
    currentSlide(n : number) {
      this.showSlides(this.index = n);
    }
    
    showSlides(n : number) {
      let i;
      let slides = this.parentElement.querySelectorAll<HTMLDivElement>("div.hideSlide");
      let dots = this.parentElement.getElementsByClassName("dot");

      if (n > slides.length) {
        this.index = 1
    } 

      if (n < 1) {
        this.index = slides.length
    }
    
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
      }

      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }

      slides[this.index-1].style.display = "block"; 
      dots[this.index-1].className += " active";
    }
  
    render() {
      let instance = this;
  
      let slides = [];
      let dots = [];
  
      for (let index = 0; index < this.images.length; index++) {
        const image = this.images[index];
  
        slides.push(`<div class="hideSlide">
            <div class="slide" style='background-image: url(\"${image}\")'></div>
        </div>`);
  
        let thisDot = document.createElement("span")
        thisDot.id = "first";
        thisDot.classList.add("dot");
        thisDot.addEventListener("click", () => instance.currentSlide(index+1));

        dots.push(thisDot);
      }
  
      this.parentElement.innerHTML = `
      <div class="sliderWrapper">
        <div class="slideshowContainer">
        </div>
        <br>
        <div class="sliderButtons" style="text-align:center">
        </div>
      </div>`;
  
      this.getSlideShowContainer().innerHTML += slides.join("");
  
      let prevIcon = document.createElement("a")
      prevIcon.classList.add("prev");
      prevIcon.innerHTML = "&#10094;";
      prevIcon.addEventListener("click", () => instance.prevSlide(-1));

      this.getSlideShowContainer().append(prevIcon);
    
      let nextIcon = document.createElement("a")
      nextIcon.classList.add("next");
      nextIcon.innerHTML = "&#10095;";
      nextIcon.addEventListener("click", () => instance.nextSlide(+1));

      this.getSlideShowContainer().append(nextIcon);
  
      dots.forEach((dot, index) => {
        this.getSlideSliderButtons().append(dot);
      });
    }

    getSlideSliderButtons() : HTMLDivElement {
        const elem = this.parentElement.querySelector<HTMLDivElement>(".sliderButtons");

        if (!elem) {
            throw "Error";
        }

        return elem
    }

    getSlideShowContainer() : HTMLDivElement {
        const elem = this.parentElement.querySelector<HTMLDivElement>(".slideshowContainer");

        if (!elem) {
            throw "Error";
        }

        return elem
    }
}