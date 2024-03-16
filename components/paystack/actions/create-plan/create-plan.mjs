import paystack from "../../paystack.app.mjs";

export default {
    key: "paystack-create-plan",
    name: "Create Plan",
    description: "Create a new plan. [See the documentation](https://paystack.com/docs/api/plan/#create)",
    version: "0.0.1",
    type: "action",
    props: {
        paystack,
        name: {
            propDefinition: [
                paystack,
                "name",
            ]
        },
        amount: {
            propDefinition: [
                paystack,
                "amount",
            ]
        },
        interval: {
            propDefinition: [
                paystack,
                "interval",
            ]
        },
        currency: {
            propDefinition: [
                paystack,
                "currency",
            ],
            optional: true
        },
        description: {
            propDefinition: [
                paystack,
                "description",
            ],
            optional: true
        },
        sendInvoices: {
            propDefinition: [
                paystack,
                "sendInvoices",
            ],
            optional: true
        },
        invoiceLimit: {
            propDefinition: [
                paystack,
                "invoiceLimit",
            ],
            optional: true
        },
    },
    async run({ $ }) {
        const response = await this.paystack.createPlan({
            $,
            data: {
                name: this.name,
                amount: this.amount,
                interval: this.interval,
                currency: this.currency,
                description: this.description,
                send_invoices: this.sendInvoices,
                invoice_limit: this.invoiceLimit,
            }
            
        });
    
        $.export("$summary", `Successfully created plan with code ${response.data.plan_code}`);
        return response;
    },
}