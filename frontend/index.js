import React, { useState, useEffect } from "react";
import { initializeBlock, useBase, useSettingsButton, Box } from "@airtable/blocks/ui";
import {globalConfig} from '@airtable/blocks';
import {} from '@airtable/blocks/ui';
import Setup from "./setup";
import EmbedExplorer from "./embedexplorer";
import { BACKEND_HOST, META_ENDPOINT } from "./consts";

const sendMeta = (base) => {
  const meta = {
    timestamp: Date.now(),
    base_id: base.id,
    name: base.name,
    tables: base.tables.map(({ id, description, name, fields }) => ({
      id,
      description,
      name,
      fields: fields.map(({ id, description, name, type, options }) => ({
        id,
        description,
        name,
        type,
        options,
      })),
    })),
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(meta),
  };

  return fetch(`${BACKEND_HOST}${META_ENDPOINT}/${base.id}`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

function BaseQL() {
  const base = useBase();
  const [isShowingSettings, setIsShowingSettings] = useState(true);

  useEffect(() => {
    sendMeta(base);
    base.watch(["schema", "tables"], () => sendMeta(base));
    base.tables.forEach((table) =>
      table.watch(["name", "description", "views", "fields"], () =>
        sendMeta(base)
      )
    );
  }, []);

  useSettingsButton(function() {
    setIsShowingSettings(!isShowingSettings);
  });

  return (
    <Box border="none" backgroundColor="white" padding="0" overflow="hidden" style={{ height: '100vh', width: '100vw' }} >
      {isShowingSettings
        && <Setup base={base} onLaunch={() => setIsShowingSettings(!isShowingSettings)} /> 
        || <EmbedExplorer base={base} />}
    </Box>
  );
}

initializeBlock(() => <BaseQL />);
