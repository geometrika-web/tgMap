import View from './View.js';

class mapMarkersView extends View {
    _parentElement = document.getElementById('btn-business');
    _errorMessage = 'Nema definiranih događaja!';
    _message;
    _vectorSource = new ol.source.Vector({});
    _vectorLayer = new ol.layer.Vector({
        source: this._vectorSource,
        style: this._getFeatureStyle
    });
    _select;
    _counter = 1;

    clearLayerSource() {
        this._vectorSource.clear();
    }

    getLayerFeatures() {
        return this._vectorSource.getFeatures();
    }

    // TODO: Napraviti parent klasu Map koja će sadržavati vectorLayer i vectorSource... a posebne children klase za addLayer (onload) i prikaz markera (onhashchange)

    addLayer() {
        map.addLayer(this._vectorLayer);
    }

    updateLayerSource(data) {
        this._features = data.map((el) => {
            const feature = new ol.Feature({
                id: el.id,
                geometry: new ol.geom.Point(ol.proj.fromLonLat(el.coordinates)),
                hash: `events/${el.slug}`,
                img: el.imageCover,
                onload: () => {
                    this._vectorLayer.changed();
                }
            });
            feature.setId(el.id);
            this._vectorSource.addFeature(feature);
        });
    }

    _getFeatureStyle(feature, resolution, sel, color) {
        return new ol.style.Style({
            zIndex: sel ? 10000000000000000000000 : 0,
            image: new ol.style.Photo({
                src: feature.get('img'),
                radius: sel ? 60 : 60,
                crop: true,
                kind: sel ? 'square' : 'circle',
                shadow: 25,
                onload: feature.get('onload'),
                stroke: new ol.style.Stroke({
                    width: 2,
                    color: '#fff'
                })
            })
        });
    }

    _getFeatureStyleOnListSelect(feature, i) {
        return new ol.style.Style({
            zIndex: i,
            image: new ol.style.Photo({
                src: feature.get('img'),
                radius: 60,
                crop: true,
                kind: 'circle',
                shadow: 25,
                onload: feature.get('onload'),
                stroke: new ol.style.Stroke({
                    width: 2,
                    color: '#fff'
                })
            })
        });
    }

    changeZIndexOnSelect(id) {
        const feature = this._vectorSource.getFeatureById(id);
        this._counter += 1;
        feature.setStyle(
            this._getFeatureStyleOnListSelect(feature, this._counter)
        );
    }

    addMapSelect() {
        this._select = new ol.interaction.Select({
            layers: [this._vectorLayer],
            condition: ol.events.condition.click,
            style: (feature, resolution) => {
                return this._getFeatureStyle(feature, resolution, true, '#fff');
            }
        });
        map.addInteraction(this._select);

        this._select.getFeatures().on(['add', 'remove'], function (e) {
            if (e.type == 'add') {
                window.location.hash = e.element.get('hash');
            } else {
                // * If samo dok ne prebacim ostale kategorije na API
                if (window.location.hash.split('/')[0] === '#events') {
                    window.location.hash = e.element.get('hash').split('/')[0];
                }
            }
        });
    }

    deselectMapFeatures() {
        this._select.getFeatures().clear();
    }

    zoomTo(coordinates) {
        view.animate({
            center: ol.proj.fromLonLat(coordinates),
            duration: 1000,
            zoom: 15
        });
    }

    addHandlerRender(handler) {
        ['hashchange'].forEach((el) => {
            window.addEventListener(el, handler);
        });
        // this._parentElement.addEventListener('click', handler);
    }

    addHandlerOnload(handler) {
        ['load'].forEach((el) => {
            window.addEventListener(el, handler);
        });
        // this._parentElement.addEventListener('click', handler);
    }
}

export default new mapMarkersView();
