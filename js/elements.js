var elements = {
    'containers':{
        'displayName':'Kontenery',
        'items': [
            {
                'displayName':'Kontener',
                'icon': '<i class="far fa-square"></i>',
                'name':'container',
                'source':'<div draggable="true" class="container cont-black draggable" data-allowedOptions="[3,13,15,23,24,25,19,20]" data-forbiddenElements=""></div>',
                'allowedOptions' : []
            },
            {
                'displayName':'Elastyczny Kontener',
                'icon': '<i class="far fa-square"></i>',
                'name':'container-fluid',
                'source':'<div draggable="true" class="container-fluid draggable" data-allowedOptions="[3,13,15,23,24,25,19,20]" data-forbiddenElements=""></div>',
                'allowedOptions' : []
            },
            // {
            //     'displayName':'Row Grid',
            //     'icon':'<i class="fas fa-th"></i>',
            //     'name':'row-grid',
            //     'source':'<div draggable="true" class="row draggable" data-allowedOptions="[3]"><div class="moveable col-xs-4 col-sm-4 col-md-4 col-lg-4">col-4</div><div class="moveable col-xs-4 col-sm-4 col-md-4 col-lg-4">col-4</div><div class="moveable col-xs-4 col-sm-4 col-md-4 col-lg-4">col-4</div></div>',
            //     'allowedOptions' : []
            // },
            {
                'displayName':'Wiersz',
                'icon':'<i class="fas fa-th"></i>',
                'name':'row',
                'source':'<div draggable="true" class="row draggable" data-allowedOptions="[3,13]" data-forbiddenElements=""></div>',
                'allowedOptions' : []
            },
            {
                'displayName':'Kolumna',
                'icon':'<i class="fas fa-th"></i>',
                'name':'Column',
                'source':'<div draggable="true" class="col-sm-3 draggable" data-allowedOptions="[3,13,18,15,23,24,25,19,20]" data-forbiddenElements=""></div>',
                'allowedOptions': []
            }

        ]
    },
    'headers':{
        'displayName':'Nagłówki',
        'items': [
            {
                'displayName':'Nagłówek 1',
                'icon': '<i class="fas fa-heading"></i>',
                'name':'h1',
                'source':'<h1 draggable="true" class="draggable" data-allowedOptions="[1,2,3,4,5,8,9]" data-forbiddenElements="">Nagłówek 1</h1>',
                'allowedOptions' : [1,2,3,4,5,8,9]
            },
            {
                'displayName':'Nagłówek 2',
                'icon': '<i class="fas fa-heading"></i>',
                'name':'h2',
                'source':'<h2 draggable="true" class="draggable" data-allowedOptions="[1,2]" data-forbiddenElements="">Nagłówek 2</h2>',
                'allowedOptions' : [1,2,3,4,5,8,9]
            },
            {
                'displayName':'Nagłówek 3',
                'icon': '<i class="fas fa-heading"></i>',
                'name':'h3',
                'source':'<h3 draggable="true" class="draggable" data-allowedOptions="[1]" data-forbiddenElements="">Nagłówek 3</h3>',
                'allowedOptions' : [1,2,3,4,5,8,9]
            },
        ]
    },
    'typography' : {
        'displayName':'Typografia',
        'items': [
            {
                'displayName' : 'Paragraf',
                'icon':'<i class="fas fa-paragraph"></i>',
                'name':'p',
                'source':'<p draggable="true" class="draggable" data-allowedOptions="[1,2,3,4]" data-forbiddenElements="">Lorem ipsum, Lorem ipsum, Lorem ipsum,</p>',
                'allowedOptions': []
            },
            {
                'displayName' : 'Zwykły tekst',
                'icon':'<i class="fas fa-font"></i>',
                'name':'span',
                'source':'<span draggable="true" class="draggable" data-allowedOptions="[1,2,3,4]" data-forbiddenElements="">Lorem ipsum, Lorem ipsum, Lorem ipsum,</span>',
                'allowedOptions': []
            }
        ]
    },
    'anchor' : {
        'displayName':'Hiperłącza',
        'items': [
            {
                'displayName' : 'Hiperłącze',
                'icon':'<i class="fas fa-link"></i>',
                'name':'h',
                'source':'<a href="" draggable="true" class="draggable" data-allowedOptions="[1,2,3,4,18,21]" data-forbiddenElements="">Lorem ipsum, Lorem ipsum, Lorem ipsum,</a>',
                'allowedOptions': []
            }
        ]
    },
    'lists' : {
        'displayName' : 'Listy',
        'items' : [
            {
                'displayName' : 'Lista uporządkowana',
                'icon': '<i class="fas fa-list-ol"></i>',
                'name':'ol',
                'source': '<ol draggable="true" class="draggable" data-allowedOptions="[1,2,3,4,5,6,7,8]" data-forbiddenElements=""></ol>',
                'allowedOptions':[]
            },
            {
                'displayName' : 'Lista nie uporządkowana',
                'icon': '<i class="fas fa-list-ul"></i>',
                'name':'ul',
                'source': '<ul draggable="true" class="draggable" data-allowedOptions="[1,2,3,4,5,6,7,8]" data-forbiddenElements=""></ul>',
                'allowedOptions':[]
            },
            {
                'displayName' : 'Element listy',
                'icon': '<i class="fas fa-list"></i>',
                'name':'li',
                'source': '<li draggable="true" class="draggable" data-allowedOptions="[1,2,3,4,5,6,7,8,9,10,11,12]" data-forbiddenElements=""></li>',
                'allowedOptions':[]
            }
        ]
    },
    'images':{
        'displayName' : 'Obrazki',
        'items' : [
            {
                'displayName' : 'Obrazek',
                'icon' : '<i class="far fa-images"></i>',
                'name' : 'img',
                'source' : '<img draggable="true" class="draggable" data-allowedOptions="[19,20,22]" data-forbiddenElements="" src="https://via.placeholder.com/150">',
                'allowedOptions':[]
            }
        ]
    },
    'tables': {
        'displayName' : 'Tabele',
        'items' : [
            {
                'displayName': 'Tabela',
                'icon': '',
                'name': 'table',
                'source': '<table draggable="true" class="draggable" data-allowedOptions="[]" data-forbiddenElements=""></table>'
            },
            {
                'displayName': 'Wiersz tabeli',
                'icon': '',
                'name': 'tr',
                'source': '<tr draggable="true" class="draggable" data-allowedOptions="[]" data-forbiddenElements=""></tr>'
            },
            {
                'displayName': 'Komórka tabeli',
                'icon': '',
                'name': 'td',
                'source': '<td draggable="true" class="draggable" data-allowedoptions="[]" data-forbiddenElements="tr"></td>'
            }
        ]
    }

}