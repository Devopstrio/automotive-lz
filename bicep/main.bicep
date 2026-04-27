// Devopstrio Automotive Landing Zone
// Cloud Operations Infrastructure Bicep

targetScope = 'subscription'

param location string = 'germanywestcentral'
param prefix string = 'auto-lz'
param env string = 'prd'

resource rgPlatform 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: 'rg-${prefix}-platform-${env}'
  location: location
  tags: {
    Mission: 'Connected Vehicle Telemetry operations'
  }
}

// 1. Heavy-Weight Azure IoT Hub arrays mapping MQTT ingress
module iotHub './modules/iothub.bicep' = {
  scope: rgPlatform
  name: 'iotHubDeployment'
  params: {
    location: location
    hubName: 'iot-${prefix}-${env}'
    sku: 'S3' // Enterprise massive scale telemetry ingress
    capacity: 2
  }
}

// 2. High-Performance Relational Datastore configured for PostGIS/Timeseries usage
module psql './modules/postgres.bicep' = {
  scope: rgPlatform
  name: 'postgresDeploy'
  params: {
    location: location
    serverName: 'psql-${prefix}-data-${env}'
    storageMB: 524288 // 512 GB Auto Grow Storage
  }
}

// 3. Central Web Application Hosting for IoT Translators, Analytics Engines, and Portals
module platform './modules/aks.bicep' = {
  scope: rgPlatform
  name: 'k8sDeploy'
  params: {
    location: location
    clusterName: 'aks-${prefix}-host-${env}'
  }
}

output portalUrl string = platform.outputs.portalFqdn
output iotHubEndpoint string = iotHub.outputs.brokerUri
