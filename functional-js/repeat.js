'use strict';
function repeat( operation, num ) {
    while ( num > 0 ) {
        operation();
        return repeat( operation, --num );
    }
}

module.exports = repeat;
