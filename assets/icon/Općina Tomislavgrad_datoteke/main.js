const lat = 43.787183
const lon = 16.732731
const y = 5421643.41
const x = 1917834.45
const yS = y - 120000
const yN = y + 120000
const xE = x - 200000
const xW = x + 200000
const lonLatCrkvaTG = [17.225002, 43.721394]

// default zoom, center and rotation
var zoom = 9.5;
var center =  ol.proj.fromLonLat([lon, lat]);

if (window.location.hash !== '') {
  // try to restore center, zoom-level and rotation from the URL
  var hash = window.location.hash.replace('#map=', '');
  var parts = hash.split('/');
  if (parts.length === 3) {
    zoom = parseFloat(parts[0]);
    center = [parseFloat(parts[1]), parseFloat(parts[2])];
  }
}


//var imageExtent = [1917834.45, 5421643.41, 2500000, 6500000];
//var imageExtent2 = [2500000, 5421000, 2500000, 6500000];


//const xyCrkvaTG = ol.proj.fromLonLat(lonLatCrkvaTG)
//const crkvaTGextent =[xyCrkvaTG[0], xyCrkvaTG[1], xyCrkvaTG[0]+1000, xyCrkvaTG[1]+1000]
//console.log(crkvaTGextent)
var sourceFeatures = new ol.source.Vector()
var markers = new ol.layer.Vector({
  source: sourceFeatures,
  declutter: false,
  minZoom: 13.5,
})



var map = new ol.Map({
  controls : ol.control.defaults({
    attribution : false,
    zoom : false,
  }),
  layers: [ 
    //new ol.layer.Tile({
    //  source: new ol.source.Stamen({
    //    layer: 'terrain'
    //  }),
    //  opacity: 0.5
    //}),

    new ol.layer.Tile({
      source: new ol.source.OSM(),
      opacity: 0.5,
      name: 'basemap'
    }),

    //new ol.layer.MapboxVector({
    //  styleUrl: 'mapbox://styles/mapbox/outdoors-v11',
    //  accessToken: 'pk.eyJ1IjoibGF2dGljMjIiLCJhIjoiY2ttdWZhNHZrMHVwNjJxbXdsem4wd2k2MiJ9.enCC1BQeW5JXwCYbkB0Ecw'
    //}),
    //new ol.layer.Image({
    //  source: new ol.source.ImageWMS({
    //    url: 'http://localhost:8080/geoserver/Drinovci/wms',
    //    params: {'LAYERS' : 'Drinovci:Naselja'},
    //    ratio: 1,
    //    serverType: 'geoserver'
    //  }),
    //}),    
    //new ol.layer.Image({
    //  source: new ol.source.ImageWMS({
    //    url: 'http://localhost:8080/geoserver/Drinovci/wms',
    //    params: {'LAYERS' : 'Drinovci:podloga'},
    //    ratio: 1,
    //    serverType: 'geoserver'
    //  }),
    //}),
    //new ol.layer.Image({
    //  opacity: 1,
    //  source: new ol.source.ImageWMS({
    //    ratio: 1,
    //    servertype: 'geoserver',
    //    url: 'http://localhost:8080/geoserver/Drinovci/wms',
    //    params: {
    //          "LAYERS": 'Drinovci:grudeGrb',
    //          "exceptions": 'application/vnd.ogc.se_inimage',
    //    },
    //  })
    //}),
    tomislavgradNaselja = new ol.layer.Image({
      //minZoom: 11.6,
      //maxZoom: 13,
      opacity: 1,
      source: new ol.source.ImageWMS({
        url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
        params: {'LAYERS' : 'Tomislavgrad:NM_TG_polygon'},
        ratio: 1,
        serverType: 'geoserver'
      }),
      name: 'tgnaselja'
    }),
    tomislavgradNaselja_nazivi = new ol.layer.Image({
      minZoom: 11.6,
      //maxZoom: 13,
      opacity: 1,
      source: new ol.source.ImageWMS({
        url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
        params: {'LAYERS' : 'Tomislavgrad:tomislavgradNaselja_nazivi'},
        ratio: 1,
        serverType: 'geoserver'
      }),
      name: 'tgnazivi'
    }),
    opcine = new ol.layer.Image({
      maxZoom: 11.5,
      source: new ol.source.ImageWMS({
        ratio: 1,
        servertype: 'geoserver',
        url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
        params: {
              "LAYERS": 'Tomisavgrad:opcine',
              "exceptions": 'application/vnd.ogc.se_inimage',
        },
        name: 'opcine'
      })
    }),    
    tomislavgradZastava = new ol.layer.Image({
      maxZoom: 11.5,
      opacity: 1,
      source: new ol.source.ImageWMS({
        url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
        params: {'LAYERS' : 'Tomislavgrad:tomislavgradZastava'},
        ratio: 1,
        serverType: 'geoserver'
      }),
      name: 'tg'
    }),
    ramaPodloga = new ol.layer.Image({
      maxZoom: 11.5,
      opacity: 1,
      source: new ol.source.ImageWMS({
        url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
        params: {'LAYERS' : 'Tomislavgrad:ramaPodloga'},
        ratio: 1,
        serverType: 'geoserver'
      }),
      name: 'rama'
    }),
    ramaZastava = new ol.layer.Image({
      maxZoom: 11.5,
      opacity: 1,
      source: new ol.source.ImageWMS({
        url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
        params: {'LAYERS' : 'Tomislavgrad:ramaZastava'},
        ratio: 1,
        serverType: 'geoserver'
      }),
      name: 'rama'
    }),
    posusjeZastava = new ol.layer.Image({
      maxZoom: 11.5,
      opacity: 1,
      source: new ol.source.ImageWMS({
        url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
        params: {'LAYERS' : 'Tomislavgrad:posusjeZastava'},
        ratio: 1,
        serverType: 'geoserver'
      }),
      name: 'posusje'
    }),
    livnoPodloga = new ol.layer.Image({
      maxZoom: 11.5,
      opacity: 1,
      source: new ol.source.ImageWMS({
        url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
        params: {'LAYERS' : 'Tomislavgrad:livnoPodloga'},
        ratio: 1,
        serverType: 'geoserver'
      }),
      name: 'livno'
    }),
    livnoZastava = new ol.layer.Image({
      maxZoom: 11.5,
      opacity: 1,
      source: new ol.source.ImageWMS({
        url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
        params: {'LAYERS' : 'Tomislavgrad:livnoZastava'},
        ratio: 1,
        serverType: 'geoserver'
      }),
      name: 'livno'
    }),
    kupresZastava = new ol.layer.Image({
      maxZoom: 11.5,
      opacity: 1,
      source: new ol.source.ImageWMS({
        url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
        params: {'LAYERS' : 'Tomislavgrad:kupresZastava'},
        ratio: 1,
        serverType: 'geoserver'
      }),
      name: 'kupres'
    }),
    kupresPodloga_blue = new ol.layer.Image({
      maxZoom: 11.5,
      opacity: 1,
      source: new ol.source.ImageWMS({
        url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
        params: {'LAYERS' : 'Tomislavgrad:kupresPodloga_blue'},
        ratio: 1,
        serverType: 'geoserver'
      }),
      name: 'kupres'
    }),
    kupresPodloga_red = new ol.layer.Image({
      maxZoom: 11.5,
      opacity: 1,
      source: new ol.source.ImageWMS({
        url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
        params: {'LAYERS' : 'Tomislavgrad:kupresPodloga_red'},
        ratio: 1,
        serverType: 'geoserver'
      }),
      name: 'kupres'
    }),
    jablanicaZastava = new ol.layer.Image({
      maxZoom: 11.5,
      opacity: 1,
      source: new ol.source.ImageWMS({
        url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
        params: {'LAYERS' : 'Tomislavgrad:jablanicaZastava'},
        ratio: 1,
        serverType: 'geoserver'
      }),
      name: 'jablanica'
    }),
    //opcineZastave = new ol.layer.Image({
    //  source: new ol.source.ImageWMS({
    //    ratio: 1,
    //    servertype: 'geoserver',
    //    url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
    //    params: {
    //          "LAYERS": 'Tomisavgrad:opcineZastave',
    //          "exceptions": 'application/vnd.ogc.se_inimage',
    //    },
    //  })
    //}),   
    opcineGranice = new ol.layer.Image({
      maxZoom: 11.5,
      opacity: 1,
      source: new ol.source.ImageWMS({
        url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
        params: {'LAYERS' : 'Tomislavgrad:opcine_granice'},
        ratio: 1,
        serverType: 'geoserver'
      }),
      name: 'opcine'
    }),
  ],
  target: 'map',
  view: new ol.View({
    center: center,
    zoom: zoom,
    extent: [xE, yS, xW, yN]
  }),  
});

