SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for website_alert_messages
-- ----------------------------
DROP TABLE IF EXISTS `website_alert_messages`;
CREATE TABLE `website_alert_messages`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `message` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'Unacceptable for the Hotel Management',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of website_alert_messages
-- ----------------------------
INSERT INTO `website_alert_messages` VALUES (1, 'Use of language', 'Watch your language! You will be banned on repeated occasions.');
INSERT INTO `website_alert_messages` VALUES (2, 'Act as Staff', 'Acting as Staff is against the rules. You will be banned on repeated occasions.');
INSERT INTO `website_alert_messages` VALUES (3, 'Talking about retro hotels', 'Talking about retro hotels is against the rules! At repetition you will be banned.');
INSERT INTO `website_alert_messages` VALUES (4, 'Requesting/giving away personal information', 'Asking/giving away personal data is against the rules! You will be banned on repeated occasions.');
INSERT INTO `website_alert_messages` VALUES (5, 'Ask/give away Social Media', 'Ask/giving away snapchat, insta or other Social Media is against the rules! You will be banned on repeated occasions.');
INSERT INTO `website_alert_messages` VALUES (6, 'Unacceptable language/behavior', 'Unacceptable language/behavior is against the rules! You will be banned on repeated occasions.');
INSERT INTO `website_alert_messages` VALUES (7, 'Harassment', 'Don\'t bother other players! You will be banned on repeated occasions.');
INSERT INTO `website_alert_messages` VALUES (8, 'Sexual conversations/behaviors', 'Sexual conversations or behaviors are against the rules! You will be banned on repeated occasions.');

