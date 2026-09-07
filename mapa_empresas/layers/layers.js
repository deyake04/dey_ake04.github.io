var wms_layers = [];

var format_Municipios_Yucatan_0 = new ol.format.GeoJSON();
var features_Municipios_Yucatan_0 = format_Municipios_Yucatan_0.readFeatures(json_Municipios_Yucatan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_Yucatan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_Yucatan_0.addFeatures(features_Municipios_Yucatan_0);
var lyr_Municipios_Yucatan_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_Yucatan_0, 
                style: style_Municipios_Yucatan_0,
                popuplayertitle: 'Municipios_Yucatan',
                interactive: true,
                title: '<img src="styles/legend/Municipios_Yucatan_0.png" /> Municipios_Yucatan'
            });

        var lyr_GOOGLE_1 = new ol.layer.Tile({
            'title': 'GOOGLE',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_Centroides_2 = new ol.format.GeoJSON();
var features_Centroides_2 = format_Centroides_2.readFeatures(json_Centroides_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centroides_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centroides_2.addFeatures(features_Centroides_2);
var lyr_Centroides_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centroides_2, 
                style: style_Centroides_2,
                popuplayertitle: 'Centroides',
                interactive: true,
                title: '<img src="styles/legend/Centroides_2.png" /> Centroides'
            });
var format_puertos_peninsula_3 = new ol.format.GeoJSON();
var features_puertos_peninsula_3 = format_puertos_peninsula_3.readFeatures(json_puertos_peninsula_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puertos_peninsula_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puertos_peninsula_3.addFeatures(features_puertos_peninsula_3);
var lyr_puertos_peninsula_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puertos_peninsula_3, 
                style: style_puertos_peninsula_3,
                popuplayertitle: 'puertos_peninsula',
                interactive: true,
                title: '<img src="styles/legend/puertos_peninsula_3.png" /> puertos_peninsula'
            });
var format_ReginIPoniente_4 = new ol.format.GeoJSON();
var features_ReginIPoniente_4 = format_ReginIPoniente_4.readFeatures(json_ReginIPoniente_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginIPoniente_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginIPoniente_4.addFeatures(features_ReginIPoniente_4);
var lyr_ReginIPoniente_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginIPoniente_4, 
                style: style_ReginIPoniente_4,
                popuplayertitle: 'Región I Poniente',
                interactive: true,
                title: '<img src="styles/legend/ReginIPoniente_4.png" /> Región I Poniente'
            });
var format_ReginIINoroeste_5 = new ol.format.GeoJSON();
var features_ReginIINoroeste_5 = format_ReginIINoroeste_5.readFeatures(json_ReginIINoroeste_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginIINoroeste_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginIINoroeste_5.addFeatures(features_ReginIINoroeste_5);
var lyr_ReginIINoroeste_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginIINoroeste_5, 
                style: style_ReginIINoroeste_5,
                popuplayertitle: 'Región II Noroeste',
                interactive: true,
                title: '<img src="styles/legend/ReginIINoroeste_5.png" /> Región II Noroeste'
            });
var format_ReginIIICentro_6 = new ol.format.GeoJSON();
var features_ReginIIICentro_6 = format_ReginIIICentro_6.readFeatures(json_ReginIIICentro_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginIIICentro_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginIIICentro_6.addFeatures(features_ReginIIICentro_6);
var lyr_ReginIIICentro_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginIIICentro_6, 
                style: style_ReginIIICentro_6,
                popuplayertitle: 'Región III Centro',
                interactive: true,
                title: '<img src="styles/legend/ReginIIICentro_6.png" /> Región III Centro'
            });
var format_ReginIVLitoralCentro_7 = new ol.format.GeoJSON();
var features_ReginIVLitoralCentro_7 = format_ReginIVLitoralCentro_7.readFeatures(json_ReginIVLitoralCentro_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginIVLitoralCentro_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginIVLitoralCentro_7.addFeatures(features_ReginIVLitoralCentro_7);
var lyr_ReginIVLitoralCentro_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginIVLitoralCentro_7, 
                style: style_ReginIVLitoralCentro_7,
                popuplayertitle: 'Región IV Litoral Centro',
                interactive: true,
                title: '<img src="styles/legend/ReginIVLitoralCentro_7.png" /> Región IV Litoral Centro'
            });
var format_ReginVNoreste_8 = new ol.format.GeoJSON();
var features_ReginVNoreste_8 = format_ReginVNoreste_8.readFeatures(json_ReginVNoreste_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginVNoreste_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginVNoreste_8.addFeatures(features_ReginVNoreste_8);
var lyr_ReginVNoreste_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginVNoreste_8, 
                style: style_ReginVNoreste_8,
                popuplayertitle: 'Región V Noreste',
                interactive: true,
                title: '<img src="styles/legend/ReginVNoreste_8.png" /> Región V Noreste'
            });
