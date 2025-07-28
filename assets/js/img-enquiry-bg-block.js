document.addEventListener('DOMContentLoaded', function(){

  if(document.querySelectorAll('.block-productenquiry').length > 0) {
    var prodImg = document.querySelector('.views-view-responsive-grid--horizontal .views-view-responsive-grid__item:nth-child(1) img').getAttribute('src');

    document.querySelector('.block-productenquiry').style.backgroundImage = "url('" + prodImg + "')"
  }

  if(document.querySelectorAll('.block-solutionsenquiry').length > 0) {
    var indImg;

    var automotive = document.querySelector('img[src="https://static.aesseal.com/graphics/Automotive.png"');
    var biofuel = document.querySelector('img[src="https://static.aesseal.com/graphics/Biofuels.png"');
    var chemical = document.querySelector('img[src="https://static.aesseal.com/graphics/Chemical-and-Pharmaceutical.png"');
    var construction = document.querySelector('img[src="https://static.aesseal.com/graphics/construction.png"')
    var food = document.querySelector('img[src="https://static.aesseal.com/graphics/Food-and-Beverage.png"');
    var marine = document.querySelector('img[src="https://static.aesseal.com/graphics/Marine.png"');
    var metal = document.querySelector('img[src="https://static.aesseal.com/graphics/Metal-Processing.png"');
    var mining = document.querySelector('img[src="https://static.aesseal.com/graphics/Mining-and-Minerals.png"');
    var oil = document.querySelector('img[src="https://static.aesseal.com/graphics/Oil-and-Gas.png"');
    var power = document.querySelector('img[src="https://static.aesseal.com/graphics/Power-Generation.png"');
    var pulp = document.querySelector('img[src="https://static.aesseal.com/graphics/Pulp-and-Paper.png"');
    var water = document.querySelector('img[src="https://static.aesseal.com/graphics/Water-and-Waste-Water.png"');

    if(automotive) {
      indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Automotive.jpg"
    } else if (biofuel) {
      indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Biofuels.jpg"
    } else if (chemical) {
      indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Chemical.jpg"
    } else if (construction) {
      indImg = "https://static.aesseal.com/photo/wavehead/wideformatmobile/Construction.jpg"
    } else if (food) {
      indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Food-and-beverage.jpg"
    } else if (marine) {
      indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Marine.jpg"
    } else if (metal) {
      indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Metal-Processing.jpg"
    } else if (mining) {
      indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Mining-and-Minerals.jpg"
    } else if (oil) {
      indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Oil-and-Gas.jpg"
    } else if (power) {
      indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Power-Generation.jpg"
    } else if (pulp) {
      indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Pulp-and-Paper.jpg"
    } else if (water) {
      indImg = "https://static.aesseal.com/photo/wavehead/wideformatfull/Water-and-Waste-Water.jpg"
    }

  document.querySelector('.block-solutionsenquiry').style.backgroundImage =  "url('" + indImg + "')";
  }
});
