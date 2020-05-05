import React, { useState, useEffect } from 'react';
import {
  initializeBlock,
  useBase,
  Box
} from '@airtable/blocks/ui';
import secrets from './secrets'
import Setup from './setup';

function BaseQL() {
  const base = useBase();

  (function sendMeta() {
    console.log(base);
    const meta = {
      base_id: base.id,
      name: base.name,
      tables: base.tables.map(({id, description, name, fields}) => ({
        id,
        description,
        name,
        fields: fields.map(({id, description, name, type, options}) => ({
          id,
          description,
          name,
          type,
          options
        }))
      }))
    }
    console.log(meta);
    window.localStorage.setItem('meta', JSON.stringify(meta));

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(meta)
    };

    return fetch(`${secrets.BACKEND_HOST}/api/airtable/meta/${base.id}`, requestOptions)
        .then(response => response.json())
        .then(data => { console.log(data) });
  })();

  return (
    <Box border="none" backgroundColor="white" padding="20px" overflow="hidden">
      <div align="center">
        <img
          src={`${secrets.BACKEND_HOST}/images/baseql_logo_h_alpha.png`}
          alt="baseql logo"
          width="128"
        />
      </div>
      <Setup base={base} />
    </Box>
  );
}

initializeBlock(() => <BaseQL />);

