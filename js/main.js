var isMobile = false; //initiate as false
// device detection
if (
  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
    navigator.userAgent
  ) ||
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
    navigator.userAgent.substr(0, 4)
  ) ||
  document.documentElement.clientWidth < 575.99
) {
  isMobile = true;
}
console.log(document.documentElement.clientWidth);
const lat = 43.787183;
const lon = 16.732731;
const y = 5422472.06;
const x = 1917463.87;
const yS = y - 60000;
const yN = y + 60000;
const xE = x - 80000;
const xW = x + 100000;
const lonLatCrkvaTG = [17.225002, 43.721394];

// default zoom, center and rotation
var zoom = 10;
var center = ol.proj.fromLonLat(lonLatCrkvaTG);

if (window.location.hash !== "") {
  // try to restore center, zoom-level and rotation from the URL
  var hash = window.location.hash.replace("#map=", "");
  var parts = hash.split("/");
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
var sourceFeatures = new ol.source.Vector();
var markers = new ol.layer.Vector({
  source: sourceFeatures,
  declutter: false,
  minZoom: 13,
});

var map = new ol.Map({
  controls: ol.control.defaults({
    attribution: false,
    zoom: false,
  }),
  layers: [
    //new ol.layer.Tile({
    //  source: new ol.source.Stamen({
    //    layer: 'terrain'
    //  }),
    //  opacity: 0.5
    //}),

    //topo = new ol.layer.Tile({
    //  source: new ol.source.OSM(),
    //  visible: false,
    //  opacity: 0.4,
    //  brightness: 1,
    //  name: 'basemap',
    //}),
    (topo = new ol.layer.Tile({
      visible: false,
      source: new ol.source.XYZ({
        url: "https://api.mapbox.com/styles/v1/lavtic/ckwgddnu7079914mlt2n24kzw/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGF2dGljIiwiYSI6ImNqbzhqM2R6MTB6ZHgzcG1kdWFsOWs5anMifQ.1FloBRvYlL8rW8AIbWzJXQ&fresh=true",
      }),
    })),
    //topo = new ol.layer.MapboxVector({
    //  styleUrl: 'mapbox://styles/mapbox/outdoors-v11',
    //  accessToken: 'pk.eyJ1IjoibGF2dGljMjIiLCJhIjoiY2ttdWZhNHZrMHVwNjJxbXdsem4wd2k2MiJ9.enCC1BQeW5JXwCYbkB0Ecw'
    //}),
    (satellite = new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: "https://api.mapbox.com/styles/v1/lavtic/ckwgdeuoj14po14nsp9arx5by/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGF2dGljIiwiYSI6ImNqbzhqM2R6MTB6ZHgzcG1kdWFsOWs5anMifQ.1FloBRvYlL8rW8AIbWzJXQ&fresh=true",
      }),
    })),
    //tomislavgradZastava = new ol.layer.Image({
    //  maxZoom: 11.5,
    //  opacity: 1,
    //  source: new ol.source.ImageWMS({
    //    ratio: 1,
    //    url: 'http://gmetrika.ddns.net:80/geoserver/Tomislavgrad/wms',
    //    params: {
    //          "LAYERS": 'Tomislavgrad:tomislavgradZastava',
    //          "exceptions": 'application/vnd.ogc.se_inimage',
    //    }
    //  })
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
    //destination1 = new ol.layer.Image({
    //  visible: false,
    //  name: 'destination1',
    //  source: new ol.source.ImageWMS({
    //    ratio: 1,
    //    url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
    //    params: {
    //      'VERSION': '1.1.1',
    //      "STYLES": '',
    //      "LAYERS": 'Tomislavgrad:Zukovicalinija',
    //      "exceptions": 'application/vnd.ogc.se_inimage',
    //    }
    //  })
    //}),
    //tomislavgradNaselja = new ol.layer.Image({
    //  opacity: 0.7,
    //  source: new ol.source.ImageWMS({
    //    ratio: 1,
    //    url: 'http://gmetrika.ddns.net:80/geoserver/Tomislavgrad/wms',
    //    params: {
    //          "LAYERS": 'Tomislavgrad:NM_TG_polygon',
    //          "exceptions": 'application/vnd.ogc.se_inimage',
    //    }
    //  })
    //}),
    //tomislavgradNaselja = new ol.layer.Image({
    //  //minZoom: 11.6,
    //  //maxZoom: 13,
    //  opacity: 1,
    //  source: new ol.source.ImageWMS({
    //    url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
    //    params: { 'LAYERS': 'Tomislavgrad:NM_TG_polygon' },
    //    ratio: 1,
    //    serverType: 'geoserver'
    //  }),
    //  name: 'tgnaselja'
    //}),
    //tomislavgradNaselja_nazivi = new ol.layer.Image({
    //  minZoom: 11,
    //  opacity: 1,
    //  source: new ol.source.ImageWMS({
    //    ratio: 1,
    //    url: 'http://gmetrika.ddns.net:80/geoserver/Tomislavgrad/wms',
    //    params: {
    //          "LAYERS": 'Tomislavgrad:tomislavgradNaselja_nazivi',
    //          "exceptions": 'application/vnd.ogc.se_inimage',
    //    }
    //  })
    //}),
    //tomislavgradNaselja_nazivi = new ol.layer.Image({
    //  minZoom: 11,
    //  //maxZoom: 13,
    //  opacity: 1,
    //  source: new ol.source.ImageWMS({
    //    url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
    //    params: { 'LAYERS': 'Tomislavgrad:tomislavgradNaselja_nazivi' },
    //    ratio: 1,
    //    serverType: 'geoserver'
    //  }),
    //  name: 'tgnazivi'
    //}),
    (opcine = new ol.layer.Image({
      maxZoom: 11.5,
      source: new ol.source.ImageWMS({
        ratio: 1,
        servertype: "geoserver",
        url: "http://localhost:8080/geoserver/Tomislavgrad/wms",
        params: {
          LAYERS: "Tomisavgrad:opcine",
          exceptions: "application/vnd.ogc.se_inimage",
        },
        name: "opcine",
      }),
    })),
    (tomislavgradZastava = new ol.layer.Image({
      maxZoom: 11.5,
      opacity: 1,
      source: new ol.source.ImageWMS({
        url: "http://localhost:8080/geoserver/Tomislavgrad/wms",
        params: { LAYERS: "Tomislavgrad:tomislavgradZastava" },
        ratio: 1,
        serverType: "geoserver",
      }),
      name: "tg",
    })),
    //ramaPodloga = new ol.layer.Image({
    //  maxZoom: 11.5,
    //  opacity: 1,
    //  source: new ol.source.ImageWMS({
    //    url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
    //    params: { 'LAYERS': 'Tomislavgrad:ramaPodloga' },
    //    ratio: 1,
    //    serverType: 'geoserver'
    //  }),
    //  name: 'rama'
    //}),
    //ramaZastava = new ol.layer.Image({
    //  maxZoom: 11.5,
    //  opacity: 1,
    //  source: new ol.source.ImageWMS({
    //    url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
    //    params: { 'LAYERS': 'Tomislavgrad:ramaZastava' },
    //    ratio: 1,
    //    serverType: 'geoserver'
    //  }),
    //  name: 'rama'
    //}),
    //posusjeZastava = new ol.layer.Image({
    //  maxZoom: 11.5,
    //  opacity: 1,
    //  source: new ol.source.ImageWMS({
    //    url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
    //    params: { 'LAYERS': 'Tomislavgrad:posusjeZastava' },
    //    ratio: 1,
    //    serverType: 'geoserver'
    //  }),
    //  name: 'posusje'
    //}),
    //livnoPodloga = new ol.layer.Image({
    //  maxZoom: 11.5,
    //  opacity: 1,
    //  source: new ol.source.ImageWMS({
    //    url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
    //    params: { 'LAYERS': 'Tomislavgrad:livnoPodloga' },
    //    ratio: 1,
    //    serverType: 'geoserver'
    //  }),
    //  name: 'livno'
    //}),
    //livnoZastava = new ol.layer.Image({
    //  maxZoom: 11.5,
    //  opacity: 1,
    //  source: new ol.source.ImageWMS({
    //    url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
    //    params: { 'LAYERS': 'Tomislavgrad:livnoZastava' },
    //    ratio: 1,
    //    serverType: 'geoserver'
    //  }),
    //  name: 'livno'
    //}),
    //kupresZastava = new ol.layer.Image({
    //  maxZoom: 11.5,
    //  opacity: 1,
    //  source: new ol.source.ImageWMS({
    //    url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
    //    params: { 'LAYERS': 'Tomislavgrad:kupresZastava' },
    //    ratio: 1,
    //    serverType: 'geoserver'
    //  }),
    //  name: 'kupres'
    //}),
    //kupresPodloga_blue = new ol.layer.Image({
    //  maxZoom: 11.5,
    //  opacity: 1,
    //  source: new ol.source.ImageWMS({
    //    url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
    //    params: { 'LAYERS': 'Tomislavgrad:kupresPodloga_blue' },
    //    ratio: 1,
    //    serverType: 'geoserver'
    //  }),
    //  name: 'kupres'
    //}),
    //kupresPodloga_red = new ol.layer.Image({
    //  maxZoom: 11.5,
    //  opacity: 1,
    //  source: new ol.source.ImageWMS({
    //    url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
    //    params: { 'LAYERS': 'Tomislavgrad:kupresPodloga_red' },
    //    ratio: 1,
    //    serverType: 'geoserver'
    //  }),
    //  name: 'kupres'
    //}),
    //jablanicaZastava = new ol.layer.Image({
    //  maxZoom: 11.5,
    //  opacity: 1,
    //  source: new ol.source.ImageWMS({
    //    url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
    //    params: { 'LAYERS': 'Tomislavgrad:jablanicaZastava' },
    //    ratio: 1,
    //    serverType: 'geoserver'
    //  }),
    //  name: 'jablanica'
    //}),
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
    //opcineGranice = new ol.layer.Image({
    //  minZoom: 11.5,
    //  opacity: 1,
    //  source: new ol.source.ImageWMS({
    //    ratio: 1,
    //    url: 'http://gmetrika.ddns.net:80/geoserver/Tomislavgrad/wms',
    //    params: {'VERSION': '1.1.1',
    //          "LAYERS": 'Tomislavgrad:opcine_granice',
    //          "exceptions": 'application/vnd.ogc.se_inimage',
    //    }
    //  })
    //}),
    //opcineGranice = new ol.layer.Image({
    //  maxZoom: 11.5,
    //  opacity: 1,
    //  source: new ol.source.ImageWMS({
    //    url: 'http://localhost:8080/geoserver/Tomislavgrad/wms',
    //    params: { 'LAYERS': 'Tomislavgrad:opcine_granice' },
    //    ratio: 1,
    //    serverType: 'geoserver'
    //  }),
    //  name: 'opcine'
    //}),
  ],
  target: "map",
  view: new ol.View({
    enableRotation: false,
    center: center,
    zoom: zoom,
    extent: [xE, yS, xW, yN],
  }),
});
// map.addControl(ctrl);
//Pointer style
map.on("pointerdrag", function (evt) {
  this.getTargetElement().style.cursor = "move";
});
map.on("pointerup", function (evt) {
  this.getTargetElement().style.cursor = "default";
});
map.on("pointermove", function (evt) {
  var hit = this.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
    return true;
  });
  if (hit) {
    this.getTargetElement().style.cursor = "pointer";
  } else {
    this.getTargetElement().style.cursor = "default";
  }
});

