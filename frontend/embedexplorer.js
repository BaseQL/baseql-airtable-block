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

  return <>
    <CopyToClipboard
      text={`${BACKEND_HOST}${GRAPHQL_ENDPOINT}/${base.id}`} 
      onCopy={() => setCopied(true)}>
      <pre align="center">
        GraphQL API URL:&nbsp;
        <code style={{backgroundColor: '#eee', padding: '4px', cursor: 'pointer'}}>
          {`${BACKEND_HOST}${GRAPHQL_ENDPOINT}/${base.id}`}
        </code>
        <span style={{color: copied ? 'red' : 'white'}}> Copied to clipboard!</span>
      </pre>
    </CopyToClipboard>
    <iframe 
      src={`${BACKEND_HOST}${GRAPHQL_ENDPOINT}/${base.id}`} 
      width="100%"
      style={{border: "none", height: '100vh', width: '100vw'}}
    />
  </>
}

export default EmbedExplorer;
