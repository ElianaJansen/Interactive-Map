        //Cargamos mapa base es la clase principal de Leafleft. Indicamos las coordenadas iniciales y el nivel de zoom por defecto.
        let map = L.map('map', {
        center:[-34.6083, -58.3712],
        zoom: 15
        })
        //Aportado por el Instituto Geográfico Nacional
	    let ign = L.tileLayer('https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png', {
	        attribution: '<a href="http://leafletjs.com" title="A JS library for interactive maps"></a> <a href="http://www.ign.gob.ar/AreaServicios/Argenmap/IntroduccionV2" target="_blank">Instituto Geográfico Nacional</a> + <a href="http://www.osm.org/copyright" target="_blank">OpenStreetMap</a>',
            minZoom: 2,
            maxZoom: 18
        }).addTo(map);      
        
        //Aportado por Esri
	    let arcgis = L.tileLayer('https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png',
	    }).addTo(map);

         //Agregar un cuadro de busqueda al mapa

         var geocoder = L.Control.geocoder({
            position: 'topleft',
            query: 'Buenos Aires',
            placeholder: 'Buscar ...',
            geocoder: geocoder,
            defaultMarkGeocode: true
            })
            .addTo(map);

        //Agregamos la escala
        L.control.scale().addTo(map);


        //Creamos un control que agrega una pantalla dividida
        L.control.sideBySide(ign, arcgis).addTo(map);

       
        //Control de leyenda personalizado y título 
        let legend = L.control();

        legend.onAdd = function () {
            this._div = L.DomUtil.create('div','legend'); // crea un div con la clase "legend"
            this.update();
            return this._div;
        };
        
        
        legend.update = function () {
            this._div.innerHTML = '<h4> Territorio Argentino  </h4>' + '<h5> Comparando Capas Simultáneamente </h5>';
        };
        legend.addTo(map);


        
                 


        
