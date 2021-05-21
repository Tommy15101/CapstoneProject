////////// ////////// ///// ////////// //////////
////////// BOOTCAMP BY DAPP UNIVERSITY //////////
////////// ////////// ///// ////////// //////////

////////// ////////// WEB3 ////////// //////////

//WEB3 LOADED...
export function web3Loaded(connection) {
    return {
        type: 'WEB3_LOADED',
        connection
    }
}

//WEB3 ACCOUNT LOADED...
export function web3AccountLoaded(account) {
    return {
        type: 'WEB3_ACCOUNT_LOADED',
        account
    }
}

////////// ////////// TOKEN ////////// //////////

//TOKEN LOADED...
export function tokenLoaded(contract) {
    return {
        type: 'TOKEN_LOADED',
        contract
    }
}

////////// ////////// EXCHANGE ////////// //////////

//EXCHANGE...
export function exchangeLoaded(contract) {
    return {
        type: 'EXCHANGE_LOADED',
        contract
    }
}

////////// ////////// ORDERS FUNCTIONS ////////// //////////

//CANCELLED ORDER...
export function cancelledOrdersLoaded(cancelledOrders) {
    return {
        type: 'CANCELLED_ORDERS_LOADED',
        cancelledOrders
    }
}

//FILLED ORDER...
export function filledOrdersLoaded(filledOrders) {
    return {
        type: 'FILLED_ORDERS_LOADED',
        filledOrders
    }
}

//ALL ORDERS LOADED...
export function allOrdersLoaded(allOrders) {
    return {
        type: 'ALL_ORDERS_LOADED',
        allOrders
    }
}

//ORDER CANCELLING...
export function orderCancelling() {
    return {
        type: 'ORDER_CANCELLING'
    }
}

//ORDER CANCELLED...
export function orderCancelled(order) {
    return {
        type: 'ORDER_CANCELLED',
        order
    }
}

//ORDER FILLING...
export function orderFilling() {
    return {
        type: 'ORDER_FILLING'
    }
}

//ORDER FILLED...
export function orderFilled(order) {
    return {
        type: 'ORDER_FILLED',
        order
    }
}

////////// ////////// BALANCES ////////// //////////

//ETHER BALANCE LOADED...
export function etherBalanceLoaded(balance) {
    return {
        type: 'ETHER_BALANCE_LOADED',
        balance
    }
}

//TOKEN BALANCE LOADED...
export function tokenBalanceLoaded(balance) {
    return {
        type: 'TOKEN_BALANCE_LOADED',
        balance
    }
}

//EXCHANGE ETHER BALANCE LOADED...
export function exchangeEtherBalanceLoaded(balance) {
    return {
        type: 'EXCHANGE_ETHER_BALANCE_LOADED',
        balance
    }
}

//EXCHAGE TOKEN BALANCE LOADED...
export function exchangeTokenBalanceLoaded(balance) {
    return {
        type: 'EXCHANGE_TOKEN_BALANCE_LOADED',
        balance
    }
}

//ALL BALANCES LOADED...
export function balancesLoaded() {
    return {
        type: 'BALANCES_LOADED',
    }
}

//BALANCES LOADING...
export function balancesLoading() {
    return {
        type: 'BALANCES_LOADING',
    }
}

////////// ////////// DEPOSIT/WITHDRAW ////////// //////////

//ETHER DEPOSIT AMOUNT CHANGE...
export function etherDepositAmountChanged(amount) {
    return {
        type: 'ETHER_DEPOSIT_AMOUNT_CHANGED',
        amount
    }
}

//ETHER WITHDRAW AMOUNT CHANGE...
export function etherWithdrawAmountChanged(amount) {
    return {
        type: 'ETHER_WITHDRAW_AMOUNT_CHANGED',
        amount
    }
}

//TOKEN DEPOSIT AMOUNT CHANGED...
export function tokenDepositAmountChanged(amount) {
    return {
        type: 'TOKEN_DEPOSIT_AMOUNT_CHANGED',
        amount
    }
}

//TOKEN WITHDRAW AMOUNT CHANGED...
export function tokenWithdrawAmountChanged(amount) {
    return {
        type: 'TOKEN_WITHDRAW_AMOUNT_CHANGED',
        amount
    }
}

////////// ////////// ORDERS EXECUTE ////////// //////////

//BUY ORDER AMOUNT CHANGED...
export function buyOrderAmountChanged(amount) {
    return {
        type: 'BUY_ORDER_AMOUNT_CHANGED',
        amount
    }
}

//BUY ORDER PRICE CHANGED...
export function buyOrderPriceChanged(price) {
    return {
        type: 'BUY_ORDER_PRICE_CHANGED',
        price
    }
}

//MAKING BUY ORDER...
export function buyOrderMaking(price) {
    return {
        type: 'BUY_ORDER_MAKING',
    }
}

//GENERIC ORDER...
export function orderMade(order) {
    return {
        type: 'ORDER_MADE',
        order
    }
}

//SELL ORDER AMOUNT CHANGED...
export function sellOrderAmountChanged(amount) {
    return {
        type: 'SELL_ORDER_AMOUNT_CHANGED',
        amount
    }
}

//SELL ORDER PRICE CHANGED...
export function sellOrderPriceChanged(price) {
    return {
        type: 'SELL_ORDER_PRICE_CHANGED',
        price
    }
}

//MAKING SELL ORDER...
export function sellOrderMaking(price) {
    return {
        type: 'SELL_ORDER_MAKING',
    }
}