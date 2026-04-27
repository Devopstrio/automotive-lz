-- Devopstrio Automotive Landing Zone
-- Connected Cloud Metadata Schema
-- Target: PostgreSQL 14+ / Time-Scale DB

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Base Organizational Mapping (Franchises, Plant Groups, Brands)
CREATE TABLE IF NOT EXISTS tenants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) UNIQUE NOT NULL,
    type VARCHAR(50) DEFAULT 'OEM', -- OEM, Dealer, Tier1_Supplier
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(50) DEFAULT 'Operator', -- PlantManager, FleetAnalyst, DealerAdmin
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- SMART FACTORY & AUTOMATED MANUFACTURING
-- ==========================================
CREATE TABLE IF NOT EXISTS factories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    name VARCHAR(255) NOT NULL,
    region VARCHAR(100) NOT NULL,
    operational_status VARCHAR(50) DEFAULT 'Active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS assembly_lines (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    factory_id UUID REFERENCES factories(id) ON DELETE CASCADE,
    line_identifier VARCHAR(100) NOT NULL,
    current_oee_score FLOAT DEFAULT 0.0, -- Overall Equipment Effectiveness
    status VARCHAR(50) DEFAULT 'Running'
);

-- ==========================================
-- CONNECTED VEHICLES & FLEETS
-- ==========================================
CREATE TABLE IF NOT EXISTS vehicles (
    vin VARCHAR(17) PRIMARY KEY,
    tenant_id UUID REFERENCES tenants(id), -- Fleet Owner or Main OEM
    model_name VARCHAR(100) NOT NULL,
    manufacture_year INT NOT NULL,
    firmware_version VARCHAR(50) DEFAULT '1.0.0',
    battery_capacity_kwh FLOAT,
    status VARCHAR(50) DEFAULT 'Factory_Floor', -- Factory_Floor, Transit, Dealer, Customer
    last_telemetry_sync TIMESTAMP WITH TIME ZONE
);

CREATE TABLE IF NOT EXISTS telemetry_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    vin VARCHAR(17) REFERENCES vehicles(vin) ON DELETE CASCADE,
    timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
    odometer_km FLOAT NOT NULL,
    battery_level_percent FLOAT,
    latitude FLOAT,
    longitude FLOAT,
    engine_temp_celsius FLOAT,
    raw_payload JSONB
);

-- ==========================================
-- DEALER MANAGEMENT SYSTEM (DMS)
-- ==========================================
CREATE TABLE IF NOT EXISTS dealers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    dealership_name VARCHAR(255) NOT NULL,
    address_line TEXT NOT NULL,
    service_bay_count INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS inventory (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    dealer_id UUID REFERENCES dealers(id) ON DELETE CASCADE,
    vin VARCHAR(17) REFERENCES vehicles(vin),
    arrival_date TIMESTAMP WITH TIME ZONE,
    sale_status VARCHAR(50) DEFAULT 'In_Stock'
);

-- Optimization Indexes
CREATE INDEX idx_telemetry_vin ON telemetry_events(vin);
CREATE INDEX idx_telemetry_timestamp ON telemetry_events(timestamp);
CREATE INDEX idx_vehicles_status ON vehicles(status);
