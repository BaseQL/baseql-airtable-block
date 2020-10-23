import React, { useState, useEffect } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { viewport } from '@airtable/blocks';
import {
  BACKEND_HOST,
  GRAPHQL_ENDPOINT
} from "./consts";

const EmbedExplorer = ({ base }) => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    viewport.enterFullscreenIfPossible();
  }, []);

  return <div align="center">
    <CopyToClipboard
      text={`${BACKEND_HOST}${GRAPHQL_ENDPOINT}/${base.id}`} 
      onCopy={() => setCopied(!copied)}>
      <pre align="center">
        &nbsp;API URL:&nbsp;
        <code style={{backgroundColor: '#eee', padding: '4px', cursor: 'pointer'}}>
          {`${BACKEND_HOST.replace(/^https?:\/\//,'')}${GRAPHQL_ENDPOINT}/${base.id}`}
        </code>
        <span style={{color: 'red', display: copied ? 'block' : 'none'}}> Copied to clipboard!</span>
      </pre>
    </CopyToClipboard>
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
