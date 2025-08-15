var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    style: 'mapbox://styles/dogatmn/cm4v9fem6000p01sf12f769y5',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Kuruçeşme Kömür Deposu / Kuruçeşme Coal Depot',
    subtitle: '',
    byline: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    footer: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    chapters: [
        {
            id: 'First',
            alignment: 'centered',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [29.037, 41.061],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/d43wgyMx/MEF-AAP-027-BAP-2025-06-29-14-56-21.png',
            description: ' ',
            location: {
                center: [29.037, 41.061],
                zoom: 14,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third',
            alignment: 'left',
            hidden:true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [29.037, 41.061],
                zoom: 17,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',  
            description: '',
            location: {
                center: [29.037, 41.061],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'five',
            alignment: 'left',
            hidden:false,
            title: '',
            image: 'https://i.ibb.co/VYKD3TWz/MEF-AAP-027-BAP-2025-06-29-14-57-38.png', 
            description: '',
            location: {
                center: [29.021, 41.040],
                zoom: 16,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'six',
            alignment: 'right',
            hidden: true,
            title: '',
            image: '', 
            description: '',
            location: {
                center: [28.997, 41.002],
                zoom: 16,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seven',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/whBtGCts/MEF-AAP-027-BAP-2025-06-29-14-58-26.png', 
            description: '',
            location: {
                center: [28.643, 40.813],
                zoom: 16,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eight',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '', 
            description: '',
            location: {
                center: [27.710, 40.647],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