var zoom = map.getView().getZoom()


//Pointer style
map.on("pointerdrag", function (evt) {
  this.getTargetElement().style.cursor = "move"
})
map.on("pointerup", function (evt){
  this.getTargetElement().style.cursor = 'default'
})
map.on("pointermove", function (evt) {
  var hit = this.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
      return true;
  }); 
  if (hit) {
      this.getTargetElement().style.cursor = 'pointer';
  } else {
      this.getTargetElement().style.cursor = 'default';
  }
});
//function setSource() {
//  var source = new ol.source.ImageStatic({
//    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Crkva_Nikole_Taveli%C4%87a-TG09534.JPG/220px-Crkva_Nikole_Taveli%C4%87a-TG09534.JPG',
//    crossOrigin: '',
//    projection: 'EPSG:3857',
//    imageExtent: crkvaTGextent,
//  });
//  imageLayer.setSource(source);
//}
//setSource();


// ----------------------------------------------------------------------
// Import and show images based on data from objects

//var fill = new ol.style.Fill({
//  color: 'rgba(255,255,255,1)'
//});
//var stroke = new ol.style.Stroke({
//  color: '#FFFFFF',
//  width: 0
//});
//var fillHiglight = new ol.style.Fill({
//  color: '#0069d9'
//});
//var strokeHighlight = new ol.style.Stroke({
//  color: '#696969',
//  width: 3,
//  opacity: 0.1,
//});
//
//var polyStyle = new ol.style.Style({
//  image: new ol.style.RegularShape({
//    fill: fill,
//    stroke: stroke,
//    radius: 150 / Math.SQRT2,
//    radius2: 150,
//    points: 4,
//    angle: 0,
//    scale: [1, 0.77],
//  }),
//})
//
//var highlightStyle = new ol.style.Style({
//  opacity: 0.3,
//  image: new ol.style.RegularShape({
//    fill: fill,
//    stroke: strokeHighlight,
//    radius: 150 / Math.SQRT2,
//    radius2: 150,
//    points: 4,
//    angle: 0,
//    scale: [1, 0.8],
//  }),
//})
//
//var highlightStyle2 = new ol.style.Style({
//  opacity: 1,
//  zIndex: 100,
//  stroke: new ol.style.Stroke({
//    color: [255,0,0,1],
//    width: 10
//  })
//})
//
//var sourcePoly = new ol.source.Vector()
//var layerPoly = new ol.layer.Vector({
//  source: sourcePoly,
//  opacity: 0,
//  declutter: true,
//})
//
//var imageObjects = [], cityObject = [];


// Add virtual reality icons
const addImage = (obj) => {
        

  //var polyFeature = new ol.Feature({
  //  geometry: new ol.geom.Point(center)
  //})
  var iconFeature = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat(obj.center)),
      name: obj.name,
      url: obj.url,
    })
  var iconStyle = new ol.style.Style({
    image: new ol.style.Icon({
      src: 'assets/icon/virtual-reality.svg',
      anchor: [0.5, 0,5],
      size: [230, 230],
      scale: 0.5
    })
  })
          
  iconFeature.setStyle(iconStyle)
  sourceFeatures.addFeature(iconFeature)
  //polyFeature.setStyle(polyStyle)
  //sourcePoly.addFeature(polyFeature)
      
    
  
  //iconFeature.type = obj.type
  //imageObjects.push(iconFeature)
  //console.log(iconFeature.type)
      
      
}
    
//map.addLayer(layerPoly)
map.addLayer(markers)


