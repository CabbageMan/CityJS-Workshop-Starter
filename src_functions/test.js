// src_function/test.js
exports.handler = function(event, context, callback) {

    // If you are building something serious you should probably 
    // validate that request type :D
    //if (event.httpMethod !== "POST") {
    //  return { statusCode: 405, body: "Method Not Allowed" };
    //}

    const EMPTY = 0
    const board = JSON.parse(event.body)
    const position = board.indexOf(EMPTY)

    const string = event.body
    callback(null, {
    statusCode: 200,
    body: position
    });
}