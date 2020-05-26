# BaseQL Airtable Block

## Instructions

In order to install the Block on your Airtable:

1. Clone or download Zip source from github
2. Create new "Custom Block" in your Base and call it "BaseQL"
3. Follow instructions with some changes:
  - Install the Blocks CLI: `npm install -g @airtable/blocks-cli`
  - Replace `.block/remote.json` values with your own app/blk IDs
  - Verify it works locally with `block run`
4. Release `block release`

### Run in multiple bases

Follow instructions at: https://airtable.com/developers/blocks/guides/run-in-multiple-bases