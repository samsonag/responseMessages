const responses = {
    '200':{
        name: 'OK',
        msg: 'request was processed properly'
    },
    '301':{
        name: 'MovedTemporarily',
        msg: 'target has moved temporarily.'
    },
    '302':{
        name: 'MovedPermanently',
        msg: 'target has moved permanently.'
    },
    '400': {
        name: 'BadRequest',
        msg: 'bad request:'
    },
    '401':{
        name: 'Unauthorized',
        msg: 'need to login first.'
    },
    '403':{
        name: 'Forbidden',
        msg: 'you are not allowed to access this resource.'
    },
    '422':{
        name: 'UnprocessableEntity',
        msg: 'reason:'
    },
    '500':{
        name: 'InternalServerError',
        msg: 'an unexpected failure happened - we are already fixing.'
    }
}

function getResponse(code) {
    return responses[code];
}

function getCustom(code, msg, hint = null) {
    let resp = getResponse(code);

    return {
        hint: hint,
        name: resp.name,
        msg:  `${resp.msg} ${msg}`
    };
}

module.exports = {
    getResponse: getResponse,
    getCustom: getCustom,
    responses: responses
}