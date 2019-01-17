const express = require( 'express' );
const bodyParser = require( 'body-parser' )
const path = require( 'path' );
const cors = require( 'cors' );
const app = express();

app.use( express.static( path.join( __dirname, 'build' ) ) );

app.use( cors() );

app.use( function( request, response, next ) {
  response.set( 'Access-Control-Allow-Origin', '*' );
  response.set( 'Access-Control-Allow-Headers', '*' );

  next();
} );

app.get( '/', function ( req, res ) {
  res.sendFile( path.join( __dirname, 'build', 'index.html' ) );
} );

app.listen( process.env.PORT || 8080 );
