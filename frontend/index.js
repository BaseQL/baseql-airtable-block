import React, { useEffect } from "react";
import { initializeBlock, useBase, Box } from "@airtable/blocks/ui";
import Setup from "./setup";

const BACKEND_HOST = "https://api.baseql.com";
const META_ENDPOINT = "/airtable/meta";

const sendMeta = (base) => {
  console.log(base);
  const meta = {
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

  useEffect(() => {
    sendMeta(base);
    base.watch(["schema", "tables"], () => sendMeta(base));
    base.tables.forEach((table) =>
      table.watch(["name", "description", "views", "fields"], () =>
        sendMeta(base)
      )
    );
  }, []);

  return (
    <Box border="none" backgroundColor="white" padding="20px" overflow="hidden">
      <div align="center">
        <img
          src={`${BACKEND_HOST}/images/baseql_logo_h_alpha.png`}
          alt="baseql logo"
          width="128"
        />
      </div>
      <Setup base={base} host={BACKEND_HOST} />
    </Box>
  );
}

initializeBlock(() => <BaseQL />);
