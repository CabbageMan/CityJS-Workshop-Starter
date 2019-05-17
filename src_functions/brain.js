
import net from './brain/model';
import next from './brain/next';

// src_function/brain.js
exports.handler = function(event, context, callback) {

    const board = JSON.parse(event.body)


    callback(null, {
    statusCode: 200,
    body: JSON.stringify(next(board, net))
    });
}