-- ----------------------------
-- Table structure for website_ban_messages
-- ----------------------------
DROP TABLE IF EXISTS `website_ban_messages`;
CREATE TABLE `website_ban_messages`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message` varchar(75) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'Unacceptable for the Hotel Management',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of website_ban_messages
-- ----------------------------
INSERT INTO `website_ban_messages` VALUES (1, 'Advertising for Retro Hotels');
INSERT INTO `website_ban_messages` VALUES (2, 'Highlight one or more players');
INSERT INTO `website_ban_messages` VALUES (3, 'Illegal activities');
INSERT INTO `website_ban_messages` VALUES (4, 'Hate speech/discrimination');
INSERT INTO `website_ban_messages` VALUES (5, 'Pedophile activities');
INSERT INTO `website_ban_messages` VALUES (6, 'Requesting/giving away personal information');
INSERT INTO `website_ban_messages` VALUES (7, 'Ask/giving away snapchat, insta or other Social Media');
INSERT INTO `website_ban_messages` VALUES (8, 'Harassment/unacceptable language or behavior');
INSERT INTO `website_ban_messages` VALUES (9, 'Order disturbance');
INSERT INTO `website_ban_messages` VALUES (10, 'Embarrassing sexual behaviors');
INSERT INTO `website_ban_messages` VALUES (11, 'Requesting/offering webscam sex or sexual images');
INSERT INTO `website_ban_messages` VALUES (12, 'Threat of one or more players with ddos/hack/expose');
INSERT INTO `website_ban_messages` VALUES (13, 'Act as Staff');
INSERT INTO `website_ban_messages` VALUES (14, 'Username in violation of the rules');

-- ----------------------------
-- Table structure for website_ban_types
-- ----------------------------
DROP TABLE IF EXISTS `website_ban_types`;
CREATE TABLE `website_ban_types`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `seconds` int(10) NOT NULL DEFAULT 7200,
  `message` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `min_rank` int(10) NOT NULL DEFAULT 6,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id`(`id`) USING BTREE,
  INDEX `min_rank`(`min_rank`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of website_ban_types
-- ----------------------------
INSERT INTO `website_ban_types` VALUES (1, 7200, '2 hours', 4);
INSERT INTO `website_ban_types` VALUES (2, 14400, '4 hours', 4);
INSERT INTO `website_ban_types` VALUES (3, 28800, '8 hours', 4);
INSERT INTO `website_ban_types` VALUES (4, 43200, '12 hours', 4);
INSERT INTO `website_ban_types` VALUES (5, 86400, '1 day', 6);
INSERT INTO `website_ban_types` VALUES (6, 259200, '3 days', 6);
INSERT INTO `website_ban_types` VALUES (7, 604800, '1 week', 6);
INSERT INTO `website_ban_types` VALUES (8, 2629743, '1 month', 6);
INSERT INTO `website_ban_types` VALUES (9, 7889231, '3 months', 6);
INSERT INTO `website_ban_types` VALUES (10, 946707780, 'permanent', 6);

-- ----------------------------
-- Table structure for website_bans_asn
-- ----------------------------
DROP TABLE IF EXISTS `website_bans_asn`;
CREATE TABLE `website_bans_asn`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `asn` int(11) NOT NULL,
  `host` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `added_by` varchar(75) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `timestamp` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `asn`(`asn`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for website_feeds
-- ----------------------------
DROP TABLE IF EXISTS `website_feeds`;
CREATE TABLE `website_feeds`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `to_user_id` int(11) NOT NULL,
  `message` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `timestamp` int(11) NOT NULL,
  `from_user_id` int(11) NOT NULL,
  `is_hidden` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for website_feeds_likes
-- ----------------------------
DROP TABLE IF EXISTS `website_feeds_likes`;
CREATE TABLE `website_feeds_likes`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `feed_id` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for website_feeds_reactions
-- ----------------------------
DROP TABLE IF EXISTS `website_feeds_reactions`;
CREATE TABLE `website_feeds_reactions`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `feed_id` int(11) NOT NULL,
  `message` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `timestamp` int(11) NOT NULL DEFAULT 0,
  `user_id` int(11) NOT NULL DEFAULT 0,
  `is_hidden` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for website_forum_likes
-- ----------------------------
DROP TABLE IF EXISTS `website_forum_likes`;
CREATE TABLE `website_forum_likes`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for website_helptool_categories
-- ----------------------------
DROP TABLE IF EXISTS `website_helptool_categories`;
CREATE TABLE `website_helptool_categories`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for website_helptool_faq
-- ----------------------------
DROP TABLE IF EXISTS `website_helptool_faq`;
CREATE TABLE `website_helptool_faq`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `slug` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `desc` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `category` int(11) NOT NULL DEFAULT 0,
  `timestamp` int(11) NOT NULL DEFAULT 0,
  `author` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `category`(`category`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for website_helptool_logs
-- ----------------------------
DROP TABLE IF EXISTS `website_helptool_logs`;
CREATE TABLE `website_helptool_logs`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `player_id` int(11) NOT NULL DEFAULT 0,
  `target` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '',
  `value` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT '',
  `timestamp` int(11) NOT NULL DEFAULT 0,
  `type` enum('CHANGE','SEND') CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `player_id`(`player_id`) USING BTREE,
  INDEX `target`(`target`) USING BTREE,
  INDEX `type`(`type`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for website_helptool_reactions
-- ----------------------------
DROP TABLE IF EXISTS `website_helptool_reactions`;
CREATE TABLE `website_helptool_reactions`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `request_id` int(11) NULL DEFAULT NULL,
  `practitioner_id` int(11) NOT NULL,
  `message` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `timestamp` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for website_helptool_requests
-- ----------------------------
DROP TABLE IF EXISTS `website_helptool_requests`;
CREATE TABLE `website_helptool_requests`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subject` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `message` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(72) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `player_id` int(11) NULL DEFAULT 0,
  `ip_address` varchar(75) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `timestamp` int(11) NOT NULL DEFAULT 0,
  `status` enum('closed','open','in_treatment','wait_reply') CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'open',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for website_jobs
-- ----------------------------
DROP TABLE IF EXISTS `website_jobs`;
CREATE TABLE `website_jobs`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `job` varchar(40) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `small_description` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `full_description` longtext CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for website_jobs_applys
-- ----------------------------
DROP TABLE IF EXISTS `website_jobs_applys`;
CREATE TABLE `website_jobs_applys`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `job_id` int(11) NULL DEFAULT NULL,
  `user_id` int(11) NULL DEFAULT NULL,
  `firstname` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `message` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  `available_monday` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `available_tuesday` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `available_wednesday` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `available_thursday` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `available_friday` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `available_saturday` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `available_sunday` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `status` enum('open','closed') CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for website_news
-- ----------------------------
DROP TABLE IF EXISTS `website_news`;
CREATE TABLE `website_news`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `slug` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `short_story` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `full_story` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `images` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `author` int(11) NOT NULL DEFAULT 0,
  `header` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `category` int(4) NOT NULL DEFAULT 0,
  `form` enum('none','photo','badge','look','word') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'none',
  `timestamp` int(11) NOT NULL DEFAULT 0,
  `hidden` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id`(`id`) USING BTREE,
  INDEX `slug`(`slug`) USING BTREE,
  INDEX `timestamp`(`timestamp`) USING BTREE,
  INDEX `hidden`(`hidden`) USING BTREE,
  INDEX `category`(`category`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of website_news
-- ----------------------------
INSERT INTO `website_news` VALUES (1, 'welcome-to-cosmic', 'Welcome to Instinct', 'Hello', 'https://images.habbo.com/c_images/Security/safetytips1_n.png', 1, 'https://habboo-a.akamaihd.net/c_images/web_promo/lpromo_SweetHome1.png', 1, 'none', 1536203060, '0');

-- ----------------------------
-- Table structure for website_news_categories
-- ----------------------------
DROP TABLE IF EXISTS `website_news_categories`;
CREATE TABLE `website_news_categories`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id`(`id`) USING BTREE,
  INDEX `category`(`category`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of website_news_categories
-- ----------------------------
INSERT INTO `website_news_categories` VALUES (1, 'Updates');
INSERT INTO `website_news_categories` VALUES (2, 'Fixes');
INSERT INTO `website_news_categories` VALUES (3, 'Events');

-- ----------------------------
-- Table structure for website_news_reactions
-- ----------------------------
DROP TABLE IF EXISTS `website_news_reactions`;
CREATE TABLE `website_news_reactions`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` int(11) NOT NULL DEFAULT 0,
  `news_id` int(11) NULL DEFAULT NULL,
  `player_id` int(11) NULL DEFAULT NULL,
  `message` varchar(250) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `hidden` int(11) NULL DEFAULT 0,
  `timestamp` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;


-- ----------------------------
-- Table structure for website_password_reset
-- ----------------------------
DROP TABLE IF EXISTS `website_password_reset`;
CREATE TABLE `website_password_reset`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `player_id` int(11) NOT NULL,
  `email` varchar(75) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `ip_address` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0.0.0.0',
  `token` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `token_expires_at` int(11) NOT NULL,
  `timestamp` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for website_permissions
-- ----------------------------
DROP TABLE IF EXISTS `website_permissions`;
CREATE TABLE `website_permissions`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `permission` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT 'housekeeping_',
  `description` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 29 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of website_permissions
-- ----------------------------
INSERT INTO `website_permissions` VALUES (1, 'housekeeping', 'Player has access to the housekeeping.');
INSERT INTO `website_permissions` VALUES (2, 'housekeeping_remote_control', 'Player is able to nd may adjust other players account information, except the ranks.');
INSERT INTO `website_permissions` VALUES (3, 'housekeeping_ban_user', 'Player is able to ban users from the control panel. A rank system is included in this permission.');
INSERT INTO `website_permissions` VALUES (4, 'housekeeping_ban_logs', 'Player is able to view which players have been denied access to the hotel');
INSERT INTO `website_permissions` VALUES (5, 'housekeeping_staff_logs', 'Player is able to view all loggings that staffs have committed in the cms');
INSERT INTO `website_permissions` VALUES (6, 'housekeeping_chat_logs', 'Player is able to read chat logs from other players');
INSERT INTO `website_permissions` VALUES (7, 'housekeeping_website', '\r\nPlayer has access to the website category');
INSERT INTO `website_permissions` VALUES (8, 'housekeeping_website_news', 'Player is able to manage news items');
INSERT INTO `website_permissions` VALUES (9, 'housekeeping_ranks', 'Player is able to change ranks of other players');
INSERT INTO `website_permissions` VALUES (10, 'housekeeping_permissions', 'Player can add/remove permissions for other players who have access to housekeeping');
INSERT INTO `website_permissions` VALUES (11, 'housekeeping_ip_display', 'Player is able to see IP addresses of other players');
INSERT INTO `website_permissions` VALUES (12, 'housekeeping_reset_user', 'Player is able to reset the player (motto, look, relationships)');
INSERT INTO `website_permissions` VALUES (13, 'housekeeping_alert_user', 'Player is able to send warn the player');
INSERT INTO `website_permissions` VALUES (14, 'housekeeping_room_control', 'Player is able to see rooms but not able to edit the room');
INSERT INTO `website_permissions` VALUES (15, 'housekeeping_moderation_tools', 'Player is able to use the moderation tools on the website');
INSERT INTO `website_permissions` VALUES (16, 'housekeeping_website_helptool', 'Player is able to handle the helptool');
INSERT INTO `website_permissions` VALUES (17, 'housekeeping_change_email', 'Player is able to change mail adresses');
INSERT INTO `website_permissions` VALUES (18, 'housekeeping_website_feeds', 'Player is able to remove feeds from the website');
INSERT INTO `website_permissions` VALUES (19, 'housekeeping_vpn_control', 'Player is able to ban of unban AS numbers');
INSERT INTO `website_permissions` VALUES (20, 'housekeeping_wordfilter_control', 'Player is able to manage the word filter');
INSERT INTO `website_permissions` VALUES (21, 'housekeeping_website_rarevalue', 'Player is able to change rare values');
INSERT INTO `website_permissions` VALUES (22, 'housekeeping_website_faq', 'Player is able to manage the FAQ');
INSERT INTO `website_permissions` VALUES (23, 'housekeeping_shop_control', 'Player is able to handle and see purchase logs');
INSERT INTO `website_permissions` VALUES (24, 'housekeeping_ranks_extra', 'Player is able to edit the extra rank');
INSERT INTO `website_permissions` VALUES (25, 'housekeeping_staff_logs_menu', 'Player is able to see logs in menu');
INSERT INTO `website_permissions` VALUES (26, 'housekeeping_config', 'Player can manage all the config settings');
INSERT INTO `website_permissions` VALUES (27, 'website_invisible_staff', 'Hide rank from staff page at website');
INSERT INTO `website_permissions` VALUES (28, 'website_extra_rank', '');
INSERT INTO `website_permissions` VALUES (29, 'housekeeping_website_badgerequest', 'Player is able to accept new badge requests');


-- ----------------------------
-- Table structure for website_permissions_ranks
-- ----------------------------
DROP TABLE IF EXISTS `website_permissions_ranks`;
CREATE TABLE `website_permissions_ranks`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `permission_id` int(11) NOT NULL,
  `rank_id` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `rank_id`(`rank_id`) USING BTREE,
  INDEX `permission_id`(`permission_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 29 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of website_permissions_ranks
-- ----------------------------
INSERT INTO `website_permissions_ranks` VALUES (1, 1, 7);
INSERT INTO `website_permissions_ranks` VALUES (2, 2, 7);
INSERT INTO `website_permissions_ranks` VALUES (3, 3, 7);
INSERT INTO `website_permissions_ranks` VALUES (4, 4, 7);
INSERT INTO `website_permissions_ranks` VALUES (5, 5, 7);
INSERT INTO `website_permissions_ranks` VALUES (6, 6, 7);
INSERT INTO `website_permissions_ranks` VALUES (7, 7, 7);
INSERT INTO `website_permissions_ranks` VALUES (8, 8, 7);
INSERT INTO `website_permissions_ranks` VALUES (9, 9, 7);
INSERT INTO `website_permissions_ranks` VALUES (10, 10, 7);
INSERT INTO `website_permissions_ranks` VALUES (11, 11, 7);
INSERT INTO `website_permissions_ranks` VALUES (12, 12, 7);
INSERT INTO `website_permissions_ranks` VALUES (13, 13, 7);
INSERT INTO `website_permissions_ranks` VALUES (14, 14, 7);
INSERT INTO `website_permissions_ranks` VALUES (15, 15, 7);
INSERT INTO `website_permissions_ranks` VALUES (16, 16, 7);
INSERT INTO `website_permissions_ranks` VALUES (17, 17, 7);
INSERT INTO `website_permissions_ranks` VALUES (18, 18, 7);
INSERT INTO `website_permissions_ranks` VALUES (19, 19, 7);
INSERT INTO `website_permissions_ranks` VALUES (20, 20, 7);
INSERT INTO `website_permissions_ranks` VALUES (21, 21, 7);
INSERT INTO `website_permissions_ranks` VALUES (22, 22, 7);
INSERT INTO `website_permissions_ranks` VALUES (23, 23, 7);
INSERT INTO `website_permissions_ranks` VALUES (24, 24, 7);
INSERT INTO `website_permissions_ranks` VALUES (25, 25, 7);
INSERT INTO `website_permissions_ranks` VALUES (26, 26, 7);
INSERT INTO `website_permissions_ranks` VALUES (27, 27, 1);
INSERT INTO `website_permissions_ranks` VALUES (28, 27, 2);
INSERT INTO `website_permissions_ranks` VALUES (29, 29, 7);


-- ----------------------------
-- Table structure for website_photos_likes
-- ----------------------------
DROP TABLE IF EXISTS `website_photos_likes`;
CREATE TABLE `website_photos_likes`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `photo_id` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for website_referrals
-- ----------------------------

DROP TABLE IF EXISTS `website_referrals`;
CREATE TABLE `website_referrals`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `referral_user_id` int(11) NULL DEFAULT NULL,
  `ip_address` varchar(56) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `timestamp` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for website_settings
-- ----------------------------
DROP TABLE IF EXISTS `website_settings`;
CREATE TABLE `website_settings`  (
  `key` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `value` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of website_settings
-- ----------------------------
INSERT INTO `website_settings` VALUES ('krews_api_useragent', NULL);
INSERT INTO `website_settings` VALUES ('krews_api_advanced_stats', '1');
INSERT INTO `website_settings` VALUES ('krews_api_hotel_slug', NULL);
INSERT INTO `website_settings` VALUES ('rcon_api_host', '127.0.0.1');
INSERT INTO `website_settings` VALUES ('rcon_api_port', '3001');
INSERT INTO `website_settings` VALUES ('recaptcha_publickey', '');
INSERT INTO `website_settings` VALUES ('recaptcha_secretkey', NULL);
INSERT INTO `website_settings` VALUES ('maintenance', '0');
INSERT INTO `website_settings` VALUES ('start_credits', '1000');
INSERT INTO `website_settings` VALUES ('vip_permission_id', '2');
INSERT INTO `website_settings` VALUES ('vip_currency_type', '5');
INSERT INTO `website_settings` VALUES ('vip_price', '1000');
INSERT INTO `website_settings` VALUES ('vip_badges', '[{\"value\":\"VIP\"},{\"value\":\"ACH_VipClub1\"}]');
INSERT INTO `website_settings` VALUES ('club_page_content', '<ul>\r\n<li>Je krijgt <strong>50 Bel-Credits</strong> en <strong>1000 Diamanten</strong>.</li>\r\n<li>Je krijgt <strong>10000 Duckets</strong> en <strong>20000 Achievement Score</strong>.</li>\r\n<li>Je kunt meubels uit de <strong>Donatie Winkel</strong> kopen.</li>\r\n<li>Je kunt als eerste de <strong>Nieuwste Meubi\'s</strong> kopen.</li>\r\n<li>Je kunt <strong>volle kamers</strong> bezoeken.</li>\r\n<li>Je hebt een korter typverbod (<strong>10 seconden</strong>).</li>\r\n<li>Je kunt <strong>1000 kamers</strong> maken (Normaal 150).</li>\r\n<li>Je kunt lid worden van <strong>500 groepen</strong> (Normaal 150).</li>\r\n<li>Je kunt <strong>10 respect</strong> geven aan Leet\'s (Normaal 5).</li>\r\n<li>Je hebt toegang tot <strong>speciale spraakcommando\'s<br /><br /></strong></li>\r\n</ul>\r\n<h4>De speciale spraakcommando\'s</h4>\r\n<p>Je hebt toegang tot speciale spraakcommando\'s.</p>\r\n<ul>\r\n<li><strong>:duw (<em>Instinctnaam</em>)</strong> duwt de gewenste Leet 1 vak naar voor</li>\r\n<li><strong>:trek (<em>Instinctnaamnaam</em>)</strong> trek een Leet naar je toe</li>\r\n<li><strong>:kus (<em>Instinctnaamnaam</em>)</strong> geef een kusje aan een Leet</li>\r\n<li><strong>:sla (<em>Instinctnaamnaam</em>)</strong> sla een Leet</li>\r\n<li><strong>:gezichtloos</strong> haal je gezicht weg</li>\r\n<li><strong>:trashvrij</strong> zorgt ervoor dat Leet\'s met rechten niks kunnen verplaatsen.</li>\r\n<li><strong>:huisdier (<em>lijst</em>)</strong> zal je veranderen in het dier dat je kiest uit de lijst</li>\r\n<li><strong>:zit</strong> zitten op de grond</li>\r\n<li><strong>:lig</strong> liggen op de grond</li>\r\n</ul>');
INSERT INTO `website_settings` VALUES ('namechange_currency_type', '5');
INSERT INTO `website_settings` VALUES ('namechange_price', '1000');
INSERT INTO `website_settings` VALUES ('registration_max_ip', '3');
INSERT INTO `website_settings` VALUES ('vip_membership_days', '31');
INSERT INTO `website_settings` VALUES ('referral_acc_create_days', '14');
INSERT INTO `website_settings` VALUES ('referral_points_type', '103');
INSERT INTO `website_settings` VALUES ('referral_points', '5');
INSERT INTO `website_settings` VALUES ('referral_waiting_seconds', '3600');
INSERT INTO `website_settings` VALUES ('user_of_the_week', NULL);
INSERT INTO `website_settings` VALUES ('draw_badge_imaging', NULL);
INSERT INTO `website_settings` VALUES ('draw_badge_currency', '5');
INSERT INTO `website_settings` VALUES ('draw_badge_price', '1000');

-- ----------------------------
-- Table structure for website_settings_currencys
-- ----------------------------
DROP TABLE IF EXISTS `website_settings_currencys`;
CREATE TABLE `website_settings_currencys`  (
  `currency` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `type` int(3) NULL DEFAULT NULL,
  `amount` int(12) NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of website_settings_currencys
-- ----------------------------
INSERT INTO `website_settings_currencys` VALUES ('duckets', 0, 1000);
INSERT INTO `website_settings_currencys` VALUES ('diamonds', 5, 1000);

-- ----------------------------
-- Table structure for website_shop_offers
-- ----------------------------
DROP TABLE IF EXISTS `website_shop_offers`;
CREATE TABLE `website_shop_offers`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `currency` int(3) NOT NULL,
  `amount` int(11) NOT NULL DEFAULT 20,
  `price` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '1.50',
  `image` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `offer_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `private_key` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `lang` enum('NL','BE','FR') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'NL',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `lang`(`lang`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for website_shop_purchases
-- ----------------------------
DROP TABLE IF EXISTS `website_shop_purchases`;
CREATE TABLE `website_shop_purchases`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `data` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `lang` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `timestamp` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for website_staff_logs
-- ----------------------------
DROP TABLE IF EXISTS `website_staff_logs`;
CREATE TABLE `website_staff_logs`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(25) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `value` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `player_id` int(11) NULL DEFAULT NULL,
  `target` int(11) NULL DEFAULT NULL,
  `timestamp` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for website_user_logs_email
-- ----------------------------
DROP TABLE IF EXISTS `website_user_logs_email`;
CREATE TABLE `website_user_logs_email`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL,
  `old_mail` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `new_mail` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `ip_address` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `timestamp` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for website_membership
-- ----------------------------
DROP TABLE IF EXISTS `website_membership`;
CREATE TABLE `website_membership`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL,
  `old_rank` int(1) NULL DEFAULT NULL,
  `expires_at` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for website_badge_requests
-- ----------------------------
DROP TABLE IF EXISTS `website_badge_requests`;
CREATE TABLE `website_badge_requests`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL,
  `badge_imaging` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `status` enum('open','accept','decline') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'open',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for website_extra_ranks
-- ----------------------------
DROP TABLE IF EXISTS `website_extra_ranks`;
CREATE TABLE `website_extra_ranks`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rank_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `rank_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;


-- ----------------------------
-- Alter table fixes for Instinct to work
-- ----------------------------
ALTER TABLE users ADD secret_key varchar(40) NULL DEFAULT NULL;
ALTER TABLE users ADD pincode varchar(11) NULL DEFAULT NULL;
ALTER TABLE users ADD extra_rank int(2) NULL DEFAULT NULL;
ALTER TABLE users MODIFY mail VARCHAR(500);
ALTER TABLE bans MODIFY COLUMN machine_id varchar(255)NOT NULL DEFAULT '';

SET FOREIGN_KEY_CHECKS = 1;
