export const ETHER_ADDRESS = "0x0000000000000000000000000000000000000000"
export const GREEN = 'success'
export const RED = 'danger'

export const DECIMALS = (10**18)

//Shortcut to avoid passing around web3 connection
export const ether = (wei) => {
    if(wei) {
        return(wei / DECIMALS) //18 decimal places
    }
}

//Tokens and Ether have some decimal resolution
export const tokens = ether

export const formatBalance = (balance) => {
    const precision = 100 // 2 Decimal places

    balance = ether(balance)
    balance = Math.round(balance * precision) / precision
    
    return balance
}