var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PLANCHAS_DISPONIBLES_MEDIAFIRE__WGS84_1 = new ol.format.GeoJSON();
var features_PLANCHAS_DISPONIBLES_MEDIAFIRE__WGS84_1 = format_PLANCHAS_DISPONIBLES_MEDIAFIRE__WGS84_1.readFeatures(json_PLANCHAS_DISPONIBLES_MEDIAFIRE__WGS84_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLANCHAS_DISPONIBLES_MEDIAFIRE__WGS84_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLANCHAS_DISPONIBLES_MEDIAFIRE__WGS84_1.addFeatures(features_PLANCHAS_DISPONIBLES_MEDIAFIRE__WGS84_1);
var lyr_PLANCHAS_DISPONIBLES_MEDIAFIRE__WGS84_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PLANCHAS_DISPONIBLES_MEDIAFIRE__WGS84_1, 
                style: style_PLANCHAS_DISPONIBLES_MEDIAFIRE__WGS84_1,
                interactive: true,
                title: '<img src="styles/legend/PLANCHAS_DISPONIBLES_MEDIAFIRE__WGS84_1.png" /> PLANCHAS_DISPONIBLES_MEDIAFIRE__WGS84'
            });

lyr_OSMStandard_0.setVisible(true);lyr_PLANCHAS_DISPONIBLES_MEDIAFIRE__WGS84_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PLANCHAS_DISPONIBLES_MEDIAFIRE__WGS84_1];
lyr_PLANCHAS_DISPONIBLES_MEDIAFIRE__WGS84_1.set('fieldAliases', {'Planchas': 'Planchas', 'ENLACE': 'ENLACE', });
lyr_PLANCHAS_DISPONIBLES_MEDIAFIRE__WGS84_1.set('fieldImages', {'Planchas': 'TextEdit', 'ENLACE': 'TextEdit', });
lyr_PLANCHAS_DISPONIBLES_MEDIAFIRE__WGS84_1.set('fieldLabels', {'Planchas': 'no label', 'ENLACE': 'no label', });
lyr_PLANCHAS_DISPONIBLES_MEDIAFIRE__WGS84_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});