//Location and URL for 360 icons
var images = [
  {
    center: [17.232761, 43.716620],
    name: 'Crkva svetog Nikole Tavelića',
    url: 'http://127.0.0.1:5501/panorama_tomislavgrad.html'
  },
  {
    center: [17.222761, 43.713],
    name: 'Crkva svetog Nikole Tavelića',
    url: 'http://127.0.0.1:5501/panorama_tomislavgrad_2.html'
  },
  //{
  //  center: [17.226113, 43.718290],
  //  name: 'Spomenik kralju Tomislavu',
  //  url: '/assets/kraljTomislav_thumbnail.jpg',
  //  url2: '/assets/kraljTomislav.jpg',
  //  about: 'Samostan u Tomislavgradu, je franjevački samostan u Mostarsko-duvanjskoj biskupiji, u Tomislavgradu, Bosna i Hercegovina. Proglašen je za nacionalni spomenik Bosne i Hercegovine na sjednici održanoj u Sarajevu od 11. oktobra 2017. godine. Odluku donijela je Komisija u sastavu: Amir Pašić, Goran Milojević (predsjedvajući), Radoje Vidović. Nacionalni spomenik se sastoji od: crkve sv. Nikole Tavelića i zapadnog krila franjevačkog samostana.',
  //  type: 'znamenitost',
  //  scale: 1,
  //},
  //{
  //  center: [17.227626, 43.716883],
  //  name: 'općina',
  //  url: '/assets/opcinaTomislavgrad.jpg',
  //  type: 'znamenitost',
  //  scale: 1,
  //},
  //{
  //  center: [17.006063, 43.825128],
  //  name: 'Livno',
  //  url: 'assets/grbovi/livno.png',
  //  type: 'grb'
  //},
  //{
  //  center: [17.225064, 43.718843],
  //  name: 'Tomislavgrad',
  //  url: 'assets/grbovi/tomislavgrad.png',
  //  type: 'grb'
  //},
]


var i = 0
for (i; i < images.length; i++) {
  addImage(images[i])
}

//360 image locations
//var iconStyle = new ol.style.Style({
//  image: new ol.style.Icon({
//    src: 'assets/icon/pin.jpg',
//    anchor: [0.5, 0.5],
//    opacity: 1,
//    size: [200, 150],
//  })
//})
//
//const add360 = (obj) => {
//  
//  var center = ol.proj.fromLonLat(obj.center)
//  
//  var iconFeature = new ol.Feature({
//    geometry: new ol.geom.Point(ol.proj.fromLonLat(center)),
//  })
//  var iconStyle = new ol.style.Style({
//    image: new ol.style.Icon({
//      src: 'https://miro.medium.com/max/3832/1*G9XsIxODBSxmM2Iyqgal-g.png',
//      anchor: [0.5, 0.5],
//      opacity: 1,
//      size: [200, 150],
//    })
//  })
//  console.log('ucitano')
//  iconFeature.setStyle(iconStyle)
//  sourceFeatures.addFeature(iconFeature)
//  map.addLayer(markers)
//}
//
//
//var _360s = [
//  {
//    center: [17.233554, 43.716220],
//    url: 'assets/crkvaTomislavgrad.jpg',
//  }
//]
//var i = 0
//for (i ; i < _360s.length; i++) {
//  console.log(_360s[i])
//  add360(_360s[i])
//}
// --------------------------------------------------------


// Grbovi


//var marker1 = new ol.layer.Vector({
//  source: new ol.source.Vector({
//    features: [
//      new ol.Feature({
//        geometry: new ol.geom.Point(ol.proj.fromLonLat([17.225780, 43.721700])),
//        name: 'crkvaNikoleTavelića'
//      })
//    ]
//  }),
//  style: new ol.style.Style({
//    image: new ol.style.Icon({
//      src: 'assets/crkvaTomislavgrad.jpg',
//      anchor: [0.5, 0.5],
//      scale: 0.2
//    })
//  })
//});
//var marker2 = new ol.layer.Vector({
//  source: new ol.source.Vector({
//    features: [
//      new ol.Feature({
//        geometry: new ol.geom.Point(ol.proj.fromLonLat([17.227626, 43.716883])),
//        name: 'općina'
//      })
//    ]
//  }),
//  style: new ol.style.Style({
//    image: new ol.style.Icon({
//      src: 'assets/opcinaTomislavgrad.jpg',
//      anchor: [0.5, 0.5],
//      opacity: 0
//    })
//  })
//});
//map.addLayer(marker1);
//map.addLayer(marker2)

var view = map.getView();
var updatePermalink = function () {
  var center = view.getCenter();
  var hash =
    '#map=' +
    view.getZoom().toFixed(2) +
    '/' +
    center[0].toFixed(2) +
    '/' +
    center[1].toFixed(2)
  var state = {
    zoom: view.getZoom(),
    center: view.getCenter(),
  };
  window.history.pushState(state, 'map', hash);
};

map.on('moveend', updatePermalink);


