let { Connection, LAMPORTS_PER_SOL } = require("@solana/web3.js");

const HELIUS_KEY = "<enter helius api key here>";
const SOLANA_RPC_URL = "https://mainnet.helius-rpc.com/?api-key=" + HELIUS_KEY;

async function calculateTokenAccountCreationFeeInSOL() {
    //Data size reference: https://solanacookbook.com/guides/get-program-accounts.html#datasize
    const ASSOCIATED_TOKEN_ACCOUNT_SIZE = 165;
    const connection = new Connection(SOLANA_RPC_URL);
    let rent = await connection.getMinimumBalanceForRentExemption(
        ASSOCIATED_TOKEN_ACCOUNT_SIZE
    );
    let rentSOL = rent / LAMPORTS_PER_SOL;
    return rentSOL;
}


async function main() {
    let fee = await calculateTokenAccountCreationFeeInSOL();
    console.log(fee);
}


main();