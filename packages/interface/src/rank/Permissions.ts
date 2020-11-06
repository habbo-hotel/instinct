export interface Permissions {
  websiteShowStaff: boolean;
  websiteShowAdminPanel: boolean;
  websiteManageNews: boolean;
  websiteManageRanks: boolean;
  websiteManageUsers: boolean;
  websiteManageBans: boolean;
  websiteManageConfig: boolean;
  // RP Permissions
  websiteCreateBusiness: boolean; // Create own business
  websiteManageBusiness: boolean; // Manage businesses on admin
}

export const examplePermissions: Permissions = {
  websiteShowStaff: true,
  websiteShowAdminPanel: true,
  websiteManageNews: true,
  websiteManageRanks: true,
  websiteManageUsers: true,
  websiteManageBans: true,
  websiteManageConfig: true,
  // RP Permissions
  websiteCreateBusiness: true, // Create own business
  websiteManageBusiness: true, // Manage businesses on admin
};
