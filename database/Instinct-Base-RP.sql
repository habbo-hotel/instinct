SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for website_news
-- ----------------------------
DROP TABLE IF EXISTS `website_news`;
CREATE TABLE `website_news`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `short_story` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `full_story` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `images` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `author` int(11) NOT NULL DEFAULT 0,
  `header` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `category` int(4) NOT NULL DEFAULT 0,
  `timestamp` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id`(`id`) USING BTREE,
  INDEX `timestamp`(`timestamp`) USING BTREE,
  INDEX `category`(`category`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of website_news
-- ----------------------------
INSERT INTO `website_news` VALUES (1, 'Welcome to Instinct', 'Hello', 'Coming soon', 'https://images.habbo.com/c_images/Security/safetytips1_n.png', 1, 'https://habboo-a.akamaihd.net/c_images/web_promo/lpromo_SweetHome1.png', 1, 1536203060);

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
-- Alter table fixes for Instinct to work
-- ----------------------------
ALTER TABLE users MODIFY mail VARCHAR(500);

SET FOREIGN_KEY_CHECKS = 1;

-- ----------------------------
-- Permission updates for Instinct to work
-- ----------------------------
INSERT INTO `permissions` VALUES (null, 'website_show_staff', 'Users with this permission will be shown on the staff page');
INSERT INTO `permissions` VALUES (null, 'website_show_government', 'Users with this permission will be shown on the government page');
INSERT INTO `permissions` VALUES (null, 'website_show_admin_panel', 'Users with this permission can access the admin panel');
