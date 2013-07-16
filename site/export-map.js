var cloud = [
  new ol.layer.TileLayer({
    source: new ol.source.MapQuestOpenAerial()
  }),
  new ol.layer.TileLayer({
    source: new ol.source.TiledWMS({
      url: 'http://nowcoast.noaa.gov:80/wms/com.esri.wms.Esrimap/obs?',
      params: {'LAYERS': 'RAS_GOES', 'TILED': true},
      extent: [-13884991, -7455066, 2870341, 6338219]
    })
  })
];

var map = new ol.Map({
  layers: cloud,
  renderer: ol.RendererHint.CANVAS,
  target: 'map',
  view: new ol.View2D({
    center: [0, 0],
    zoom: 2
  })
});

var exportJPEGElement = document.getElementById('export-jpeg');
exportJPEGElement.addEventListener('click', function(e) {
  e.target.href = map.getRenderer().getCanvas().toDataURL('image/jpeg');
}, false);

var exportPNGElement = document.getElementById('export-png');
exportPNGElement.addEventListener('click', function(e) {
  e.target.href = map.getRenderer().getCanvas().toDataURL('image/png');
}, false);
