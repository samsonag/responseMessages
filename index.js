const responses = {
    '200':{},
    '301':{},
    '302':{},
    '400': {
        name: 'BadRequest',
        msg: 'something bad happened'
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
    resp.msg += msg;
    if (hint)
        resp.hint = hint;
    
    return resp;
}