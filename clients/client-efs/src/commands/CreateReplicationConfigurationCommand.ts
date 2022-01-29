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

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { CreateReplicationConfigurationRequest, ReplicationConfigurationDescription } from "../models/models_0";
import {
  deserializeAws_restJson1CreateReplicationConfigurationCommand,
  serializeAws_restJson1CreateReplicationConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface CreateReplicationConfigurationCommandInput extends CreateReplicationConfigurationRequest {}
export interface CreateReplicationConfigurationCommandOutput
  extends ReplicationConfigurationDescription,
    __MetadataBearer {}

/**
 * <p>Creates a replication configuration that replicates an existing EFS file
 *       system to a new, read-only file system. For more information, see
 *       <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-replication.html">Amazon EFS replication</a>.
 *     The replication configuration specifies the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Source file system</b> - an existing
 *         EFS file system that you want replicated. The source file system cannot be a destination file system
 *       in an existing replication configuration.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Destination file system configuration</b>
 *         - the configuration of the destination file system to which the source file system
 *         will be replicated. There can only be one destination file system in a replication
 *         configuration.</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <b>Amazon Web Services Region</b> - The Amazon Web Services Region in which the destination
 *           file system is created. EFS Replication is available in all Amazon Web Services Region that Amazon EFS is available in, except the following regions:
 *           Asia Pacific (Hong Kong) Europe (Milan), Middle East (Bahrain), Africa (Cape Town), and Asia Pacific (Jakarta).</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Availability zone</b> - If you want the destination file system to use
 *           One Zone availability and durability, you must specify the Availability Zone to create the file system in.
 *           For more information about EFS storage classes, see <a href="https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html">
 *             Amazon EFS storage classes</a> in the <i>Amazon EFS User Guide</i>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Encryption</b> - All destination file systems are
 *           created with encryption at rest enabled. You can specify the
 *           KMS key that is used to encrypt the destination file system.
 *           Your service-managed KMS key for Amazon EFS is used if you don't specify a KMS key.
 *           You cannot change this after the file system is created.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *
 *          <p>The following properties are set by default:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Performance mode</b> - The destination file system's
 *         performance mode will match that of the source file system, unless the destination file
 *         system uses One Zone storage. In that case, the <i>General Purpose</i>
 *         performance mode is used. The Performance mode cannot be changed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Throughput mode</b> - The destination file system
 *         use the Bursting throughput mode by default. You can modify the throughput mode once the file system
 *         is created.</p>
 *             </li>
 *          </ul>
 *
 *          <p>The following properties are turned off by default:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Lifecycle management</b> - EFS lifecycle
 *         management and intelligent tiering are not enabled on the destination file system. You can enable
 *         EFS lifecycle management and intelligent tiering after the destination file system is created.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Automatic backups</b> - Automatic daily backups
 *         not enabled on the destination file system. You can change this setting after the file system is created.</p>
 *             </li>
 *          </ul>
 *
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-replication.html">Amazon EFS replication</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, CreateReplicationConfigurationCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, CreateReplicationConfigurationCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new CreateReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 */
export class CreateReplicationConfigurationCommand extends $Command<
  CreateReplicationConfigurationCommandInput,
  CreateReplicationConfigurationCommandOutput,
  EFSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateReplicationConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateReplicationConfigurationCommandInput, CreateReplicationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "CreateReplicationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateReplicationConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ReplicationConfigurationDescription.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateReplicationConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateReplicationConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateReplicationConfigurationCommandOutput> {
    return deserializeAws_restJson1CreateReplicationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}