/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/iotHubMappers";
import * as Parameters from "../models/parameters";
import { IotHubClientContext } from "../iotHubClientContext";

/** Class representing a IotHub. */
export class IotHub {
  private readonly client: IotHubClientContext;

  /**
   * Create a IotHub.
   * @param {IotHubClientContext} client Reference to the service client.
   */
  constructor(client: IotHubClientContext) {
    this.client = client;
  }

  /**
   * Perform manual fail over of given hub
   * @summary Manual Failover Fail over
   * @param iotHubName IotHub to fail over
   * @param failoverInput Region to failover to. Must be a azure DR pair
   * @param resourceGroupName resource group which Iot Hub belongs to
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  manualFailover(iotHubName: string, failoverInput: Models.FailoverInput, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginManualFailover(iotHubName,failoverInput,resourceGroupName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Perform manual fail over of given hub
   * @summary Manual Failover Fail over
   * @param iotHubName IotHub to fail over
   * @param failoverInput Region to failover to. Must be a azure DR pair
   * @param resourceGroupName resource group which Iot Hub belongs to
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginManualFailover(iotHubName: string, failoverInput: Models.FailoverInput, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        iotHubName,
        failoverInput,
        resourceGroupName,
        options
      },
      beginManualFailoverOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const beginManualFailoverOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/failover",
  urlParameters: [
    Parameters.iotHubName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "failoverInput",
    mapper: {
      ...Mappers.FailoverInput,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};
