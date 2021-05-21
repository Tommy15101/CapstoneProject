import { suppressDeprecationWarnings } from 'moment'
import { tokens, EVM_REVERT } from './helpers'

const Token = artifacts.require('./Token')

require('chai')
    .use(require('chai-as-promised'))
    .should() 

contract('Token', ([deployer, receiver, exchange]) => {
        const name = 'Sigma Token'
        const symbol = 'SIG'
        const decimals = '18'
        const totalSupply = tokens(1000000).toString()
        let token

    beforeEach(async () => {
            token = await Token.new()
        })

    describe('Deployment', () => {
        it('Tracks the name', async () => {
            const result = await token.name()
            result.should.equal(name)
        })

        it('Tracks the symbol', async () => {
            const result = await token.symbol()
            result.should.equal(symbol)
        })

        it('Tracks the decimals', async () => {
            const result = await token.decimals()
            result.toString().should.equal(decimals)
        })

        it('Tracks the total supply', async () => {
            const result = await token.totalSupply()
            result.toString().should.equal(totalSupply.toString())
        })

        it('Assigns the total supply to the deployer', async () => {
            const result = await token.balanceOf(deployer)
            result.toString().should.equal(totalSupply.toString())
        })
    })

    describe('Sending Tokens', () => {
        let amount
        let result

        describe('Success', async () => {
            beforeEach(async () => {
                //Transfer
                amount = tokens(100)
                result = await token.transfer(receiver, amount, { from: deployer })
            })
    
            it('Transfers token balances', async () => {
                let balanceOf
                //After transfer
                balanceOf = await token.balanceOf(deployer)
                balanceOf.toString().should.equal(tokens(999900).toString())
                balanceOf = await token.balanceOf(receiver)
                balanceOf.toString().should.equal(tokens(100).toString())
            })
    
            it('Emits a Transfer event', async () => {
                const log = result.logs[0]
                log.event.should.eq('Transfer')
                const event = log.args
                event.from.toString().should.equal(deployer, 'from is correct')
                event.to.should.equal(receiver, 'to is correct')
                event.value.toString().should.equal(amount.toString(), 'value is correct')
            })
        })

        describe('Failure', async () => {
            
            it('Rejects insufficient balances', async () => {
                let invalidAmount
                invalidAmount = tokens(100000000) //Greater than total supply = invalid
                await token.transfer(receiver, invalidAmount, { from: deployer }).should.be.rejectedWith(EVM_REVERT);

                //Attemp to tranfer tokens when you have none...
                invalidAmount = tokens(10) //Recipient has no tokens
                await token.transfer(deployer, invalidAmount, { from: receiver }).should.be.rejectedWith(EVM_REVERT);
            })

            it('Rejects invalid recipient', async () => {
                await token.transfer(0x0, amount, { from: deployer }).should.be.rejected;
            })
        })
    })

    describe('Approving Tokens', () => {
        let result
        let amount

        beforeEach(async () => {
            amount = tokens(100)
            result = await token.approve(exchange, amount, { from: deployer })
        })

        describe('Success', () => {
            it("Allocates an allowance for delegated token spending on an exchange", async () => {
                const allowance = await token.allowance(deployer, exchange)
                allowance.toString().should.equal(amount.toString())
            })

            it('Emits an Approval event', async () => {
                const log = result.logs[0]
                log.event.should.eq('Approval')
                const event = log.args
                event.owner.toString().should.equal(deployer, 'owner is correct')
                event.spender.should.equal(exchange, 'spender is correct')
                event.value.toString().should.equal(amount.toString(), 'value is correct')
            })
        })

        describe('Failure', () => {
            it('Rejects invalid spenders', async () => {
                await token.approve(0x0, amount, { from: deployer }).should.be.rejected
            })
        })
    })

    describe('Delegated token transfers', () => {
        let amount
        let result

        beforeEach(async () => {
            amount = tokens(100)
            await token.approve(exchange, amount, { from: deployer })
        })

        describe('Success', async () => {
            beforeEach(async () => {
                //Transfer
                result = await token.transferFrom(deployer, receiver, amount, { from: exchange })
            })
    
            it('Transfers token balances', async () => {
                let balanceOf
                //After transfer
                balanceOf = await token.balanceOf(deployer)
                balanceOf.toString().should.equal(tokens(999900).toString())
                balanceOf = await token.balanceOf(receiver)
                balanceOf.toString().should.equal(tokens(100).toString())
            })

            it("Resets the allowance", async () => {
                const allowance = await token.allowance(deployer, exchange)
                allowance.toString().should.equal('0')
            })
    
            it('Emits a Transfer event', async () => {
                const log = result.logs[0]
                log.event.should.eq('Transfer')
                const event = log.args
                event.from.toString().should.equal(deployer, 'from is correct')
                event.to.should.equal(receiver, 'to is correct')
                event.value.toString().should.equal(amount.toString(), 'value is correct')
            })
        })

        describe('Failure', async () => {
            it('Rejects insufficient amounts', async () => {
                //Attempts to transfer too many tokens...
                const invalidAmount = tokens(100000000)
                await token.transferFrom(deployer, receiver, invalidAmount, { from: exchange }).should.be.rejectedWith(EVM_REVERT);
            })

            it('Rejects invalid recipients', async () => {
                await token.transferFrom(deployer, 0x0, amount, { from: exchange }).should.be.rejected;
            })
        })
    })
})