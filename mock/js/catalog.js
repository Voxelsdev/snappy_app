(() => {

  // function addCameras() {
  //   $.ajax(options)
  //   .done((data) => {
  //     for (let i of data) {
  //       const $mainRow = $('<div class="row">');
  //         const $imageContainer = $('<div class="col s5 image-container">');
  //           const $cardContainer = $('<div class="card">');
  //             const $cardImage = $('<div class="card-image">');
  //               const $image = $(`<img src="${data[i].image}">`);
  //         const $cameraInfoContainer = $('<div class="col s7">');
  //           const $infoContainer = $('<div class="card">');
  //             const $infoContent = $('<div class="card-content black-text">');
  //               const $cameraName = $(`<span class="card-title">${data[i].name}</span>`);
  //               const $price = $(`<p>Price: $<span class="price-container">${data[i].price}</span></p>`);
  //               const $rating = $(`<p>Rating: ${data[i].rating}`);
  //             const $addToCart = $('<div class="card-action">');
  //               const $addBtn = $('<a class="waves-effect waves-light btn add-to-cart">Add To Cart</a>');
  //
  //       $addToCart.append($addBtn);
  //       $infoContent.append($cameraName);
  //       $infoContent.append($price);
  //       $infoContent.append($rating);
  //       $infoContainer.append($infoContent);
  //       $infoContainer.append($addToCart);
  //       $cameraInfoContainer.append($infoContainer);
  //
  //       $cardImage.append($image);
  //       $cardContainer.append($cardImage);
  //       $imageContainer.append($cardContainer);
  //
  //       $mainRow.append($imageContainer);
  //       $mainRow.append($cameraInfoContainer);
  //
  //       $('#camera-container').append($mainRow);
  //     }
  //
  //   });
  // }
  $('select').material_select();
})();
