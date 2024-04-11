---
sidebar_position: 1
title: Creating a Flat Price Sale
description: AlphPad The Premier Launchpad on Alephium - Elevating Projects to New Heights!
---

# Creating a Flat Price Sale

## Introduction
This guide will walk you through the process of creating a token sale on AlphPad using the React-based frontend interface. 

> **Important Note:** All sale settings are final upon creation, with the exception of the whitelist. A sale must be initially created as either a whitelist (WL) or non-WL sale, and this choice is immutable. However, the whitelist merkle root can be updated until the sale start date.

## Steps to Create a Sale

### 1. Accessing the Sale Creation Page
Navigate to the "Create a Sale" section on the AlphPad Launchpad.

### 2. Filling in Sale Details
- **Token ID**: Input the token's unique ID.
- **Listing Fee**: Automatically calculated to prevent spam submissions.
- **Token Name, Symbol & Decimals**: Displayed based on the Token ID.
- **Token Price in ALPH**: Set your token’s price.
- **Maximum and Minimum ALPH Raise**: Specify your fundraising targets.
- **Amount of Tokens to Sell**: Calculated based on the max raise and token price.

### 3. Setting Sale Timeframe
Choose the start and end dates and times for your sale. These are adjusted to your local timezone. For whitelist sales, ensure there is adequate time to collect and process whitelist registrants before the sale starts.

### 4. Whitelist Sale Options (Optional)
- Enable whitelist settings if desired.
- Set the start and end dates for the whitelist period.
- Determine the maximum bid for whitelisted buyers.

**Whitelist Sale Dynamics**: During this period, only whitelisted accounts can buy tokens. If the whitelist end date and sale end date are the same, there will be no public sale phase. If the whitelist end date is set earlier than the sale end date, only whitelisted users can buy during the initial period, with the remainder of the sale open to the public. This allows for the sale of any remaining tokens after the whitelist phase.


### 5. Creating the Sale
Click “Create Sale” and wait for the process to complete.

### 6. Listing Information Submission
After creating the sale, submit your listing information via a PR to the [AlphPad Listing GitHub repository](https://github.com/AlphPad/listing.alphpad.com/tree/mainnet).

**Note** that your sale won’t be visible on the AlphPad website until the PR is merged on GitHub.

## Need Help?
If you need assistance or have questions, feel free to reach out to our team on Telegram or Discord (links available in the website footer).


