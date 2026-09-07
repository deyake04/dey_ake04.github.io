var wms_layers = [];


        var lyr_Googlemaps_0 = new ol.layer.Tile({
            'title': 'Google maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_MunicipiosYucatn_1 = new ol.format.GeoJSON();
var features_MunicipiosYucatn_1 = format_MunicipiosYucatn_1.readFeatures(json_MunicipiosYucatn_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosYucatn_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiosYucatn_1.addFeatures(features_MunicipiosYucatn_1);
var lyr_MunicipiosYucatn_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipiosYucatn_1, 
                style: style_MunicipiosYucatn_1,
                popuplayertitle: 'Municipios Yucatán',
                interactive: true,
    title: 'Municipios Yucatán<br />\
    <img src="styles/legend/MunicipiosYucatn_1_0.png" /> 0.643 - 0.895<br />\
    <img src="styles/legend/MunicipiosYucatn_1_1.png" /> 0.589 - 0.643<br />\
    <img src="styles/legend/MunicipiosYucatn_1_2.png" /> 0.553 - 0.589<br />\
    <img src="styles/legend/MunicipiosYucatn_1_3.png" /> 0.503 - 0.553<br />\
    <img src="styles/legend/MunicipiosYucatn_1_4.png" /> 0.364 - 0.503<br />' });

lyr_Googlemaps_0.setVisible(true);lyr_MunicipiosYucatn_1.setVisible(true);
var layersList = [lyr_Googlemaps_0,lyr_MunicipiosYucatn_1];
lyr_MunicipiosYucatn_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'area': 'area', 'inp': 'inp', 'cvegeo': 'cvegeo', });
lyr_MunicipiosYucatn_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'area': 'TextEdit', 'inp': 'TextEdit', 'cvegeo': 'TextEdit', });
lyr_MunicipiosYucatn_1.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'area': 'no label', 'inp': 'no label', 'cvegeo': 'no label', });
lyr_MunicipiosYucatn_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});