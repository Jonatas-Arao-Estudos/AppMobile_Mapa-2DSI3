var longitude, latitude;
$(document).on("click","#click-map",function(){
   var onSuccess = function(position) {
     longitude = position.coords.longitude;
     latitude = position.coords.latitude; 
     L.mapquest.key = '	WxYZcfY3AagzsjSVD6S27WGEsnilgP6Z';
     var map = L.mapquest.map('map', {
       center: [latitude, longitude],
       layers: L.mapquest.tileLayer('dark'),
       zoom: 12
     });
     L.marker([latitude, longitude], {
          icon: L.mapquest.icons.marker(),
          draggable: false
        }).bindPopup('Sua Localização').addTo(map);

     map.addControl(L.mapquest.control());
 
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        navigator.notification.alert('codigo: '    + error.code    + '\n' +
              'menssagem: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});