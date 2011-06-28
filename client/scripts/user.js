TWTU.User = ( function() {
	"use strict";

	var schema = {
        id: { type: 'id' },
		name: { type: 'string' },
		latitude: { type: 'number' },
		longitude: { type: 'number' },
        visible: { type: 'boolean', def: true },
        icon: { type: 'string' }
	};

	var User = AFrame.Model.extend( {
		schema: schema
	} );

	return User;
}() );
