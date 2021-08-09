document.onreadystatechange = function() {
  if (document.readyState != 'complete') {
    document.getElementById('back-icon').style.visibility = 'hidden';
  } else {
    document.getElementById('back-icon').style.visibility = 'visible';
  }
}
document.getElementById('back-href').setAttribute('href', 'index.html'+localStorage.hash)
if (window.location.hash == '#mesihovina') {
  var viewer = new PhotoSphereViewer.Viewer({
    panorama: '../assets/360/crkvaMesihovina.jpg',
    container: 'photosphere',
    loadingImg: 'assets/icon/virtual-reality.svg',
    defaultLat: -0.45,
    defaultLong: 2.15,
    touchmoveTwoFingers: false,
    mousewheelCtrlKey: false,
    moveInertia: true,
  
    plugins: [
      [PhotoSphereViewer.MarkersPlugin, {
        // list of markers
        markers: [{
            // mountain marker
            id: 'Kuline',
            longitude: 2.06,
            latitude: 0.085,
            image: '../assets/icon/planinaIcon.svg',
            width: 50,
            height: 100,
            anchor: '50% 100%',
            tooltip: 'Kuline, Midena (1129 m)',
          },
          {
            // mountain marker
            id: 'Smiljevaca',
            longitude: 4.05,
            latitude: 0.08,
            image: '../assets/icon/planinaIcon.svg',
            width: 50,
            height: 100,
            anchor: 'bottom center',
            tooltip: 'Smiljevača, Crvenička Kosa (1429 m)',
          },
          {
            // mountain marker
            id: 'MatinGrad',
            longitude: 4.9,
            latitude: 0.05,
            image: '../assets/icon/planinaIcon.svg',
            width: 50,
            height: 100,
            anchor: 'bottom center',
            tooltip: 'Matin Grad, Babića Brig (1115 m)',
          },
          {
            // mountain marker
            id: 'VelikiOstrc',
            longitude: 5.32,
            latitude: 0.07,
            image: '../assets/icon/planinaIcon.svg',
            width: 50,
            height: 100,
            anchor: 'bottom center',
            tooltip: 'Veliki Oštrc, Gozd (1299 m)',
          },
          {
            // image marker that opens the panel when clicked
            id: 'staroGrobljeMesihovina',
            longitude: 2.15,
            latitude: -0.4,
            image: 'https://photo-sphere-viewer.js.org/assets/pin-blue.png',
            width: 50,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Staro Groblje',
            content: document.getElementById('staroGrobljeMesihovina').innerHTML
          },
          {
            // image marker that opens the panel when clicked
            id: 'crkvaMesihovina',
            longitude: 1.71,
            latitude: -0.55,
            image: 'https://photo-sphere-viewer.js.org/assets/pin-blue.png',
            width: 50,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Crkva u Mesihovini',
            content: document.getElementById('crkvaMesihovina').innerHTML
          },
          {
            // html marker with custom style
            id: 'bukovica',
            longitude: 2.75,
            latitude: -0.01,
            html: 'Bukovica',
            anchor: 'bottom center',
            scale: [1, 1],
            tooltip: 'Naselje Bukovica',
            content: document.getElementById('bukovica').innerHTML,
            style: {
              maxWidth: '500px',
              height: '150px',
              color: 'white',
              fontSize: '17px',
              fontFamily: 'sans-serif',
              textAlign: 'center',
              //borderLeft: '2px solid white',
              //paddingLeft: '0.5rem',
              background: 'linear-gradient(#fff, #fff) no-repeat center bottom/1.5px 85%',
              //padding: '0.5em 1em',
              //borderRadius: '4px',
              //boxShadow: '0px -2px rgba(90, 90, 90, 0.7)'
            },
          },
          {
            // html marker with custom style
            id: 'seonica',
            longitude: 3.6,
            latitude: -0.01,
            html: 'Seonica',
            anchor: 'bottom center',
            scale: [1, 1],
            tooltip: 'Naselje Seonica',
            content: document.getElementById('seonica').innerHTML,
            style: {
              maxWidth: '500px',
              height: '150px',
              color: 'white',
              fontSize: '17px',
              fontFamily: 'sans-serif',
              textAlign: 'center',
              background: 'linear-gradient(#fff, #fff) no-repeat center bottom/1.5px 85%',
            },
          },
          {
            // html marker with custom style
            id: 'crvenice',
            longitude: 4.3,
            latitude: -0.01,
            html: 'Crvenice',
            anchor: 'bottom center',
            scale: [1, 1],
            tooltip: 'Naselje Crvenice',
            content: document.getElementById('crvenice').innerHTML,
            style: {
              maxWidth: '500px',
              height: '150px',
              color: 'white',
              fontSize: '17px',
              fontFamily: 'sans-serif',
              textAlign: 'center',
              background: 'linear-gradient(#fff, #fff) no-repeat center bottom/1.5px 85%',
            },
          },
          //{
          //  // polygon marker
          //  id: 'polygon',
          //  polylineRad: [
          //    [6.2208, 0.0906],
          //    [0.0443, 0.1028],
          //    [0.2322, 0.0849],
          //    [0.4531, 0.0387],
          //    [0.5022, -0.0056],
          //    [0.4587, -0.0396],
          //    [0.2520, -0.0453],
          //    [0.0434, -0.0575],
          //    [6.1302, -0.0623],
          //    [6.0094, -0.0169],
          //    [6.0471, 0.0320],
          //    [6.2208, 0.0906],
          //  ],
          //  svgStyle: {
          //    fill: 'rgba(200, 0, 0, 0.2)',
          //    stroke: 'rgba(200, 0, 50, 0.8)',
          //    strokeWidth: '2px'
          //  },
          //  tooltip: {
          //    content: 'A dynamic polygon marker',
          //    position: 'right bottom'
          //  }
          //},
          //{
          //  // polyline marker
          //  id: 'polyline',
          //  polylinePx: [2478, 1635, 2184, 1747, 1674, 1953, 1166, 1852, 709, 1669, 301, 1519, 94, 1399, 34, 1356],
          //  svgStyle: {
          //    stroke: 'rgba(140, 190, 10, 0.8)',
          //    strokeLinecap: 'round',
          //    strokeLinejoin: 'round',
          //    strokeWidth: '10px'
          //  },
          //  tooltip: 'A dynamic polyline marker'
          //},
          //{
          //  // circle marker
          //  id: 'google',
          //  circle: 20,
          //  x: 2500,
          //  y: 1000,
          //  tooltip: 'A circle marker',
          //  data: 'href',
          //}
        ]
      }]
    ]
  });
  
  var markersPlugin = viewer.getPlugin(PhotoSphereViewer.MarkersPlugin);
  
  /**
   * Create a new marker when the user clicks somewhere
   */
  //viewer.on('click', function(e, data) {
  //  if (!data.rightclick) {
  //    markersPlugin.addMarker({
  //      id: '#' + Math.random(),
  //      longitude: data.longitude,
  //      latitude: data.latitude,
  //      image: 'https://photo-sphere-viewer.js.org/assets/pin-red.png',
  //      width: 32,
  //      height: 32,
  //      anchor: 'bottom center',
  //      tooltip: 'Generated pin',
  //      data: {
  //        generated: true
  //      }
  //    });
  //  }
  //});
  
  /**
   * Delete a generated marker when the user double-clicks on it
   * Or change the image if the user right-clicks on it
   */
  markersPlugin.on('select-marker', function(e, marker, data) {
      console.log(marker)
      if(marker.data=='href'){
      location.href = "https://"+marker.id+".com"
    console.log(marker.id)}
  });
}

