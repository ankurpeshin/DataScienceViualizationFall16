$(document).ready(function () {
  $('#map_Cancer_2010').usmap({
        'stateSpecificStyles': {
'UT': {fill: '#ffffff'},
'AK': {fill: '#ffffff'},
'TX': {fill: '#ffffff'},
'CO': {fill: '#e5e5ff'},
'AZ': {fill: '#e5e5ff'},
'CA': {fill: '#e5e5ff'},
'NV': {fill: '#ccccff'},
'NM': {fill: '#ccccff'},
'GA': {fill: '#ccccff'},
'VA': {fill: '#b2b2ff'},
'WY': {fill: '#b2b2ff'},
'ID': {fill: '#b2b2ff'},
'DC': {fill: '#9999ff'},
'HI': {fill: '#9999ff'},
'OK': {fill: '#9999ff'},
'MD': {fill: '#7f7fff'},
'NE': {fill: '#7f7fff'},
'IN': {fill: '#7f7fff'},
'SD': {fill: '#6666ff'},
'IL': {fill: '#6666ff'},
'MN': {fill: '#6666ff'},
'WA': {fill: '#4c4cff'},
'KS': {fill: '#4c4cff'},
'OR': {fill: '#4c4cff'},
'NC': {fill: '#3232ff'},
'AR': {fill: '#3232ff'},
'MO': {fill: '#3232ff'},
'MS': {fill: '#1919ff'},
'LA': {fill: '#1919ff'},
'AL': {fill: '#1919ff'},
'OH': {fill: '#0000ff'},
'SC': {fill: '#0000ff'},
'ND': {fill: '#0000ff'},
'TN': {fill: '#0000e5'},
'WI': {fill: '#0000e5'},
'MA': {fill: '#0000e5'},
'RI': {fill: '#0000cc'},
'NY': {fill: '#0000cc'},
'NJ': {fill: '#0000cc'},
'MI': {fill: '#0000b2'},
'MT': {fill: '#0000b2'},
'IA': {fill: '#0000b2'},
'FL': {fill: '#000099'},
'CT': {fill: '#000099'},
'VT': {fill: '#000099'},
'KY': {fill: '#00007f'},
'DE': {fill: '#00007f'},
'NH': {fill: '#00007f'},
'WV': {fill: '#00004c'},
'PA': {fill: '#00004c'},
'ME': {fill: '#00004c'}
 },
 'mouseoverState': {
         'HI': function (event, data) {
            }
        },

        'click': function (event, data) {
            $('#alert')
                    .text('Click ' + data.name + ' on map 1')
                    .stop()
                    .css('backgroundColor', '#ff0')
                    .animate({backgroundColor: '#ddd'}, 1000);
        }
    });    
/** **/
    $('#map_CO2_2010').usmap({
        'stateSpecificStyles': {
'VT': {fill: '#ffffff'},
'DC': {fill: '#ffffff'},
'ID': {fill: '#ffffff'},
'RI': {fill: '#e5e5ff'},
'SD': {fill: '#e5e5ff'},
'AK': {fill: '#e5e5ff'},
'DE': {fill: '#ccccff'},
'ME': {fill: '#ccccff'},
'NH': {fill: '#ccccff'},
'HI': {fill: '#b2b2ff'},
'CT': {fill: '#b2b2ff'},
'OR': {fill: '#b2b2ff'},
'WA': {fill: '#9999ff'},
'NV': {fill: '#9999ff'},
'NJ': {fill: '#9999ff'},
'MA': {fill: '#7f7fff'},
'MT': {fill: '#7f7fff'},
'NE': {fill: '#7f7fff'},
'MD': {fill: '#6666ff'},
'MS': {fill: '#6666ff'},
'NM': {fill: '#6666ff'},
'ND': {fill: '#4c4cff'},
'MN': {fill: '#4c4cff'},
'AR': {fill: '#4c4cff'},
'UT': {fill: '#3232ff'},
'KS': {fill: '#3232ff'},
'VA': {fill: '#3232ff'},
'CO': {fill: '#1919ff'},
'SC': {fill: '#1919ff'},
'NY': {fill: '#1919ff'},
'WY': {fill: '#0000ff'},
'IA': {fill: '#0000ff'},
'WI': {fill: '#0000ff'},
'TN': {fill: '#0000e5'},
'OK': {fill: '#0000e5'},
'CA': {fill: '#0000e5'},
'AZ': {fill: '#0000cc'},
'LA': {fill: '#0000cc'},
'NC': {fill: '#0000cc'},
'WV': {fill: '#0000b2'},
'MI': {fill: '#0000b2'},
'MO': {fill: '#0000b2'},
'AL': {fill: '#000099'},
'GA': {fill: '#000099'},
'KY': {fill: '#000099'},
'IL': {fill: '#00007f'},
'IN': {fill: '#00007f'},
'OH': {fill: '#00007f'},
'PA': {fill: '#00004c'},
'FL': {fill: '#00004c'},
'TX': {fill: '#00004c'}
 },
 'mouseoverState': {
         'HI': function (event, data) {
            }
        },

        'click': function (event, data) {
            $('#alert')
                    .text('Click ' + data.name + ' on map 1')
                    .stop()
                    .css('backgroundColor', '#ff0')
                    .animate({backgroundColor: '#ddd'}, 1000);
        }
    });
 /** **/
    $('#map_NO2_2010').usmap({
        'stateSpecificStyles': {
'DC': {fill: '#ffffff'},
'VT': {fill: '#ffffff'},
'RI': {fill: '#ffffff'},
'ID': {fill: '#e5e5ff'},
'DE': {fill: '#e5e5ff'},
'NH': {fill: '#e5e5ff'},
'CT': {fill: '#ccccff'},
'ME': {fill: '#ccccff'},
'SD': {fill: '#ccccff'},
'OR': {fill: '#b2b2ff'},
'NJ': {fill: '#b2b2ff'},
'NV': {fill: '#b2b2ff'},
'AK': {fill: '#9999ff'},
'MA': {fill: '#9999ff'},
'WA': {fill: '#9999ff'},
'HI': {fill: '#7f7fff'},
'MT': {fill: '#7f7fff'},
'MD': {fill: '#7f7fff'},
'SC': {fill: '#6666ff'},
'MS': {fill: '#6666ff'},
'TN': {fill: '#6666ff'},
'NE': {fill: '#4c4cff'},
'AR': {fill: '#4c4cff'},
'NY': {fill: '#4c4cff'},
'MN': {fill: '#3232ff'},
'KS': {fill: '#3232ff'},
'WI': {fill: '#3232ff'},
'VA': {fill: '#1919ff'},
'WV': {fill: '#1919ff'},
'IA': {fill: '#1919ff'},
'ND': {fill: '#0000ff'},
'CO': {fill: '#0000ff'},
'NM': {fill: '#0000ff'},
'MO': {fill: '#0000e5'},
'AZ': {fill: '#0000e5'},
'NC': {fill: '#0000e5'},
'WY': {fill: '#0000cc'},
'AL': {fill: '#0000cc'},
'UT': {fill: '#0000cc'},
'OK': {fill: '#0000b2'},
'LA': {fill: '#0000b2'},
'GA': {fill: '#0000b2'},
'CA': {fill: '#000099'},
'IL': {fill: '#000099'},
'KY': {fill: '#000099'},
'MI': {fill: '#00007f'},
'FL': {fill: '#00007f'},
'IN': {fill: '#00007f'},
'OH': {fill: '#00004c'},
'PA': {fill: '#00004c'},
'TX': {fill: '#00004c'}
 },
 'mouseoverState': {
         'HI': function (event, data) {
            }
        },

        'click': function (event, data) {
            $('#alert')
                    .text('Click ' + data.name + ' on map 1')
                    .stop()
                    .css('backgroundColor', '#ff0')
                    .animate({backgroundColor: '#ddd'}, 1000);
        }
    });   
     /** **/
    $('#map_SO2_2010').usmap({
        'stateSpecificStyles': {
'VT': {fill: '#ffffff'},
'RI': {fill: '#ffffff'},
'DC': {fill: '#ffffff'},
'CT': {fill: '#e5e5ff'},
'CA': {fill: '#e5e5ff'},
'AK': {fill: '#e5e5ff'},
'ID': {fill: '#ccccff'},
'NV': {fill: '#ccccff'},
'SD': {fill: '#ccccff'},
'ME': {fill: '#b2b2ff'},
'DE': {fill: '#b2b2ff'},
'NJ': {fill: '#b2b2ff'},
'WA': {fill: '#9999ff'},
'NM': {fill: '#9999ff'},
'OR': {fill: '#9999ff'},
'HI': {fill: '#7f7fff'},
'MT': {fill: '#7f7fff'},
'UT': {fill: '#7f7fff'},
'AZ': {fill: '#6666ff'},
'NH': {fill: '#6666ff'},
'MA': {fill: '#6666ff'},
'KS': {fill: '#4c4cff'},
'CO': {fill: '#4c4cff'},
'MD': {fill: '#4c4cff'},
'MN': {fill: '#3232ff'},
'MS': {fill: '#3232ff'},
'NY': {fill: '#3232ff'},
'NE': {fill: '#1919ff'},
'WY': {fill: '#1919ff'},
'AR': {fill: '#1919ff'},
'OK': {fill: '#0000ff'},
'WV': {fill: '#0000ff'},
'SC': {fill: '#0000ff'},
'IA': {fill: '#0000e5'},
'ND': {fill: '#0000e5'},
'VA': {fill: '#0000e5'},
'LA': {fill: '#0000cc'},
'NC': {fill: '#0000cc'},
'TN': {fill: '#0000cc'},
'WI': {fill: '#0000b2'},
'FL': {fill: '#0000b2'},
'AL': {fill: '#0000b2'},
'IL': {fill: '#000099'},
'MO': {fill: '#000099'},
'KY': {fill: '#000099'},
'MI': {fill: '#00007f'},
'GA': {fill: '#00007f'},
'IN': {fill: '#00007f'},
'PA': {fill: '#00004c'},
'TX': {fill: '#00004c'},
'OH': {fill: '#00004c'}
 },
 'mouseoverState': {
         'HI': function (event, data) {
            }
        },

        'click': function (event, data) {
            $('#alert')
                    .text('Click ' + data.name + ' on map 1')
                    .stop()
                    .css('backgroundColor', '#ff0')
                    .animate({backgroundColor: '#ddd'}, 1000);
        }
    });
  
   /** **/
   
 $('#map_Combined_2010').usmap({
        'stateSpecificStyles': {
'VT': {fill: '#ffffff'},
'DC': {fill: '#ffffff'},
'ID': {fill: '#ffffff'},
'RI': {fill: '#e5e5ff'},
'SD': {fill: '#e5e5ff'},
'AK': {fill: '#e5e5ff'},
'DE': {fill: '#ccccff'},
'ME': {fill: '#ccccff'},
'NH': {fill: '#ccccff'},
'HI': {fill: '#b2b2ff'},
'CT': {fill: '#b2b2ff'},
'OR': {fill: '#b2b2ff'},
'WA': {fill: '#9999ff'},
'NV': {fill: '#9999ff'},
'NJ': {fill: '#9999ff'},
'MA': {fill: '#7f7fff'},
'MT': {fill: '#7f7fff'},
'NE': {fill: '#7f7fff'},
'MD': {fill: '#6666ff'},
'MS': {fill: '#6666ff'},
'NM': {fill: '#6666ff'},
'ND': {fill: '#4c4cff'},
'MN': {fill: '#4c4cff'},
'AR': {fill: '#4c4cff'},
'UT': {fill: '#3232ff'},
'KS': {fill: '#3232ff'},
'VA': {fill: '#3232ff'},
'CO': {fill: '#1919ff'},
'SC': {fill: '#1919ff'},
'NY': {fill: '#1919ff'},
'WY': {fill: '#0000ff'},
'IA': {fill: '#0000ff'},
'WI': {fill: '#0000ff'},
'TN': {fill: '#0000e5'},
'OK': {fill: '#0000e5'},
'CA': {fill: '#0000e5'},
'AZ': {fill: '#0000cc'},
'LA': {fill: '#0000cc'},
'NC': {fill: '#0000cc'},
'WV': {fill: '#0000b2'},
'MI': {fill: '#0000b2'},
'MO': {fill: '#0000b2'},
'AL': {fill: '#000099'},
'GA': {fill: '#000099'},
'KY': {fill: '#000099'},
'IL': {fill: '#00007f'},
'IN': {fill: '#00007f'},
'OH': {fill: '#00007f'},
'PA': {fill: '#00004c'},
'FL': {fill: '#00004c'},
'TX': {fill: '#00004c'}
 },
 'mouseoverState': {
         'HI': function (event, data) {
            }
        },

        'click': function (event, data) {
            $('#alert')
                    .text('Click ' + data.name + ' on map 1')
                    .stop()
                    .css('backgroundColor', '#ff0')
                    .animate({backgroundColor: '#ddd'}, 1000);
        }
    });
    
    
 /**  Dont Touch   **/   
    $('#over-md').click(function (event) {
        $('#map').usmap('trigger', 'MD', 'mouseover', event);
    });

    $('#out-md').click(function (event) {
        $('#map').usmap('trigger', 'MD', 'mouseout', event);
    });
});



