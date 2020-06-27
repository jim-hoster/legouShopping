/*
Navicat MySQL Data Transfer

Source Server         : 我的数据库
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : p2p

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-06-16 16:10:06
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for borrow
-- ----------------------------
DROP TABLE IF EXISTS `borrow`;
CREATE TABLE `borrow` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `userid` varchar(50) NOT NULL COMMENT '用户昵称',
  `borrowmoney` int(50) DEFAULT NULL COMMENT '借款金额',
  `interest` float(255,0) DEFAULT NULL COMMENT '借款利息',
  `minbid` int(50) DEFAULT NULL COMMENT '最小投标',
  `days` int(3) DEFAULT NULL COMMENT '招标天数',
  `title` varchar(50) DEFAULT NULL COMMENT '招标标题',
  `info` varchar(255) DEFAULT NULL COMMENT '借款描述',
  `borrowtime` int(2) DEFAULT NULL COMMENT '借款期限（单位：月）',
  `repaytype` int(1) DEFAULT NULL COMMENT '还款方式（0 按月，1到期）',
  `ownmoney` int(10) DEFAULT '0' COMMENT '已借款金额',
  `bouns` int(10) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of borrow
-- ----------------------------
INSERT INTO `borrow` VALUES ('6', 'zs', '10000', '10', '10', '10', '我来借钱', '借款描述', '12', '1', '0', '1');
INSERT INTO `borrow` VALUES ('7', '1', '10000', '10', '10', '10', '我来借钱', '借款描述', '12', '1', '1000', '1');
INSERT INTO `borrow` VALUES ('8', '2', '10000', '10', '10', '10', '我来借钱', '借款描述', '12', '1', '0', '1');
INSERT INTO `borrow` VALUES ('9', '3', '10000', '10', '10', '10', '我来借钱', '借款描述', '12', '1', '0', '1');
INSERT INTO `borrow` VALUES ('10', '4', '10000', '10', '10', '10', '我来借钱', '借款描述', '12', '1', '0', '1');
INSERT INTO `borrow` VALUES ('11', '5', '10000', '10', '10', '10', '我来借钱', '借款描述', '12', '1', '0', '1');
INSERT INTO `borrow` VALUES ('12', '6', '10000', '10', '10', '10', '我来借钱', '借款描述', '12', '1', '0', '1');
INSERT INTO `borrow` VALUES ('13', '7', '10000', '10', '10', '10', '我来借钱', '借款描述', '12', '1', '0', '1');
INSERT INTO `borrow` VALUES ('14', '8', '10000', '10', '10', '10', '我来借钱', '借款描述', '12', '1', '0', '1');
INSERT INTO `borrow` VALUES ('15', '81', '10000', '10', '10', '10', '我来借钱', '借款描述', '12', '1', '0', '1');
INSERT INTO `borrow` VALUES ('16', '82', '10000', '10', '10', '10', '我来借钱', '借款描述', '12', '1', '0', '1');
INSERT INTO `borrow` VALUES ('17', '83', '10000', '10', '10', '10', '我来借钱', '借款描述', '12', '1', '0', '1');
INSERT INTO `borrow` VALUES ('18', '84', '10000', '10', '10', '10', '我来借钱', '借款描述', '12', '1', '0', '1');
INSERT INTO `borrow` VALUES ('19', '85', '10000', '10', '10', '10', '我来借钱', '借款描述', '12', '1', '0', '1');
INSERT INTO `borrow` VALUES ('20', '86', '10000', '10', '10', '10', '我来借钱', '借款描述', '12', '1', '0', '1');
INSERT INTO `borrow` VALUES ('21', '87', '10000', '10', '10', '10', '我来借钱', '借款描述', '12', '1', '0', '1');
INSERT INTO `borrow` VALUES ('22', '88', '10000', '10', '10', '10', '我来借钱', '借款描述', '12', '1', '0', '1');
INSERT INTO `borrow` VALUES ('23', '123', '20000', '33', '300', '5', '借款标题', '借款描述', '12', '1', '0', '3');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `pwd` varchar(255) COLLATE utf8_estonian_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_estonian_ci NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8_estonian_ci DEFAULT NULL,
  `nickname` varchar(255) COLLATE utf8_estonian_ci DEFAULT NULL,
  `totalmoney` int(255) DEFAULT '0',
  `phone` bigint(255) DEFAULT '0',
  `regtime` datetime DEFAULT NULL,
  `aduitlo` int(255) DEFAULT '0',
  `usablemoney` int(255) DEFAULT '0',
  `blockedmoney` int(255) DEFAULT '0',
  `lastlogintime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=272 DEFAULT CHARSET=utf8 COLLATE=utf8_estonian_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('123', 'zs', '1', null, null, '14500', '0', null, null, '19500', null, '2019-06-16 16:08:52');
INSERT INTO `user` VALUES ('1', 'zss', '3', null, null, '0', '0', null, null, null, null, '2019-06-16 15:45:34');
INSERT INTO `user` VALUES ('testacc002', 'testacc002', '194', 'testacc002@gmail.com', 'testacc002', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('123', 'bai', '184', '604075603@qq.com', 'asdas', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('123', 'lxc', '175', '123', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('123', 'aaa', '29', 'da@123.com', 'wei_cook', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('123', 'admin', '30', 'da@123.com', 'nicheng', '0', '0', null, '0', '0', '0', '2019-06-16 15:53:05');
INSERT INTO `user` VALUES ('123', 'sss', '36', 'da@123.com', 'nicheng', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('123', 'xiaopang', '172', '123', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('fd', 'xzq4', '138', 'dasf', 'fd', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('d', 'xzq1fdasf', '170', '', 'd', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('xzq', 'xzq1234', '151', '1040562891@yopmail.com', 'xzq', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('123', '123', '152', '123', '123', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('123', 'yonghu', '50', 'da@123.com', 'nicheng', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('123', '12138', '51', '123@qq.com', 'xxx', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('123', '121381', '52', '1234@qq.com', '123', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('12345', '12345', '53', '123@qq.com', '123', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('123', 'xlz', '149', '123', '123@qq.com', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('阿强', 'd', '141', '', '阿强', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('1asdasdasd', 'adasda', '150', '604075603@qq.com', 'adassd', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('123', 'zhoudamao', '143', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('qwe123', '123123', '60', '123@qq.com', '', '0', '0', null, '0', '0', '0', '2019-06-16 15:18:11');
INSERT INTO `user` VALUES ('123', 'yonghu2', '61', 'da@123.com', 'nicheng', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('11', '11', '62', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('21321312', '1221321', '63', '12@qq.com', '12312321', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('123', 'yonghu3', '64', 'da@123.com', 'nicheng', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('jyf', 'jyf', '65', '', '', '0', '0', null, '0', '0', '0', '2019-06-16 15:51:55');
INSERT INTO `user` VALUES ('d', 'xzq1fdasf', '169', '', 'd', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('d', 'xzq1fdasf', '168', '', 'd', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('123', 'www', '71', 'da@123.com', 'nicheng', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('jyf1', 'jyf1', '73', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('qwe123', '123', '75', '123@qq.com', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('1', '1', '76', '', '', '0', '0', null, '0', '0', '0', '2019-06-16 16:10:01');
INSERT INTO `user` VALUES ('fd', 'xzq4', '137', 'dasf', 'fd', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('d', 'xzq1fdasf', '166', '', 'd', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('111', '111', '82', '1234567@qq.com', '111', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('aaasda', '1234', '83', 'asada', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('123456789', 'xzq', '84', 'xzq@qq.com', '438', '0', '0', null, '0', '0', '0', '2019-06-16 15:22:48');
INSERT INTO `user` VALUES ('111', '111', '85', '1234567@qq.com', '111', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('123', 'libi', '90', '123@qq.com', '456', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('2', '2', '91', '222@qq.com', '2', '0', '0', null, '0', '0', '0', '2019-06-16 16:05:12');
INSERT INTO `user` VALUES ('abc', 'abc', '92', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('321', 'cxk', '93', 'xx@email.com', 'nima', '0', '0', null, '0', '0', '0', '2019-06-16 15:23:31');
INSERT INTO `user` VALUES ('qwe123', '123', '94', '123@qq.com', 'qwe123', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('Qq123123', '小强', '96', '123123@qq.com', '呵呵', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('123', '李波', '97', '123@qq.com', '七月半', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('ad1213124', 'aaaaa', '157', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('123', 'ls', '104', '123', '123', '0', '0', null, '0', '0', '0', '2019-06-16 16:01:09');
INSERT INTO `user` VALUES ('ad1213124', 'aaaaa', '156', '604075603@qq.com', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('qwe123', 'cyp', '110', '1264107529@qq.com', 'sanpi', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('qwe123', 'cyp', '112', '1264107529@qq.com', 'qqq', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('aa1234', 'aa123', '114', 'xx@dd.ss', 'aa123', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('123', 'zengshuai', '117', '123', '123', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('qwe123', 'xdd', '118', '1264107529@qq.com', 'qq', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('aa1234', 'pangzi', '119', '123@qq.com', 'pangzi', '0', '0', null, '0', '0', '0', '2019-06-16 16:01:05');
INSERT INTO `user` VALUES ('阿强', 'xzq1', '120', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('2', '1', '121', '1', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('ERR_PROXY_CONNECTION_FAILED', 'ERR_PROXY_CONNECTION_FAILED', '155', 'ERR_PROXY_CONNECTION_FAILED@gmail.com', 'ERR_PROXY_CONNECTION_FAILED', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('11', '11', '123', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('nb103', 'godv', '125', '1264107529@qq.com', 'wel', '0', '0', null, '0', '0', '0', '2019-06-16 15:59:58');
INSERT INTO `user` VALUES ('aaaa', 'aaaa', '126', 'aaaaa', 'aaaa', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('123', '123', '154', '123', '123', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('gr', 'aaaaaa', '130', 'egt', 'rhy', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('123', 'xzq123', '132', 'arevimif-1350@yopmail.com', '123', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('123', 'zhoudamao', '134', '', '', '0', '0', null, '0', '0', '0', '2019-06-16 15:44:26');
INSERT INTO `user` VALUES ('ad1213124', 'aaaaa', '153', '604075603@qq.com', 'dasda', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('testacc002', 'testacc002', '199', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('', 'aaaaaaaaaaa', '271', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('', 'aaaaaaaaaaa', '270', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('', '', '269', '', '', '0', '0', null, '0', '0', '0', '2019-06-16 16:10:06');
INSERT INTO `user` VALUES ('', '', '268', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('', '', '267', '', '', '0', '0', null, '0', '0', '0', '2019-06-16 16:09:43');
INSERT INTO `user` VALUES ('', '', '266', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('123456', 'aaaaaaa', '210', 'dasd', 'sas', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('xzq', 'xzq555', '211', '1040562891@yopmail.com', 'xzq', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('1996', 'yzh', '265', '', '', '0', '0', null, '0', '0', '0', '2019-06-16 16:09:53');
INSERT INTO `user` VALUES ('', '', '264', '', '', '0', '0', null, '0', '0', '0', '2019-06-16 16:09:05');
INSERT INTO `user` VALUES ('', '', '263', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('testacc002', 'testacc002', '217', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('', '', '262', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('qwe123', 'gai', '219', '1264107529@qq.com', 'gai', '0', '0', null, '0', '0', '0', '2019-06-16 16:01:48');
INSERT INTO `user` VALUES ('', '', '261', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('dsadsa', 'dsadsa', '221', 'dsadsa', 'dsadsa', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('testacc002', 'testacc002', '222', 'true', 'true', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('', '', '249', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('123', 'jyf-1', '224', '', '', '0', '0', null, '0', '0', '0', '2019-06-16 16:09:21');
INSERT INTO `user` VALUES ('testacc003', 'testacc003', '225', 'testacc003', 'testacc003', '0', '0', null, '0', '0', '0', '2019-06-16 16:01:48');
INSERT INTO `user` VALUES ('', '', '250', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('aaaa1111', 'sunny', '227', '1111@qq.com', 'sunny', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('', '', '260', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('', '', '259', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('', '', '258', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('', '', '257', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('', '', '256', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('testacc004', 'testacc004', '233', 'testacc004@gmail.com', 'testacc004', '0', '0', null, '0', '0', '0', '2019-06-16 16:02:08');
INSERT INTO `user` VALUES ('dsa', '张三', '239', 'dsad', 'dsad', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('testacc005', 'testacc005', '255', 'testacc005@gmail.com', 'testacc005', '0', '0', null, '0', '0', '0', '2019-06-16 16:06:53');
INSERT INTO `user` VALUES ('', '', '254', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('', '', '253', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('aaa', 'aaaaaaaaa', '244', 'aaa', 'aaa', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('', '', '252', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('', '', '251', '', '', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('sss', 'xzq55', '247', '1040562891@yopmail.com', 'sss', '0', '0', null, '0', '0', '0', null);
INSERT INTO `user` VALUES ('aaa', 'aaaaaaaaaa', '248', 'aaa', 'aaa', '0', '0', null, '0', '0', '0', null);
