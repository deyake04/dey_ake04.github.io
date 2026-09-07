var wms_layers = [];


        var lyr_SERVICIOESRI_0 = new ol.layer.Tile({
            'title': 'SERVICIO ESRI',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_PoblacinDesocupada_1 = new ol.format.GeoJSON();
var features_PoblacinDesocupada_1 = format_PoblacinDesocupada_1.readFeatures(json_PoblacinDesocupada_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinDesocupada_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinDesocupada_1.addFeatures(features_PoblacinDesocupada_1);
var lyr_PoblacinDesocupada_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoblacinDesocupada_1, 
                style: style_PoblacinDesocupada_1,
                popuplayertitle: 'Población Desocupada',
                interactive: true,
    title: 'Población Desocupada<br />\
    <img src="styles/legend/PoblacinDesocupada_1_0.png" /> 0.168 - 1.109<br />\
    <img src="styles/legend/PoblacinDesocupada_1_1.png" /> 1.109 - 1.259<br />\
    <img src="styles/legend/PoblacinDesocupada_1_2.png" /> 1.259 - 1.386<br />\
    <img src="styles/legend/PoblacinDesocupada_1_3.png" /> 1.386 - 1.484<br />\
    <img src="styles/legend/PoblacinDesocupada_1_4.png" /> 1.484 - 1.684<br />\
    <img src="styles/legend/PoblacinDesocupada_1_5.png" /> 1.684 - 5.532<br />' });

lyr_SERVICIOESRI_0.setVisible(true);lyr_PoblacinDesocupada_1.setVisible(true);
var layersList = [lyr_SERVICIOESRI_0,lyr_PoblacinDesocupada_1];
lyr_PoblacinDesocupada_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'Clave Municipio', 'NOMGEO': 'Municipio', 'area': 'area', 'PO': 'PO', 'PDES': 'Pob. Des. (%)', });
lyr_PoblacinDesocupada_1.set('fieldImages', {'CVEGEO': 'Hidden', 'CVE_ENT': 'Hidden', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'area': 'Hidden', 'PO': 'Hidden', 'PDES': 'TextEdit', });
lyr_PoblacinDesocupada_1.set('fieldLabels', {'CVE_MUN': 'header label - visible with data', 'NOMGEO': 'header label - visible with data', 'PDES': 'header label - visible with data', });
lyr_PoblacinDesocupada_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});