var format_ReginVIOriente_9 = new ol.format.GeoJSON();
var features_ReginVIOriente_9 = format_ReginVIOriente_9.readFeatures(json_ReginVIOriente_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginVIOriente_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginVIOriente_9.addFeatures(features_ReginVIOriente_9);
var lyr_ReginVIOriente_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginVIOriente_9, 
                style: style_ReginVIOriente_9,
                popuplayertitle: 'Región VI Oriente',
                interactive: true,
                title: '<img src="styles/legend/ReginVIOriente_9.png" /> Región VI Oriente'
            });
var format_ReginVIISur_10 = new ol.format.GeoJSON();
var features_ReginVIISur_10 = format_ReginVIISur_10.readFeatures(json_ReginVIISur_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginVIISur_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginVIISur_10.addFeatures(features_ReginVIISur_10);
var lyr_ReginVIISur_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginVIISur_10, 
                style: style_ReginVIISur_10,
                popuplayertitle: 'Región VII Sur',
                interactive: true,
                title: '<img src="styles/legend/ReginVIISur_10.png" /> Región VII Sur'
            });
var format_TrenMaya_11 = new ol.format.GeoJSON();
var features_TrenMaya_11 = format_TrenMaya_11.readFeatures(json_TrenMaya_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrenMaya_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrenMaya_11.addFeatures(features_TrenMaya_11);
var lyr_TrenMaya_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrenMaya_11, 
                style: style_TrenMaya_11,
                popuplayertitle: 'Tren Maya',
                interactive: true,
                title: '<img src="styles/legend/TrenMaya_11.png" /> Tren Maya'
            });
var format_Denue_Empresas_Grandes_12 = new ol.format.GeoJSON();
var features_Denue_Empresas_Grandes_12 = format_Denue_Empresas_Grandes_12.readFeatures(json_Denue_Empresas_Grandes_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Denue_Empresas_Grandes_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Denue_Empresas_Grandes_12.addFeatures(features_Denue_Empresas_Grandes_12);
cluster_Denue_Empresas_Grandes_12 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Denue_Empresas_Grandes_12
});
var lyr_Denue_Empresas_Grandes_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Denue_Empresas_Grandes_12, 
                style: style_Denue_Empresas_Grandes_12,
                popuplayertitle: 'Denue_Empresas_Grandes',
                interactive: true,
    title: 'Denue_Empresas_Grandes<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_12_0.png" /> 11<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_12_1.png" /> 22<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_12_2.png" /> 23<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_12_3.png" /> 31<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_12_4.png" /> 32<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_12_5.png" /> 33<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_12_6.png" /> 43<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_12_7.png" /> 46<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_12_8.png" /> 48<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_12_9.png" /> 49<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_12_10.png" /> 51<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_12_11.png" /> 52<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_12_12.png" /> 53<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_12_13.png" /> 54<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_12_14.png" /> 56<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_12_15.png" /> 61<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_12_16.png" /> 62<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_12_17.png" /> 71<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_12_18.png" /> 72<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_12_19.png" /> 81<br />\
    <img src="styles/legend/Denue_Empresas_Grandes_12_20.png" /> 93<br />' });

