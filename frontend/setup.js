import React, { useState } from "react";
import {
  useSynced,
  Link,
  FormField,
  Input,
  Button,
} from "@airtable/blocks/ui";

const GRAPHQL_ENDPOINT = "/airtable/graphql";

const Setup = ({ base, host }) => {
  const [apiKey, setAPIKey, canSetAPIKey] = useSynced('apiKey');
  const [inputType, setInputType] = useState("password");
  const [iconType, setIconType] = useState("hide");

  return (
    <>
      <FormField label="Base:">
        <Input value={base.name} size="large" enabled="false" />
      </FormField>
      <FormField label="API Key:">
        <div style={{ display: "flex" }}>
          <Input
            type={inputType}
            value={apiKey}
            size="large"
            onChange={(e) => setAPIKey(e.target.value)}
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
        <div
          style={{
            textAlign: "right",
            position: "absolute",
            right: "20px",
            width: "100%",
          }}
        >
          <Link
            href={`https://airtable.com/account`}
            target="_blank"
            size="small"
          >
            Where can I find my API key?
          </Link>
        </div>
      </FormField>
      <span>*API key stored on Airtable Block, not on BaseQL servers</span>
      <br />
      <br />
      <div align="center">
        <Button
          onClick={() =>
            window.open(
              `${host}${GRAPHQL_ENDPOINT}/${base.id}?key=${apiKey}`,
              "_blank"
            )
          }
          variant="primary"
          size="large"
          disabled={!apiKey}
        >
          🚀 Launch GraphQL
        </Button>
      </div>
    </>
  );
};

export default Setup;
