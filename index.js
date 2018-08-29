const responses = {
    '200':{},
    '301':{},
    '302':{},
    '400': {
        name: 'BadRequest',
        msg: 'bad request:'
    },
    '401':{},
    '403':{},
    '422':{},
    '500':{}
}

function getResponse(code) {
    return responses[code];
}

function getCustom(code, msg, hint = null) {
    let resp = getResponse(code);
    
    return {
        name: resp.name,
        msg:  `${resp.msg} ${msg}`,
        hint: resp.hint ? resp.hint: null
    };
}

module.exports = {
    getResponse: getResponse,
    getCustom: getCustom,
    responses: responses
}