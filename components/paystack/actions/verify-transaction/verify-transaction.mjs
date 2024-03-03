import paystack from "../../app/paystack.app.mjs";

export default {
  key: "paystack-verify-transaction",
  name: "Verify Transaction",
  description:
    "Confirm the status of a transaction. [See the documentation](https://paystack.com/docs/api/transaction/#verify)",
  version: "0.0.2",
  type: "action",
  props: {
    paystack,
    reference: {
      propDefinition: [paystack, "reference"],
      optional: true,
    },
  },
  async run({ $ }) {
    const response = await this.paystack.verifyTransaction({
      $,
      reference: this.reference,
    });

    $.export("$summary", `Transaction verified`);
    return response;
  },
};
