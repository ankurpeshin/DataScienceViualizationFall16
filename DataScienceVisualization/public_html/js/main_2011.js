$(document).ready(function () {
  $('#map_Cancer_2011').usmap({
        'stateSpecificStyles': {
'NV': {fill: '#ffffff'},
'UT': {fill: '#ffffff'},
'AK': {fill: '#ffffff'},
'TX': {fill: '#e5e5ff'},
'CO': {fill: '#e5e5ff'},
'NM': {fill: '#e5e5ff'},
'CA': {fill: '#ccccff'},
'AZ': {fill: '#ccccff'},
'GA': {fill: '#ccccff'},
'VA': {fill: '#b2b2ff'},
'WY': {fill: '#b2b2ff'},
'ID': {fill: '#b2b2ff'},
'MD': {fill: '#9999ff'},
'HI': {fill: '#9999ff'},
'OK': {fill: '#9999ff'},
'NE': {fill: '#7f7fff'},
'IN': {fill: '#7f7fff'},
'DC': {fill: '#7f7fff'},
'WA': {fill: '#6666ff'},
'AR': {fill: '#6666ff'},
'MS': {fill: '#6666ff'},
'IL': {fill: '#4c4cff'},
'KS': {fill: '#4c4cff'},
'NC': {fill: '#4c4cff'},
'MN': {fill: '#3232ff'},
'AL': {fill: '#3232ff'},
'LA': {fill: '#3232ff'},
'SC': {fill: '#1919ff'},
'MO': {fill: '#1919ff'},
'OR': {fill: '#1919ff'},
'TN': {fill: '#0000ff'},
'SD': {fill: '#0000ff'},
'OH': {fill: '#0000ff'},
'ND': {fill: '#0000e5'},
'WI': {fill: '#0000e5'},
'RI': {fill: '#0000e5'},
'NJ': {fill: '#0000cc'},
'MA': {fill: '#0000cc'},
'MI': {fill: '#0000cc'},
'NY': {fill: '#0000b2'},
'IA': {fill: '#0000b2'},
'MT': {fill: '#0000b2'},
'CT': {fill: '#000099'},
'FL': {fill: '#000099'},
'VT': {fill: '#000099'},
'KY': {fill: '#00007f'},
'DE': {fill: '#00007f'},
'NH': {fill: '#00007f'},
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
    $('#map_CO2_2011').usmap({
        'stateSpecificStyles': {
'VT': {fill: '#ffffff'},
'DC': {fill: '#ffffff'},
'ID': {fill: '#ffffff'},
'SD': {fill: '#e5e5ff'},
'RI': {fill: '#e5e5ff'},
'DE': {fill: '#e5e5ff'},
'AK': {fill: '#ccccff'},
'ME': {fill: '#ccccff'},
'NH': {fill: '#ccccff'},
'OR': {fill: '#b2b2ff'},
'HI': {fill: '#b2b2ff'},
'CT': {fill: '#b2b2ff'},
'WA': {fill: '#9999ff'},
'NV': {fill: '#9999ff'},
'MA': {fill: '#9999ff'},
'NJ': {fill: '#7f7fff'},
'MT': {fill: '#7f7fff'},
'MS': {fill: '#7f7fff'},
'MD': {fill: '#6666ff'},
'NE': {fill: '#6666ff'},
'ND': {fill: '#6666ff'},
'NM': {fill: '#4c4cff'},
'MN': {fill: '#4c4cff'},
'VA': {fill: '#4c4cff'},
'UT': {fill: '#3232ff'},
'KS': {fill: '#3232ff'},
'AR': {fill: '#3232ff'},
'NY': {fill: '#1919ff'},
'SC': {fill: '#1919ff'},
'CO': {fill: '#1919ff'},
'IA': {fill: '#0000ff'},
'WY': {fill: '#0000ff'},
'TN': {fill: '#0000ff'},
'WI': {fill: '#0000e5'},
'CA': {fill: '#0000e5'},
'OK': {fill: '#0000e5'},
'AZ': {fill: '#0000cc'},
'LA': {fill: '#0000cc'},
'NC': {fill: '#0000cc'},
'MI': {fill: '#0000b2'},
'GA': {fill: '#0000b2'},
'WV': {fill: '#0000b2'},
'AL': {fill: '#000099'},
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
    $('#map_NO2_2011').usmap({
        'stateSpecificStyles': {
'DC': {fill: '#ffffff'},
'VT': {fill: '#ffffff'},
'RI': {fill: '#ffffff'},
'ID': {fill: '#e5e5ff'},
'DE': {fill: '#e5e5ff'},
'NH': {fill: '#e5e5ff'},
'CT': {fill: '#ccccff'},
'ME': {fill: '#ccccff'},
'OR': {fill: '#ccccff'},
'SD': {fill: '#b2b2ff'},
'NV': {fill: '#b2b2ff'},
'NJ': {fill: '#b2b2ff'},
'MA': {fill: '#9999ff'},
'WA': {fill: '#9999ff'},
'AK': {fill: '#9999ff'},
'MT': {fill: '#7f7fff'},
'HI': {fill: '#7f7fff'},
'MD': {fill: '#7f7fff'},
'MS': {fill: '#6666ff'},
'TN': {fill: '#6666ff'},
'SC': {fill: '#6666ff'},
'KS': {fill: '#4c4cff'},
'NE': {fill: '#4c4cff'},
'AR': {fill: '#4c4cff'},
'MN': {fill: '#3232ff'},
'NY': {fill: '#3232ff'},
'VA': {fill: '#3232ff'},
'IA': {fill: '#1919ff'},
'WI': {fill: '#1919ff'},
'ND': {fill: '#1919ff'},
'NC': {fill: '#0000ff'},
'CO': {fill: '#0000ff'},
'AZ': {fill: '#0000ff'},
'WV': {fill: '#0000e5'},
'NM': {fill: '#0000e5'},
'UT': {fill: '#0000e5'},
'MO': {fill: '#0000cc'},
'WY': {fill: '#0000cc'},
'AL': {fill: '#0000cc'},
'IL': {fill: '#0000b2'},
'GA': {fill: '#0000b2'},
'OK': {fill: '#0000b2'},
'LA': {fill: '#000099'},
'CA': {fill: '#000099'},
'MI': {fill: '#000099'},
'FL': {fill: '#00007f'},
'KY': {fill: '#00007f'},
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
    $('#map_SO2_2011').usmap({
        'stateSpecificStyles': {
'RI': {fill: '#ffffff'},
'VT': {fill: '#ffffff'},
'DC': {fill: '#ffffff'},
'CT': {fill: '#e5e5ff'},
'AK': {fill: '#e5e5ff'},
'CA': {fill: '#e5e5ff'},
'ID': {fill: '#ccccff'},
'NV': {fill: '#ccccff'},
'NJ': {fill: '#ccccff'},
'DE': {fill: '#b2b2ff'},
'SD': {fill: '#b2b2ff'},
'ME': {fill: '#b2b2ff'},
'OR': {fill: '#9999ff'},
'NM': {fill: '#9999ff'},
'HI': {fill: '#9999ff'},
'WA': {fill: '#7f7fff'},
'MT': {fill: '#7f7fff'},
'MA': {fill: '#7f7fff'},
'NH': {fill: '#6666ff'},
'UT': {fill: '#6666ff'},
'AZ': {fill: '#6666ff'},
'KS': {fill: '#4c4cff'},
'CO': {fill: '#4c4cff'},
'MS': {fill: '#4c4cff'},
'MD': {fill: '#3232ff'},
'NY': {fill: '#3232ff'},
'MN': {fill: '#3232ff'},
'NE': {fill: '#1919ff'},
'WY': {fill: '#1919ff'},
'AR': {fill: '#1919ff'},
'ND': {fill: '#0000ff'},
'VA': {fill: '#0000ff'},
'SC': {fill: '#0000ff'},
'OK': {fill: '#0000e5'},
'NC': {fill: '#0000e5'},
'WV': {fill: '#0000e5'},
'IA': {fill: '#0000cc'},
'FL': {fill: '#0000cc'},
'LA': {fill: '#0000cc'},
'WI': {fill: '#0000b2'},
'TN': {fill: '#0000b2'},
'MO': {fill: '#0000b2'},
'AL': {fill: '#000099'},
'IL': {fill: '#000099'},
'KY': {fill: '#000099'},
'MI': {fill: '#00007f'},
'GA': {fill: '#00007f'},
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
   
 $('#map_Combined_2011').usmap({
        'stateSpecificStyles': {
'VT': {fill: '#ffffff'},
'DC': {fill: '#ffffff'},
'ID': {fill: '#ffffff'},
'SD': {fill: '#e5e5ff'},
'RI': {fill: '#e5e5ff'},
'DE': {fill: '#e5e5ff'},
'AK': {fill: '#ccccff'},
'ME': {fill: '#ccccff'},
'NH': {fill: '#ccccff'},
'OR': {fill: '#b2b2ff'},
'HI': {fill: '#b2b2ff'},
'CT': {fill: '#b2b2ff'},
'WA': {fill: '#9999ff'},
'NV': {fill: '#9999ff'},
'MA': {fill: '#9999ff'},
'NJ': {fill: '#7f7fff'},
'MT': {fill: '#7f7fff'},
'MS': {fill: '#7f7fff'},
'MD': {fill: '#6666ff'},
'NE': {fill: '#6666ff'},
'ND': {fill: '#6666ff'},
'NM': {fill: '#4c4cff'},
'MN': {fill: '#4c4cff'},
'VA': {fill: '#4c4cff'},
'UT': {fill: '#3232ff'},
'KS': {fill: '#3232ff'},
'AR': {fill: '#3232ff'},
'NY': {fill: '#1919ff'},
'SC': {fill: '#1919ff'},
'CO': {fill: '#1919ff'},
'IA': {fill: '#0000ff'},
'WY': {fill: '#0000ff'},
'TN': {fill: '#0000ff'},
'WI': {fill: '#0000e5'},
'CA': {fill: '#0000e5'},
'OK': {fill: '#0000e5'},
'AZ': {fill: '#0000cc'},
'LA': {fill: '#0000cc'},
'NC': {fill: '#0000cc'},
'MI': {fill: '#0000b2'},
'GA': {fill: '#0000b2'},
'WV': {fill: '#0000b2'},
'AL': {fill: '#000099'},
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



