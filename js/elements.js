var elements = {
    'containers':{
        'displayName':'Kontenery',
        'items': {

                'container': new draggElement({
                    displayName: 'Container',
                    icon: '<i class="far fa-square"></i>',
                    name: 'container',
                    source: '<div draggable="true" class="container cont-black moveable">Container</div>',
                }),


                'container-fluid': new draggElement({
                    displayName: 'Container Fluid',
                    icon: '<i class="far fa-square"></i>',
                    name: 'container-fluid',
                    source: '<div draggable="true" class="container-fluid moveable">Container-Fluid</div>',
                }),


                'row-grid': new draggElement({
                    displayName: 'Row Grid',
                    icon: '<i class="far fa-square"></i>',
                    name: 'row-grid',
                    source: '<div draggable="true" class="row moveable" data-allowedOptions="[]"><div class="moveable col-xs-4 col-sm-4 col-md-4 col-lg-4">col-4</div><div class="moveable col-xs-4 col-sm-4 col-md-4 col-lg-4">col-4</div><div class="moveable col-xs-4 col-sm-4 col-md-4 col-lg-4">col-4</div></div>',
                }),


                'row': new draggElement({
                    displayName: 'Row',
                    icon: '<i class="far fa-square"></i>',
                    name: 'row',
                    source: '<div draggable="true" class="row moveable" data-allowedOptions="[]"></div>',
                }),


                'column': new draggElement({
                    displayName: 'Column',
                    icon: '<i class="far fa-square"></i>',
                    name: 'column',
                    source: '<div draggable="true" class="col-sm-3 moveable">col-3</div>',
                })


        }
    },
    'headers':{
        'displayName':'Nagłówski',
        'items': {

            'h1': new draggElement({
                displayName: 'H1',
                icon: '<i class="far fa-square"></i>',
                name: 'h1',
                source: '<h1 draggable="true" class="moveable">Nagłówek 1</h1>',
                allowedOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9]
            }),


            'h2': new draggElement({
                displayName: 'H2',
                icon: '<i class="far fa-square"></i>',
                name: 'h2',
                source: '<h2 draggable="true" class="moveable">Nagłówek 1</h2>',
                allowedOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9]
            }),


            'h3': new draggElement({
                displayName: 'H3',
                icon: '<i class="far fa-square"></i>',
                name: 'h3',
                source: '<h3 draggable="true" class="moveable">Nagłówek 1</h3>',
                allowedOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9]
            })

        }
    }

}
/*var elements = {
    'containers':{
        'displayName':'Kontenery',
        'items': [
            {
                'displayName':'Container',
                'icon': '<i class="far fa-square"></i>',
                'name':'container',
                'source':'<div draggable="true" class="container cont-black moveable" data-allowedOptions="[]">Container</div>',
                'allowedOptions' : []
            },
            {
                'displayName':'Container Fluid',
                'icon': '<i class="far fa-square"></i>',
                'name':'container-fluid',
                'source':'<div draggable="true" class="container-fluid moveable" data-allowedOptions="[]">Container-Fluid</div>',
                'allowedOptions' : []
            },
            {
                'displayName':'Row Grid',
                'icon':'<i class="fas fa-th"></i>',
                'name':'row-grid',
                'source':'<div draggable="true" class="row moveable" data-allowedOptions="[]"><div class="moveable col-xs-4 col-sm-4 col-md-4 col-lg-4">col-4</div><div class="moveable col-xs-4 col-sm-4 col-md-4 col-lg-4">col-4</div><div class="moveable col-xs-4 col-sm-4 col-md-4 col-lg-4">col-4</div></div>',
                'allowedOptions' : []
            },
            {
                'displayName':'Row',
                'icon':'<i class="fas fa-th"></i>',
                'name':'row',
                'source':'<div draggable="true" class="row moveable" data-allowedOptions="[]"></div>',
                'allowedOptions' : []
            },
            {
                'displayName':'Column',
                'icon':'<i class="fas fa-th"></i>',
                'name':'Column',
                'source':'<div draggable="true" class="col-sm-3 moveable" data-allowedOptions="[]">col-3</div>',
                'allowedOptions': []
            }

        ]
    },
    'headers':{
        'displayName':'Nagłówski',
        'items': [
            {
                'displayName':'H1',
                'icon': '<i class="fas fa-heading"></i>',
                'name':'h1',
                'source':'<h1 draggable="true" class="moveable" data-allowedOptions="[1,2,3,4,5,8,9]">Nagłówek 1</h1>',
                'allowedOptions' : [1,2,3,4,5,8,9]
            },
            {
                'displayName':'H2',
                'icon': '<i class="fas fa-heading"></i>',
                'name':'h2',
                'source':'<h2 draggable="true" class="moveable" data-allowedOptions="[1,2]">Nagłówek 2</h2>',
                'allowedOptions' : [1,2,3,4,5,8,9]
            },
            {
                'displayName':'H3',
                'icon': '<i class="fas fa-heading"></i>',
                'name':'h3',
                'source':'<h3 draggable="true" class="moveable" data-allowedOptions="[1]">Nagłówek 3</h3>',
                'allowedOptions' : [1,2,3,4,5,8,9]
            },
        ]
    }
    
}*/