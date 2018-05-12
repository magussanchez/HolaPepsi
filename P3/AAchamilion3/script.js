//random image on click

let image = ['abstract.jpg', 'after.jpg', 'ambulancia.jpg', 'art-mirror.jpg', 'art-spinal.jpg', 'body.jpg', 'cama.jpg', 'columna.jpg', 'columnita.jpg', 'cords.jpg', 'corset.jpg', 'cuerpo.jpg', 'cut.jpg', 'fam.jpg', 'familu.jpg', 'final before.jpg', 'graph.jpg', 'IMG_2268.jpg', 'me1.jpg',
'nknown.jpg', 'pills.jpg', 'pool.jpg', 'red.jpg', 'redish.jpg', 'scarrr.jpg', 'screws.jpg', 'simple-double.jpg', 'spine-2.jpg', 'spine-surgery.jpg', 'sssscopy.jpg', 'x-ray.jpg']

function changeImage() {
  $('#theImage').remove();

  let randomImage = image[Math.floor(Math.random() * image.length)];

  $('#imageContainer').append(
    '<img id="theImage" src=images/' + randomImage + '>'
  );
}

$('.buttonChangeImage').click(function() {
  changeImage();
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
    $(this).css('background-image', 'url(' + 'images/' + randomImage + ')');
  });
}

$(window).resize(function() {
  makePattern();
});