lyr_Municipios_Yucatan_0.setVisible(true);lyr_GOOGLE_1.setVisible(true);lyr_Centroides_2.setVisible(true);lyr_puertos_peninsula_3.setVisible(true);lyr_ReginIPoniente_4.setVisible(true);lyr_ReginIINoroeste_5.setVisible(true);lyr_ReginIIICentro_6.setVisible(true);lyr_ReginIVLitoralCentro_7.setVisible(true);lyr_ReginVNoreste_8.setVisible(true);lyr_ReginVIOriente_9.setVisible(true);lyr_ReginVIISur_10.setVisible(true);lyr_TrenMaya_11.setVisible(true);lyr_Denue_Empresas_Grandes_12.setVisible(true);
var layersList = [lyr_Municipios_Yucatan_0,lyr_GOOGLE_1,lyr_Centroides_2,lyr_puertos_peninsula_3,lyr_ReginIPoniente_4,lyr_ReginIINoroeste_5,lyr_ReginIIICentro_6,lyr_ReginIVLitoralCentro_7,lyr_ReginVNoreste_8,lyr_ReginVIOriente_9,lyr_ReginVIISur_10,lyr_TrenMaya_11,lyr_Denue_Empresas_Grandes_12];
lyr_Municipios_Yucatan_0.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'area': 'area', });
lyr_Centroides_2.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'area': 'area', });
lyr_puertos_peninsula_3.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'NOMBRE', 'MUNICIPIO': 'MUNICIPIO', 'ESTADO': 'ESTADO', 'FASE': 'FASE', 'TIPO': 'TIPO', 'MOVIMIENTO': 'MOVIMIENTO', 'API': 'API', 'ADMINISTRA': 'ADMINISTRA', 'TIPO_INFRA': 'TIPO_INFRA', 'VOL_CARGA': 'VOL_CARGA', 'TIPO_CARGA': 'TIPO_CARGA', 'CRUCERO_1': 'CRUCERO_1', 'CATEGO': 'CATEGO', });
lyr_ReginIPoniente_4.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', });
lyr_ReginIINoroeste_5.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', });
lyr_ReginIIICentro_6.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', });
lyr_ReginIVLitoralCentro_7.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', });
lyr_ReginVNoreste_8.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', });
lyr_ReginVIOriente_9.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', });
lyr_ReginVIISur_10.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', });
lyr_TrenMaya_11.set('fieldAliases', {'Nombre': 'Nombre', 'Fase': 'Fase', 'Tipo': 'Tipo', 'Fecha': 'Fecha', 'Longitud': 'Longitud', 'DerechoVia': 'DerechoVia', 'Empresa': 'Empresa', 'Caracteris': 'Caracteris', 'Tramo': 'Tramo', 'long': 'long', });
lyr_Denue_Empresas_Grandes_12.set('fieldAliases', {'id': 'id', 'clee': 'clee', 'nom_estab': 'nom_estab', 'raz_social': 'raz_social', 'codigo_act': 'codigo_act', 'nombre_act': 'nombre_act', 'per_ocu': 'per_ocu', 'tipo_vial': 'tipo_vial', 'nom_vial': 'nom_vial', 'tipo_v_e_1': 'tipo_v_e_1', 'nom_v_e_1': 'nom_v_e_1', 'tipo_v_e_2': 'tipo_v_e_2', 'nom_v_e_2': 'nom_v_e_2', 'tipo_v_e_3': 'tipo_v_e_3', 'nom_v_e_3': 'nom_v_e_3', 'numero_ext': 'numero_ext', 'letra_ext': 'letra_ext', 'edificio': 'edificio', 'edificio_e': 'edificio_e', 'numero_int': 'numero_int', 'letra_int': 'letra_int', 'tipo_asent': 'tipo_asent', 'nomb_asent': 'nomb_asent', 'tipoCenCom': 'tipoCenCom', 'nom_CenCom': 'nom_CenCom', 'num_local': 'num_local', 'cod_postal': 'cod_postal', 'cve_ent': 'cve_ent', 'entidad': 'entidad', 'cve_mun': 'cve_mun', 'municipio': 'municipio', 'cve_loc': 'cve_loc', 'localidad': 'localidad', 'ageb': 'ageb', 'manzana': 'manzana', 'telefono': 'telefono', 'correoelec': 'correoelec', 'www': 'www', 'tipoUniEco': 'tipoUniEco', 'latitud': 'latitud', 'longitud': 'longitud', 'fecha_alta': 'fecha_alta', 'pyme': 'pyme', 'sector': 'sector', 'tipo': 'tipo', 'region': 'region', });
lyr_Municipios_Yucatan_0.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'area': 'TextEdit', });
lyr_Centroides_2.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'area': 'TextEdit', });
lyr_puertos_peninsula_3.set('fieldImages', {'ID': 'TextEdit', 'NOMBRE': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'ESTADO': 'TextEdit', 'FASE': 'TextEdit', 'TIPO': 'TextEdit', 'MOVIMIENTO': 'TextEdit', 'API': 'TextEdit', 'ADMINISTRA': 'TextEdit', 'TIPO_INFRA': 'TextEdit', 'VOL_CARGA': 'TextEdit', 'TIPO_CARGA': 'TextEdit', 'CRUCERO_1': 'TextEdit', 'CATEGO': 'TextEdit', });
lyr_ReginIPoniente_4.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_ReginIINoroeste_5.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_ReginIIICentro_6.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_ReginIVLitoralCentro_7.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_ReginVNoreste_8.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_ReginVIOriente_9.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_ReginVIISur_10.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_TrenMaya_11.set('fieldImages', {'Nombre': 'TextEdit', 'Fase': 'TextEdit', 'Tipo': 'TextEdit', 'Fecha': 'TextEdit', 'Longitud': 'TextEdit', 'DerechoVia': 'TextEdit', 'Empresa': 'TextEdit', 'Caracteris': 'TextEdit', 'Tramo': 'TextEdit', 'long': 'TextEdit', });
lyr_Denue_Empresas_Grandes_12.set('fieldImages', {'id': 'Range', 'clee': 'TextEdit', 'nom_estab': 'TextEdit', 'raz_social': 'TextEdit', 'codigo_act': 'Range', 'nombre_act': 'TextEdit', 'per_ocu': 'TextEdit', 'tipo_vial': 'TextEdit', 'nom_vial': 'TextEdit', 'tipo_v_e_1': 'TextEdit', 'nom_v_e_1': 'TextEdit', 'tipo_v_e_2': 'TextEdit', 'nom_v_e_2': 'TextEdit', 'tipo_v_e_3': 'TextEdit', 'nom_v_e_3': 'TextEdit', 'numero_ext': 'Range', 'letra_ext': 'TextEdit', 'edificio': 'TextEdit', 'edificio_e': 'Range', 'numero_int': 'Range', 'letra_int': 'TextEdit', 'tipo_asent': 'TextEdit', 'nomb_asent': 'TextEdit', 'tipoCenCom': 'TextEdit', 'nom_CenCom': 'TextEdit', 'num_local': 'TextEdit', 'cod_postal': 'Range', 'cve_ent': 'TextEdit', 'entidad': 'TextEdit', 'cve_mun': 'TextEdit', 'municipio': 'TextEdit', 'cve_loc': 'TextEdit', 'localidad': 'TextEdit', 'ageb': 'TextEdit', 'manzana': 'Range', 'telefono': 'TextEdit', 'correoelec': 'TextEdit', 'www': 'TextEdit', 'tipoUniEco': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'fecha_alta': 'TextEdit', 'pyme': 'Range', 'sector': 'Range', 'tipo': 'TextEdit', 'region': 'Range', });
lyr_Municipios_Yucatan_0.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'area': 'no label', });
lyr_Centroides_2.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'area': 'no label', });
lyr_puertos_peninsula_3.set('fieldLabels', {'ID': 'no label', 'NOMBRE': 'no label', 'MUNICIPIO': 'no label', 'ESTADO': 'no label', 'FASE': 'no label', 'TIPO': 'no label', 'MOVIMIENTO': 'no label', 'API': 'no label', 'ADMINISTRA': 'no label', 'TIPO_INFRA': 'no label', 'VOL_CARGA': 'no label', 'TIPO_CARGA': 'no label', 'CRUCERO_1': 'no label', 'CATEGO': 'no label', });
lyr_ReginIPoniente_4.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', });
lyr_ReginIINoroeste_5.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', });
lyr_ReginIIICentro_6.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', });
lyr_ReginIVLitoralCentro_7.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', });
lyr_ReginVNoreste_8.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', });
lyr_ReginVIOriente_9.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', });
lyr_ReginVIISur_10.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', });
lyr_TrenMaya_11.set('fieldLabels', {'Nombre': 'no label', 'Fase': 'no label', 'Tipo': 'no label', 'Fecha': 'no label', 'Longitud': 'no label', 'DerechoVia': 'no label', 'Empresa': 'no label', 'Caracteris': 'no label', 'Tramo': 'no label', 'long': 'no label', });
lyr_Denue_Empresas_Grandes_12.set('fieldLabels', {'id': 'no label', 'clee': 'no label', 'nom_estab': 'no label', 'raz_social': 'no label', 'codigo_act': 'no label', 'nombre_act': 'no label', 'per_ocu': 'no label', 'tipo_vial': 'no label', 'nom_vial': 'no label', 'tipo_v_e_1': 'no label', 'nom_v_e_1': 'no label', 'tipo_v_e_2': 'no label', 'nom_v_e_2': 'no label', 'tipo_v_e_3': 'no label', 'nom_v_e_3': 'no label', 'numero_ext': 'no label', 'letra_ext': 'no label', 'edificio': 'no label', 'edificio_e': 'no label', 'numero_int': 'no label', 'letra_int': 'no label', 'tipo_asent': 'no label', 'nomb_asent': 'no label', 'tipoCenCom': 'no label', 'nom_CenCom': 'no label', 'num_local': 'no label', 'cod_postal': 'no label', 'cve_ent': 'no label', 'entidad': 'no label', 'cve_mun': 'no label', 'municipio': 'no label', 'cve_loc': 'no label', 'localidad': 'no label', 'ageb': 'no label', 'manzana': 'no label', 'telefono': 'no label', 'correoelec': 'no label', 'www': 'no label', 'tipoUniEco': 'no label', 'latitud': 'no label', 'longitud': 'no label', 'fecha_alta': 'no label', 'pyme': 'no label', 'sector': 'no label', 'tipo': 'no label', 'region': 'no label', });
lyr_Denue_Empresas_Grandes_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});