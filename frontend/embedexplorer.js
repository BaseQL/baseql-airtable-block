import React, { useState, useEffect } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { viewport } from '@airtable/blocks';
import {
  BACKEND_HOST,
  GRAPHQL_ENDPOINT
} from "./consts";
import { Tooltip, Input, Button } from "@airtable/blocks/ui";

const EmbedExplorer = ({ base }) => {
  useEffect(() => {
    viewport.enterFullscreenIfPossible();
  }, []);

  return <div align="center">
    <Tooltip
      content="Copy API URL to Clipboard"
      placementX={Tooltip.placements.CENTER}
      placementY={Tooltip.placements.TOP}
      shouldHideTooltipOnClick={true}
    >
      <CopyToClipboard text={`${BACKEND_HOST}${GRAPHQL_ENDPOINT}/${base.id}`}>
        <div style={{ display: "flex" }}>
          <Input
            id="api-url"
            type="url"
            value={`${BACKEND_HOST}${GRAPHQL_ENDPOINT}/${base.id}`}
            style={{cursor: 'pointer'}}
          />
          <Button icon="clipboard" aria-label="Copy API URL to Clipboard" />
        </div>
      </CopyToClipboard>
    </Tooltip>
    <div>
      <div style={{
        position: "absolute",
        height: "48px", 
        background: "linear-gradient(#f7f7f7, #e2e2e2)",
        borderBottom: "1px solid #d0d0d0"
      }}>
        <img
          src={`${BACKEND_HOST}/images/baseql_logo_h_alpha.png`}
          alt="baseql logo"
          width="108"
          style={{padding: "12px 0 0 12px"}}
        />
      </div>
      <iframe 
        src={`${BACKEND_HOST}${GRAPHQL_ENDPOINT}/${base.id}`} 
        width="100%"
        style={{border: "none", height: '100vh', width: '100vw'}}
      />
    </div>
  </div>
}

export default EmbedExplorer;
