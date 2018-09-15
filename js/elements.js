var elements = {
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
    
}