var currZoom = map.getView().getZoom();
map.on('moveend', function(e) {
  var newZoom = map.getView().getZoom();
  if (currZoom != newZoom) {
    console.log('currzooom  ' + newZoom);
    currZoom = newZoom;
    console.log(currZoom)
  //  if (currZoom <= 11.5) {
  //    //layerPoly.setOpacity(0)
  //    opcine.setOpacity(1)
  //    tomislavgradNaselja.setOpacity(0)
  //    opcineGranice.setOpacity(1)
  //    //opcineZastave.setOpacity(1)
  //    tomislavgradZastava.setOpacity(1)
  //    livnoZastava.setOpacity(1)
  //    kupresZastava.setOpacity(1)
  //    jablanicaZastava.setOpacity(1)
  //    posusjeZastava.setOpacity(1)
  //    ramaZastava.setOpacity(1)
  //    livnoPodloga.setOpacity(1)
  //    ramaPodloga.setOpacity(1)
  //    kupresPodloga_blue.setOpacity(1)
  //    kupresPodloga_red.setOpacity(1)  
//
  //    //for (const img in imageObjects){
  //    //  if (imageObjects[img].type == 'znamenitost'){
  //    //    imageObjects[img].getStyle().getImage().setOpacity(0)
  //    //    imageObjects[img].changed()
  //    //  } else {
  //    //    imageObjects[img].getStyle().getImage().setOpacity(0)
  //    //    imageObjects[img].changed()
  //    //  }
  //    //}
  //  //marker1.getStyle().getImage().setOpacity(1);
  //  //marker2.getStyle().getImage().setOpacity(0);
  //  //marker2.getSource().changed()
  //  }
  //  if (currZoom <= 11.5) {
  //    vector.setOpacity(0)
  //    opcine.setOpacity(1)
  //    tomislavgradNaselja.setOpacity(0)
  //    opcineGranice.setOpacity(1)
  //    //opcineZastave.setOpacity(1)
  //    tomislavgradZastava.setOpacity(1)
  //    livnoZastava.setOpacity(1)
  //    kupresZastava.setOpacity(1)
  //    jablanicaZastava.setOpacity(1)
  //    posusjeZastava.setOpacity(1)
  //    ramaZastava.setOpacity(1)
  //    livnoPodloga.setOpacity(1)
  //    ramaPodloga.setOpacity(1)
  //    kupresPodloga_blue.setOpacity(1)
  //    kupresPodloga_red.setOpacity(1)  
//
  //    //for (const img in imageObjects){
  //    //  if (imageObjects[img].type == 'znamenitost'){
  //    //    imageObjects[img].getStyle().getImage().setOpacity(0)
  //    //    imageObjects[img].changed()
  //    //  } else {
  //    //    imageObjects[img].getStyle().getImage().setOpacity(0)
  //    //    imageObjects[img].changed()
  //    //  }
  //    //}
  //  //marker1.getStyle().getImage().setOpacity(1);
  //  //marker2.getStyle().getImage().setOpacity(0);
  //  //marker2.getSource().changed()
  //  }
  //  if (currZoom > 11.5 && currZoom < 13) {
//
  //    //map.on('singleclick', function (evt) {
  //    console.log("zoom je veći od 10 manji od 13");
  //      //map.forEachLayerAtPixel(evt.pixel, function(layer) {
  //      //    console.log(evt.pixel);
  //      //    console.log(layer);
  //      //    var id = layer.get('title');
  //      //    console.log(id);
  //      //    var title = layer.get('title');
  //      //    console.log(title);
  //      //    var whatever = layer.get('whatever');
  //      //    console.log(whatever);
  //      //});
  //    //});
  //    vector.setOpacity(0)
  //    opcine.setOpacity(0)
  //    tomislavgradNaselja.setOpacity(1)
  //    opcineGranice.setOpacity(1)
  //    //opcineZastave.setOpacity(0)
//
  //    tomislavgradZastava.setOpacity(0)
  //    livnoZastava.setOpacity(0)
  //    kupresZastava.setOpacity(0)
  //    jablanicaZastava.setOpacity(0)
  //    posusjeZastava.setOpacity(0)
  //    ramaZastava.setOpacity(0)
  //    livnoPodloga.setOpacity(0)
  //    ramaPodloga.setOpacity(0)
  //    kupresPodloga_blue.setOpacity(0)
  //    kupresPodloga_red.setOpacity(0)
//
  //    //for (const img in imageObjects){
  //    //  if (imageObjects[img].type == 'znamenitost'){
  //    //  imageObjects[img].getStyle().getImage().setOpacity(0)
  //    //  imageObjects[img].changed()
  //    //} else {
  //    //  console.log(imageObjects[img].type)
  //    //  imageObjects[img].getStyle().getImage().setOpacity(0)
  //    //  imageObjects[img].changed()
  //    //}
////
  //    //}
  //    //marker1.getStyle().getImage().setOpacity(1);
  //    //marker2.getStyle().getImage().setOpacity(1);
  //    //marker2.getSource().changed()
  //  } 
  //  if (currZoom > 13) {
//
  //    //map.on('singleclick', function (evt) {
  //    console.log("zoom je veći od 13");
  //      //map.forEachLayerAtPixel(evt.pixel, function(layer) {
  //      //    console.log(evt.pixel);
  //      //    console.log(layer);
  //      //    var id = layer.get('title');
  //      //    console.log(id);
  //      //    var title = layer.get('title');
  //      //    console.log(title);
  //      //    var whatever = layer.get('whatever');
  //      //    console.log(whatever);
  //      //});
  //    //});
  //    vector.setOpacity(1)
  //    opcine.setOpacity(0)
  //    tomislavgradNaselja.setOpacity(0)
  //    //opcineZastave.setOpacity(0)
//
  //    tomislavgradZastava.setOpacity(0)
  //    livnoZastava.setOpacity(0)
  //    kupresZastava.setOpacity(0)
  //    jablanicaZastava.setOpacity(0)
  //    posusjeZastava.setOpacity(0)
  //    ramaZastava.setOpacity(0)
  //    livnoPodloga.setOpacity(0)
  //    ramaPodloga.setOpacity(0)
  //    kupresPodloga_blue.setOpacity(0)
  //    kupresPodloga_red.setOpacity(0)
//
  //    //for (const img in imageObjects){
  //    //  if (imageObjects[img].type == 'znamenitost'){
  //    //  imageObjects[img].getStyle().getImage().setOpacity(1)
  //    //  imageObjects[img].changed()
  //    //} else {
  //    //  console.log(imageObjects[img].type)
  //    //  imageObjects[img].getStyle().getImage().setOpacity(1)
  //    //  imageObjects[img].changed()
  //    //}
////
  //    //}
  //    //marker1.getStyle().getImage().setOpacity(1);
  //    //marker2.getStyle().getImage().setOpacity(1);
  //    //marker2.getSource().changed()
  //  } 
  }
})



// Eventlistener za općine
a = map.on('singleclick', function(evt) {
  if (currZoom < 11.5) {
    document.getElementById('landmark').style.display = 'none';
    document.getElementById('image').style.display = 'none';
    document.getElementById('landmark-about').style.display = 'none';
    document.getElementById('nodelist').style.display = 'inline-block';
    document.getElementById('nodelist').innerHTML = "Učitavanje";
    var view = map.getView();
    var viewResolution = view.getResolution();
    var source =  opcine.getSource()
    var url = source.getFeatureInfoUrl(
      evt.coordinate, viewResolution, view.getProjection(),
      {'INFO_FORMAT': 'text/html'});
    if (url) {
      fetch(url)
      .then(function (response) { return response.text(); })
      .then(function (html) {
        document.getElementById('nodelist').innerHTML = html
        //source.syle = highlightStyle2
        opcine.changed()
        if(html[1] == 'h'){
          document.getElementById('msg').style.display = 'inline-block'
        } else {
          document.getElementById('msg').style.display = 'none'
        }
      });
    }
  } 
//  if (currZoom > 13) {
    
//      var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
//        return feature;
//      });
//      if (feature) {
//        document.getElementById('nodelist').style.display = 'none';
//        document.getElementById('landmark').style.display = 'inline-block';
//        document.getElementById('image').style.display = 'inline-block';
//        document.getElementById('landmark-about').style.display = 'inline-block';
//        document.getElementById('landmark').innerHTML = feature.get('name');
//        document.getElementById('landmark-about').innerHTML = feature.get('about');
//        document.getElementById('image').src = feature.get('url2');
//      }
//  }
})



