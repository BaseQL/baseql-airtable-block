import React, { useState, useEffect } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { viewport } from '@airtable/blocks';
import {
  BACKEND_HOST,
  GRAPHQL_ENDPOINT
} from "./consts";
import { Tooltip, Input, Button, Text, Dialog, Heading } from "@airtable/blocks/ui";

const EmbedExplorer = ({ base, onExit }) => {
  const [showLogo, setShowLogo] = useState(false);
  const [showIframe, setShowIframe] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    viewport.enterFullscreenIfPossible();
  }, []);

  // Check if the iframe is accessible before showing it
  useEffect(() => {
    fetch(`${BACKEND_HOST}${GRAPHQL_ENDPOINT}/${base.id}`, {
      method: "GET",
      headers: { "Accept": "text/html" }
    })
      .then(response => {
        if (!response.ok) {
          response.json().then(error => {
            const errorMessage = error.error || JSON.stringify(error.errors || error);
            setError(errorMessage);
          });
        }
        else {
          setShowIframe(true);
        }
      });
  }, [base.id]);

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
            style={{ cursor: 'pointer' }}
          />
          <Button icon="clipboard" aria-label="Copy API URL to Clipboard" />
        </div>
      </CopyToClipboard>
    </Tooltip>
    <div>
      {error && (
        <Dialog onClose={() => onExit()} width="320px">
          <Dialog.CloseButton />
          <Heading>Explorer Initialization Error</Heading>
          <Text variant="paragraph">
            {error}
          </Text>
          <Button onClick={() => onExit()}>Close</Button>
        </Dialog>
      )}
      {showLogo && (
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
            style={{ padding: "12px 0 0 12px" }}
          />
        </div>
      )}
      {showIframe && (<iframe
        src={`${BACKEND_HOST}${GRAPHQL_ENDPOINT}/${base.id}`}
        onLoad={() => setShowLogo(true)}
        width="100%"
        style={{ border: "none", height: '100vh', width: '100vw' }}
      />
      )}
    </div>
  </div>
}

export default EmbedExplorer;
