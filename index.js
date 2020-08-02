const slider = document.querySelector('.slider');


var sectionIndex = 0;

document.querySelectorAll('.controls li').forEach(function(indicator, ind) {
  indicator.addEventListener("click", function() {
    sectionIndex = ind;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicator.classList.add('selected');
    slider.style.transform = 'translate(' + (ind) * -25 + '%)';
  })
});

//google map
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}