function mix(s1, s2){
  var valid = 'abcdefghijklmnopqrstuvwxyz'.split(''),
    validLength = valid.length,
    grouped = [],
    final = [],
    regEx,
    found,
    toReturn = '';
  
  for ( var i = 0; i < validLength; i++ ) {
    regEx = new RegExp( valid[i], 'g' );
    
    // group letters for s1
    found = s1.match( regEx );
    if ( found && found.length > 1 ) {
      if ( ! grouped[ i ] ) {
        grouped[ i ] = [];
      }
      grouped[ i ][0] = found.join('');
    }
    
    // group letters for s2
    found = s2.match( regEx );
    if ( found && found.length > 1 ) {
      if ( ! grouped[ i ] ) {
        grouped[ i ] = [];
      }
      grouped[ i ][1] = found.join('');
    }
  }
  
  // Decide which word has more of each letter
  for ( var key in grouped ) {
    if ( ! grouped[ key ][0] ) {
      final.push( [ 2, grouped[ key ][1] ] );
    } else if ( ! grouped[ key ][1] ) {
      final.push( [ 1, grouped[ key ][0] ] );
    } else if ( grouped[ key ][0].length > grouped[ key ][1].length ) {
      final.push( [ 1, grouped[ key ][0] ] );
    } else if ( grouped[ key ][1].length > grouped[ key ][0].length ) {
      final.push( [ 2, grouped[ key ][1] ] );
    } else {
      final.push( [ '=', grouped[ key ][0] ] );
    }
  }
  final.sort(function( a, b ){
    var aLen = a[1].length,
      bLen = b[1].length;
    
    if ( aLen > bLen  ) {
      // Favor more letters and instances of one word having more
      // letters than the other, i.e., no [0] = '='
      return -1;
    } else if ( aLen < bLen ) {
      return 1;
    } else if ( aLen === bLen ) {
      if ( '=' !== a[0] && '=' === b[0] ) {
        return -1;
      } else if ( '=' !== b[0] && '=' === a[0] ) {
        return 1;
      } else if ( a[0] < b[0] ) {
        return -1;
      } else if ( b[0] < a[0] ) {
        return 1;
      }
      if ( a[1].charCodeAt(0) < b[1].charCodeAt(0) ) {
        return -1;
      } else if ( a[1].charCodeAt(0) > b[1].charCodeAt(0) ) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  
  return final.map(function(a){
    return a[0] + ':' + a[1];
  }).join('/');
}