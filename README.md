# BaseQL Airtable Block

## Airtable Pro

You can find us in the Airtable Marketplace:

[<img width="112" alt="Screen Shot 2020-11-16 at 15 49 31" src="https://user-images.githubusercontent.com/119117/99312204-516d0e00-2823-11eb-8e48-a6161356108d.png">](https://airtable.com/marketplace/blkJ16czOGRAFvBFg/baseql)

https://airtable.com/marketplace/blkJ16czOGRAFvBFg/baseql


## Custom Blocks Beta

In order to use Custom Blocks you need to [Sign Up for the Beta](https://airtable.com/shrEvq5IlQqYxWkaS) which applies for individual accounts, not organization's.

This might change after September 2020 as it becomes part of Pro plan and maybe a Developer plan is introduced: https://community.airtable.com/t/build-a-custom-block/30288/6

Also, you need to [install Node.js](https://nodejs.org/en/download/) if you haven't already.

### Install

To install the BaseQL Block on your Airtable base:

1. Create new "Custom Block" in your Base and call it "BaseQL"
  - <img width="200" alt="Screen Shot 2020-06-23 at 21 40 09" src="https://user-images.githubusercontent.com/119117/83694156-13559800-a5bd-11ea-8891-735d67417c58.png">
3. Follow instructions, with some adjustements:
  - Install the Blocks CLI globally: `npm install -g @airtable/blocks-cli`
  - Run the `block init` command this way:
    - `block init <BLOCKID> --template=https://github.com/BaseQL/baseql-airtable-block baseql`
    - Where `BLOCKID` is the `app/blk` pair
    - <img width="645" alt="Screen Shot 2020-06-23 at 21 40 09" src="https://user-images.githubusercontent.com/119117/85492164-5f7f7100-b59a-11ea-8b66-22a10e4dd096.png">
4. Build & deploy to Airtable servers with: `cd baseql && block release`

#### Video Walkthrough

[<img width="320" alt="Screen Shot 2020-06-23 at 22 36 51" src="https://user-images.githubusercontent.com/119117/85496582-2a771c80-b5a2-11ea-8362-68931ab2369a.png">](https://youtu.be/edb68AsfJXA)

https://youtu.be/edb68AsfJXA

### Run in multiple bases

Follow instructions at: https://airtable.com/developers/blocks/guides/run-in-multiple-bases