let mouseWheelZoomDuration = new ol.interaction.MouseWheelZoom({
  mouseWheelOptions: { interval: 0 },
});
map.addInteraction(mouseWheelZoomDuration);
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
var iconStyle = new ol.style.Style({
  image: new ol.style.Icon({
    declutter: true,
    src: "assets/icon/360_mapIcon.svg",
    anchor: [0.5, 2.9],
    size: [100, 30],
  }),
});
const addImage = (obj) => {
  //var polyFeature = new ol.Feature({
  //  geometry: new ol.geom.Point(center)
  //})
  var iconFeature = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat(obj.center)),
    name: obj.name,
    url: obj.url,
  });

  iconFeature.setStyle(iconStyle);
  sourceFeatures.addFeature(iconFeature);
  //polyFeature.setStyle(polyStyle)
  //sourcePoly.addFeature(polyFeature)

  //iconFeature.type = obj.type
  //imageObjects.push(iconFeature)
  //console.log(iconFeature.type)
};

//map.addLayer(layerPoly)
//map.addLayer(markers)

//Location and URL for 360 icons
var images = [
  {
    center: [17.282138, 43.580198],
    name: "Crkva svetog Nikole Tavelića",
    url: "panorama_tomislavgrad_2.html#mesihovina",
  },
  {
    center: [17.29953, 43.587027],
    name: "Glizića mlinica",
    url: "panorama_tomislavgrad_2.html#glizicaMlin",
  },
  {
    center: [17.177038117059727, 43.666291419131305],
    name: "Mali samograd",
    url: "panorama_tomislavgrad_2.html#maliSamograd",
  },
  {
    center: [17.2994273707524, 43.6839055811983],
    name: "Mandina gradina",
    url: "panorama_tomislavgrad_2.html#mandinaGradina",
  },
  {
    center: [17.168687, 43.576575],
    name: "Mocila",
    url: "panorama_tomislavgrad_2.html#mocila",
  },
  {
    center: [17.262405289239247, 43.61181817391158],
    name: "KatedralaBukovica",
    url: "panorama_tomislavgrad_2.html#katedralaBukovica",
  },
  {
    center: [17.186369644449563, 43.676401465747986],
    name: "Ponor Sujice",
    url: "panorama_tomislavgrad_2.html#ponorSujice",
  },
  {
    center: [17.209819070657947, 43.72974760543072],
    name: "Seget",
    url: "panorama_tomislavgrad_2.html#seget",
  },
  {
    center: [17.353109873926073, 43.64657274802597],
    name: "Stecci Lipa",
    url: "panorama_tomislavgrad_2.html#stecciLipa",
  },
  {
    center: [17.182671218053603, 43.822920516826514],
    name: "Most na Sujici",
    url: "panorama_tomislavgrad_2.html#mostNaSujici",
  },
  {
    center: [17.185458317579446, 43.66292045587031],
    name: "Veliki Samograd",
    url: "panorama_tomislavgrad_2.html#velikiSamograd",
  },
  {
    center: [17.233632165733233, 43.62501966943366],
    name: "Vjetropark Mesihovina",
    url: "panorama_tomislavgrad_2.html#vjetroparkMesihovina",
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
];

var i = 0;
for (i; i < images.length; i++) {
  addImage(images[i]);
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
    "#map=" +
    view.getZoom().toFixed(2) +
    "/" +
    center[0].toFixed(2) +
    "/" +
    center[1].toFixed(2);
  var state = {
    zoom: view.getZoom(),
    center: view.getCenter(),
  };
  localStorage.hash = hash;
  window.history.pushState(state, "map", hash);
};
console.log(localStorage.hash);
map.on("moveend", updatePermalink);

var currZoom = map.getView().getZoom();
map.on("moveend", function (e) {
  var newZoom = map.getView().getZoom();
  if (currZoom != newZoom) {
    console.log("currzooom  " + newZoom);
    currZoom = newZoom;
    console.log(currZoom);
    if (currZoom > 11.5) {
      document.getElementById("zastaveOpcina").disabled = true;
      document.getElementById("zastaveOpcinaBox").classList.add("disabled");
    }
    if (currZoom <= 11.5) {
      document.getElementById("zastaveOpcina").disabled = false;
      document.getElementById("zastaveOpcinaBox").classList.remove("disabled");
    }
    //if (currZoom < 11.5 && zastave == true) {
    //  vector.setVisible(false)
    //  nature.setVisible(false)
    //  tourist.setVisible(false)
    //  assocs.setVisible(false)
    //  vjerskiObjekti.setVisible(false)
    //} else {
    //  if (landmarksVisible == true) {
    //    vector.setVisible(true)
    //    nature.setVisible(true)
    //    tourist.setVisible(true)
    //    vjerskiObjekti.setVisible(true)
    //  } else {
    //    vector.setVisible(false)
    //    nature.setVisible(false)
    //    tourist.setVisible(false)
    //  }
    //if (assocsVisible == true) {
    //  assocs.setVisible(true)
    //} else {
    //  assocs.setVisible(false)
    //}
  }
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
});

// Eventlistener za općine
a = map.on("singleclick", function (evt) {
  if (currZoom < 11.5 && zastave) {
    document.getElementById("landmark").style.display = "none";
    document.getElementById("image").style.display = "none";
    document.getElementById("landmark-about").style.display = "none";
    document.getElementById("nodelist").style.display = "inline-block";
    document.getElementById("nodelist").innerHTML = "Učitavanje";
    var view = map.getView();
    var viewResolution = view.getResolution();
    var source = opcine.getSource();
    var url = source.getFeatureInfoUrl(
      evt.coordinate,
      viewResolution,
      view.getProjection(),
      { INFO_FORMAT: "text/html" }
    );
    if (url) {
      fetch(url)
        .then(function (response) {
          return response.text();
        })
        .then(function (html) {
          document.getElementById("nodelist").innerHTML = html;
          //source.syle = highlightStyle2
          opcine.changed();
          if (html[1] == "h") {
            document.getElementById("msg").style.display = "inline-block";
          } else {
            document.getElementById("msg").style.display = "none";
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
});

// Array to cache image style
var styleCache1 = {};
var styleCache2 = {};
var styleCache3 = {};
// Vector style
function getFeatureStyle(feature, resolution, sel) {
  var k =
    $("#kind").val() +
    "_" +
    $("#border").val() +
    "_" +
    feature.get("img").match(/[^\\/]+$/)[0] +
    ($("#shadow").prop("checked") ? "_1" : "_0") +
    ($("#crop").prop("checked") ? "_1" : "_0") +
    (sel ? "_1" : "");
  var k =
    $("#kind").val() +
    "_" +
    $("#border").val() +
    "_" +
    feature.get("img").match(/[^\\/]+$/)[0] +
    ($("#shadow").prop("checked") ? "_1" : "_0") +
    ($("#crop").prop("checked") ? "_1" : "_0") +
    (sel ? "_1" : "");
  var style = styleCache1[k];
  if (!style) {
    var style = new ol.style.Style({
      image: new ol.style.Photo({
        src: feature.get("img"),
        radius: sel ? 60 : 60,
        crop: true,
        kind: sel ? "square" : "circle",
        shadow: 25,
        //onload: function(){vector.changed(); nature.changed(); tourist.changed()},
        stroke: new ol.style.Stroke({
          width: 2 + (sel ? 1 : 0),
          color: sel ? "#fff" : "#fff",
        }),
      }),
    });
  }
  return [style];
}

function getFeatureStyleTours(feature, resolution, sel) {
  var k =
    $("#kind").val() +
    "_" +
    $("#border").val() +
    "_" +
    feature.get("img").match(/[^\\/]+$/)[0] +
    ($("#shadow").prop("checked") ? "_1" : "_0") +
    ($("#crop").prop("checked") ? "_1" : "_0") +
    (sel ? "_1" : "");
  var k =
    $("#kind").val() +
    "_" +
    $("#border").val() +
    "_" +
    feature.get("img").match(/[^\\/]+$/)[0] +
    ($("#shadow").prop("checked") ? "_1" : "_0") +
    ($("#crop").prop("checked") ? "_1" : "_0") +
    (sel ? "_1" : "");
  var style = styleCache2[k];
  if (!style) {
    var style = new ol.style.Style({
      image: new ol.style.Photo({
        src: feature.get("img"),
        radius: sel ? 60 : 40,
        crop: true,
        kind: sel ? "anchored" : "anchored",
        shadow: 25,
        //onload: function(){vector.changed();}, //function(){vector.changed();},
        stroke: new ol.style.Stroke({
          width: 1.5 + (sel ? 1 : 0),
          color: sel ? "#fff" : "#fff",
        }),
      }),
    });
  }
  return [style];
}

function getFeatureStyleAssoc(feature, resolution, sel) {
  var k =
    $("#kind").val() +
    "_" +
    $("#border").val() +
    "_" +
    feature.get("img").match(/[^\\/]+$/)[0] +
    ($("#shadow").prop("checked") ? "_1" : "_0") +
    ($("#crop").prop("checked") ? "_1" : "_0") +
    (sel ? "_1" : "");
  var k =
    $("#kind").val() +
    "_" +
    $("#border").val() +
    "_" +
    feature.get("img").match(/[^\\/]+$/)[0] +
    ($("#shadow").prop("checked") ? "_1" : "_0") +
    ($("#crop").prop("checked") ? "_1" : "_0") +
    (sel ? "_1" : "");
  var style = styleCache3[k];
  if (!style) {
    var style = new ol.style.Style({
      image: new ol.style.Photo({
        src: feature.get("img"),
        radius: 60,
        crop: true,
        kind: "circle",
        shadow: 25,
        //onload: function(){vector.changed();}, //function(){vector.changed();},
        stroke: new ol.style.Stroke({
          width: 1.5 + (sel ? 1 : 0),
          color: "black",
        }),
      }),
    });
  }
  return [style];
}

function zoomTo(i) {
  view.animate({
    center: ol.proj.fromLonLat(coord[i]),
    duration: 3000,
    zoom: landmarksZoom[i],
  });
  if (isMobile) {
    toggle(document.getElementById("menu-toggle"));
  }
}
function onLoadChanged() {
  vector.changed();
  nature.changed();
  tourist.changed();
  assocs.changed();
}

// Load list from GeoJSON file
let kulturaElement;
let prirodaElement;
let turizamElement;
let hikeElement;
let bikeElement;
let speleoElement;

coord = [];
landmarksZoom = [];
let landmarkAllList = [];
window.onload = function () {
  // Load list of all landmarks from GeoJSON file
  //$.getJSON("assets/landmarks/landmarks.geojson", function(data) {
  onLoadChanged();
  for (i in landmarksData.features) {
    var landmarkAll = document.createElement("button");
    landmarkAll.id = i;
    landmarkAll.classList.add(
      "list-group-item",
      "list-group-item-action",
      "no-outline",
      "mt-4",
      "pl-5",
      "landmarkList-height",
      "scale-animation-right",
      "display-flex",
      "text-font"
    );
    landmarkAll.classList.add(landmarksData.features[i].properties.id);
    landmarkAll.onclick = function () {
      zoomTo(this.id);
    };
    var parent = document.getElementById("landmark-name");
    parent.appendChild(landmarkAll);
    console.log(landmarkAllList);
    coord[i] = landmarksData.features[i].geometry.coordinates;
    landmarksZoom[i] = landmarksData.features[i].properties.zoom;
    console.log(landmarksData.features[i].properties.zoom);
    var landmarkImg = document.createElement("img");
    landmarkImg.src = landmarksData.features[i].properties.img;
    landmarkImg.classList.add("landmarkList-img", "ml-4", "center-y");
    landmarkAll.appendChild(landmarkImg);

    var landmarkText = document.createElement("div");
    landmarkText.classList.add("pt-2", "pl-4", "pr-4");
    landmarkAll.appendChild(landmarkText);

    var landmarkPlace = document.createElement("div");
    var landmarkName = document.createElement("div");
    var landmarkType = document.createElement("img");
    var landmark360 = document.createElement("img");
    landmarkPlace.innerText = landmarksData.features[i].properties.place;
    landmarkName.innerText = landmarksData.features[i].properties.name;
    landmarkType.src = landmarksData.features[i].properties.thumb;
    landmarkPlace.classList.add("menu-btn", "text-c3");
    landmarkName.classList.add("sort", "text-font");
    landmarkType.classList.add("kategorije-thumb");
    landmark360.classList.add("kategorije-thumb");
    landmarkText.appendChild(landmarkPlace);
    landmarkText.appendChild(landmarkName);
    landmarkText.appendChild(landmarkType);
    var i360 = landmarksData.features[i].properties.i360;
    if (i360 == "1") {
      landmark360.src = "/assets/icon/360_icon.svg";
      landmarkText.appendChild(landmark360);
    }
    landmarkAllList.push(landmarkAll);
  }
  length = landmarksZoom.length;
  for (i in natureData.features) {
    var landmarkAll = document.createElement("button");
    landmarkAll.id = i + length;
    landmarkAll.classList.add(
      "list-group-item",
      "list-group-item-action",
      "no-outline",
      "mt-4",
      "pl-5",
      "landmarkList-height",
      "scale-animation-right",
      "display-flex",
      "text-font"
    );
    landmarkAll.classList.add(natureData.features[i].properties.id);
    landmarkAll.onclick = function () {
      zoomTo(this.id);
    };
    var parent = document.getElementById("landmark-name");
    parent.appendChild(landmarkAll);
    coord[i + length] = natureData.features[i].geometry.coordinates;
    landmarksZoom[i + length] = natureData.features[i].properties.zoom;
    console.log(natureData.features[i].properties.zoom);
    var landmarkImg = document.createElement("img");
    landmarkImg.src = natureData.features[i].properties.img;
    landmarkImg.classList.add("landmarkList-img", "ml-4", "center-y");
    landmarkAll.appendChild(landmarkImg);

    var landmarkText = document.createElement("div");
    landmarkText.classList.add("pt-2", "pl-4", "pr-4");
    landmarkAll.appendChild(landmarkText);

    var landmarkPlace = document.createElement("div");
    var landmarkName = document.createElement("div");
    var landmarkType = document.createElement("img");
    var landmark360 = document.createElement("img");
    landmarkPlace.innerText = natureData.features[i].properties.place;
    landmarkName.innerText = natureData.features[i].properties.name;
    landmarkType.src = natureData.features[i].properties.thumb;
    landmarkPlace.classList.add("menu-btn", "text-c3");
    landmarkName.classList.add("text-font");
    landmarkType.classList.add("kategorije-thumb");
    landmark360.classList.add("kategorije-thumb");
    landmarkText.appendChild(landmarkPlace);
    landmarkText.appendChild(landmarkName);
    landmarkText.appendChild(landmarkType);
    var i360 = natureData.features[i].properties.i360;
    if (i360 == "1") {
      landmark360.src = "/assets/icon/360_icon.svg";
      landmarkText.appendChild(landmark360);
    }
    landmarkAllList.push(landmarkAll);
  }
  length = landmarksZoom.length;
  for (i in touristData.features) {
    var landmarkAll = document.createElement("button");
    landmarkAll.id = i + length;
    landmarkAll.classList.add(
      "list-group-item",
      "list-group-item-action",
      "no-outline",
      "mt-4",
      "pl-5",
      "landmarkList-height",
      "scale-animation-right",
      "display-flex",
      "text-font"
    );
    landmarkAll.setAttribute("name", touristData.features[i].properties.name);
    landmarkAll.classList.add(touristData.features[i].properties.id);
    landmarkAll.onclick = function () {
      zoomTo(this.id);
    };
    var parent = document.getElementById("landmark-name");
    parent.appendChild(landmarkAll);
    coord[i + length] = touristData.features[i].geometry.coordinates;
    landmarksZoom[i + length] = touristData.features[i].properties.zoom;
    console.log(touristData.features[i].properties.zoom);
    var landmarkImg = document.createElement("img");
    landmarkImg.src = touristData.features[i].properties.img;
    landmarkImg.classList.add("landmarkList-img", "ml-4", "center-y");
    landmarkAll.appendChild(landmarkImg);

    var landmarkText = document.createElement("div");
    landmarkText.classList.add("pt-2", "pl-4", "pr-4");
    landmarkAll.appendChild(landmarkText);

    var landmarkPlace = document.createElement("div");
    var landmarkName = document.createElement("div");
    var landmarkType = document.createElement("img");
    var landmark360 = document.createElement("img");
    landmarkPlace.innerText = touristData.features[i].properties.place;
    landmarkName.innerText = touristData.features[i].properties.name;
    landmarkType.src = touristData.features[i].properties.thumb;
    landmarkPlace.classList.add("menu-btn", "text-c3");
    landmarkName.classList.add("text-font");
    landmarkType.classList.add("kategorije-thumb");
    landmark360.classList.add("kategorije-thumb");
    landmarkText.appendChild(landmarkPlace);
    landmarkText.appendChild(landmarkName);
    landmarkText.appendChild(landmarkType);
    var i360 = touristData.features[i].properties.i360;
    if (i360 == "1") {
      landmark360.src = "/assets/icon/360_icon.svg";
      landmarkText.appendChild(landmark360);
    }
    landmarkAllList.push(landmarkAll);
    console.log(landmarkAllList);
  }
  //})
  //End for landmarks
  // Load list of all routes from GeoJSON file
  //$.getJSON("assets/tours/routes.geojson", function(data) {
  features = routesData.features;
  for (i in features) {
    var route = document.createElement("button");
    route.id = features[i].properties.id;
    route.classList.add(
      "list-group-item",
      "list-group-item-action",
      "no-outline",
      "mt-4",
      "landmarkList-height",
      "scale-animation-right",
      "display-flex",
      "text-font",
      features[i].properties.routeTypeId
    );
    route.classList.add(features[i].properties.id);
    // route.classList.add(features[i].properties.type);
    // route.innerText = features[i].properties.name;
    route.setAttribute("color", features[i].properties.color);
    route.onclick = function () {
      getRouteText(this.id); //getSourceJSON
    };
    var parent = document.getElementById("routesAll");
    parent.appendChild(route);

    var routeImg = document.createElement("img");
    routeImg.src = features[i].properties.img;
    routeImg.classList.add("landmarkList-img", "ml-4", "center-y");
    route.appendChild(routeImg);
    console.log(features[i].properties.img);

    var routeHeader = document.createElement("div");
    routeHeader.classList.add("pt-2", "pl-4", "pr-4");
    route.appendChild(routeHeader);

    var routePlace = document.createElement("div");
    var routeName = document.createElement("div");
    var routeType = document.createElement("img");
    routePlace.innerText = features[i].properties.place;
    routeName.innerText = features[i].properties.name;
    routeType.src = features[i].properties.type;
    routePlace.classList.add("menu-btn", "text-c3");
    routeName.classList.add("text-font");
    routeType.classList.add("kategorije-thumb");
    routeHeader.appendChild(routePlace);
    routeHeader.appendChild(routeName);
    routeHeader.appendChild(routeType);

    var routeText = document.createElement("small");
    routeText.id = features[i].properties.id + "-text";
    routeText.classList.add("p-3", "ml-4");
    routeText.style.display = "none";
    routesDesc.push(routeText);
    parent.appendChild(routeText);

    var routeDuration = document.createElement("div");
    routeDuration.classList.add("text-right", "text-muted", "mr-4");
    routeDuration.innerText = features[i].properties.duration;
    var routeType = document.createElement("img");
    routeType.classList.add("ml-2", "img-height-50px");
    routeType.src = features[i].properties.type;
    routeDuration.appendChild(routeType);
    routeText.appendChild(routeDuration);

    var stops = features[i].properties.stops;
    var dists = features[i].properties.dists;
    for (j in stops) {
      var stopName = document.createElement("div");
      stopName.innerText = stops[j].name;
      stopName.classList.add("pl-5", "color-gray");
      routeText.appendChild(stopName);
      if (dists[j]) {
        var dots = document.createElement("img");
        dots.src = "/assets/icon/three-dots-vertical.svg";
        dots.classList.add("ml-5");
        var dist = document.createElement("span");
        dist.innerText = dists[j];
        dist.classList.add("ml-5", "color-gray");
        routeText.appendChild(dots);
        routeText.appendChild(dist);
      }
    }
    var aboutRoute = document.createElement("div");
    aboutRoute.innerText = features[i].properties.about;
    aboutRoute.classList.add("mt-4", "pl-4", "pr-4");
    routeText.appendChild(aboutRoute);
  }
  //})
  //End for routes
  //Weekend destinations GeoJSON
  destInfoList = [
    "Mjesto polaska:",
    "Vrijeme polaska:",
    "Vrijeme povratka:",
    "Trajanje:",
    "Za ponijeti:",
    "Vodič i kontakt:",
    "Napomena:",
    "Ostale info:",
  ];

  // OVO ODZNAČI ZA DESTINACIJE
  //$.getJSON("assets/tours/destinations.geojson", function (data) {
  //  features = data.features
  //  for (i in features) {
  //    var destinationsAll = document.createElement('button')
  //    destinationsAll.id = features[i].properties.id
  //    destinationsAll.classList.add("list-group-item", "list-group-item-action", "no-outline")
  //    destinationsAll.innerText = features[i].properties.name
  //    destinationsAll.onclick = function () { getSourceJSON(this.id); };
  //    var parent = document.getElementById('destinationsAll')
  //    parent.appendChild(destinationsAll)
  //
  //    var destinationText = document.createElement('small')
  //    destinationText.id = features[i].properties.id + '-text'
  //    console.log(destinationText.id)
  //    destinationText.classList.add("p-3", "ml-2")
  //    destinationText.style.display = 'none'
  //    weekendDestinationsDesc.push(destinationText)
  //    document.getElementById("destinationsAll").appendChild(destinationText)
  //
  //    var destinationDuration = document.createElement('div')
  //    destinationDuration.classList.add("text-right", "text-muted", "mr-4")
  //    destinationDuration.innerText = features[i].properties.duration
  //    var destinationType = document.createElement('img')
  //    destinationType.classList.add("ml-2")
  //    destinationType.src = features[i].properties.type
  //    destinationDuration.appendChild(destinationType)
  //    destinationText.appendChild(destinationDuration)
  //
  //    var aboutDestinaion = document.createElement("div")
  //    aboutDestinaion.innerText = features[i].properties.about
  //    aboutDestinaion.classList.add("mt-4", "pl-2")
  //    destinationText.appendChild(aboutDestinaion)
  //
  //    var info = document.createElement("div")
  //    info.classList.add("row", "pl-2")
  //    destinationText.appendChild(info)
  //
  //    var list = document.createElement("ul")
  //    info.classList.add("list-unstyled", "mb-0", "mt-4")
  //    info.appendChild(list)
  //
  //    for (k in destInfoList) {
  //      console.log(k)
  //      var item = document.createElement("li")
  //      item.classList.add("mt-2")
  //      list.appendChild(item)
  //      var itemTitle = document.createElement("span")
  //      itemTitle.innerText = destInfoList[k]
  //      itemTitle.classList.add("text-muted")
  //      item.appendChild(itemTitle)
  //      var itemText = document.createElement("span")
  //      itemText.innerText = features[i].properties.info[k]
  //      item.appendChild(itemText)
  //    }
  //  }
  //})

  var assocInfoList1 = ["Predsjednik:", "Novosti:"],
    assocInfoList2 = [
      "assets/contact/phone.png",
      "assets/contact/mail.png",
      "assets/contact/location.png",
    ];
  //$.getJSON("assets/landmarks/assocs.geojson", function (data) {
  //  features = data.features
  for (i in assocsData.features) {
    features = assocsData.features;
    var assocsAll = document.createElement("button");
    assocsAll.id = features[i].properties.id;
    assocsAll.classList.add(
      "list-group-item",
      "list-group-item-action",
      "no-outline",
      "mt-4",
      "pl-5",
      "pr-4",
      "landmarkList-height",
      "display-flex",
      "text-font"
    );
    assocsAll.onclick = function () {
      getAssoc(this.id);
    };
    var parent = document.getElementById("assocsAll");
    parent.appendChild(assocsAll);
    var assocImg = document.createElement("img");
    assocImg.src = features[i].properties.img;
    assocImg.classList.add("landmarkList-img", "ml-4", "center-y");
    assocsAll.appendChild(assocImg);

    var assocsTitle = document.createElement("div");
    assocsTitle.classList.add("pt-4", "pl-4", "pr-4");
    assocsAll.appendChild(assocsTitle);

    var assocsPlace = document.createElement("div");
    assocsPlace.innerText = features[i].properties.place;
    assocsPlace.classList.add("menu-btn", "text-c3");
    var assocsName = document.createElement("div");
    assocsName.innerText = features[i].properties.name;
    assocsName.classList.add("text-font");
    assocsTitle.appendChild(assocsPlace);
    assocsTitle.appendChild(assocsName);

    assocCoord.push(features[i].geometry.coordinates);

    var assocText = document.createElement("small");
    assocText.id = features[i].properties.id + "-text";
    assocText.classList.add("p-4");
    assocText.style.display = "none";
    assocText.innerHTML = features[i].properties.about;
    assocDesc.push(assocText);
    document.getElementById("assocsAll").appendChild(assocText);

    //var aboutDestinaion = document.createElement("div")
    //aboutDestinaion.innerText = features[i].properties.about
    //aboutDestinaion.classList.add("mt-4", "pl-2")
    //destinationText.appendChild(aboutDestinaion)

    var assocInfo = document.createElement("div");
    assocInfo.classList.add("row");
    assocText.appendChild(assocInfo);

    var list1 = document.createElement("ul");
    list1.classList.add("list-unstyled", "mb-0", "mt-4", "col-6");
    assocInfo.appendChild(list1);
    var list2 = document.createElement("ul");
    list2.classList.add("list-unstyled", "mb-0", "mt-4", "col-6");
    assocInfo.appendChild(list2);

    for (g in assocInfoList1) {
      var item = document.createElement("li");
      item.classList.add("mt-2");
      list1.appendChild(item);
      var itemTitle = document.createElement("span");
      itemTitle.innerText = assocInfoList1[g];
      itemTitle.classList.add("text-muted");
      item.appendChild(itemTitle);
      if (g == 0) {
        var itemText = document.createElement("span");
        itemText.innerText = features[i].properties.info[g];
        item.appendChild(itemText);
      } else {
        var itemText = document.createElement("a");
        itemText.href = features[i].properties.info[g];
        itemText.innerText = features[i].properties.info[g];
        item.appendChild(itemText);
      }
    }
    for (g in assocInfoList2) {
      var item = document.createElement("li");
      item.classList.add("mt-2");
      list2.appendChild(item);
      var itemTitle = document.createElement("img");
      itemTitle.src = assocInfoList2[g];
      itemTitle.classList.add("contact-image", "mr-2");
      item.appendChild(itemTitle);
      var itemText = document.createElement("span");
      itemText.innerText = features[i].properties.contact[g];
      item.appendChild(itemText);
    }
  }
  //})
  $("#preloader").slideUp(1000);
  $("#homeLogo").addClass("home-filter");
  if (sessionStorage.home == 1) {
    document.getElementById("home").style.display = "none";
    document.getElementById("homeLogo").style.display = "none";
  }
  $(".sort")
    .sort(function (a, b) {
      if (a.textContent < b.textContent) {
        return -1;
      } else {
        return 1;
      }
    })
    .appendTo("landmarksAll");
  //document.getElementById('preloader').style.display = 'none'
  //vjerskiObjekti.changed()
  kulturaElement = document.querySelectorAll(".kultura");
  prirodaElement = document.querySelectorAll(".priroda");
  turizamElement = document.querySelectorAll(".turizam");
  hikeElement = document.querySelectorAll(".hike");
  bikeElement = document.querySelectorAll(".bike");
  speleoElement = document.querySelectorAll(".speleo");
};
console.log(landmarkAllList[0]);
//Onload End

//To Map

function toMap() {
  //toggle(document.getElementById('menu-toggle'))
  $("#homeLogo").fadeOut(1000);
  $("#home").fadeOut(1000);
  sessionStorage.home = 1;
}

function toHome() {
  //toggle.delay(500)(document.getElementById('menu-toggle'))
  $("#homeLogo").slideToggle(1000);
  $("#home").slideToggle(300);
  sessionStorage.home = 2;
}

//Kontrola popisa znamenitosti------------------------------

const kategorijeBtns = document.querySelectorAll(".kategorije-btn");
const kulturaBtn = document.getElementById("kultura");
const prirodaBtn = document.getElementById("priroda");
const turizamBtn = document.getElementById("turizam");
const kategorijeCheck = document.getElementById("kategorije-check");
const routesCheck = document.getElementById("routes-check");
const show = ["flex", true];
const hide = ["none", false];
let id;

const kategorijeStyleDisplay = function (
  kulturaStyleDisplay,
  prirodaStyleDisplay,
  turizamStyleDisplay
) {
  kulturaElement.forEach(
    (item) => (item.style.display = kulturaStyleDisplay[0])
  );
  prirodaElement.forEach(
    (item) => (item.style.display = prirodaStyleDisplay[0])
  );
  turizamElement.forEach(
    (item) => (item.style.display = turizamStyleDisplay[0])
  );
  vector.setVisible(kulturaStyleDisplay[1]);
  nature.setVisible(prirodaStyleDisplay[1]);
  tourist.setVisible(turizamStyleDisplay[1]);
};
const routesStyleDisplay = function (
  hikeStyleDisplay,
  bikeStyleDisplay,
  speleoStyleDisplay
) {
  hikeElement.forEach((item) => console.log(item));
  hikeElement.forEach((item) => (item.style.display = hikeStyleDisplay[0]));
  bikeElement.forEach((item) => (item.style.display = bikeStyleDisplay[0]));
  speleoElement.forEach((item) => (item.style.display = speleoStyleDisplay[0]));
};

const kategorijeCheckOffset = function (mobileOffset, offset, type) {
  if (isMobile) {
    if (type == "meet") {
      kategorijeCheck.style.left = mobileOffset;
    } else {
      routesCheck.style.left = mobileOffset;
    }
  } else {
    if (type == "meet") {
      kategorijeCheck.style.left = offset;
    } else {
      routesCheck.style.left = offset;
    }
  }
};
const allFilter = function () {
  kategorijeStyleDisplay(show, show, show);
  kategorijeCheckOffset("17.5%", "18%", "meet");
};
const kulturaFilter = function () {
  kategorijeStyleDisplay(show, hide, hide);
  kategorijeCheckOffset("43%", "41.5%", "meet");
};
const prirodaFilter = function () {
  kategorijeStyleDisplay(hide, show, hide);
  kategorijeCheckOffset("67%", "65%", "meet");
};
const turizamFilter = function () {
  kategorijeStyleDisplay(hide, hide, show);
  kategorijeCheckOffset("92.5%", "88.5%", "meet");
};
const routesAllFilter = function () {
  routesStyleDisplay(show, show, show);
  kategorijeCheckOffset("17.5%", "18%", "routes");
};
const hikeFilter = function () {
  routesStyleDisplay(show, hide, hide);
  kategorijeCheckOffset("43%", "41.5%", "routes");
};
const bikeFilter = function () {
  routesStyleDisplay(hide, show, hide);
  kategorijeCheckOffset("67%", "65%", "routes");
};
const speleoFilter = function () {
  routesStyleDisplay(hide, hide, show);
  kategorijeCheckOffset("92.5%", "88.5%", "routes");
};

const filter = function (e) {
  e.preventDefault();
  if (!e.target.id) {
    id = e.target.parentElement.id;
  } else {
    id = e.target.id;
  }
  if (id == "all") {
    allFilter();
  }
  if (id == "kultura") {
    kulturaFilter();
  }
  if (id == "priroda") {
    prirodaFilter();
  }
  if (id == "turizam") {
    turizamFilter();
  }
  if (id == "routesAll") {
    routesAllFilter();
  }
  if (id == "hike") {
    hikeFilter();
  }
  if (id == "bike") {
    bikeFilter();
  }
  if (id == "speleo") {
    speleoFilter();
  }
};
kategorijeBtns.forEach((btn) => btn.addEventListener("click", filter));
// allFilter = function () {
//   if (isMobile) {
//     $("#kategorije-check").css("left", "18%");
//   } else {
//     $("#kategorije-check").css("left", "17.5%");
//   }
//   for (let item1 of prirodaElement) {
//     item1.style.display = "flex";
//   }
//   for (let item2 of turizamElement) {
//     item2.style.display = "flex";
//   }
//   for (let item3 of kulturaElement) {
//     item3.style.display = "flex";
//   }
//   vector.setVisible(true);
//   vectorPin.setVisible(true);
//   nature.setVisible(true);
//   naturePin.setVisible(true);
//   tourist.setVisible(true);
//   touristPin.setVisible(true);
// };
// kulturaFilter = function () {
//   // if (kultura.length == 0) {
//   //   var kulturaElement = document.querySelectorAll(".kultura");
//   //   var prirodaElement = document.querySelectorAll(".priroda");
//   //   var turizamElement = document.querySelectorAll(".turizam");
//   //   console.log(kulturaElement);
//   // }
//   if (isMobile) {
//     $("#kategorije-check").css("left", "43%");
//   } else {
//     $("#kategorije-check").css("left", "41.5%");
//   }
//   for (let item1 of prirodaElement) {
//     item1.style.display = "none";
//   }
//   for (let item2 of turizamElement) {
//     item2.style.display = "none";
//   }
//   for (let item3 of kulturaElement) {
//     item3.style.display = "flex";
//   }
//   vector.setVisible(true);
//   vectorPin.setVisible(true);
//   nature.setVisible(false);
//   naturePin.setVisible(false);
//   tourist.setVisible(false);
//   touristPin.setVisible(false);
// };
// prirodaFilter = function () {
//   // if (kultura.length == 0) {
//   //   var kulturaElement = document.querySelectorAll(".kultura");
//   //   var prirodaElement = document.querySelectorAll(".priroda");
//   //   var turizamElement = document.querySelectorAll(".turizam");
//   //   console.log(kulturaElement);
//   // }
//   if (isMobile) {
//     $("#kategorije-check").css("left", "67%");
//   } else {
//     $("#kategorije-check").css("left", "65%");
//   }
//   for (let item1 of prirodaElement) {
//     item1.style.display = "flex";
//   }
//   for (let item2 of turizamElement) {
//     item2.style.display = "none";
//   }
//   for (let item3 of kulturaElement) {
//     item3.style.display = "none";
//   }
//   vector.setVisible(false);
//   vectorPin.setVisible(false);
//   nature.setVisible(true);
//   naturePin.setVisible(true);
//   tourist.setVisible(false);
//   touristPin.setVisible(false);
// };
// turizamFilter = function () {
//   // if (kultura.length == 0) {
//   //   var kulturaElement = document.querySelectorAll(".kultura");
//   //   var prirodaElement = document.querySelectorAll(".priroda");
//   //   var turizamElement = document.querySelectorAll(".turizam");
//   // }
//   if (isMobile) {
//     $("#kategorije-check").css("left", "92.5%");
//   } else {
//     $("#kategorije-check").css("left", "88.5%");
//   }
//   for (let item1 of prirodaElement) {
//     item1.style.display = "none";
//   }
//   for (let item2 of turizamElement) {
//     item2.style.display = "flex";
//   }
//   for (let item3 of kulturaElement) {
//     item3.style.display = "none";
//   }
//   vector.setVisible(false);
//   vectorPin.setVisible(false);
//   nature.setVisible(false);
//   naturePin.setVisible(false);
//   tourist.setVisible(true);
//   touristPin.setVisible(true);
// };
//Kontrola popisa znamenitosti------------------------

var routesDesc = [],
  weekendDestinationsDesc = [],
  assocDesc = [],
  assocCoord = [];
//Landmarks Pins
var vectorPinSource = new ol.source.Vector({
  features: new ol.format.GeoJSON().readFeatures(landmarksData, {
    featureProjection: "EPSG:3857",
  }),
});
var naturePinSource = new ol.source.Vector({
  features: new ol.format.GeoJSON().readFeatures(natureData, {
    featureProjection: "EPSG:3857",
  }),
});
var touristPinSource = new ol.source.Vector({
  features: new ol.format.GeoJSON().readFeatures(touristData, {
    featureProjection: "EPSG:3857",
  }),
});
var vjerskiPinSource = new ol.source.Vector({
  features: new ol.format.GeoJSON().readFeatures(vjerskiObjekti, {
    featureProjection: "EPSG:3857",
  }),
  //projection: 'EPSG:3857',
  //format: new ol.format.GeoJSON(),
});

var pinStyle = function (feature, resolution) {
  return new ol.style.Style({
    image: new ol.style.Icon({
      src: feature.get("pin"),
      opacity: 1,
      anchor: [0.5, 1],
    }),
  });
};
var vjerskiPinStyle = function (feature, resolution) {
  return new ol.style.Style({
    image: new ol.style.Icon({
      src: feature.get("pin"),
      opacity: 1,
      anchor: [0.5, 1],
    }),
  });
};

var vectorPin = new ol.layer.Vector({
  //minZoom: 11.5,
  name: "landmarks",
  source: vectorPinSource,
  declutter: false,
  // y ordering
  //renderOrder: ol.ordering.yOrdering(),
  style: pinStyle,
});
var naturePin = new ol.layer.Vector({
  //minZoom: 11.5,
  name: "landmarks",
  source: naturePinSource,
  declutter: false,
  // y ordering
  //renderOrder: ol.ordering.yOrdering(),
  style: pinStyle,
});
var touristPin = new ol.layer.Vector({
  //minZoom: 11.5,
  name: "landmarks",
  source: touristPinSource,
  declutter: false,
  // y ordering
  //renderOrder: ol.ordering.yOrdering(),
  style: pinStyle,
});
var vjerskiPin = new ol.layer.Vector({
  //minZoom: 11.5,
  name: "vjerski",
  source: vjerskiPinSource,
  declutter: false,
  visible: false,
  // y ordering
  //renderOrder: ol.ordering.yOrdering(),
  style: vjerskiPinStyle,
});
map.addLayer(vjerskiPin);
vjerskiPin.setZIndex(0);
map.addLayer(naturePin);
map.addLayer(touristPin);
map.addLayer(vectorPin);
// Landmarks
var vectorSource = new ol.source.Vector({
  features: new ol.format.GeoJSON().readFeatures(landmarksData, {
    featureProjection: "EPSG:3857",
  }),
});
var natureSource = new ol.source.Vector({
  features: new ol.format.GeoJSON().readFeatures(natureData, {
    featureProjection: "EPSG:3857",
  }),
});
var touristSource = new ol.source.Vector({
  features: new ol.format.GeoJSON().readFeatures(touristData, {
    featureProjection: "EPSG:3857",
  }),
});
var vector = new ol.layer.Vector({
  minZoom: 10.5,
  name: "landmarks",
  source: vectorSource,
  declutter: true,
  style: function (feature, resolution) {
    return getFeatureStyle(feature, resolution, false);
  },
});
var nature = new ol.layer.Vector({
  minZoom: 10.5,
  name: "nature",
  source: natureSource,
  declutter: true,
  style: function (feature, resolution) {
    return getFeatureStyle(feature, resolution, false);
  },
});
var tourist = new ol.layer.Vector({
  minZoom: 10.5,
  name: "tourist",
  source: touristSource,
  declutter: true,
  style: function (feature, resolution) {
    return getFeatureStyle(feature, resolution, false);
  },
});

var vjerskiObjektiSource = new ol.source.Vector({
  features: new ol.format.GeoJSON().readFeatures(vjerskiObjekti, {
    featureProjection: "EPSG:3857",
  }),
  //url: 'assets/landmarks/vjerskiObjekti.geojson',
  //projection: 'EPSG:3857',
  //format: new ol.format.GeoJSON(),
});

var vjerskiObjekti = new ol.layer.Vector({
  minZoom: 10.5,
  name: "vjerskiObjekti",
  source: vjerskiObjektiSource,
  declutter: true,
  visible: false,
  // y ordering
  //renderOrder: ol.ordering.yOrdering(),
  style: function (feature, resolution) {
    return getFeatureStyle(feature, resolution, false);
  },
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
map.addLayer(vjerskiObjekti);
map.addLayer(nature);
map.addLayer(tourist);
map.addLayer(vector);
vector.setZIndex(15);
vjerskiObjekti.setZIndex(0);
map.addLayer(markers);
markers.setZIndex(100000000000000000000000000000000000);
//vectorSource.refresh()

// Tours
for (var i = 0; i < routesDesc.length; i++) {
  routesDesc[i].style.display = "none";
}
var tourSource;
function getRouteText(clickedID) {
  let clickedID_element = document.getElementById(clickedID);
  let clickedID_text = document.getElementById(clickedID + "-text");
  let clickedIDtextStyle = clickedID_text.style.display;
  // if (clickedIDtextStyle == "none") {
  if (clickedIDtextStyle == "block") {
    clearRoute();
    clickedID_text.style.display = "none";
    clickedID_text.classList.remove("activate-assoc");
    if (isMobile) {
      document.querySelector(".routes-arrow").classList.add("hidden");
    }
  } else {
    for (var i = 0; i < routesDesc.length; i++) {
      if (routesDesc[i].style.display == "block") {
        clearRoute();
        routesDesc[i].style.display = "none";
        routesDesc[i].classList.remove("activate-assoc");
      }
    }
    renderRoute(clickedID, clickedID_element);
    zoomToRoute(clickedID);
    console.log(clickedID);
    clickedID_text.style.display = "block";
    console.log(clickedID);
    let elementPosition = clickedID_element.offsetTop - 185;
    console.log(elementPosition);
    document.getElementById("routesAll").scrollTo({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
    clickedID_text.classList.add("activate-assoc");
    if (isMobile) {
      setTimeout(() => {
        document.querySelector(".routes-arrow").classList.remove("hidden");
      }, 1700);
    }
  }
}
//    for (var i = 0; i < routesDesc.length; i++) {
//      if ((routesDesc[i].style.display = "block")) {
//        tourSource.clear();
//        routesDesc[i].style.display = "none";
//        routesDesc[i].classList.remove("activate-assoc");
//      }
//    }
//    tourSource.clear();
//    clickedID_text.style.display = "none";
//    clickedID_text.classList.remove("activate-assoc");
//  }
//
//  //assocSource.refresh()
//}

//Popup controls-------------------------------------
// var tourStopsSource = new ol.source.Vector({
//   features: new ol.format.GeoJSON().readFeatures(routesData, {
//     featureProjection: "EPSG:3857",
//   }),
// });
// var vector = new ol.layer.Vector({
//   minZoom: 10.5,
//   name: "landmarks",
//   source: vectorSource,
//   declutter: true,
//   style: function (feature, resolution) {
//     return getFeatureStyle(feature, resolution, false);
//   },
// });

// tourPath layer and tourStops layer and source-------------
let tourPath = new ol.layer.Vector({
  //minZoom: 13,
  name: "tourPath",
  opacity: 1,
  zIndex: 100,
  declutter: true,
  // y ordering
  //renderOrder: ol.ordering.yOrdering(),
});
map.addLayer(tourPath);
tourStopsSource = new ol.source.Vector({});
var tourStops = new ol.layer.Vector({
  //minZoom: 13,
  source: tourStopsSource,
  name: "tourStops",
  opacity: 1,
  zIndex: 200,
  declutter: true,
  style: function (feature, resolution) {
    return getStopsStyle(feature, resolution, false);
  },
});
map.addLayer(tourStops);
//---------------------------------tourPath layer and tourStops layer and source

function getStopsStyle(feature, resolution, sel) {
  if (!style && !text) {
    var style = new ol.style.Style({
      image: new ol.style.Icon({
        src: feature.get("pinStyle"),
        anchor: [0.5, 1],
        scale: sel ? 1.2 : 1,
      }),
    });
    var text = new ol.style.Style({
      text: new ol.style.Text({
        text: feature.get("name"),
        font: "10px Open Sans,sans-serif",
        overflow: true,
        fill: new ol.style.Fill({
          color: "#000",
        }),
        stroke: new ol.style.Stroke({
          color: "#fff",
          width: 2.8,
        }),
        offsetY: 10,
      }),
    });
  }
  return [style, text];
}

let stopSelect = new ol.interaction.Select({
  layers: [tourStops],
  condition: ol.events.condition.click,
  style: function (feature, resolution) {
    return getStopsStyle(feature, resolution, true);
  },
});
map.addInteraction(stopSelect);

let stopPopup = new ol.Overlay.Popup({
  popupClass: "ol-popup popup-border",
  closeBox: false,
  onclose: () => stopSelect.getFeatures().clear(),
  positioning: "auto",
  autoPan: true,
  autoPanAnimation: { duration: 500 },
});
map.addOverlay(stopPopup);

stopSelect.getFeatures().on(["add", "remove"], function (e) {
  console.log(e);
  feature = e.element;
  let content = feature.get("popupHtml");
  let color = feature.get("color");
  document.querySelector(
    ".popup-border"
  ).style.borderLeft = `5px solid ${color}`;
  if (e.type == "add") {
    stopPopup.show(feature.getGeometry().getCoordinates(), content);
  }
  if (e.type == "remove") {
    stopPopup.hide();
  }
});
// map.addInteraction(select);
let clearRoute = function () {
  stopPopup.hide();
  tourSource.clear();
  tourStopsSource.clear();
  if (isMobile) {
    document.querySelector(".routes-arrow").classList.add("hidden");
  }
};
function addRoutePins(
  pins,
  stopPinStyle,
  stopPinName,
  stopPinColor,
  img,
  about,
  tour
) {
  /* var stopStyle = new ol.style.Style({
    image: new ol.style.Icon({
      src: stopPinStyle,
      anchor: [0.5, 1],
    }),
  }); */

  // style = [stopStyle, stopLabelStyle];

  // stopLabelStyle.getText().setText(stopPinName);
  let popupHtml = ``;
  if (!img && !about) {
    popupHtml = `<h6>${stopPinName}</h6>`;
  }
  if (img) {
    popupHtml += `<div><img src=${img}><h6 class="overlay-title">${stopPinName}</h6>`;
  }
  if (about) {
    popupHtml += `<p>${about}</p></div>`;
  }
  var stopFeature = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat(pins)),
    name: stopPinName,
    pinStyle: stopPinStyle,
    popupHtml: popupHtml,
    color: stopPinColor,
  });

  /* stopFeature.setStyle(function () {
    stopLabelStyle.getText().setText(stopPinName);
    return style;
  }); */

  tourStopsSource.addFeature(stopFeature);
}
function renderRoute(tour, element) {
  function tourStyle() {
    return new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: element.getAttribute("color"),
        width: 5,
      }),
    });
  }
  tourSource = new ol.source.Vector({
    url: `../assets/tours/${tour}.geojson`,
    projection: "EPSG:3857",
    format: new ol.format.GeoJSON(),
  });

  tourPath.setSource(tourSource);
  tourPath.setStyle(tourStyle);

  let stops = routesData.features[tour].properties.stops;
  // let pins = routesData.features[tour].properties.pins;
  let stopPinStyle = routesData.features[tour].properties.pinStyle;
  // let stopPinName = routesData.features[tour].properties.stops;
  let stopPinColor = routesData.features[tour].properties.color;
  stops.forEach((stop) => {
    name = stop.name;
    coordinates = stop.coordinates;
    let img = false;
    let about = false;
    if (stop.img) {
      img = stop.img;
    }
    if (stop.about) {
      about = stop.about;
    }
    addRoutePins(
      coordinates,
      stopPinStyle,
      name,
      stopPinColor,
      img,
      about,
      tour
    );
  });
  // map.addLayer(stopPin);f
}

// tour1
//var tour1Source = new ol.source.Vector({
//  url: 'assets/tours/tour1.geojson',
//  projection: 'EPSG:3857',
//  format: new ol.format.GeoJSON(),
//});
//
//var tour1 = new ol.layer.Vector({
//  //minZoom: 13,
//  name: 'tour1',
//  source: tour1Source,
//  declutter: true,
//  opacity: 0,
//  // y ordering
//  //renderOrder: ol.ordering.yOrdering(),
//  style: getFeatureStyleTours
//});
//
//map.addLayer(tour1);
//tour1.setZIndex(1)
//
//// tour2
//var tour2Source = new ol.source.Vector({
//  url: 'assets/tours/tour2.geojson',
//  projection: 'EPSG:3857',
//  format: new ol.format.GeoJSON(),
//});
//
//var tour2 = new ol.layer.Vector({
//  //minZoom: 13,
//  name: 'tour2',
//  source: tour2Source,
//  declutter: true,
//  opacity: 0,
//  // y ordering
//  //renderOrder: ol.ordering.yOrdering(),
//  style: getFeatureStyleTours
//});
//
//map.addLayer(tour2);
//tour2.setZIndex(1)

// Associations layer
assocSource = new ol.source.Vector({
  features: new ol.format.GeoJSON().readFeatures(assocsData, {
    featureProjection: "EPSG:3857",
  }),
});

var assocs = new ol.layer.Vector({
  name: "assocs",
  source: assocSource,
  declutter: true,
  visible: false,
  // y ordering
  //renderOrder: ol.ordering.yOrdering(),
  style: function (feature, resolution) {
    return getFeatureStyleAssoc(feature, resolution, false);
  },
});
map.addLayer(assocs);

// localStorage
var zoom = map.getView().getZoom();
if (localStorage.basemap == 1) {
  //document.getElementById('satellite').classList.add('activate-baselayer')
  //document.getElementById('topo').classList.remove('activate-baselayer')
  topo.setVisible(true);
  satellite.setVisible(false);
  $("#topo").addClass("activate-baselayer");
  $("#satellite").removeClass("activate-baselayer");
}

var zastave = false;
var zastaveList = [tomislavgradZastava]; //, ramaPodloga, ramaZastava, posusjeZastava, livnoPodloga, livnoZastava, kupresZastava, kupresPodloga_blue, kupresPodloga_red, jablanicaZastava, opcine, opcineGranice]
for (zastava in zastaveList) {
  zastaveList[zastava].setZIndex(5);
}
console.log(localStorage.zastave);
if (localStorage.zastave == 2) {
  zastave = false;
  $("#zastaveOpcina").checked = false;
  //document.getElementById('zastaveOpcina').classList.remove('activate-layer')
  for (zastava in zastaveList) {
    zastaveList[zastava].setVisible(false);
  }
  vector.setVisible(true);
  nature.setVisible(true);
  tourist.setVisible(true);
  //assocs.setVisible(true)
  //vjerskiObjekti.setVisible(true)
}

// MeetTg and Routes functions -----------------------------------------------
var allLandmarksMenu = false;
var msgDisplay = document.getElementById("msg").style.display;
var landmarksAllDisplay = document.getElementById("landmarksAll").style.display;
document.getElementById("meet").style.display = "none";
//function allLandmarks() {
//  deselect()
//  if(allLandmarksMenu == false) {
//    allLandmarksMenu = true
//    document.getElementById('msg').style.display = 'none'
//    document.getElementById('landmarksAll').style.display = 'block'
//  } else {
//    allLandmarksMenu = 0
//    document.getElementById('msg').style.display = 'block'
//    document.getElementById('landmarksAll').style.display = 'none'
//  }
//}

var meet = 1;
document.getElementById("routes").style.display = "none";
document.getElementById("assoc").style.display = "none";
document.getElementById("assocsAll").style.display = "none";
document.getElementById("destinationsAll").style.display = "none";
document.getElementById("business").style.display = "none";
function meetTg() {
  if (meet == 1) {
    return;
  } else {
    if (meet == 3) {
      closeAssocDesc();
    }
    deselect();
    meet = 1;
    markers.setVisible(true);
    vector.setVisible(true);
    nature.setVisible(true);
    tourist.setVisible(true);
    vectorPin.setVisible(true);
    naturePin.setVisible(true);
    touristPin.setVisible(true);
    vector.setZIndex(20);
    nature.setZIndex(20);
    tourist.setZIndex(20);
    for (var i = 0; i < routesDesc.length; i++) {
      if (routesDesc[i].style.display == "block") {
        clearRoute();
        routesDesc[i].style.display = "none";
        routesDesc[i].classList.remove("activate-assoc");
      }
    }
    for (var i = 0; i < weekendDestinationsDesc.length; i++) {
      weekendDestinationsDesc[i].style.display = "none";
    }
    document.getElementById("msg").style.display = "block";
    document.getElementById("meet").style.display = "block";
    document.getElementById("routes").style.display = "none";
    document.getElementById("assoc").style.display = "none";
    document.getElementById("assocsAll").style.display = "none";
    document.getElementById("business").style.display = "none";
    var activate = document.getElementsByClassName("activate");
    while (activate.length) {
      activate[0].classList.remove("activate");
    }
    document.getElementById("btn-meet").classList.add("activate");

    //document.getElementById('btn-routes').classList.remove('activate')
    //document.getElementById('btn-assoc').classList.remove('activate')
    //vectorTours.setVisible(false)
    assocs.setVisible(false);
    //tour1.setVisible(false)
    //tour2.setVisible(false)
    //destination1.setVisible(false)
    routeSource.clear();
  }
}

function routes() {
  if (meet == 2) {
    return;
  } else {
    deselect();
    meet = 2;
    if (zastave) {
      zastaveOpcina();
    }
    assocs.setZIndex(10);
    vector.setZIndex(20);
    nature.setZIndex(20);
    tourist.setZIndex(20);
    document.getElementById("msg").style.display = "none";
    document.getElementById("meet").style.display = "none";
    document.getElementById("assoc").style.display = "none";
    document.getElementById("assocsAll").style.display = "none";
    document.getElementById("business").style.display = "none";
    document.getElementById("routes").style.display = "block";
    var activate = document.getElementsByClassName("activate");
    while (activate.length) {
      activate[0].classList.remove("activate");
    }
    document.getElementById("btn-routes").classList.add("activate");
    //vectorTours.setVisible(true)
    //vector.setVisible(false)
    //tour1.setOpacity(1)
    //tour2.setOpacity(1)
    //route.setOpacity(1)
  }
}

function touristTours() {
  document.getElementById("routesAll").style.display = "block";
  document.getElementById("destinationsAll").style.display = "none";
  document.getElementById("btn-touristTours").classList.add("activate-routes");
  document
    .getElementById("btn-weekendDestinations")
    .classList.remove("activate-routes");
}
function weekendDestinations() {
  document.getElementById("routesAll").style.display = "none";
  document.getElementById("destinationsAll").style.display = "block";
  document
    .getElementById("btn-weekendDestinations")
    .classList.add("activate-routes");
  document
    .getElementById("btn-touristTours")
    .classList.remove("activate-routes");
}

function assoc() {
  if (meet == 3) {
    return;
  } else {
    deselect();
    meet = 3;
    for (var i = 0; i < routesDesc.length; i++) {
      if (routesDesc[i].style.display == "block") {
        clearRoute();
        routesDesc[i].style.display = "none";
        routesDesc[i].classList.remove("activate-assoc");
      }
    }
    for (var i = 0; i < weekendDestinationsDesc.length; i++) {
      weekendDestinationsDesc[i].style.display = "none";
    }
    assocs.setVisible(true);
    document.getElementById("msg").style.display = "none";
    document.getElementById("meet").style.display = "none";
    document.getElementById("routes").style.display = "none";
    document.getElementById("business").style.display = "none";
    document.getElementById("assoc").style.display = "block";
    document.getElementById("assocsAll").style.display = "block";
    var activate = document.getElementsByClassName("activate");
    while (activate.length) {
      activate[0].classList.remove("activate");
    }
    document.getElementById("btn-assoc").classList.add("activate");
    markers.setVisible(false);
    vector.setVisible(false);
    nature.setVisible(false);
    tourist.setVisible(false);
    vectorPin.setVisible(false);
    naturePin.setVisible(false);
    touristPin.setVisible(false);
    //tour1.setVisible(false)
    //tour2.setVisible(false)
    //destination1.setVisible(false)
    routeSource.clear();
  }
}

function business() {
  if (meet == 4) {
    return;
  } else {
    deselect();
    if (meet == 3) {
      closeAssocDesc();
    }
    if (meet == 2) {
      for (var i = 0; i < routesDesc.length; i++) {
        if (routesDesc[i].style.display == "block") {
          clearRoute();
          routesDesc[i].style.display = "none";
          routesDesc[i].classList.remove("activate-assoc");
        }
      }
      for (var i = 0; i < weekendDestinationsDesc.length; i++) {
        weekendDestinationsDesc[i].style.display = "none";
      }
    }
    meet = 4;
    assocs.setVisible(false);
    document.getElementById("msg").style.display = "none";
    document.getElementById("meet").style.display = "none";
    document.getElementById("routes").style.display = "none";
    document.getElementById("assoc").style.display = "none";
    document.getElementById("assocsAll").style.display = "none";
    document.getElementById("business").style.display = "block";

    $(".menuBtn-border").removeClass("activate");
    //var activate = document.getElementsByClassName('activate')
    //while (activate.length) {
    //  activate[0].classList.remove('activate')
    //}
    document.getElementById("btn-business").classList.add("activate");
    markers.setVisible(false);
    vector.setVisible(false);
    nature.setVisible(false);
    tourist.setVisible(false);
    vectorPin.setVisible(false);
    naturePin.setVisible(false);
    touristPin.setVisible(false);
  }
}

function backFromMeet() {
  deselect();
  if (meet == 1) {
    document.getElementById("msg").style.display = "block";
  } else if (meet == 2) {
    document.getElementById("routes").style.display = "block";
  } else if (meet == 3) {
    document.getElementById("assoc").style.display = "block";
  }
}

// Control Select
var select = new ol.interaction.Select({
  layers: [vector, nature, tourist, vjerskiObjekti],
  condition: ol.events.condition.click,
  style: function (feature, resolution) {
    return getFeatureStyle(feature, resolution, true);
  },
});

map.addInteraction(select);

function deselect() {
  select.getFeatures().clear();
}

features = select.getFeatures().on(["add", "remove"], function (e) {
  if (!zastave || currZoom > 11.5) {
    document.getElementById("meet").style.display = "none";
    document.getElementById("landmark").style.display = "none";
    document.getElementById("image").style.display = "none";
    document.getElementById("landmark-about").style.display = "none";
    if (e.type == "add") {
      if (meet == 1) {
        document.getElementById("msg").style.display = "none";
      }
      toggleOnSelect();
      //var info = $("#select").html("<p>Selection:</p>");
      var feature = e.element;
      //document.getElementById('landmark-type').src = feature.get('thumb');
      //document.getElementById('landmark-place').innerHTML = feature.get('place');
      document.getElementById("landmark").innerHTML = feature.get("name");
      document.getElementById("landmark-about").innerHTML =
        feature.get("about");
      document.getElementById("googleMaps-href").href =
        feature.get("googleMaps");
      document.getElementById("expandedImg").src = feature.get("img2");
      document.getElementById("image2").src = feature.get("img2");
      document.getElementById("image3").src = feature.get("img3");
      document.getElementById("image4").src = feature.get("img4");
      document.getElementById("image5").src = feature.get("img5");
      document.getElementById("meet").style.display = "block";
      document.getElementById("landmark").style.display = "inline-block";
      document.getElementById("image").style.display = "inline-block";
      document.getElementById("landmark-about").style.display = "inline-block";
      document.getElementById("nodelist").style.display = "none";
      //$("<img>").attr('src',el.get("img")).appendTo(info);
      //$("<p>").text(el.get("text")).appendTo(info);
      //$("<p>").text(el.get("commune")+" ("+el.get("region")+" - "+el.get("date").replace(".","/")+")").appendTo(info);
      //$("<p>").addClass('copy').html("&copy; "+el.get("copy")+" - "+el.get("author")).appendTo(info);
    } else {
      //$("#select").html("<p>Select an image.</p>");
      if (meet == 1) {
        document.getElementById("msg").style.display = "block";
      }
    }
  }
});

var selectAssoc = new ol.interaction.Select({
  layers: [assocs],
  condition: ol.events.condition.click,
  style: function (feature, resolution) {
    return getFeatureStyleAssoc(feature, resolution, true);
  },
});

map.addInteraction(selectAssoc);

selectAssoc.getFeatures().on(["add", "remove"], function (e) {
  if (!zastave || currZoom > 11.5) {
    toggleOnSelect();
    var feature = e.element;
    var id = feature.get("id");
    if (e.type == "add") {
      if (meet == 1) {
        document.getElementById("msg").style.display = "none";
      }
      //var info = $("#select").html("<p>Selection:</p>");
      console.log(id);
      assoc();
      document.getElementById(id + "-text").style.display = "none";
      getAssoc(id);

      //$("<img>").attr('src',el.get("img")).appendTo(info);
      //$("<p>").text(el.get("text")).appendTo(info);
      //$("<p>").text(el.get("commune")+" ("+el.get("region")+" - "+el.get("date").replace(".","/")+")").appendTo(info);
      //$("<p>").addClass('copy').html("&copy; "+el.get("copy")+" - "+el.get("author")).appendTo(info);
    } else {
      //$("#select").html("<p>Select an image.</p>");
      if (meet == 1) {
        document.getElementById("msg").style.display = "block";
      }
      document.getElementById(id + "-text").style.display = "block";
      getAssoc(id);
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

//var iconStyle = new ol.style.Style({
//  image: new ol.style.Icon({
//    declutter: true,
//    src: 'assets/icon/360_mapIcon.svg',
//    anchor: [0.5, 2.9],
//    size: [100, 30],
//  })
//})

var hoverInteraction = new ol.interaction.Select({
  condition: ol.events.condition.pointerMove,
  layers: [markers],
  style: iconStyle,
});
map.addInteraction(hoverInteraction);
//selectInteraction.on('select', function (e) {
//  console.log(e.element)
//})

var select360 = new ol.interaction.Select({
  layers: [markers],
  condition: ol.events.condition.click,
  style: iconStyle,
});
map.addInteraction(select360);
select360.getFeatures().on(["add", "remove"], function (e) {
  if (e.type == "add") {
    window.open(e.element.values_.url, "_self");
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
if (isMobile) {
  document.getElementById("logo").classList.add("logo-color");
}
function toggle(x) {
  x.classList.toggle("change");
  $("#wrapper").toggleClass("toggled");
  $("#logo").toggleClass("logo-toggle");
  $("#logo").toggleClass("logo-color");
  //document.getElementById('div-toggle').classList.toggle('bg-toggle');
}

function toggleOnSelect() {
  if (window.innerWidth < 575.99) {
    if ((document.getElementById("menu-toggle").classList = "change")) {
      toggle(document.getElementById("menu-toggle"));
    }
  } else {
    if (document.getElementById("menu-toggle").classList != "change") {
      toggle(document.getElementById("menu-toggle"));
    }
  }
}
//$("#dropdown-menu").slideToggle()
function slojevi() {
  console.log("slojevi");
  //$("#dropdown-menu").animate({width: 'toggle'}, 300)
  document.getElementById("dropdown-menu").style.visibility = "visible";
  document.getElementById("dropdown-menu").style.opacity = 1;
}
function slojeviClose() {
  //$("#dropdown-menu").animate({width: 'toggle'}, 250)
  document.getElementById("dropdown-menu").style.visibility = "hidden";
  document.getElementById("dropdown-menu").style.opacity = 0;
}

// Routing ---------------------------------------------------
// Get coordinates from geojson (for route)

document.getElementById("msg_el").style.display = "none";

// Make route layer

//points = [],
//msg_el = document.getElementById('msg_el'),
(url_osrm_nearest = "//router.project-osrm.org/nearest/v1/driving/"),
  (url_osrm_route = "//router.project-osrm.org/route/v1/driving/"),
  (icon_url = "/assets/icon/placeholder2.png"),
  (routeSource = new ol.source.Vector()),
  (route = new ol.layer.Vector({
    name: "route",
    source: routeSource,
  })),
  (styles = {
    route: new ol.style.Style({
      stroke: new ol.style.Stroke({
        width: 6,
        color: [255, 193, 7],
      }),
    }),
    icon: new ol.style.Style({
      image: new ol.style.Icon({
        anchor: [0.5, 1],
        src: icon_url,
      }),
    }),
  });
map.addLayer(route);

// Routing
var utils = {
  getNearest: function (coord) {
    var coord4326 = utils.to4326(coord);
    return new Promise(function (resolve, reject) {
      //make sure the coord is on street
      fetch(url_osrm_nearest + coord4326.join())
        .then(function (response) {
          // Convert to JSON
          return response.json();
        })
        .then(function (json) {
          if (json.code === "Ok") resolve(json.waypoints[0].location);
          else reject();
        });
    });
  },
  createFeature: function (coord) {
    var feature = new ol.Feature({
      type: "place",
      geometry: new ol.geom.Point(coord),
    });
    feature.setStyle(styles.icon);
    routeSource.addFeature(feature);
  },
  createRoute: function (polyline) {
    // route is ol.geom.LineString
    var route = new ol.format.Polyline({
      factor: 1e5,
    }).readGeometry(polyline, {
      dataProjection: "EPSG:4326",
      featureProjection: "EPSG:3857",
    });
    var feature = new ol.Feature({
      type: "route",
      geometry: route,
    });
    feature.setStyle(styles.route);
    routeSource.addFeature(feature);
  },
  to4326: function (coord) {
    return ol.proj.transform(
      [parseFloat(coord[0]), parseFloat(coord[1])],
      "EPSG:3857",
      "EPSG:4326"
    );
  },
};

// Get geojson file and draw route from it function
function getSourceJSON(clickedID, selected) {
  //document.getElementById('sidebar-wrapper').style.pointerEvents = 'none'
  routeSource.clear();
  map.getLayers().forEach(function (layer) {
    let name = layer.get("name");
    if (name) {
      if (name.slice(0, 4) == "tour" || name.slice(0, 4) == "dest") {
        layer.setVisible(false);
        document.getElementById(name).classList.remove("activate");
      }
      if (name == clickedID) {
        if (name.slice(0, 4) == "tour") {
          for (var i = 0; i < weekendDestinationsDesc.length; i++) {
            weekendDestinationsDesc[i].style.display = "none";
          }
          let clickedIDtext = document.getElementById(clickedID + "-text").style
            .display;
          if (clickedIDtext == "none") {
            zoomToRoute(clickedID);
            document.getElementById(clickedID).classList.add("activate");
            document.getElementById(clickedID + "-text").style.display =
              "block";
            //vector.getSource().once('addfeature', function() {
            layer.setOpacity(1);
            layer.setVisible(true);
            layer.setZIndex(10000);
            var points = [];
            var features = layer.getSource().getFeatures();
            for (feature in features) {
              points.push(
                features[feature].geometryChangeKey_.target.flatCoordinates
              );
            }
            for (point in points) {
              var evt = points[point];
              utils.getNearest(evt).then(function (coord_street) {
                var last_point = points[points.length - 1];
                var points_length = points.push(coord_street);
                //if (points_length < 2) {
                //  msg_el.innerHTML = 'Click to add another point';
                //  return;
                //}
                //get the route
                var point1 = last_point.join();
                var point2 = coord_street.join();

                fetch(url_osrm_route + point1 + ";" + point2)
                  .then(function (r) {
                    return r.json();
                  })
                  .then(function (json) {
                    //if(json.code !== 'Ok') {
                    //  msg_el.innerHTML = 'No route found.';
                    //  return;
                    //}
                    //msg_el.innerHTML = 'Route added';
                    points.length = 0;
                    utils.createRoute(json.routes[0].geometry);
                    //document.getElementById('sidebar-wrapper').style.pointerEvents = 'auto'
                  });
              });
              utils.createFeature(evt);
            }
            //})
          } else {
            layer.setZIndex(1);
            document.getElementById(clickedID + "-text").style.display = "none";
            //document.getElementById('sidebar-wrapper').style.pointerEvents = 'auto'
          }
        }
        if (name.slice(0, 4) == "dest") {
          let clickedIDtext = document.getElementById(clickedID + "-text").style
            .display;
          if (clickedIDtext == "none") {
            zoomToDest(clickedID);
            document.getElementById(clickedID).classList.add("activate");
            document.getElementById(clickedID + "-text").style.display =
              "block";
            //vector.getSource().once('addfeature', function() {
            layer.setOpacity(1);
            layer.setVisible(true);
            layer.setZIndex(1);
          } else {
            layer.setZIndex(1);
            document.getElementById(clickedID + "-text").style.display = "none";
          }
        }
      }
    }
  });
}
function getAssoc(clickedID) {
  let assocsAll = document.getElementById("assocsAll");
  let clickedID_element = document.getElementById(clickedID);
  let clickedID_text = document.getElementById(clickedID + "-text");
  let clickedIDtextStyle = document.getElementById(clickedID + "-text").style
    .display;
  if (clickedIDtextStyle == "none") {
    var activate = document.getElementsByClassName("activate-assoc");
    while (activate.length) {
      activate[0].classList.remove("activate-assoc");
    }
    zoomToAssoc(clickedID);
    clickedID_text.style.display = "block";
    let elementPosition = clickedID_element.offsetTop - 185;
    assocsAll.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
    /* clickedID_text.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    }); */
    console.log(clickedID);
    clickedID_element.classList.add("activate-assoc");
    clickedID_text.classList.add("activate-assoc");
  } else {
    clickedID_text.style.display = "none";
    clickedID_element.classList.remove("activate-assoc");
    clickedID_text.classList.remove("activate-assoc");

    //assocSource.refresh()
  }
}

//layers = map.getLayers().array_

//document.addEventListener('click', function(e) {
//  //if(meet==2){
//  //  e = e || window.event;
//  //  var target = e.target || e.srcElement,
//  //  //text = target.textContent || target.innerText;
//  //  id = [target.id],
//  //  node = target.nodeName,
//  //  display = document.getElementById(id+"-text").style.display
//  //  console.log(id)
//  //  if(node == "BUTTON" && display=='none'){
//  //    zoomToRoute(id)
//  //    document.getElementById(id+"-text").style.display = 'block';
//  //    //route.setVisible(true)
//  //    //route.changed()
//  //    //for(layer in layers){
//  //    //  if (layers[layer].values_.name == 'route'){
//  //    //    layers[layer].setVisible(false)
//  //    //    layers[layer].changed()
//  //    //  }
//  //    //  if (layers[layer].values_.name == 'route'){
//  //    //    layers[layer].setVisible(true)
//  //    //    layers[layer].changed()
//  //    //  }
//  //    //}
//  //  } else {
//  //    document.getElementById(id+"-text").style.display = 'none';
//  //  }
//  //}
//  if(meet==3){
//    e = e || window.event;
//    var target = e.target || e.srcElement,
//    //text = target.textContent || target.innerText;
//    id = [target.id]
//    node = target.nodeName
//    //if(node == "BUTTON"){
//    //  zoomToAssoc(id)
//    //  document.getElementById(id+"-text").style.display = 'block';
//    //  //route.setVisible(true)
//    //  //route.changed()
//    //  //for(layer in layers){
//    //  //  if (layers[layer].values_.name == 'route'){
//    //  //    layers[layer].setVisible(false)
//    //  //    layers[layer].changed()
//    //  //  }
//    //  //  if (layers[layer].values_.name == 'route'){
//    //  //    layers[layer].setVisible(true)
//    //  //    layers[layer].changed()
//    //  //  }
//    //  //}
//    //}
//  }
//}, false);

let tours = [];
let weekendDestinationsList = [];
map.getLayers().forEach(function (layer) {
  let layName = layer.get("name");
  if (layName) {
    if (layName.slice(0, 4) == "tour") {
      tours.push(layer);
    }
    if (layName.slice(0, 4) == "dest") {
      weekendDestinationsList.push(layer);
    }
  }
});
//var routesDesc = ["tour2-text", "tour1-text"]
//
////for(var i = 1; i <= tours.length; i++){
////  var id = document.getElementById("tour"+i+"-text")
////  routesDesc.push(id)
////}

//var weekendDestinationsDesc = []
//for(var i = 1; i <= weekendDestinationsList.length; i++){
//  var id = document.getElementById("destination"+i+"-text")
//  weekendDestinationsDesc.push(id)
//}
for (var i = 0; i < weekendDestinationsDesc.length; i++) {
  weekendDestinationsDesc[i].style.display = "none";
}

function zoomToRoute(id) {
  // for (var i = 0; i < routesDesc.length; i++) {
  //   routesDesc[i].style.display = "none";
  // }

  if (isMobile) {
    toggle(document.getElementById("menu-toggle"));
    // setTimeout(() => toggle(document.getElementById("menu-toggle")), "1500");
  }
  view.animate({
    center: routesData.features[id].geometry.coordinates,
    duration: 1000,
    zoom: isMobile
      ? routesData.features[id].geometry.zoomMobile
      : routesData.features[id].geometry.zoom,
  });
  // toggle(document.getElementById("menu-toggle"));
}

//Destinations zoom to
var destCoord = [[[1919403.44, 5398854.51], 14]];
function zoomToDest(id) {
  var num = id.slice(11);
  console.log(destCoord[num - 1]);
  view.animate({
    center: destCoord[num - 1][0],
    duration: 1000,
    zoom: destCoord[num - 1][1],
  });
}

// Association description and zoom

//var assocDesc = []
//var assocCoord = [[1917107.92, 5422196.02], [1893631.38, 5405800.73], [1906043.14, 5404598.15], [1917500.92, 5421475.52]]
//for(var i = 1; i <= assocCoord.length; i++){
//  var idAssoc = document.getElementById("assoc"+i+"-text")
//  assocDesc.push(idAssoc)
//}
//for (var i = 0; i < assocDesc.length; i++){
//  assocDesc[i].style.display = 'none'
//}
console.log(assocDesc);
function closeAssocDesc() {
  for (var i = 0; i < assocDesc.length; i++) {
    assocDesc[i].style.display = "none";
  }
  $(".list-group-item").removeClass("activate-assoc");
}
function zoomToAssoc(id) {
  for (var i = 0; i < assocDesc.length; i++) {
    assocDesc[i].style.display = "none";
  }
  var num = id.slice(5);
  if (isMobile) {
    toggle(document.getElementById("menu-toggle"));
  }
  view.animate({
    center: ol.proj.fromLonLat(assocCoord[num - 1]),
    duration: 2000,
    zoom: 15,
  });
  if (isMobile) {
    setTimeout(() => toggle(document.getElementById("menu-toggle")), "2500");
  }
  //if(id=="assoc1"){
  //  view.animate({
  //    center: [1947251.48, 5406108.47],
  //    duration: 1000,
  //    zoom: 14.5
  //  });
  //}
  //if(id=="assoc2"){
  //  view.animate({
  //    center: ol.proj.fromLonLat([17.499510, 43.624876]),
  //    duration: 1000,
  //    zoom: 16
  //  });
  //}
}

// Layer controls
console.log(localStorage.zastave);
function zastaveOpcina() {
  if (zastave) {
    zastave = false;
    document.getElementById("zastaveOpcina").checked = false;
    for (zastava in zastaveList) {
      zastaveList[zastava].setVisible(false);
    }
    localStorage.zastave = 2;
    vector.setVisible(true);
    nature.setVisible(true);
    tourist.setVisible(true);
    //assocs.setVisible(true)
    //vjerskiObjekti.setVisible(true)
  } else {
    zastave = true;
    console.log(zastave);
    document.getElementById("zastaveOpcina").checked = true;
    for (zastava in zastaveList) {
      zastaveList[zastava].setVisible(true);
    }
    localStorage.zastave = 1;
    vector.setVisible(false);
    nature.setVisible(false);
    tourist.setVisible(false);
    assocs.setVisible(false);
    //vjerskiObjekti.setVisible(false)
  }
}

//var graniceNaselja = true
//document.getElementById('naseljaTomislavgrad').checked = true
//function naselja() {
//  if (graniceNaselja) {
//    graniceNaselja = false
//    document.getElementById('naseljaTomislavgrad').checked = false
//    tomislavgradNaselja.setVisible(false)
//    tomislavgradNaselja_nazivi.setVisible(false)
//  } else {
//    graniceNaselja = true
//    document.getElementById('naseljaTomislavgrad').checked = true
//    tomislavgradNaselja.setVisible(true)
//    tomislavgradNaselja_nazivi.setVisible(true)
//  }
//}

$("#znamenitosti").checked = true;
$("#vjerski").checked = false;

var landmarksVisible = true;
document.getElementById("znamenitosti").checked = true;
function znamenitosti() {
  if (landmarksVisible) {
    landmarksVisible = false;
    document.getElementById("znamenitosti").checked = false;
    vector.setVisible(false);
    nature.setVisible(false);
    tourist.setVisible(false);
    vectorPin.setVisible(false);
    naturePin.setVisible(false);
    touristPin.setVisible(false);
  } else {
    landmarksVisible = true;
    document.getElementById("znamenitosti").checked = true;
    vector.setVisible(true);
    nature.setVisible(true);
    tourist.setVisible(true);
    vectorPin.setVisible(true);
    naturePin.setVisible(true);
    touristPin.setVisible(true);
  }
}

var vjerskiVisible = false;
document.getElementById("vjerski").checked = false;
function vjerski() {
  if (vjerskiVisible) {
    vjerskiVisible = false;
    document.getElementById("vjerski").checked = false;
    vjerskiObjekti.setVisible(false);
    vjerskiPin.setVisible(false);
  } else {
    vjerskiVisible = true;
    document.getElementById("vjerski").checked = true;
    vjerskiObjekti.setVisible(true);
    vjerskiPin.setVisible(true);
  }
}

function basemapTopo() {
  topo.setVisible(true);
  satellite.setVisible(false);
  document.getElementById("topo");
  document.getElementById("topo").classList.add("activate-baselayer");
  document.getElementById("satellite").classList.remove("activate-baselayer");
  localStorage.basemap = 1;
}

function basemapSatellite() {
  topo.setVisible(false);
  satellite.setVisible(true);
  document.getElementById("satellite").classList.add("activate-baselayer");
  document.getElementById("topo").classList.remove("activate-baselayer");
  localStorage.basemap = 2;
}

function zoomOut() {
  view.animate({
    center: [1922049.9, 5426332.39],
    duration: 4000,
    zoom: 9.8,
  });
  meetTg();
  deselect();
}

// Dodavanje slika na kartu iz html-a
//var vienna = new ol.Overlay({
//  position: [1917126.71, 5421738.68],
//  element: document.getElementById('vienna'),
//});
//map.addOverlay(vienna);

//-----------------------------------------------------------------------------------------------provjeriti
//if (currZoom < 11.5 && zastave == true) {
//  vector.setVisible(false)
//  nature.setVisible(false)
//  tourist.setVisible(false)
//  assocs.setVisible(false)
//  //vjerskiObjekti.setVisible(false)
//
//} else {
//  vector.setVisible(true)
//  nature.setVisible(true)
//  tourist.setVisible(true)
//  assocs.setVisible(true)
//  //vjerskiObjekti.setVisible(true)
//  document.getElementById('zastaveOpcina').disabled = true
//  document.getElementById('zastaveOpcinaBox').classList.add('disabled')
//}
//if (currZoom < 11.5) {
//  document.getElementById('zastaveOpcina').disabled = false
//  document.getElementById('zastaveOpcinaBox').classList.remove('disabled')
//} else {
//  document.getElementById('zastaveOpcina').disabled = true
//  document.getElementById('zastaveOpcinaBox').classList.add('disabled')
//}
//-----------------------------------------------------------------------------------------------

function sidebarGallery(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}

let request = new XMLHttpRequest();

request.open(
  "POST",
  "https://api.openrouteservice.org/v2/directions/driving-car/geojson"
);

request.setRequestHeader(
  "Accept",
  "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8"
);
request.setRequestHeader("Content-Type", "application/json");
request.setRequestHeader(
  "Authorization",
  "5b3ce3597851110001cf62480f2a839c2c304a6db122388e30530fcd"
);

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log("Status:", this.status);
    console.log("Headers:", this.getAllResponseHeaders());
    console.log("Body:", this.responseText);
    console.log("kordinate su : " + this.responseText.geometry);
  }
};

const body =
  '{"coordinates":[[17.233632,43.625019],[17.298278,43.586705],[17.532945,43.653143]]}';

request.send(body);

var routesStyle = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: "green",
    width: 1,
  }),
});

const routeSource2 = new ol.source.Vector({
  features: body.coordinates,
});

var routeNew = new ol.layer.Vector({
  source: routeSource2,
  style: routesStyle,
});

map.addLayer(routeNew);
