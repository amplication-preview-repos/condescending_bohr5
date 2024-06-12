import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EdgeList } from "./edge/EdgeList";
import { EdgeCreate } from "./edge/EdgeCreate";
import { EdgeEdit } from "./edge/EdgeEdit";
import { EdgeShow } from "./edge/EdgeShow";
import { NodeList } from "./node/NodeList";
import { NodeCreate } from "./node/NodeCreate";
import { NodeEdit } from "./node/NodeEdit";
import { NodeShow } from "./node/NodeShow";
import { FlowList } from "./flow/FlowList";
import { FlowCreate } from "./flow/FlowCreate";
import { FlowEdit } from "./flow/FlowEdit";
import { FlowShow } from "./flow/FlowShow";
import { BotList } from "./bot/BotList";
import { BotCreate } from "./bot/BotCreate";
import { BotEdit } from "./bot/BotEdit";
import { BotShow } from "./bot/BotShow";
import { IntegrationServiceList } from "./integrationService/IntegrationServiceList";
import { IntegrationServiceCreate } from "./integrationService/IntegrationServiceCreate";
import { IntegrationServiceEdit } from "./integrationService/IntegrationServiceEdit";
import { IntegrationServiceShow } from "./integrationService/IntegrationServiceShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ChatbotFlowService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Edge"
          list={EdgeList}
          edit={EdgeEdit}
          create={EdgeCreate}
          show={EdgeShow}
        />
        <Resource
          name="Node"
          list={NodeList}
          edit={NodeEdit}
          create={NodeCreate}
          show={NodeShow}
        />
        <Resource
          name="Flow"
          list={FlowList}
          edit={FlowEdit}
          create={FlowCreate}
          show={FlowShow}
        />
        <Resource
          name="Bot"
          list={BotList}
          edit={BotEdit}
          create={BotCreate}
          show={BotShow}
        />
        <Resource
          name="IntegrationService"
          list={IntegrationServiceList}
          edit={IntegrationServiceEdit}
          create={IntegrationServiceCreate}
          show={IntegrationServiceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
