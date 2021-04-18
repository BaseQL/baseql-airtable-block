import React, { useState } from "react";
import {
  useSynced,
  Link,
  FormField,
  Input,
  Button,
  Heading,
  TextButton,
  Box,
  Text,
  Icon,
} from "@airtable/blocks/ui";
import {
  BACKEND_HOST,
  APP_HOST,
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
      <Heading 
        size="small" 
        textColor="light"
        style={{
          borderBottom: "1px solid lightgray",
          paddingBottom: "4px",
          marginBottom: "16px"
        }}
      >
          Settings
      </Heading>
      {/* <FormField label="Base:">
        <Input value={base.name} size="large" enabled="false" />
      </FormField> */}
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
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button
          onClick={() => onLaunch()}
          variant="default"
          size="large"
        >
          GraphQL Explorer
        </Button>
        <Button
          onClick={() =>
            window.open(
              `${APP_HOST}/airtable/${base.id}`,
              "_blank"
            )
          }
          variant="primary"
          size="large"
          disabled={!apiKey}
          style={{ marginLeft: "8px" }}
          backgroundColor="purple"
        >
          🚀 Open in BaseQL
        </Button>
      </div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="thick"
        backgroundColor="purpleLight2"
        borderRadius="large"
        padding={2}
        margin={4}
        overflow="hidden"
      >
        <Text>
          When <Link href={`${APP_HOST}/airtable/${base.id}`} target="_blank"><b>signing up</b></Link> to BaseQL you can enable:
          <ul style={{listStyleType: "none"}}>
            <li><Icon name="cube" size={12} /> <Link href="https://docs.baseql.com/usage/explorer" target="_blank">Advanced GraphiQL Explorer</Link></li>
            <li><Icon name="lock" size={12} /> <Link href="https://docs.baseql.com/usage/settings" target="_blank">Secret Token Authentication</Link></li>
            <li><Icon name="edit" size={12} /> <Link href="https://docs.baseql.com/usage/mutations" target="_blank">Mutations (create, update, delete)</Link></li>
          </ul>
        </Text>
      </Box>
      <div style={{marginBottom: "20px", marginTop: "30px", textAlign: "center"}}>
        <TextButton icon="help">
          <Link
            href={`mailto:support@baseql.com`}
            target="_blank"
            size="medium"
          >
            support@baseql.com
          </Link>
        </TextButton>
        &nbsp;&nbsp;&nbsp;
        <TextButton icon="twitter">
          <Link
            href={`https://twitter.com/baseql`}
            target="_blank"
            size="medium"
          >
            @BaseQL
          </Link>
        </TextButton>
      </div>
     
      <div style={{marginBottom: "20px", marginTop: "30px", textAlign: "center"}}>
        <Link
          href={`https://www.google.com/url?q=https%3A%2F%2Fwww.generateprivacypolicy.com%2Flive.php%3Ftoken%3DilnPOc9KxTyb2x5NPC19INMUFLd8oZd8&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNGPVMt8Z2gC43ssuG4Vce11gmyhsw`}
          target="_blank"
          rel="noopener noreferrer"
          size="small"
        >
        Privacy Policy
        </Link>
        &nbsp;|&nbsp;  
        <Link
          href={`https://www.baseql.com/terms-of-use`}
          target="_blank"
          rel="noopener noreferrer"
          size="small"
        >
          Terms of Use
        </Link>
      </div>
    </div>
  );
};

export default Setup;
