export interface Permissions {
  websiteShowStaff: boolean;
  websiteShowAdminPanel: boolean;
  websiteManageNews: boolean;
  websiteManageRanks: boolean;
  websiteManageUsers: boolean;
  websiteManageBans: boolean;
  websiteManageConfig: boolean;
  // RP Permissions
  websiteCreateBusiness: boolean;
  websiteDeleteBusiness: boolean;
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
  websiteCreateBusiness: true,
  websiteDeleteBusiness: true,
};
