$(document).ready(function () {
  $('#map_Cancer_2013').usmap({
        'stateSpecificStyles': {
'NV': {fill: '#ffffff'},
'UT': {fill: '#ffffff'},
'AK': {fill: '#ffffff'},
'TX': {fill: '#e5e5ff'},
'CO': {fill: '#e5e5ff'},
'NM': {fill: '#e5e5ff'},
'CA': {fill: '#ccccff'},
'DC': {fill: '#ccccff'},
'AZ': {fill: '#ccccff'},
'WY': {fill: '#b2b2ff'},
'ID': {fill: '#b2b2ff'},
'GA': {fill: '#b2b2ff'},
'VA': {fill: '#9999ff'},
'ND': {fill: '#9999ff'},
'NE': {fill: '#9999ff'},
'IN': {fill: '#7f7fff'},
'OK': {fill: '#7f7fff'},
'HI': {fill: '#7f7fff'},
'WA': {fill: '#6666ff'},
'MD': {fill: '#6666ff'},
'KS': {fill: '#6666ff'},
'IL': {fill: '#4c4cff'},
'NC': {fill: '#4c4cff'},
'MN': {fill: '#4c4cff'},
'MS': {fill: '#3232ff'},
'SC': {fill: '#3232ff'},
'OR': {fill: '#3232ff'},
'SD': {fill: '#1919ff'},
'LA': {fill: '#1919ff'},
'MO': {fill: '#1919ff'},
'AL': {fill: '#0000ff'},
'TN': {fill: '#0000ff'},
'MI': {fill: '#0000ff'},
'WI': {fill: '#0000e5'},
'AR': {fill: '#0000e5'},
'MA': {fill: '#0000e5'},
'OH': {fill: '#0000cc'},
'IA': {fill: '#0000cc'},
'FL': {fill: '#0000cc'},
'MT': {fill: '#0000b2'},
'NY': {fill: '#0000b2'},
'VT': {fill: '#0000b2'},
'NJ': {fill: '#000099'},
'CT': {fill: '#000099'},
'RI': {fill: '#000099'},
'KY': {fill: '#00007f'},
'NH': {fill: '#00007f'},
'PA': {fill: '#00007f'},
'WV': {fill: '#00004c'},
'DE': {fill: '#00004c'},
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
    $('#map_CO2_2013').usmap({
        'stateSpecificStyles': {
'VT': {fill: '#ffffff'},
'DC': {fill: '#ffffff'},
'ID': {fill: '#ffffff'},
'RI': {fill: '#e5e5ff'},
'SD': {fill: '#e5e5ff'},
'NH': {fill: '#e5e5ff'},
'ME': {fill: '#ccccff'},
'AK': {fill: '#ccccff'},
'DE': {fill: '#ccccff'},
'HI': {fill: '#b2b2ff'},
'CT': {fill: '#b2b2ff'},
'OR': {fill: '#b2b2ff'},
'WA': {fill: '#9999ff'},
'MA': {fill: '#9999ff'},
'NV': {fill: '#9999ff'},
'NJ': {fill: '#7f7fff'},
'MT': {fill: '#7f7fff'},
'MD': {fill: '#7f7fff'},
'MS': {fill: '#6666ff'},
'NE': {fill: '#6666ff'},
'NM': {fill: '#6666ff'},
'SC': {fill: '#4c4cff'},
'MN': {fill: '#4c4cff'},
'ND': {fill: '#4c4cff'},
'KS': {fill: '#3232ff'},
'NY': {fill: '#3232ff'},
'VA': {fill: '#3232ff'},
'UT': {fill: '#1919ff'},
'AR': {fill: '#1919ff'},
'TN': {fill: '#1919ff'},
'IA': {fill: '#0000ff'},
'CO': {fill: '#0000ff'},
'OK': {fill: '#0000ff'},
'WI': {fill: '#0000e5'},
'WY': {fill: '#0000e5'},
'AZ': {fill: '#0000e5'},
'GA': {fill: '#0000cc'},
'NC': {fill: '#0000cc'},
'CA': {fill: '#0000cc'},
'LA': {fill: '#0000b2'},
'AL': {fill: '#0000b2'},
'MI': {fill: '#0000b2'},
'WV': {fill: '#000099'},
'MO': {fill: '#000099'},
'KY': {fill: '#000099'},
'IL': {fill: '#00007f'},
'IN': {fill: '#00007f'},
'OH': {fill: '#00007f'},
'FL': {fill: '#00004c'},
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
    $('#map_NO2_2013').usmap({
        'stateSpecificStyles': {
'DC': {fill: '#ffffff'},
'VT': {fill: '#ffffff'},
'RI': {fill: '#ffffff'},
'DE': {fill: '#e5e5ff'},
'NH': {fill: '#e5e5ff'},
'ID': {fill: '#e5e5ff'},
'CT': {fill: '#ccccff'},
'ME': {fill: '#ccccff'},
'SD': {fill: '#ccccff'},
'OR': {fill: '#b2b2ff'},
'MA': {fill: '#b2b2ff'},
'NJ': {fill: '#b2b2ff'},
'NV': {fill: '#9999ff'},
'WA': {fill: '#9999ff'},
'AK': {fill: '#9999ff'},
'SC': {fill: '#7f7fff'},
'MT': {fill: '#7f7fff'},
'MD': {fill: '#7f7fff'},
'TN': {fill: '#6666ff'},
'MS': {fill: '#6666ff'},
'HI': {fill: '#6666ff'},
'KS': {fill: '#4c4cff'},
'NE': {fill: '#4c4cff'},
'MN': {fill: '#4c4cff'},
'VA': {fill: '#3232ff'},
'WI': {fill: '#3232ff'},
'IA': {fill: '#3232ff'},
'NY': {fill: '#1919ff'},
'AR': {fill: '#1919ff'},
'ND': {fill: '#1919ff'},
'CO': {fill: '#0000ff'},
'GA': {fill: '#0000ff'},
'WY': {fill: '#0000ff'},
'AL': {fill: '#0000e5'},
'OK': {fill: '#0000e5'},
'NM': {fill: '#0000e5'},
'AZ': {fill: '#0000cc'},
'WV': {fill: '#0000cc'},
'UT': {fill: '#0000cc'},
'NC': {fill: '#0000b2'},
'IL': {fill: '#0000b2'},
'MO': {fill: '#0000b2'},
'LA': {fill: '#000099'},
'MI': {fill: '#000099'},
'KY': {fill: '#000099'},
'FL': {fill: '#00007f'},
'CA': {fill: '#00007f'},
'OH': {fill: '#00007f'},
'IN': {fill: '#00004c'},
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
    $('#map_SO2_2013').usmap({
        'stateSpecificStyles': {
'DC': {fill: '#ffffff'},
'VT': {fill: '#ffffff'},
'RI': {fill: '#ffffff'},
'CA': {fill: '#e5e5ff'},
'DE': {fill: '#e5e5ff'},
'NJ': {fill: '#e5e5ff'},
'CT': {fill: '#ccccff'},
'NH': {fill: '#ccccff'},
'AK': {fill: '#ccccff'},
'ID': {fill: '#b2b2ff'},
'NV': {fill: '#b2b2ff'},
'MA': {fill: '#b2b2ff'},
'WA': {fill: '#9999ff'},
'ME': {fill: '#9999ff'},
'SD': {fill: '#9999ff'},
'MT': {fill: '#7f7fff'},
'OR': {fill: '#7f7fff'},
'NM': {fill: '#7f7fff'},
'HI': {fill: '#6666ff'},
'UT': {fill: '#6666ff'},
'AZ': {fill: '#6666ff'},
'KS': {fill: '#4c4cff'},
'NY': {fill: '#4c4cff'},
'MN': {fill: '#4c4cff'},
'CO': {fill: '#3232ff'},
'MD': {fill: '#3232ff'},
'SC': {fill: '#3232ff'},
'WY': {fill: '#1919ff'},
'ND': {fill: '#1919ff'},
'NE': {fill: '#1919ff'},
'VA': {fill: '#0000ff'},
'NC': {fill: '#0000ff'},
'OK': {fill: '#0000ff'},
'TN': {fill: '#0000e5'},
'MS': {fill: '#0000e5'},
'AR': {fill: '#0000e5'},
'WV': {fill: '#0000cc'},
'IA': {fill: '#0000cc'},
'WI': {fill: '#0000cc'},
'FL': {fill: '#0000b2'},
'LA': {fill: '#0000b2'},
'GA': {fill: '#0000b2'},
'AL': {fill: '#000099'},
'MO': {fill: '#000099'},
'KY': {fill: '#000099'},
'IL': {fill: '#00007f'},
'MI': {fill: '#00007f'},
'IN': {fill: '#00007f'},
'PA': {fill: '#00004c'},
'OH': {fill: '#00004c'},
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
   
 $('#map_Combined_2013').usmap({
        'stateSpecificStyles': {
'VT': {fill: '#ffffff'},
'DC': {fill: '#ffffff'},
'ID': {fill: '#ffffff'},
'RI': {fill: '#e5e5ff'},
'SD': {fill: '#e5e5ff'},
'NH': {fill: '#e5e5ff'},
'ME': {fill: '#ccccff'},
'AK': {fill: '#ccccff'},
'DE': {fill: '#ccccff'},
'HI': {fill: '#b2b2ff'},
'CT': {fill: '#b2b2ff'},
'OR': {fill: '#b2b2ff'},
'WA': {fill: '#9999ff'},
'MA': {fill: '#9999ff'},
'NV': {fill: '#9999ff'},
'NJ': {fill: '#7f7fff'},
'MT': {fill: '#7f7fff'},
'MD': {fill: '#7f7fff'},
'MS': {fill: '#6666ff'},
'NE': {fill: '#6666ff'},
'NM': {fill: '#6666ff'},
'SC': {fill: '#4c4cff'},
'MN': {fill: '#4c4cff'},
'ND': {fill: '#4c4cff'},
'KS': {fill: '#3232ff'},
'NY': {fill: '#3232ff'},
'VA': {fill: '#3232ff'},
'UT': {fill: '#1919ff'},
'AR': {fill: '#1919ff'},
'TN': {fill: '#1919ff'},
'IA': {fill: '#0000ff'},
'CO': {fill: '#0000ff'},
'OK': {fill: '#0000ff'},
'WI': {fill: '#0000e5'},
'WY': {fill: '#0000e5'},
'AZ': {fill: '#0000e5'},
'GA': {fill: '#0000cc'},
'NC': {fill: '#0000cc'},
'CA': {fill: '#0000cc'},
'LA': {fill: '#0000b2'},
'AL': {fill: '#0000b2'},
'MI': {fill: '#0000b2'},
'WV': {fill: '#000099'},
'MO': {fill: '#000099'},
'KY': {fill: '#000099'},
'IL': {fill: '#00007f'},
'IN': {fill: '#00007f'},
'OH': {fill: '#00007f'},
'FL': {fill: '#00004c'},
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
    
    
 /**  Dont Touch   **/   
    $('#over-md').click(function (event) {
        $('#map').usmap('trigger', 'MD', 'mouseover', event);
    });

    $('#out-md').click(function (event) {
        $('#map').usmap('trigger', 'MD', 'mouseout', event);
    });
});