if (window.location.hash == '#glizicaMlin') {
  var viewer = new PhotoSphereViewer.Viewer({
    panorama: '../assets/360/glizicaMlinica.jpg',
    container: 'photosphere',
    loadingImg: 'assets/icon/virtual-reality.svg',
    defaultLong: 4.02,
    defaultLat: -0.24,
    touchmoveTwoFingers: false,
    mousewheelCtrlKey: false,
    moveInertia: true,
  
    plugins: [
      [PhotoSphereViewer.MarkersPlugin, {
        // list of markers
        markers: [
          {
            // image marker that opens the panel when clicked
            id: 'glizicaMlinica',
            longitude: 4.05,
            latitude: -0.345,
            image: 'https://photo-sphere-viewer.js.org/assets/pin-blue.png',
            width: 50,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Glizića mlinica',
            content: document.getElementById('glizicaMlinica').innerHTML
          },
          {
            // mountain marker
            id: 'Kuline',
            longitude: 1.53,
            latitude: 0.04,
            image: '../assets/icon/planinaIcon.svg',
            width: 50,
            height: 100,
            anchor: '50% 100%',
            tooltip: 'Kuline, Midena (1129 m)',
          },
          {
            // mountain marker
            id: 'Smiljevaca',
            longitude: 3.85,
            latitude: 0.13,
            image: '../assets/icon/planinaIcon.svg',
            width: 50,
            height: 100,
            anchor: 'bottom center',
            tooltip: 'Smiljevača, Crvenička Kosa (1429 m)',
          },
          {
            // mountain marker
            id: 'MatinGrad',
            longitude: 5.48,
            latitude: 0.13,
            image: '../assets/icon/planinaIcon.svg',
            width: 50,
            height: 100,
            anchor: 'bottom center',
            tooltip: 'Matin Grad, Babića Brig (1115 m)',
          },
          {
            // html marker with custom style
            id: 'bukovica',
            longitude: 2,
            latitude: -0.02,
            html: 'Bukovica',
            anchor: 'bottom center',
            scale: [1, 1],
            tooltip: 'Naselje Bukovica',
            content: document.getElementById('bukovica').innerHTML,
            style: {
              maxWidth: '500px',
              height: '150px',
              color: 'white',
              fontSize: '17px',
              fontFamily: 'sans-serif',
              textAlign: 'center',
              //borderLeft: '2px solid white',
              //paddingLeft: '0.5rem',
              background: 'linear-gradient(#fff, #fff) no-repeat center bottom/1.5px 85%',
              //padding: '0.5em 1em',
              //borderRadius: '4px',
              //boxShadow: '0px -2px rgba(90, 90, 90, 0.7)'
            },
          },
          {
            // html marker with custom style
            id: 'seonica',
            longitude: 3.25,
            latitude: -0.01,
            html: 'Seonica',
            anchor: 'bottom center',
            scale: [1, 1],
            tooltip: 'Naselje Seonica',
            content: document.getElementById('seonica').innerHTML,
            style: {
              maxWidth: '500px',
              height: '150px',
              color: 'white',
              fontSize: '17px',
              fontFamily: 'sans-serif',
              textAlign: 'center',
              background: 'linear-gradient(#fff, #fff) no-repeat center bottom/1.5px 85%',
            },
          },
          {
            // html marker with custom style
            id: 'crvenice',
            longitude: 4.3,
            latitude: 0.01,
            html: 'Crvenice',
            anchor: 'bottom center',
            scale: [1, 1],
            tooltip: 'Naselje Crvenice',
            content: document.getElementById('crvenice').innerHTML,
            style: {
              maxWidth: '500px',
              height: '150px',
              color: 'white',
              fontSize: '17px',
              fontFamily: 'sans-serif',
              textAlign: 'center',
              background: 'linear-gradient(#fff, #fff) no-repeat center bottom/1.5px 85%',
            },
          },
          //{
          //  // polygon marker
          //  id: 'polygon',
          //  polylineRad: [
          //    [6.2208, 0.0906],
          //    [0.0443, 0.1028],
          //    [0.2322, 0.0849],
          //    [0.4531, 0.0387],
          //    [0.5022, -0.0056],
          //    [0.4587, -0.0396],
          //    [0.2520, -0.0453],
          //    [0.0434, -0.0575],
          //    [6.1302, -0.0623],
          //    [6.0094, -0.0169],
          //    [6.0471, 0.0320],
          //    [6.2208, 0.0906],
          //  ],
          //  svgStyle: {
          //    fill: 'rgba(200, 0, 0, 0.2)',
          //    stroke: 'rgba(200, 0, 50, 0.8)',
          //    strokeWidth: '2px'
          //  },
          //  tooltip: {
          //    content: 'A dynamic polygon marker',
          //    position: 'right bottom'
          //  }
          //},
          //{
          //  // polyline marker
          //  id: 'polyline',
          //  polylinePx: [2478, 1635, 2184, 1747, 1674, 1953, 1166, 1852, 709, 1669, 301, 1519, 94, 1399, 34, 1356],
          //  svgStyle: {
          //    stroke: 'rgba(140, 190, 10, 0.8)',
          //    strokeLinecap: 'round',
          //    strokeLinejoin: 'round',
          //    strokeWidth: '10px'
          //  },
          //  tooltip: 'A dynamic polyline marker'
          //},
          //{
          //  // circle marker
          //  id: 'google',
          //  circle: 20,
          //  x: 2500,
          //  y: 1000,
          //  tooltip: 'A circle marker',
          //  data: 'href',
          //}
        ]
      }]
    ]
  });
  
  var markersPlugin = viewer.getPlugin(PhotoSphereViewer.MarkersPlugin);
  
  /**
   * Create a new marker when the user clicks somewhere
   */
  //viewer.on('click', function(e, data) {
  //  if (!data.rightclick) {
  //    markersPlugin.addMarker({
  //      id: '#' + Math.random(),
  //      longitude: data.longitude,
  //      latitude: data.latitude,
  //      image: 'https://photo-sphere-viewer.js.org/assets/pin-red.png',
  //      width: 32,
  //      height: 32,
  //      anchor: 'bottom center',
  //      tooltip: 'Generated pin',
  //      data: {
  //        generated: true
  //      }
  //    });
  //  }
  //});
  
  /**
   * Delete a generated marker when the user double-clicks on it
   * Or change the image if the user right-clicks on it
   */
  markersPlugin.on('select-marker', function(e, marker, data) {
      console.log(marker)
      if(marker.data=='href'){
      location.href = "https://"+marker.id+".com"
    console.log(marker.id)}
  });
}