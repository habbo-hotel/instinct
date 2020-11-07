export interface Permissions {
  websiteAdminClient: boolean;
  websiteShowStaff: boolean;
  websiteShowAdminPanel: boolean;
  websiteManageNews: boolean;
  websiteManageRanks: boolean;
  websiteManageUsers: boolean;
  websiteManageBans: boolean;
  websiteManageConfig: boolean;
  websiteManageBetaCodes: boolean;
  // RP Permissions
  websiteCreateBusiness: boolean; // Create own business
  websiteManageBusiness: boolean; // Manage businesses on admin
}

export const examplePermissions: Permissions = {
  websiteAdminClient: true,
  websiteShowStaff: true,
  websiteShowAdminPanel: true,
  websiteManageNews: true,
  websiteManageRanks: true,
  websiteManageUsers: true,
  websiteManageBans: true,
  websiteManageConfig: true,
  websiteManageBetaCodes: true,
  // RP Permissions
  websiteCreateBusiness: true, // Create own business
  websiteManageBusiness: true, // Manage businesses on admin
};
