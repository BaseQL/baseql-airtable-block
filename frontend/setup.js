import React, { useState, useEffect } from "react";
import {
  Heading,
  Link,
  FormField,
  Input,
  Button,
} from "@airtable/blocks/ui";
import secrets from './secrets'

const Setup = ({ base }) => {
  const [apiKey, setAPIKey] = useState("");

  return (
    <>
      <Heading>Setup</Heading>
      <FormField label="Base:">
        <Input value={base.name} size="large" enabled="false" />
      </FormField>
      <FormField label="API Key:">
        <Input
          value={apiKey}
          size="large"
          onChange={(e) => setAPIKey(e.target.value)}
        />
        <div
          style={{
            textAlign: "right",
            position: "absolute",
            right: "20px",
            width: "100%",
          }}
        >
          <Link
            href={`https://airtable.com/${base.id}/api/docs`}
            target="_blank"
            size="small"
          >
            Where can I find my API key?
          </Link>
        </div>
      </FormField>
      <div align="center">
        <Button
          onClick={() =>
            window.open(`${secrets.BACKEND_HOST}/api/airtable/graphql/${base.id}?key=${apiKey}`, "_blank")
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