// Array to cache image style
var styleCache = {};
// Vector style
function getFeatureStyle (feature, resolution, sel) {
  var k = $('#kind').val()+"_"+$("#border").val()+"_"+feature.get("img").match(/[^\\/]+$/)[0]+($("#shadow").prop('checked')?"_1":"_0")+($("#crop").prop('checked')?"_1":"_0")+(sel?"_1":"");
  var k = $('#kind').val()+"_"+$("#border").val()+"_"+feature.get("img").match(/[^\\/]+$/)[0]+($("#shadow").prop('checked')?"_1":"_0")+($("#crop").prop('checked')?"_1":"_0")+(sel?"_1":"");
  var style = styleCache[k];
    if (!style) {
      var style = new ol.style.Style ({
        image: new ol.style.Photo ({
          src: feature.get("img"),
          radius: sel ? 60 : 60,
          crop: true,
          kind: sel ? 'square' : 'circle',
          shadow: 25,
          onload: vector.changed(),
          stroke: new ol.style.Stroke({
            width: 1.5 + (sel ? 1 : 0),
            color: sel ? '#fff' : '#fff'
        })
      })
    });
  }
  return [style];
}

function getFeatureStyleTours (feature, resolution, sel) {
  // var k = $('#kind').val()+"_"+$("#border").val()+"_"+feature.get("img").match(/[^\\/]+$/)[0]+($("#shadow").prop('checked')?"_1":"_0")+($("#crop").prop('checked')?"_1":"_0")+(sel?"_1":"");
    //var k = $('#kind').val()+"_"+$("#border").val()+"_"+feature.get("img").match(/[^\\/]+$/)[0]+($("#shadow").prop('checked')?"_1":"_0")+($("#crop").prop('checked')?"_1":"_0")+(sel?"_1":"");
    //var style = styleCache[k];
    if (!style) {
      var style = new ol.style.Style ({
        image: new ol.style.Photo ({
          src: feature.get("img"),
          radius: sel ? 60 : 40,
          crop: true,
          kind: sel ? 'anchored' : 'anchored',
          shadow: 25,
          onload: vector.changed(), //function(){vector.changed();},
          stroke: new ol.style.Stroke({
            width: 1.5 + (sel ? 1 : 0),
            color: sel ? '#fff' : '#fff'
        })
      })
    });
  }
  return [style];
}

// GeoJSON layers -----------------------------------------
// Landmarks
var vectorSource = new ol.source.Vector({
  url: 'assets/landmarks/landmarks.geojson',
  projection: 'EPSG:3857',
  format: new ol.format.GeoJSON(),
});

var vector = new ol.layer.Vector({
  minZoom: 11.5,
  name: 'landmarks',
  source: vectorSource,
  declutter: true,
  opacity: 1,
  visible: 1,
  // y ordering
  //renderOrder: ol.ordering.yOrdering(),
  style: getFeatureStyle
});

//var vectorSourceTour = new ol.source.Vector({
//  url: 'assets/tours/tour2.geojson',
//  projection: 'EPSG:3857',
//  format: new ol.format.GeoJSON(),
//});
//
//var vectorTours = new ol.layer.Vector({
//  minZoom: 13,
//  name: 'landmarksTours',
//  source: vectorSourceTour,
//  declutter: true,
//  opacity: 1,
//  visible: 0,
//  // y ordering
//  //renderOrder: ol.ordering.yOrdering(),
//  style: getFeatureStyleTours
//});

//map.addLayer(vectorTours)
//vectorTours.setZIndex(10)
map.addLayer(vector);
vector.setZIndex(10)
vectorSource.refresh()

// Tours

// tour1
var tour1Source = new ol.source.Vector({
  url: 'assets/tours/tour1.geojson',
  projection: 'EPSG:3857',
  format: new ol.format.GeoJSON(),
});

var tour1 = new ol.layer.Vector({
  //minZoom: 13,
  name: 'tour1',
  source: tour1Source,
  declutter: true,
  opacity: 0,
  // y ordering
  //renderOrder: ol.ordering.yOrdering(),
  style: getFeatureStyleTours
});

map.addLayer(tour1);

// tour2
var tour2Source = new ol.source.Vector({
  url: 'assets/tours/tour2.geojson',
  projection: 'EPSG:3857',
  format: new ol.format.GeoJSON(),
});

var tour2 = new ol.layer.Vector({
  //minZoom: 13,
  name: 'tour2',
  source: tour2Source,
  declutter: true,
  opacity: 0,
  // y ordering
  //renderOrder: ol.ordering.yOrdering(),
  style: getFeatureStyleTours
});

map.addLayer(tour2);

// Associations layer
assocSource = new ol.source.Vector({
  url: 'assets/landmarks/assocs.geojson',
  projection: 'EPSG:3857',
  format: new ol.format.GeoJSON(),
})

var assocs = new ol.layer.Vector({
  minZoom: 13,
  name: 'assocs',
  source: assocSource,
  declutter: true,
  opacity: 1,
  // y ordering
  //renderOrder: ol.ordering.yOrdering(),
  style: getFeatureStyle,
});
map.addLayer(assocs)

let tours = []
map.getLayers().forEach(function (layer) {
  let layName = layer.get('name')
  if(layName){
    if(layName.slice(0,4)=='tour'){
      tours.push(layer)
    }
  }
})



// MeetTg and Routes functions -----------------------------------------------
var meet = 1

