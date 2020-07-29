window.onload = function () {
  // Seven day slider based off today, remember what today is
  var today = new Date();

  // Selected day to show on the map
  var day = new Date(today.getTime());

  // GIBS needs the day as a string parameter in the form of YYYY-MM-DD.
  // Date.toISOString returns YYYY-MM-DDTHH:MM:SSZ. Split at the 'T' and
  // take the date which is the first part.
  var dayParameter = function () {
    return day.toISOString().split('T')[0];
  };

  var map = new ol.Map({
    view: new ol.View({
      maxResolution: 0.5625,
      projection: ol.proj.get('EPSG:4326'),
      extent: [-180, -90, 180, 90],
      center: [-80.87, 24.21],
      zoom: 6,
      maxZoom: 8
    }),
    target: 'map',
    renderer: ['canvas', 'dom']
  });

  function update() {
    // There is only one layer in this example, but remove them all
    // anyway
    clearLayers();

    // Add the new layer for the selected time
    map.addLayer(createLayer());

    // Update the day label
    document.querySelector('#day-label').textContent = dayParameter();
  };

  function clearLayers() {
    // Get a copy of the current layer list and then remove each
    // layer.
    var activeLayers = map.getLayers().getArray();
    for (var i = 0; i < activeLayers.length; i++) {
      map.removeLayer(activeLayers[i]);
    }
  };

  function createLayer() {
    var source = new ol.source.WMTS({
      url: 'https://gibs-{a-c}.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi?TIME=' + dayParameter(),
      layer: 'MODIS_Terra_CorrectedReflectance_TrueColor',
      format: 'image/jpeg',
      matrixSet: 'EPSG4326_250m',
      tileGrid: new ol.tilegrid.WMTS({
        origin: [-180, 80],
        resolutions: [
          0.5625,
          0.28125,
          0.140625,
          0.0703125,
          0.03515625,
          0.017578125,
          0.0087890625,
          0.00439453125,
          0.002197265625
        ],
        matrixIds: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        tileSize: 512
      })
    });

    var layer = new ol.layer.Tile({ source: source });
    return layer;
  };

  update();

  // Slider values are in 'days from present'.
  document.querySelector('#day-slider')
    .addEventListener('change', function (event) {
      // Add the slider value (effectively subracting) to today's
      // date.
      var newDay = new Date(today.getTime());
      newDay.setUTCDate(today.getUTCDate() +
        Number.parseInt(event.target.value));
      day = newDay;
      update();
    });

    var bmsPush = new BMSPush()
function callback(response) {
  alert(response.response)
}
var initParams = {
      "apikey": "ZS3HmCOh1ZMEDjK_RuKNC6gyaBwSpH4AEShW3jC0HO1a",
  "appGuid": "61aab8be-bde1-43ee-9110-0cba7cf68fdb",
  "clientSecret": "73e2df6f-ba18-4f26-811a-a26c8f4dde5a",
  "iam_apikey_description": "Auto-generated for key 5c0d8acd-87c6-4ddf-aa33-d3d22ebc531c",
  "iam_apikey_name": "Service credentials-1",
  "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
  "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/3f454f85f423d41f0121b737af0edaae::serviceid:ServiceId-36707f01-9f78-496c-8404-bd4047c6e92c",
  "plan": "LITE",
  "url": "https://imfpush.us-east.bluemix.net/imfpush/v1/apps/61aab8be-bde1-43ee-9110-0cba7cf68fdb"
}
bmsPush.initialize(params, callback); 
 });

};
