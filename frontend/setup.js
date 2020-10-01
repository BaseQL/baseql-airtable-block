import React, { useState } from "react";
import {
  useSynced,
  Link,
  FormField,
  Input,
  Button,
} from "@airtable/blocks/ui";
import {
  BACKEND_HOST,
  META_ENDPOINT
} from "./consts";

const Setup = ({ base, onLaunch }) => {
  const [apiKey, setAPIKey, canSetAPIKey] = useSynced('apiKey');
  const [inputType, setInputType] = useState("text");
  const [iconType, setIconType] = useState("hide");

  const updateAPIkey = async (key) => {
    setAPIKey(key);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({api_key: key}),
    };

    return fetch(`${BACKEND_HOST}${META_ENDPOINT}/${base.id}`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
  };

  return (
    <div style={{margin: "10px"}}>
      <FormField label="Base:">
        <Input value={base.name} size="large" enabled="false" />
      </FormField>
      <FormField label="API Key:">
        <div style={{ display: "flex" }}>
          <Input
            type={inputType}
            value={apiKey}
            size="large"
            onChange={(e) => updateAPIkey(e.target.value)}
            disabled={!canSetAPIKey}
          />
          <Button
            onClick={() => {
              setInputType(inputType === "password" ? "text" : "password");
              setIconType(inputType === "password" ? "hide1" : "hide");
            }}
            size="large"
            icon={iconType}
            aria-label="Edit"
            style={{ marginLeft: "8px" }}
          />
        </div>
      </FormField>
        <div
          style={{
            textAlign: "right",
            right: "20px",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          <Link
            href={`https://airtable.com/account`}
            target="_blank"
            size="medium"
          >
            Where can I find my API key?
          </Link>
        </div>
      <div align="center">
        <Button
          onClick={() => onLaunch()}
          variant="primary"
          size="large"
          disabled={!apiKey}
        >
          🚀 Launch GraphQL
        </Button>
      </div>
    </div>
  );
};

export default Setup;