function meetTg() {
  if(meet==1) {
    return
  } else {
    meet = 1
    for (var i = 0; i < toursDesc.length; i++){
      toursDesc[i].style.display = 'none'
    }
    document.getElementById('meet').style.display = 'block'
    document.getElementById('routes').style.display = 'none'
    document.getElementById('assoc').style.display = 'none'
    var activate = document.getElementsByClassName('activate')
    while(activate.length){
      activate[0].classList.remove('activate')
    }
    document.getElementById('btn-meet').classList.add('activate')
    //document.getElementById('btn-routes').classList.remove('activate')
    //document.getElementById('btn-assoc').classList.remove('activate')
    //vectorTours.setVisible(false)
    tour1.setVisible(false)
    tour2.setVisible(false)
    routeSource.clear()
  } 
}

function routes() {
  if(meet==2) {
    return
  } else {
    meet = 2
    document.getElementById('meet').style.display = 'none'
    document.getElementById('assoc').style.display = 'none'
    document.getElementById('routes').style.display = 'block'
    var activate = document.getElementsByClassName('activate')
    while(activate.length){
      activate[0].classList.remove('activate')
    }
    document.getElementById('btn-routes').classList.add('activate')
    //vectorTours.setVisible(true)
    //vector.setVisible(false)
    //tour1.setOpacity(1)
    //tour2.setOpacity(1)
    //route.setOpacity(1)
  } 
}

function assoc() {
  if(meet==3){
    return
  } else {
    meet = 3
    for (var i = 0; i < toursDesc.length; i++){
      toursDesc[i].style.display = 'none'
    }
    document.getElementById('meet').style.display = 'none'
    document.getElementById('routes').style.display = 'none'
    document.getElementById('assoc').style.display = 'block'
    var activate = document.getElementsByClassName('activate')
    while(activate.length){
      activate[0].classList.remove('activate')
    }
    document.getElementById('btn-assoc').classList.add('activate')
    tour1.setVisible(false)
    tour2.setVisible(false)
    routeSource.clear()
  }
}

// Control Select 
var select = new ol.interaction.Select({
  layers: [vector, tour1, tour2, assocs],
  condition: ol.events.condition.click,
  style: function (feature, resolution) { return getFeatureStyle(feature, resolution, true); }
})


map.addInteraction(select);

select.getFeatures().on(['add','remove'], function(e) {
  if (currZoom > 11.5) {
    if (e.type=="add") {
      //var info = $("#select").html("<p>Selection:</p>");
      var feature = e.element;
      document.getElementById('meet').style.display = 'block';
      document.getElementById('landmark').style.display = 'inline-block';
      document.getElementById('image').style.display = 'inline-block';
      document.getElementById('landmark-about').style.display = 'inline-block';
      document.getElementById('nodelist').style.display = 'none';
      document.getElementById('landmark').innerHTML = feature.get('name');
      document.getElementById('landmark-about').innerHTML = feature.get('about');
      document.getElementById('image').src = feature.get('img2');
      //$("<img>").attr('src',el.get("img")).appendTo(info);
      //$("<p>").text(el.get("text")).appendTo(info);
      //$("<p>").text(el.get("commune")+" ("+el.get("region")+" - "+el.get("date").replace(".","/")+")").appendTo(info);
      //$("<p>").addClass('copy').html("&copy; "+el.get("copy")+" - "+el.get("author")).appendTo(info);
    }
  
    else {
      //$("#select").html("<p>Select an image.</p>");
      document.getElementById('meet').style.display = 'none';
      document.getElementById('landmark').style.display = 'none';
      document.getElementById('image').style.display = 'none';
      document.getElementById('landmark-about').style.display = 'none';
    }
  }
  });

// Scale image on hover ------------------------------------------

//b = map.on('singleclick', function(evt) {
//   map.forEachFeatureAtPixel(evt.pixel, function (feature) {
//        console.log(feature.style_)
//        console.log(feature.style_.image_.displacement_)
//        feature.style_.image_['displacement_']=[12200, 12200]
//        console.log(feature.style_.image_.displacement_)
//        console.log(feature)
//        feature.changed
//      });
 //     if (feature) {
 //       feature.setStyle(new ol.style.Style({
 //         image: new ol.style.Icon({
 //           src: feature.get('url'),
 //           anchor: [0.5, 0.5],
 //           opacity: 1,
 //           scale: 2
 //         })
 //       }))
 //       document.getElementById('nodelist').innerHTML = feature.get('name');
 //       document.getElementById('image').src = feature.get('url');
 //     }
 //     else {
 //       console.log(feature)
 //     }
 //   });

// Za izmjenu bboje poligona-------------------------------------------------------
//var selected = null;
////var status = document.getElementById('status');
//
//map.on('pointermove', function (e) {
//  
//if (layer === layerPoly){
//  if (selected !== null) {
//    selected.setStyle(polyStyle);
//    selected = null;
//    console.log('odabrano')
//  }
//  map.forEachFeatureAtPixel(e.pixel, function (f) {
//    selected = f;
//    console.log(f)
//    f.setStyle(highlightStyle);
//    return true;
//  });
//}
//})
var iconStyle = new ol.style.Style({
  image: new ol.style.Icon({
    src: 'assets/icon/virtual-reality.svg',
    anchor: [0.5, 0,5],
    size: [230, 230],
    scale: 0.5
  })
})

//var selectInteraction = new ol.interaction.Select({
//  condition: ol.events.condition.pointerSelect,
//  layers: [markers],
//  style: iconStyle
//});
//map.addInteraction(selectInteraction);
//selectInteraction.on('select', function (e) {
//  console.log(e.element)
//})

var select360 = new ol.interaction.Select({
  layers: [markers],
  condition: ol.events.condition.click,
  style: iconStyle
})
map.addInteraction(select360);
select360.getFeatures().on(['add','remove'], function(e) {
  if(e.type == 'add') {
    window.open(e.element.values_.url, '_self')
  }

});



//c = map.on('pointermove', function(evt) {
//  if(c){
// map.forEachFeatureAtPixel(evt.pixel, function (feature) {
//  console.log(feature) 
//  console.log(feature.style_.image_.scale_)
//  feature.style_.image_.scale_=2
//  feature.getStyle().getImage().setScale(2)
//  feature.changed()
//})
//  }
//  else {
//    feature.getStyle().getImage().setScale(1)
//    feature.changed()
//  }
//})

