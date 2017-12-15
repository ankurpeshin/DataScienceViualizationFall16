$(document).ready(function () {
  $('#map_Cancer_2012').usmap({
        'stateSpecificStyles': {
'NV': {fill: '#ffffff'},
'UT': {fill: '#ffffff'},
'AK': {fill: '#ffffff'},
'TX': {fill: '#e5e5ff'},
'CO': {fill: '#e5e5ff'},
'CA': {fill: '#e5e5ff'},
'NM': {fill: '#ccccff'},
'AZ': {fill: '#ccccff'},
'WY': {fill: '#ccccff'},
'VA': {fill: '#b2b2ff'},
'GA': {fill: '#b2b2ff'},
'ID': {fill: '#b2b2ff'},
'DC': {fill: '#9999ff'},
'MD': {fill: '#9999ff'},
'NE': {fill: '#9999ff'},
'HI': {fill: '#7f7fff'},
'IN': {fill: '#7f7fff'},
'OK': {fill: '#7f7fff'},
'NC': {fill: '#6666ff'},
'WA': {fill: '#6666ff'},
'IL': {fill: '#6666ff'},
'SD': {fill: '#4c4cff'},
'MS': {fill: '#4c4cff'},
'OR': {fill: '#4c4cff'},
'KS': {fill: '#3232ff'},
'MN': {fill: '#3232ff'},
'LA': {fill: '#3232ff'},
'AR': {fill: '#1919ff'},
'OH': {fill: '#1919ff'},
'ND': {fill: '#1919ff'},
'AL': {fill: '#0000ff'},
'TN': {fill: '#0000ff'},
'MO': {fill: '#0000ff'},
'WI': {fill: '#0000e5'},
'SC': {fill: '#0000e5'},
'MI': {fill: '#0000e5'},
'NY': {fill: '#0000cc'},
'MA': {fill: '#0000cc'},
'MT': {fill: '#0000cc'},
'NJ': {fill: '#0000b2'},
'IA': {fill: '#0000b2'},
'FL': {fill: '#0000b2'},
'CT': {fill: '#000099'},
'VT': {fill: '#000099'},
'RI': {fill: '#000099'},
'NH': {fill: '#00007f'},
'DE': {fill: '#00007f'},
'KY': {fill: '#00007f'},
'PA': {fill: '#00004c'},
'WV': {fill: '#00004c'},
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
    $('#map_CO2_2012').usmap({
        'stateSpecificStyles': {
'VT': {fill: '#ffffff'},
'DC': {fill: '#ffffff'},
'ID': {fill: '#ffffff'},
'SD': {fill: '#e5e5ff'},
'RI': {fill: '#e5e5ff'},
'ME': {fill: '#e5e5ff'},
'NH': {fill: '#ccccff'},
'AK': {fill: '#ccccff'},
'DE': {fill: '#ccccff'},
'WA': {fill: '#b2b2ff'},
'OR': {fill: '#b2b2ff'},
'HI': {fill: '#b2b2ff'},
'CT': {fill: '#9999ff'},
'MA': {fill: '#9999ff'},
'NV': {fill: '#9999ff'},
'MT': {fill: '#7f7fff'},
'NJ': {fill: '#7f7fff'},
'MD': {fill: '#7f7fff'},
'MS': {fill: '#6666ff'},
'NE': {fill: '#6666ff'},
'MN': {fill: '#6666ff'},
'NM': {fill: '#4c4cff'},
'VA': {fill: '#4c4cff'},
'ND': {fill: '#4c4cff'},
'KS': {fill: '#3232ff'},
'UT': {fill: '#3232ff'},
'SC': {fill: '#3232ff'},
'NY': {fill: '#1919ff'},
'AR': {fill: '#1919ff'},
'CO': {fill: '#1919ff'},
'WI': {fill: '#0000ff'},
'IA': {fill: '#0000ff'},
'TN': {fill: '#0000ff'},
'WY': {fill: '#0000e5'},
'OK': {fill: '#0000e5'},
'AZ': {fill: '#0000e5'},
'NC': {fill: '#0000cc'},
'GA': {fill: '#0000cc'},
'CA': {fill: '#0000cc'},
'LA': {fill: '#0000b2'},
'WV': {fill: '#0000b2'},
'MI': {fill: '#0000b2'},
'AL': {fill: '#000099'},
'MO': {fill: '#000099'},
'KY': {fill: '#000099'},
'IL': {fill: '#00007f'},
'OH': {fill: '#00007f'},
'IN': {fill: '#00007f'},
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
    $('#map_NO2_2012').usmap({
        'stateSpecificStyles': {
'DC': {fill: '#ffffff'},
'VT': {fill: '#ffffff'},
'RI': {fill: '#ffffff'},
'DE': {fill: '#e5e5ff'},
'NH': {fill: '#e5e5ff'},
'ID': {fill: '#e5e5ff'},
'ME': {fill: '#ccccff'},
'OR': {fill: '#ccccff'},
'SD': {fill: '#ccccff'},
'CT': {fill: '#b2b2ff'},
'WA': {fill: '#b2b2ff'},
'NV': {fill: '#b2b2ff'},
'NJ': {fill: '#9999ff'},
'MA': {fill: '#9999ff'},
'MT': {fill: '#9999ff'},
'AK': {fill: '#7f7fff'},
'HI': {fill: '#7f7fff'},
'MD': {fill: '#7f7fff'},
'SC': {fill: '#6666ff'},
'MS': {fill: '#6666ff'},
'TN': {fill: '#6666ff'},
'NE': {fill: '#4c4cff'},
'KS': {fill: '#4c4cff'},
'VA': {fill: '#4c4cff'},
'MN': {fill: '#3232ff'},
'AR': {fill: '#3232ff'},
'WI': {fill: '#3232ff'},
'NY': {fill: '#1919ff'},
'IA': {fill: '#1919ff'},
'CO': {fill: '#1919ff'},
'AZ': {fill: '#0000ff'},
'ND': {fill: '#0000ff'},
'WV': {fill: '#0000ff'},
'WY': {fill: '#0000e5'},
'UT': {fill: '#0000e5'},
'GA': {fill: '#0000e5'},
'AL': {fill: '#0000cc'},
'NC': {fill: '#0000cc'},
'NM': {fill: '#0000cc'},
'IL': {fill: '#0000b2'},
'OK': {fill: '#0000b2'},
'MO': {fill: '#0000b2'},
'KY': {fill: '#000099'},
'LA': {fill: '#000099'},
'MI': {fill: '#000099'},
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
    $('#map_SO2_2012').usmap({
        'stateSpecificStyles': {
'DC': {fill: '#ffffff'},
'RI': {fill: '#ffffff'},
'VT': {fill: '#ffffff'},
'NH': {fill: '#e5e5ff'},
'DE': {fill: '#e5e5ff'},
'AK': {fill: '#e5e5ff'},
'NJ': {fill: '#ccccff'},
'NV': {fill: '#ccccff'},
'ID': {fill: '#ccccff'},
'CA': {fill: '#b2b2ff'},
'CT': {fill: '#b2b2ff'},
'ME': {fill: '#b2b2ff'},
'SD': {fill: '#9999ff'},
'OR': {fill: '#9999ff'},
'HI': {fill: '#9999ff'},
'MA': {fill: '#7f7fff'},
'MT': {fill: '#7f7fff'},
'NM': {fill: '#7f7fff'},
'AZ': {fill: '#6666ff'},
'UT': {fill: '#6666ff'},
'WA': {fill: '#6666ff'},
'KS': {fill: '#4c4cff'},
'NY': {fill: '#4c4cff'},
'MN': {fill: '#4c4cff'},
'CO': {fill: '#3232ff'},
'MD': {fill: '#3232ff'},
'MS': {fill: '#3232ff'},
'WY': {fill: '#1919ff'},
'VA': {fill: '#1919ff'},
'NE': {fill: '#1919ff'},
'SC': {fill: '#0000ff'},
'NC': {fill: '#0000ff'},
'OK': {fill: '#0000ff'},
'ND': {fill: '#0000e5'},
'WV': {fill: '#0000e5'},
'AR': {fill: '#0000e5'},
'TN': {fill: '#0000cc'},
'IA': {fill: '#0000cc'},
'WI': {fill: '#0000cc'},
'FL': {fill: '#0000b2'},
'LA': {fill: '#0000b2'},
'MO': {fill: '#0000b2'},
'AL': {fill: '#000099'},
'GA': {fill: '#000099'},
'KY': {fill: '#000099'},
'IL': {fill: '#00007f'},
'MI': {fill: '#00007f'},
'PA': {fill: '#00007f'},
'IN': {fill: '#00004c'},
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
   
 $('#map_Combined_2012').usmap({
        'stateSpecificStyles': {
'VT': {fill: '#ffffff'},
'DC': {fill: '#ffffff'},
'ID': {fill: '#ffffff'},
'SD': {fill: '#e5e5ff'},
'RI': {fill: '#e5e5ff'},
'ME': {fill: '#e5e5ff'},
'NH': {fill: '#ccccff'},
'AK': {fill: '#ccccff'},
'DE': {fill: '#ccccff'},
'WA': {fill: '#b2b2ff'},
'OR': {fill: '#b2b2ff'},
'HI': {fill: '#b2b2ff'},
'CT': {fill: '#9999ff'},
'MA': {fill: '#9999ff'},
'NV': {fill: '#9999ff'},
'MT': {fill: '#7f7fff'},
'NJ': {fill: '#7f7fff'},
'MD': {fill: '#7f7fff'},
'MS': {fill: '#6666ff'},
'NE': {fill: '#6666ff'},
'MN': {fill: '#6666ff'},
'NM': {fill: '#4c4cff'},
'VA': {fill: '#4c4cff'},
'ND': {fill: '#4c4cff'},
'KS': {fill: '#3232ff'},
'UT': {fill: '#3232ff'},
'SC': {fill: '#3232ff'},
'NY': {fill: '#1919ff'},
'AR': {fill: '#1919ff'},
'CO': {fill: '#1919ff'},
'WI': {fill: '#0000ff'},
'IA': {fill: '#0000ff'},
'TN': {fill: '#0000ff'},
'WY': {fill: '#0000e5'},
'OK': {fill: '#0000e5'},
'AZ': {fill: '#0000e5'},
'NC': {fill: '#0000cc'},
'GA': {fill: '#0000cc'},
'CA': {fill: '#0000cc'},
'LA': {fill: '#0000b2'},
'WV': {fill: '#0000b2'},
'MI': {fill: '#0000b2'},
'AL': {fill: '#000099'},
'MO': {fill: '#000099'},
'KY': {fill: '#000099'},
'IL': {fill: '#00007f'},
'OH': {fill: '#00007f'},
'IN': {fill: '#00007f'},
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



