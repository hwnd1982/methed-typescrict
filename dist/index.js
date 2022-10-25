"use strict";
const div = (a, b, rounding) => {
    const res = a / b;
    if (rounding) {
        return Math.round(res);
    }
    return res;
};
div(15, 4, true);
div(15, 3);
div(10, 2);
const fatchData = (res) => {
    if (res.status === 'panding') {
        res.status;
    }
    if (res.status === 'success') {
        res.status;
        res.data;
    }
    if (res.status === 'failed') {
        res.status;
        res.error;
    }
};
