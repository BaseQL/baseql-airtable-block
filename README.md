# BaseQL Airtable Block

## Instructions

### Prerequisites

In order to use Custom Blocks you need to [Sign Up for the Beta](https://airtable.com/shrEvq5IlQqYxWkaS) which applies for individual accounts, not organization's.

This might change after September 2020 as it becomes part of Pro plan and maybe a Developer plan is introduced: https://community.airtable.com/t/build-a-custom-block/30288/6

### Install

To install the BaseQL Block on your Airtable base:

1. Clone or download Zip source from github:
  - [github.com/BaseQL/baseql-airtable-block/archive/master.zip](https://github.com/BaseQL/baseql-airtable-block/archive/master.zip)
2. Create new "Custom Block" in your Base and call it "BaseQL"
  - ![](https://user-images.githubusercontent.com/119117/83694156-13559800-a5bd-11ea-8891-735d67417c58.png)
3. Follow instructions, with some adjustements:
  - Install the Blocks CLI globally: `npm install -g @airtable/blocks-cli`
  - Replace `.block/remote.json` values with your own app/blk IDs
  - Verify it works locally with `block run`
4. Build & deploy to Airtable servers using: `block release`

### Run in multiple bases

Follow instructions at: https://airtable.com/developers/blocks/guides/run-in-multiple-bases