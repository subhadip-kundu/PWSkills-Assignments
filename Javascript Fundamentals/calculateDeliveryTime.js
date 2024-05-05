function calculateDeliveryTime(packageType) {
  let deliveryTime;

  switch (packageType.toLowerCase()) {
    case "standard":
      deliveryTime = "3-5 days";
      break;
    case "express":
      deliveryTime = "1-2 days";
      break;
    case "overnight":
      deliveryTime = "next day";
      break;
    default:
      deliveryTime =
        packageType !== "unknown"
          ? "Invalid option selected please check the input once again.It must include (standard/express/overnight)"
          : "not available";
  }

  console.log(
    `For ${packageType} package, estimated delivery time is ${deliveryTime}.`
  );
}

// Test the function with different package types
calculateDeliveryTime("standard");
calculateDeliveryTime("express");
calculateDeliveryTime("overnight");
calculateDeliveryTime("unknown");
