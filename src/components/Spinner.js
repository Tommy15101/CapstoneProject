import React from 'react';

export default function ({ type }) {
    if(type === 'table') {
        return(<tbody className="spinner-border fast text-info text-center"></tbody>)
    } else {
        return(<div className="spinner-border fast text-info text-center"></div>)
    }
}