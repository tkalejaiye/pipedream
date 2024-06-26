import common from "../common/new-message.mjs";
import sampleEmit from "./test-event.mjs";

export default {
  ...common,
  key: "zoho_cliq-new-direct-message",
  name: "New Direct Message",
  description: "Emit new event when a new direct message is received. [See the documentation](https://www.zoho.com/cliq/help/restapi/v2/#Get_Messages)",
  version: "0.0.1",
  type: "source",
  dedupe: "unique",
  props: {
    ...common.props,
    chat: {
      propDefinition: [
        common.props.app,
        "chat",
      ],
    },
  },
  methods: {
    ...common.methods,
    getChatId() {
      return this.chat;
    },
  },
  sampleEmit,
};
