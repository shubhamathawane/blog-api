-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 18, 2023 at 07:28 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `AuthorId` bigint(11) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Published` tinyint(1) NOT NULL DEFAULT 1,
  `Image` varchar(300) DEFAULT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `UpdatedAt` varchar(255) DEFAULT NULL,
  `PublishedAt` varchar(50) DEFAULT NULL,
  `Content` varchar(3000) NOT NULL,
  `username` varchar(30) DEFAULT NULL,
  `Category` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `AuthorId`, `Title`, `Published`, `Image`, `CreatedAt`, `UpdatedAt`, `PublishedAt`, `Content`, `username`, `Category`) VALUES
(16, 3, 'How to Write a Blog Post: A Step-by-Step Guide [+ Free Blog Post Templates]', 0, 'https://blog.hubspot.com/hs-fs/hubfs/how-to-start-a-blog-2.webp?width=595&height=400&name=how-to-start-a-blog-2.webp', '2023-10-17 17:44:57', '29/08/2023', '3/09/2023', 'Anyone can connect with their audience through blogging and enjoy the myriad benefits that blogging provides: organic traffic from search engines, promotional content for social media, and recognition from a new audience you haven’t tapped into yet.If you’ve heard about blogging but are a beginner and don’t know where to start, the time for excuses is over. Not only can you create an SEO-friendly blog, but I’ll cover how to write and manage your business\'s blog as well as provide helpful templates to simplify your blogging efforts.', 'Tejas', 'New, Sort'),
(22, 5, 'HTTP response status codesHTTP response status codes', 1, NULL, '2023-10-15 18:39:13', NULL, NULL, '100 Continue\nThis interim response indicates that the client should continue the request or ignore the response if the request is already finished.\n\n101 Switching Protocols\nThis code is sent in response to an Upgrade request header from the client and indicates the protocol the server is switching to.\n\n102 Processing (WebDAV)\nThis code indicates that the server has received and is processing the request, but no response is available yet.', 'admin', 'tag, new, love, health'),
(25, 5, 'Building a REST API with Node.js, MySQL, and Express', 1, '1697468230760desktop-wallpaper-death-note-l-backgrounds-bozhu-n-death-note.jpg', '2023-10-16 14:57:10', NULL, NULL, 'Node.js is commonly used in conjunction with NoSQL databases such as MongoDB, although it also works well with relational databases such as MySQL, PostgreSQL, and others. MySQL has been around for decades and is one of the widely used relational database management systems (RDBMS). The world’s most open-source database is an ideal RDBMS for both small and large applications.\n\nThis tutorial will explore how to build a REST API with Express and MySQL by creating a simple database for adding, updating, and removing todos. You can follow along by cloning the GitHub repository for this project. Let’s get started!\n\nPrerequisites\nThis tutorial is a hands-on demonstration. Be sure you have the following in place before getting started:\n\nMySQL server installed on your computer.\nNode.js installed on your computer.\nAll the demonstrations will use Ubuntu 20.04 with Node 14 LTS. It also works for other operating systems and other versions of Linux.', 'admin', 'React, MERN, Nodejs'),
(26, 11, 'Choose a workspace', 1, NULL, '2023-10-16 15:03:42', NULL, NULL, 'Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.\n\nNOTE: Multer will not process any form which is not multipart (multipart/form-data).', 'admin3', 'Slack'),
(28, 5, 'This is the new Title while shooting video', 1, '1697473530360Annotation 2023-06-25 133423.png', '2023-10-16 16:25:30', NULL, NULL, 'Node.js is commonly used in conjunction with NoSQL databases such as MongoDB, although it also works well with relational databases such as MySQL, PostgreSQL, and others. MySQL has been around for decades and is one of the widely used relational database management systems (RDBMS). The world’s most open-source database is an ideal RDBMS for both small and large applications.\n\nThis tutorial will explore how to build a REST API with Express and MySQL by creating a simple database for adding, updating, and removing todos. You can follow along by cloning the GitHub repository for this project. Let’s get started!', 'admin', 'cisco, job, news, new'),
(30, 5, 'How to create Best Resume', 1, '1697564281529Screenshot (28).png', '2023-10-17 17:38:01', NULL, NULL, 'In this example, the toLocaleDateString function is used to format the date. The options object inside toLocaleDateString defines the formatting style. Adjust the properties of the options object to match your desired date format. This example includes the full date, including year, month, day, hour, minute, second, and timezone. You can modify the options to display the date in your preferred format.', 'admin', 'Resume, Job, new'),
(32, 5, 'new       !validate && res.status(400).json({ message: \"Wrong password\" });', 1, NULL, '2023-10-18 13:41:59', NULL, NULL, 'lcaljadf             <Link className=\"link\" to={`/?username=${post?.username}`}>\n', 'admin', 'tag'),
(33, 5, 'Buddha is the greates man in tthe world', 1, '1697636571985img_128606.jpg', '2023-10-18 13:42:52', NULL, NULL, 'SPACESUPGRADENEWSLETTERGET CERTIFIEDREPORT ERROR\nTop Tutorials\nHTML Tutorial\nCSS Tutorial\nJavaScript Tutorial\nHow To Tutorial\nSQL Tutorial\nPython Tutorial\nW3.CSS Tutorial\nBootstrap Tutorial\nPHP Tutorial\nJava Tutorial\nC++ Tutorial\njQuery Tutorial\nTop References\nHTML Reference\nCSS Reference\nJavaScript Reference\nSQL Reference\nPython Reference\nW3.CSS Reference\nBootstrap Reference\nPHP Reference\nHTML Colors\nJava Reference\nAngular Reference\njQuery Reference\nTop Examples\nHTML Examples\nCSS Examples\nJavaScript Examples\nHow To Examples\nSQL Examples\nPython Examples\nW3.CSS Examples\nBootstrap Examples\nPHP Examples\nJava Examples\nXML Examples\njQuery Examples\nGet Certified\nHTML Certificate\nCSS Certificate\nJavaScript Certificate\nFront End Certificate\nSQL Certificate\nPython Certificate\nPHP Certificate\njQuery Certificate\nJava Certificate\nC++ Certificate\nC# Certificate\nXML Certificate\n    FORUM ABOUT', 'admin', 'buddha, news, peace');

-- --------------------------------------------------------

--
-- Table structure for table `post_comment`
--

CREATE TABLE `post_comment` (
  `id` bigint(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Text` varchar(100) DEFAULT NULL,
  `AuthorId` bigint(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `post_comment`
--

INSERT INTO `post_comment` (`id`, `postId`, `CreatedAt`, `Text`, `AuthorId`) VALUES
(9, 16, '2023-10-13 13:31:04', 'The second comment created by me', 2),
(10, 16, '2023-10-13 13:52:13', 'awesome blog big brother ', 3),
(11, 16, '2023-10-13 14:03:00', 'This is the comment you are looking for', 3),
(13, 16, '2023-10-15 16:09:56', 'new comment ', 5),
(18, 25, '2023-10-16 14:57:47', 'Adding Comment on This post', 5),
(19, 25, '2023-10-16 16:23:48', 'Adding Comment as Test1 User profile', 35),
(20, 25, '2023-10-16 16:24:33', 'Adding comment as Admin', 5),
(21, 28, '2023-10-16 16:26:09', 'Adding comment on my own blog', 5),
(22, 26, '2023-10-17 17:28:21', 'this trick will work alwasy', 5),
(23, 26, '2023-10-17 17:29:26', 'my name is shubham', 5),
(24, 30, '2023-10-17 17:39:52', 'resume formate please ! 😁', 5),
(25, 25, '2023-10-17 17:55:39', 'tea is good for energy', 3),
(26, 22, '2023-10-18 13:22:45', 'response status codesHTTP 404', 3),
(27, 33, '2023-10-18 13:47:10', 'Addig comment is pease also 😸', 5),
(28, 22, '2023-10-18 13:53:29', '101 Switching Protocols This code is sent in response to an Upgrade ', 5),
(29, 22, '2023-10-18 14:15:24', 'ading new blog', 5),
(30, 16, '2023-10-18 14:23:18', 'new comment adding', 5),
(31, 30, '2023-10-18 15:11:07', 'nice brother , thank for tips', 3);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` bigint(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `profile_text` varchar(300) NOT NULL,
  `profile_pic` varchar(3000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `email`, `timestamp`, `profile_text`, `profile_pic`) VALUES
(2, 'shubham', '$2b$10$aw1AEPQpSSxKEDoehoE1Z.A.MBu.DklNxalcr/rikrHcCkpCifsa2', 'shubhamathawane02@gmail.com', '2023-10-11 13:52:20', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text', ''),
(3, 'tejas', '$2b$10$9q5pjPoqDyLhOelfHE5LnOfGnx5iuDuL2PJ02gcSE50yziSRg47da', 'tejasathawane01@gmail.com', '2023-10-18 13:15:45', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text', '1697634944569img_128606.jpg'),
(5, 'admin', '$2b$10$vo4wSfXkxOy6LElXCWHo4e4fz/EIouc7cbV5ZqrF2GCPxf.26GVgW', 'admin@gmail.com', '2023-10-16 14:49:28', 'The owner of this website', '1697467768154desktop-wallpaper-death-note-l-backgrounds-bozhu-n-death-note.jpg'),
(6, 'asdfdf', '$2b$10$mjJ2ad6xBkqPXk0QF5WEzu3HVfCsdzIkwNUriNBDt0aMRLUMTga46', 'asdfasdf', '2023-10-15 14:01:59', '234234', ''),
(8, '234', '$2b$10$IVobk1nU1Q4GhGwEognBVORZscsCzSx.XatAROt/VHlEXn2sgUvTO', '23434', '2023-10-15 14:02:54', '343', ''),
(11, 'admin3', '$2b$10$EiqUgXlVLAVa6qVfX1IW1.uJzTh6AN9HJ4WVmtrvc8GttG5d9awmy', 'admin3@gmail.com', '2023-10-16 14:42:50', 'The owner of this website', '1697467370778wp2935215-l-death-note-wallpaper-hd.png'),
(12, 'asdf', '$2b$10$65MDvEq00pPhWkAeWaxcz.DX36Z2A/71/pV3RM3r6hyhWAsCAsm7e', '234234', '2023-10-15 14:05:48', 'asdf', ''),
(32, 'df', '$2b$10$yGBvYpEE.Xz0M1BmbYzplOL8Qvy5GGe.sVhRHCY4MdjM1kwBrQKt2', '234234@gmail.com', '2023-10-15 14:09:54', '33', ''),
(33, 'adf', '$2b$10$sATw.8xmsYO99jsk9awrXewoFDbescIcRtbjYhe/tlFh8ziCgx3um', 'asdfd', '2023-10-15 14:10:13', '', ''),
(34, 'asfdf', '$2b$10$M0fBvu5VHPOCnA/uAdu0x.nOxzwO/p4XDIpjgZFlREXKOhhOe3ddu', 'asdfdf343', '2023-10-15 14:10:25', '', ''),
(35, 'test1', '$2b$10$hGYh.Id85lyYfal3riP4C.hLfZfW9.xgpnbnXjD.fmOFcUsBbgRZ2', 'testing@gmail.com', '2023-10-16 16:45:43', 'Nothing Like anything', '1697474743127667210.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `AuthorId` (`AuthorId`);

--
-- Indexes for table `post_comment`
--
ALTER TABLE `post_comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `postId` (`postId`),
  ADD KEY `post_comment` (`AuthorId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `post_comment`
--
ALTER TABLE `post_comment`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`AuthorId`) REFERENCES `user` (`id`);

--
-- Constraints for table `post_comment`
--
ALTER TABLE `post_comment`
  ADD CONSTRAINT `post_comment` FOREIGN KEY (`AuthorId`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `post_comment_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
