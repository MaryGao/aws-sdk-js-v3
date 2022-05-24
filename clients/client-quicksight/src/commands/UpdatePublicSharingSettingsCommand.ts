// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { UpdatePublicSharingSettingsRequest, UpdatePublicSharingSettingsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdatePublicSharingSettingsCommand,
  serializeAws_restJson1UpdatePublicSharingSettingsCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

export interface UpdatePublicSharingSettingsCommandInput extends UpdatePublicSharingSettingsRequest {}
export interface UpdatePublicSharingSettingsCommandOutput
  extends UpdatePublicSharingSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Use the UpdatePublicSharingSettings operation to enable or disable the public sharing settings of an Amazon QuickSight dashboard.</p>
 *          <p>To use this operation, enable session capacity pricing on your Amazon QuickSight account.</p>
 *          <p>Before you can enable public sharing on your account, you need to allow public sharing permissions to an administrative user in the IAM console. For more information on using IAM with Amazon QuickSight, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/security_iam_service-with-iam.html">Using Amazon QuickSight with IAM</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdatePublicSharingSettingsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdatePublicSharingSettingsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdatePublicSharingSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePublicSharingSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdatePublicSharingSettingsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 */
export class UpdatePublicSharingSettingsCommand extends $Command<
  UpdatePublicSharingSettingsCommandInput,
  UpdatePublicSharingSettingsCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdatePublicSharingSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePublicSharingSettingsCommandInput, UpdatePublicSharingSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "UpdatePublicSharingSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePublicSharingSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdatePublicSharingSettingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePublicSharingSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdatePublicSharingSettingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdatePublicSharingSettingsCommandOutput> {
    return deserializeAws_restJson1UpdatePublicSharingSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}