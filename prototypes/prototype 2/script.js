//random image on load

let imageLoad = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
let randomImageLoad = imageLoad[Math.floor(Math.random() * imageLoad.length)];
$('#imageLoadContainer').append(
  '<img id="loadImage" src=images/collage/' + randomImageLoad + '>'
);

//random image on click

let image = ['6.jpg', '7.jpg', '8.jpg', '9.jpg'];

function changeImage() {
  $('#theImage').remove();

  let randomImage = image[Math.floor(Math.random() * image.length)];

  $('#imageContainer').append(
    '<img id="theImage" src=images/diagram/' + randomImage + '>'
  );
}

$('.buttonChangeImage').click(function() {
  changeImage();
});

// random text on click

let myArray = ['Spine', 'Agustina', 'Sanchez'];

function showquote() {
  $('#quote').remove();
  let rand = Math.floor(Math.random() * myArray.length);
  $('#textContainer').append('<div id="quote">' + myArray[rand] + '</div>');
}

$('#randomText').click(function() {
  showquote();
});

// add random text on mouseenter

let words = [
  'Hey you how are you, ',
  'Hola que tal tu como estas, ',
  'Bonjour mon pettite ami, ',
  'Oi gata, '
];

for (let myText = 0; myText < 5; myText++) {
  $('.text').append(words[Math.floor(Math.random() * words.length)] + ' ');
}

function randomText() {
  for (let myText = 0; myText < 5; myText++) {
    $('.text').append(words[Math.floor(Math.random() * words.length)] + ' ');
  }
}

$('.text').mouseenter(function() {
  randomText();
});

// random css
for (let increment = 0; increment < 100; increment++) {
  $('#boxContainer').append('<div class="box"></div>');
}

function makePattern() {
  $('.box').each(function() {
    let topPosition =
      Math.floor(Math.random() * ($(window).height() - 100)) + 'px';
    let leftPosition =
      Math.floor(Math.random() * ($(window).width() - 100)) + 'px';
    $(this).css('top', topPosition).css('left', leftPosition);
    let newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    $(this).css('background-color', newColor);
    let newSize = Math.floor(Math.random() * 600) + 'px';
    $(this).css('width', newSize).css('height', newSize);
    let randomImage = image[Math.floor(Math.random() * image.length)];
    $(this).css('background-image', 'url(' + 'images/diagram/' + randomImage + ')');
  });
}

$(window).resize(function() {
  makePattern();
});
