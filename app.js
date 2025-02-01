function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 0, lng: 0 }, 
      zoom: 2, 
    });
  
    const locateButton = document.getElementById("locateButton");
    locateButton.addEventListener("click", () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
  
            new google.maps.Marker({
              position: pos,
              map,
              title: "Your Location",
            });
  
            map.setCenter(pos);
            map.setZoom(15);
          },
          () => {
            handleLocationError(true, map.getCenter());
          }
        );
      } else {
        handleLocationError(false, map.getCenter());
      }
    });
  }
  
  function handleLocationError(browserHasGeolocation, pos) {
    // Handle errors here
  }