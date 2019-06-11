# 2Hats
Please execute the Database script,
and run the program via localhost.
http://localhost:56833/Home/directory.html
﻿USE [master]
GO
/****** Object:  Database [2Hats]    Script Date: 11/06/2019 3:16:08 PM ******/
CREATE DATABASE [2Hats]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'2Hats', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\2Hats.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'2Hats_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\2Hats_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [2Hats] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [2Hats].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [2Hats] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [2Hats] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [2Hats] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [2Hats] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [2Hats] SET ARITHABORT OFF 
GO
ALTER DATABASE [2Hats] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [2Hats] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [2Hats] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [2Hats] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [2Hats] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [2Hats] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [2Hats] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [2Hats] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [2Hats] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [2Hats] SET  DISABLE_BROKER 
GO
ALTER DATABASE [2Hats] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [2Hats] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [2Hats] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [2Hats] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [2Hats] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [2Hats] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [2Hats] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [2Hats] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [2Hats] SET  MULTI_USER 
GO
ALTER DATABASE [2Hats] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [2Hats] SET DB_CHAINING OFF 
GO
ALTER DATABASE [2Hats] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [2Hats] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [2Hats] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [2Hats] SET QUERY_STORE = OFF
GO
USE [2Hats]
GO
/****** Object:  Table [dbo].[Directory]    Script Date: 11/06/2019 3:16:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Directory](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[CompanyName] [nvarchar](100) NULL,
	[Level] [nvarchar](50) NULL,
	[Suite] [nvarchar](50) NULL,
 CONSTRAINT [PK_Directory] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Log]    Script Date: 11/06/2019 3:16:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Log](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Directory] [nvarchar](50) NULL,
	[Field] [nvarchar](50) NULL,
	[To] [nvarchar](50) NULL,
	[From] [nvarchar](50) NULL,
	[Date] [datetime] NULL,
 CONSTRAINT [PK_Log] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Directory] ON 

INSERT [dbo].[Directory] ([ID], [CompanyName], [Level], [Suite]) VALUES (16, N'Google', N'23', N'44Da')
INSERT [dbo].[Directory] ([ID], [CompanyName], [Level], [Suite]) VALUES (17, N'SAMSUNG', N'445', N'77DD99D')
INSERT [dbo].[Directory] ([ID], [CompanyName], [Level], [Suite]) VALUES (18, N'Delaware', N'1', N'224')
SET IDENTITY_INSERT [dbo].[Directory] OFF
SET IDENTITY_INSERT [dbo].[Log] ON 

INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (1, N'All', N'All', N'', N'', CAST(N'2019-06-11T14:53:07.013' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (2, N'All', N'All', N'', N'', CAST(N'2019-06-11T14:53:17.833' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (3, N'All', N'All', N'', N'', CAST(N'2019-06-11T15:03:48.937' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (4, N'Delaware', N'All', N'', N'Delaware1224', CAST(N'2019-06-11T15:04:08.760' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (5, N'All', N'All', N'', N'', CAST(N'2019-06-11T15:04:10.153' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (6, N'Delete', N'All', N'', N'Delete133', CAST(N'2019-06-11T15:04:22.220' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (7, N'All', N'All', N'', N'', CAST(N'2019-06-11T15:04:23.597' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (8, N'Delete', N'', N'', N'', CAST(N'2019-06-11T15:04:27.860' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (9, N'Delete', N'All', N'Delete133233', N'Delete133', CAST(N'2019-06-11T15:04:33.140' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (10, N'Delete', N'All', N'Delete133233', N'Delete133', CAST(N'2019-06-11T15:04:54.260' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (11, N'All', N'All', N'', N'', CAST(N'2019-06-11T15:05:34.020' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (12, N'Delete', N'', N'', N'', CAST(N'2019-06-11T15:05:39.647' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (13, N'All', N'All', N'', N'', CAST(N'2019-06-11T15:06:23.207' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (14, N'Google', N'', N'', N'', CAST(N'2019-06-11T15:06:28.863' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (15, N'All', N'All', N'', N'', CAST(N'2019-06-11T15:06:35.710' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (16, N'Delete', N'', N'', N'', CAST(N'2019-06-11T15:06:42.857' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (17, N'All', N'All', N'', N'', CAST(N'2019-06-11T15:06:49.800' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (18, N'All', N'All', N'', N'', CAST(N'2019-06-11T15:07:57.123' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (19, N'DDS', N'', N'', N'', CAST(N'2019-06-11T15:08:04.030' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (20, N'DDS', N'All', N'DDS1445', N'DDS1445', CAST(N'2019-06-11T15:08:07.957' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (21, N'All', N'All', N'', N'', CAST(N'2019-06-11T15:08:09.103' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (22, N'Update', N'', N'', N'', CAST(N'2019-06-11T15:08:13.520' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (23, N'Update', N'All', N'Update1334233', N'Update1334233', CAST(N'2019-06-11T15:08:17.933' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (24, N'All', N'All', N'', N'', CAST(N'2019-06-11T15:08:19.360' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (25, N'Del', N'All', N'', N'Del221', CAST(N'2019-06-11T15:08:31.190' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (26, N'All', N'All', N'', N'', CAST(N'2019-06-11T15:08:32.267' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (27, N'DDS', N'All', N'Deleted', N'DDS1445', CAST(N'2019-06-11T15:08:36.850' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (28, N'All', N'All', N'', N'', CAST(N'2019-06-11T15:08:37.823' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (29, N'Update', N'All', N'Deleted', N'Update1334233', CAST(N'2019-06-11T15:08:42.450' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (30, N'All', N'All', N'', N'', CAST(N'2019-06-11T15:08:43.530' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (31, N'Del', N'', N'', N'', CAST(N'2019-06-11T15:08:45.863' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (32, N'Delete', N'All', N'Delete221', N'Delete221', CAST(N'2019-06-11T15:08:49.413' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (33, N'All', N'All', N'', N'', CAST(N'2019-06-11T15:08:50.633' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (34, N'Delete', N'All', N'Deleted', N'Delete221', CAST(N'2019-06-11T15:08:54.753' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (35, N'All', N'All', N'', N'', CAST(N'2019-06-11T15:08:55.903' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (36, N'All', N'All', N'', N'', CAST(N'2019-06-11T15:12:54.700' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (37, N'Apple', N'', N'', N'', CAST(N'2019-06-11T15:12:59.003' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (38, N'Syau', N'All', N'Syau334FF33', N'Syau334FF33', CAST(N'2019-06-11T15:13:05.367' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (39, N'All', N'All', N'', N'', CAST(N'2019-06-11T15:13:07.230' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (40, N'Syau', N'All', N'Deleted', N'Syau334FF33', CAST(N'2019-06-11T15:13:13.983' AS DateTime))
INSERT [dbo].[Log] ([ID], [Directory], [Field], [To], [From], [Date]) VALUES (41, N'All', N'All', N'', N'', CAST(N'2019-06-11T15:13:15.447' AS DateTime))
SET IDENTITY_INSERT [dbo].[Log] OFF
USE [master]
GO
ALTER DATABASE [2Hats] SET  READ_WRITE 
GO
