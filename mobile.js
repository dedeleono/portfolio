document.querySelector("#view-work").click( () => {
    const images = document.querySelector("#images").position().top;
  
    $('html, body').animate(
      {
        scrollTop: images
      },
      900
    );
  });