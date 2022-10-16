const fs = require('fs');

const data = require("./data.json")
const prefix = 'https://7gayh-aqaaa-aaaah-abdgq-cai.raw.ic0.app';

let result = "dfx canister call me_ext batchMintNFT '(vec { \n"

for (let i=0; i<data.tokens.length; i++) {
    const tok = data.tokens[i];
    let owner = tok.owner;
    if (owner == "2vxsx-fae") {
        owner = "bhtsa-2zsxp-khbia-nnpdc-5ygso-jhgm3-vowdo-hmrop-cnsfh-3bxhf-iae"
    }
    const bucket_url = prefix + tok.bucket_url[1];
    
    // let res = {
    //     to: owner,
    //     metadata: prefix + bucket_url[1]
    // }

    // console.log(res);

    result += `record { to =  variant{ "principal" = principal "${owner}" }; metadata = opt blob "${bucket_url}"}; \n`
}

result += `})'`

console.log(result);

// const path = "./data1.json"
// fs.writeFileSync(path, JSON.stringify(data.tokens));

