import React from 'react'


import Gas from '../assets/gas.png'
import Self_destruct from '../assets/self_destruct.png'


const Blog = () => {
    
    return (

        <section className="blog">

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
                <h2 align="center">Welcome to Vidhan's Blog!</h2>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                            <p><u>ERC-4337 CRYPTO WALLETS WILL ONBOARD THE NEXT 1 BILLION USERS TO WEB3</u></p>
                        <br></br>
                        <br></br>
                            <p>This is a new type of crypto wallet that gives you "the same features a bank would, without having to trust a bank."</p>
                        <br></br>
                        <br></br>
                            <p>Some interesting features would be:</p>
                        <br></br>
                            <li>Wallet Recovery: Recover your private keys with "social recovery".</li>
                        <br></br>
                            <li>Multi-Sign Transactions: Useful in organastions requiring multiple signatures for an approval.</li>
                        <br></br>
                            <li>Bundle Transactions: Approve and complete the listing of an NFT from a new collection in the same transaction.</li>
                        <br></br>
                            <li>Customer Limits & 2FA: Password required for a transaction above a certain amount.</li>
                        <br></br>
                            <li>Gasless & Sponsored Transactions: No more need to pay gas for every transaction.</li>
                        <br></br>
                        <br></br>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                            <p><u>USING CUSTOM ERRORS INSTEAD OF REVERT STRINGS (SAVE HUGE DEPLOYMENT GAS COSTS)</u></p>
                        <br></br>
                        <br></br>
                            <p>A lot of solidity developers don't put this into their practice and it's very underrated. Solidity 0.8.4 introduced custom errors, a convenient and gas-efficient way to display errors. Before Solidity 0.8.4 solidity developers could only use revert strings to display errors, which was expensive in terms of smart contract deployment cost and run-time cost when the require condition is met.</p>
                        <br></br>
                        <br></br>
                            <p>You can define errors with the error keyword, the type of errors you can define are:</p>
                        <br></br>
                            <li>Errors</li>
                        <br></br>
                            <li>Errors with parameters</li>
                        <br></br>
                            <li>Errors in depth</li>
                        <br></br>
                        <br></br>
                            <p>You can place the error condition in an if condition and reverting the transaction, errors can be declared inside or outside the smart contract scope.</p>
                        <br></br>
                        <br></br>
                            <p>The following code shows how to use custom errors in solidity and what's the gas difference in both of them.</p>
                        <br></br>
                        <br></br>
                            <img src={Gas} alt="Gas" width={500} height={500} />
                        <br></br>
                        <br></br>
                            <p>Deployment Gas Costs:</p>
                        <br></br>
                            <p>Contract - RequireErrors: 230288 gas</p>
                            <p>Contract - CustomError: 201559 gas</p>
                        <br></br>
                            <p>Error Gas Cost When Condition is Met:</p>
                        <br></br>
                            <p>function requireError(): 23642</p>
                            <p>function customError(): 23388</p>
                        <br></br>
                        <br></br>
                            <p>Custom Errors will save huge deployment gas costs for you and you'll be able to write much more lines of code.</p>
                        <br></br>
                        <br></br>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                            <p><u>WHAT EXACTLY HAPPENS WHEN YOU DESTRUCT A SOLIDITY SMART CONTRACT?🔥</u></p>
                        <br></br>
                        <br></br>
                            <p>The contract stops execution in its current scope (number++ is not executed after the selfdestruct was initiated), and flags the contract for deletion. It doesn’t get deleted right away, so you can still call its functions (in this case the autogenerated number() function).</p>
                        <br></br>
                        <br></br>
                            <p>The native selfdestruct() function takes one argument of type “address payable” to which it’s going to send all native tokens (ETH on Ethereum, BNB on Binance Smart Chain, MATIC on Polygon, …) that the contract holds.</p>
                        <br></br>
                        <br></br>
                            <p>Since this is not a regular transfer, it does not invoke the receive() nor fallback() functions on the recipient contract. So you effectively can force send ETH to a contract this way.</p>
                        <br></br>
                        <br></br>
                            <p>Non-native tokens (ERC-20, NFTs, …) are not transferred. Token balances are stored in respective token contracts - so your contract doesn’t know which non-native tokens it owns. There’s no known private key to the contract address, and all non-native tokens held by this address are going to be inaccessible once the contract is destroyed. Just something to keep in mind if you’re planning to implement the destruct feature in your contracts.</p>
                        <br></br>
                        <br></br>
                            <p>The selfdestruct() function was deprecated in the latest Solidity version 0.8.18, and is planned to be replaced by SENDALL opcode - so the new Solidity function replacing selfdestruct() will possibly be called sendall(). The new feature will send all native tokens to the specified address but will not remove the contract bytecode anymore. More info in the currently unfinished EIP: https://lnkd.in/evC7zYnch.</p>
                        <br></br>
                        <br></br>
                            <img src={Self_destruct} alt="Gas" width={500} height={500} />
                        <br></br>
                        <br></br>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                            <p align="center">Thank you!</p>

                    <footer align="center" className="footer">

                            <p><small>This Web 3.0 portfolio website is proudly hosted on IPFS</small></p>

                        <br></br>

                            <p><small>Copyright © 2023 Vidhan Mangla.</small></p>

                    </footer>

        </section>

    )

}

export default Blog