//var hoverInteraction2 = new ol.interaction.Select({
//  condition: ol.events.condition.pointerMove,
//  layers: [markers],
//  style: target.style,
//});
//map.addInteraction(hoverInteraction2);
//hoverInteraction2.on('select', function (d) {
//  console.log(d)
//})


//var featureOverlay = new ol.Overlay({
//  map: map,
//  style: new ol.style.Style({
//    image: new ol.style.Icon({
//      src:  images[1].url,
//      anchor: [0.5, 0.5],
//      opacity: 0,
//      scale: 2
//    })
//  })
//});

//hoverInteraction.on('select', function(evt){
//  if(evt.selected.length > 0){
//      console.info('selected: ' + evt.selected[0].getId());
//      
//  }
//});


//map.on('pointermove', function(e) {
//  if (e.dragging) return;
//     
//  var pixel = map.getEventPixel(e.originalEvent);
//  var hit = map.hasFeatureAtPixel(pixel);
//  
//  map.target().style.cursor = hit ? 'pointer' : '';
//
//  if(hit){
//      var pointer_coord = map.getEventCoordinate(e.originalEvent);
//      var closest = sourceFeatures.getClosestFeatureToCoordinate(pointer_coord);
//
//      if(closest){
//          var geometry = closest.getGeometry();
//          var closest_coord = geometry.getClosestPoint(pointer_coord);
//          
//          var coefficient = compareCoordinates(pointer_coord, closest_coord);
//          console.info('closest: ' + closest.getId(), ' coeff: ' + coefficient);
//          
//          if(between(coefficient, 0, 0.01)){
//              featureOverlay.addFeature(closest);
//              
//          } else {
//              featureOverlay.removeFeature(closest);
//              featureOverlay.getFeatures().clear();
//              hoverInteraction.getFeatures().clear();
//          }
//      }
//  }
//});
//function compareCoordinates(coord1, coord2){
//  var
//      lon1 = Math.round(coord1[0]),
//      lon2 = Math.round(coord2[0]),
//      lat1 = Math.round(coord1[1]),
//      lat2 = Math.round(coord2[1]);
//
//  var
//      percent_lon = Math.abs(lon1 / lon2 - 1).toFixed(4),
//      percent_lat = Math.abs(lat1 / lat2 - 1).toFixed(4);
//      percent = (Number(percent_lon) + Number(percent_lat) / 2).toFixed(4);
//
//  return percent;
//}
//function between(number, min, max){
//  if(number >= min && number <= max) return true;
//  else return false;
//}
//function geometryStyle(feature){
//  var
//      style = [],
//      geometry_type = feature.getGeometry().getType(),
//      white = [255, 255, 255, 1],
//      blue = [0, 153, 255, 1],
//      width = 3;
//      
//  style['LineString'] = [
//      new ol.style.Style({
//          stroke: new ol.style.Stroke({
//              color: white, width: width + 2
//          })
//      }),
//      new ol.style.Style({
//          stroke: new ol.style.Stroke({
//              color: blue, width: width
//          })
//      })
//  ],
//  style['Polygon'] = [
//      new ol.style.Style({
//          fill: new ol.style.Fill({ color: [255, 255, 255, 0.5] })
//      }),
//      new ol.style.Style({
//          stroke: new ol.style.Stroke({
//              color: white, width: 3.5
//          })
//      }),
//      new ol.style.Style({
//          stroke: new ol.style.Stroke({
//              color: blue, width: 2.5
//          })
//      })
//  ],
//  style['Point'] = [
//      new ol.style.Style({
//          image: new ol.style.Circle({
//              radius: width * 2,
//              fill: new ol.style.Fill({color: blue}),
//              stroke: new ol.style.Stroke({
//                  color: white, width: width / 2
//              })
//          })
//      })
//  ];
//  
//  return style[geometry_type];
//}

//map.on("moveend", map, zoomChanged);
//
//zoomChanged()
//{
//  zoom = map.getZoom();
//  if (zoom > 3)
//  {
//    marker1.setVisibility (true);
//    marker2.setVisibility (false);
//  }
//  else if (zoom < 3)
//  {
//    marker1.setVisibility (false);
//    marker2.setVisibility (true);
//  }
//}



//var extent = [x, y, yN, xW]
//
//var projection = new ol.proj.Projection({
//  code: 'xkcd-image',
//  units: 'pixels',
//  extent: extent,
//});
//
//var map = new ol.Map({
//    target: 'map',
//    layers: [
//      //new ol.layer.Tile({
//      //  source: new ol.source.OSM()
//      //}),
//      new ol.layer.Image({
//        extent: [-13884991, 2870341, -7455066, 6338219],
//          source: new ol.source.ImageStatic({
//            url: 'https://ahocevar.com/geoserver/wms',
//            params: {'LAYERS': 'topp:states'},
//            ratio: 1,
//            serverType: 'geoserver',
//          }),
//      })
//    ],
//    view: new ol.View({
//      center: ol.proj.fromLonLat([lon, lat]),
//      zoom: 13
//      //extent: [xE, yS, xW, yN]
//    })
//  });

function myFunction(x) {
  x.classList.toggle("change");
}

// Routing ---------------------------------------------------
// Get coordinates from geojson (for route)

document.getElementById('msg_el').style.display = 'none'

// Make route layer

 //points = [],
msg_el = document.getElementById('msg_el'),
url_osrm_nearest = '//router.project-osrm.org/nearest/v1/driving/',
url_osrm_route = '//router.project-osrm.org/route/v1/driving/',
icon_url = '/assets/icon/placeholder2.png',
routeSource = new ol.source.Vector(),
route = new ol.layer.Vector({
  name: 'route',
  source: routeSource,
}),
styles = {
  route: new ol.style.Style({
    stroke: new ol.style.Stroke({
      width: 6, color: [0, 15, 220, 0.8]
    })
  }),
  icon: new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 1],
      src: icon_url,
    })
  })
}
map.addLayer(route)

