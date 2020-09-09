/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const Location: msRest.CompositeMapper = {
  serializedName: "Location",
  type: {
    name: "Composite",
    className: "Location",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      subscriptionId: {
        readOnly: true,
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        readOnly: true,
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      latitude: {
        readOnly: true,
        serializedName: "latitude",
        type: {
          name: "String"
        }
      },
      longitude: {
        readOnly: true,
        serializedName: "longitude",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SubscriptionPolicies: msRest.CompositeMapper = {
  serializedName: "SubscriptionPolicies",
  type: {
    name: "Composite",
    className: "SubscriptionPolicies",
    modelProperties: {
      locationPlacementId: {
        readOnly: true,
        serializedName: "locationPlacementId",
        type: {
          name: "String"
        }
      },
      quotaId: {
        readOnly: true,
        serializedName: "quotaId",
        type: {
          name: "String"
        }
      },
      spendingLimit: {
        readOnly: true,
        serializedName: "spendingLimit",
        type: {
          name: "Enum",
          allowedValues: [
            "On",
            "Off",
            "CurrentPeriodOff"
          ]
        }
      }
    }
  }
};

export const Subscription: msRest.CompositeMapper = {
  serializedName: "Subscription",
  type: {
    name: "Composite",
    className: "Subscription",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      subscriptionId: {
        readOnly: true,
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      },
      displayName: {
        readOnly: true,
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      state: {
        readOnly: true,
        serializedName: "state",
        type: {
          name: "Enum",
          allowedValues: [
            "Enabled",
            "Warned",
            "PastDue",
            "Disabled",
            "Deleted"
          ]
        }
      },
      subscriptionPolicies: {
        serializedName: "subscriptionPolicies",
        type: {
          name: "Composite",
          className: "SubscriptionPolicies"
        }
      },
      authorizationSource: {
        serializedName: "authorizationSource",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TenantIdDescription: msRest.CompositeMapper = {
  serializedName: "TenantIdDescription",
  type: {
    name: "Composite",
    className: "TenantIdDescription",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      tenantId: {
        readOnly: true,
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponseBody: msRest.CompositeMapper = {
  serializedName: "ErrorResponseBody",
  type: {
    name: "Composite",
    className: "ErrorResponseBody",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorResponse"
        }
      }
    }
  }
};

export const CanceledSubscriptionId: msRest.CompositeMapper = {
  serializedName: "CanceledSubscriptionId",
  type: {
    name: "Composite",
    className: "CanceledSubscriptionId",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RenamedSubscriptionId: msRest.CompositeMapper = {
  serializedName: "RenamedSubscriptionId",
  type: {
    name: "Composite",
    className: "RenamedSubscriptionId",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EnabledSubscriptionId: msRest.CompositeMapper = {
  serializedName: "EnabledSubscriptionId",
  type: {
    name: "Composite",
    className: "EnabledSubscriptionId",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SubscriptionName: msRest.CompositeMapper = {
  serializedName: "SubscriptionName",
  type: {
    name: "Composite",
    className: "SubscriptionName",
    modelProperties: {
      subscriptionName: {
        serializedName: "subscriptionName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "Operation_display",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      }
    }
  }
};

export const OperationListResult: msRest.CompositeMapper = {
  serializedName: "OperationListResult",
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PutAliasRequestProperties: msRest.CompositeMapper = {
  serializedName: "PutAliasRequestProperties",
  type: {
    name: "Composite",
    className: "PutAliasRequestProperties",
    modelProperties: {
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      workload: {
        serializedName: "workload",
        type: {
          name: "String"
        }
      },
      billingScope: {
        serializedName: "billingScope",
        type: {
          name: "String"
        }
      },
      subscriptionId: {
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PutAliasRequest: msRest.CompositeMapper = {
  serializedName: "PutAliasRequest",
  type: {
    name: "Composite",
    className: "PutAliasRequest",
    modelProperties: {
      properties: {
        required: true,
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "PutAliasRequestProperties"
        }
      }
    }
  }
};

export const PutAliasResponseProperties: msRest.CompositeMapper = {
  serializedName: "PutAliasResponseProperties",
  type: {
    name: "Composite",
    className: "PutAliasResponseProperties",
    modelProperties: {
      subscriptionId: {
        readOnly: true,
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PutAliasResponse: msRest.CompositeMapper = {
  serializedName: "PutAliasResponse",
  type: {
    name: "Composite",
    className: "PutAliasResponse",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "PutAliasResponseProperties"
        }
      }
    }
  }
};

export const PutAliasListResult: msRest.CompositeMapper = {
  serializedName: "PutAliasListResult",
  type: {
    name: "Composite",
    className: "PutAliasListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PutAliasResponse"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LocationListResult: msRest.CompositeMapper = {
  serializedName: "LocationListResult",
  type: {
    name: "Composite",
    className: "LocationListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Location"
            }
          }
        }
      }
    }
  }
};

export const SubscriptionListResult: msRest.CompositeMapper = {
  serializedName: "SubscriptionListResult",
  type: {
    name: "Composite",
    className: "SubscriptionListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Subscription"
            }
          }
        }
      },
      nextLink: {
        required: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TenantListResult: msRest.CompositeMapper = {
  serializedName: "TenantListResult",
  type: {
    name: "Composite",
    className: "TenantListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TenantIdDescription"
            }
          }
        }
      },
      nextLink: {
        required: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};
