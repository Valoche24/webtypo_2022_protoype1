// RANDOM IAMGE HOME PAGE

var imagesRdn = [
    "img_random/rdm_01.webp",
    "img_random/rdm_02.webp",
    "img_random/rdm_03.webp",
    "img_random/rdm_04.webp",
    "img_random/rdm_05.webp",
    "img_random/rdm_06.webp",
    "img_random/rdm_07.webp",
    "img_random/rdm_08.webp",
    "img_random/rdm_09.webp",
    "img_random/rdm_10.webp",
    "img_random/rdm_11.webp",
    "img_random/rdm_12.webp",
    "img_random/rdm_13.webp",
    "img_random/rdm_14.webp"
   ];
   
   // this chooses a random number from all available image indices
   var randomImage = imagesRdn[Math.floor(Math.random() * imagesRdn.length)];
   console.log(imagesRdn);
   // make the URL into a proper image tag
   var imageSelect = "<img src=' " + randomImage + " '>";
   // append to the div
   document.getElementById("banner-load").innerHTML = imageSelect;
  