// Routing
var utils = {
  getNearest: function(coord){
    var coord4326 = utils.to4326(coord);
    return new Promise(function(resolve, reject) {
      //make sure the coord is on street
      fetch(url_osrm_nearest + coord4326.join()).then(function(response) { 
        // Convert to JSON
        return response.json();
      }).then(function(json) {
        if (json.code === 'Ok') resolve(json.waypoints[0].location);
        else reject();
      });
    });
  },
  createFeature: function(coord) {
    var feature = new ol.Feature({
      type: 'place',
      geometry: new ol.geom.Point(coord)
    });
    feature.setStyle(styles.icon);
    routeSource.addFeature(feature);
  },
  createRoute: function(polyline) {
    // route is ol.geom.LineString
    var route = new ol.format.Polyline({
      factor: 1e5
    }).readGeometry(polyline, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:3857'
    });
    var feature = new ol.Feature({
      type: 'route',
      geometry: route
    });
    feature.setStyle(styles.route);
    routeSource.addFeature(feature);
  },
  to4326: function(coord) {
    return ol.proj.transform([
      parseFloat(coord[0]), parseFloat(coord[1])
    ], 'EPSG:3857', 'EPSG:4326');
  }
};



// Get geojson file and draw route from it function
function getSourceJSON(clickedID, selected) {
  document.getElementById('sidebar-wrapper').style.pointerEvents = 'none'
  routeSource.clear()
  map.getLayers().forEach(function (layer) { 
    let name = layer.get('name');
    if(name){
      if(name.slice(0,4)=='tour'){
        layer.setVisible(false)
        document.getElementById(name).classList.remove('activate')
      }
      if(name == clickedID) {
        let clickedIDtext = document.getElementById(clickedID+'-text').style.display
        if(clickedIDtext == 'none'){
          zoomToRoute(clickedID)
          document.getElementById(clickedID).classList.add('activate')
          document.getElementById(clickedID+"-text").style.display = 'block';
          //vector.getSource().once('addfeature', function() {
          layer.setOpacity(1)
          layer.setVisible(true)
          layer.setZIndex(10)
          var points = []
          var features = layer.getSource().getFeatures()
          console.log(features)
          for(feature in features){
            points.push(features[feature].geometryChangeKey_.target.flatCoordinates)
           }
          for(point in points){
            var evt = points[point]
            utils.getNearest(evt).then(function(coord_street){
              var last_point = points[points.length - 1];
              var points_length = points.push(coord_street);
              if (points_length < 2) {
                msg_el.innerHTML = 'Click to add another point';
                return;
              }
              //get the route
              var point1 = last_point.join();
              var point2 = coord_street.join();
              
              fetch(url_osrm_route + point1 + ';' + point2).then(function(r) { 
                return r.json();
              }).then(function(json) {
                if(json.code !== 'Ok') {
                  msg_el.innerHTML = 'No route found.';
                  return;
                }
                msg_el.innerHTML = 'Route added';
                points.length = 0;
                utils.createRoute(json.routes[0].geometry);
                document.getElementById('sidebar-wrapper').style.pointerEvents = 'auto' 
              });
            });
            utils.createFeature(evt)
          };
          //})
        } else {
          document.getElementById(clickedID+'-text').style.display = 'none'
          document.getElementById('sidebar-wrapper').style.pointerEvents = 'auto' 
        }
      }
    }
  })
}
      
     
  
  //layers = map.getLayers().array_
  
  
  
  document.addEventListener('click', function(e) {
    //if(meet==2){
    //  e = e || window.event;
    //  var target = e.target || e.srcElement,
    //  //text = target.textContent || target.innerText;
    //  id = [target.id],
    //  node = target.nodeName,
    //  display = document.getElementById(id+"-text").style.display
    //  console.log(id)
    //  if(node == "BUTTON" && display=='none'){
    //    zoomToRoute(id)
    //    document.getElementById(id+"-text").style.display = 'block';
    //    //route.setVisible(true)
    //    //route.changed()
    //    //for(layer in layers){
    //    //  if (layers[layer].values_.name == 'route'){
    //    //    layers[layer].setVisible(false)
    //    //    layers[layer].changed()
    //    //  }
    //    //  if (layers[layer].values_.name == 'route'){
    //    //    layers[layer].setVisible(true)
    //    //    layers[layer].changed()
    //    //  }
    //    //}
    //  } else {
    //    document.getElementById(id+"-text").style.display = 'none';
    //  }
    //}
    if(meet==3){
      e = e || window.event;
      var target = e.target || e.srcElement,
      //text = target.textContent || target.innerText;
      id = [target.id]
      node = target.nodeName
      if(node == "BUTTON"){
        zoomToAssoc(id)
        document.getElementById(id+"-text").style.display = 'block';
        //route.setVisible(true)
        //route.changed()
        //for(layer in layers){
        //  if (layers[layer].values_.name == 'route'){
        //    layers[layer].setVisible(false)
        //    layers[layer].changed()
        //  }
        //  if (layers[layer].values_.name == 'route'){
        //    layers[layer].setVisible(true)
        //    layers[layer].changed()
        //  }
        //}
      }
    }
  }, false);
  

var toursDesc = []

for(var i = 1; i <= tours.length; i++){
  var id = document.getElementById("tour"+i+"-text")
  toursDesc.push(id)
}
for (var i = 0; i < toursDesc.length; i++){
  toursDesc[i].style.display = 'none'
}


function zoomToRoute(id) {
  for (var i = 0; i < toursDesc.length; i++){
    toursDesc[i].style.display = 'none'
  }
  if(id=="tour1"){
    view.animate({
      center: ol.proj.fromLonLat([17.225, 43.719]),
      duration: 3000,
      zoom: 16.5
    });
  }
  if(id=="tour2"){
    view.animate({
      center: [1920989.58, 5403354.12],
      duration: 3000,
      zoom: 11.5
    });
  }
}

// Association description and zoom

var assocDesc = []
  
for(var i = 1; i <= 2; i++){
  var idAssoc = document.getElementById("assoc"+i+"-text")
  assocDesc.push(idAssoc)
}
for (var i = 0; i < 2; i++){
  assocDesc[i].style.display = 'none'
}

function zoomToAssoc(id) {
  for (var i = 0; i < 2; i++){
    assocDesc[i].style.display = 'none'
  }
  if(id=="assoc1"){
    view.animate({
      center: ol.proj.fromLonLat([17.499510, 43.614876]),
      duration: 1000,
      zoom: 16.5
    });
  }
  if(id=="assoc2"){
    view.animate({
      center: ol.proj.fromLonLat([17.499510, 43.624876]),
      duration: 1000,
      zoom: 16
    });
  }
}
