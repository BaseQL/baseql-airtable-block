import React, { useEffect } from "react";
import { viewport } from '@airtable/blocks';
import {
  BACKEND_HOST,
  GRAPHQL_ENDPOINT
} from "./consts";

const EmbedExplorer = ({ base }) => {
  useEffect(() => {
    viewport.enterFullscreenIfPossible();
  }, []);

  return <>
    <iframe 
      src={`${BACKEND_HOST}${GRAPHQL_ENDPOINT}/${base.id}`} 
      width="100%"
      style={{border: "none", height: '100vh', width: '100vw'}}
    />
  </>
}

export default EmbedExplorer;
